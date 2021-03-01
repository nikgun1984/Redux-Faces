const INITIAL_STATE = { face: "-^__^-" };

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "BIG_EYES":
			return { ...state, face: "ಠ⌣ಠ" };
		case "FUNNY":
			return { ...state, face: "^._.^" };
		case "CRAZY":
			return { ...state, face: "(◔ڼ◔)" };
		case "CONFUSED":
			return { ...state, face: "(@_@)" };
		case "EXCITED":
			return { ...state, face: "୧☉□☉୨" };
		case "DROOLING":
			return { ...state, face: "(^q^)" };
		case "CELEBRATING":
			return { ...state, face: "＼(＾▽＾)／" };
		default:
			return state;
	}
}

const store = Redux.createStore(reducer);

store.getState();
