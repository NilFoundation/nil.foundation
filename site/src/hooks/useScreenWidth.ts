'use client';

import { useEffect, useState } from "react"
import {  getScreenWidth } from "utils/getScreenSize"

export const useScreenWidth = () => {
    const [width, setWidth] = useState(getScreenWidth())
    useEffect(() => {
        const onResize = () => {
            if (width !== getScreenWidth()) setWidth(getScreenWidth())
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return width
}