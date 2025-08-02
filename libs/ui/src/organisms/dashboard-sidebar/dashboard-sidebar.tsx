import {
  AppstoreOutlined,
  BookOutlined,
  FileSearchOutlined,
  LogoutOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { Button } from '../../atoms';
import { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSession } from '@imphnen-frontend-service/utils';

export const DashboardSidebar: FC = (): ReactElement => {
  const { signOut } = useSession();
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <aside className="sticky top-0 left-0 w-[280px] bg-white min-h-screen py-[60px] px-[28px] shadow-xl flex flex-col justify-between">
      <div className="flex flex-col gap-8 justify-between items-center">
        <img src="/logos/simple.svg" alt="IMPHNEN Logo" className="w-[150px]" />

        <nav className="flex flex-col gap-2 w-full">
          <Link
            to="/dashboard"
            className={`flex items-center justify-items-start gap-3 px-[8px] py-[10px] ${isActive('/dashboard')
              ? 'bg-primary-500 text-white rounded-md'
              : 'text-neutral-400 hover:bg-gray-100'
              }`}
          >
            <AppstoreOutlined className="text-[20px]" />
            <span className="text-label1 font-medium">Dashboard</span>
          </Link>

          <Link
            to="/roadmap-discovery"
            className={`flex items-center justify-items-start gap-3 px-[8px] py-[10px] ${isActive('/roadmap-discovery')
              ? 'bg-primary-500 text-white rounded-md'
              : 'text-neutral-400 hover:bg-gray-100'
              }`}
          >
            <FileSearchOutlined className="text-[20px]" />
            <span className="text-label1 font-medium">Roadmap Discovery</span>
          </Link>

          <Link
            to="/learning-path"
            className={`flex items-center justify-items-start gap-3 px-[8px] py-[10px] ${isActive('/learning-path')
              ? 'bg-primary-500 text-white rounded-md'
              : 'text-neutral-400 hover:bg-gray-100'
              }`}
          >
            <BookOutlined className="text-[20px]" />
            <span className="text-label1 font-medium">Learning Path</span>
          </Link>

          <Link
            to="/dashboard-mentoring"
            className={`flex items-center justify-items-start gap-3 px-[8px] py-[10px] ${isActive('/mentoring')
              ? 'bg-primary-500 text-white rounded-md'
              : 'text-neutral-400 hover:bg-gray-100'
              }`}
          >
            <MessageOutlined className="text-[20px]" />
            <span className="text-label1 font-medium">Mentoring</span>
          </Link>
        </nav>
      </div>

      <div className="w-full">
        <hr className="mb-5 border-primary-200" />
        <Button
          onClick={signOut}
          variant="text"
          className="items-start justify-start gap-3 px-[8px] py-[10px] text-neutral-400 hover:text-red-500 transition-colors w-full"
        >
          <LogoutOutlined className="text-[20px]" />
          <span className="text-label1 font-medium">Log Out</span>
        </Button>
      </div>
    </aside>
  );
};
