import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(reactI18nextModule)
  .init({
    react: {
      usePureComponents: true,
      wait: true,
      bindStore: false,
    },
  });

export default i18n;
