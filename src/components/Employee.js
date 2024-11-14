function Employee({name, surName, payment}) {
    return ( 
        <div style={{border: '1px solid black', width:'200px'}}>
            <p>{name}</p>
            <p>{surName}</p>
            <p>{payment}</p>
        </div>
     );
}

export default Employee;