
const listTabs = Array.from(document.querySelectorAll('.tab'))
const listTabContents = Array.from(document.querySelectorAll('.tab__content'))
let indexRemove = 0;

// Вариант 1
// for (let index = 0; index < listTabs.length; index++) {
//     const tab = listTabs[index];
//     tab.onclick = () => {
//         listTabContents[indexRemove].classList.remove('tab__content_active')
//         listTabs[indexRemove].classList.remove('tab_active')
//         indexRemove = index;
//         listTabs[indexRemove].classList.add('tab_active')
//         listTabContents[index].classList.add('tab__content_active')
//     }
// }

// Вариант 2
// listTabs.forEach((tab, index) => {
//     tab.onclick = () => {
//         listTabs[indexRemove].classList.remove('tab_active')
//         listTabContents[indexRemove].classList.remove('tab__content_active')
//         indexRemove = index;
//         listTabs[index].classList.add('tab_active')
//         listTabContents[index].classList.add('tab__content_active')
//     }
// });


// Вариант 3
listTabs.forEach((tab) => {
    tab.onclick = () => {
        const index = listTabs.indexOf(tab);
        listTabs[indexRemove].classList.remove('tab_active')
        listTabContents[indexRemove].classList.remove('tab__content_active')
        indexRemove = index;
        listTabs[index].classList.add('tab_active')
        listTabContents[index].classList.add('tab__content_active')
    }
});