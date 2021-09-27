const customSelectField = document.querySelectorAll('.custom-select-field')
const allSelect = document.querySelectorAll('.custom-select')

const optionListClick = (opt, index) => {
    const currentSelect = customSelectField[index].querySelector('select');
    currentSelect.value = opt.textContent;
    opt.parentElement.classList.add('d-none');
    currentSelect.onchange()
}

const selectClick = (select, target = false) => {
    const currentCustomSelectList = select.parentElement.querySelector('.custom-select-list')
    currentCustomSelectList.classList.toggle('d-none')
}

const changeContentTarget = (target, self = false) => {
    const elementTarget = document.querySelector(target)
    const content = self.value.charAt(0)
    elementTarget.innerHTML = content
}

window.onload = function(){
    allSelect.forEach((select) => {
        select.innerHTML += `<div class="custom-select-arrow"></div>`
    })
}

customSelectField.forEach((field , index) => {
    const customSelect = field.querySelector('.custom-select')
    const customSelectList = field.querySelector('.custom-select-list')

    const opt = customSelect.querySelectorAll('option')
    opt.forEach((el) => {
        if(!el.disabled){
            customSelectList.innerHTML += `<li class="custom-option-list" 
                                            onclick="optionListClick(this , ${index})">${el.value}</li>`
        }
    })


})

