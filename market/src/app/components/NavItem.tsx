import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavItem = ({mobile} : {mobile?: boolean} ) => {
    const session = useSession();
    return (
        <ul className={`text-md justify-center flex gap-4 item-center ${mobile && "flex-col h-full" } `}>
            <li className='py-2 text-center border-b-4 cursor-pointer'><Link href='/a'>admin</Link></li>
            <li className='py-2 text-center border-b-4 cursor-pointer'><Link href='/a'>User</Link></li>
            {session ?      
            <li className='py-2 text-center border-b-4 cursor-pointer'><button>Signout</button></li>
            :
            <li className='py-2 text-center border-b-4 cursor-pointer'><button onClick={() => signIn() }>Signin</button></li>
            }
        </ul>
    )
}

export default NavItem
