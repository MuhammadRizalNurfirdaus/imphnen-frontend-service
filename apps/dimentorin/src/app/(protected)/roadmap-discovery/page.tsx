import { Button, Input } from '@imphnen-frontend-service/ui/atoms';
import { NavbarDashboardUser } from '@imphnen-frontend-service/ui/organisms';
import { FC, ReactElement } from 'react';

export const Components: FC = (): ReactElement => {
  return (
    <main className="w-full px-[48px] py-[40px] flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-6">
        <NavbarDashboardUser />
      </div>

      <div className="min-h-[calc(100dvh-150px)] flex items-center justify-center">
        <section className="flex flex-col items-center gap-10">
          <div className="text-center">
            <p className="text-p1 text-neutral-400 leading-tight">
              Welcome to{' '}
              <span className="text-primary-500 font-semibold">
                Roadmap Discovery
              </span>
            </p>
            <p className="text-neutral-600 font-bold text-h1">
              Start Your <span className="text-primary-500">Journey</span>
            </p>
          </div>

          <div className="flex">
            <img src="/image/mascot1.webp" alt="" width={146} />
            <div className="shadow-md p-4 text-p2 text-neutral-500 bg-white self-start w-[380px]">
              Lagi pengen belajar apa? Ketik aja di sini, biar AI bantuin bikin
              roadmap-nya.
            </div>
          </div>

          <div className="flex gap-4">
            <Input placeholder="Mau belajar roadmap apa?" size="lg" />
            <select className="px-[12px] py-[8px] text-neutral-800 bg-white placeholder:text-neutral-300 border border-neutral-200 hover:border-blue-300 focus:outline-1 focus:outline-blue-500 rounded-md font-bai-jamjuree            w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-p3">
              <option value="">Tingkat Belajar</option>
              <option value="pemula">Pemula</option>
              <option value="menengah">Menengah</option>
              <option value="mahir">Mahir</option>
            </select>
          </div>

          <Button size="lg">Generate</Button>
        </section>
      </div>
    </main>
  );
};

export default Components;
