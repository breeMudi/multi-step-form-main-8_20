const innerContent = document.querySelectorAll('.inner-content')
const nextBtn = document.querySelector('.next')
const sectionList = ['section1', 'section2m', 'section3m', 'section4m', 'section2y', 'section3y', 'section4y', 'success']
// const plan = document.querySelectorAll('.plan')

// planChoice. can be changed overtime
let planChoice = ''

// save all clicked of a particular type in form into variables

function reset () {
    document.querySelector('.error').textContent = ''
}

// funtion to change checkbox color
// function checkbox () {
//     const adOns = document.querySelector('.add-ons') 
//     adOns.addEventListener('click', (e) => {
//         console.log('XXXX')
//         if(e.target.className === 'checkbox'){
//             if(e.target.style.backgroundColor === '#ffffff'){
//                 e.target.style.backgroundColor = 'blue'}
//         }
//     })
// }

// Review
if(innerContent[2].style.display === 'block' || 
    innerContent[6].style.display === 'block'){
        console.log('XXXX')
        if(e.target.className === 'checkbox'){
            if(e.target.style.backgroundColor === '#ffffff'){
                e.target.style.backgroundColor = 'blue'}
        }
    }

    // /

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
    if(clicked === 'plan' || e.target.parentElement.parentElement.className === 'plan'){
        console.log('im here')
        planChoice = e.target.id
    }
    if(e.target.parentElement.className === 'plan'){
        console.log('im here yetzt')
        planChoice = e.target.parentElement.id
    }
    if(e.target.parentElement.parentElement.className === 'plan'){
        console.log('im here yetzt')
        planChoice = e.target.parentElement.parentElement.id
    }
})

section2y.addEventListener('click', (e) => {
    const clicked = e.target.className
    if(clicked === 'switch-btn' || clicked === 'switch-click'){
        innerContent[4].style.display = 'none'
        innerContent[1].style.display = 'block'
    }
    if(clicked === 'plan' || e.target.parentElement.parentElement.className === 'plan'){
        console.log('im here')
        planChoice = e.target.id
    }
    if(e.target.parentElement.className === 'plan'){
        console.log('im here yetzt')
        planChoice = e.target.parentElement.id
    }
    if(e.target.parentElement.parentElement.className === 'plan'){
        console.log('im here yetzt')
        planChoice = e.target.parentElement.parentElement.id
    }
    console.log(planChoice)
})

// next and back button ====> CONVERT TO A FUNCTION
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
// QUESTION....HOW MANY CHOICES DOES THE CUSTOMER HAVE PER FORM PAGE
// ANSWER - On page2 there are 3 plan choices each and only one choice can be made === DONE
//          On page3 there are 3 ad-ons and any quantity can be chosen >> SCAN THE PAGE FOR TICKED BOX
// Page 4 only shows the choices made
// But what is the difference between a checked and and un-checked Ad-on
// MEANING - if he choses an option on page 2. a value should be stored upon clicking next
// if he unclicks. the value is reset to nothing chosen. Remember, only one can be chosen at a time..therefore, older choices are popped.
// better-still. once one is clicked. it cannot be undone, else you go back to previous page




// however, for the checkbox ad-on choices, the boxes clicked are saved and if re-clicked , the choice is popped/removed from the list



// submit button takes you straight to final page...... 

// change step bg color


// SET TIMEOUT AND CLEAR TIMEOUT WILL BE USEFUL IN SAVING THE VALUES CHOSEN QUICKLY
