const innerContent = document.querySelectorAll('.inner-content')
const nextBtn = document.querySelector('.next')
const sectionList = ['section1', 'section2m', 'section3m', 'section4m', 'section2y', 'section3y', 'section4y', 'success']


// save all clicked of a particular type in form into variables

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

//create function that checks if at least 1 click was made before clicking next
// on click....add selection...on click,,, remove selection.


// switch month and year
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

// your choice is associated with a numeric value....all possible choices are predetermined

// submit button takes you straight to final page...... 

// change step bg color


// SET TIMEOUT AND CLEAR TIMEOUT WILL BE USEFUL IN SAVING THE VALUES CHOSEN QUICKLY
