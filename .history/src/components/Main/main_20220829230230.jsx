import React,{useState} from 'react';
import ChooseForm from './ChooseForm/chooseForm';
import styles from './main.module.css';
import SelectedRoleForm from './SelectedRoleForm/selectedRoleForm';

function MainBlock() {

  const [selectedRole, setSelectedRole] = useState('');
  console.log(selectedRole);

  return (
    <div className={styles.container}>
        {
          !selectedRole ? <ChooseForm getRole={setSelectedRole}/> : <SelectedRoleForm role={selectedRole} getRole={setSelectedRole}/>
        }
    </div>
  )
}

export default MainBlock;