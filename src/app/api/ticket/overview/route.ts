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

    const data = {
      totalUnresolved: 10,
      totalOverdue: 5,
      totalOpen: 15,
      totalHold: 3,
    };

    return NextResponse.json({ success: 1, data }, { status: 200 });
  } catch (error) {
    console.error('TICKET_OVERVIEW_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
