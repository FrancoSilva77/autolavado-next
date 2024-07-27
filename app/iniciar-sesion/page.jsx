'use client'
import { useForm } from "react-hook-form";

export default function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data);
  })

  return <main onSubmit={onSubmit} className="login">
    <h2 className="login__heading">Iniciar Sesión</h2>
    <p className="login__description">Inicia sesión para administrar tus clientes</p>

    <form className="form">
      <div className="form__field">
        <label htmlFor="email" className="form__label">Correo Electrónico:</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          {...register('email', {
            required: {
              value: true,
              message: 'El correo es requerido'
            }
          })}
          className="form__input" />

        {errors.email && (
          <span className="form__error">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="password" className="form__label">Contraseña:</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es requerida'
            }
          })}
          className="form__input" />
        {errors.password && (
          <span className="form__error">
            {errors.password.message}
          </span>
        )}
      </div>

      <button className="form__submit">Iniciar Sesión</button>
    </form>
  </main>;
}
