import React from "react";
import "../../styles/aboutUs.css";

export default function AboutUs() {
  return(
    <div class="aboutUs_container">
        <div className="vid">
            <video autoPlay>
                <source src="./vid/aboutUs_intro.mp4" type="video/mp4"/>
            </video>
        </div>
        <section class="aboutUs_navbar"></section>
        <section class="aboutUs_intro-vid">
            <h1>HIFURDEZ</h1>
            <p>Make your home become cozy and comfortable.</p>
            <div className="aboutUs_contact">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </section>
        <section class="aboutUs_info">
            <div className="aboutUs_info_decs">
                <h2>MISSION</h2>
                <p>Focus on improving customer experience, The most enthusiastic, finest service, Guarantee harmonic relation between company benefit, customer experience and social responsibility, We are your reliable companion.</p>
            </div>
            <div className="aboutUs_info_decs">
                <h2>VISION</h2>
                <p>Our goal is to sell products with reasonable price and high quality. Our products will be sold at an reasonable price. We guarantee to offer you the highest quality products.  With the most extraordinary design.</p>
            </div>
            <div className="aboutUs_info_decs">
                <h2>GOAL</h2>
                <p>With the ambition to become one of your friend, a pioneer in the interior field, Hifurdez always tries to improve with Vietnamese elite and intellect. To accomplish that ambition, Hifurdez is committed to fulfill fully the core value proposed by our company "human - product - experience".</p>
            </div>
            <img src="#" alt="#" className="aboutUs_info_img" />
            <img src="#" alt="#" className="aboutUs_info_img" />
            <img src="#" alt="#" className="aboutUs_info_img" />
        </section>
        <section class="aboutUs_founder"></section>
        <section class="aboutUs_contact-us">
            <div className="aboutUs_contact-us_wrapper">
                <div class="aboutUs_contact-info">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li>Tel: 0123456789</li>
                        <li>Address: 123 XBT str,...</li>
                        <li>...</li>
                    </ul>
                </div>
                <textarea name="contact" className="aboutUs_contact-info_sth"></textarea>
                <input type="submit" value="Submit" className="aboutUs_contact_submit"></input>
                <img src="#" alt="#" />
            </div>
        </section>
    </div>
  )
}