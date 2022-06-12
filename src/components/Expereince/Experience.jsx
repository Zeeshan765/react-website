import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <>
      <div className='form-container'>
        <div className='formInput'>
          <label>
            How many years of relavent experience do you have?
            <span className='star'>*</span>
          </label>
          <span className='mid-text'>
            How many years of experence do you have directly related to the
            position you are applying for?
          </span>
          <select
            name='category'
            id='category'
            // onChange={(e) => {
            //   setCategory(e.target.value);
            // }}
          >
            <option disabled selected className='option'>
              Choose
            </option>

            <option value='Mic'>Mic</option>
          </select>
          <label>
            How many years of total professional expereince you have?
            <span className='star'>*</span>
          </label>
          <select
            name='category'
            id='category'
            // onChange={(e) => {
            //   setCategory(e.target.value);
            // }}
          >
            <option disabled selected className='option'>
              Choose
            </option>

            <option value='Mic'>1</option>
          </select>
          <label>
            What Domain is Your Expertise in?<span className='star'>*</span>
          </label>
          <span className='mid-text'>Select all that apply</span>
          <div className='check'>
            <input
              type='checkbox'
              id='checkbox'
              name='checkbox'
              value='checkbox'
              className='check-1'
            />
            Front End
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Back End</span>
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Database</span>
          </div>
          <label>Tell us about your expert skills</label>
          <span className='mid-text'>Select all that apply</span>
          <div className='check'>
            <input
              type='checkbox'
              id='checkbox'
              name='checkbox'
              value='checkbox'
              className='check-1'
            />
            Reactjs
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Angular</span>
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Javascript</span>
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Vue js</span>
          </div>
          <label>Other Expert Skills?</label>
          <span className='mid-text'>
            Any Other Skills consider yourself expert in?
          </span>
          <input type='text' name='name' placeholder='Name' />

          <label>
            Are You Familiar in These Skills?<span className='star'>*</span>
          </label>
          <span className='mid-text'>Select all that apply</span>
          <div className='check'>
            <input
              type='checkbox'
              id='checkbox'
              name='checkbox'
              value='checkbox'
              className='check-1'
            />
            Reactjs
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Angular</span>
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Javascript</span>
            <br />
            <input type='checkbox' id='checkbox' className='check-1' />
            <span>Vue js</span>
          </div>
          <label>Any other Skills and Expertise?</label>
          <span className='mid-text'>
            Any Other Skills you want us to Know?
          </span>
          <input type='text' name='name' placeholder='Name' />
        </div>
      </div>
    </>
  );
};

export default Experience;
