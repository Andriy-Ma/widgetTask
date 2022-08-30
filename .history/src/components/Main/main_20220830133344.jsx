import React,{useState} from 'react';
import styles from './main.module.css';
import ChooseForm from './ChooseForm/chooseForm';
import SelectedRoleForm from './SelectedRoleForm/selectedRoleForm';
import AgreeForm from './AgreeForm/agreeForm';

function MainBlock() {

  const [selectedRole, setSelectedRole] = useState('');
  const [showAgreeForm, setShowAgreeForm] = useState(false);
  
  return (
    <div className={styles.container}>
        {
          !selectedRole ? 
            <ChooseForm getRole={setSelectedRole}/> 
          : showAgreeForm ?
            <AgreeForm showForm={setShowAgreeForm}/>
          :
            <SelectedRoleForm 
              role={selectedRole} 
              getRole={setSelectedRole}
              showForm={setShowAgreeForm}
            />
        }
    </div>
  )
}

export default MainBlock;