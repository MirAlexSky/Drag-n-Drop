'use strict'

let dragNow = false;

let container,
	dragElem;

document.addEventListener('DOMContentLoaded', function() {

	container = document.querySelector('.container');
	container.addEventListener('mousedown', function(e) {

		if (!e.target.classList.contains('device')) return;
		
		dragNow = true;
		dragElem = e.target;
		dragElem.classList.add('drag');

		document.body.append(dragElem);

		dragElem.style.left = e.clientX + 'px';
		dragElem.style.top = e.clientY + 'px';
	
	});

	document.addEventListener('mouseup', function(e) {
		if (!dragNow) return;

		var elemOver = document.elementFromPoint(e.clientX, e.clientY);
		elemOver = elemOver.closest('.container_bin');

		if (elemOver) {
			elemOver.querySelector('.content').append(dragElem);
		} else {
			dragElem.closest('.content').append(dragElem);
		}

		dragElem.classList.remove('drag');
		dragElem.style.left = 0;
		dragElem.style.top = 0;

		dragNow = false;
		dragElem = null;
		
	});

	document.onmousemove = function(e) {
		if (!dragNow) return;
		dragElem.style.left = e.clientX + 'px';
		dragElem.style.top = e.clientY + 'px';
	};
});

