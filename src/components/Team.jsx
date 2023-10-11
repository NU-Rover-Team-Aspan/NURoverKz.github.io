import React from 'react'
import ProfileCardAlt from './sub/ProfileCardAlt'

import { useTranslation } from 'react-i18next'
// importing images
import imgLeila from '/assets/img/team/Leila.jpg'
import imgBatyrkhan from '/assets/img/team/Batyrkhan.jpg'
import imgHeghine from '/assets/img/team/Heghine.jpg'
import imgYussuf from '/assets/img/team/Yussuf.jpg'
import imgTomiris from '/assets/img/team/Tomiris.jpg'
import imgMuslim from '/assets/img/team/Muslim.jpg'
import imgSymbat from '/assets/img/team/Symbat.jpg'
import imgZhaniya from '/assets/img/team/Zhaniya.jpg'
import imgDenis from '/assets/img/team/Denis.jpg'
import imgDana from '/assets/img/team/Dana.jpg'
import imgZhamila from '/assets/img/team/Zhamila.jpg'
import imgYerkebulan from '/assets/img/team/Yerkebulan.jpg'
import imgAlisher from '/assets/img/team/Alisher.jpg'
import imgAruzhan from '/assets/img/team/Aruzhan.jpg'
import imgAizhar from '/assets/img/team/Aizhar.jpg'
import imgAibat from '/assets/img/team/Aibat.jpg'
import imgAlikhan from '/assets/img/team/Alikhan.jpg'
import imgSultan from '/assets/img/team/Sultan.jpg'
import imgZhuldyz from '/assets/img/team/Zhuldyz.jpg'

const Team = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'team' });

  return (
    <div id="team" className='w-full py-16 lg:py-20'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h1 className='text-primary md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center'>{t('header')}</h1>
        <p className='font-light lg:font-normal text-center mt-2 mb-8'>{t('caption')}</p>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4">

          <ProfileCardAlt fullname={t('infoHeghine.fullname')} position={t('infoHeghine.position')}
            img={imgHeghine} achievements={t('infoHeghine.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoAlisher.fullname')} position={t('infoAlisher.position')}
            img={imgAlisher} achievements={t('infoAlisher.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoAibat.fullname')} position={t('infoAibat.position')}
            img={imgAibat} achievements={t('infoAibat.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoYussuf.fullname')} position={t('infoYussuf.position')}
            img={imgYussuf} achievements={t('infoYussuf.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoSymbat.fullname')} position={t('infoSymbat.position')}
            img={imgSymbat} achievements={t('infoSymbat.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoDana.fullname')} position={t('infoDana.position')}
            img={imgDana} achievements={t('infoDana.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoAizhar.fullname')} position={t('infoAizhar.position')}
            img={imgAizhar} achievements={t('infoAizhar.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoAruzhan.fullname')} position={t('infoAruzhan.position')}
            img={imgAruzhan} achievements={t('infoAruzhan.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoZhuldyz.fullname')} position={t('infoZhuldyz.position')}
            img={imgZhuldyz} achievements={t('infoZhuldyz.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoTomiris.fullname')} position={t('infoTomiris.position')}
            img={imgTomiris} achievements={t('infoTomiris.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoAlikhan.fullname')} position={t('infoAlikhan.position')}
            img={imgAlikhan} achievements={t('infoAlikhan.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoZhaniya.fullname')} position={t('infoZhaniya.position')}
            img={imgZhaniya} achievements={t('infoZhaniya.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoZhamila.fullname')} position={t('infoZhamila.position')}
            img={imgZhamila} achievements={t('infoZhamila.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoYerkebulan.fullname')} position={t('infoYerkebulan.position')}
            img={imgYerkebulan} achievements={t('infoYerkebulan.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoBatyrkhan.fullname')} position={t('infoBatyrkhan.position')}
            img={imgBatyrkhan} achievements={t('infoBatyrkhan.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoLeila.fullname')} position={t('infoLeila.position')}
            img={imgLeila} achievements={t('infoLeila.achievements', { returnObjects: true })} />
        </div>
        <div className="grid mt-10 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        <ProfileCardAlt fullname={t('infoDenis.fullname')} position={t('infoDenis.position')}
            img={imgDenis} achievements={t('infoDenis.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoMuslim.fullname')} position={t('infoMuslim.position')}
            img={imgMuslim} achievements={t('infoMuslim.achievements', { returnObjects: true })} />

          <ProfileCardAlt fullname={t('infoSultan.fullname')} position={t('infoSultan.position')}
            img={imgSultan} achievements={t('infoSultan.achievements', { returnObjects: true })} />
        </div>
      </div>
    </div>
  )
}

export default Team