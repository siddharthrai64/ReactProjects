import React from 'react';
import Button from './Button';

const buttonNameList = ["All", "Gamings", "Valentines", "Gaming", "Cricket", "News", "Cooking", "Soccer", "Songs", "Motivation", "Valentine", "Gamingsss"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {buttonNameList.map((name) => {
        return (<Button key={name} name={name}/>)
      })}
    </div>
  )
}

export default ButtonList