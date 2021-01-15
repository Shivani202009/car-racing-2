var canvas = document.getElementById("Canvas")
var ctx = canvas.getContext("2d")
var car1 = "cars.jpg"
var car2 = "car2.png"
var car1x=10
var car1y=10
var car2x=10
var car2y=150
var background="tracks.jpg"

function add(){
    bg=new Image()
    bg.onload=uploadbackground
    bg.src=background

    car1img=new Image()
    car1img.onload=uploadcar1
    car1img.src=car1

    car2img=new Image()
    car2img.onload=uploadcar2
    car2img.src=car2
}



function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)

}

function uploadcar1(){
    ctx.drawImage(car1img,car1x,car1y,100,100)

}

function uploadcar2(){
    ctx.drawImage(car2img,car2x,car2y,100,100)
}

window.addEventListener("keydown",kd)

function kd(e){
var x = e.keyCode
console.log(x)
if(x==37){
    console.log("left is pressed")
    car1left()

}
if(x==38){
    console.log("up is pressed")
    car1up()
}
if(x==39){
    console.log("right is pressed")
    car1right()
}
if(x==40){
    console.log("down is presses")
    car1down()
}

if(x==65){
    console.log("left is pressed")
    car2left()

}
if(x==87){
    console.log("up is pressed")
    car2up()
}
if(x==68){
    console.log("right is pressed")
    car2right()
}
if(x==83){
    console.log("down is presses")
    car2down()
}
}

function car1down(){
    if(car1y<500){
        car1y=car1y+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}

function car1left(){
    if(car1x>0){
        car1x=car1x-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}

function car1up(){
    if(car1y>0)
        car1y=car1y-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    
}

function car1right(){
    if(car1x<700){
        car1x=car1x+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}

function car2down(){
    if(car2y<500)
    car2y=car2y+10
    uploadbackground()
    uploadcar1()
    uploadcar2()
}

function car2right(){
    if(car2x<700){
        car2x=car2x+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }

}

function car2left(){
    if(car2x>0){
        car2x=car2x-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}

function car2up(){
    if(car2y>0)
    car2y=car2y-10
    uploadbackground()
    uploadcar1()
    uploadcar2()
}
