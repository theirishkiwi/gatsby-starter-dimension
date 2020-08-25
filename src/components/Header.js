import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo-min.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="image main" >

            <img src=

{logo} alt="" />

          </span>

    </div>
    <div className="content">
      <div className="inner">
        <h1>Picked Organic</h1>
        <p>
NI based garket garden. Sustainably growing real food using organic principles.
        <br/>
We grow seasonal veggies free from pesticides and chemicals.

       </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Veg Club
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            FAQ's


          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Our Story
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Enquiries
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
