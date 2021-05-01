const DQS = ($) => document.querySelector($);

class BtnMenu {
	constructor(id1, id2) {
		this.id1 = DQS(id1);
		this.id2 = DQS(id2);
		this.menu = DQS('.menu');
		this.id1.addEventListener('click', () => this.Menu());
		this.id2.addEventListener('click', () => this.Menu());
	}

	Menu() {
		this.id1.classList.toggle('b-menu-active');
		this.id2.classList.toggle('x-menu-active');
		this.menu.classList.toggle('menu-active');
	}
}

const Menu = new BtnMenu('#bmenu', '#xmenu');
