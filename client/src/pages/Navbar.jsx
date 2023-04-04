import React from 'react'
import hotels from './Hotels';
import './styles.css';

const navbar = () => {
  return (
    
    <nav className="navigation">
        <div className="nav-brand">
            <p>Hotels Showcase</p>
        </div>
        <ul className="nav-pills">
            <li className="list-item-inline">
                <a href="/" className="link link-active">home</a>
            </li>
            <li className="list-item-inline">
                <a href="/bookings" className="link">bookings</a>
            </li>
            <li className="list-item-inline">
                <a href="/hotels" className="link">hotels</a>
            </li>
        </ul>
    </nav>
  )
}

export default navbar