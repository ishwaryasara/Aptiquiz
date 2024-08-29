// Questions that will be asked
const Questions = [{
	q: "In how many different ways can the letters of the word 'LEADING' be arranged in such a way that the vowels always come together?",
	a: [{ text: "600",isCorrect: false },
	{ text: "400", isCorrect: false },
	{ text: "720", isCorrect: true },
	{ text: "670", isCorrect: false }
	]

},
{
	q: "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
	a: [{ text: "750", isCorrect: false, isSelected: false },
	{ text: "700", isCorrect: false },
	{ text: "890", isCorrect: false },
	{ text: "756", isCorrect: true }
	]

},
{
	q: "Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?",
	a: [{ text: "23800", isCorrect: false },
	{ text: "25600", isCorrect: false },
	{ text: "25200", isCorrect: true },
	{ text: "34000", isCorrect: false }
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