import bcrypt from 'bcryptjs';
import prisma from '@/helpers/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request : Request) {
    const body = await request.json();
    // console.log(body, 'postbody');
    const {
        email,
        name,
        password
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data : {
            email,
            hashedPassword,
            name, 
        }
    })
    // console.log(user,'postUser');
    return NextResponse.json(user);
}