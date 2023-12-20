import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'

import ProfileCard from 'src/components/common/ProfileCard'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TeamView = ({ teamByDepartments }) => {

  return (
    <Tab.Group>
      <Tab.List className="flex flex-col md:flex-row space-x-1 rounded-xl border border-white p-1">
        {
          Object.keys(teamByDepartments).map((d) => (
            <Tab key={d} className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none',
                selected
                  ? 'bg-primaryDark text-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-primary'
              )
            }
            >
              {d}
            </Tab>
          ))}
      </Tab.List>
      <Tab.Panels className="mt-8">
        {
          Object.values(teamByDepartments).map((mems, idx) => (
            <Tab.Panel key={idx} >
              <div className='flex justify-center gap-8 mx-auto flex-wrap'>
                {mems.map((m, i) => (
                  <div className='flex-grow-0 flex-shrink-0 basis-full md:basis-1/4'>
                    <ProfileCard fullname={m.fullname} position={m.position} key={i}
                      img={m.img} achievements={m.achievements} />
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TeamView