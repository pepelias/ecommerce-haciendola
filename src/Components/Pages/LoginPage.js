import useField from '../../hooks/useField'
import useLogin from '../../hooks/useLogin'
import ErrorMessage from '../Molecules/ErrorMessage'
import Icon from '../Molecules/Icon'
import Loader from '../Molecules/Loader'

const LoginPage = () => {
  const user = useField()
  const password = useField()
  const { login, error, loading } = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault()
    login({ user: user.value, password: password.value })
  }
  if (loading) return <Loader />
  return (
    <div className="login-page">
      <h1>Iniciar Sesión:</h1>
      <form className="login-page__form" onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <label>
          Nombre de usuario:
          <input
            type="text"
            defaultValue={user.value}
            onChange={user.onChange}
            autoFocus
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            defaultValue={password.value}
            onChange={password.onChange}
          />
        </label>
        <div className="buttons-container">
          <button>
            <Icon icon="sign-in">Entrar</Icon>
          </button>
        </div>
      </form>
    </div>
  )
}
export default LoginPage
