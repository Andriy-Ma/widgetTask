import React,{useState, useEffect} from 'react';
import styles from './main.module.css';
import ChooseForm from './ChooseForm/chooseForm';
import SelectedRoleForm from './SelectedRoleForm/selectedRoleForm';
import AgreeForm from './AgreeForm/agreeForm';

function MainBlock({closePopup}) {

  const [selectedRole, setSelectedRole] = useState('');
  const [showAgreeForm, setShowAgreeForm] = useState(false);
  const [initialText, setInitialText] = useState('');

  useEffect(() => {
    fetch('https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const text = data.map(lorem => lorem.text);
      setInitialText(text[0]);
    });
  },[]);
  
  return (
    <div className={styles.container}>
        {
          !selectedRole ? 
            <ChooseForm getRole={setSelectedRole}/> 
          : showAgreeForm ?
            <AgreeForm 
              showForm={setShowAgreeForm}
              text={initialText}
              closePopup={closePopup}
            />
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