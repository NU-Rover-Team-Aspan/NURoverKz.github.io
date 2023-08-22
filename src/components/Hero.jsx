import React, { useState } from 'react'
import Typed from 'typed.js';

import { useTranslation } from 'react-i18next'


const Hero = () => {
  const { t, i18n } = useTranslation('translation');
  const [words, setWords] = useState(t('hero.typedArr', { returnObjects: true }));

  const handleLanguageChanged = () => {
    setWords(t('hero.typedArr', { returnObjects: true }))
  };

  // typing animation
  const el = React.useRef(null);
  React.useEffect(() => {
    i18n.on('languageChanged', handleLanguageChanged)

    const typed = new Typed(el.current, {
      strings: words,
      typeSpeed: 100,
      backSpeed: 120,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      i18n.off('languageChanged', handleLanguageChanged)
      typed.destroy();
    };
  }, [handleLanguageChanged]);

  return (
    <div id="home" className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='font-bold mt-4 md:mt-10'>"Universe is the limit. Mars - a milestone."</p>
      <h1 className='text-primary md:text-6xl sm:text-5xl text-4xl font-bold my-6'>{t('hero.headline')}</h1>

      <div className='md:text-4xl sm:text-3xl text-xl font-bold'>
        <p>{t('hero.infoStatic')}</p>
        <span ref={el} />
      </div>

      <div className='relative mt-16 md:mt-36'>
        <a target="_blank" href={import.meta.env.VITE_FORM_LINK}
          className="text-white bg-[#00850b] font-semibold rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        >
          {t('announcement.full_action')}
        </a>
      </div>
    </div>
  )
}

export default Hero