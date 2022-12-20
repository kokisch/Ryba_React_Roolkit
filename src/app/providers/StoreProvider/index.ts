import {StoreProvider} from "app/providers/StoreProvider/ui/StoreProvider";
import { createReduxStore } from "./config/store";
import {StateScheme, ReduxStoreWithManager, AppDispatchType} from "app/providers/StoreProvider/config/StateScheme";

export { StoreProvider, createReduxStore, StateScheme, ReduxStoreWithManager, AppDispatchType }