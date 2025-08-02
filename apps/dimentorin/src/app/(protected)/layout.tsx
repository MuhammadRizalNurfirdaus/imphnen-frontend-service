import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from '@imphnen-frontend-service/ui/organisms';

export const AppLayout: FC = (): ReactElement => {
  return (
    <div className="bg-[#f7fbff] min-h-screen flex justify-center">
      <div className="min-h-screen w-full flex">
        <DashboardSidebar />
        <div className="flex-1 overflow-auto lg:max-w-[1000px] 2xl:max-w-[1280px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
