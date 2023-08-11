import React from 'react'
import {Map, MapMarker} from 'react-kakao-maps-sdk';

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
    
    const handleClick = (mouseEvent : kakao.maps.event.MouseEvent) => {
        if (detailPage) return;
        //디테일 페이지라면 setCustomValue를 내려주지않음!
        setCustomValue!('latitude', mouseEvent.latLng.getLat());
        setCustomValue!('longitude', mouseEvent.latLng.getLng());
    }

    return (
        <div>
            <Map
                center={{ lat: latitude, lng: longitude }}
                style={{ width: "100%", height: "360px" }}
                onClick={(_, mouseEvent) => handleClick(mouseEvent) }
            >
                <MapMarker position={{ lat: latitude, lng: longitude}}>
                </MapMarker>
            </Map>
        </div>
    )
}

export default KakaoMap
