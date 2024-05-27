import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	try {
		// Clear authentication store
		locals.pocketBase.authStore.clear();

		// Redirect to login page
		throw redirect(303, 'login');
	} catch (error) {
		console.log(error);
		throw redirect(303, 'login');
	}
};
