import React ,{useRef}from "react";
import Form from "./component/form";


const VideoBackground=()=>{

    const formRef=useRef(null);

    const images = [
        '/images/a.jpg',
        '/images/e.jpg',
        '/images/f.jpg',
        '/images/g.jpg',
        '/images/h.jpg',
      ];
    
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];

      const secondImage=[
        '/images/i.jpg',
        '/images/b.jpg',
        '/images/c.jpg',
        '/images/d.jpg',
      ];

      const randomInd=Math.floor(Math.random() * secondImage.length);
      const secondSelected=secondImage[randomInd];

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
       
<div className="button">
<button className="start-btn" onClick={handleScrollView}>Vibrate Your Mystical Spirit</button>

</div>

            </div>
            <div className="container next-container" ref={formRef}>
                <Form />
            <div className="images-container">
                <h1>Spiritual Travels</h1>
                
                <div className="gallery">
                    <img src={selectedImage} id="selected" alt="beauty" onContextMenu={(e) => e.preventDefault()} />

                    <video className="video"  autoPlay loop muted  onContextMenu={(e) => e.preventDefault()}>
                <source src="/videos/Eagle.Spirit-1-1 logo.webm" type="video/webm" />
                Your browser does not support video tag
            </video>

                    <img src={secondSelected} alt="beauty" onContextMenu={(e) => e.preventDefault()} />
                    <video className="video" autoPlay loop   onContextMenu={(e) => e.preventDefault()}>
                <source src="/videos/Ocean.Spirit.webm" type="video/webm" />
                Your browser does not support video tag
            </video>
                    {/* <img src="/images/b.jpg" alt="beauty" onContextMenu={(e) => e.preventDefault()} /> */}
                </div>
{/* 
                <div className="video-sec">

                </div> */}
            </div>
            </div>
           
            
        </div>
    )
}

export default VideoBackground;