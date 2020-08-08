import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Picked Organic - 2020</p>
        <p className="copyright"><a href="https://www.instagram.com/pickedorganic/"><span className="icon fa-instagram"></span></a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
