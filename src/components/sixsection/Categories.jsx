import React, { useEffect, useState } from 'react';
import data from './data'; // Assuming data is stored in a separate file

const Categories = () => {
  const [projects, setProjects] = useState(data);
  const categories = [ ...new Set(data.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('VIDEOS COMMERCIALS');

  const filterProjectHandler = (category) => {
    const filteredProjects =  data.filter(project => project.category === category);
    setProjects(filteredProjects);
  };

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    filterProjectHandler(activeCat);
  };

  useEffect(() => {
    filterProjectHandler(activeCategory);
  }, []);
  

  return (
    <div className='mt-10'>
      <div className="flex justify-center items-center gap-4 flex-col  md:flex-row ">
        {categories.map((category) => (
          <button
            key={category}
            className={`border md:w-fit w-full px-8 py-3 text-black rounded-3xl font-semibold border-[#EC7729] ${activeCategory === category ? "bg-[#EC7729] text-white" : "hover:bg-[#1B1B1D] hover:border-[#1B1B1D] hover:text-white"}`}
            onClick={() => changeCategoryHandler(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {projects.map((item)=>(
            <div key={item.id}>
                    {item.video && 
                    <div className='w-full md:h-56 h-40 sm:h-48'>
                              <iframe
      width="100%"
      height="100%"
      src={item.video}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
                    </div>

                    }

{ item.image &&
<div className='w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden'>
    <img src={item.image} alt="" className='h-full w-full'/>
</div>
}
{ item.logo &&
<div className='w-full md:h-64 h-52 sm:h-56'>
    <img src={item.logo} alt="" className='h-full w-full'/>
</div>
}

            </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
