/* 
	PapaUI v2.0.0
	Copyright 2021 Papa Technology LTDA. All Rights Reserved.
*/


/*
	DOM (Modelo de Objetos do Documento)
*/
window.onload = function() {

	//Objetos
	const menuHamburguer = document.getElementsByClassName('buttonHamburguer')[0]
		, drawer = document.getElementById('drawer');


	//Drawer
	if (menuHamburguer.length > 0)
	menuHamburguer.addEventListener('click', drawerOpen, false);

	if (drawer.length > 0)
	drawer.querySelectorAll('.option').forEach(elem => elem.addEventListener('click', drawerClick.bind(this), false))

	function drawerOpen() {
		
		if (drawer.style.display == 'none') {

			drawer.removeAttribute('style');
			drawer.setAttribute('style', 'animation: slideNav .3s cubic-bezier(0.0,0.0,0.2,1);');

			drawer.addEventListener('animationend', drawerDisplayBlock, false);

		} else if (drawer.style.display == 'block') {

			drawer.removeAttribute('style');
			drawer.setAttribute('style', 'animation: slideNav .3s cubic-bezier(0.0,0.0,0.2,1);animation-direction: reverse;');

			drawer.addEventListener('animationend', drawerDisplayNone, false);

		}
		
	}

	function drawerDisplayBlock() {

		drawer.setAttribute('style', 'display: block;');

		drawer.removeEventListener('animationend', drawerDisplayBlock, false);

	}

	function drawerDisplayNone() {

		drawer.setAttribute('style', 'display: none;');

		drawer.removeEventListener('animationend', drawerDisplayNone, false);

	}

	function drawerClick(e) {

		var drawerOptions = drawer.querySelectorAll('.option');

		for (item of drawerOptions) {

			if (item.href == e.currentTarget.href) {

				item.setAttribute('id', 'selected');

			} else {

				item.removeAttribute('id');

			}

		}

	}

};


/*
	Layouts
*/
function layoutUser(
	userId,
	userPhoto,
	userName,
	userCategory,
	userDesc,
	userContent,
	urlPath,
	urlClick,
) {

	var html = '<div class="users mt-10 mb-20 mr-25">';
			html += '<img src="' + urlPath + userPhoto + '">';
			html += '<div class="title">' + userName + '</div>';
			html += '<div class="subtitle">' + userCategory + '</div>';
			html += '<div class="subtitle">' + userDesc + '</div>';
			html += '<a href="' + urlPath + urlClick + userId + '" class="button-small button-small-min button-primary mt-15">Visitar</a>';
		html += '</div>';

		userContent.append(html);

}
