import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrent';
import  prisma  from '@/helpers/prismadb';

export async function POST(request : Request) {

    const currentUser = await getCurrentUser();
    
    if(!currentUser) {
        return NextResponse.error();
    }
    const body = await request.json();
    console.log(body, 'postbody');

    const {
        title,
        description,
        imageSrc,
        category,
        latitude,
        longitude,
        price,
    } = body;

    Object.keys(body).forEach((value) => {
        if(!body[value]) {
            NextResponse.error();
        }
    });

    const product =  await prisma.product.create({
        data : {
            title,
            description,
            imageSrc,
            category,
            latitude,
            longitude,
            price : Number(price),
            userId : currentUser.id,
        }
    })

    return NextResponse.json(product);
}