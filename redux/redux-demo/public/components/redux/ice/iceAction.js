import { BUY_ICE,CANCEL_ICE } from "./iceTypes"

export const buyIce=()=>{
    return {
        type: BUY_ICE
    }
}
export const cancelIce=()=>{
    return {
        type: CANCEL_ICE
    }
}