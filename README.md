# nil.foundation

It's repo of site. It has 2 parts: admin and site.

## Admin

**/admin** - here is Strapi application. Strapi is headless CMS that's provide easy configuration of schema through `npm run develop`.

## Site

**/site** - here is next.js application. Next.js application need to have token.

## How to start for develop

**./dev.sh** - it's generate default User with `admin@nil.foundation:XYgiXDOcg4Lfpv6g` accessible on `http://localhost:1337/admin`, site will be available here `http://localhost:3000/`

Prerequesite: it depends on pnpm.

## How to deploy in production

You should use ansible role **site** from (infra repository)[https://github.com/nilFoundation/infra].
