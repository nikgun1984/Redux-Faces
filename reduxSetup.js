const INITIAL_STATE = { face: "-^__^-", color: "white" };

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "BIG_EYES":
			return { ...state, face: "ಠ⌣ಠ", color: "green" };
		case "FUNNY":
			return { ...state, face: "^._.^", color: "pink" };
		case "CRAZY":
			return { ...state, face: "(◔ڼ◔)", color: "yellow" };
		case "CONFUSED":
			return { ...state, face: "(@_@)", color: "blue" };
		case "EXCITED":
			return { ...state, face: "୧☉□☉୨", color: "red" };
		case "DROOLING":
			return { ...state, face: "(^q^)", color: "orange" };
		case "CELEBRATING":
			return { ...state, face: "＼(＾▽＾)／", color: "violet" };
		default:
			return state;
	}
}

const store = Redux.createStore(reducer);

// update using subscribe
store.subscribe(() => {
	const currentFace = store.getState().face;
	document.querySelector("h1").innerText = currentFace;
	document.body.style.backgroundColor = store.getState().color;
});
