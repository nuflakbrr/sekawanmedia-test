import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { email, password } = body;

    // Check if email and password is valid
    if (
      !['admin@gmail.com', 'guest@gmail.com'].includes(email) ||
      password !== 'password'
    ) {
      return new Response('Invalid email or password!', { status: 400 });
    }

    // Generate user data and token
    const data = {
      email,
      name: email === 'admin@gmail.com' ? 'Admin' : 'Guest',
      role: email === 'admin@gmail.com' ? 'admin' : 'guest',
    };
    const token = btoa(`${email}:${password}`);

    // Return response
    return NextResponse.json(
      { success: 1, message: 'Login success!', data, token },
      { status: 200 },
    );
  } catch (error) {
    // Handle error
    console.error('AUTH_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 },
    );
  }
}
