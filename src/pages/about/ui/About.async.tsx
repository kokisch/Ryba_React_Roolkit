import {lazy} from "react";
// @ts-ignore
export const AboutAsync = lazy(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve (import("./About")),1000)
    }).then(res=>res);

})