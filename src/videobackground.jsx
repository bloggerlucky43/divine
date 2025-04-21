import React ,{useRef}from "react";
import Form from "./component/form";

const images=[
    {src:"/images/a.jpg" , alt:'beauty'},
    {src:"/images/b.jpg" , alt:'Nice'},
    {src:"/images/c.jpg" , alt:'Handsome'},
    {src:"/images/d.jpg" , alt:'FIne'},
]

const VideoBackground=()=>{
    const formRef=useRef(null);

    const handleScrollView=()=>{
        if(formRef.current){
            formRef.current.scrollIntoView({behavior:'smooth'});
        }
    }
    return (
        <div className="video-container">
            <video className="video-background"  autoPlay loop muted preload="auto" poster="/images/poster.PNG">
                <source src="/videos/170246-843069659_small.mp4" type="video/mp4" />
                Your browser does not support video tag
            </video>

            <div className="content">
                <div className="content-nav">
                    <h1 className="m-xl-3 "><span className="logo">D</span>ivine<span className="logo">M</span>yst</h1>
                </div>
                <p className="subheading mt-xl-4">
  Tap into Your Spirit
</p>
                <p className="subheading mt-xl-4 fs-4">
                Embrace your ascension
</p>
<div className="button">
<button className="start-btn" onClick={handleScrollView}>Awaken Your Spiritual Purpose</button>

</div>

            </div>
            <div className="container next-container" ref={formRef}>
                <Form />
            <div className="images-container">
                <h1>Experience the Art of Your Inner Self</h1>
                <div className="gallery">
                    {images.map((img,index)=>(
                        <div className="gallery-items">
                            <img src={img.src} alt={img.alt} onContextMenu={(e) => e.preventDefault()} />
                        </div>
                    ))}
                </div>
                <div className="video-sec">
                <video className="video" controls loop>
                <source src="/videos/Eagle.Spirit-1-1 logo.webm" type="video/webm" />
                Your browser does not support video tag
            </video>
                <video className="video" controls loop>
                <source src="/videos/Ocean.Spirit.webm" type="video/webm" />
                Your browser does not support video tag
            </video>

                </div>
                <p></p>
            </div>
            </div>
           
            
        </div>
    )
}

export default VideoBackground;