import React, { useState } from 'react';
import './Personal.css';
//import CircleIcon from '@mui/icons-material/Circle';
const Personal = () => {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [nationality, setNationality] = useState('');

  return (
    <>
      <div className='form-container'>
        <div className='formInput'>
          <label>
            What is Your first name?<span className='star'>*</span>
          </label>
          <input
            type='text'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>
            ... and last name?<span className='star'>*</span>
          </label>
          <input
            type='text'
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <label>
            What is your phone number?<span className='star'>*</span>
          </label>
          <span className='mid-text'>
            Having your phone number will help us communicate quiker ,
            especially during Scheduling . But we respect Your Privacy and
            Providing your phone number at this stage is optional
          </span>
          <input
            type='text'
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <label>
            What is your country of residence?<span className='star'>*</span>
          </label>
          <input
            type='text'
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />

          <label>
            ... and what city?
            <span className='star'>*</span>
          </label>
          <input
            type='text'
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <label>
            What is your nationality?<span className='star'>*</span>
          </label>
          <span className='mid-text'>What country are you a citizen of?</span>
          <input
            type='text'
            onChange={(e) => {
              setNationality(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Personal;
