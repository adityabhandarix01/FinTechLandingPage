import React from 'react'
import { apple, bill, google } from '../assets';
import styles, { layout } from '../styles';


const Billing = () => (
    <section id="product" className={layout.sectionReverse}>

      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

      <div className="absolute z-[3] -left-1/3 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      
      <div className="absolute z-[3] -left-1/3 top-0 w-[50%] h-[50%] rounded-full white__gradient" />

      <div />


    </section>
  )

export default Billing