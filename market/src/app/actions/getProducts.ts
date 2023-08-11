import prisma from '@/helpers/prismadb';

export interface ProductsParams {
    latitude? : number;
    longitude? : number;
    category? : string;
}

export default async function getProducts (params : ProductsParams) {
    try {
        const {latitude, longitude, category} = params;

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
        const products = await prisma.product.findMany({
            where : query,
            orderBy :  {
                createdAt : 'desc'
            }
        })

        return {
            data : products
        }
    } catch (error : any) {
        throw new Error(error);
    }
}