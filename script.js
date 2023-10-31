const btn = document.getElementById("btn");
const randomColor = ()=>{
    let val = "0123456789ABCDEF";
    let cons = "#";
    for(i=0; i<6; i++){
        cons = cons+ val[(Math.floor(Math.random()*16))]
    }
    return cons;
};
function randomColorGen() {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", randomColorGen);