'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    
    useRouter()
    return(
        <button onClick={()=>{
            router.forward()
        }}>버튼</button>
    )
}