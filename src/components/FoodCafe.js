import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function FoodCafe() {
  return (
    <section className='container py-5'>
        <div className='row'>
            <div className='col-6'>
                <h1 className='food_title'>ristorante con ampia terrazza</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center flex-column'>
                <FontAwesomeIcon icon={faReceipt} className="icon-food"/>
                <h3>Menu</h3>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center flex-column'>
                <FontAwesomeIcon icon={faWineGlass} className="icon-food"/>
                <h3>Carta Dei Vini</h3>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center flex-column'>
                <FontAwesomeIcon icon={faStar} className="icon-food"/>
                <h3>Esperienze</h3>
            </div>
        </div>
    </section>
  )
}

export default FoodCafe;
