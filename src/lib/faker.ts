import { faker } from '@faker-js/faker';
import { Ticket as Tickets } from '@/interfaces/ticket';

interface Ticket extends Tickets {
  subRows?: Ticket[];
}

const range = (length: number) => {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(i);
  }

  return arr;
};

const newTicket = (): Ticket => {
  const createdAt = faker.date
    .between({
      from: '2023-01-01T00:00:00.000Z',
      to: new Date().toISOString(),
    })
    .toISOString();

  const updatedAt = faker.date
    .between({
      from: createdAt,
      to: new Date().toISOString(),
    })
    .toISOString();

  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(3),
    content: faker.lorem.paragraph(5),
    customerName: faker.person.fullName(),
    priority: faker.helpers.shuffle([
      'low',
      'medium',
      'high',
    ])[0]! as Ticket['priority'],
    status: faker.helpers.shuffle([
      'pending',
      'approved',
      'rejected',
    ])[0]! as Ticket['status'],
    createdAt: createdAt,
    updatedAt: updatedAt,
  };
};

export function makeTickets(...lens: number[]) {
  const makeTicketLevel = (depth = 0): Ticket[] => {
    const len = lens[depth]!;
    return range(len).map(() => {
      return {
        ...newTicket(),
        subRows: lens[depth + 1] ? makeTicketLevel(depth + 1) : undefined,
      };
    });
  };

  return makeTicketLevel();
}
