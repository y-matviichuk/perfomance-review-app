import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { enLocales, uaLocales } from './locales';

const resources = {
	en: enLocales,
	ua: uaLocales,
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'ua',
	fallbackLng: 'en',
	debug: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
