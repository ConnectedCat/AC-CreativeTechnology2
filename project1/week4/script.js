let trgBTN = document.getElementById("triggerBtn")
let docBody = document.getElementById("body")
let clrInfo = document.getElementById("colorInfo")

let toggleBtn = document.getElementById("toggleBtn")
let quokkaIMG = document.getElementById("quokkaIMG")

function QuokkaToggler(){
    console.info(quokkaIMG)
    console.info(quokkaIMG.src)
    if(quokkaIMG.alt == "qute quokka num1"){
        quokkaIMG.src = "./Quokka2.jpg"
        quokkaIMG.alt = "qute quokka num2"
    }
    else {
        quokkaIMG.src = "./Quokka1.jpg"
        quokkaIMG.alt = "qute quokka num1"             
    }
}

toggleBtn.addEventListener("click", QuokkaToggler)

trgBTN.addEventListener("click", function(){
    console.info(docBody)
    let redComp = Math.round(Math.random()*255)
    let greenComp = Math.round(Math.random()*255)
    let blueComp = Math.round(Math.random()*255)
    let colorString = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")"

    docBody.style.backgroundColor = colorString
    clrInfo.innerText = colorString
})