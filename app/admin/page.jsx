import Link from "next/link";

export default function AdminPage() {
  return <div className="clientes">
    <h2 className="clientes__heading">Administrar Clientes</h2>

    <Link href='/admin/clientes/nuevo' className="clients__action">Crear Cliente</Link>

    <table className="table">
      <thead className="table__thead">
        <tr className="table__tr">
          <th className="table__th">Nombre</th>
          {/* <th className="table__th">Email</th> */}
          {/* <th className="table__th">Telefono</th> */}
          <th className="table__th">Placa</th>
          <th className="table__th">Color</th>
          <th className="table__th">Precio</th>
          <th className="table__th">Fecha</th>
          <th className="table__th">Estado</th>
          <th className="table__th">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr className="table__tr">
          <td className="table__td">Franco Silva Lopez</td>
          {/* <td className="table__td">fran_silva_lopez_4848484@gmail.com</td> */}
          {/* <td className="table__td">2491719236</td> */}
          <td className="table__td">909090</td>
          <td className="table__td">Rojo</td>
          <td className="table__td">$122</td>
          <td className="table__td">10/12/2024</td>
          <td className="table__td">Lavando</td>
          <td className="table__td">
            <div className="table__actions">
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
}
