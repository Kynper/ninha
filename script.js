const data = new Date()
const hora = data.getHours()
console.log(hora)

const p1 = document.getElementById("tapa1")
const p2 = document.getElementById("tapa2")
const p3 = document.getElementById("tapa3")
const p4 = document.getElementById("tapa4")
const p5 = document.getElementById("tapa5")
const a1 = document.getElementById("a1")
const a2 = document.getElementById("a2")
const a3 = document.getElementById("a3")
const a4 = document.getElementById("a4")
const a5 = document.getElementById("a5")
const i1 = document.getElementById("i1")
const i2 = document.getElementById("i2")
const i3 = document.getElementById("i3")
const i4 = document.getElementById("i4")
const i5 = document.getElementById("i5")

if (hora >= 2) {
    p1.style.width = "0"
    a1.innerHTML = "Vídeo"
    i1.src = "https://cdn-icons-png.flaticon.com/128/25/25215.png"
}
if (hora >= 8) {
    p2.style.width = "0"
    a2.innerHTML = ""
    i2.src = "https://cdn-icons-png.flaticon.com/128/25/25215.png"
}
if (hora >= 12) {
    p3.style.width = "0"
    a3.innerHTML = ""
    i3.src = "https://cdn-icons-png.flaticon.com/128/25/25215.png"
}
if (hora >= 18) {
    p4.style.width = "0"
    a4.innerHTML = ""
    i4.src = "https://cdn-icons-png.flaticon.com/128/25/25215.png"
}
if (hora >= 22) {
    p5.style.width = "0"
    a5.innerHTML = ""
    i5.src = "https://cdn-icons-png.flaticon.com/128/25/25215.png"
}

setInterval(function(){
    document.getElementById("feliz").style.color = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`
}, 1000)

let tocando = false

function play() {
    document.getElementById("audio").play()
    console.log("supostamente tocando")
    tocando = true
}

while (tocando == false) {
    play()
    console.log("tentando tocar")
}
