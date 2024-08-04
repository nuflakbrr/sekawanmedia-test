import { NextResponse } from 'next/server';
import fs from 'fs';

import { Ticket } from '@/interfaces/ticket';
// import { makeTickets } from '@/lib/faker';

export async function GET(req: Request) {
  try {
    // Get token
    const token = req.headers.get('Authorization');
    // Read store data
    const file = fs.readFileSync('./public/ticket.json', 'utf-8');

    // Protected routes API if user not have token
    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    // Generate initial data store
    // fs.writeFileSync(
    //   './public/ticket.json',
    //   JSON.stringify(makeTickets(50), null, 2),
    // );

    // Return response
    return NextResponse.json(
      { success: 1, length: JSON.parse(file).length, data: JSON.parse(file) },
      { status: 200 },
    );
  } catch (error) {
    // Handle error
    console.error('TICKET_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    // Get token
    const token = req.headers.get('Authorization');
    // Parse request body
    const body = await req.json();
    // Read data store
    const file = fs.readFileSync('./public/ticket.json', 'utf-8');

    // Protected routes API if user not have token
    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    // Parsing data store
    const tickets = JSON.parse(file);
    tickets.unshift(body);

    // Update data store with new data
    fs.writeFileSync('./public/ticket.json', JSON.stringify(tickets, null, 2));

    // Return response
    return NextResponse.json(
      { success: 1, message: 'Ticket created!' },
      { status: 201 },
    );
  } catch (error) {
    // Handle error
    console.error('TICKET_CREATE_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    // Get token
    const token = req.headers.get('Authorization');
    // Parse request body
    const body = await req.json();
    // Read data store
    const file = fs.readFileSync('./public/ticket.json', 'utf-8');

    // Protected routes API if user not have token
    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    // Parsing data store
    const tickets = JSON.parse(file);
    // Update data store
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

    // Return response
    return NextResponse.json(
      { success: 1, message: 'Ticket updated!' },
      { status: 200 },
    );
  } catch (error) {
    // Handle error
    console.error('TICKET_UPDATE_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
