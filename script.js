const $ = document
const bmi = $.getElementById("bmi")
const descText = $.getElementById("desc")
const form = $.querySelector("form")

function calculate(event){
    event.preventDefault()
    const weight = parseFloat(form.weight.value)
    const height = parseFloat(form.height.value)
    const bmiResult = weight / (height /100) ** 2

    bmi.textContent = bmiResult.toFixed(2)
    const desc = setColor(bmiResult)
    descText.innerHTML = 'You are <strong>'+ desc +'</strong>'
    bmi.className = desc
    
}

function setColor(bmi){
    if(bmi < 18.5){
        return "underweight";
    }else if(bmi < 25){
        return "healthy";
    }else if(bmi < 30) {
        return "overweight";
    }else{
        return "obese";
    }
}
form.addEventListener("submit", calculate)