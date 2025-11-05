import react from "react";
import index from './home.module.css'
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <>
        <main id="main" className={`grid_container ${index.gridContainer} ${index.gridContainerHome}`}>
            <div>
                <h1 className={`uppercase ff-bellefair text-accent letter-spacing-1 ${index.title}`}>So, you want to travel to 
                    <span className={`ff-bellefair text-white d-block ${index.titleSpan}`}>Space</span>
                </h1>
                <p className="text-accent font_weight_200 line_height">
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div>
                <NavLink
                to="destination"
                className="action_button uppercase ff-bellefair text-dark bg-white font_size_28">
                    Explore
                </NavLink>
            </div>
        </main>
        </>
    )
}

export default Home;