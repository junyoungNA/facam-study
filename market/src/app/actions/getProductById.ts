import prisma from '@/helpers/prismadb'

interface Params {
    productId ?: string;

}

export default async function getProductById(params :Params) {
    try {
        const {productId} = params;
        //상품 하나만 가져오기
        const product = await prisma.product.findUnique({
            where : {
                id : productId,
            },
            include : {
                user : true,
            }
        })
        if (!product) {
            return null;
        }
        return product;
    } catch(error : any) {
        throw new Error(error);
    }
}  