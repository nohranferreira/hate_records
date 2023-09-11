// // Seletor do ícone do menu de hambúrguer
// const menuHamburguer = document.querySelector(".menu-hamburguer");

// // Seletor da lista do menu
// const menuLista = document.querySelector(".cabecalho__menu-lista");

// // Adicionar um ouvinte de evento ao ícone do menu de hambúrguer
// menuHamburguer.addEventListener("click", () => {
// 	menuLista.classList.toggle("menu-ativo");
// });

document
	.querySelector(".menu-hamburguer")
	.addEventListener("click", function () {
		this.classList.toggle("active");
	});
