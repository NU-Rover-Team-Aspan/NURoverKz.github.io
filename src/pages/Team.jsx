import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// importing images
import TeamView from 'src/components/team/TeamView';
import imgAngelina from '/assets/img/team/Angie.jpg';
import imgBolatkhan from '/assets/img/team/Bolatkhan.jpg';
import imgHeghine from '/assets/img/team/Heghine.jpg';
import imgJalgas from '/assets/img/team/Jalgas.jpg';
import imgJalgasbek from '/assets/img/team/Jalgasbek.jpg';
import imgKamila from '/assets/img/team/Kamosh.jpg';
import imgMalika from '/assets/img/team/Malika.jpg';
import imgMansur from '/assets/img/team/Mansur.jpg';
import imgMussa from '/assets/img/team/Mussich.jpg';
import imgNurbanu from '/assets/img/team/Nurbanu.jpg';
import imgSaule from '/assets/img/team/Saule.jpg';
import imgYerassyl from '/assets/img/team/Yerassyl.jpg';
import imgZhansen from '/assets/img/team/Zhansen.jpeg';
import imgZhanserik from '/assets/img/team/Zhanserik.jpg';

const Team = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'team' });
  const teamMembers = {
    [t("departments.leads")]: [
      {
        fullname: t('infoHeghine.fullname'),
        position: t('infoHeghine.position'),
        achievements: t('infoHeghine.achievements', { returnObjects: true }),
        img: imgHeghine
      },
      {
        fullname: t('infoKamilaTashimova.fullname'),
        position: t('infoKamilaTashimova.position'),
        achievements: t('infoKamilaTashimova.achievements', { returnObjects: true }),
        img: imgKamila
      },
      {
        fullname: t('infoJalgas.fullname'),
        position: t('infoJalgas.position'),
        achievements: t('infoJalgas.achievements', { returnObjects: true }),
        img: imgJalgas
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
        fullname: t('infoJalgas.fullname'),
        position: t('infoJalgas.position'),
        achievements: t('infoJalgas.achievements', { returnObjects: true }),
        img: imgJalgas
      },
      {
        fullname: t('infoMussa.fullname'),
        position: t('infoMussa.position'),
        achievements: t('infoMussa.achievements', { returnObjects: true }),
        img: imgMussa
      },
      {
        fullname: t('infoMansur.fullname'),
        position: t('infoMansur.position'),
        achievements: t('infoMansur.achievements', { returnObjects: true }),
        img: imgMansur
      },
      {
        fullname: t('infoBolatkhan.fullname'),
        position: t('infoBolatkhan.position'),
        achievements: t('infoBolatkhan.achievements', { returnObjects: true }),
        img: imgBolatkhan
      },
      {
        fullname: t('infoSaule.fullname'),
        position: t('infoSaule.position'),
        achievements: t('infoSaule.achievements', { returnObjects: true }),
        img: imgSaule
      },
    ],
    [t("departments.sc")]: [
      {
        fullname: t('infoZhanserik.fullname'),
        position: t('infoZhanserik.position'),
        achievements: t('infoZhanserik.achievements', { returnObjects: true }),
        img: imgZhanserik
      },
      {
        fullname: t('infoZhansenZhalel.fullname'),
        position: t('infoZhansenZhalel.position'),
        achievements: t('infoZhansenZhalel.achievements', { returnObjects: true }),
        img: imgZhansen
      },
      {
        fullname: t('infoKamilaTashimova.fullname'),
        position: t('infoKamilaTashimova.position'),
        achievements: t('infoKamilaTashimova.achievements', { returnObjects: true }),
        img: imgKamila
      },
      {
        fullname: t('infoYerassyl.fullname'),
        position: t('infoYerassyl.position'),
        achievements: t('infoYerassyl.achievements', { returnObjects: true }),
        img: imgYerassyl
      },
      {
        fullname: t('infoNurbanu.fullname'),
        position: t('infoNurbanu.position'),
        achievements: t('infoNurbanu.achievements', { returnObjects: true }),
        img: imgNurbanu
      },
      {
        fullname: t('infoJalgasbek.fullname'),
        position: t('infoJalgasbek.position'),
        achievements: t('infoJalgasbek.achievements', { returnObjects: true }),
        img: imgJalgasbek
      },
    ],
    [t("departments.sn")]: [
      {
        fullname: t('infoAngelina.fullname'),
        position: t('infoAngelina.position'),
        achievements: t('infoAngelina.achievements', { returnObjects: true }),
        img: imgAngelina
      },
    ],
    [t("departments.mk")]: [
      {
        fullname: t('infoMalika.fullname'),
        position: t('infoMalika.position'),
        achievements: t('infoMalika.achievements', { returnObjects: true }),
        img: imgMalika
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