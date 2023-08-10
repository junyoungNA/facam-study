'use client'
import React, {useState} from 'react';
import {FieldValue, FieldValues, useForm} from 'react-hook-form';
import Input from '@/app/components/Input';
const RegisterPage = () => {
    const [isLoading, setLoading] = useState(false);

    const {register, handleSubmit, formState: {
        errors,
    }} = useForm<FieldValues>({
        defaultValues : {
            name : '',
            email :'',
            password:'',
        }
    })

    return (
        <section className='grid h-[calc(100vh_-_56px)] place-items-center border-black border-2'>
            <form className='flex flex-col justify-center gap-4 min-w-[350px]'>
                <h1 className='text-2xl'>Register</h1>
                <Input 
                    id='email'
                    label='Email'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='name'
                    label='Name'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='password'
                    label='Password'
                    type='password'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </form>
        </section>
    )
}

export default RegisterPage
