// Questions that will be asked
const Questions = [{
	q: "A milk vendor has 2 cans of milk. The first contains 25% water and the rest milk. The second contains 50% water. How much milk should he mix to milk is 3 : 5?",
	a: [{ text: "9 litres, 6litres",isCorrect: false },
	{ text: "8 litres, 4 litres", isCorrect: false },
	{ text: "6 litres, 6 litres", isCorrect: true },
	{ text: "9 litres, 7 litres", isCorrect: false }
	]

},
{
	q: "In what ratio must a grocer mix two varieties of pulses costing Rs. 15 and Rs. 20 per kg respectively so as to get a mixture worth Rs. 16.50 kg?",
	a: [{ text: "12:8", isCorrect: false, isSelected: false },
	{ text: "11:7", isCorrect: false },
	{ text: "6:9", isCorrect: false },
	{ text: "7 : 3", isCorrect: true }
	]

},
{
	q: "How many kilogram of sugar costing Rs. 9 per kg must be mixed with 27 kg of sugar costing Rs. 7 per kg so that there may be a gain of 10% by selling the mixture at Rs. 9.24 per kg? ",
	a: [{ text: "58 kg", isCorrect: false },
	{ text: "45 kg", isCorrect: false },
	{ text: "63 kg", isCorrect: true },
	{ text: "78 kg", isCorrect: false }
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