import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import { deleteMember } from './userSlice';

const UserList = () => {
    const userList = useSelector((state) => state.user.member);
    const dispatch = useDispatch();
    console.log('렌더링');

    return (
        <div className='wrapper'>
            <table>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>나이</td>
                        <td>지역</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, idx) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.address}</td>
                            <td><button onClick={()=> dispatch(deleteMember(user.name))}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;