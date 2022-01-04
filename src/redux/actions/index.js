export const login = () => {
	return {
		type: 'login',
	};
};
export const logout = () => {
	return {
		type: 'logout',
	};
};

export const userDetails = (details) => ({
	type: 'userDetails',
	payload: details,
});

export const addtoCart = (cartItems) => ({
	type: 'addtoCart',
	payload: cartItems,
});

export const removefromCart= (index) => ({
	type: 'removefromCart',
	payload: index,
});



