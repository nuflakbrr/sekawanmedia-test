import { NextResponse } from 'next/server';
import fs from 'fs';

import { Ticket } from '@/interfaces/ticket';

export async function GET(req: Request) {
  try {
    // Get token
    const token = req.headers.get('Authorization');
    const url = new URL(req.url);
    const customerName = url.searchParams.get('customerName');

    // Protected routes API if user not have token
    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    // Check store data
    if (!fs.existsSync('./public/ticket.json')) {
      return NextResponse.json({ success: 1, data: [] }, { status: 200 });
    }

    // Read store data
    const fileContent = fs.readFileSync('./public/ticket.json', 'utf-8');
    if (!fileContent) {
      return NextResponse.json({ success: 1, data: [] }, { status: 200 });
    }

    // Parsing store data
    let data: Ticket[] = [];
    try {
      data = JSON.parse(fileContent);
    } catch (error) {
      console.error('JSON_PARSE_ERROR', error);
      return NextResponse.json(
        { success: 0, message: 'Internal server error!' },
        { status: 500 },
      );
    }

    // Filter store data if data have same customerName as query
    const find = data.filter(
      (item: Ticket) => item.customerName === customerName,
    );

    // Return response
    return NextResponse.json({ success: 1, data: find }, { status: 200 });
  } catch (error) {
    // Handle error
    console.error('TICKET_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
