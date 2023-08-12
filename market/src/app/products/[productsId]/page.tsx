import getCurrentUser from '@/app/actions/getCurrent';
import getProductById from '@/app/actions/getProductById';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'
import ProductClient from './ProductClient';

interface Params {
    productId ?: string;
}

const ProductPage = async ({ params} : {params:Params} ) => {
    const product = await getProductById(params);
    const currentUser = await getCurrentUser();

    if(!product) {
        return (
            <EmptyState/>
        )
    }
    console.log(product, 'productpage');

    return (
        <ProductClient
            product = {product}
            currentUser = {currentUser}
        />
    )
}

export default ProductPage
