import React, { useState } from 'react';
import './Web.css';

const Web = () => {
  const [link, setLink] = useState('');
  const [fb, setFb] = useState('');
  const [tw, setTw] = useState('');
  const [gi, setGi] = useState('');
  const [bg, setBg] = useState('');
  const [rf, setRf] = useState('');

  return (
    <>
      <div className='form-container'>
        <div className='formInput'>
          <label>Linkedln</label>
          <span className='mid-text'>
            Do you have a Linkdln Profile ? If so, please enter it below.
          </span>
          <input
            type='text'
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <label>Facebook</label>
          <span className='mid-text'>
            Are you on Facebook ? If so, please share your profile link below.
          </span>
          <input
            type='text'
            onChange={(e) => {
              setFb(e.target.value);
            }}
          />
          <label>Twitter</label>
          <span className='mid-text'>
            Do you tweet ? Mind sharing your twitter handle url?{' '}
          </span>
          <input
            type='text'
            onChange={(e) => {
              setTw(e.target.value);
            }}
          />

          <label>Github</label>
          <span className='mid-text'>
            As a Developer it is highly valuable to have a Github Profile.
            Please share your Github Profile link below.
          </span>
          <input
            type='text'
            onChange={(e) => {
              setGi(e.target.value);
            }}
          />

          <label>Personal Website or Blog</label>
          <span className='mid-text'>
            Do you have any personal website or blog ? If so, please share it
          </span>
          <input
            type='text'
            onChange={(e) => {
              setBg(e.target.value);
            }}
          />

          <label>Any Other Reference</label>
          <span className='mid-text'>
            Do you have any other reference ? If so, would you like to share it
            ? Mentions to your work , article or any other relative reference.
          </span>
          <input
            type='text'
            onChange={(e) => {
              setRf(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Web;
