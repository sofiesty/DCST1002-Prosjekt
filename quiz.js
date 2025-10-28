function buildQuiz(){
    const output = [];
    console.log("buildQuiz")
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
  
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    resultsContainer.innerHTML = " "
    submitButton.innerHTML = "Se resultat"
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    console.log("showResults")
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;
  
    myQuestions.forEach( (currentQuestion, questionNumber) => {
 
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value; 
  
      if(userAnswer === currentQuestion.correctAnswer){
        
        numCorrect++;
   
        answerContainers[questionNumber].style.color = 'green';
      }
     
      else{
        
        answerContainers[questionNumber].style.color = 'darkred';
      } 
      
    });    
    
  
    submitButton.innerHTML = `Prøv på nytt`;
    resultsContainer.innerHTML = `${numCorrect} av ${myQuestions.length} riktige`;
  }


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
      question: "Hva er Phishing?",
      answers: {
        a: "En type programvare som krypterer filer",
        b: "En type svindel der angriperen prøver å få deg til å oppgi personlige opplysninger",
        c: "En metode for å forberede nettsikkerhet",
        d: "En lovfestet prosedyre for bankverifisering"
      },
      correctAnswer: "b"
    },
    {
      question: "Hvilket av disse er en god indikator på at en e-post kan være phishing?",
      answers: {
        a: "E-posten bruker ditt fulle navn korrekt og spesifikt",
        b: "E-posten kommer fra en intern bedriftskonto",
        c: "E-posten inneholder ingen lenker eller vedlegg",
        d: "E-posten adressen stemmer ikke overens med avsenderens visningsnavn"
      },
      correctAnswer: "d"
    },
    {
        question: "Hvilket tiltak reduserer risikoen for å bli utsatt for phishing?",
        answers: {
          a: "Bruk tofaktorautentisering og sterke passord",
          b: "Oppgi PIN-kode når noen ber om det i en e-post ",
          c: "Bruk samme passord på alle tjenester",
          d: "Deaktiver oppdateringer for programmer og apper"
        },
        correctAnswer: "a"
      }
    ];
submitButton.addEventListener("click", () => {
  if (submitButton.innerHTML === "Se resultat") {
    showResults();
  } 
  else {
        buildQuiz();
      }
  });
buildQuiz();



