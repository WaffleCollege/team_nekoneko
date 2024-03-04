const quizDataEsp = [
    {
      question: 'yo | estudiar',
      1: 'estudia',
      2: 'estudio',
      3: 'estudias',
      correct: 2
    },
    {
      question: 'tú | hablar',
      1: 'hablo',
      2: 'hablan',
      3: 'hablas',
      correct: 3
    },
    {
        question: 'ella | cantar',
        1: 'cantas',
        2: 'cantamos',
        3: 'canta',
        correct: 3
    },
    {
        question: 'jugar | nosotros',
        1: 'jugamos',
        2: 'jugas',
        3: 'jugáis',
        correct: 1
    },
    {
        question: 'vosotros | viajar',
        1: 'viajo',
        2: 'viajáis',
        3: 'viaja',
        correct: 2
    }
  ];

  //////////////////////////////////
  //export { quizDataEsp }
  /* 
  {
    question: '|',
    1: '',
    2: '',
    3: '',
    correct:
}


*/

//import { selectData } from './select_data.js';
//////////anim/////////////////
/*
const shape = document.querySelector(".shape");

//角度の初期状態(0°)
let angle = 0;

function drawCircle() {
    //角度が365°未満のとき
    if( angle < 365 ) {
        //角度を2°ずつ増やす
        angle += 10;
        //角度をconic-gradientの角度に代入
        shape.style.backgroundImage = `conic-gradient(black ${angle}deg, white ${angle}deg)`;
        //requestAnimationFrameを再度呼び出す
        requestAnimationFrame(drawCircle);
    } else {
        console.log("アニメーションが終了しました");
    }
}

//アニメーションを開始
requestAnimationFrame(drawCircle);
*/
/////////////////////////////////////
//今のクイズ番号
let quizNum = 0;
console.log(quizNum);
//正解数
let correctNum;
//総クイズ数
let quizDataNum = quizDataEsp.length;
console.log(quizDataNum);

//選択肢要素取得
const selectButton1 = document.getElementById('select1');
const selectButton2 = document.getElementById('select2');
const selectButton3 = document.getElementById('select3');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');

//質問文要素取得
const questionElm = document.getElementById('question');


////////////////////////////////////////
//回答と解答を取得し、正誤判定
//解答
let correct = quizDataEsp[quizNum]["correct"];
//回答
function selectedEvent(btn){
    correct = quizDataEsp[quizNum]["correct"];
    selectedValue = btn.value;
    select1.style.visibility = "hidden";
    select2.style.visibility = "hidden";
    select3.style.visibility = "hidden";
    //正解
    if(selectedValue == correct){
        //location.replace("./correct.html");
        questionElm.innerHTML = "正解";
        correctNum ++;
    //不正解
    }else{
        //location.replace("./incorrect.html");
        questionElm.innerHTML = "不正解";
    }
}


//問題をロード
function quizNumPlus(){
    if(quizNum < quizDataNum-1){
        quizNum++;
        console.log(quizNum);
        select1.style.visibility = "visible";
        select2.style.visibility = "visible";
        select3.style.visibility = "visible";
        // 選択肢を表示
        text1.innerHTML = quizDataEsp[quizNum]["1"];
        text2.innerHTML = quizDataEsp[quizNum]["2"];
        text3.innerHTML = quizDataEsp[quizNum]["3"];
        // 質問文を表示
        questionElm.innerHTML = quizDataEsp[quizNum]["question"];   
    //}else if(quizNum == quizDataNum-2){
    //    nextSelect.innerHTML = "リザルト"
    }else{
        questionElm.innerHTML = "正解数"
    }
};

/*
selectButton1.addEventListener('click',selectedEvent,false);
selectButton2.addEventListener('click',selectedEvent,false);
selectButton3.addEventListener('click',selectedEvent,false);
*/





