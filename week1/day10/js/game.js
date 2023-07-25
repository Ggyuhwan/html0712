let score = 0;  //게임 점수
let time = 30;  //게임 시간
let gameInterval;// interval id

let mole = document.getElementById("mole");       //두더지
let scoreSpan = document.getElementById("score");//점수
let timeSpan = document.getElementById("time");  //시간

function randomPosition(){
    let x = Math.floor(Math.random() * 500); //500px 이내 x 위치
    let y = Math.floor(Math.random() * 500); //500px 이내 y 위치
    mole.style.left = x + "px";
     // javascript 템플릿 리터럴 (es6 부터 사용)
    mole.style.top = `${y}px`; // 작은 따옴표가 아닌 숫자1 왼쪽에 있는
}
function showMole(){//두더지가 나타나는 함수
    randomPosition();
    mole.style.display = 'block';
    setTimeout(hideMole, 1000); // 1초 뒤에 사라지도록
}
function hideMole(){mole.style.display = 'none';}
mole.addEventListener('click',function(){
    score++;
    scoreSpan.innerText = score;
    hideMole();
});

gameInterval = setInterval(showMole, 2000); //게임 시작2초마다 나타나도록

//시간 감소
let timeInterval = setInterval(function(){
    time--;
    timeSpan.innerText = time;
    if(time < 0){
        clearInterval(gameInterval); //두더지 나타남 중지
        clearInterval(timeInterval); // 시간 감소 중지
        alert(`게임오버!! 당신의 점수는 ${score} 점 입니다.`);
    }
}, 1000);//1초마다 감소되도록