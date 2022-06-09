import React from 'react';

const Projects = () => {
    return (
       <div>
           <div className='text-center text-4xl mt-5 font-serif font-bold'>Latest Projects</div>
            <div className='grid grid-cols-3 mt-8 ml-14'>
          <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
       <button class="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
          <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
       <button class="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
          <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
       <button class="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
        </div>
       </div>
    );
};

export default Projects;