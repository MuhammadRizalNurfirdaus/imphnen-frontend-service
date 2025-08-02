import { FC, ReactElement } from 'react';

export const Components: FC = (): ReactElement => {
  return (
    <div className="w-full px-[48px] py-[40px] flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-[40px] p-8 bg-white rounded-md">
        <section className="w-full flex flex-col gap-[40px]">
          <h2 className="text-p2 font-medium text-primary-500">
            Learning Path
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Components;
