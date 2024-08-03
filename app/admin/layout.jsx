import Aside from "@/components/admin/Aside";

export default function AdminLayout({ children }) {
  return (
    <div className="dashboard">
      <h1 className="dashboard__heading">Autolavado</h1>

      <div className="dashboard__grid">
        <Aside />

        <main className="dashboard__content">
          {children}
        </main>
      </div>
    </div>
  );
}