import { useState } from "react"
import ExperienceData from "../data/experience"
  
function Experience() {
  const [modal, setModal] = useState(false)
  const [actualJob, setActualJob] = useState(0)

  const toggleJobDescriptionModal = (e) => {
    setModal(!modal)
    setActualJob(ExperienceData[e.target.id])
  }
  
  if(modal) {
    document.body.classList.add('overflow-y-hidden')
  }
  else {
    document.body.classList.remove('overflow-y-hidden')
  }

  return (
    <section
      id='experience'
      className='flex flex-col justify-between items-center mb-8 md:mb-20 lg-mb-32 mx-auto px-4 lg:max-w-4xl xl:max-w-6xl z-20'>
      <div className='mb-14 relative flex items-center justify-center'>
        <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-start before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
        <h2 className='z-10 bg-transparent px-2 relative flex items-center'>
          Job experience
        </h2>
        <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-end before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
      </div>
      <div className="experience_item self-center relative before:content-[''] before:w-[0.15rem] before:h-full before:bg-[#4e4e4e9f] before:absolute before:left-0 pl-10">
        <div className="flex flex-col gap-14 w-full">
          {
            ExperienceData.map((job, idx) => {
              return (
                <div className="flex flex-col md:flex-row justify-items-stretch gap-5" key={ idx }>
                  <span className='absolute w-3 h-3 bg-[crimson] -left-[0.30rem] rounded-full'></span>
                  <div className='grow relative'>
                    <h3 className='text-balance text-[crimson]'>{job.title}</h3>
                    <h4 className='text-balance'>{job.company}</h4>
                    <span className="text-sm">{job.date}</span>
                  </div>
                  <div className='self-start md:self-center flex flex-col items-start md:basis-[500px]'>
                    <p className='line-clamp-4 text-left'>
                      {job.description}
                    </p>
                    <button id={ idx } className='my-3 p-2 bg-[crimson] rounded-md hover:contrast-[1.1]' onClick={toggleJobDescriptionModal}>
                      Read more
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {modal && (
        <div id="jobDescriptionModal" className="fixed flex flex-col justify-center items-center w-screen h-screen top-0 left-0 right-0 bottom-0 z-20">
          <div className='overlay absolute bg-neutral-900 opacity-65 h-screen w-screen' onClick={toggleJobDescriptionModal}></div>
          {
            <div className="z-30 w-5/6 h-3/5 lg:w-1/3 overflow-y-auto">
              <div className='bg-[#292929] w-full p-8 rounded-lg shadow-lg shadow-neutral-900 flex flex-col justify-center items-start gap-3'>
                <button className='bg-[#1d2021] p-1 px-2 rounded-md self-end text-stone-300 text-md' onClick={toggleJobDescriptionModal}>Close</button>
                <div className='relative flex flex-col gap-1'>
                  <h3 className='text-[crimson]'>{ actualJob.title }</h3>
                  <h4 className=''>{actualJob.company}</h4>
                  <span className="text-sm text-[crimson] font-medium">{actualJob.date}</span>
                </div>
                <div className='flex flex-col gap-3'>
                  { actualJob.description.map((description, idx) => <p key={idx} className="text-balance">{ description }</p>) }
                </div>
                <div className="flex flex-row gap-2 mt-8 flex-wrap">
                  { actualJob.technologies.map((techs, idx) => <span key={idx} className="text-nowrap text-xs md:text-sm bg-[#dc143c42] rounded-lg px-1">{ techs }</span>) }
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </section>
  )
}

export default Experience
