'use client'
import { PRODUCTS_PER_PAGE } from '@/constants';
import { useSearchParams } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import qs from 'query-string';
import Link from 'next/link';

type  PaginationLinkProps = {
    page? : number | string
    disabled ? : boolean
    active? : boolean
} & PropsWithChildren

//propsWithchildren 은 React.nodeChildren뜻함

const PaginationLink = ({
    page,
    disabled,
    active,
    children
}: PaginationLinkProps) => {
    const params = useSearchParams();
    const limit = PRODUCTS_PER_PAGE;
    const skip = page ? (Number(page) - 1) * limit : 0;

    let currentQuery = {};

    if(params) {
        currentQuery = qs.parse(params?.toString());
        //query에 들어있는 정보를 객체로 바꿔줌 qs.parse
    }
    const updatedQuery = {
        ...currentQuery,
        page : page,
        skip:skip
    }
    return (
        <Link href={{query:updatedQuery}}
            className={`p-2 text-lg
            ${active ? 'font-bold text-orange-500' : 'text-gray-500'}
            ${disabled ? 'pointer-events-none text-gray-200' : ''}
            `}>
            {children}
        </Link>
    )
}

export default PaginationLink
