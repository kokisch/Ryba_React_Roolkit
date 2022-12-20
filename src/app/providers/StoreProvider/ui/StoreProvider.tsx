import React from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateScheme} from "../config/StateScheme";

interface StoreProviderProps {
    children: React.ReactNode;
}
export const StoreProvider = ({children}: StoreProviderProps) => {
    const initialState:StateScheme= {
        counter: {
            value: 0
        }
    }
    const store=createReduxStore(initialState);
    return (
            <Provider store={store}>
                {children}
            </Provider>
    );
};
