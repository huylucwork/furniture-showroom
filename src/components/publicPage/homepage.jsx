import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/homepage.css";

export default function Homepage( {site, setSite, collectionProduct, setFilterCollection} ) {
  const navigate = useNavigate();

  return (
    <div className="homepage_background">
      <div className="row g-0 homepage_introduce">
        <div className="col-5">
          <div className="introduce_title">
            <div className="title_sub-name">Showroom</div>
            <div className="title_name">HIFURDEZ</div>
            <div className="title_descr">High-end furniture design</div>
          </div>
          <div className="introduce_slogan">
            <p>Modern</p>
            <p>Comfort</p>
            <p>Coziness</p>
            <div className="slogan_icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className="col-7 introduce_image">
          <img src="./img/homepageIntroduce.jpg" alt="wallpaper" /> 
        </div>

      </div>
          <div className="introduce_scroll">
            <p>SCROLL</p>
            <div></div>
          </div>

      <div id="collection" className="collection_container">

        <div className="homepage_spring">
          <div className="topic_image_1">
            <img src="../img/spring12.jpg" alt="" />
          </div>
          <div className="topic_image_2">
            <img src="../img/spring2.jpg" alt="" />
          </div>
          
          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">SPRING</div>
            <div className="title_descr">
            Spring has sprung. New life abounds all around as the winter fades into the distance. It's little wonder that this is the most popular time of year to decorate the home. Spring is a fresh start and a time to blow away the cobwebs of the colder months, breathing new life into your home. Below we'll give you some newest design on what is hot this spring, looking at furniture items, color schemes and design ideas that you could use to give your home a bright new start for the rest of the year.

            </div>
          </div>

          <button
            className="spring collection_button" 
            onClick={() => {
              setSite('spring');
              setFilterCollection(collectionProduct[1]);
              navigate("../collection-detail/spring")
            }
            }>
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#473C38"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>
        </div>

        <div className="homepage_summer">
          <div className="homepage_summer_scroll"></div>

          <div className="topic_image_1">
            <img src="../img/homepageSummer.jpg" alt="" />
          </div>

          <div className="topic_image_2">
            <img src="../img/homepageSummer1.jpg" alt="" />
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">SUMMER</div>
            <div className="title_descr">
            Whether your customers need a place to call sanctuary and relax after a long day or a space to gather around the table with friends and family, our signature summer furniture collections are curated to fit the lifestyles of our customers… and yours. Summer furniture is a collection of modern outdoor and indoor furniture crafted for a lifetime of liveable luxury. With more than a quarter century of experience under our belts, we're committed to enhancing customers' living and dining spaces through timeless yet fashionable, furniture designs.

            </div>
          </div>

          <button 
            className="summer collection_button"
            onClick={() => {
              setSite('summer');
              setFilterCollection(collectionProduct[2]);
              navigate("collection-detail/summer")}
            }
          >
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#473C38"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>

        </div>

        <div className="homepage_autumn">
          <div className="homepage_autumn_scroll"></div>

          <div className="topic_image_1">
            <img src="../img/autumn2.jpg" alt="" />
          </div>

          <div className="topic_image_2">
            <img src="../img/autumn7.jpg" alt="" />
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">AUTUMN</div>
            <div className="title_descr">
            Autumn furniture and decor can mean so many different things. It could mean pieces that work all year round, reflecting that warm, comforting autumn color palette that you know and love, or it can be those perfect temporary pieces to bring out of storage to display during the months of the season. Either way, making choices that reflect the spirit of autumn in terms of color, materials, and overall feel can be a great way to infuse some personality into your home. We've put together this list of multiple choices for autumn decor and furniture that you can make to bring the spirit of falling leaves out in your house, whether as permanent fixtures or for only a few weeks at a time.

            </div>
          </div>

          <button 
            className="autumn collection_button"
            onClick={() => {
              setSite('autumn');
              setFilterCollection(collectionProduct[1]);
              navigate("collection-detail/autumn")}
            }
          >
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#F0EAE2"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>
        </div>

        <div className="homepage_winter">
          <div className="homepage_winter_scroll"></div>

          <div className="topic_image_1">
            <img src="../img/winter14.jpg" alt="" />
          </div>

          <div className="topic_image_2">
            <img src="../img/winter15.jpg" alt="" />
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">WINTER</div>
            <div className="title_descr">
            Even in mild climates, most of us get far more use from our furniture in the spring and summer than in chillier times of year. You can extend the use of your patio furniture and rooms into the colder months with a few practical tips, including what materials to look for if you're investing in new furniture and ways to make your existing living room more comfortable and inviting in cooler weather.

            </div>
          </div>

          <button 
            className="winter collection_button"
            onClick={() => {
              setSite('winter');
              setFilterCollection(collectionProduct[4]);
              navigate("collection-detail/winter")}
            }
          >
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#473C38"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>
        </div>
      </div>
    </div>
  );
}