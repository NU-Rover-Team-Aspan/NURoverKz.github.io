import { useTranslation } from 'react-i18next'

import ProfileCard from 'src/components/common/ProfileCard'
// importing images
import imgJamwal from '/assets/img/advisers/Jamwal.png'
import imgKostas from '/assets/img/advisers/Kostas.jpg'
import imgSalimgerey from '/assets/img/advisers/Salimgerey.jpg'
import imgVarol from '/assets/img/advisers/Varol.jpeg'
import imgZorbas from '/assets/img/advisers/Zorbas.jpg'

const Advisers = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'advisers' });

  return (
    <div id="advisers" className='w-full py-16 lg:py-20'>
      <div className='max-w-[1240px] mx-auto px-4'>

        <h1 className='text-primary md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center'>{t('header')}</h1>
        <p className='font-light lg:font-normal text-center mt-2 mb-8'>{t('caption')}</p>

        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          <ProfileCard fullname={t('infoJamwal.fullname')} img={imgJamwal}
            achievements={t('infoJamwal.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoVarol.fullname')} img={imgVarol}
            achievements={t('infoVarol.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoKostas.fullname')} img={imgKostas}
            achievements={t('infoKostas.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoSalimgerey.fullname')} img={imgSalimgerey}
            achievements={t('infoSalimgerey.achievements', { returnObjects: true })} />

          <ProfileCard fullname={t('infoZorbas.fullname')} img={imgZorbas}
            achievements={t('infoZorbas.achievements', { returnObjects: true })} />
        </div>
      </div>
    </div>
  )
}

export default Advisers