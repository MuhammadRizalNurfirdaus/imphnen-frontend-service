import { NavbarDashboardUser } from '@imphnen-frontend-service/ui/organisms';
import { FC, ReactElement } from 'react';

export const Components: FC = (): ReactElement => {
  return (
    <main className="w-full px-[48px] py-[40px] flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-6">
        <NavbarDashboardUser />
      </div>

      <nav className="bg-primary-100 inline-flex items-center rounded-sm p-1 gap-1 self-start">
        <div className="rounded-sm shadow-sm font-semibold text-p3 text-primary-500 bg-white py-1 px-2.5 select-none cursor-pointer">
          Roadmap
        </div>
        <div className="rounded-sm font-semibold text-p3  py-1 px-2.5 select-none cursor-pointer text-primary-300">
          Article
        </div>
      </nav>

      <div className="bg-white p-10 rounded-lg shadow-sm">
        <p className="text-neutral-400 text-label1 font-medium">Roadmap Kamu</p>
        <h2 className="font-semibold text-p1 text-primary-500 mb-7">
          Front-end Basic
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between bg-neutral-50 rounded-2xl px-5 py-3">
            <p className="text-p2 font-semibold text-primary-500">
              Day 1 - Materi A
            </p>
            <p className="text-primary-500 font-semibold text-p3">
              1/3 Diselesaikan
            </p>
          </div>
          <div className="pl-6 flex flex-col gap-2">
            <div className="flex justify-between items-center bg-neutral-50 rounded-2xl px-5 py-3">
              <p className="text-p2 font-semibold text-neutral-600">
                1. Submateri 1
              </p>
              <div className="bg-success-200 text-success-500 font-semibold text-label1 rounded-sm px-3 py-1.5">
                Done
              </div>
            </div>
            <div className="flex justify-between items-center rounded-2xl px-5 py-3">
              <p className="text-p2 font-semibold text-neutral-600">
                2. Submateri 2
              </p>
              <div className="bg-primary-100 text-primary-500 font-semibold text-label1 rounded-sm px-3 py-1.5">
                To do
              </div>
            </div>
            <div className="flex justify-between items-center rounded-2xl px-5 py-3">
              <p className="text-p2 font-semibold text-neutral-600">
                3. Tugas: Membuat Artikel
              </p>
              <div className="bg-primary-100 text-primary-500 font-semibold text-label1 rounded-sm px-3 py-1.5">
                To do
              </div>
            </div>
          </div>

          <div className="flex justify-between  rounded-2xl px-5 py-3">
            <p className="text-p2 font-semibold text-primary-500">
              Day 2 - Materi B
            </p>
            <p className="text-danger-400 font-semibold text-p3">
              Selesaikan materi sebelumnya
            </p>
          </div>
          <div className="flex justify-between  rounded-2xl px-5 py-3">
            <p className="text-p2 font-semibold text-primary-500">
              Day 3 - Materi C
            </p>
            <p className="text-danger-400 font-semibold text-p3">
              Selesaikan materi sebelumnya
            </p>
          </div>
          <div className="flex justify-between  rounded-2xl px-5 py-3">
            <p className="text-p2 font-semibold text-primary-500">
              Day 4 - Materi D
            </p>
            <p className="text-danger-400 font-semibold text-p3">
              Selesaikan materi sebelumnya
            </p>
          </div>
          <div className="flex justify-between  rounded-2xl px-5 py-3">
            <p className="text-p2 font-semibold text-primary-500">
              Day 5 - Materi E
            </p>
            <p className="text-danger-400 font-semibold text-p3">
              Selesaikan materi sebelumnya
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Components;
