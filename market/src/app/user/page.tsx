import React from 'react'
import getCurrentUser from '../actions/getCurrent';

const UserPage = async () => {

    //next-auth 제공해주는 getSession 함수
    //비동기로 동작
    //[...nextauth]정의된 option을 인자로 전달해줘야함
    const currentUserData  = await getCurrentUser();
    return (
        <div>
            로그인된 유저만 볼 수 있는 페이지입니다.
        </div>
    )
}

export default UserPage
