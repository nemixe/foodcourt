class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="absolute text-3xl font-bold my-6 lg:my-12 select-none px-2">food court</div>
    `;
    }
}

  customElements.define('c-header', Header);
