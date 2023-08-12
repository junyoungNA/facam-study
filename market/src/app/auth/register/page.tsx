'use client'
import React, {useState} from 'react';
import { FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterPage = () => {
    const [isLoading, seIstLoading] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, formState: {
        errors,
    }} = useForm<FieldValues>({
        defaultValues : {
            name : '',
            email :'',
            password:'',
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = async (body) => {
        seIstLoading(true);
        try {
            const res = await axios.post('/api/register',body);
            router.push('/auth/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='grid h-[calc(100vh_-_56px)] place-items-center'>
            <form className='flex flex-col justify-center gap-4 min-w-[350px]' onSubmit={handleSubmit(onSubmit)}>
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
                    errors={errors}
                    register={register}
                    required
                />
                <Button label='Register'></Button>
            </form>
            <div className='text-center'>
                <p className='text-gray-400'>
                    Alreay a member? {" "}
                        <Link href='/auth/login' className='text-black hover:underline'>
                            Login
                        </Link>
                    
                </p>
            </div>
        </section>
    )
}

export default RegisterPage
