function addContentToTarget(status, target, checkboxId) {
    const checkbox = document.querySelector(checkboxId)
    const targetElement = document.querySelector(target)
    if(status){
        console.log(checkbox.parentElement)
        const modal = checkbox.parentElement.parentElement.parentElement.querySelector('.checkbox-modal')
        modal.classList.add('invisible')
    }
    else{
        targetElement.innerHTML = ''
        checkbox.checked = false
        checkbox.onchange()
        
    }
}