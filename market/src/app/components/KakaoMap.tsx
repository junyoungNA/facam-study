import React from 'react'

interface KakaoMapProps {
    latitude : number;
    longitude: number;
    setCustomValue ? : (id:string, value:number) => void;
    detailPage? : boolean
}

const KakaoMap = ({
    latitude,
    longitude,
    setCustomValue,
    detailPage = false
} : KakaoMapProps) => {
    return (
        <div>
        
        </div>
    )
}

export default KakaoMap
