import React from 'react'

const Footer = () => {
  return (
    <footer className="footer ">
        <div className="footer-header">Some small heading inside footer.</div>
        <ul className="social-links list-non-bullet">
            <li className="list-item-inline"><a href="#" className="link">socialOne</a></li>
            <li className="list-item-inline"><a href="#" className="link">socialTwo</a></li>
            <li className="list-item-inline"><a href="#" className="link">socialThree</a></li>
        </ul>
    </footer>
  )
}

export default Footer