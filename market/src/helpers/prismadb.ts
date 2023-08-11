import { PrismaClient } from "@prisma/client";
//prisma 클라이언트를 재사용하기 위한 파일
//next-auth adapter와 prisma 접근할때 사용

declare global {
    var prisma : PrismaClient | undefined;
}

const  client = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client