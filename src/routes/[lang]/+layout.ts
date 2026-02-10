import { isLocale } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
  if (!isLocale(params.lang)) {
    throw error(404, 'Not found');
  }
  return { lang: params.lang };
};
