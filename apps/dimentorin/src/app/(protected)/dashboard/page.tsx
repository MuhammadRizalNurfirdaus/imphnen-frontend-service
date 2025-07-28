import { Button } from '@imphnen-frontend-service/ui/atoms';
import { FC, ReactElement } from 'react';

export const Components: FC = (): ReactElement => {
  return (
    <div className="w-full px-[48px] py-[40px] flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-[40px] p-8 bg-white rounded-md">
        <section className="w-full flex flex-col gap-[40px]">
          <h2 className="text-p2 font-medium text-primary-500">
            Dimentorin.dev
          </h2>
        </section>
        <section>
          <h2>Selamat Datang di Dimentorin.dev</h2>
          <p>
            Yuk mulai petualanganmu di menu <b>Skill Discovery</b> untuk
            dapatkan <b>roadmap 30 hari</b> yang direkomendasikan AI khusus buat
            kamu~
          </p>
          <Button>Temukan Roadmapmu^^</Button>
        </section>
        <div>Overview</div>
        <div>Mentoring Session</div>
        <div>Article Submitted</div>
        <div>Article Published</div>
        <div>Roadmaps</div>
        <div>Front End Basic</div>
      </div>
    </div>
  );
};

export default Components;
