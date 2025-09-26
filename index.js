class PetCounter {

    constructor() {
    this.button = document.querySelector('.pet-button')
		this.counter = document.querySelector('.counter')
		this.count = 0

		this.init();
  }

	init() {
		this.button.addEventListener('click', () => this.addPoint())
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
}

new PetCounter()

