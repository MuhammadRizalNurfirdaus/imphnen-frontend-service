import { BellOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from '@imphnen-frontend-service/ui/atoms';
import { FC, ReactElement } from 'react';

export const NavbarDashboardUser: FC = (): ReactElement => {
  return (
    <header className="w-full flex justify-between items-center py-2 px-5 bg-white rounded-lg shadow-sm">
      <h2 className="text-p2 font-semibold text-primary-500">Dimentorin.dev</h2>
      <div className="flex gap-x-3 items-center">
        <Button variant="secondary" size="sm" className="text-[16px] p-2">
          <BellOutlined />
        </Button>
        <Button variant="secondary" size="sm" className="text-[16px] p-2">
          <SettingOutlined />
        </Button>
        <div className="font-medium text-neutral-600">
          <p className="text-label1 font-medium text-neutral-600">
            Rizal Syaepulloh
          </p>
          <p className="text-label2 font-medium text-neutral-600">Mentee</p>
        </div>
        <div className="rounded-full">
          <a href="">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img
                src="/image/testimonial.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
