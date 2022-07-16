import React from 'react';
import picture from './../asset/pic.jpg';

const AboutMe = () => {
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">NAHID AHMMED LIKHON</h2>
    <h4>Junior Web Developer</h4>
    <p>I would like to be a part of an organization where I could use and enhance my knowledge and talent for the
       development of both the organization and myself.
</p>
  </div>
</div>
        </div>
    );
};

export default AboutMe;