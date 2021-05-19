let maxWidth = document.documentElement.clientWidth;

// Выпадающий список
let module = document.querySelectorAll('.component__module');
let list = document.querySelectorAll('.component__list');

if (maxWidth <= 767) {
    for (let b = 0; b < module.length; b++) {
        module[b].onclick = function () {
            module[b].classList.toggle('red');
            for (let k = 0; k < list.length; k++) {
            }
            list[b].classList.toggle('open');
        };
    }
}


// // Закрытие списка (удаление классов)
// function deleteActive() {
//     // Блок с модулем (красный цвет и минус)
//     for (let i = 0; i < module.length; i++) {
//         module[i].classList.remove('red', 'red::before');
//     }
//     // Список
//     for (let j = 0; j < list.length; j++) {
//         list[j].classList.remove('open');
//     }
// }

// // Открытие списка при клике (добавление классов)
// for (let b = 0; b < module.length; b++) {
//     module[b].onclick = () => {
//         deleteActive();
//         // Блок с модулем (красный цвет и минус)
//         module[b].classList.add('red', 'red::before');
//         // Список
//         for (let k = 0; k < list.length; k++) {
//             list[b].classList.add('open');
//         }
//     };
// }














