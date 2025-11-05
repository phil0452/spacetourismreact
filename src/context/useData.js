import { useEffect, useState, useRef } from "react";

function useData(query) {
    //query value doesnt change for destinations
    //this fine for the navigation tabs in the destination page
    //the useeffect is then skipped so the data stays as it is 
    //since the page doesn't change only the tab link clicked, no need to pull data from json again
    const [data, setData] = useState([]);
    console.log("cannot see data)")

    //fetch json data, to be used throughout the app
    useEffect(() => {
        console.log("cannot see data here")
        const fetchData = async () => {
            console.log("cannot see data here")
             const spaceData = await fetch("/data.json");
  
            const spaceDataJson = await spaceData.json();
            setData (spaceDataJson[query]);
        };    
        
        fetchData();
    }, [query]);
    
    return data;
}

export default useData;