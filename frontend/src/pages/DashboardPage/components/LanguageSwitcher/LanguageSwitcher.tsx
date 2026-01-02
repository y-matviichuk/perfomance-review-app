import { Button } from '@components/ui/Button';

import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const toogleLanguage = () => {
		const newLanguage = i18n.language === 'ua' ? 'en' : 'ua';
		i18n.changeLanguage(newLanguage);
	};

	return (
		<Button variant="primary" onClick={toogleLanguage}>
			{i18n.language.toUpperCase()}
		</Button>
	);
};
