const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')

let choose = 1

const changeOption = () => {
    choose == 1 ? (
        option1.classList.value = 'option option-active',
        content1.classList.value = 'content content-active'
    )
    : (
        option1.classList.value = 'option',
        content1.classList.value = 'content '
    )

    choose == 2 ? (
        option2.classList.value = 'option option-active',
        content2.classList.value = 'content content-active'
    )
    : (
        option2.classList.value = 'option',
        content2.classList.value = 'content '
    )
}

option1.addEventListener('click', ()=> {
    choose = 1
    changeOption()
})

option2.addEventListener('click', ()=> {
    choose = 2
    changeOption()
})