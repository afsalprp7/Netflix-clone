import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner(){
    const [data,setData] = useState()


    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const randomNumber = Math.floor(Math.random() * 21);
            setData(response.data.results[randomNumber]);
        })
    },[])
    return(
        <div style={{backgroundImage:`url(${data ? imageUrl+data.backdrop_path:"" })`}} className="banner">
           
            <div className="banner-content">
                <h1 className="title">{data ? data.title :""}</h1>
                    <div className="banner-buttons">
                        <button>Play</button>
                        <button>My List</button>
                    </div>
            </div>
            <h1 className="description">{data ? data.overview : ""}</h1>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner ;