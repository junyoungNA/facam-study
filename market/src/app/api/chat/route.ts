import getCurrentUser from "@/app/actions/getCurrent";
import {NextResponse} from 'next/server';
import prisma from '@/helpers/prismadb'; 

export async function GET(request : Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error(); 
    }

    const users = await prisma.user.findMany({
        include:{
            conversations : {
                include  : {
                    messages: { 
                        include : {
                            sender: true,
                            receiver : true,
                        },
                        orderBy: {
                            createdAt:'asc' 
                        }
                    },
                    users: true,
                }
            }
        }
    })
        return NextResponse.json(users)
}


export async function POST(request : Request, response : Response) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error(); 
    }

    const body = await request.json()

    const conversation = await prisma.conversation.findFirst({
        where:{
            AND : [
                {
                    users: {
                        some: {
                            id:body.senderId
                        }
                    },
                },
                {
                    users: {
                        some: {
                            id:body.senderId
                        }
                    }  
                }
            ]
        }
    });
    if(conversation) {
        //이미 둘이 대화를 한 채팅방이 존재하다는 것 
        //메시지만 생성해주기
        try {
            const message= await prisma.message.create({
                data : {
                    text : body.text,
                    image : body.image,
                    senderId: body.senderId,
                    receiverId : body.receiverId,
                    conversationId : conversation.id
                }
            })
            return NextResponse.json(message);
        } catch(error) {
            return NextResponse.json(error); 
        }
    } else {
        // conversation 이 없는 채팅방이 없는 상태라면
        // 둘이 처음 대화하는 상황이므로 채팅방 만들기
        const newConversation = await prisma.conversation.create({
            data : {
                senderId : body.senderId,
                receiverId : body.receiverId,
                users : {
                    connect : [
                        {
                            id : body.senderId
                        },
                        {
                            id: body.receiverId
                        }
                    ]
                }
            }
        })
        
        try {
            const message= await prisma.message.create({
                data : {
                    text : body.text,
                    image : body.image,
                    senderId: body.senderId,
                    receiverId : body.receiverId,
                    conversationId : newConversation.id
                }
            })
            return NextResponse.json(message);
        } catch(error) {
            return NextResponse.json(error); 
        }
    }
}
