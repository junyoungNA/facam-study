import { PRODUCTS_PER_PAGE } from '@/constants';
import prisma from '@/helpers/prismadb';
import { totalmem } from 'os';

export interface ProductsParams {
    latitude? : number;
    longitude? : number;
    category? : string;
    page? : number;
    skip? : number;
}

export default async function getProducts (params : ProductsParams) {
    try {
        const {latitude, longitude, category, skip} = params;

        let query : any = {};

        //카테고리가 있다면 query.category에 category를 추가
        //해당 category url 로 이동
        if(category) {
            query.category = category;
        }
        
        if(latitude) {
            //맵 화면에서 보여진 상품 범위을 더 크게 잡기위해
            query.latitude = {
                gte : Number(latitude) - 0.01,
                let : Number(latitude) + 0.01
            }
        }

        if(longitude){
             //맵 화면에서 보여진 상품 범위를 더 크게 잡기위해
            query.longitude = {
                gte : Number(longitude) - 0.01,
                lte : Number(longitude) + 0.01,
            }
        }

        //product 게시물 몇개있는지 확인
        const totalItems = await prisma.product.count({where: query});
        const products = await prisma.product.findMany({
            where : query,
            orderBy :  {
                createdAt : 'desc'
            },
            skip : skip ? Number(skip)  : 0,
            take : PRODUCTS_PER_PAGE,
        })

        return {
            data : products,
            totalItems,
        }
    } catch (error : any) {
        throw new Error(error);
    }
}