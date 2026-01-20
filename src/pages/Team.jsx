import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TeamView from 'src/components/team/TeamView';

import imgAlmaz from '/assets/img/team/Almaz.webp';
import imgAngelina from '/assets/img/team/Angie.webp';
import imgBolatkhan from '/assets/img/team/Bolatkhan.webp';
import imgDias from '/assets/img/team/Dias.webp';
import imgHeghine from '/assets/img/team/Heghine.webp';
import imgJalgas from '/assets/img/team/Jalgas.webp';
import imgJalgasbek from '/assets/img/team/Jalgasbek.webp';
import imgKamila from '/assets/img/team/Kamosh.webp';
import imgMalika from '/assets/img/team/Malika.webp';
import imgMussa from '/assets/img/team/Mussich.webp';
import imgNazira from '/assets/img/team/Nazira.webp';
import imgNurbanu from '/assets/img/team/Nurbanu.webp';
import imgSaule from '/assets/img/team/Saule.webp';
import imgYerassyl from '/assets/img/team/Yerassyl.webp';
import imgZhansen from '/assets/img/team/Zhansen.webp';
import imgZhanserik from '/assets/img/team/Zhanserik.webp';

const Team = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'team' });
  const teamMembers = {
    [t("departments.leads")]: [
      // {
      //   fullname: t('infoHeghine.fullname'),
      //   position: t('infoHeghine.position'),
      //   achievements: t('infoHeghine.achievements', { returnObjects: true }),
      //   img: imgHeghine
      // },
      {
        fullname: t('infoJalgasbek.fullname'),
        position: t('infoJalgasbek.position'),
        img: imgJalgasbek
      },
    ],
    [t("departments.me")]: [
      
      {
        fullname: t('infoJalgas.fullname'),
        position: t('infoJalgas.position'),
        img: imgJalgas
      },
      {
        fullname: t('infoAlmaz.fullname'),
        position: t('infoAlmaz.position'),
        img: imgAlmaz
      },
      {
        fullname: t('infoNazira.fullname'),
        position: t('infoNazira.position'),
        img: imgNazira
      },
      {
        fullname: t('infoDias.fullname'),
        position: t('infoDias.position'),
        img: imgDias
      },
      {
        fullname: t('infoAidana.fullname'),
        position: t('infoAidana.position'),
        img: imgAngelina
      },
      {
        fullname: t('infoMussa.fullname'),
        position: t('infoMussa.position'),
        img: imgMussa
      },
      {
        fullname: t('infoNazerke.fullname'),
        position: t('infoNazerke.position'),
        img: imgNurbanu
      }
    ],
    [t("departments.sc")]: [
    
      {
        fullname: t('infoKamilaTashimova.fullname'),
        position: t('infoKamilaTashimova.position'),
        img: imgKamila
      },
       {
        fullname: t('infoMalika.fullname'),
        position: t('infoMalika.position'),
        img: imgMalika
      },
      {
        fullname: t('infoDaulet.fullname'),
        position: t('infoDaulet.position'),
        img: imgBolatkhan
      },
      
    ],
    [t("departments.sn")]: [
      {
        fullname: t('infoSaule.fullname'),
        position: t('infoSaule.position'),
        img: imgSaule
      },
      
    ],
    [t("departments.mk")]: [
      {
        fullname: t('infoMeiirzhan.fullname'),
        position: t('infoMeiirzhan.position'),
        img: imgZhansen
      },

      {
        fullname: t('infoAknur.fullname'),
        position: t('infoAknur.position'),
        img: imgYerassyl
      },
     
    ]
  }

  return (
    <div id="team" className='w-full py-16 lg:py-20'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h1 className='text-primary md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center'>{t('header')}</h1>
        <p className='font-light lg:font-normal text-center mt-2 mb-8'>{t('caption')}</p>
        <TeamView teamByDepartments={teamMembers} />
        <div className='text-center pt-10'>
          <Link className='px-8 py-2.5 bg-primaryDark text-center font-semibold hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
            to={`contributors/#home`}>{t('contributorsLink')}</Link>
        </div>
      </div>
    </div>
  )
}

export default Team