
import { useLocation } from "react-router-dom";
import moonImg from "/src/assets/destination/image-moon.webp";
import marsImg from "/src/assets/destination/image-mars.webp";
import europaImg from "/src/assets/destination/image-europa.webp";
import titanImg from "/src/assets/destination/image-titan.webp"

//setup a dictionary object of key value pairs
//key is planet name, value is the image object imported
const planetImagesMap = {
    "": moonImg,
    moon: moonImg,
    mars: marsImg,
    europa:europaImg,
    titan: titanImg
};

function UsePlanetImage() {
    //grab the current url and get the last part of the url path
    const location = useLocation();
    const PlanetFromUrl = location.pathname.split("/", 3);
    //grab planet's name
    const PlanetName = PlanetFromUrl[PlanetFromUrl.length - 1]
    const planetImg = planetImagesMap[PlanetName];

    return { planet: PlanetName, planetImg };
}

export default UsePlanetImage;