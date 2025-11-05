import React, { useState } from "react";
import useData from '/src/context/useData.js';


import crew from './crew.module.css'
//with images and text coming from a feed (json file), fading them out and in wont work.
// going by a json file feed, the fade effect will happen after the tab click (values already changed).
//each part that we'd want the fading effect for, needs to have its own elements.
// for 3 images, one img element for each image. fade out the visible one, fade in the invisible one.
function Crew() {
    const [currItem, setCurrItem] = useState(0);
    const data = useData("crew");

    return (
        <>
            <main id="main" class={`grid_container ${crew.grid_container} ${crew.grid_container_crew} flow`}>
                <h1 class={`numbered_titles ${crew.numbered_titles}`}><span>02</span> Meet your crew</h1>
                
                <div class={`flex dot_indicators ${crew.dot_indicators}`} role="tabList" aria-label="crew member list">
                    {data.map((item, index) => {
                        return (
                            <span key={index}
                            onClick={() => setCurrItem(index)}
                            aria-current={index===currItem ? "page": ""}></span>

                        );
                        })}                    
                </div>

                <article class={`${crew.crew_details} flow`} id="commander_tab" role="tabpanel">
                <header class="flow flow_space_small ff-bellefair">
                    <h3 class="uppercase font_size_32">{data[currItem]?.role}</h3>
                    <h1 class="uppercase font_size_56 ">{data[currItem]?.name}</h1>
                </header>
                <p class="text-accent font_weight_200 line_height">
                    {data[currItem]?.bio}
                </p>
                
                </article>

                <img id="douglas-hurley" src={data[currItem]?.images.png} alt={data[currItem]?.name}  />
                <img id="douglas-hurley" src={data[currItem]?.images.webp} alt={data[currItem]?.name}  />
            </main>
        </>
    );

}


export default Crew;
