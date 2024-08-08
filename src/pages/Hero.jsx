import React, { useState } from 'react'
import Typed from 'typed.js';

import { useTranslation } from 'react-i18next'


const Hero = ({ upperQuote, headlineTrans, headlineColor, staticTrans, animatedTrans }) => {
  const { t, i18n } = useTranslation('translation');
  const [words, setWords] = useState(t(animatedTrans, { returnObjects: true }));

  const handleLanguageChanged = () => {
    setWords(t(animatedTrans, { returnObjects: true }))
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
      <p className='font-bold mt-4 md:mt-10'>{ upperQuote }</p>
      <h1 className={'md:text-6xl sm:text-5xl text-4xl font-bold my-6 ' + headlineColor}>{t(headlineTrans)}</h1>

      <div className='md:text-4xl sm:text-3xl text-xl font-bold'>
        <p>{t(staticTrans)}</p>
        <span ref={el} />
      </div>
    </div>
  )
}

export default Hero