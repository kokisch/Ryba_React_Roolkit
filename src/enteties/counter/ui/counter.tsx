import React, {useCallback} from 'react';
import {useSelector} from "react-redux";
import {getNumberValue} from "enteties/counter";
import {useAppDispatch} from "shared/hoocks/useAppDispatch/useAppDispatch";
import {counterActions} from "enteties/counter";


export const Counter = () => {
    const counterValue=useSelector(getNumberValue);
    const dispatch=useAppDispatch();
    const increment=useCallback(()=>{
        dispatch(counterActions.increment());
    },[]);
    const decrement=useCallback(()=>{
        dispatch(counterActions.decrement());
    },[]);
    return (
        <div>
            <button onClick={increment}>Плюс</button>
            <div>Значение - {counterValue}</div>
            <button onClick={decrement}>Минус</button>
        </div>
    );
};
