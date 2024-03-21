import React from 'react'


const RoverDetails = ({header, characteristics, img, anchor, twoColumns}) => {

  return (
    <div className='px-4 my-24'>
      {
        twoColumns ?
          (
            <div>
              <div className='grid md:grid-cols-2 gap-10 mb-8'>
                <div className='md:col-start-2 flex px-4 justify-center md:justify-normal'>
                  <h1 className='md:text-4xl text-3xl font-bold text-primary'>
                    {header}
                  </h1>
                </div>
              </div>
              <div className='grid md:grid-cols-2 gap-10'>
                <img className="object-contain" src={img} />
                <div className='px-4'>
                  <ul className='font-medium'>
                    {characteristics?.map((ch, index) => {
                      return <li key={index}><span className='text-primary'>{ch.name}</span>: <span>{ch.descript}</span></li>
                    })}
                  </ul>
                  {
                    anchor &&
                    <div className='py-4'>
                      <a target="_blank" href={anchor.link}
                        className="transition-colors duration-300 text-white hover:text-primary font-semibold rounded-lg border border-white px-5 py-2.5 text-center inline-flex items-center"
                      >
                        {anchor.name}
                      </a>
                    </div>
                  }
                </div>

              </div>
            </div>
          )
          :
          (
            <div className='flex flex-col justify-center items-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center my-3 md:my-6 text-primary'>{header}</h1>
              {
                img &&
                <img className="object-contain max-h-80" src={img} />
              }
              <ul className='font-medium'>
                {characteristics?.map((ch, index) => {
                  return <li key={index}><span className='text-primary'>{ch.name}</span>: <span>{ch.descript}</span></li>
                })}
              </ul>
              {
                anchor &&
                <div className='py-4 text-center'>
                  <a target="_blank" href={anchor.link}
                    className="transition-colors duration-300 text-white hover:text-primary font-semibold rounded-lg border border-white px-5 py-2.5 text-center inline-flex items-center"
                  >
                    {anchor.name}
                  </a>
                </div>
              }
            </div>
          )
      }
    </div>
  )
}

export default RoverDetails