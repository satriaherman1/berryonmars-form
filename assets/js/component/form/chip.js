const chipBox = document.querySelectorAll('.custom-chips-box');
const chipItem = []

const deleteChip = (chip) => {
    const chipListItem = document.querySelectorAll('.chip-list-item')
    
    chipListItem.forEach((item) => {
        const matches = item.textContent.includes('-')
        let id;
        let elementWithId;
       
        if(item.textContent === chip.parentElement.textContent){
            if(matches){
                id = item.textContent.split('-')[0]
                elementWithId = document.querySelector(`#${id}`)
                console.log(elementWithId)
                elementWithId.checked = false
                elementWithId.onchange()
            }   
            item.remove()
        }
    })
}

const addChip = (chipList, value) => {
    const exist = chipItem.find(item => item === value)
    if(!exist){
        chipItem.push(value)
        chipList.innerHTML += `<span class="chip-list-item">${value}<img src="assets/img/icon/close.svg" onclick="deleteChip(this)"></span>`
    }

}

chipBox.forEach((chipBox) => {
    const chipList = chipBox.querySelector('.chips-list')
    const chipsInput = chipBox.querySelectorAll('.custom-chips-input')

    chipsInput.forEach((input) => {
       
        input.addEventListener('keydown' ,function(){
               if(event.keyCode === 13 || event.keyCode === 188){
                    event.preventDefault()
                    if(this.value){
                        addChip(chipList, this.value)
                        this.value = ''
                    }
                    
                }
        })
    })

})