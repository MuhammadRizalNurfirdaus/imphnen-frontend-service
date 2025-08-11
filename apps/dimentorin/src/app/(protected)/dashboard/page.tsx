import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from '@imphnen-frontend-service/ui/atoms';
import { NavbarDashboardUser } from '@imphnen-frontend-service/ui/organisms';
import { FC, ReactElement } from 'react';

export const Components: FC = (): ReactElement => {
  return (
    <main className="w-full px-[48px] py-[40px] flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-6">
        <NavbarDashboardUser />

        <section className="p-5 bg-white rounded-lg shadow-sm relative overflow-hidden">
          <img
            src="/image/model-2.webp"
            alt=""
            className="absolute right-0 top-0 h-full"
          />
          <div className="w-[500px]">
            <h2 className="font-semibold text-p1 text-primary-500">
              Selamat Datang di Dimentorin.dev
            </h2>
            <p className="text-neutral-400 mb-5 line-clamp-2">
              Yuk mulai petualanganmu di menu <b>Skill Discovery</b> untuk
              dapatkan <b>roadmap 30 hari</b> yang direkomendasikan AI khusus
              buat kamu~
            </p>
            <Button className="gap-x-4">
              Temukan Roadmapmu^^ <ArrowRightOutlined />
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="border border-blue-200 bg-white py-2 px-3 shadow-sm rounded-md inline w-fit text-neutral-700 font-medium">
            Overview
          </h2>
          <div className="flex justify-between gap-4">
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1">
              <div className="font-semibold text-primary-500 text-p2">0</div>
              <div className="text-neutral-400 text-p3">Mentoring Session</div>
            </div>
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1">
              <div className="font-semibold text-primary-500 text-p2">0</div>
              <div className="text-neutral-400 text-p3">Article Submitted</div>
            </div>
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1">
              <div className="font-semibold text-primary-500 text-p2">0</div>
              <div className="text-neutral-400 text-p3">Article Published</div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="border border-blue-200 bg-white py-2 px-3 shadow-sm rounded-md inline w-fit text-neutral-700 font-medium">
            Roadmaps
          </h2>
          <div className="flex flex-col justify-between gap-4">
            <div className="px-5 bg-white py-3 shadow-sm rounded-md flex-1 flex flex-col gap-3">
              <div className="font-semibold text-p2 text-primary-500">
                Front End Basic
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-label2 text-neutral-400">
                  <span className="text-label1 font-semibold">1</span>/30
                  milestone completed
                </p>
                <p className="text-label1 font-semibold text-neutral-600 select-none">
                  50%
                </p>
              </div>
              <div className="bg-neutral-100 h-3 rounded-2xl">
                <div className="h-full w-1/2 rounded-2xl bg-gradient-to-r from-primary-300 to-primary-500"></div>
              </div>
              <Button className="self-start" variant="text" size="md">
                Lanjut Belajar <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Components;
