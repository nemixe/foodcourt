class FoodCard extends HTMLElement {
    get label() {
        return this.getAttribute('label');
    }

    get image() {
        return this.getAttribute('image')
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="relative shadow rounded-md h-40 overflow-hidden transition ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <div class="absolute top-0 h-full w-full p-4 z-20 text-white text-xl font-semibold flex items-center justify-center text-center">
                ${this.label}
            </div>
            <span class="absolute top-0 h-full w-full z-10 bg-gradient-to-t from-purple-400 to-pink-500 opacity-75"></span>
            <img src="${this.image}" alt="${this.label}" class="absolute top-0 h-full w-full object-cover" />
        </div>
    `;
    }
}

customElements.define('c-food-card', FoodCard);
