const innerContent = document.querySelectorAll('.inner-content')
const nextBtn = document.querySelector('.next')
const sectionList = ['section1', 'section2m', 'section3m', 'section4m', 'section2y', 'section3y', 'section4y', 'success']


// save all clicked of a particular type in form into variables
// form class === form-input

function reset () {
    document.querySelector('.error').textContent = ''
}

// create a function that checks if input is empty
function inputCheck () {
    reset()
    if(document.querySelector('#username').value === ''){
        document.querySelector('#error1').textContent = 'This field is required'}
    if(document.querySelector('#email').value === ''){
        document.querySelector('#error2').textContent = 'This field is required'}
    if(document.querySelector('#phone').value === ''){
        document.querySelector('#error3').textContent = 'This field is required'}
}



const section2m = document.querySelector('#section2m')
const section2y = document.querySelector('#section2y')

section2m.addEventListener('click', (e) => {
    const clicked = e.target.className
    if(clicked === 'switch-btn' || clicked === 'switch-click'){
        innerContent[1].style.display = 'none'
        innerContent[4].style.display = 'block'
    }
})

section2y.addEventListener('click', (e) => {
    const clicked = e.target.className
    if(clicked === 'switch-btn' || clicked === 'switch-click'){
        innerContent[4].style.display = 'none'
        innerContent[1].style.display = 'block'
    }
})

// next and back button
addEventListener('click', (e) => {
    console.log(e.target.className)
    if(e.target.className === 'next'){
        const eId = e.target.parentElement.parentElement.id
        const currentId = sectionList.indexOf(eId)
        inputCheck()
        innerContent[currentId].style.display = 'none'
        innerContent[currentId + 1].style.display = 'block'
        
    }
    if(e.target.className === 'back'){
        const e2Id = e.target.parentElement.parentElement.id
        const currentId = sectionList.indexOf(e2Id)
        innerContent[currentId].style.display = 'none'
        innerContent[currentId - 1].style.display = 'block'
    }
})

// change step bg color
