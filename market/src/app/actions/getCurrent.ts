import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export  async function getSession () {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser () {
    try {
        const session = await getSession();
        //유저의 이메일 정보 없으면 return null
        if(!session?.user?.email){
            return null;
        }
        const currentUser =  await prisma?.user.findUnique({
            where : {
                email : session.user.email
            }
        });

        if(!currentUser) {
            return null;
        }
        return currentUser;

    } catch (error) {
        return null;
    }
}