import React, { useReducer } from 'react'
import { reducer } from '../../reducer/index.js';

// on veut mettre en pplace un state qui comprendra les données d'un form

const initialState = { alias: "", age: null, isAdmin: false };

function Form() {

    // Set et initialisation du state 

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <form action="">
        <label htmlFor="alias">alias</label>
        <input
          type="text"
          id="alias"
          name="alias"
          value={state.alias}
          onChange={(e) => dispatch({ type: "ALIAS", payload: { event: e } })}
        />
        <br />

        <label htmlFor="age">age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={state.age}
          onChange={(e) => dispatch({ type: "AGE", payload: { event: e } })}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="idAdmin"
            checked={state.isAdmin}
            onChange={() => dispatch ({ type: "ISADMIN"}) }
          />
          Admin
        </label>
        <br />
      </form>

      <p>Voici Mon Alias : {state.alias}</p>
      <p>Voici Mon Age : {state.age} ans (mais je fais moins )</p>
      <p>Mon statut est admin?  : { state.isAdmin  ? "oui" : "non" } </p>
    </>
  );
}

export default Form