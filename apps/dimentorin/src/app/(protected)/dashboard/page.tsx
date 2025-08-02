import { ArrowRightOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from '@imphnen-frontend-service/ui/atoms';
import { FC, ReactElement } from 'react';

export const Components: FC = (): ReactElement => {
  return (
    <main className="w-full px-[48px] py-[40px] flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-[40px]">
        <header className="w-full flex justify-between items-center py-2 px-5 bg-white rounded-lg shadow-sm">
          <h2 className="text-p2 font-semibold text-primary-500">
            Dimentorin.dev
          </h2>
          <div className="flex gap-x-3 items-center">
            <Button variant="secondary" size="sm" className="text-[16px] p-2"><BellOutlined /></Button>
            <Button variant="secondary" size="sm" className="text-[16px] p-2"><SettingOutlined /></Button>
            <div className="font-medium text-neutral-600">
              <p className="text-label1">Rizal Syaepulloh</p>
              <p className="text-label2">Mentee</p>
            </div>
            <div className="rounded-full"><img src="/image/testimonial.webp" alt="Avatar" className="size-7 aspect-square object-cover" /></div>
          </div>
        </header>

        <section className="p-5 bg-white rounded-lg shadow-sm">
          <div className="w-[500px]">
            <h2 className="font-semibold text-p1 text-primary-500">Selamat Datang di Dimentorin.dev</h2>
            <p className="text-neutral-400 mb-5 line-clamp-2">
              Yuk mulai petualanganmu di menu <b>Skill Discovery</b> untuk
              dapatkan <b>roadmap 30 hari</b> yang direkomendasikan AI khusus buat
              kamu~
            </p>
            <Button className="gap-x-4">Temukan Roadmapmu^^ <ArrowRightOutlined /></Button>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="border border-blue-200 bg-white py-2 px-3 shadow-sm rounded-md inline w-fit text-neutral-700 font-medium">Overview</h2>
          <div className="flex justify-between gap-4">
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1">
              <div>0</div>
              <div>Mentoring Session</div>
            </div>
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1">
              <div>0</div>
              <div>Article Submitted</div>
            </div>
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1">
              <div>0</div>
              <div>Article Published</div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="border border-blue-200 bg-white py-2 px-3 shadow-sm rounded-md inline w-fit text-neutral-700 font-medium">Roadmaps</h2>
          <div className="flex flex-col justify-between gap-4">
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1">
              <div>Front End Basic</div>
              <div>Mentoring Session</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Components;
