import React, { useState, useEffect } from "react";
import useData from '/src/context/useData.js';


import technology from './technology.module.css'

//with images and text coming from a feed (json file), fading them out and in wont work.
// going by a json file feed, the fade effect will happen after the tab click (values already changed).
//each part that we'd want the fading effect for, needs to have its own elements.
// for 3 images, one img element for each image. fade out the visible one, fade in the invisible one.

function Technology() {
    const [currItem, setCurrItem] = useState(0);
    const data = useData("technology");

    return (
        <>
            <main id="main" class={`grid_container ${technology.grid_container} ${technology.grid_container_technology} flow`}>
                <h1 class={`numbered_titles ${technology.numbered_titles}`}><span>03</span> Space launch 101</h1>
                
                <div class={`flex number_indicators ${technology.number_indicators}`}  role="tabList" aria-label="technology list">
                    {data.map((item, index) => {
                        return (
                            <span key={index}
                            onClick={() => setCurrItem(index)}
                            aria-current={index===currItem ? "page": ""}>{index + 1}</span>

                        );
                        })}   
                </div>

                <article class={`${technology.technology_details} flow`} id="vehicle_tab" role="tabpanel">
                    <header class="flow flow_space_small ff-bellefair">
                        <h3 class="uppercase font_size_32">The terminology...</h3>
                        <h1 class="uppercase font_size_56">{data[currItem]?.name}</h1>
                    </header>

                    <p class={`text-accent font_weight_200 ${technology.line_height}`}>
                        {data[currItem]?.description}
                    </p>
                </article>               

                <picture>
                    <source srcset={data[currItem]?.images.portrait} media="(min-width: 720px)" />
                    <img src={data[currItem]?.images.landscape} alt="launch vehicle" />
                </picture>
            </main> 
        </>
    );
}


export default Technology;
