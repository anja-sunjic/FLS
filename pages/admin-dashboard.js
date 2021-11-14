import MetaData from "../components/partials/seo-meta";
import AdminDashboard from "../components/Admin/AdminDashboard"
export default function AdminDashboardPage() {
  return (
    <>
      <MetaData
        path="/admin-dashboard" title='FLS Admin dashboard' description='' image="/share.png"
      />
      <div className="_main">
        <AdminDashboard />
      </div>
    </>
  );
}