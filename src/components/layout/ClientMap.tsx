"use client";

import { useState, useEffect, useRef } from "react";
import {Map, MapControls, type MapRef} from "@/components/ui/map";

const styles = {
    default: undefined,
    openstreetmap: "https://tiles.openfreemap.org/styles/bright",
    openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",
};

type StyleKey = keyof typeof styles;

export default function ClientMao() {
    const mapRef = useRef<MapRef>(null);
    const [style, setStyle] = useState<StyleKey>("openstreetmap");
    const selectedStyle = styles[style];
    const is3D = style === "openstreetmap3d";


    const [userLocation, setUserLocation] = useState<[number,number]>([121.967896,29.964589]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // 检查浏览器是否支持 Geolocation API
        if(!navigator.geolocation){
            console.warn("您的浏览器不支持地理定位。");
            setIsLoading(false);
            return;
        }


        // 成功获取位置的回调
        const onSuccess = (position:GeolocationPosition) =>{
            const {latitude, longitude} = position.coords;
            setUserLocation([longitude, latitude]);  // 注意：mapcn 使用的是 [经度, 纬度] 格式
            setIsLoading(false);
        }

        // 获取位置失败的回调
        const onError = (error: GeolocationPositionError) => {
            // console.error("获取位置失败:", error.message);
            setIsLoading(false);
            // 可以在这里添加提示，或保留默认位置
        }

        // 开始获取位置
        navigator.geolocation.getCurrentPosition(onSuccess,onError,{
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 100000,
        })

    }, []);// 空依赖，仅在挂载时执行

    // 2. 监听 is3D 变化，调整俯仰角
    useEffect(() => {
        mapRef.current?.easeTo({ pitch: is3D ? 60 : 0, duration: 500 });
    }, [is3D]);

    if(isLoading){
        return (
            <div className="h-100 w-full flex items-center justify-center">
                正在获取您的位置...
            </div>
            )
    }

    return (
        <div className="relative h-105 w-full">
            <Map
                ref={mapRef}
                center={userLocation}
                zoom={15}
                styles={
                    selectedStyle
                        ? { light: selectedStyle, dark: selectedStyle }
                        : undefined
                }

            >
                <MapControls
                    position="top-right"
                    showZoom
                    showCompass
                    showLocate
                    showFullscreen
                />
            </Map>
            <div className="absolute top-2 right-2 z-10">
                <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value as StyleKey)}
                    className="bg-background text-foreground rounded-md border px-2 py-1 text-sm shadow"
                >
                    <option value="default">Default (Carto)</option>
                    <option value="openstreetmap">OpenStreetMap</option>
                    <option value="openstreetmap3d">OpenStreetMap 3D</option>
                </select>
            </div>
        </div>
    );
}
