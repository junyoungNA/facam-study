import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export {default} from 'next-auth/middleware';

export async function middleware(req : NextRequest) {
    const session = await getToken({req, secret : process.env.JWT_SECRET});
    const pathname = req.nextUrl.pathname;
    console.log('session', session);
    console.log(req.nextUrl.pathname, 'pathname');

    //로그인 유저만 접근 가능
    if(pathname.startsWith('/user')&& !session) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    //유저는 어드민 페이지 접근 불가
    if(pathname.startsWith('/admin')&& (session?.role !=='Admin')) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    //로그인된 유저는 로그인 회원가입 페이지는 접근 불가
    if(pathname.startsWith('/auth')&& session) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
}
// export const config = {matcher : ["/admin/:path*", "user"]}