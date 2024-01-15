import React from 'react'; 
import wall from "./images/ra1.jpg";
import vk2 from "./images/ra2.jpg";
import vk3 from "./images/ra3.jpg";
import vk4 from "./images/ra4.jpg";
import vk5 from "./images/ra5.jpg";
import vk6 from "./images/ra8.jpg";
import vk7 from "./images/ra7.jpg";
import book2 from "./images/ra6.jpg";
import './style.css'

const WeddingCard = () => {
  return (
    
      <div className="slider-container">
      <div class="wrapper">
  <div class="bg"> RA </div>
  <div class="fg"> RA </div>
</div>

 <img src={wall} className='ww'/>
 <img src={vk2} className='ab'/>
 <img src={vk3} className='ab'/>

 <h4 className='ag'>PHOTO GALLERY</h4>

 <div class="gallery">
  <img src={vk4} alt="a hot air balloon"/>
  <img src={vk5} alt="a sky photo of an old city"/>
  <img src={vk6} alt="a small boat"/>
  <img src={vk7} alt="a forest"/>
</div>
 <h4 className='ag'>DIGITAL WEDDING CARD</h4>

<div class="card">
		<div class="imgBox">
			<div class="bark"></div>
			<img src={book2}/>
		</div>
		<div class="details">
			<h4 class="color1">Ranbir kapoor and Alia Bhatt</h4>
			<h4 class="color2 margin">(HAPPY MARRIED LIFE)</h4>
			<p>YOU'R TEXT,</p>
			<p>text.. .</p>
			<p>text text text text</p>
			<p>text text text text text text text text</p>
			<p>text text text text</p>
			<p>text text text texttext text text text</p>
			<p>text text text texttext text text text</p>
			<p>text text text text </p>
			<p class="text-right">text text text text</p>
			<p class="text-right">text text text text</p>
		</div>
	</div>

<div class="centered">

 <video className='med' width="400" controls>
      <source src="" type="video/mp4"/>
      <source src="" type="video/ogg"/>
    </video>



<center className='location'> 
       
        <h4 className='ag'> DIRECTION/LOCATION OF WEDDING HALL</h4>

          
        <div> 
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571418945!2d72.71637348622276!3d19.082177512813335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1705294377581!5m2!1sen!2sin" width="600"></iframe>        </div> 
    </center> 
</div>

<h4 className='ag'> Done By RK using ReactJs</h4>

    </div>
  
    
  );
};

export default WeddingCard;
