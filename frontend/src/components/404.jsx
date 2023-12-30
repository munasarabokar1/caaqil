import { Button } from 'konsta/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorElements() {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/')
      }
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">    
      Page not found <br />
      <Button onClick={handleClick} className='container'>Go back To home</Button>
      {/* <span className="loading loading-ring loading-md"></span> */}
    </div>
  )
}

export default ErrorElements