const template = document.createElement('template')
template.innerHTML = `
    <style>
        div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(5, min-content);
            grid-template-areas:
                "header header"
                "label1 min"
                "label2 max"
                "label3 output"
                "btn btn";
            box-sizing: border-box;
            width: 500px;
            color: white;
            background-color: green;
            border: 1px solid black;

        }

        .textfields {
            width: 150px;
            margin: 10px;
            height: 30px;
            display: block;
        }

        button {
            width: 150px;
            height: 30px;
            margin: 10px;
            display: block;
        }

        h1 {
            grid-area: header;
            margin: 10px;
        }

        #btn {
            grid-area: btn;
        }

        #min {
            grid-area: min;
        }

        #max {
            grid-area: max;
        }

        #output {
            grid-area: output;
        }

        #label1 {
            grid-area: label1;
        }

        #label2 {
            grid-area: label2;
        }

        #label3 {
            grid-area: label3;
        }



    </style>
    <div>
        <h1>Random number generator</h1>
        <label id="label1">Minvärde</label>
        <input type="text" id="min" class="textfields" />
        <label id="label2">Maxvärde</label>
        <input type="text" id="max" class="textfields" />
        <label id="label3">Resultat</label>
        <input type="text" id="output" class="textfields" readonly />
        <button id="btn">Click me</button>
    </div>    
`

customElements.define('aer-randint',    
    class extends HTMLElement {

        #div
        #btn
        #min
        #max
        #output

        constructor () {
            super()

            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            this.#div = this.shadowRoot.querySelector('div')
            this.#btn = this.shadowRoot.querySelector('#btn')
            this.#min = this.shadowRoot.querySelector('#min')
            this.#max = this.shadowRoot.querySelector('#max')
            this.#output = this.shadowRoot.querySelector('#output')
        }

        static get observedAttributes () {
            return ['attributeName']
        }

        attributeChangedCallback (name, oldValue, newValue) {}

        connectedCallback () {
            this.#btn.addEventListener('click', () => {
                const min = Number(this.#min.value)
                const max = Number(this.#max.value)
                const output = Math.floor(Math.random() * (max - min + 1) + min)
                this.#output.value = output

        })
    }

        disconnectedCallback () {}
    }
)