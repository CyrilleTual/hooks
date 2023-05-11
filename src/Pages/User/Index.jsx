import React from 'react';
import style from './user.module.css'

function User({state, reset }) {

  return (
    <div className={style.compo}>
      <h2> Component User </h2>
      <p>Voici Mon Alias : {state.alias}</p>
      <p>Voici Mon Age : {state.age} ans (mais je fais moins )</p>
      <p>Mon statut est admin? : {state.isAdmin ? "oui" : "non"} </p>
      <button onClick={reset}>Reset Form</button>
    </div>
  );
}

export default User;