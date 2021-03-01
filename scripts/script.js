
var backg = 'rgba(255,255,255,0)'
var imageLoad

//take the values of html
function paramaters(data){
    return document.querySelector(data)
}

function setup(){
    var canvas = createCanvas(650,400)
    canvas.parent("canvass")
}

//drawa and erase
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
        erase();
        ellipse(mouseX, mouseY, size);
        noErase();
    }
}

//eraser canvas
paramaters('#reset').addEventListener('click',
    () =>{
        clear()
    }
)

//save image
paramaters('#record').addEventListener('click',
    () => {
        saveCanvas(canvas, "test", "png")
    }
)

//get path of the image and load in the canvas
function pathFile(event){
    imageLoad = URL.createObjectURL(event.target.files[0]);
    loadImage(imageLoad, img => {
        image(img, 0, 0);
      })
}