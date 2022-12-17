import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/collection.css"

export default function Collection ( {site, springRecommend, summerRecommend, autumnRecommend, winterRecommend,} ) {

    const navigate = useNavigate();

    return (
        <div className="collection_background">
            <div className={"collection_wallpaper " + (site)}>
                {/* <img src={"../img/collection-" + (site) + "1.jpg"} alt="" /> */}
            </div>

            <div className="collection_part_1">
                <img src={"../img/collection-" + (site) + "2.jpg"} alt="image 1" className="collection_image_1" />
                <div className="collection_descr_1">
                    <div className={"collection_title " + site}>
                        <h1>{site.toUpperCase()}</h1>
                    </div>
                    <h1 className={site}>About collection</h1>
                    <p>
                    {(site === "spring" &&
                    "One of the main furniture trends for this year is all about round. Sharp edges and corners are out and softer angles and edges are in, again resembling the shapes and curves more commonly found in nature. Curved kitchen cabinets, rugs and even circular patterns on the walls are big this spring. Filling your home with rounded edges will soften the feel of your living spaces, making it feel more organic while still maintaining clean lines and creating open spaces throughout.")
                    || (site === "summer" &&
                    "Appropriately named, our Summer collection brings its timeless beauty to any outdoor space. With its curved arms featuring exposed cushions, the wicker is hand-woven with our N-dura™ Resin wicker. The anodized aluminum feet ensure that the collection will be part of your life's best moments for years to come.")
                    || (site === "autumn" &&
                    "One surefire way to elicit a sense of the season is by using wooden features all over the house, but not just any wood. Lighter materials like bamboo and sandalwood give off more of a summery vibe, while vintage autumn furniture is more likely to made from darker woods, such as rich mahogany, walnut, and ebony.")
                    || (site === "winter" &&
                    "If you've got an outdoor space you want to make full use of a backyard, garden, patio, or you run a restaurant alfresco style, you're probably looking at the winter furniture to change things up over the winter. No problemo, we've got you covered! We combed through our collection to bring you our best products to get in theme for the winter season")}</p>
                </div>

                <p className="collection_descr_2">
                {(site === "spring" && 
                "Open plan living has been big for some years now, removing walls between spaces and creating larger areas where the whole family can work, rest and play in the same space. But a new addition to this movement is the idea of flow. The idea behind flow is all about creating open spaces where energy and productivity can flow naturally.")
                || (site === "summer" &&
                "Relaxation was the goal when creating Summer collection. This collection innovates by fully upholstering the frame in our woven, N-dura resin wicker over a water-resistant reticulated foam cushion core. Offered in oyster and black walnut, this collection requires minimum care, making it the perfect worry-free outdoor furniture collection.")
                || (site === "autumn" &&
                "If you're trying to set up a gorgeously autumnal living room permanently, focusing on color is the easiest way to go about it. Soft furnishings and upholstery featuring colors such as burnt orange, juniper green, maple burgundy, and various shades of tan are all mainstays when it comes to establishing an autumn color scheme living room, or any other room.")
                || (site === "winter" &&
                "Natural teak also makes an excellent choice for long-lasting outdoor furniture sets that can feel and look warmer than those made of metal. The hardwood doesn't warp when exposed to repeated moisture, and naturally naturally occurring oils in the wood also help protect it against rot and insects. When buying teak, look for a certification from the Forest Stewardship Council to ensure that the wood comes from a plantation with sustainable harvesting practices.")}</p>

            
                <img src={"../img/collection-" + (site) + "3.jpg"} alt="image 2" className="collection_image_2" />

                <p className="collection_descr_3">{
                (site === "spring" &&
                "As with almost every other area of life, sustainability is a core idea for new furniture ideas this spring. For a long time, items like sofas, chairs and tables were made using non-sustainable materials or treatments. This meant investing in furniture came with its own not-insignificant carbon footprint.")
                || (site === "summer" &&
                "A modern take on the classic summer style seating, our Summer collection features a smooth texture and a sleek frame design that mixes nicely with a variety of collections. Handcrafted from our farm harvested, high quality teak with mortise and tenon construction, this collection is built to last.")
                || (site === "autumn" &&
                "An easy way to enhance your cozy autumn room decor is by utilizing appropriate patterns where you. For that rustic feel, you can focus on plaid, tartan, floral, paisley, and toile features, displayed in varying degrees. Whether you treat patterns as a base for more decoration or as little touches of exciting detail, they can do wonders for your autumnal project.")
                || (site === "winter" &&
                "Investing in winter furniture made from weather-hardy materials can make a big difference in how a set holds up over time, what maintenance is required to keep it looking good and whether or not you need to bring it under a covered area or tarp it over the winter.")}</p>

                <img src={"../img/collection-" + (site) + "4.jpg"} alt="image 3" className="collection_image_3" />
            </div>

            <div className="collection_part_2">
                <div className="collection_line"></div>
                <h1 className={site}>{site.toUpperCase()}</h1>
                <div className="row g-5 image">
                    <img src={"../img/collection-" + (site) + "5.jpg"} alt="" className="col image_item" />
                    <img src={"../img/collection-" + (site) + "6.jpg"} alt="" className="col image_item" />
                    <img src={"../img/collection-" + (site) + "7.jpg"} alt="" className="col image_item" />
                </div>
                <p className="collection_descr_4">{
                (site === "spring" &&
                "As spring comes into bloom, why not think about trying out a few of the above ideas to give your home a new lease of life? Add some green tones to your living space, round off your 'flopen' plan kitchen with circles or bring some new life to an old piece of furniture you've found in the shed. You'll be amazed by how even a few small touches can make a big difference.")
                || (site === "summer" &&
                "Delicate yet durable, our stackable Summer collection of outdoor wicker furniture features seats and backs hand-woven from our N-dura™ Resin wicker to conform to your body. “Lighter than Summer”, this collection features graceful curves complemented by the resiliency of our hand-welded aluminum frame.")
                || (site === "autumn" &&
                "Coziness, color, and a generally rustic approach are all surefire ways to enhance the sense of these feelings in your house. Whether you want autumn accessories that suit the season at the time or pieces of furniture and decor that maintain the atmosphere for the foreseeable future, the spirit of autumn is always inviting and comforting to guests.")
                || (site === "winter" &&
                "It's that time of the year again. Temperatures drop to the early 20s, there's a cool breeze in the air and the phrase “let's chill”, takes on a new meaning. For residents in the Vietnam, the months December through February bring a much-awaited respite from the unforgiving heat we're exposed to throughout the year. That means more opportunities to hang outdoors than being confined to the air-conditioned walls of our offices and homes.")}</p>

            </div>

            <div className="collection_part_3">
                <div className="collection_line"></div>
                <h1 className={site}>Feature items</h1>
                <button
                    className={"part_3_button " + (site)}
                    onClick={() => navigate("../product")}
                >
                    View all product
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    color="#473C38"
                    className="part_3_button_icon"
                    style={{ width: "30px", height: "30px"}}
                    >
                    <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                    />
                    </svg>
                </button>
                <div className="row g-5 items">
                    {site === 'spring' && springRecommend.map((value,index)=> {
                        return(
                            <div key={index} className="col item" onClick={()=>{navigate(`../product-detail/${value.id}`)}}>
                                <div className="collection_img">
                                    <img src={value.media_1} alt="" />
                                    <img src={value.media_0} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                    {site === 'summer' && summerRecommend.map((value,index)=> {
                        return(
                            <div key={index} className="col item" onClick={()=>{navigate(`../product-detail/${value.id}`)}}>
                                <div className="collection_img">
                                    <img src={value.media_1} alt="" />
                                    <img src={value.media_0} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                    {site === 'autumn' && autumnRecommend.map((value,index)=> {
                        return(
                            <div key={index} className="col item" onClick={()=>{navigate(`../product-detail/${value.id}`)}}>
                                <div className="collection_img">
                                    <img src={value.media_1} alt="" />
                                    <img src={value.media_0} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                    {site === 'winter' && winterRecommend.map((value,index)=> {
                        return(
                            <div key={index} className="col item" onClick={()=>{navigate(`../product-detail/${value.id}`)}}>
                                <div className="collection_img">
                                    <img src={value.media_1} alt="" />
                                    <img src={value.media_0} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}