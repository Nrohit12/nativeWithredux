const initialState = {
	details: {},
	cartItems: []
}

const userDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'userDetails':
			return {
				...state,
				details: action.payload
			};
		case 'addtoCart': 
			return {
				...state, cartItems: [...state.cartItems, action.payload]
			}
		case 'removefromCart': 
			return {
				...state, cartItems: state.cartItems.splice(action.payload,1)
			}
		
		default:
			return state;
	}
};

export default userDetailsReducer;
