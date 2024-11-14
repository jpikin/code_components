function User({ name, surname, age, id }) {
    return (
        <>
            <tr>name: {name}</tr>
            <tr>surname: {surname}</tr>
            <tr>age: {age}</tr>
            <tr>ID: {id}</tr>
        </>
    );
}

export default User;