function reducer (state, action){
    // on vérifie l'action 
    switch (action.type) {
      case "ALIAS":
        return { ...state, alias: action.payload.event.target.value };
      case "AGE":
        return { ...state, age: action.payload.event.target.value };
      case "ISADMIN":
        return { ...state, isAdmin: !state.isAdmin };
      case "RESET":
        console.log ("ici")
        return { ...state, alias: "", age: null, isAdmin: false };
      default:
        break;
    }
}
export { reducer };