import React from "react";
import Form from "./component/form";


const VideoBackground=()=>{
    return (
        <div className="video-container">
            <video className="video-background"  autoPlay loop muted>
                <source src="/videos/170246-843069659.mp4" type="video/mp4" />
                Your browser does not support video tag
            </video>

            <div className="content">
                <div className="content-nav">
                    <h1 className="m-xl-3 "><span className="logo">D</span>ivine<span className="logo">M</span>yst</h1>
                </div>
                <p className="subheading mt-xl-4">
  Tap into Your Divine Secret Power — Discover the Purpose Hidden Within You.
</p>
<div className="button">
<button className="start-btn">Reveal My Divine Insight</button>

</div>

            </div>
            <div className="container next-container">
                <Form />

            </div>
           
            
        </div>
    )
}

export default VideoBackground;