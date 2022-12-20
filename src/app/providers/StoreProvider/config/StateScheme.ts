import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {CombinedState} from "redux";
import {createReduxStore} from "app/providers/StoreProvider";
import {CounterSchema} from "enteties/counter";


export interface StateScheme {
    counter: CounterSchema,


    //Ассинхронные
    //loginForm?: LoginSchema
    //profile?: ProfileSchema
}
export interface ReducerManagerType {
    getReducerMap: ()=>ReducersMapObject<StateScheme>,
    reduce: (state: StateScheme, action: AnyAction)=>CombinedState<StateScheme>,
    add: (key:StateSchemaKey, reducer:Reducer)=>void,
    remove: (key:StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme>{
    reducerManager: ReducerManagerType;
}


export type StateSchemaKey = keyof StateScheme;
export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
interface ThunkExtraType {
    //api: AxiosInstance,

}
export interface ThunkType {
    extra: ThunkExtraType,
    rejectValue: string
}