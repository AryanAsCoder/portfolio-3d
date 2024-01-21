import React from 'react'
import {projects} from '../constants'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className="max-container">
    <h1 className="head-text">
      My <span className="blue-gradient_text font-semibold drop-shadow">
        Projects
      </span>
    </h1>

    <div className="mt-5 flex flex-col gap-3 text-slate-600">
     <p> Transforming Ideas into Seamless Experiences.</p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((p)=>(
        <div className='lg:w-[400px] w-full' key={p.name}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl float-start ${p.theme}`}/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img src={p.iconUrl} alt="Project Icon" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>

          <div className='mt-5 flex flex-col'>
            <h2 className='text-2xl font-semibold'>
              {p.name}
            </h2>
            <p>
              {p.description}
            </p>
            <br />
            <hr />
            <div>
              <Link 
              to={p.link}
              target="_blank"
              rel='noopener noreferrer'
              className='font-semibold text-blue-500'>
                Live Link
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    </section>
  )
}

export default Projects