import { author } from '../../lib/author';

const humans = `/* TEAM */
	Author: ${author.name}
	Contact: ${author.email}
	Github: ${author.github}
	Twitter: ${author.twitter}`;

const headers = { 'Content-Type': 'text/plain; charset=UTF-8' };

export async function GET() {
	return new Response(humans, { headers });
}

export const prerender = true;
export const trailingSlash = 'never';
