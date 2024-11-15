import UserField from "./UserField";

function User({ name, surname, age, work, id, editUser }) {
    return <tr>
        <UserField
            id={id}
            text={name}
            type='name'
            editUser={editUser}
        />
        <UserField
            id={id}
            text={surname}
            type='surname'
            editUser={editUser}
        />
        <UserField
            id={id}
            text={age}
            type='age'
            editUser={editUser}
        />
        <UserField
            id={id}
            text={work}
            type='work'
            editUser={editUser}
        />
    </tr>


}

export default User;

