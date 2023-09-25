export const actionType = {
    SET_USER: 'SET_USER',
    SET_CARS: 'SET_CARS'
}
const reducer = (state, action )=>{
    console.log(action)

    switch(action.type){
        case actionType.SET_USER:
            return{
                ...state,
                user:action.user,
            };
            case actionType.SET_CARS:
                return {
                    ...state,
                    cars: action.cars
                }
            default:
                return state;

    }
}
    export default reducer;
