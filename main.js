

document.onkeydown = function(e) { 

	if (e.keyCode == 37) {
		document.querySelector('.item-b').style.width = '18%'
		document.querySelector('.player').classList.remove('walkRight');
		var posX = document.querySelector('.player').style.left = '14.5%';
		document.querySelector('.player').classList.add('walkLeft');
		document.querySelector('.player').style.transform = 'scale(-1,1)';
		setTimeout(function() {
			if (posX == '14.5%') {
				document.querySelector('.item-a').style.width = '18.01%'
			}
		}, 1450)
	}

	else if (e.keyCode == 39) {
		document.querySelector('.item-a').style.width = '18%'
		document.querySelector('.player').classList.remove('walkLeft');
		var posX = document.querySelector('.player').style.left = '80%';
		document.querySelector('.player').classList.add('walkRight');
		document.querySelector('.player').style.transform = 'scale(1,1)';
		setTimeout(function() {
			if (posX == '80%') {
				document.querySelector('.item-b').style.width = '18.01%'
			}
		}, 1450)
	} 

	else if (e.keyCode == 38) {

		var widthLeft = document.querySelector('.item-a').style.width;
		var widthRight = document.querySelector('.item-b').style.width;

		if (widthLeft == '18.01%') {
			document.querySelector('.player').style.background = 'url(img/cheer.png)';	
			document.querySelector('.game-set').innerHTML = 'Изучение алфавита'
		} 

		else if (widthRight == '18.01%') {
			document.querySelector('.player').style.background = 'url(img/cheer.png)';	
			document.querySelector('.game-set').innerHTML = 'Скоростной тест'
		}

		else {
			document.querySelector('.player').style.background = 'url(img/jump.png)';			
		}
	}

	else if (e.keyCode == 40) {
		document.querySelector('.player').style.background = 'url(img/duck.png)';
	}

}

document.onkeyup = function(e) {
	if (e.keyCode == 40) {
		document.querySelector('.player').style.background = 'url(img/start.png)'	
	}

	if (e.keyCode == 38) {
		document.querySelector('.player').style.background = 'url(img/start.png)'	
	}
}