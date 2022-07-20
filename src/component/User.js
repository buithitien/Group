import React from 'react'
import user1 from '../user1.PNG';
import user2 from '../user2.PNG';
import user3 from '../user3.PNG';

const User = () => {
  return (
    <div className='list-user'>
      <div className='user1'>
        <div className='image-user1'>
          <img src={user1} alt="user1" />
        </div>
        <div className='title-user1'>
          <h5>ALISON HALVERSTON</h5>
          <p>Testimonials are short quotes from people </p>
        </div>
      </div>
      <div className='user1'>
        <div className='image-user1'>
          <img src={user1} alt="user1" />
        </div>
        <div className='title-user1'>
          <h5>ALISON HALVERSTON</h5>
          <p>Testimonials are short quotes from people </p>
        </div>
      </div>
      <div className='user1'>
        <div className='image-user1'>
          <img src={user1} alt="user1" />
        </div>
        <div className='title-user1'>
          <h5>ALISON HALVERSTON</h5>
          <p>Testimonials are short quotes from people </p>
        </div>
      </div>
    </div>
  )
}

export default User