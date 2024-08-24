const dropDownValue = document.getElementById('list')
const dropDown = document.getElementsByClassName('dropdown__list')
const listItem = Array.from(document.querySelectorAll('.dropdown__link'))

function onClickOpen() {
    dropDown[0].classList.add("dropdown__list_active")
}

dropDownValue.addEventListener('click', onClickOpen)

listItem.forEach(item => {
    item.onclick = () => {
        dropDownValue.innerHTML = item.textContent
        dropDown[0].classList.remove("dropdown__list_active")
    }
})