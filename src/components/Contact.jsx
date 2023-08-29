import React from 'react'
import logo from '/assets/icons/logo.png'
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import { useTranslation, Trans } from 'react-i18next'


const Contact = () => {
  const { t } = useTranslation('translation');

  return (
    <div id="contact" className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <img className='h-12' src={logo} alt='Logo' />
            <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
              { t('hero.headline') }
            </span>
          </a>
          <div className="mt-3 lg:max-w-sm text-sm">
            <Trans i18nKey='contact.shortInfo' components={{
              orange_text: <span className='text-martian' />
            }} />
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="my-3 text-xl font-bold tracking-wide text-primary">
            { t('contact.header') }
          </p>
          <div className="flex">
            <p className="mr-1 font-medium">{ t('contact.phone.name') }:</p>
            <a href="tel:+77077040916" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              +77077040916
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 font-medium">{ t('contact.email.name') }:</p>
            <a
              href="mailto:nu.rover.team@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 hover:text-primary-800"
            >
              nu.rover.team@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 font-medium">{ t('contact.address.name') }:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              { t('contact.address.description') }
            </a>
          </div>
        </div>
        <div>
          <p className="my-3 text-xl font-bold tracking-wide text-primary">
            { t('contact.social.name') }
          </p>
          <div className="flex items-center mt-3 space-x-3">
            <a target="_blank" href={import.meta.env.VITE_LINKEDIN} className="text-gray-500 transition-colors duration-300 hover:text-primary">
              <AiFillLinkedin size={28}/>
            </a>
            <a target="_blank" href={import.meta.env.VITE_INSTAGRAM}
              className="text-gray-500 transition-colors duration-300 hover:text-primary">
              <AiFillInstagram size={28}/>
            </a>
          </div>
          <p className="mt-4 text-gray-400">
            { t('contact.social.info') }
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          Copyright © 2023 Nazarbayev University Rover Team. All rights reserved.
        </p>
        <p className="text-sm text-gray-600">
          Designed by <a href="https://github.com/sb2rhan" target='_blank'>sb2rhan</a>
        </p>
      </div>
    </div>
  )
}

export default Contact