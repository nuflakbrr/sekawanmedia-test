import { NextResponse } from 'next/server';

import { Ticket } from '@/interfaces/ticket';
import { makeTickets } from '@/lib/faker';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization');

    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    const mockLocalStorage = {
      getItem: (key: string) => {
        if (key === 'ticket') {
          return '';
        }
        return '';
      },
    };

    const data = mockLocalStorage.getItem('ticket') || '';
    if (data) {
      const guestTicket: Ticket[] = JSON.parse(data);
      const allTickets = guestTicket.concat(
        makeTickets(100 - guestTicket.length),
      );
      return NextResponse.json(
        { success: 1, data: allTickets },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: 1, data: makeTickets(100) },
      { status: 200 },
    );
  } catch (error) {
    console.error('TICKET_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get('Authorization');
    const body = await req.json();

    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    const mockLocalStorage = {
      getItem: (key: string) => {
        if (key === 'ticket') {
          return '';
        }
        return '';
      },
      setItem: (key: string, value: string) => {
        if (key === 'ticket') {
          return value;
        }
      },
    };

    const data = mockLocalStorage.getItem('ticket') || '';
    let myTickets: Ticket[] = [body];

    if (data) {
      myTickets = [body, ...JSON.parse(data)];
    }

    mockLocalStorage.setItem('ticket', JSON.stringify(myTickets));

    return NextResponse.json(
      { success: 1, message: 'Ticket created!' },
      { status: 201 },
    );
  } catch (error) {
    console.error('TICKET_CREATE_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
