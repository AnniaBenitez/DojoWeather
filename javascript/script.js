const ciudades = document.querySelectorAll(".ciudad")
const accept_btn = document.querySelector(".blue_btn")
const temperatura_select = document.getElementById("temperatura")
const temp_max = [24,27,21,26]
const temp_min = [18,19,16,21]

ciudades.forEach((ciudad) => {
    ciudad.addEventListener("click", ()=>{
        alert("Cargando informe meteorológico…")
    })
})

accept_btn.addEventListener("click", ()=>{
    document.querySelector(".cookie").remove()
})

temperatura_select.addEventListener("change", ()=>{
    if(temperatura_select.value == "celcius"){
        for(let i=0; i<temp_max.length; i++){
            document.querySelectorAll(".max")[i].innerHTML = temp_max[i] + "°"
            document.querySelectorAll(".min")[i].innerHTML = temp_min[i] + "°"
        }        
    }
    else if(temperatura_select.value == "farenheit"){
        for(let i=0; i<temp_max.length; i++){
            document.querySelectorAll(".max")[i].innerHTML = Math.round(parseFloat(temp_max[i])* 1.8 + 32) + "°"
            document.querySelectorAll(".min")[i].innerHTML = Math.round(parseFloat(temp_min[i])* 1.8 + 32) + "°"
        }    
    }
    else{
        for(let i=0; i<temp_max.length; i++){
            document.querySelectorAll(".max")[i].innerHTML = Math.round(parseFloat(temp_max[i]) + 273.15) + "°"
            document.querySelectorAll(".min")[i].innerHTML = Math.round(parseFloat(temp_min[i]) + 273.15) + "°"
        }  
    }
})