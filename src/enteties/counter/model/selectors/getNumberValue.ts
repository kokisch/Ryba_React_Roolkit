import {StateScheme} from "app/providers/StoreProvider";

export const getNumberValue=(state: StateScheme)=>{
    return state.counter.value
}