const form =document.getElementById('form')
const nombre = document.getElementById('nombre')
const majuscule = document.getElementById('maj')
const minuscule = document.getElementById('min')
const numero = document.getElementById('num')
const caractere = document.getElementById('car')
const motdepasse = document.getElementById('motdepasse')
const btn = document.getElementById('submit')

//
const code_chiffre = arrayFromLowToHigh(48, 57)
const code_majuscule = arrayFromLowToHigh(65, 90)
const code_minuscule = arrayFromLowToHigh(97, 122)
const code_caractere = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)
    ).concat(arrayFromLowToHigh(123, 126))

function GenererLeMotdePasse(chiffre, maj, min, num, car){
    // String.fromCharCode(65)
let code = code_majuscule
   if (min) code = code.concat(code_caractere) 
   if(car) code = code.concat(code_chiffre)
   if (maj) code = code.concat(code_minuscule)
   if(num) code = code.concat(code_majuscule)
   
   const MotdePasse = []
   for (let i = 0; i< chiffre; i++) {
    const crockcode = code[Math.floor(Math.random() * code.length)]
    MotdePasse.push(String.fromCharCode(crockcode))
   }
   return MotdePasse.join("")
}

function arrayFromLowToHigh(low,high){
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
btn.addEventListener('click', e =>{
    e.preventDefault()
    const chiffre = nombre.value
    const maj = majuscule.checked
    const min = minuscule.checked
    const num = numero.checked
    const car = caractere.checked
    const valide = GenererLeMotdePasse(chiffre, maj, min, num, car)
    motdepasse.innerText = valide;
})
