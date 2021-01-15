class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="absolute text-3xl font-bold my-12 select-none">food court</div>
    `;
    }
}

  customElements.define('c-header', Header);
