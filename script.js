let currentQuestions = [];

function shuffle(array){

  for(let i=array.length-1;i>0;i--){

    const j=Math.floor(Math.random()*(i+1));

    [array[i],array[j]]=[array[j],array[i]];
  }

  return array;
}

function toggleTheme(){

  document.body.classList.toggle("light-mode");
}

function startQuiz(){

  const subject=document.getElementById("subjectSelect").value;

  const order=document.getElementById("orderSelect").value;

  const shuffleChoices=document.getElementById("shuffleChoices").checked;

  currentQuestions=[];

  if(subject==="all"){

    currentQuestions=[...questions];

  }else{

    currentQuestions=questions.filter(q=>q.subject===subject);
  }

  if(order==="random"){

    shuffle(currentQuestions);
  }

  if(shuffleChoices){

    currentQuestions.forEach(q=>{

      q.options=shuffle([...q.options]);
    });
  }

  renderQuiz();
}

function renderQuiz(){

  const container=document.getElementById("quizContainer");

  container.innerHTML="";

  currentQuestions.forEach((q,index)=>{

    const card=document.createElement("div");

    card.className="question-card";

    card.innerHTML=`

      <div class="question-title">
        ${index+1}. ${q.question}
      </div>

      ${q.options.map(option=>`

        <label class="option">

          <input type="radio" name="q${index}" value="${option}">

          ${option}

        </label>

      `).join("")}

    `;

    container.appendChild(card);
  });

  document.getElementById("submitBtn").style.display="inline-block";

  document.getElementById("result").innerHTML="";
}

function submitQuiz(){

  let score=0;

  currentQuestions.forEach((q,index)=>{

    const selected=document.querySelector(`input[name="q${index}"]:checked`);

    const options=document.querySelectorAll(`input[name="q${index}"]`);

    options.forEach(opt=>{

      const label=opt.parentElement;

      if(opt.value===q.answer){

        label.classList.add("correct");
      }

      if(selected && opt.value===selected.value && selected.value!==q.answer){

        label.classList.add("wrong");
      }
    });

    const card=document.querySelectorAll(".question-card")[index];

    const explanation=document.createElement("div");

    explanation.className="explanation";

    if(selected && selected.value===q.answer){

      score++;

      explanation.innerHTML=`
        ✅ Correct <br><br>
        ${q.explanation}
      `;

      document.getElementById("correctSound").play();

    }else{

      explanation.innerHTML=`
        ❌ Wrong <br><br>
        ${q.explanation}
      `;

      document.getElementById("wrongSound").play();
    }

    card.appendChild(explanation);
  });

  const percent=((score/currentQuestions.length)*100).toFixed(1);

  document.getElementById("result").innerHTML=`

    🎯 Score: ${score}/${currentQuestions.length}
    <br>
    📊 ${percent}%

  `;
}