import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/homepage.css";

export default function Homepage( {site, setSite} ) {
  const navigate = useNavigate();

  return (
    <div className="homepage_background">
      <div className="row g-0 homepage_introduce">
        <div className="col-5">
          <div className="introduce_title">
            <div className="title_sub-name">Showroom</div>
            <div className="title_name">HIFURDEZ</div>
            <div className="title_descr">We will bring ...</div>
          </div>
          <div className="introduce_slogan">
            <p>Modern</p>
            <p>Comfort</p>
            <p>Coziness</p>
            <div className="slogan_icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
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
          
          </div>
          <div className="topic_image_2">
          
          </div>
          
          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">SPRING</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button
            className="collection_button" 
            onClick={() => {
              setSite('spring');
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
          
          </div>

          <div className="topic_image_2">
          
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">SUMMER</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button 
            className="collection_button"
            onClick={() => {
              setSite('summer');
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
          
          </div>

          <div className="topic_image_2">
          
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">AUTUMN</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button 
            className="collection_button"
            onClick={() => {
              setSite('autumn');
              navigate("collection-detail/autumn")}
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
              onClick={() => navigate("../")}
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
          
          </div>

          <div className="topic_image_2">
          
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">WINTER</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button 
            className="collection_button"
            onClick={() => {
              setSite('winter');
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
              onClick={() => navigate("../")}
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
