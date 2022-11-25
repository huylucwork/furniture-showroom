import React, { useState, useEffect } from "react";
import Iframe from 'react-iframe';
import "../../styles/aboutUs.css";

export default function AboutUs() {

  const [aboutUsDecs, setAboutUsDecs] = useState(false);

  useEffect(() => {
    setTimeout(function() {
        setAboutUsDecs(true);
    }, 43500);
  }, []);

  return(
    <div class="aboutUs_container">
        <section class="aboutUs_intro-vid">
            <video autoPlay>
                <source src="./vid/aboutUs_intro.mp4" type="video/mp4"/>
            </video>
            <h1 className={aboutUsDecs && "show_decs"}>HIFURDEZ</h1>
            <p className={aboutUsDecs && "show_decs"}>Make your home become cozy and comfortable.</p>
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
                    <div className="row aboutUs_row">
                        <li className="col-3">Address:</li>
                        <p className="col-9">268 Ly Thuong Kiet, Ward 14, District 10, Ho Chi Minh City</p>
                    </div>
                    <div className="row aboutUs_row">
                        <li className="col-3">Phone:</li>
                        <p className="col-9">+84 28 3864 7256</p>
                    </div>
                    <div className="row aboutUs_row">
                        <li className="col-3">Email:</li>
                        <p className="col-9">contact@hifurdez.com</p>
                    </div>
                </div>
                <textarea name="contact" className="aboutUs_contact-info_sth" placeholder="Send we an email!"></textarea>
                <input type="submit" value="Submit" className="aboutUs_contact_submit"></input>
                {/* <img src="#" alt="#" /> */}
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5304992677686!2d106.65528566907425!3d10.781406281320905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec864b87985%3A0x1a24a166991dec45!2zMjY4IEzDvSBUaMaw4budbmcgS2nhu4d0LCBQaMaw4budbmcgNiwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1669106909469!5m2!1svi!2s" 
                        className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </section>
    </div>
  )
}