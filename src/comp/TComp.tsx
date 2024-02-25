import React from 'react';

//https://www.freecodecamp.org/news/how-to-add-localization-to-your-react-app/

// https://react.i18next.com/guides/quick-start
// the hook
import { useTranslation } from 'react-i18next';

export function TComp() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const { t, i18n } = useTranslation();
  return (
    /* react component neeeds one single parent element */
    /* if not div, use fragment...*/
    <>
   /* <div>*/
      <h1 onClick={() => changeLanguage('en')}>{t('home')}</h1>
      <h2 onClick={() => changeLanguage('zhHK')}>{t('page')}</h2>
   /* </div>*/
   </>
  );
}
