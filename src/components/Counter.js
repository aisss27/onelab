import React, {useState} from 'react'
import {decrement, increment, incrementByAmount} from "../redux/slices/counterSlice";
import {useDispatch, useSelector} from "react-redux";


export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0);
  const changeByAmountHandler = (e) => {
      setValue(Number(e.target.value));
    }

    const onClickHandler = () => {
        dispatch(incrementByAmount(value));
    }

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <input type="text" onChange={changeByAmountHandler}/>
                <button onClick={onClickHandler}>Inc by amount</button>
            </div>
        </div>
    )
}