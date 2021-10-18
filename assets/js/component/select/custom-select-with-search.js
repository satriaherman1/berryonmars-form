const customSelectSearchField = document.querySelectorAll('.custom-select-search-field')
const allSelectSearch = document.querySelectorAll('.custom-select-search')
let selectIndex;
const optionArr = []

const optionListSearchClick = (opt, index, selectId = null) => {
    const select = document.querySelector(selectId)
    if(selectId !== null){
        select.value = opt.textContent;
        select.parentElement.classList.add('d-none')
    }
    else{
        const currentSelect = customSelectSearchField[index].querySelector('select');
        currentSelect.value = opt.textContent;
    }
    opt.parentElement.classList.add('d-none');
}

const selectSearchClick = (select) => {
    const currentCustomSelectListBox = select.parentElement.querySelector('.custom-select-list-box')
    currentCustomSelectListBox.classList.toggle('d-none')
}

const search = (el) => {
    const select = el.parentElement.parentElement.parentElement.querySelector('select')
    const ul = el.parentElement.parentElement.querySelector('ul.custom-select-list')
    let match = optionArr.filter(value => new RegExp(`${el.value}`, 'i').test(value))

    select.innerHTML =''
    ul.innerHTML = ''
    match.forEach((item) => {
        select.innerHTML += `
            <option value="${item}">${item}</option>
        ` 
        ul.innerHTML += `<li class="custom-option-list" 
                        onclick="optionListSearchClick(this , ${selectIndex}), '#${ul.id}'">${item}</li>`
    })
    console.log(match)

}

window.onload = function(){
    allSelectSearch.forEach((select) => {
        select.innerHTML += `<div class="custom-select-arrow"></div>`
    })
}

customSelectSearchField.forEach((field , index) => {
    const customSelect = field.querySelector('.custom-select-search')
    const customSelectList = field.querySelector('.custom-select-list')
    const customSelectListBox = field.querySelector('.custom-select-list-box .search')
    const inputSearch = `<input type="text" class="select-search" oninput="search(this)" placeholder="search" />`
    selectIndex = index
    const opt = customSelect.querySelectorAll('option')
    const ul = `<ul class="custom-select-list" id="expertiseSelect"></ul>`
    customSelectListBox.innerHTML += inputSearch;
    opt.forEach((el) => {
        if(!el.disabled){
            optionArr.push(el.value)
            customSelectList.innerHTML += `<li class="custom-option-list" 
                                            onclick="optionListSearchClick(this , ${index})">${el.value}</li>`
            console.log(customSelectList)
        }
    })


})

