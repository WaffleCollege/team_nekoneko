const subjectList = ["yo", "tú", "ella", "nosotros", "vosotras", "ustedes"];
const conjugationList = [
  ["VIVIR | 住む", "vivo", "vives", "vive", "vivimos", "vivís", "viven"],
  ["COMER | 食べる", "como", "comes", "come", "comemos", "coméis", "comen"],
["ESTUDIAR | 勉強する]","estudio", "estudias","estudia","estudiamos","estudiáis", "estudian"],
  ["VER | 見る", "veo", "ves",'ve', 'vemos', "veis", "ven" ],
  ["ESCUCHAR | 歌う", "escucho", "escuchas", "escucha", "escuchamos", "escucháis", "escuchan"]
];

//conjugationListに追加したら数字を一つ追加する。
//let verbNumbers = [1,2]


/*主語と動詞の部分を取得する*/
const verbName = document.getElementById("verb_name");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");
const s6 = document.getElementById("s6");
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");
const v4 = document.getElementById("v4");
const v5 = document.getElementById("v5");
const v6 = document.getElementById("v6");

let verbNumber = 0;

/*最初のスタートボタン押された時の処理*/
const startButton = document.getElementById('startButton');
const backgroundMusic = new Audio('https://cdn.glitch.global/8786df1a-f096-4829-a893-611c6d6adb1b/bgm_input.mp3?v=1709016733813');
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    document.querySelector("link[href='input.css']").href = "practice.css";
    backgroundMusic.play();
    /*時間指定で繰り返し処理する*/
    setContent();
    const interval = setInterval(setContent, 16000);
      /*繰り返したい処理ここから*/
  function setContent() {
    if (verbNumber === conjugationList.length) {
      clearInterval(interval);
      verbName.textContent = "";
      s1.textContent = "Muy bien! お疲れさまでした💫";
      s2.textContent = "";
      s3.textContent = "";
      s4.textContent = "";
      s5.textContent = "";
      s6.textContent = "";

      v1.textContent = "";
      v2.textContent = "";
      v3.textContent = "";
      v4.textContent = "";
      v6.textContent = "";
    } else {
    verbName.textContent = conjugationList[verbNumber][0];
    /*主語と動詞の表示を更新する*/
    s1.textContent = subjectList[0];
    s2.textContent = subjectList[1];
    s3.textContent = subjectList[2];
    s4.textContent = subjectList[3];
    s5.textContent = subjectList[4];
    s6.textContent = subjectList[5];

    v1.textContent = conjugationList[verbNumber][1];
    v2.textContent = conjugationList[verbNumber][2];
    v3.textContent = conjugationList[verbNumber][3];
    v4.textContent = conjugationList[verbNumber][4];
    v5.textContent = conjugationList[verbNumber][5];
    v6.textContent = conjugationList[verbNumber][6];

    verbNumber++;
  }
}
/*ここまで*/

})






/*
  s1.textContent = '';
  s2.textContent = '';
  s3.textContent = '';
  s4.textContent = '';
  s5.textContent = '';
  s6.textContent = '';

  v1.textContent = '';
  v2.textContent = '';
  v3.textContent = '';
  v4.textContent = '';
  v5.textContent = '';
  v6.textContent = '';
*/
