const initialState = {
	name: '',
	address: '',
	city: '',
	states: '',
	zipcode: 0
};



const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATES = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
const UPDATE_HOUSE = 'UPDATE_HOUSE';

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_NAME:
			return Object.assign({}, state, { name: action.payload });
		case UPDATE_ADDRESS:
			return Object.assign({}, state, { address: action.payload });
		case UPDATE_CITY:
			return Object.assign({}, state, { state: action.payload });
		case UPDATE_STATES:
			return Object.assign({}, state, { state: action.payload });
		case UPDATE_ZIPCODE:
			return Object.assign({}, state, { zipcode: action.payload });
		case UPDATE_HOUSE:
			return Object.assign({}, state, { house: action.payload });
		default:
			return state;
	}
}
export function updateName(name) {
	return {
		type: UPDATE_NAME,
		payload: name
	};
}

export function updateAddress(address) {
	return {
		type: UPDATE_ADDRESS,
		payload: address
	};
}
export function updateCity(city) {
	return {
		type: UPDATE_CITY,
		payload: city
	};
}
export function updateStates(states) {
	return {
		type: UPDATE_STATES,
		payload: states
	};
}
export function updateZipcode(zipcode) {
	return {
		type: UPDATE_ZIPCODE,
		payload: zipcode
	};
}
export function updateHouse(house) {
	return {
		type: UPDATE_HOUSE,
		payload: house
	};
}

export default reducer;
