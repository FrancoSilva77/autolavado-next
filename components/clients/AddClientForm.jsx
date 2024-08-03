
export default function AddClientForm({ children }) {
  return <div>
    <form action="" className="form">

      {children}

      <input type="submit" value='Registrar Cliente' className="form__submit" />
    </form>
  </div>
}
