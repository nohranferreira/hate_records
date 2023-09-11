const swiper = new Swiper(".swiper", {
	wrapper: true,
	speed: 1000,
	spaceBetween: 20,
	autoplay: {
		delay: 5000,
	},
	loop: true,
	parallax: true,
	breakpoints: {
		600: {
			slidesPerView: 1, // Para telas menores que 600px de largura
		},
		1024: {
			slidesPerView: 2, // Para telas maiores ou iguais a 600px de largura
		},
		// Adicione mais breakpoints conforme necessário
	},
});
