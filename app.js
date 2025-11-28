let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    
    let i= Math.floor(Math.random()*fighters.length);
    let j= Math.floor(Math.random()*fighters.length);
    stageEl.textContent= fighters[i] + " vs "+ fighters[j];
    
})


