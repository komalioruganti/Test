import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import alan_key from './apikey';

const Alan = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('');
  useEffect(() => {
    alanBtn({
        key: alan_key,
        onCommand: (commandData) => {
          if(commandData.command === 'name'){
            console.log("entered in here")
            setName(commandData.data)
          }
          else if(commandData.command === 'phone'){
            setPhone(commandData.data)
          }
          else if(commandData.command === 'address'){
            setAddress(commandData.data)
          }
          else{
            console.log("notinf rteided")
          }
        }
    });
  }, []);
  return (
    <>
    <div className='form-fields'>
      <input
        placeholder='Name'
        name='name'
        onChange={(event) => setName(event.target.value)}
        value={name}
        type='text'
      />
      <input
        placeholder='Phone'
        name='phone'
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
        type='text'
      />
      <input
        placeholder='Address'
        name='address'
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        type='text'
      />

      <button className='submit-btn'>Submit</button>
    </div>
    </>
  );
}

export default Alan;
