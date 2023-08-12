'use client'
import React from 'react';
import usePagination from '@lucasmogari/react-pagination';
import PaginationLink from './PaginationLink';


interface PaginationProps {
    page:number;
    totalItems: number;
    perPage : number;

}

const Pagination = ({
    page,
    totalItems,
    perPage,
} : PaginationProps) => {

    const {fromItem, toItem, getPageItem, totalPages} = usePagination({
        totalItems : totalItems,
        page:page,
        itemsPerPage : perPage,
        maxPageItmes : 5
    })

    const firstPage = 1;
    const nextPage = Math.min(page + 1, totalPages);

    const prevPage = Math.max(page - 1, firstPage);

    const arr = new Array(totalPages + 2);
    return (
        <div className='flex itmes-center justify-center gap-2 mt-4'>
            {/* Item {fromItem} - {toItem} */}
            {[...arr].map((_, i) => {
                const {page, disabled, current} = getPageItem(i);
                // page 에는 현재페이지또는 화살표 를 나타낼 previos, next를 나타냄
                // page에서 gap 은 usePagination 시 maxPageItem 설정에 초과된 숫자라면 출력
                // disabeld 현재 선택된 페이지인지 아닌지
                // cureent 현재 있는 페이지라면 true 아니라면 undefined
                if(page === 'previous') {
                    return (<PaginationLink 
                        disabled={disabled}
                        page ={prevPage}
                        key={i}>{'<'}</PaginationLink>)
                }
                if(page === 'next') {
                    return (<PaginationLink
                        disabled={disabled}
                        page ={nextPage}
                        key={i}>{'>'}</PaginationLink>)
                }
                if(page === 'gap') {
                    return (<PaginationLink 
                        key={i}>{'...'}</PaginationLink>)
                }
                return (<PaginationLink active={current} page={page} key={i}>{page}</PaginationLink>)
            })}
        </div>
    )
}

export default Pagination
