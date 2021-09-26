const skillCheckChange = (el, modalStatus = false) => {
    let modal
    if(modalStatus){
        modal = el.parentElement.parentElement.parentElement.querySelector('.checkbox-modal')
    }
    if(el.checked){
        el.parentElement.classList.add('checked')
        if(modalStatus){
            modal.classList.remove('invisible')
        }
        else{
            modal.classList.add('invisible')
        }
    }
    else{
        el.parentElement.classList.remove('checked')
        modal.classList.add('invisible')
    }
}