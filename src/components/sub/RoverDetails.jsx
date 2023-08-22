import React from 'react'


const RoverDetails = (props) => {

  return (
    <div className='px-4 mt-10'>
      {
        props.img ?
          (
            <div className='my-24'>
              <div className='grid md:grid-cols-2 gap-10 mb-8'>
                <div className='md:col-start-2 flex px-4 justify-center md:justify-normal'>
                  <h1 className='md:text-4xl text-3xl font-bold text-primary'>
                    {props.header}
                  </h1>
                </div>
              </div>
              <div className='grid md:grid-cols-2 gap-10'>
                <img className="object-contain" src={props.img} />
                <div className='px-4'>
                  <ul className='font-medium'>
                    {props.characteristics?.map((ch, index) => {
                      return <li key={index}><span className='text-primary'>{ch.name}</span>: <span>{ch.descript}</span></li>
                    })}
                  </ul>
                  {
                    props.anchor &&
                    <div className='py-4'>
                      <a target="_blank" href={props.anchor.link}
                        className="transition-colors duration-300 text-white hover:text-primary font-semibold rounded-lg border border-white px-5 py-2.5 text-center inline-flex items-center"
                      >
                        {props.anchor.name}
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
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center my-3 md:my-6 text-primary'>{props.header}</h1>
              <ul className='font-medium'>
                {props.characteristics?.map((ch, index) => {
                  return <li key={index}><span className='text-primary'>{ch.name}</span>: <span>{ch.descript}</span></li>
                })}
              </ul>
              {
                props.anchor &&
                <div className='py-4 text-center'>
                  <a target="_blank" href={props.anchor.link}
                    className="transition-colors duration-300 text-white hover:text-primary font-semibold rounded-lg border border-white px-5 py-2.5 text-center inline-flex items-center"
                  >
                    {props.anchor.name}
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