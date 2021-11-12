import {
	AnswerInput,
	ErrorMessage,
	MultipleAnswers,
	OnceAnswer,
} from "./components.js";

const questionAnswer = document.querySelector(".question-answer");
const isMultipleAnswer = document.querySelector(".isMultipleAnswer");

if (isMultipleAnswer.checked) {
	questionAnswer.innerHTML = MultipleAnswers();
} else {
	questionAnswer.innerHTML = OnceAnswer();
}

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("btn-add-answer")) {
		let Answers = document.querySelector(".answers");

		if (Answers) {
			if (Answers.children.length + 1 > 6) {
				if (Answers.children.length < 7) {
					Answers.innerHTML += ErrorMessage(
						"You can't put more than 6 answers",
					);
					let addNewAnswerBTN = document.querySelector(".btn-add-answer");
					addNewAnswerBTN.disabled = true;
				}

				return;
			}
			Answers.innerHTML += AnswerInput(Answers.children.length + 1);
		}
	}
});

isMultipleAnswer.addEventListener("change", () => {
	if (isMultipleAnswer.checked) {
		questionAnswer.innerHTML = MultipleAnswers();
	} else {
		questionAnswer.innerHTML = OnceAnswer();
	}
});
