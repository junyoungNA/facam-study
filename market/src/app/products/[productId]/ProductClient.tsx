'use client'
import ProductHead from '@/app/components/products/ProductHead';
import ProductInfo from '@/app/components/products/ProductInfo';
import { Product, User } from '@prisma/client'
import React from 'react'
import dynamic from 'next/dynamic';
import Container from '@/app/components/Container';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';

interface ProductClientProps {
    product : Product & {user : User};
    currentUser : User | null;

}

const ProductClient = ({
    product,
    currentUser
} : ProductClientProps ) => {
    const router = useRouter();
      //카카오맵 컴포넌트를 가져올때 dynamic import를 사용
    const KakaoMap = dynamic (() => import('../../components/KakaoMap'), {
        ssr : false //서버사이드 옵션을 끄기
    })

    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <ProductHead/>
                    <div
                        className='grid grid-cols-1 mt-6 md:grid-cols-2 md:gap-10'
                    >
                        <ProductInfo />
                        <div>
                            <KakaoMap   
                                detailPage  
                                latitude={product.latitude} 
                                longitude={product.longitude}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <Button label='이 유저와 채팅하기' onClick={() => router.push('/chat')}></Button>
                </div>
            </div>
        </Container>
    )
}

export default ProductClient