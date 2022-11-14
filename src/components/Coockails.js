import React from 'react';
import drink from '../img/drink.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

function Coockails() {
  return (
    <section className='py-5 container'>
      <div className='row'>
          <div className='coockail_item_title col'>
              <h2>I Migliori coockail del litorale</h2>
          </div>
          <div className='coockail_item col'>
              <img src={drink} className="coockail_item_image" />
          </div>
          <div className='coockail_item_color col'>
            <FontAwesomeIcon icon={faMedal} className="medal_icon" />
              <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
    </section>
  )
}

export default Coockails;
