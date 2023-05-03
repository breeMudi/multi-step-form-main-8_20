const innerContent = document.querySelectorAll('.inner-content')
const nextBtn = document.querySelector('.next')
const sectionList = ['section1', 'section2m', 'section3m', 'section4m', 'section2y', 'section3y', 'section4y', 'success']
console.log(innerContent)
const random = [34, 64, 77]
console.log(innerContent[2])


// initialize forms
innerContent[0].style.display = 'block'
innerContent[1,2,3,4,5,6,7].style.display = 'none'

// add event listener for 
nextBtn.addEventListener('click', (e) => {
    const eId = e.target.parentElement.parentElement.id
    console.log(eId)
    console.log(sectionList.indexOf(eId) + 1)
})



