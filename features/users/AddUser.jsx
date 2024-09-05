import { useDispatch, useSelector } from "react-redux"
import UserList from "./UserList"
import { useState } from "react";

const AddUser = () => {
    const userList = useSelector((state)=> state.user);
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();

    function changeHandler(e) {
        setNewUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    return(
        <>
            <div className="container">
            <h1>전체 회원 수: {userList.count}</h1>
            <label>
                이름: <input type="text" name="name" onChange={changeHandler}/>
            </label>
            <label>
                나이: <input type="number" name="age" onChange={changeHandler}/>
            </label>
            <label>
                주소: <input type="text" name="address" onChange={changeHandler}/>
            </label>
            <button onClick={()=> dispatch(addMember(newUser))}>추가</button>
        </div>
        <UserList/>
        </>
       
    )
}

export default AddUser;