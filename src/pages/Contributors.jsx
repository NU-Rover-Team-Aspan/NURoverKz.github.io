import React from 'react'
import { useTranslation } from 'react-i18next';
import ProfileCard from 'src/components/common/ProfileCard';

import imgAibat from '/assets/img/team/ex/Aibat.jpg'
import imgAizhar from '/assets/img/team/ex/Aizhar.jpg'
import imgAlikhan from '/assets/img/team/ex/Alikhan.jpg'
import imgAlisher from '/assets/img/team/ex/Alisher.jpg'
import imgAruzhan from '/assets/img/team/ex/Aruzhan.jpg'
import imgAssylzat from '/assets/img/team/ex/Assylzat.jpg'
import imgBauyrzhan from '/assets/img/team/ex/Bauyrzhan.jpg'
import imgDana from '/assets/img/team/ex/Dana.jpg'
import imgDenis from '/assets/img/team/ex/Denis.jpg'
import imgLeila from '/assets/img/team/ex/Leila.jpg'
import imgSultan from '/assets/img/team/ex/Sultan.jpg'
import imgSymbat from '/assets/img/team/ex/Symbat.jpg'
import imgTomiris from '/assets/img/team/ex/Tomiris.jpg'
import imgYussuf from '/assets/img/team/ex/Yussuf.jpg'
import imgZhamila from '/assets/img/team/ex/Zhamila.jpg'
import imgZhangir from '/assets/img/team/ex/Zhangir.jpg'
import imgZhaniya from '/assets/img/team/ex/Zhaniya.jpg'
import imgZhuldyz from '/assets/img/team/ex/Zhuldyz.jpg'


const Contributors = () => {
  const { t } = useTranslation('translation');

  const teamMembers = [
    {
      fullname: t('team.infoAibat.fullname'),
      position: t('team.infoAibat.position'),
      achievements: t('team.infoAibat.achievements', { returnObjects: true }),
      img: imgAibat
    },
    {
      fullname: t('team.infoAizhar.fullname'),
      position: t('team.infoAizhar.position'),
      achievements: t('team.infoAizhar.achievements', { returnObjects: true }),
      img: imgAizhar
    },
    {
      fullname: t('team.infoAlikhan.fullname'),
      position: t('team.infoAlikhan.position'),
      achievements: t('team.infoAlikhan.achievements', { returnObjects: true }),
      img: imgAlikhan
    },
    {
      fullname: t('team.infoAlisher.fullname'),
      position: t('team.infoAlisher.position'),
      achievements: t('team.infoAlisher.achievements', { returnObjects: true }),
      img: imgAlisher
    },
    {
      fullname: t('team.infoAruzhan.fullname'),
      position: t('team.infoAruzhan.position'),
      achievements: t('team.infoAruzhan.achievements', { returnObjects: true }),
      img: imgAruzhan
    },
    {
      fullname: t('team.infoAssylzat.fullname'),
      position: t('team.infoAssylzat.position'),
      achievements: t('team.infoAssylzat.achievements', { returnObjects: true }),
      img: imgAssylzat
    },
    {
      fullname: t('team.infoBauyrzhan.fullname'),
      position: t('team.infoBauyrzhan.position'),
      achievements: t('team.infoBauyrzhan.achievements', { returnObjects: true }),
      img: imgBauyrzhan
    },
    {
      fullname: t('team.infoDana.fullname'),
      position: t('team.infoDana.position'),
      achievements: t('team.infoDana.achievements', { returnObjects: true }),
      img: imgDana
    },
    {
      fullname: t('team.infoDenis.fullname'),
      position: t('team.infoDenis.position'),
      achievements: t('team.infoDenis.achievements', { returnObjects: true }),
      img: imgDenis
    },
    {
      fullname: t('team.infoLeila.fullname'),
      position: t('team.infoLeila.position'),
      achievements: t('team.infoLeila.achievements', { returnObjects: true }),
      img: imgLeila
    },
    {
      fullname: t('team.infoSultan.fullname'),
      position: t('team.infoSultan.position'),
      achievements: t('team.infoSultan.achievements', { returnObjects: true }),
      img: imgSultan
    },
    {
      fullname: t('team.infoSymbat.fullname'),
      position: t('team.infoSymbat.position'),
      achievements: t('team.infoSymbat.achievements', { returnObjects: true }),
      img: imgSymbat
    },
    {
      fullname: t('team.infoTomiris.fullname'),
      position: t('team.infoTomiris.position'),
      achievements: t('team.infoTomiris.achievements', { returnObjects: true }),
      img: imgTomiris
    },
    {
      fullname: t('team.infoYussuf.fullname'),
      position: t('team.infoYussuf.position'),
      achievements: t('team.infoYussuf.achievements', { returnObjects: true }),
      img: imgYussuf
    },
    {
      fullname: t('team.infoZhamila.fullname'),
      position: t('team.infoZhamila.position'),
      achievements: t('team.infoZhamila.achievements', { returnObjects: true }),
      img: imgZhamila
    },
    {
      fullname: t('team.infoZhaniya.fullname'),
      position: t('team.infoZhaniya.position'),
      achievements: t('team.infoZhaniya.achievements', { returnObjects: true }),
      img: imgZhaniya
    },
    {
      fullname: t('team.infoZhangir.fullname'),
      position: t('team.infoZhangir.position'),
      achievements: t('team.infoZhangir.achievements', { returnObjects: true }),
      img: imgZhangir
    },
    {
      fullname: t('team.infoZhuldyzK.fullname'),
      position: t('team.infoZhuldyzK.position'),
      achievements: t('team.infoZhuldyzK.achievements', { returnObjects: true }),
      img: imgZhuldyz
    },
  ]

  return (
    <main className="relative">
      <div id="home" className='w-full bg-primaryDark py-20 mb-10'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold mb-8 text-center'>{ t('contributors.header') }</h1>
          <p className='font-medium'>{ t('contributors.para') }</p>
        </div>
      </div>
      <div className='my-8'>
            <div className='flex justify-center gap-8 mx-auto flex-wrap'>
              {
                teamMembers.map((m, i) => (
                  <div key={i} className='flex-grow-0 flex-shrink-0 basis-full md:basis-1/4'>
                    <ProfileCard fullname={m.fullname} position={m.position}
                      img={m.img} achievements={m.achievements} />
                  </div>
                ))
              }
            </div>
          </div>
    </main>
  )
}

export default Contributors