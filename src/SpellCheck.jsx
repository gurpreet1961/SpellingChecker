import React, { useState } from "react";

const customDictionary = {
	teh: "the",
	wrok: "work",
	fot: "for",
	exampl: "example",
};

const SpellCheckApp = () => {
	const [inputText, setInputText] = useState("");
	const [suggestions, setSuggestions] = useState("");

	const handleInputChange = (e) => {
		const text = e.target.value;
		setInputText(text);
		const words = text.split(" ");
		const correctedWords = words.map((word) => {
			const correctedWord = customDictionary[word.toLowerCase()];
			return correctedWord || word;
		});

		const correctedText = correctedWords.join(" ");

		const firstCorrection = correctedWords.find(
			(word, index) => word !== words[index]
		);
		setSuggestions(firstCorrection || "");
	};

	return (
		<div>
			<h1>Spell Check and Auto-Correction</h1>
			<textarea
				value={inputText}
				onChange={handleInputChange}
				placeholder="Enter text..."
				rows={5}
				cols={40}
			/>
			{suggestions && (
				<p>
					Did you mean: <strong>{suggestions}</strong>?
				</p>
			)}
		</div>
	);
};

export default SpellCheckApp;
