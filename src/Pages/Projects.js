import React from 'react';
import project1 from './../asset/f1.JPG'
import project2 from './../asset/f2.JPG'
import project3 from './../asset/f3.JPG'

const Projects = () => {
    return (
       <div>
           <div className='text-center text-4xl mt-5 font-serif font-bold'>Latest Projects</div>
            <div className='grid grid-cols-3 mt-8 ml-14'>
          <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
          <img src={project1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
          <h2 class="card-title">Web Site Name: Annaba Tools</h2>
          <p>Its an wonderful website about Tools collection.</p>
          <div class="card-actions">
       <button class="btn btn-accent">Project Details</button>
       </div>
      </div>
     </div>
          <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
          <img src={project2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
          <h2 class="card-title">Web Site Name: Prime Dental Care</h2>
          <p>This is a very usefull website for a Dentist </p>
          <div class="card-actions">
       <button class="btn btn-accent">Project Details</button>
       </div>
      </div>
     </div>
          <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
          <img src={project3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
          <h2 class="card-title">Web Site Name: Watch World</h2>
          <p>Its so Dynamic website for a business.</p>
          <div class="card-actions">
       <button class="btn btn-accent">Project Details</button>
       </div>
      </div>
     </div>
        </div>
       </div>
    );
};

export default Projects;