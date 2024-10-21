'use client';
import { useTranslation } from '../i18n/client';
import { useCookies } from 'react-cookie'
import { cookieName } from '../i18n/settings'

export default function Home() {
  const { t, i18n } = useTranslation();
  const [ cookies ,setCookie] = useCookies([cookieName])
  console.log('cookies', cookies)
  
  const changeLanguage = (lng: string) => {
    console.log(lng)
    i18n.changeLanguage(lng, () => {
      console.log('Language changed to', lng);
    }); // Change language dynamically
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
}