import type { Language } from 'plugins/i18n';
import type { ReactElementProps } from 'types';
import IconButton from './UI/Buttons/IconButton';
import Tooltip from './UI/Tooltip/Tooltip';
import { LocalStorage } from '../modules/LocalStorage';

export default function (properties: ReactElementProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (language: Language): Promise<void> => {
    await i18n.changeLanguage(language);
    LocalStorage.setLanguage(language);
    document.dir = i18n.dir();
  };

  const languageToggle = async (): Promise<void> => {
    await changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  };

  return (
    <div {...properties}>
      <Tooltip className="bottom-[200%] left-[-80%]" tooltip={t('Language')}>
        <IconButton className="block" id="language-toggle-button" onClick={languageToggle}>
          <IconCarbonLanguage />
        </IconButton>
      </Tooltip>
    </div>
  );
}
