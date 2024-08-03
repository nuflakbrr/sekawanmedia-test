import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (
      !['admin@gmail.com', 'guest@gmail.com'].includes(email) ||
      password !== 'password'
    ) {
      return new Response('Invalid email or password!', { status: 400 });
    }

    const data = {
      email,
      name: 'Naufal Akbar Nugroho',
      role: email === 'admin@gmail.com' ? 'admin' : 'guest',
    };
    const token = btoa(`${email}:${password}`);

    return NextResponse.json(
      { success: 1, message: 'Login success!', data, token },
      { status: 200 },
    );
  } catch (error) {
    console.error('AUTH_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
