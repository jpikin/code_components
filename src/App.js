import { v4 as uuid } from 'uuid'
import './App.css';
import User from './components/Users';
import { useState } from 'react';
import Users from './components/Users'

// import Employee from './components/Employee';

function App() {




  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      {/* <Employee
        name='Ivan'
        surName='Baraban'
        payment='100' />
      <Employee
        name='Ogeg'
        surName='Barmaleg'
        payment='200' />
      <Employee
        name='Olga'
        surName='Barbarian'
        payment='150' /> */}

          <Users />

    </div>
  );
}

export default App;
