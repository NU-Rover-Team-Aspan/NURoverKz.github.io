import React, { useState, Fragment } from 'react'
import ReactPlayer from 'react-player'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next';
import { CiSearch } from "react-icons/ci";

import Hero from './Hero'
import openPositions from 'src/db/open_positions.json'
import recruitmentVideo from '/assets/videos/careersrecruitment.mov?url';

const Careers = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'careers' });

  const [searchText, setSearchText] = useState("");
  const [positions, setPositions] = useState(openPositions ?? []);

  const [isOpen, setIsOpen] = useState(false);
  const [modalPos, setModalPos] = useState();

  const openModal = (pos) => {
    setModalPos(pos);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSearchTextChange = ({ target }) => {
    setSearchText(target.value);
    setPositions(openPositions.filter((e) => e.title.toLowerCase().includes(target.value)));
  }

  return (
    <main className="relative">
      <Hero upperQuote={'"Universe is the limit. Mars - a milestone."'}
        headlineTrans={'hero.careers.headline'} headlineColor={'text-martian'}
        staticTrans={''} animatedTrans={'hero.careers.typedArr'} />

      <div className='flex justify-center py-12'>
        <ReactPlayer
          loop={true}
          playing={true}
          muted={true}
          controls={true}
          width="70%"
          height="50%"
          url={[ {src: recruitmentVideo  , type: 'video/mp4'}] }
        />
      </div>

      <div className='w-full py-8'>
        <div className='max-w-[1240px] mx-auto px-4'>
          <div className='md:w-7/12 pt-4 pb-8 mx-auto px-4'>
            <p className="md:text-xl font-medium">
              "The working culture of NU Rover can be concluded by the following sentence: you will not get it perfect 
              from first time, so get it done and quickly with the highest excellence you can provide and always go extra."
            </p>
          </div>
          
          <h1 id="positions" className='md:text-4xl sm:text-3xl text-2xl font-bold py-6 md:py-12 text-center text-primary'>
            {t('header')}
          </h1>
          <div className="overflow-x-auto sm:rounded-lg">
            <div className="pb-4 flex justify-center">
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative mt-1">
                <div className="absolute flex items-center ps-3 pt-2 pointer-events-none">
                  <CiSearch className='w-6 h-6' color='black' aria-hidden="true" />
                </div>
                <input type="text" id="table-search"
                  className="ps-16 py-2 focus:outline-none rounded-lg max-w-80 bg-gray-50 text-black"
                  value={searchText}
                  onChange={handleSearchTextChange}
                  placeholder={t('searchbar')} />
              </div>
            </div>

            <table className="table-fixed border-collapse w-full text-xs sm:text-sm text-center rtl:text-right">
              <thead className="text-martian sm:uppercase border-b border-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    {t('positionsList.title')}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t('positionsList.department')}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t('positionsList.actionHeader')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  positions.length
                    ?
                    positions.map((pos, id) =>
                      <tr key={id} className="hover:bg-gray-900">
                        <th scope="row" className="px-3 sm:px-6 py-2 sm:py-4 text-center">
                          {pos.title}
                        </th>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 text-primary">
                          {pos.department}
                        </td>
                        <td className="sm:px-6 sm:py-4 text-center">
                          <button type="button" onClick={() => openModal(pos)}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-primaryDark transition ease-in duration-200 text-center sm:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                            {t('positionsList.action')}
                          </button>
                        </td>
                      </tr>
                    )
                    :
                    (<tr key='no0' className='text-lg w-full text-center'>No available positions</tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="opacity-25 fixed inset-0 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-50 backdrop-blur-sm">
            <div className="flex min-h-full items-center justify-center p-4 text-center text-white">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-11/12 md:w-3/4 lg:w-2/3 bg-black border border-white transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex text-lg md:text-xl font-semibold justify-between"
                  >
                    <h1 className='leading-6'>{modalPos?.title}</h1>
                    <button
                      className="ml-auto bg-transparents text-xl outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </Dialog.Title>
                  <Dialog.Description as='div' className="my-4 text-sm md:text-base">
                    <p>Department: {modalPos?.department}</p>
                    <p className='my-4'>{modalPos?.description}</p>
                    <ul className='ps-8 list-disc text-xs md:text-sm'>
                      {
                        modalPos?.responsibilities && modalPos.responsibilities.length
                          ?
                          modalPos.responsibilities.map((s, id) =>
                            <li key={id}>{s}</li>
                          )
                          :
                          <li>No responsibilities</li>
                      }
                    </ul>
                  </Dialog.Description>

                  {/* <div className='text-sm md:text-base'>
                    <p>Skills that we expect (don't have to match all of them):</p>
                    <ul className='ps-8 list-disc text-xs md:text-sm'>
                      {
                        modalPos?.skills && modalPos.skills.length
                          ?
                          modalPos.skills.map((s, id) =>
                            <li key={id}>{s}</li>
                          )
                          :
                          <li>No skills required</li>
                      }
                    </ul>
                  </div> */}

                  <div className="mt-4 flex flex-row-reverse">
                    <a
                      type="button"
                      className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 bg-primaryDark text-center font-medium hover:ring-2 hover:ring-offset-2 rounded-lg"
                      href={import.meta.env.VITE_FORM_LINK}
                      target='_blank'
                    >
                      {t('modal.action')}
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  )
}

export default Careers