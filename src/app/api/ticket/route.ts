import { NextResponse } from 'next/server';
import fs from 'fs';

import { Ticket } from '@/interfaces/ticket';
// import { makeTickets } from '@/lib/faker';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization');
    const file = fs.readFileSync('./public/ticket.json', 'utf-8');

    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    // fs.writeFileSync(
    //   './public/ticket.json',
    //   JSON.stringify(makeTickets(10), null, 2),
    // );

    return NextResponse.json(
      { success: 1, length: JSON.parse(file).length, data: JSON.parse(file) },
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
    const file = fs.readFileSync('./public/ticket.json', 'utf-8');

    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    const tickets = JSON.parse(file);
    tickets.unshift(body);

    fs.writeFileSync('./public/ticket.json', JSON.stringify(tickets, null, 2));

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

export async function PUT(req: Request) {
  try {
    const token = req.headers.get('Authorization');
    const body = await req.json();
    const file = fs.readFileSync('./public/ticket.json', 'utf-8');

    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    const tickets = JSON.parse(file);
    const updatedTickets = tickets.map((item: Ticket) => {
      if (item.id === body.id) {
        return { ...item, ...body };
      }
      return item;
    });

    fs.writeFileSync(
      './public/ticket.json',
      JSON.stringify(updatedTickets, null, 2),
    );

    return NextResponse.json(
      { success: 1, message: 'Ticket updated!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('TICKET_UPDATE_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
