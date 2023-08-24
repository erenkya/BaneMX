import React, { useState, useEffect } from "react";
import Testimon from "./testimon";
import style from "./testimonial.module.css";

const Testimonial = () => {
  return (
    <div className={style.testimonialContainer}>
      <Testimon
        image="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80"
        name="Ethan Williams"
        comment="I absolutely love my new BMX bike! The design is sleek, the performance is top-notch, and it's so much fun to ride at the skatepark. Couldn't be happier with my purchase!"
        score="4.9"
      />
      <Testimon
        image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        name="Emily Johnson"
        comment="This BMX bike is a beast! The durability is impressive, and it handles tricks like a dream. I've had a blast pushing my limits and exploring new tricks with this bike."
        score="4.7"
      />
      <Testimon
        image="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        name="Mac Smith"
        comment="Riding my BMX is pure exhilaration. The smoothness of the ride and the responsiveness of the bike make it a joy to do tricks and jumps. It's like an extension of me when I'm on it!"
        score="4.8"
      />
      <Testimon
        image="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        name="Jackson Anderson"
        comment="The precision engineering of this BMX bike is evident in every ride. Whether I'm on the street or hitting the ramps, it never fails to deliver an exciting and enjoyable experience. Highly recommend it to any rider."
        score="5.0"
      />
    </div>
  );
};

export default Testimonial;
