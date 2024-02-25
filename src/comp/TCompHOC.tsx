import React from 'react';
import _ from 'lodash';

//https://www.freecodecamp.org/news/how-to-add-localization-to-your-react-app/

// https://react.i18next.com/guides/quick-start
// the hook
import { withTranslation } from 'react-i18next';

function TCompHOC({t, i18n}) {
  return <div><p>{t('applicant')}</p>
  <p>{_.join(['a', 'b', 'c'], '~')}</p></div>;
}

export default withTranslation()(TCompHOC);