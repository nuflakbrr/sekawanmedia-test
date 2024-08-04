import { FC } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { TicketOverview } from '@/interfaces/ticket';

type Props = {
  data: TicketOverview | null;
};

const Stats: FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center px-3 py-3 border-2 border-transparent group hover:border-2 hover:border-blue-500 hover:cursor-pointer hover:rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <h3 className="mb-2 capitalize font-semibold text-gray-500 group-hover:text-blue-500 text-base lg:text-xl">
                Unresolved
              </h3>
              <p className="font-extrabold text-2xl lg:text-5xl text-black group-hover:text-blue-500">
                {data?.totalUnresolved}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-4 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center px-3 py-3 border-2 border-transparent group hover:border-2 hover:border-blue-500 hover:cursor-pointer hover:rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <h3 className="mb-2 capitalize font-semibold text-gray-500 group-hover:text-blue-500 text-base lg:text-xl">
                Overdue
              </h3>
              <p className="font-extrabold text-2xl lg:text-5xl text-black group-hover:text-blue-500">
                {data?.totalOverdue}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-4 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center px-3 py-3 border-2 border-transparent group hover:border-2 hover:border-blue-500 hover:cursor-pointer hover:rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <h3 className="mb-2 capitalize font-semibold text-gray-500 group-hover:text-blue-500 text-base lg:text-xl">
                Open
              </h3>
              <p className="font-extrabold text-2xl lg:text-5xl text-black group-hover:text-blue-500">
                {data?.totalOpen}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-4 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center px-3 py-3 border-2 border-transparent group hover:border-2 hover:border-blue-500 hover:cursor-pointer hover:rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <h3 className="mb-2 capitalize font-semibold text-gray-500 group-hover:text-blue-500 text-base lg:text-xl">
                On Hold
              </h3>
              <p className="font-extrabold text-2xl lg:text-5xl text-black group-hover:text-blue-500">
                {data?.totalHold}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
