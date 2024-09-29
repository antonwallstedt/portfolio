# Personal Portfolio

Portfolio created with [NextJS](https://nextjs.org/) accessed at https://antonwallstedt.info/ deployed using [Vercel](https://vercel.com/).

## How to Run

### Prerequisites

A MongoDB cluster and database.

### Steps

1. Create `.env` file and populate it with the following fields:

```
MONGO_URI="uri"
NEXTAUTH_SECRET="secret" # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32
ADMIN_USERNAME="username"
ADMIN_PASSWORD="password"
```

2. Run seed script

```
npm run seed
```

3. Currently configured to access admin page at `/admin` where `ADMIN_USERNAME` and `ADMIN_PASSWORD` as set in your `.env` file are used to login.
