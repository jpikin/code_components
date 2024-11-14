import { useState } from "react";

import User from "./User";
import { v4 as uuid } from 'uuid'


const initUsers = [
    { id: uuid(), name: 'user1', surname: 'surn1', age: 30 },
    { id: uuid(), name: 'user2', surname: 'surn2', age: 31 },
    { id: uuid(), name: 'user3', surname: 'surn3', age: 32 },
];



export default function Users() {

    const [usr, setUsr] = useState(initUsers);

    const users = usr.map(user => {
        return <User
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age} />
    });

    return (
        <>
            {users}
        </>
    );
}