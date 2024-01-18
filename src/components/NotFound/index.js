/* eslint-disable react/no-unescaped-entities */
// Write your code here
import './index.css'

const NotFound = () => (
  <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      className="not-found-image"
      alt="not found"
    />
    <h1 className="not-found-text">Lost Your Way?</h1>
    <p className="not-found-description">
      {' '}
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
