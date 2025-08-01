import type { Config } from 'drizzle-kit';

export default {
	schema: './src/db',
	out: './migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL ?? (() => { throw new Error('DATABASE_URL is not set'); })(),
	},
} satisfies Config;
