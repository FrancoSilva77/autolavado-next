import Link from "next/link";

export default function Aside() {
  return (
    <aside className="dashboard__aside">
      <h4 className="dashboard__aside--title">Menú</h4>
      <nav className="dashboard__menu">
        <Link href='/' className="dashboard__enlace">Inicio</Link>
        <Link href='/' className="dashboard__enlace">Clientes</Link>
      </nav>
    </aside>
  );
}
