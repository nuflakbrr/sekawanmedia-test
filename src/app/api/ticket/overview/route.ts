import { NextResponse } from 'next/server';
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
    const dataStatus = JSON.parse(file);
    const totalPending = dataStatus.filter(
      (item: any) => item.status === 'pending',
    ).length;
    const totalApproved = dataStatus.filter(
      (item: any) => item.status === 'approved',
    ).length;
    const totalRejected = dataStatus.filter(
      (item: any) => item.status === 'rejected',
    ).length;

    // Define data
    const data = {
      totalUnresolved: 10,
      totalOverdue: 5,
      totalOpen: 15,
      totalHold: 3,
    };

    // Return response
    return NextResponse.json(
      {
        success: 1,
        data,
        status: { totalPending, totalApproved, totalRejected },
      },
      { status: 200 },
    );
  } catch (error) {
    // Handle error
    console.error('TICKET_OVERVIEW_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
