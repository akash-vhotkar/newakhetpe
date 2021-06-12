const userreducer = (state={}, action)=>{
    switch (action.type) {
        case "SETUSER":
            return action.data;
        default:
            return state;
    }

}
export default  userreducer;