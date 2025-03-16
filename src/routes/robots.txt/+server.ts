export const prerender = false;
export function GET() {
    return new Response(`User-agent: *
        Disallow: /admin/
        Disallow: /private/
        Disallow: /tmp/
        Disallow: /login/

        Sitemap: https://documentation.oto.software/sitemap.xml`, {
            headers: {
                'Content-Type': 'text/plain'
            }
        }
    );
}