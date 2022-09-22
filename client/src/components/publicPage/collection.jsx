import React from "react";
import "../../styles/collection.css"

export default function Collection ( {} ) {

    let site = "autumn";

    return (
        <div className="collection_background">
            <div className="collection_wallpaper">
                <img src="" alt="" />
                <div id="title" className={"collection_title " + site}>
                    <h1>{site.toUpperCase()}</h1>
                    <p>A special gift for {site}</p>
                </div>
            </div>

            <div>
                <img src="" alt="image 1" className="collection_image_1" />
                <div className="collection_descr_1">
                    <h1 className={site}>About collection</h1>
                    <p>The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).</p>
                </div>

                <p className="collection_descr_2">There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). </p>

                <img src="" alt="image 2" className="collection_image_2" />

                <p className="collection_descr_3">There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). </p>

                <img src="" alt="image 3" className="collection_image_3" />
            </div>

            <div className="collection_line"></div>

            <div>
                
            </div>
        </div>
    )
}