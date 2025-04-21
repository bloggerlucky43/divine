import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
const bApp="https://divinebackend.onrender.com"
// const bApp="http://localhost:5000"

const stripePromise = loadStripe('pk_test_51OBvIaERzzYl3tbOMxy92GDPsSG8rLcwCfH14GlQQzJbB8QYY5ZSftts9fEz1KI7aJ6iFzgKjdALWLgsiDoUeVOs00hpuBwAdM');


const Form = () => {
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [desire, setDesire] = useState("");
  const [gender, setGender] = useState("");
  const [sign, setSign] = useState("");
  const [loading,setLoading]=useState(false);

  const handlePayment=async(e)=>{
    e.preventDefault();
    setLoading(true)

    if (!dob || !name || !location || !desire || !gender || !sign) {
      alert("Please fill in all the fields before proceeding to payment!");
      setLoading(false)
      return;
    }
    
    const formData={
      dob:dob.trim(),
      name:name.trim(),
      location:location.trim(),
      desire:desire.trim(),
      sign:sign.trim(),
      gender:gender.trim(),
    };

    

    const res=await fetch(`${bApp}/create-checkout-session`,{
      method:'POST',
      headers:{"Content-Type":'application/json'},
      body: JSON.stringify(formData)
    });

    const data=await res.json();
    console.log("Data gotten: ", data);
    
    if(data.url){
      window.location.href=data.url;
    }else {
      alert("Something went wrong")
    }
  
  };


 

  return (
    <section className="form-section">
      <div className="container mystic-form">
        <h2 className="form-heading">Reveal Your Divine Insight</h2>
        <form>
          <div className="form-group">
            <input
              type="date"
              placeholder="Date of Birth"
              className="form-control"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Name for spiritual decoding"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Country of Birth/Mother's origin"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select
              className="form-control"
              required
              value={desire}
              onChange={(e) => setDesire(e.target.value)}
            >
              <option value="">Highest Aspiration</option>
              <option value="love">Love</option>
              <option value="wealth">Wealth</option>
              <option value="spiritual-growth">Spiritual Growth</option>
              <option value="success">Success</option>
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-control"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Born as</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-control"
              required
              value={sign}
              onChange={(e) => setSign(e.target.value)}
            >
              <option value="">Sign</option>
              <option value="aries">Aries</option>
              <option value="taurus">Taurus</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
              <option value="capricorn">Capricorn</option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
            </select>
          </div>

          <button
  type="submit"
  onClick={handlePayment}
  className="start-btn"
  disabled={loading}
>
  {loading ? (
    <>
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
      Processing...
    </>
  ) : (
    "Get My Divine Spirit"
  )}
</button>
        </form>
      </div>

     
    </section>
  );
};

export default Form;
