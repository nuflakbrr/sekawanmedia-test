import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization');

    if (!token) {
      return NextResponse.json(
        { success: 0, message: 'Unauthorized!' },
        { status: 401 },
      );
    }

    const data = [
      { month: 'January', totalData: 54 },
      { month: 'February', totalData: 10 },
      { month: 'March', totalData: 86 },
      { month: 'April', totalData: 45 },
      { month: 'May', totalData: 23 },
      { month: 'June', totalData: 100 },
      { month: 'July', totalData: 29 },
      { month: 'August', totalData: 79 },
      { month: 'September', totalData: 90 },
      { month: 'October', totalData: 50 },
      { month: 'November', totalData: 35 },
      { month: 'December', totalData: 67 },
    ];

    return NextResponse.json({ success: 1, data }, { status: 200 });
  } catch (error) {
    console.error('TICKET_GRAPH_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
