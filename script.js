import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC } from './utils.js'
import { noaAnumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrheightIsnotAnumber = noaAnumber(weight) || noaAnumber (height)
    
    if ( weightOrheightIsnotAnumber ) {
      alertError.open()
      return;
    }

    alertError.close()

    const result = calculateIMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

