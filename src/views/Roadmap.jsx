import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import RoverDetails from 'src/components/roadmap/RoverDetails';

import imgRover1 from '/assets/img/prototypes/RoverPrototype1.png'
import imgRover2 from '/assets/img/prototypes/RoverPrototype2.png'
import imgRover3 from '/assets/img/prototypes/RoverPrototype3.png'

const Roadmap = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'roadmap' });

  const milestones = t('milestones', { returnObjects: true });
  const prototypeIndices = [1, 2, 4, 5];
  const [currIndex, setCurrIndex] = useState(4);

  return (
    <>
      <div id="roadmap" className='w-full py-8'>
        <div className='max-w-[1240px] mx-auto px-4'>
          <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-6 md:py-12 text-center text-primary'>{t('header')}</h1>
          <div className='grid md:grid-cols-2 md:gap-10'>
            <ol className="border-s-2 border-primary">
              {
                milestones.map((milestone, index) => {
                  return (
                    prototypeIndices.includes(index) ?
                    <li key={index} onClick={() => setCurrIndex(index)} className='cursor-pointer'>
                      <div className="flex-start flex items-center">
                        {
                          currIndex === index ? 
                          <div
                          className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-white"></div>
                          :<div
                          className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"></div>
                        }
                        
                        <h4 className="-mt-2 text-xl font-semibold">{milestone.description}</h4>
                      </div>
                      <div className="mb-6 ms-6 pb-6">
                        <p
                          className="text-sm text-primary"
                        >{milestone.date}</p>
                      </div>
                    </li>
                    :
                    <li key={index}>
                      <div className="flex-start flex items-center">
                        <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"></div>
                        <h4 className="-mt-2 text-xl font-semibold">{milestone.description}</h4>
                      </div>
                      <div className="mb-6 ms-6 pb-6">
                        <p
                          className="text-sm text-primary"
                        >{milestone.date}</p>
                      </div>
                    </li>
                  );
                })
              }
            </ol>
            <div className={currIndex === 1 ? 'visible' : 'hidden'}>
              <RoverDetails header={t('roverProto1.header')} img={imgRover1}
                // anchor={{ name: t('roverProto1.moreInfo'), link: 'https://www.instagram.com/p/Cu646JmMynb/?igshid=MzRlODBiNWFlZA==' }}
                characteristics={[
                  { name: t('roverProto1.body.name'), descript: t('roverProto1.body.description') },
                  { name: t('roverProto1.wheels.name'), descript: t('roverProto1.wheels.description') },
                  { name: t('roverProto1.controls.name'), descript: t('roverProto1.controls.description') }
                ]} />
            </div>
            <div className={currIndex === 2 ? 'visible' : 'hidden'}>
              <RoverDetails header={t('roverProto2.header')} img={imgRover2}
                characteristics={[
                  { name: t('roverProto2.body.name'), descript: t('roverProto2.body.description') },
                  { name: t('roverProto2.wheels.name'), descript: t('roverProto2.wheels.description') },
                  { name: t('roverProto2.controls.name'), descript: t('roverProto2.controls.description') }
                ]} />
            </div>
            <div className={currIndex === 4 ? 'visible' : 'hidden'}>
              <RoverDetails header={t('roverProto3.header')} img={imgRover3}
                characteristics={[
                  { name: t('roverProto3.body.name'), descript: t('roverProto3.body.description') },
                  { name: t('roverProto3.wheels.name'), descript: t('roverProto3.wheels.description') },
                  { name: t('roverProto3.controls.name'), descript: t('roverProto3.controls.description') }
                ]} />
            </div>
            <div className={currIndex === 5 ? 'visible' : 'hidden'}>
              <RoverDetails header={t('roverProto4.header')} characteristics={[
                { name: t('roverProto4.size.name'), descript: `${t('roverProto4.size.width')} x ${t('roverProto4.size.height')} x ${t('roverProto4.size.depth')}` },
                { name: t('roverProto4.weight.name'), descript: t('roverProto4.weight.inKg') },
                { name: t('roverProto4.parameters.name'), descript: t('roverProto4.parameters.description') },
                { name: t('roverProto4.tools.name'), descript: t('roverProto4.tools.description') }
              ]} />
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Roadmap