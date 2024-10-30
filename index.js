// Import and use the custom element aer-randint

import './aer-randint/index.js'

const aerRandintElement = document.createElement('aer-randint')

document.body.appendChild(aerRandintElement)

// Using a template from the html file

const template = document.querySelector('#example-template')
const templateClone = template.content.cloneNode(true)

document.querySelector('body').appendChild(templateClone)
templateClone.textContent = 'Hello from the template'