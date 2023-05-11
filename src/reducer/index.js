function reducer (state, action){
    // on vérifie l'action 
    switch (action.type) {
      case "ALIAS":
        return { ...state, alias : action.payload.event.target.value };
      case "AGE":
        return { ...state, age: action.payload.event.target.value };
      case "ISADMIN": 
        return { ...state, isAdmin: !state.isAdmin };
      default:
        break;
    }
}
export { reducer };