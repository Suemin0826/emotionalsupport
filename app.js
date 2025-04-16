// 숨쉬기 기능 함수
function startBreathing() {
  const breathingCircle = document.createElement("div");
  breathingCircle.classList.add("breathing-circle");
  document.body.appendChild(breathingCircle);

  setTimeout(() => {
    breathingCircle.remove();
  }, 15000); // 15초 후 숨쉬기 종료
}

// 음성 대사 출력 함수
function playVoiceLine() {
  const audio = new Audio('voice-line.mp3');  // 목소리 파일 경로
  audio.play();
}

// 안정적인 효과 (예: 키캡 소리, 피젯 스피너 등) 함수
function playGroundingEffect() {
  const sound = new Audio('keycap-click.mp3'); // 키캡 소리 파일 경로
  sound.play();
}
