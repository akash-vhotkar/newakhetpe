const Card = (state=[], action)=>{
    switch (action.type) {
        case "modify":
            return action.data;
        default:
            return state;
    }
    
}

export default Card;