function setup(){
    let canvas = createCanvas(1200,600);
    canvas.parent('p5Canvas');
}
function draw(){
    if (mouseIsPressed){
        fill('#EB4F00');
        stroke('#00D5D7');
    }else{
        fill('#EB4FA5');
        stroke('#8BFF59');
    }
    ellipse(mouseX,mouseY,80,80);

}