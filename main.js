const steps = document.querySelector(".step")
// const stp_btn =steps.getAttribute('button')

steps.addEventListener('click', (e) => {
    if(e.target.className === 'step' ){
        alert('i have been clicked')
    }
    // alert('i have been clicked')
})