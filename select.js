//import { selectData } from './select_data.js';
// 選択肢を表示
text1 = document.getElementById('text1');
text2 = document.getElementById('text2');
text3 = document.getElementById('text3');
text1.innerHTML = "como"
text2.innerHTML = "comos"
text3.innerHTML = "comen"
// 質問文
//const questionElm = document.getElementById('question');
//正解
const correct = "select1";
//回答を取得し、正誤判定
function selectedEvent(){
    selectedValue = this.value
    if(selectedValue == correct){
        console.log("correct!");
    }
}
const selectButton1 = document.getElementById('select1');
const selectButton2 = document.getElementById('select2');
const selectButton3 = document.getElementById('select3');

selectButton1.addEventListener('click',selectedEvent,false);
selectButton2.addEventListener('click',selectedEvent,false);
selectButton3.addEventListener('click',selectedEvent,false);





