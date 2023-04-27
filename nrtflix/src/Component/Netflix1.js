import React from 'react'
import "../css/Netflix1.css"
import net1 from "../Images/basic-tick.png"
import net2 from "../Images/net.png"

function Netflix1() {
  return (
    <div>
        <div class="out">
      <img src={net2}alt="" class="logo" />
      <button>Sign In</button>
      <hr />
      <p class="step">STEP 1 OF 3</p>
      <p class="step1">Choose the plan thats right for you</p>
      <br />
      <p class="step2">
        <span className='st'>Watch all you want. Ad-free</span><br /><br />
        <span className='st1'>Recommendations just for you.</span><br /><br />
        <span className='st2'>Change or cancel your plan anytime.</span><br />
        <br />
      </p>
      <img src={net1} alt="" class="done1"/>
      <img src={net1} alt="" class="done2"/>
      <img src={net1}alt="" class="done3"/>
      <i class="fa fa-check" aria-hidden="true"></i>
      <i class="fa-thin fa-check"></i>

    </div>
    <div class="main">
        <div class="mobile"><p>Mobile</p></div>
        <div class="basic"><p>Basic</p></div>
        <div class="std"><p>Standard</p></div>
        <div class="pre"><p>Premium</p></div>
     
    </div>
    <br/><br/>
    <div>
   <span class="mont">Monthly price</span>
    <span class="rs1">₹ 149</span>
    <span class="rs2">₹ 199</span>
    <span class="rs3">₹ 499</span>
    <span class="rs4">₹ 649</span>
    <hr class="hr"/>
  </div>
  <br/> <br/> <br/> 
<div>
  <span class="vdo">Video quality</span>
  <span class="gd">Good</span>
  <span class="gd1">Good</span>
  <span class="better">Better</span>
  <span class="best">Best</span>
  <hr class="hr1"/>
</div>
<br/><br/><br/>
<div>
  <span class="rest">Resolution</span>
  <span class="four">480p</span>
  <span class="seven">720p</span>
  <span class="one">1080p</span>
  <span class="hdr">4K+HDR</span>
  <hr class="hr2"/>
</div>
<br/><br/>
<div >
  <span class="txt">Devices you can use to watch</span>
  

  <i class="fa fa-mobile" aria-hidden="true"></i>

</div>
    </div>
  )
}

export default Netflix1