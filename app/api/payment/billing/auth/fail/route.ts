import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  console.log(searchParams);

  redirect('/');
  // query is "hello" for /api/search?query=hello
}