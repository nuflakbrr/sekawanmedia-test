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
      const jsonData = JSON.parse(data || '');
      return NextResponse.json({ success: 1, data: jsonData }, { status: 200 });
    }

    return NextResponse.json({ success: 1, data: [] }, { status: 200 });
  } catch (error) {
    console.error('TICKET_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
