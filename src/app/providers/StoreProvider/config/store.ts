import {configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {StateScheme} from "./StateScheme";
import {counterReducer} from "enteties/counter";
import {createReducerManager} from "app/providers/StoreProvider/config/ReducerManager";
import {CombinedState} from "redux";


export const createReduxStore = (initialState: StateScheme)=>{
    const rooReducer: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
    }

    const reducerManager = createReducerManager(rooReducer);


    const store= configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
//        devTools: __IS_DEV__,
        preloadedState: initialState,
        //middleware: getDefaultMiddleware => getDefaultMiddleware({
       //    thunk: {
        //        extraArgument: {
        //            api: $api
       //         }
       //     }
       // })

    })
    // @ts-ignore
    store.reducerManager=reducerManager;
    return store;
}