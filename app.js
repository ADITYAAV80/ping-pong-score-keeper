p1Score = document.querySelector("#p1-score")
p2Score = document.querySelector("#p2-score")
resetButton = document.querySelector("#reset-btn")
player1Button = document.querySelector("#pl1-btn")
player2Button = document.querySelector("#pl2-btn")
setScoreButton = document.querySelector("#set-score-btn")
setScoreForm = document.querySelector("#set-score-form")
p1SetLabel = document.querySelector("#p1-set")
p2SetLabel = document.querySelector("#p2-set")
scoreboard = document.querySelector("#scoreboard")

let p1Set = 0;
let p2Set = 0;

let scoreToPlayFor;

setScoreForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    scoreboard.classList.toggle("display-none")
    const selectedValue = document.querySelector('select[name="endScore"]').value;
    scoreToPlayFor = selectedValue;
})

resetButton.addEventListener("click",(e) =>{
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1SetLabel.innerText =0;
    p2SetLabel.innerText =0;
    p1Set =0;
    p2Set =0;

});

//refactoring
player1Button.addEventListener("click",(e)=>{

    let score = parseInt(p1Score.innerText);
    score+=1;
    p1Score.innerText = score;
    
    if(score==scoreToPlayFor){
        p1Set+=1
        p1SetLabel.innerText = p1Set;
        p1Score.innerText =0;
    }
    
})

player2Button.addEventListener("click",(e)=>{

    let score = parseInt(p2Score.innerText);
    score+=1;
    p2Score.innerText = score;
    if(score==scoreToPlayFor){
        p2Set+=1
        p2SetLabel.innerText = p2Set;
        p2Score.innerText =0;
    }
})


