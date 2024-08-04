import ExperienceData from "../data/experience"

function Experience() {
  return (
    <section
      id='experience'
      className='flex flex-col justify-between items-center mb-32 mx-auto px-4 lg:max-w-4xl xl:max-w-6xl z-20'>
      <div className='mb-14 relative flex items-center justify-center'>
        <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-start before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
        <h3 className='z-10 bg-transparent px-2 relative flex items-center'>
          Job experience
        </h3>
        <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-end before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
      </div>
      <div className="experience_item self-center relative before:content-[''] before:w-[0.15rem] before:h-full before:bg-[#4e4e4e9f] before:absolute before:left-0 pl-10">
        <div className="flex flex-col gap-14 w-full">
          {
            ExperienceData.map((job) => {
              return (
                <div className="flex flex-row justify-items-stretch" key={(job.jobTitle+job.jobCompany)}>
                  <span className='absolute w-3 h-3 bg-[crimson] -left-[0.30rem] rounded-full'></span>
                  <div className='grow relative'>
                    <h3 className='text-balance text-[crimson]'>{job.jobTitle}</h3>
                    <h4 className='text-balance'>{job.jobCompany}</h4>
                    <span>{job.date}</span>
                  </div>
                  <div className='self-start md:self-center flex flex-col items-start md:basis-[500px]'>
                    <p className='line-clamp-4 text-left'>
                      {job.jobDescription}
                    </p>
                    <button className='my-3 p-2 bg-[crimson] rounded-md hover:contrast-[1.1]'>
                      Read more
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Experience
