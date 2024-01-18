/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu size="32" />
        </button>
      }
      className="popup-container"
    >
      {close => (
        <div className="pop-container">
          <div className="close-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
          </div>

          <ul className="home-about-content">
            <li className="nav-link-item">
              <Link to="/" className="home-content" onClick={() => close()}>
                <AiFillHome size="34" />
                <p className="home-text"> Home </p>
              </Link>
            </li>
            <li className="nav-link-item">
              <Link
                to="/about"
                className="home-content"
                onClick={() => close()}
              >
                <BsInfoCircleFill size="34" />
                <p className="home-text"> About </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
