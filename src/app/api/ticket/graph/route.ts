import { NextResponse } from 'next/server';
import moment from 'moment';
import fs from 'fs';

export async function GET(req: Request) {
  try {
    // Get token
    const token = req.headers.get('Authorization');
    // Read data store
    const file = fs.readFileSync('./public/ticket.json', 'utf-8');

    // Protected routes API if user not have token
    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    // Process data store
    const data = JSON.parse(file);
    const monthCount = data.reduce((acc: any, item: any) => {
      const month = moment(item.createdAt).format('MMM');
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    const sortedMonthCount = Object.fromEntries(
      Object.entries(monthCount).sort(
        (a, b) => moment(a[0], 'MMM').month() - moment(b[0], 'MMM').month(),
      ),
    );

    const convertedData = Object.entries(sortedMonthCount).map(
      ([month, totalData]) => ({ month, totalData }),
    );

    // Return response
    return NextResponse.json(
      { success: 1, data: convertedData },
      { status: 200 },
    );
  } catch (error) {
    // Handle error
    console.error('TICKET_GRAPH_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
