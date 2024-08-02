import { FC, ReactNode } from 'react';

import AuthenticatedPage from '@/middlewares/AuthenticatedPage';
import Sidebar from '@/components/Mixins/Sidebar/Sidebar';
import NavSidebar from '@/components/Mixins/Sidebar/NavSidebar';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <AuthenticatedPage>
      <main className="h-full">
        <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full z-50">
          <NavSidebar />
        </div>
        <div className="fixed inset-y-0 z-50 flex-col hidden h-full md:flex w-60">
          <Sidebar />
        </div>
        <section className="md:pl-60 pt-[80px] h-full">{children}</section>
      </main>
    </AuthenticatedPage>
  );
};

export default DashboardLayout;
