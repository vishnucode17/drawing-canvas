function loading(){
    console.log("Welcome to the canvas");
    const canvas=document.getElementById("canvas");
    const erase = document.getElementById('erase');
    const ctx=canvas.getContext("2d");
    canvas.height=window.innerHeight-145;
    canvas.width=window.innerWidth;

    let painting=false;
    let erasing=false;
    function startposition(){
        painting = true;
        erasing = false;
    }
    function stopposition(){
        painting=false;
        erasing=true;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth=5;
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(e.clientX,e.clientY);

    }
    function clear(e) {
        erasing = true;
        if (!erasing) return;
        ctx.lineWidth=100;
        ctx.strokeStyle='white';
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(e.clientX,e.clientY);
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        console.log("Erasing");
    }
    canvas.addEventListener('mousedown', startposition);
    canvas.addEventListener('mouseup', stopposition);
    canvas.addEventListener('mousemove',draw);
    erase.addEventListener('mousedown',clear);
}
window.addEventListener('load',loading);

