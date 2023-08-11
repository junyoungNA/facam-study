'use client'
import React, {useState} from 'react'
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import  Container from '@/app/components/Container';
import Heading from '@/app/components/Heading';
import ImageUpload from '@/app/components/ImageUpload';
import { categories } from '@/app/components/categories/Categories';
import CategoryInput from '@/app/components/categories/CategoryInput';
import dynamic from 'next/dynamic';

const ProductUploadPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {register , handleSubmit, setValue, watch, formState : {
        errors,
    }, reset} = useForm<FieldValues>({
        defaultValues : {
            title : '',
            description : '',
            category : '',
            latitude: '33.5563',
            longitude: '126.79581',
            imageSrc :'',
            price:'1'
        }
    })

    const imageSrc = watch('imageSrc');
    const category = watch('category');

    const latitude = watch('latitude');
    const longitude = watch('longitude');

    //카카오맵 컴포넌트를 가져올때 dynamic import를 사용
    const KakaoMap = dynamic (() => import('../../components/KakaoMap'), {
        ssr : false //서버사이드 옵션을 끄기
    })

    const onsubmit:SubmitHandler<FieldValues> = (data) => {
        
    }

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value);
    }

    return (
        <Container>
            <div className='
                max-w-screen-lg
                mx-auto
                '>
                <form className='flex flex-col gap-8' onSubmit={handleSubmit(onsubmit)}>
                    <Heading 
                        title='Product Upload'
                        subTitle='upload your product'
                    ></Heading>
                    <ImageUpload
                        onChange={(value) => setCustomValue('imageSrc', value)}
                        value = {imageSrc}
                    />
                    <Input
                        id ='title'
                        label='Title'
                        disabled = {isLoading}
                        register = {register}
                        errors = {errors}
                        required 
                    />
                    <hr/>
                    <Input
                        id ='description'
                        label='Description'
                        disabled = {isLoading}
                        register = {register}
                        errors = {errors}
                        required 
                    />
                    <hr/>
                    <Input
                        id ='price'
                        label='Price'
                        formatPrice
                        disabled = {isLoading}
                        register = {register}
                        errors = {errors}
                        required 
                    />
                    <hr/>
                    <div 
                        className='
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-3
                            max-h-[50vh]
                            overflow-y-auto
                    '>
                        {/* category */}
                        {categories.map((item) => 
                            <div key={item.label} className='col-span-1'>
                                <CategoryInput 
                                    onClick={(category) => {setCustomValue('category', category)}}
                                    selected = {category === item.path}
                                    label = {item.label}
                                    icon = {item.icon}
                                    path = {item.path}
                                />
                            </div>
                        )}
                    </div>
                    <hr/>
                    {/* kakaoMap */}
                    <KakaoMap latitude={latitude} longitude={longitude} setCustomValue={setCustomValue} />
                    <Button label='상품 생성하기'></Button>
                </form>
                
            </div>
        </Container>
    )
}

export default ProductUploadPage
