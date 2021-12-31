import { lastUpdated, status } from '$lib/eruvStatus.json';

export async function get() {
	return {
		body: {
			lastUpdated,
			status
		}
	};
}

/** @type {import('@sveltejs/kit').Load} */
export async function load() {
	return {
		body: {
			lastUpdated,
			status
		}
	};
}