'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item') // Находит все элементы с классом "tabs__btn-item" из документа
const tabContent = document.querySelectorAll('.tabs__content-item') // Находит все элементы с классом "tabs__content-item" из документа

// Метод forEach в JavaScript позволяет последовательно перебрать все элементы массива.
tabItem.forEach(function (element) {
	// С его помощью можно указать, например, что делать при клике по кнопке или что делать при наборе текста в текстовом поле.

	element.addEventListener('click', open)
})

// evt в JavaScript — это сокращённое написание объекта события Event, который содержит всю информацию о действии, произошедшем на странице (например, клик, нажатие кнопки, движение мыши, отправка формы).

// target — триггер, позволяющий получить доступ к элементу, над которым произошло событие.
function open(evt) {
	const tabTarget = evt.currentTarget
	const button = tabTarget.dataset.button // Свойство .dataset в JavaScript позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе.

	// Цикл пробегается по всем элементам и везде убирает класс tabs__btn-item--active

	tabItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item--active')
	})

	tabContent.forEach(function (item) {
		item.classList.remove('tabs__content-item--active')
	})

	// target.classList.add в контексте вкладок (табов) используется для добавления класса «активный» к выбранной вкладке.
	tabTarget.classList.add('tabs__btn-item--active')
	document
		.querySelector(`#${button}`)
		.classList.add('tabs__content-item--active')
}
