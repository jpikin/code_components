import { useState } from "react";

import User from "./User";
import { v4 as uuid } from 'uuid'


const initUsers = [
    { id: uuid(), name: 'user1', surname: 'surn1', age: 30, work: 'work1', isEdit: false },
    { id: uuid(), name: 'user2', surname: 'surn2', age: 31, work: 'work2', isEdit: false },
    { id: uuid(), name: 'user3', surname: 'surn3', age: 32, work: 'work3', isEdit: false },
];



export default function Users() {

    const [users, setUsers] = useState(initUsers);

    const usrs = users.map(user => {
        return <User
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
            work={user.work}
            isEdit={user.isEdit}
            editUser={editUser} />
    });

    function editUser(id, field, event) {
        setUsers(users.map(user => {
            if (user.id === id) {
                user[field] = event.target.value;
            }
            return user;
        }))
    }

    return (
        <div>
            <table>
                <tbody>
                    {usrs}
                </tbody>
            </table>

        </div>
    );
}