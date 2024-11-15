import { useState } from "react";

function UserField({ text, type, id, editUser }) {

    const [isEdit, setIsEdit] = useState(false);

    return <td>
        {
            isEdit
            ? <input 
            value={text} 
            onChange={event => editUser(id, type, event)}
            onBlur={()=>setIsEdit(false)}
            />
            : <span onClick={()=>setIsEdit(true)}>{type}: {text}</span>
        }
    </td>
}

export default UserField;