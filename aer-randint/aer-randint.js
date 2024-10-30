const template = document.createElement('template')
template.innerHTML = ``

customElements.define('aer-randint',
    class extends HTMLElement {

        constructor () {
            super()
        }

        static get observedAttributes () {
            return ['attributeName']
        }

        attributeChangedCallback (name, oldValue, newValue) {}

        connectedCallback () {}

        disconnectedCallback () {}
    }
)