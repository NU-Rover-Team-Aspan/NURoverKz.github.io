import React from 'react'
import { useTranslation } from 'react-i18next'

import ProfileCard from 'src/components/common/ProfileCard'
// importing images
import imgBagheri from '/assets/img/advisers/Bagheri.jpg'
import imgElhadidi from '/assets/img/advisers/Elhadidi.jpg'
import imgKostas from '/assets/img/advisers/Kostas.jpg'
import imgSpitas from '/assets/img/advisers/Spitas.jpg'
import imgZhao from '/assets/img/advisers/Zhao.jpg'
import imgJamwal from '/assets/img/advisers/Jamwal.png'
import imgVarol from '/assets/img/advisers/Varol.jpeg'


const Advisers = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'advisers' });

  return (
    <div id="advisers" className='w-full py-16 lg:py-20'>
      <div className='max-w-[1240px] mx-auto px-4'>

        <h1 className='text-primary md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center'>{t('header')}</h1>
        <p className='font-light lg:font-normal text-center mt-2 mb-8'>{t('caption')}</p>

        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          <ProfileCard fullname={t('infoElhadidi.fullname')} img={imgElhadidi}
            achievements={t('infoElhadidi.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoJamwal.fullname')} img={imgJamwal}
            achievements={t('infoJamwal.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoVarol.fullname')} img={imgVarol}
            achievements={t('infoVarol.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoBagheri.fullname')} img={imgBagheri}
            achievements={t('infoBagheri.achievements', { returnObjects: true })} />
        </div>

        <div className="mt-10 grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          <ProfileCard fullname={t('infoSpitas.fullname')} img={imgSpitas}
            achievements={t('infoSpitas.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoKostas.fullname')} img={imgKostas}
            achievements={t('infoKostas.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoZhao.fullname')} img={imgZhao}
            achievements={t('infoZhao.achievements', { returnObjects: true })} />
        </div>
      </div>
    </div>
  )
}

export default Advisers