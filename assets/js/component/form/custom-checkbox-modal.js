function addContentToTarget(status, target, checkboxId) {
    const checkbox = document.querySelector(checkboxId)
    const targetElement = document.querySelector(target)
    if(status){
        const modal = checkbox.parentElement.parentElement.parentElement.querySelector('.checkbox-modal')
        const select = modal.querySelector('.custom-select')
        modal.classList.add('invisible')
        const chipList = document.querySelector('.chips-list');
        addChip(chipList, `${checkboxId.replace('#' , '')} - ${select.value}`)
    }
    else{
        targetElement.innerHTML = ''
        checkbox.checked = false
        checkbox.onchange()
        
    }
}