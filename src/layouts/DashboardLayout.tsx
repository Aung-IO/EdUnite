
import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <main className="flex-1 justify-center p-4">

        <Outlet />
      </main>
    </div>

  );
}
