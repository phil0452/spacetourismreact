import react from "react";
import { NavLink } from "react-router-dom";
import usePlanetImage from '/src/context/UsePlanetImages.js';
import useData from '/src/context/useData.js';
import destination from './destination.module.css';

//with images and text coming from a feed (json file), fading them out and in wont work.
// going by a json file feed, the fade effect will happen after the tab click (values already changed).
//each part that we'd want the fading effect for, needs to have its own elements.
// for 3 images, one img element for each image. fade out the visible one, fade in the invisible one.
function Moon() {
    //grab data for destinations from the json file
    const data = useData("destinations");

    //grab the planet name and image
    const { planet, planetImg } = usePlanetImage();

    //array?.find is a safety thing. the (?) first checks
    // if the array exists before running the find(), so it doesnt return an error
    const planetData = data?.find(
        (item) => item.name.toLowerCase() == planet.toLowerCase()
    );
   
    const planetNames = data?.map((item) => item.name);

    return !planetData ? (
        <>  
        <div className="tab_list flex ff-barlow-cond" >
            <p className="font_size_16">No data available for "{planet}"</p>
        </div>          
        
        </>
    ) :
    (
        <>
                <img  id="image-mars" src={planetImg} alt={planet} />

                <div className={`${destination.tab_list_destination} flex underline_indicators ff-barlow-cond `} role="tabList" aria-label="destination list">
                    {planetNames.map((item, index) => {
                        /* the return function is needed to render the NavLink component in the tab menu */
                        return (
                            <NavLink
                            to={"/destination/" + item.toLowerCase()}
                            className={`text-accent uppercase letter-spacing-2 moon_button ${destination.destination_button}`}
                            /* the isActive boolean is built in with the NavLink component */>
                                {item}
                            </NavLink>
                            );                

                        }
                    )}                    
                </div>

                    
                <article id="moon_tab" className={`text-accent font_size_16 ${destination.destination_info} flow`}>
                    <h1 className="uppercase ff-barlow-normal font_size_28 text-accent letter-spacing-1">
                        {/* somehow, through the loading process, the data from the json file does load immediately (takes a few seconds to load)
                        basic logic was added in to handle this */}
                        <span className="ff-bellefair font_size_100 text-white d-block uppercase">{planetData.name}</span>
                    </h1>
                            {/* somehow, through the loading process, the data from the json file does load immediately (takes a few seconds to load)
                        basic logic was added in to handle this */}
                        <p className="font_weight_200 line_height" id="moonParagraph">{planetData.description}</p>

                    <div className={`flex ${destination.destination_meta} uppercase letter-spacing-2`}>
                        <div >
                            <p className="text-accent font_size_14 ff-barlow-cond font_weight_200">Avg. distance</p>
                            <p className="font_size_28 ff-bellefair  text-white">{planetData.distance}</p>
                        </div>
                        <div >
                            <p className="text-accent font_size_14 ff-barlow-cond font_weight_200">Est. travel time</p>
                            <p className=" font_size_28 ff-bellefair  text-white">{planetData.travel}</p>
                        </div>
                    </div>
                </article>            
            </>
        );
}

export default Moon;