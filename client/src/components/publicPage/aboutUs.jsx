import React from "react";
import "../../styles/aboutUs.css";

export default function AboutUs() {
  return(
    <div class="aboutUs_container">
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
                <p>We design and curate the best and latest in interior design, make it accessible, and keep you up-to-date on cutting-edge trends in the industry. That way, you can finally take that #dreamroom from your Pinterest board and make it a reality.</p>
            </div>
            <div className="aboutUs_info_decs">
                <h2>VISION</h2>
                <p>We design and curate the best and latest in interior design, make it accessible, and keep you up-to-date on cutting-edge trends in the industry. That way, you can finally take that #dreamroom from your Pinterest board and make it a reality.</p>
            </div>
            <div className="aboutUs_info_decs">
                <h2>GOAL</h2>
                <p>We design and curate the best and latest in interior design, make it accessible, and keep you up-to-date on cutting-edge trends in the industry. That way, you can finally take that #dreamroom from your Pinterest board and make it a reality.</p>
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