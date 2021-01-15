class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="absolute text-3xl font-bold my-6 lg:my-12 select-none px-2">food court</header>
    `;
    }
}

  customElements.define('c-header', Header);
