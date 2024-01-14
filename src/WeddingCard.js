import React from 'react'; 
import wall from "./images/wall.jpg";
import vk2 from "./images/vk2.jpg";
import vk3 from "./images/vk3.jpg";
import vk4 from "./images/vk4.jpg";
import vk5 from "./images/vk5.jpg";
import vk6 from "./images/vk6.jpg";
import vk7 from "./images/vk7.jpg";
import book2 from "./images/book2.jpg";
import './style.css'

const WeddingCard = () => {
  return (
    
      <div className="slider-container">
      <div class="wrapper">
  <div class="bg"> VA </div>
  <div class="fg"> VA </div>
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
			<h4 class="color1">virat kohli and anushka sharma</h4>
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



<center className='location'> 
       
        <h4 className='ag'> DIRECTION/LOCATION OF WEDDING HALL</h4>

          
        <div> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95465.5147307613!2d77.58971991152218!3d12.919706253506574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704371923818!5m2!1sen!2sin"></iframe>
        </div> 
    </center> 
</div>

<h4 className='ag'> Done By RK using ReactJs</h4>

    </div>
  
    
  );
};

export default WeddingCard;
