import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const bApp = "http://localhost:5000";
const bApp = "https://divinebackend.onrender.com"

const SuccessPage = () => {
  const [divineMessage, setDivineMessage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [modalClosing, setModalClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');

    // Load Meta Pixel
    const loadMetaPixel = () => {
      if (window.fbq) {
        fbq('track', 'Purchase', {
          value: 1.00,
          currency: 'USD'
        });
        return;
      }

      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '9914126595346817');
      fbq('track', 'PageView');
      fbq('track', 'Purchase', {
        value: 1.00,
        currency: 'USD'
      });
    };

    if (sessionId) {
      fetch(`${bApp}/verify-payment?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setDivineMessage(data.message);
            setImageUrl(data.imageUrl);
            setIsLoading(false);
            loadMetaPixel();
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
  }, [navigate]);

  // Auto-close modal after 5s with animation
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setModalClosing(true);
        setTimeout(() => setShowModal(false), 500);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const handleCloseModal = () => {
    setModalClosing(true);
    setTimeout(() => setShowModal(false), 500);
  };

  const handleClickEvent=()=>{
    navigate('/')
  }

  return (
    <div className="video-container">
      <video className="video-background" autoPlay loop muted preload="auto" poster="/images/poster.PNG">
        <source src="/videos/170246-843069659_small.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {showModal && (
        <div
          className={`modal fade ${modalClosing ? 'fade-out' : 'fade-in'} show`}
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-3">
              <div className="modal-header border-0">
                <h5 className="modal-title w-100">🎉 Payment Successful</h5>
              </div>
              <div className="modal-body">
                <p>Thank you for your purchase!</p>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button className="btn btn-success" onClick={handleCloseModal}>
                  Tap into your divine mystery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="content">
        <div className="content-nav">
          <h1 className="m-xl-3">
            <span className="logo">D</span>ivine<span className="logo">M</span>yst
          </h1>
        </div>
        <p className="subheading mt-xl-4">
          Tap into Your Divine Secret Power — Discover the Purpose Hidden Within You.
        </p>
      </div>

      <div className="container next-container">
        {isLoading ? (
          <div className="spinner-border text-success" role="status"></div>
        ) : (
          <div>
            <h3>Your DivineMyst Spirit:</h3>
            <div className="divine-container">
              {imageUrl && (
                <img src={imageUrl} alt="Divine visual" className="divine" loading="lazy"  onContextMenu={(e) => e.preventDefault()}  />
              )}
              <p>{divineMessage}</p>
              <div className="home-btn">
                <button className="start-btn"
                onClick={handleClickEvent}
                >
                  Go To HomePage
                  </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
