import AddClientForm from "@/components/clients/AddClientForm";
import ClientForm from "@/components/clients/ClientForm";
import Link from "next/link";

export default function NewClientPage() {
  return <div>
    <h2>Agregar Cliente</h2>
    <Link href='/admin/' className="clients__action">Volver</Link>

    <AddClientForm>
      <ClientForm />
    </AddClientForm>
  </div>;
}
