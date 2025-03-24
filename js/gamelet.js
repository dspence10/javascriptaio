const ball=document.getElementById('ball');
/* document.addEventListener('keydown', handleKeyPress);
let position =0;

function handleKeyPress(e){
if(e.code==='ArrowLeft'){
    position= position-10;
}
if(e.code==='ArrowRight'){
    position = position +10;
}
if(position<0){
    position=0;
}
refresh();
} */
let position = 0;
document.addEventListener('keydown',(e)=>{
    if(e.code==='ArrowLeft'){
        position = position-10;
    }
    if(e.code==='ArrowRight'){
        position =position+10;
    }
    if(e.code==='ArrowUp'){
        console.log('ArrowUp');
        
            console.log(ball.style.top.valueOf);
            ball.style.top+=10;
            console.log(ball.style.top);
        
    }
    if(e.code==='ArrowDown'){
        if(ball.style.top>0){
            ball.style.top=+10;
        }
    }
    if(position <0){
        position = position+'px';
    }

refresh(); 
})
function refresh(){
    ball.style.left = position +'px';
}