import React from 'react';
import './homepage.styles.scss';

const Homepage = () =>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> Hats </h1>
                    <span className='subtitle'>Shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> SNEAKERS </h1>
                    <span className='subtitle'>Shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> WOMEN WEAR</h1>
                    <span className='subtitle'>Shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> MEN WEAR </h1>
                    <span className='subtitle'>Shop now</span>
                </div>
            </div>
        </div>    
    </div>

)

export default Homepage;
