'use strict'

let dragNow = false;

let container,
	dragElem,
	dragList,
	dragShiftX,
	dragShiftY;

document.addEventListener('DOMContentLoaded', function() {

	container = document.querySelector('.container');
	container.addEventListener('mousedown', function(e) {

		if (!e.target.classList.contains('device')) return;
		
		dragNow = true;
		dragElem = e.target;

		dragShiftX = e.clientX - dragElem.getBoundingClientRect().left;
		dragShiftY = e.clientY - dragElem.getBoundingClientRect().top;

		dragElem.classList.add('drag');
		dragList = dragElem.closest('.list');
		document.body.append(dragElem);

		dragElem.style.left = e.clientX - dragShiftX + 'px';
		dragElem.style.top = e.clientY - dragShiftY + 'px';
	
	});

	document.addEventListener('mouseup', function(e) {
		if (!dragNow) return;

		var elemOver = document.elementFromPoint(e.clientX, e.clientY);
		elemOver = elemOver.closest('.container_column');

		if (elemOver) {
			elemOver.querySelector('.list').append(dragElem);
		} else {
			dragList.append(dragElem);
		}

		dragElem.classList.remove('drag');
		dragElem.style.left = 0;
		dragElem.style.top = 0;

		dragNow = false;
		dragElem = null;
		
	});

	document.onmousemove = function(e) {
		if (!dragNow) return;
		dragElem.style.left = e.clientX - dragShiftX + 'px';
		dragElem.style.top = e.clientY - dragShiftY + 'px';
	};
});

