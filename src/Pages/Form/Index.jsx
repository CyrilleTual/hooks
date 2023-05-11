import React, { useReducer } from 'react'
import { reducer } from '../../reducer/index.js';
import User from "../User/Index.jsx";
import style from "./form.module.css";

// on veut mettre en pplace un state qui comprendra les données d'un form

const initialState = { alias: "", age: null, isAdmin: false };



function Form() {

    // Set et initialisation du state 
    const [state, dispatch] = useReducer(reducer, initialState);

   

    const reset = () => {
        dispatch({ type: "RESET" });
    }

    const toto = () => {
        console.log ('toto')
    }

  return (
    <>
      <form className = {style.form} action="#">
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
            onChange={() => dispatch({ type: "ISADMIN" })}
          />
          Admin
        </label>
        <br />
      </form>



      <User state={state} reset={reset} toto={toto}/>
    </>
  );
}

export default Form