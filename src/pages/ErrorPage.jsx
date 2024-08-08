import React from 'react'
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl my-3'>Oops!</h1>
      <p className='mt-3'>Sorry, an unexpected error has occurred.</p>
      <p className='text-primary my-3'>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className='hover:text-primary' to={`/#home`}>&rarr; Go back Home</Link>
    </div>
  )
}

export default ErrorPage