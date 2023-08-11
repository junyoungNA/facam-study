import getCurrentUser from "@/app/actions/getCurrent";
import {NextResponse} from 'next/server'

interface Params {
    productId?: string;
}

export async function POST(request:Request, {params} : {params: Params}) {
    const currentUser = await getCurrentUser(); //유저 정보 가져오기

    if(!currentUser) {
        return NextResponse.error();
    }
    const {productId} = params; //url에서 params 가졍오기

    //게시물 정보가 없거나 id가 stirng이 아니면 에러처리
    if(!productId || typeof productId !== 'string') {
        throw new Error('Invalid ID');
    }
    // 해당 유저가 좋아요를 눌렀다면 데이터베이스에 있는 데이터를, 
    //없다면 빈 배열 
    let favoriteIds = [...(currentUser.favoriteIds || [])];

    //새롭게 좋아요을 누른 게시물 id넣어주기
    favoriteIds.push(productId);
    
    const user = await prisma?.user.update({
        //유저 데이터베이스에서 유저의 id 컬럼을 찾아
        //favoriteIds 컬럼 변경
        where : {
            id : currentUser.id
        },
        data : {
            favoriteIds : favoriteIds
        }
    })
    return NextResponse.json(user);
}


export async function DELETE(request:Request, {params} : {params: Params}) {
    const currentUser = await getCurrentUser(); //유저 정보 가져오기

    if(!currentUser) {
        return NextResponse.error();
    }
    const {productId} = params; //url에서 params 가졍오기

    //게시물 정보가 없거나 id가 stirng이 아니면 에러처리
    if(!productId || typeof productId !== 'string') {
        throw new Error('Invalid ID');
    }
    // 해당 유저가 좋아요를 눌렀다면 데이터베이스에 있는 데이터를, 
    //없다면 빈 배열 
    let favoriteIds = [...(currentUser.favoriteIds || [])];

    //filter를 통해 productId 를 찾아 걸러준다
    favoriteIds = favoriteIds.filter((id) => id !== productId );

    const user = await prisma?.user.update({
        //유저 데이터베이스에서 유저의 id 컬럼을 찾아
        //favoriteIds 컬럼 변경
        where : {
            id : currentUser.id
        },
        data : {
            favoriteIds : favoriteIds
        }
    })



    return NextResponse.json(user);
}