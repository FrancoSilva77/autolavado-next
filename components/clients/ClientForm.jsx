export default function ClientForm() {
  return <>
    <div className="form__field">
      <label htmlFor="name" className="form__label">Nombre:</label>
      <input
        type="text"
        id="name"
        placeholder="Nombre del Cliente"
        className="form__input"
      />
    </div>

    <div className="form__field">
      <label htmlFor="name" className="form__label">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        placeholder="Correo del Cliente"
        className="form__input"
      />
    </div>

    <div className="form__field">
      <label htmlFor="phone" className="form__label">Número de teléfono:</label>
      <input
        type="number"
        id="phone"
        placeholder="Télefono del Cliente"
        className="form__input"
      />
    </div>

    <div className="form__field">
      <label htmlFor="phone" className="form__label">Placa del auto:</label>
      <input
        type="text"
        id="placa"
        placeholder="Placa del auto"
        className="form__input"
      />
    </div>

    <div className="form__field">
      <label htmlFor="phone" className="form__label">Color del auto:</label>
      <input
        type="text"
        id="color"
        placeholder="Color del auto"
        className="form__input"
      />
    </div>

    <div className="form__field">
      <label htmlFor="price" className="form__label">Costo de lavado</label>
      <input
        type="number"
        id="price"
        placeholder="Costo de lavado"
        className="form__input"
      />
    </div>
  </>
}
