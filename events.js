window.onload = function () {
	const h1 = document.querySelector("h1"),
		bigEyes = document.querySelector("#eyes"),
		funny = document.querySelector("#funny"),
		crazy = document.querySelector("#crazy"),
		confused = document.querySelector("#confused"),
		excited = document.querySelector("#excited"),
		drooling = document.querySelector("#drooling"),
		celebrating = document.querySelector("#celebrating"),
		random = document.querySelector("#random");

	random.addEventListener("click", function () {
		const types = [
			"BIG_EYES",
			"CRAZY",
			"FUNNY",
			"CONFUSED",
			"EXCITED",
			"DROOLING",
			"CELEBRATING",
		];
		const idx = Math.floor(Math.random() * types.length);
		store.dispatch({ type: `${types[idx]}` });
	});

	bigEyes.addEventListener("click", () => {
		store.dispatch({ type: "BIG_EYES" });
	});

	crazy.addEventListener("click", () => {
		store.dispatch({ type: "CRAZY" });
	});

	funny.addEventListener("click", () => {
		store.dispatch({ type: "FUNNY" });
	});

	confused.addEventListener("click", () => {
		store.dispatch({ type: "CONFUSED" });
	});

	excited.addEventListener("click", () => {
		store.dispatch({ type: "EXCITED" });
	});

	drooling.addEventListener("click", () => {
		store.dispatch({ type: "DROOLING" });
	});

	celebrating.addEventListener("click", () => {
		store.dispatch({ type: "CELEBRATING" });
	});
};
