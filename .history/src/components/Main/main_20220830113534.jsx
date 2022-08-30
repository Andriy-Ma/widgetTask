import React,{useState} from 'react';
import ChooseForm from './ChooseForm/chooseForm';
import styles from './main.module.css';
import SelectedRoleForm from './SelectedRoleForm/selectedRoleForm';

function MainBlock() {

  const [selectedRole, setSelectedRole] = useState('');
  async function text () {
    const res = await fetch('https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource');
    const ready = await res.json();
    const lol = ready.map(lol => lol.text);
    console.log(lol[0]);
    return lol[0];
  };

  const pok = text();

  return (
    <div className={styles.container}>
        {
          !selectedRole ? <ChooseForm getRole={setSelectedRole} text={pok}/> : <SelectedRoleForm role={selectedRole} getRole={setSelectedRole}/>
        }
    </div>
  )
}

export default MainBlock;