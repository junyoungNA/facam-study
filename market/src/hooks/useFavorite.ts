'use client'
import { User } from "@prisma/client";
import axios from "axios";
import { useMemo } from "react";
import {useRouter} from 'next/navigation';
interface UseFavorite {
    productId : string;
    currentUser? : User | null
}

const useFavorite = ({productId, currentUser} : UseFavorite) => {
    const router = useRouter();

    const hasFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        //해당 게시물의 유저가 좋아요를 눌렀었는지 확인한다.
        //favoriteIds 라는 컬럼에 유저가 좋아요 눌른 게시물들의id가 들어감
        return list.includes(productId);
    } , [currentUser, productId]);


    const toggleFavorite = async (event:React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if(!currentUser) {
            return ;
        }
        try {
            let request;
            if(hasFavorite) {
                //이미 좋아요가 눌러진 상태라면 취소하기 위한 delete
                request = () => axios.delete(`/api/favorites/${productId}`)
            } else {
                //좋아요가 되어있지 않다면 추가
                request = () => axios.post(`/api/favorites/${productId}`)
            }
            await request();
            //좋아요가 데이터베이스에 반영이되면 화면에도 반영하기위해 router.refresh
            router.refresh();
        } catch(error) {
            console.log(error);
        }
    }

    return {
        hasFavorite,
        toggleFavorite
    }
}

export default useFavorite;