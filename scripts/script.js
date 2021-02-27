
var backg = 'rgba(255,255,255,0)'
var image = null

function paramaters(data){
    return document.querySelector(data)
}

function setup(){
    var canvas = createCanvas(650,400)
    canvas.parent("canvass")
    image
}

function draw(){
}

function mouseDragged(){

    let type = paramaters('#pen-pencil').checked?'pencil':'eraser'
    let size = paramaters('#size').value
    let colorPen = paramaters('#colors').value

    if (type == 'pencil'){
        strokeWeight(size)
        fill(colorPen)
        stroke(colorPen)
        line(pmouseX, pmouseY, mouseX, mouseY)
    }else{
        fill(backg)
        ellipse(mouseX, mouseY, size);
    }
}

paramaters('#reset').addEventListener('click',
    () =>{
        clear()
    }
)

paramaters('#record').addEventListener('click',
    () => {
        saveCanvas(canvas, "test", "png")
    }
)

paramaters('#load').addEventListener('click',
    () => {
        loadImage('img/test.png', img => {
            image(img, 0, 0);
          });
    }
)