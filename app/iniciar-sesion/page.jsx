'use client'
export default function LoginPage() {

  return <main className="login">
    <h2 className="login__heading">Iniciar Sesión</h2>
    <p className="login__description">Inicia sesión para administrar tus clientes</p>

    <form className="form">
      <div className="form__field">
        <label htmlFor="email" className="form__label">Correo Electrónico:</label>
        <input type="email" placeholder="Ingresa tu correo" className="form__input" />
      </div>

      <div className="form__field">
        <label htmlFor="password" className="form__label">Contraseña:</label>
        <input type="password" placeholder="Ingresa tu contraseña" className="form__input" />
      </div>

      <button className="form__submit">Iniciar Sesión</button>
    </form>
  </main>;
}
