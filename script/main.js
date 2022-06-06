function check(){
    

	let question1 = document.quizz.question1.value;
	let question2 = document.quizz.question2.value;
	let question3 = document.quizz.question3.value;
	let question4 = document.quizz.question4.value;
	let question5 = document.quizz.question5.value;
	let question6 = document.quizz.question6.value;
	let question7 = document.quizz.question7.value;
	let question8 = document.quizz.question8.value;
	let question9 = document.quizz.question9.value;
	let question10 = document.quizz.question10.value;

	let correct = 0;
   


	if (question1 == "Gloubi-Boulga") {
		correct++;
}
	if (question2 == "Zia et Tao") {
		correct++;
}	
	if (question3 == "Masao et Kasuo Tachibana") {
		correct++;
	}

	if(question4 =="Zachary Fox, Walter Hartford, Lazarus Slade, Niko, Shane Grosseman et Captain Kidd"){
		correct++;
	}
	
	if(question5 =="San Ku Kaï"){
		correct++;
	}

	if(question6 =="Les chats"){
		correct++;
	}

	if(question7 =="l hispanõla"){
		correct++;
	}

	if(question8 =="Snorky"){
		correct++;
	}

	if(question9 =="Cathy & Kador"){
		correct++;
	}
	if (question10 =="des ramens"){
		correct++;
	}
	
	let pictures = ["image/yeah.gif", "image/meh.gif", "image/perdu.gif"];
	let messages = ["Bravo tiens voilà ton cadeau, Clique ICI !", "c'est bien mais c'est pas fou", "t'es vraiment pas doué"];
	let score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}
    if (correct < 10){

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "ton score est de" + " " +  " " + correct + " réponse" + " correct.";
	document.getElementById("picture").src = pictures[score];
        }
    else{
        document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "ton score est de" + " " +  " " + correct + " réponse" + " correct.";
	document.getElementById("picture").src = pictures[score];
        document.querySelector('div').addEventListener('click', function() {
    location.href="cadeau.html";
});
        
    }
	}
	
