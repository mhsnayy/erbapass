// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

//Proxyi yazmak gerekiyor belki lib kısmında const methodlar yazıp kullanabiliriz de..

const protectedRoutes = ['/inventory', '/shop/my-listings', '/profile', '/trade'];
const authRoutes = ['/auth/login', '/auth/register'];


export async function proxy(request: NextRequest) {

    return NextResponse.next();
}


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};