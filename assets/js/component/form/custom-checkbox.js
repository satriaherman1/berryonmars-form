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
      
    }
    else{
        el.parentElement.classList.remove('checked')
        if(modalStatus){
            modal.classList.add('invisible')
        }
    }
}

const addSKill = (el, modalStatus = false) => {
    let modal;
    if(modalStatus){
        modal = el.parentElement.querySelector('.add-skill-modal')
    }

    modal.classList.remove('invisible')
}