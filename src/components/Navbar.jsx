import React, { useState } from 'react'

import { AiOutlineClose, AiOutlineMenu, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { RxDividerVertical } from 'react-icons/rx'
import logo from '/assets/icons/logo.png'

import { useTranslation } from 'react-i18next'

const Navbar = () => {

  const { t, i18n } = useTranslation('translation', { keyPrefix: 'navbar' });

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  const handleSelect = (e) => {
    e.preventDefault();
    if (e.target.value === 'en') {
      handleChangeLanguage('en');
    } else if (e.target.value === 'kk') {
      handleChangeLanguage('kk');
    } else if (e.target.value === 'ru') {
      handleChangeLanguage('ru');
    }
  }

  // Mobile and desktop states of navbar
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const instagramLink = 'https://instagram.com/rover.team.kz?igshid=MzNlNGNkZWQ4Mg==';
  const linkedInLink = 'https://www.linkedin.com/in/nazarbayev-university-rover-team-a49524273';

  return (
    <nav className='flex justify-between items-center max-w-[1240px] mx-auto px-4 pt-2'>
      <a href="/">
        <img className='h-14 md:h-24' src={logo} alt='Logo' />
      </a>
      <ul className='hidden lg:flex items-center'>
        <li className='p-4 hover:text-primary'><a href='#home'>{t('linkHome')}</a></li>
        <li className='p-4 hover:text-primary'><a href='#about'>{t('linkAbout')}</a></li>
        <li className='p-4 hover:text-primary'><a href='#roadmap'>{t('linkRoadmap')}</a></li>
        <li className='p-4 hover:text-primary'><a href='#team'>{t('linkTeam')}</a></li>
        <li className='p-4 hover:text-primary'><a href='#advisers'>{t('linkAdvisers')}</a></li>
        <li className='p-4 hover:text-primary'><a href='#partners'>{t('linkPartners')}</a></li>
        <li className='py-4'><RxDividerVertical size={28} /></li>
        <li className='py-4 px-2 hover:text-primary'>
          <a target="_blank" href={linkedInLink} className="transition-colors duration-300 hover:text-primary">
            <AiFillLinkedin size={24} />
          </a>
        </li>
        <li className='py-4 px-2 hover:text-primary'>
          <a target="_blank" href={instagramLink}
            className="transition-colors duration-300 hover:text-primary">
            <AiFillInstagram size={24} />
          </a>
        </li>
        <li className='py-4 px-2'>
          <div className="relative inline-flex">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
            <select onChange={(e) => handleSelect(e)} value={i18n.language}
              className="border border-gray-300 rounded-full text-gray-300 h-10 pl-5 pr-10 bg-black hover:border-gray-400 focus:outline-none appearance-none">
              <option value="en">English</option>
              <option value="kk">Қазақша</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </li>
      </ul>

      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[70%] md:w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='flex items-center justify-between px-4 pt-4'>
          <img className='h-14 md:h-24 m-3' src={logo} alt='Logo' />
          <div className="relative inline-flex">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
            <select onChange={(e) => handleSelect(e)} value={i18n.language}
              className="border text-base border-gray-300 rounded-full text-gray-300 h-10 pl-4 pr-6 bg-black hover:border-gray-400 focus:outline-none appearance-none">
              <option value="en">English</option>
              <option value="kk">Қазақша</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>
            <a className='hover:text-primary' href='#home' onClick={handleNav}>{t('linkHome')}</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a className='hover:text-primary' href='#about' onClick={handleNav}>{t('linkAbout')}</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a className='hover:text-primary' href='#roadmap' onClick={handleNav}>{t('linkRoadmap')}</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a className='hover:text-primary' href='#team' onClick={handleNav}>{t('linkTeam')}</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a className='hover:text-primary' href='#advisers' onClick={handleNav}>{t('linkAdvisers')}</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a className='hover:text-primary' href='#partners' onClick={handleNav}>{t('linkPartners')}</a>
          </li>
          <li className='p-4 border-gray-600'>
            <p className='text-primary'>{t('mobileSocialMedia')}:</p>
            <div className="flex items-center mt-3 space-x-3">
              <a target="_blank" href={linkedInLink} className="transition-colors duration-300 hover:text-primary">
                <AiFillLinkedin size={42} />
              </a>
              <a target="_blank" href={instagramLink}
                className="transition-colors duration-300 hover:text-primary">
                <AiFillInstagram size={42} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar