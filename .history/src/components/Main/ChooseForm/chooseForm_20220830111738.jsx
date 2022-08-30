import React from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from '../img/borrower.svg';
import {ReactComponent as Lender} from '../img/lender.svg';
import {ReactComponent as Close} from '../img/close.svg';

const roles = ['Borrower', 'Lender'];

function ChooseForm({getRole}) {

  async function text () {
    const res = await fetch('https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource');
    const ready = await res.json();
    console.log(ready.map(lol => lol.text));
    return ready;
  };

  /*fetch('https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });*/

  text();

  return (
    <>
    <div className={styles.form}>
      <div>
        <p className={styles.mainText}>Choose your role</p>
        <p className={styles.underText}>Please, choose your role in service.</p>
      </div>
      <div className={styles.buttonsChooseForm}>
      {
        roles.map(role => 
            <div className={styles.role} key={role} onClick={() => getRole(role)}>
              {role === 'Borrower' ? <Borrower/> : <Lender/>}
              <p className={styles.buttonText}>{role}</p>
            </div>
        )
      }
      </div>
    </div>
    <div className={styles.agreeForm}>
      <Close className={styles.closeButton}/>
      <div>
        <p className={styles.mainText}>Terms & Conditions</p>
        <p className={styles.underText}>You should obliged to apply the Terms & Conditions <p> to use the service.</p></p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis. Fermentum dui faucibus in ornare quam. Ornare suspendisse sed nisi lacus. Posuere lorem ipsum dolor sit. Sit amet massa vitae tortor condimentum lacinia quis vel. Volutpat consequat mauris nunc congue. Purus in mollis nunc sed. Quam viverra orci sagittis eu volutpat. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Orci eu lobortis elementum nibh.</p><p>Turpis massa tincidunt dui ut. Etiam sit amet nisl purus in mollis. Id interdum velit laoreet id donec ultrices tincidunt. Tristique nulla aliquet enim tortor at auctor urna. Massa sed elementum tempus egestas sed. Ipsum consequat nisl vel pretium lectus. Velit aliquet sagittis id consectetur purus. Est velit egestas dui id ornare arcu odio ut sem. Elit ut aliquam purus sit amet. Sed sed risus pretium quam vulputate dignissim suspendisse in. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Tincidunt augue interdum velit euismod in pellentesque massa.</p><ul><li>li1</li><li>li2</li><li>li3</li><li>hello world</li></ul><p>Quis eleifend quam adipiscing vitae proin sagittis. Nunc sed id semper risus in hendrerit. Et ligula ullamcorper malesuada proin libero nunc. Augue mauris augue neque gravida in. Tincidunt eget nullam non nisi est sit amet facilisis. Ut sem viverra aliquet eget sit amet tellus cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Sagittis purus sit amet volutpat consequat mauris nunc. Purus in massa tempor nec feugiat nisl. Diam maecenas sed enim ut sem. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Et egestas quis ipsum suspendisse.</p><p>Varius vel pharetra vel turpis nunc. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Quis commodo odio aenean sed adipiscing diam. Turpis tincidunt id aliquet risus feugiat in ante metus. Aliquam ut porttitor leo a diam sollicitudin tempor. Ipsum suspendisse ultrices gravida dictum fusce ut. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Semper viverra nam libero justo laoreet sit amet cursus. Felis eget velit aliquet sagittis id consectetur purus ut. Sed vulputate mi sit amet mauris commodo quis. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Sit amet commodo nulla facilisi.</p><p>Risus ultricies tristique nulla aliquet. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Quam quisque id diam vel quam elementum. Augue eget arcu dictum varius. Augue ut lectus arcu bibendum at. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Elit pellentesque habitant morbi tristique senectus et. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Commodo nulla facilisi nullam vehicula.</p><p>Cras tincidunt lobortis feugiat vivamus at augue. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Sit amet mattis vulputate enim nulla aliquet porttitor. Sem nulla pharetra diam sit amet nisl suscipit. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Eu turpis egestas pretium aenean pharetra magna ac placerat. Scelerisque in dictum non consectetur. Sit amet porttitor eget dolor. Id consectetur purus ut faucibus pulvinar elementum. Scelerisque purus semper eget duis. Risus sed vulputate odio ut enim blandit. Id ornare arcu odio ut sem nulla pharetra. Diam quam nulla porttitor massa id. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Sit amet risus nullam eget felis eget nunc. Quis eleifend quam adipiscing vitae.</p><p><strong>&nbsp;</strong></p>
      </div>
    </div>
    </>
  )
}

export default ChooseForm;