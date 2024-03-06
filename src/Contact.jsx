import React from 'react'
import Calendar from './Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <section className='contact'>
        <h2>Contact</h2>

        <div className="socials">
          <a href="https://instagram.com" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://x.com" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <a href="tel:+8181234567"><FontAwesomeIcon icon={faPhone} />(818) 123 - 4567</a>
        <a href="https://maps.app.goo.gl/qf2awk4EoxHT9Bhi8" target='_blank'><FontAwesomeIcon icon={faLocationDot} /><address>11600 Sherman Way, North Hollywood, CA 91605</address></a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.901419043156!2d-118.38598987365975!3d34.19999510991311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2942dbaa3387d%3A0xcda5ec412bb0b52c!2s11600%20Sherman%20Way%2C%20North%20Hollywood%2C%20CA%2091605!5e0!3m2!1sen!2sus!4v1709194340790!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <Calendar />
    </section>
  )
}
