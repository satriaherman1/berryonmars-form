const inputPhoneBox = document.querySelectorAll('.input-phone-box')


const optionPhoneListClick = (list, index) => {
    const currentSelect = inputPhoneBox[index].querySelector('.phone-select')
    const phoneList = inputPhoneBox[index].querySelector('.custom-phone-list')
    const input = inputPhoneBox[index].querySelector('.input-phone')
    const image = list.querySelector('img').src
    currentSelect.style.backgroundImage = `url(${image})`
    input.value = list.dataset.value
    phoneList.classList.add('d-none')

}

inputPhoneBox.forEach((phoneBox , index) =>{
    const phoneList = phoneBox.querySelector('.custom-phone-list')
    
    const opt = phoneBox.querySelectorAll('option')
    const input = phoneBox.querySelector('.input-phone')
    const select = phoneBox.querySelector('.phone-select')

    window.addEventListener('load', function(){
        opt.forEach((currentOpt) => {
            if(currentOpt.selected){
                const flag = currentOpt.dataset.flag
                select.style.backgroundImage = `url(${flag})`
                input.value = currentOpt.value
            }    
        })
    })
    select.addEventListener('click', function(){
        phoneList.classList.toggle('d-none')
    })

    opt.forEach((currentOpt) => {
        phoneList.innerHTML += `<li class="custom-option-list" data-value="${currentOpt.value}" onclick="optionPhoneListClick(this , ${index})">
                                            <img src="${currentOpt.dataset.flag}"  class="d-block mx-auto" /></li>`
    })
    
    phoneBox.addEventListener('.click' , function(){
        
    })
})