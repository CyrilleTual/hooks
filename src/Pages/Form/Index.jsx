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
        <input
          type="number"
          id="age"
          name="age"
          value={state.age}
          onChange={(e) => dispatch({ type: "AGE", payload: { event: e } })}
        />

        <input type="submit" value="Envoyer" />
      </form>

      <p>Voici Mon Alias : {state.alias}</p>
      <p>Voici Mon Age : {state.age} ans (mais je fais moins )</p>
    </>
  );
}

export default Form