import { FC } from 'react';

import { TicketStatus } from '@/interfaces/ticket';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Props = {
  data: TicketStatus | null;
};

const SummaryTask: FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        <Card>
          <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="w-full flex flex-wrap lg:flex-row items-start justify-between">
              <div>
                <CardTitle>Ticket Status</CardTitle>
                <CardDescription>
                  Showing total data status ticket
                </CardDescription>
              </div>
              <div>
                <p className="font-semibold text-sm text-blue-500 cursor-pointer">
                  View Details
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6 pt-6">
            <ul className="space-y-2">
              <li className="flex items-center justify-between border-b py-2">
                <p className="font-semibold">Pending</p>
                <p className="text-gray-500">{data?.totalPending}</p>
              </li>
              <li className="flex items-center justify-between border-b py-2">
                <p className="font-semibold">Approved</p>
                <p className="text-gray-500">{data?.totalApproved}</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <p className="font-semibold">Rejected</p>
                <p className="text-gray-500">{data?.totalRejected}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 md:col-span-1">
        <Card>
          <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="w-full flex items-start flex-wrap lg:flex-row justify-between">
              <div>
                <CardTitle>Task</CardTitle>
                <CardDescription>Showing total task for today</CardDescription>
              </div>
              <div>
                <p className="font-semibold text-sm text-blue-500 cursor-pointer">
                  View All
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6 pt-3">
            <ul className="space-y-2">
              <li className="flex items-center justify-between border-b py-2 gap-2">
                <input
                  type="text"
                  placeholder="Create new task"
                  className="w-full active:outline-none focus:outline-none"
                />
                <Button size="sm" variant="secondary">
                  <Plus />
                </Button>
              </li>
              <li className="flex items-center justify-between border-b py-2">
                <div className="flex items-center gap-3">
                  <input type="radio" />
                  <p className="font-semibold">Finish ticket update</p>
                </div>
                <Badge variant="warning">Urgent</Badge>
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <input type="radio" checked />
                  <p className="font-semibold">Create new ticket example</p>
                </div>
                <Badge variant="success">New</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SummaryTask;
