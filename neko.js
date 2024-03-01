// // クリックされたときに実行される関数を定義する
// function playAudio() {
//   // オーディオ要素を作成し、音声ファイルのパスを指定する
//   const audio = new Audio("https://amachamusic.chagasi.com/mp3/omochanokuninomarch.mp3");
//   // 音声を再生する
//   audio.play();
// }

// // 'myButton'というIDを持つ要素を取得し、クリックされたときにplayAudio関数を実行するように設定する
// document.getElementById('myButton').addEventListener('click', playAudio);


// // グローバル変数としてオーディオ要素を宣言
// let audio;

// // 音声を再生する関数
// function playAudio() {
//   // もしaudioが定義されていない場合（初回クリックなど）、オーディオ要素を作成し音声ファイルのパスを指定する
//   if (!audio) {
//     audio = new Audio("https://amachamusic.chagasi.com/mp3/omochanokuninomarch.mp3");
//     audio.play();
//   } else {
//     // もし既にオーディオ要素が存在する場合、再生状態に応じて再生を切り替える
//     if (audio.paused) {
//       audio.play(); // 再生中でない場合、再生を開始する
//     } else {
//       audio.pause(); // 再生中の場合、一時停止する
//     }
//   }
// }

// // 'myButton'というIDを持つ要素を取得し、クリックされたときにplayAudio関数を実行するように設定する
// document.getElementById('myButton').addEventListener('click', playAudio);


// グローバル変数としてオーディオ要素を宣言
let audio;

// 音声を再生する関数
function playAudio() {
  // もしaudioが定義されていない場合（初回クリックなど）、オーディオ要素を作成し音声ファイルのパスを指定する
  if (!audio) {
    audio = new Audio("https://amachamusic.chagasi.com/mp3/omochanokuninomarch.mp3");
    audio.play();
  } else {
    // もし既にオーディオ要素が存在する場合、再生状態に応じて再生を切り替える
    if (audio.paused) {
      audio.play(); // 再生中でない場合、再生を開始する
    } else {
      audio.pause(); // 再生中の場合、一時停止する
    }
  }
}

// 'myButton'というIDを持つ要素を取得し、クリックされたときにplayAudio関数を実行するように設定する
document.getElementById('myButton').addEventListener('click', playAudio);

// 'myButton2'というIDを持つ要素を取得し、クリックされたときに音楽の停止/再開を切り替える関数を実行するように設定する
document.getElementById('myButton2').addEventListener('click', function() {
  if (audio) {
    if (audio.paused) {
      audio.play(); // 再生中でない場合、再生を開始する
      this.value = "ストップ"; // ボタンのラベルを "ストップ" に変更
    } else {
      audio.pause(); // 再生中の場合、一時停止する
      this.value = "再開"; // ボタンのラベルを "再開" に変更
    }
  }
});
