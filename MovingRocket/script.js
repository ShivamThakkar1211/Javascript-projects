let cont = document.querySelector(".cont");
document.addEventListener("mousemove",(e)=>{
    move(e);
})

const move= (e)=> {
    var x = e.pageX;
    var y = e.pageY;
    cont.style.left = x-100 + "px";
    cont.style.top = y-100 + "px";
}