import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <Link className='header-logo' to='/'>
          <img
            src='https://alan.app/static/alan-logo-medium.79f960a7.svg'
            alt=''
          />
        </Link>
        <div className="header-menu">
            <ul className="header-list">
                <li className="header-item"><a  href="https://alan.app/platform" target='_blank' rel="noreferrer">Platform</a></li>
                <li className="header-item"><a  href="https://alan.app/docs/client-api/web/web-api/" target='_blank' rel="noreferrer">Integrations</a></li>
                <li className="header-item"><a  href="https://alan.app/about-us" target='_blank' rel="noreferrer">Company</a></li>
                <li className="header-item"><a  href="https://alan.app/docs/" target='_blank' rel="noreferrer">Docs</a></li>
                <li className="header-item"><a  href="https://alan.app" target='_blank' rel="noreferrer">Entertainment</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};
