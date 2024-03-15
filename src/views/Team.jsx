import React from 'react'
import { useTranslation } from 'react-i18next'
// importing images
import imgLeila from '/assets/img/team/Leila.jpg'
import imgBatyrkhan from '/assets/img/team/Batyrkhan.jpg'
import imgHeghine from '/assets/img/team/Heghine.jpg'
import imgYussuf from '/assets/img/team/Yussuf.jpg'
import imgMuslim from '/assets/img/team/Muslim.jpg'
import imgZhaniya from '/assets/img/team/Zhaniya.jpg'
import imgDenis from '/assets/img/team/Denis.jpg'
import imgYerkebulan from '/assets/img/team/Yerkebulan.jpg'
import imgAruzhan from '/assets/img/team/Aruzhan.jpg'
import imgSultan from '/assets/img/team/Sultan.jpg'
import imgAssylzat from '/assets/img/team/Assylzat.jpg'
import TeamView from 'src/components/team/TeamView'


const Team = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'team' });
  const teamMembers  = {
    [t("departments.leads")]: [
      {
        fullname: t('infoHeghine.fullname'),
        position: t('infoHeghine.position'),
        achievements: t('infoHeghine.achievements', { returnObjects: true }),
        img: imgHeghine
      },
      {
        fullname: t('infoZhaniya.fullname'),
        position: t('infoZhaniya.position'),
        achievements: t('infoZhaniya.achievements', { returnObjects: true }),
        img: imgZhaniya
      },
      {
        fullname: t('infoMuslim.fullname'),
        position: t('infoMuslim.position'),
        achievements: t('infoMuslim.achievements', { returnObjects: true }),
        img: imgMuslim
      },
      {
        fullname: t('infoBatyrkhan.fullname'),
        position: t('infoBatyrkhan.position'),
        achievements: t('infoBatyrkhan.achievements', { returnObjects: true }),
        img: imgBatyrkhan
      },
      {
        fullname: t('infoYerkebulan.fullname'),
        position: t('infoYerkebulan.position'),
        achievements: t('infoYerkebulan.achievements', { returnObjects: true }),
        img: imgYerkebulan
      },
    ],
    [t("departments.me")]: [
      {
        fullname: t('infoHeghine.fullname'),
        position: t('infoHeghine.position'),
        achievements: t('infoHeghine.achievements', { returnObjects: true }),
        img: imgHeghine
      },
      {
        fullname: t('infoAssylzat.fullname'),
        position: t('infoAssylzat.position'),
        achievements: t('infoAssylzat.achievements', { returnObjects: true }),
        img: imgAssylzat
      },
      {
        fullname: t('infoYussuf.fullname'),
        position: t('infoYussuf.position'),
        achievements: t('infoYussuf.achievements', { returnObjects: true }),
        img: imgYussuf
      }
    ],
    [t("departments.sc")]: [
      {
        fullname: t('infoMuslim.fullname'),
        position: t('infoMuslim.position'),
        achievements: t('infoMuslim.achievements', { returnObjects: true }),
        img: imgMuslim
      },
      {
        fullname: t('infoBatyrkhan.fullname'),
        position: t('infoBatyrkhan.position'),
        achievements: t('infoBatyrkhan.achievements', { returnObjects: true }),
        img: imgBatyrkhan
      },
      {
        fullname: t('infoLeila.fullname'),
        position: t('infoLeila.position'),
        achievements: t('infoLeila.achievements', { returnObjects: true }),
        img: imgLeila
      },
      {
        fullname: t('infoDenis.fullname'),
        position: t('infoDenis.position'),
        achievements: t('infoDenis.achievements', { returnObjects: true }),
        img: imgDenis
      },
      {
        fullname: t('infoSultan.fullname'),
        position: t('infoSultan.position'),
        achievements: t('infoSultan.achievements', { returnObjects: true }),
        img: imgSultan
      }
    ],
    [t("departments.mc")]: [
      {
        fullname: t('infoYerkebulan.fullname'),
        position: t('infoYerkebulan.position'),
        achievements: t('infoYerkebulan.achievements', { returnObjects: true }),
        img: imgYerkebulan
      }
    ],
    [t("departments.sn")]: [
      {
        fullname: t('infoZhaniya.fullname'),
        position: t('infoZhaniya.position'),
        achievements: t('infoZhaniya.achievements', { returnObjects: true }),
        img: imgZhaniya
      },
      {
        fullname: t('infoAruzhan.fullname'),
        position: t('infoAruzhan.position'),
        achievements: t('infoAruzhan.achievements', { returnObjects: true }),
        img: imgAruzhan
      }
    ]
  }

  return (
    <div id="team" className='w-full py-16 lg:py-20'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h1 className='text-primary md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center'>{t('header')}</h1>
        <p className='font-light lg:font-normal text-center mt-2 mb-8'>{t('caption')}</p>
        <TeamView teamByDepartments={teamMembers} />
      </div>
    </div>
  )
}

export default Team