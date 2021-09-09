import { useState } from 'react'
import { isEmail } from '../../helpers/formats'
import useField from '../../hooks/useField'
import ErrorMessage from '../Molecules/ErrorMessage'
import Icon from '../Molecules/Icon'
import SuccessError from '../Molecules/SuccessError'

const ContactForm = () => {
  const name = useField()
  const email = useField()
  const message = useField()
  const [error, setError] = useState({ message: '', positive: false })

  const Failed = (message, focus) => {
    setError({ message, positive: false })
    if (focus) focus.focus()
  }
  const Success = (message) => setError({ message, positive: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.value === '')
      return Failed('El nombre es obligatorio', e.target.name)
    if (!isEmail(email.value))
      return Failed('El email indicado no es válido', e.target.email)
    if (message.value === '')
      return Failed('Escriba su mensaje', e.target.message)
    Success('Su mensaje fue enviado con éxito')
    name.clear()
    email.clear()
    message.clear()
    e.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      {error.positive ? (
        <SuccessError>{error.message}</SuccessError>
      ) : (
        <ErrorMessage>{error.message}</ErrorMessage>
      )}
      <label>
        Nombre:
        <input
          placeholder="John Doe"
          id="name"
          defaultValue={name.value}
          onChange={name.onChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          id="email"
          placeholder="usuario@ejemplo.com"
          defaultValue={email.value}
          onChange={email.onChange}
        />
      </label>
      <label>
        Mensaje:
        <textarea
          id="message"
          placeholder="Escriba aquí su mensaje"
          defaultValue={message.value}
          onChange={message.onChange}
        />
      </label>
      <div className="buttons-container">
        <button>
          <Icon icon="paperplane">Enviar</Icon>
        </button>
      </div>
    </form>
  )
}
export default ContactForm
