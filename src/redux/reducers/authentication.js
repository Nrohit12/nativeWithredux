const authentication = (state = 'LoggedOut', action) => {
	switch (action.type) {
		case 'login':
			return 'LoggedIn';
		case 'logout':
			return 'LoggedOut';
		default:
			return state;
	}
};
export default authentication;
