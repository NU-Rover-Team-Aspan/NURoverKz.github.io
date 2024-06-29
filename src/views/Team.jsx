import React from 'react'
import { useTranslation } from 'react-i18next'
// importing images
import imgBatyrkhan from '/assets/img/team/Batyrkhan.jpg'
import imgHeghine from '/assets/img/team/Heghine.jpg'
import imgMuslim from '/assets/img/team/Muslim.jpg'
import imgYerkebulan from '/assets/img/team/Yerkebulan.jpg'
import imgAruzhan from '/assets/img/team/Aruzhan.jpg'
import imgSabina from '/assets/img/team/Sabina.jpg'
import imgAbylay from '/assets/img/team/Abylay.jpg'
import imgZhuldyz from '/assets/img/team/Zhuldyz.jpg'
import imgAldiyar from '/assets/img/team/Aldiyar.jpg'
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
      {
        fullname: t('infoAruzhan.fullname'),
        position: t('infoAruzhan.position'),
        achievements: t('infoAruzhan.achievements', { returnObjects: true }),
        img: imgAruzhan
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
        fullname: t('infoZhuldyz.fullname'),
        position: t('infoZhuldyz.position'),
        achievements: t('infoZhuldyz.achievements', { returnObjects: true }),
        img: imgZhuldyz
      },
      {
        fullname: t('infoAbylay.fullname'),
        position: t('infoAbylay.position'),
        achievements: t('infoAbylay.achievements', { returnObjects: true }),
        img: imgAbylay
      },
      {
        fullname: t('infoAldiyar.fullname'),
        position: t('infoAldiyar.position'),
        achievements: t('infoAldiyar.achievements', { returnObjects: true }),
        img: imgAldiyar
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
        fullname: t('infoAruzhan.fullname'),
        position: t('infoAruzhan.position'),
        achievements: t('infoAruzhan.achievements', { returnObjects: true }),
        img: imgAruzhan
      },
      {
        fullname: t('infoSabina.fullname'),
        position: t('infoSabina.position'),
        achievements: t('infoSabina.achievements', { returnObjects: true }),
        img: imgSabina
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