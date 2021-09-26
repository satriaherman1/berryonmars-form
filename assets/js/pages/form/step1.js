const skillCheckChange = (el) => {
    if(el.checked){
        el.parentElement.classList.add('checked')
    }
    else{
        el.parentElement.classList.remove('checked')
    }
}