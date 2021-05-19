
var backg = 'rgba(255,255,255,0)'
var imageLoad
var brushStrokes = []
var undoRedo = 1

//take the values of html
function paramaters(data){
    return document.querySelector(data)
}

function setup(){
    var canvas = createCanvas(650,400)
    canvas.parent("canvass")
    brushStrokes.push(get(0,0,650,400))
}

//draw and erase
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

//get brushStrokes
function mouseReleased(){
    brushStrokes.push(get(0,0,650,400))
}

//undo and redo
function keyPressed(){
    if(undoRedo < brushStrokes.length){
        if(key == "u"){
            clear()
            undoRedo += 1
            var l = brushStrokes.length - 1
            var i = brushStrokes[l - undoRedo] 
            image(i, 0,0)
        }
    }
    

    if(undoRedo > 0){
        if(key == "r"){
            clear()
            var l = brushStrokes.length - 1
            undoRedo -= 1
            var i = brushStrokes[l - undoRedo] 
            image(i, 0, 0)
            
        }
    }
    
    
    console.log(undoRedo)
}