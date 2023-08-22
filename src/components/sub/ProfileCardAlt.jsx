import React from 'react'
import { useTranslation } from 'react-i18next'

const ProfileCardAlt = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'team' });
  return (
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <img className="object-cover rounded-3xl w-full h-48 xl:h-64" src={props.img} alt={props.fullname} />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-base font-semibold text-primary">{t('achievements')}</p>
          <div className="font-medium text-gray-100 text-left">
            {props.achievements.map((a, index) => (<p key={index}>- {a}</p>))}
          </div>
        </div>
      </div>
      <div className='text-center mt-2'>
          <p className="font-bold text-primary">{props.fullname}</p>
          <p className="text-xs text-gray-100">{props.position}</p>
        </div>
    </div>
  )
}

export default ProfileCardAlt