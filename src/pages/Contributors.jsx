import { useTranslation } from 'react-i18next';
import ProfileCard from 'src/components/common/ProfileCard';

import imgAbylay from '/assets/img/team/ex/Abylay.jpg';
import imgAibat from '/assets/img/team/ex/Aibat.jpg';
import imgAizhar from '/assets/img/team/ex/Aizhar.jpg';
import imgAldiyar from '/assets/img/team/ex/Aldiyar.jpg';
import imgAlikhan from '/assets/img/team/ex/Alikhan.jpg';
import imgAlisher from '/assets/img/team/ex/Alisher.jpg';
import imgAruzhanNew from '/assets/img/team/ex/Aruzhan New.jpg';
import imgAruzhan from '/assets/img/team/ex/Aruzhan.jpg';
import imgAssylzat from '/assets/img/team/ex/Assylzat.jpg';
import imgChingiz from '/assets/img/team/ex/Chingiz.webp';
import imgDana from '/assets/img/team/ex/Dana.jpg';
import imgDaniel from '/assets/img/team/ex/Daniel.jpg';
import imgDenis from '/assets/img/team/ex/Denis.jpg';
import imgLeila from '/assets/img/team/ex/Leila.jpg';
import imgMuslim from '/assets/img/team/ex/Muslim.jpg';
import imgSultan from '/assets/img/team/ex/Sultan.jpg';
import imgSymbat from '/assets/img/team/ex/Symbat.jpg';
import imgTomiris from '/assets/img/team/ex/Tomiris.jpg';
import imgYerkebulan from '/assets/img/team/ex/Yerkebulan.jpg';
import imgZhamila from '/assets/img/team/ex/Zhamila.jpg';
import imgZhaniya from '/assets/img/team/ex/Zhaniya.jpg';
import imgZhuldyzNew from '/assets/img/team/ex/Zhuldyz New.webp';
import imgZhuldyz from '/assets/img/team/ex/Zhuldyz.jpg';
import imgMansur from '/assets/img/team/ex/Mansur.webp';


const Contributors = () => {
  const { t } = useTranslation('translation');

  const teamMembers = [
    {
      fullname: t('team.infoAbylay.fullname'),
      position: t('team.infoAbylay.position'),
      img: imgAbylay
    },
    {
      fullname: t('team.infoAldiyar.fullname'),
      position: t('team.infoAldiyar.position'),
      img: imgAldiyar
    },
    {
      fullname: t('team.infoAibat.fullname'),
      position: t('team.infoAibat.position'),
      img: imgAibat
    },
    {
      fullname: t('team.infoAizhar.fullname'),
      position: t('team.infoAizhar.position'),
      img: imgAizhar
    },
    {
      fullname: t('team.infoDaniel.fullname'),
      position: t('team.infoDaniel.position'),
      img: imgDaniel
    },
    {
      fullname: t('team.infoAlikhan.fullname'),
      position: t('team.infoAlikhan.position'),
      img: imgAlikhan
    },
    {
      fullname: t('team.infoAlisher.fullname'),
      position: t('team.infoAlisher.position'),
      img: imgAlisher
    },
    {
      fullname: t('team.infoAruzhan.fullname'),
      position: t('team.infoAruzhan.position'),
      img: imgAruzhan
    },
    {
      fullname: t('team.infoAruzhanNew.fullname'),
      position: t('team.infoAruzhanNew.position'),
      img: imgAruzhanNew
    },
    {
      fullname: t('team.infoAssylzat.fullname'),
      position: t('team.infoAssylzat.position'),
      img: imgAssylzat
    },
    {
      fullname: t('team.infoChingiz.fullname'),
      position: t('team.infoChingiz.position'),
      img: imgChingiz
    },
    {
      fullname: t('team.infoDana.fullname'),
      position: t('team.infoDana.position'),
      img: imgDana
    },
    {
      fullname: t('team.infoDenis.fullname'),
      position: t('team.infoDenis.position'),
      img: imgDenis
    },
    {
      fullname: t('team.infoLeila.fullname'),
      position: t('team.infoLeila.position'),
      img: imgLeila
    },
    {
      fullname: t('team.infoMansur.fullname'),
      position: t('team.infoMansur.position'),
      img: imgMansur
    },
    {
      fullname: t('team.infoMuslim.fullname'),
      position: t('team.infoMuslim.position'),
      img: imgMuslim
    },
    {
      fullname: t('team.infoYerkebulan.fullname'),
      position: t('team.infoYerkebulan.position'),
      img: imgYerkebulan
    },
    {
      fullname: t('team.infoSultan.fullname'),
      position: t('team.infoSultan.position'),
      img: imgSultan
    },
    {
      fullname: t('team.infoSymbat.fullname'),
      position: t('team.infoSymbat.position'),
      img: imgSymbat
    },
    {
      fullname: t('team.infoTomiris.fullname'),
      position: t('team.infoTomiris.position'),
      img: imgTomiris
    },
    {
      fullname: t('team.infoZhamila.fullname'),
      position: t('team.infoZhamila.position'),
      img: imgZhamila
    },
    {
      fullname: t('team.infoZhaniya.fullname'),
      position: t('team.infoZhaniya.position'),
      img: imgZhaniya
    },
    {
      fullname: t('team.infoZhuldyzK.fullname'),
      position: t('team.infoZhuldyzK.position'),
      img: imgZhuldyz
    },
    {
      fullname: t('team.infoZhuldyz.fullname'),
      position: t('team.infoZhuldyz.position'),
      img: imgZhuldyzNew
    },
  ]

  return (
    <main className="relative">
      <div id="home" className='w-full bg-primaryDark py-20 mb-10'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold mb-8 text-center'>{t('contributors.header')}</h1>
          <p className='font-medium'>{t('contributors.para')}</p>
        </div>
      </div>
      <div className='my-8'>
        <div className='flex justify-center gap-8 mx-auto flex-wrap'>
          {
            teamMembers.map((m, i) => (
              <div key={i} className='flex-grow-0 flex-shrink-0 basis-full md:basis-1/4'>
                <ProfileCard fullname={m.fullname} position={m.position}
                  img={m.img} />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Contributors