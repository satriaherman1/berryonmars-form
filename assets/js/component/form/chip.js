const chipBox = document.querySelectorAll('.custom-chips-box');
const chipItem = []

const deleteChip = (chip) => {
    const chipListItem = document.querySelectorAll('.chip-list-item')
    chipListItem.forEach((item) => {
        if(item.textContent === chip.parentElement.textContent){
            item.remove()
        }
    })
}

chipBox.forEach((chipBox) => {
    const chipList = chipBox.querySelector('.chips-list')
    const chipsInput = chipBox.querySelectorAll('.custom-chips-input')

    chipsInput.forEach((input) => {
       
        input.addEventListener('keydown' ,function(){
            if(event.keyCode === 13 || event.keyCode === 188){
                event.preventDefault()
                if(this.value){
                    chipItem.push(this.value)
                    chipList.innerHTML += `<span class="chip-list-item">${this.value}<img src="assets/img/icon/close.svg" onclick="deleteChip(this)"></span>`
                    this.value = ''
                }
                
            }
        } )
    })

})