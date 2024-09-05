import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>현재 카운터 값은 {count}입니다.</h1>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(100))}>Amount</button>
        </div>
    );
}

export default Counter;