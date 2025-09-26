class PetCounter {

    constructor() {
    this.buttonImg = document.querySelector('.pet-button')
		this.counter = document.querySelector('.counter')
		this.buttonReset = document.querySelector('.btn-reset')
		this.buttonMylty = document.querySelector('.btn-ultiplier')
		this.buttonToggle = document.querySelector('.pet-toggle')
		this.count = 0

		this.init();
  }

	init() {
		this.buttonImg.addEventListener('click', () => this.addPoint())
		this.buttonReset.addEventListener('click', () => this.reset())
		this.buttonMylty.addEventListener('click', () => this.mylti())
		this.buttonToggle.addEventListener('click', () => this.location())
	}

	addPoint() {
		this.count += 1
		this.counter.textContent = this.count
		this.animation()
	}

	animation() {
			this.counter.style.transform = 'scale(1.2)';
			this.counter.style.transition = 'transform 0.2s ease';

			setTimeout(() => {
				this.counter.style.transform = 'scale(1)';
			}, 100);
	}

	reset() {
		this.count = 0;
		this.counter.textContent = 0;
	}

	mylti() {
		this.count *= 2
		this.counter.textContent = this.count
	}

	location() {
		const locatoin = window.location.href
		if (locatoin.includes('Oto-clicker.html')) {
			window.location.href = 'Pichi-clickers.html';
		} else {
			window.location.href = 'Oto-clicker.html';
		}
	}
}

new PetCounter()
