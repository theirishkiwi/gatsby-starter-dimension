import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Picked Organic- Farming using organic princiles - 2020 - <a href="https://www.instagram.com/pickedorganic/">Lets be social!<span className="icon fa-instagram"></span></a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
