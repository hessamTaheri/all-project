const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos : action.payload
            }
            break;

            case "SET_ERROR":
            return {
                ...state,
                error : action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}
export default todoReducer