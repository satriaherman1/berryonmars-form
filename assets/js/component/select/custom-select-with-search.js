const customSelectSearchField = document.querySelectorAll('.custom-select-search-field')
const allSelectSearch = document.querySelectorAll('.custom-select-search')

const optionListSearchClick = (opt, index) => {
    const currentSelect = customSelectSearchField[index].querySelector('select');
    currentSelect.value = opt.textContent;
    opt.parentElement.classList.add('d-none');
}

const selectSearchClick = (select) => {
    const currentCustomSelectList = select.parentElement.querySelector('.custom-select-list')
    currentCustomSelectList.classList.toggle('d-none')
}

window.onload = function(){
    allSelectSearch.forEach((select) => {
        select.innerHTML += `<div class="custom-select-arrow"></div>`
    })
}

customSelectSearchField.forEach((field , index) => {
    const customSelect = field.querySelector('.custom-select-search')
    const customSelectList = field.querySelector('.custom-select-list')
    const inputSearch = `<input type="text" class="select-search" placeholder="search" />`

    customSelectList.innerHTML += inputSearch
    const opt = customSelect.querySelectorAll('option')
    opt.forEach((el) => {
        if(!el.disabled){
            customSelectList.innerHTML += `<li class="custom-option-list" 
                                            onclick="optionListSearchClick(this , ${index})">${el.value}</li>`
        }
    })


})

