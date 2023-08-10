'use client'
import { signIn, useSession , signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavItem = ({mobile} : {mobile?: boolean} ) => {
    const {data : session, status} = useSession();
    console.log(session, status);
    return (
        <ul className={`text-md justify-center flex gap-4 item-center ${mobile && "flex-col h-full" } `}>
            <li className='py-2 text-center border-b-4 curso -pointer'><Link href='/admin'>admin</Link></li>
            <li className='py-2 text-center border-b-4 cursor-pointer'><Link href='/user'>User</Link></li>
            {session?.user  
                ?      
            <li className='py-2 text-center border-b-4 cursor-pointer'><button onClick={() => signOut()}>Signout</button></li>
            :
            <li className='py-2 text-center border-b-4 cursor-pointer'><button onClick={(e) => signIn()}>Signin</button>
            </li>
            }
        </ul>
    )
}

export default NavItem
