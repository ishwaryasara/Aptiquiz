// Questions that will be asked
const Questions = [{
	q: "In how many ways can a group of 5 men and 2 women be made out of a total of 7 men and 3 women?",
	a: [{ text: "63",isCorrect: false },
	{ text: "45", isCorrect: false },
	{ text: "56", isCorrect: true },
	{ text: "89", isCorrect: false }
	]

},
{
	q: "How many 4-letter words with or without meaning, can be formed out of the letters of the word, 'LOGARITHMS', if repetition of letters is not allowed?",
	a: [{ text: "3478", isCorrect: false, isSelected: false },
	{ text: "3456", isCorrect: false },
	{ text: "4504", isCorrect: false },
	{ text: "5040", isCorrect: true }
	]

},
{
	q: " In how many different ways can the letters of the word 'MATHEMATICS' be arranged so that the vowels always come together?",
	a: [{ text: "120960", isCorrect: false },
	{ text: "234568", isCorrect: false },
	{ text: "90765", isCorrect: true },
	{ text: "345678", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
function exit(){
	window.location.href="../home.html"
 }