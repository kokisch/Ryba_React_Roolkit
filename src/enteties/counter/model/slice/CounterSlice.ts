import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CounterSchema} from "enteties/counter";
const initialState:CounterSchema = {
    value: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const {reducer: counterReducer}=counterSlice;
export const {actions: counterActions}=counterSlice;