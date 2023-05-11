function reducer (state, action){

    

    // on vérifie l'action 
    switch (action.type) {
      case "ALIAS":
        return { alias: action.payload.event.target.value };
      case "AGE":
        return { age: action.payload.event.target.value };
      default:
        break;
    }




}

export { reducer };