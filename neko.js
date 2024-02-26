// クリックされたときに実行される関数を定義する
function playAudio() {
  // オーディオ要素を作成し、音声ファイルのパスを指定する
  const audio = new Audio("/Users/kaori.w/Downloads/Wa/waffle_foundation/omochanokuninomarch.mp3");
  // 音声を再生する
  audio.play();
}

// 'myButton'というIDを持つ要素を取得し、クリックされたときにplayAudio関数を実行するように設定する
document.getElementById('myButton').addEventListener('click', playAudio);
