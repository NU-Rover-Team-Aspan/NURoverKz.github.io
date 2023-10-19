import React from 'react'
import { useTranslation } from 'react-i18next'

import RoverDetails from "./sub/RoverDetails"
import imgRoverTRL1 from '/assets/img/RoverTRL1.png'


const Roadmap = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'roadmap' });

  const milestones = t('milestones', { returnObjects: true });

  return (
    <>
      <div id="roadmap" className='w-full py-8'>
        <div className='max-w-[1240px] mx-auto px-4'>
          <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-12 text-center text-primary'>{t('header')}</h1>
          <p className='font-light lg:font-normal mt-3 mb-8'>* {t('caption')}</p>
          <ol className="border-primary dark:border-primary-500 border-l md:border-l-0 md:border-t md:flex md:justify-center md:gap-4">
            {
              milestones.map((milestone, index) => {
                return (
                  <li key={index}>
                    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                      <div
                        className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary dark:bg-primary-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                      <p className="mt-2 text-sm text-primary">
                        {milestone.date}
                      </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5 md:ml-0">
                      <h4 className="mb-1.5 font-semibold">{milestone.description}</h4>
                    </div>
                  </li>
                );
              })
            }
          </ol>
        </div>
      </div>
      <div className='w-full max-w-[1240px] mx-auto'>
        <RoverDetails header={t('roverTRL1.header')} img={imgRoverTRL1}
          // anchor={{ name: t('roverTRL1.moreInfo'), link: 'https://www.instagram.com/p/Cu646JmMynb/?igshid=MzRlODBiNWFlZA==' }}
          characteristics={[
            { name: t('roverTRL1.body.name'), descript: t('roverTRL1.body.description') },
            { name: t('roverTRL1.wheels.name'), descript: t('roverTRL1.wheels.description') },
            { name: t('roverTRL1.controls.name'), descript: t('roverTRL1.controls.description') }
          ]} />
        <RoverDetails header={t('roverTRL5.header')} characteristics={[
          { name: t('roverTRL5.size.name'), descript: `${t('roverTRL5.size.width')} x ${t('roverTRL5.size.height')} x ${t('roverTRL5.size.depth')}` },
          { name: t('roverTRL5.weight.name'), descript: t('roverTRL5.weight.inKg') },
          { name: t('roverTRL5.parameters.name'), descript: t('roverTRL5.parameters.description') },
          { name: t('roverTRL5.tools.name'), descript: t('roverTRL5.tools.description') }
        ]} />
      </div>
    </>
  )
}

export default Roadmap