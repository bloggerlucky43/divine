import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const bApp="https://divinebackend.onrender.com"

const SuccessPage = () => {
  const [divineMessage, setDivineMessage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
  
    if (sessionId) {
      fetch(`${bApp}/verify-payment?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setDivineMessage(data.message);
            setImageUrl(data.imageUrl);
            setIsLoading(false);
          } else {
            alert(data.message || 'Something went wrong.');
            navigate('/');
          }
        })
        .catch(() => {
          alert('Server error occurred.');
          navigate('/');
        });
    }
  }, []);
  

  // Function to submit the form data to the Divine API
 

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
            </div>
            <div className="container next-container">
            {isLoading ? (
        <div className="spinner-border text-success align-self-center" role='status' >
        </div>
      ) : (
        <div>
          <h3>Your DivineMyst Message:</h3>
          {imageUrl && <img src={imageUrl} alt="Divine visual" className='divine' loading='lazy'/>}
          <p>{divineMessage}</p>
        </div>
      )}

            </div>
           
            
        </div>
    // <div>
   
    // </div>
  );
};

export default SuccessPage;
