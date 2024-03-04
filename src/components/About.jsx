import about from '../assets/images/about.webp'

function About() {
  return (
    <section className='mb-32'>
      <div className='flex flex-row justify-start items-centes ml-[37px]'>
        <div className="mb-14 relative flex items-center justify-center before:content-[''] before:w-[148%] md:before:w-[150%] before:h-[0.18rem] before:bg-[crimson] before:absolute">
          <h3 className="z-10 bg-[#1D2021] px-2 relative flex items-center before:-left-9 2xl:before:-left-11  before:content[''] before:absolute before:w-2 before:h-2 before:bg-[crimson] before:rounded-full after:-right-9 2xl:after:-right-11 after:content[''] after:absolute after:w-2 after:h-2 after:bg-[crimson] after:rounded-full">
            About me
          </h3>
        </div>
      </div>
      <article className='grid grid-cols-1 gap-4 xl:grid-cols-6 place-items-start'>
        <div className='[&>p]:mb-4 [&>p>strong]:bg-[#0e0f0f] [&>p>strong]:text-[crimson] [&>p]:text-pretty xl:col-span-4 order-2 md:order-1'>
          <p>
            I'm Mauricio Navarro,{' '}
            <strong>passionate for back-end development</strong>. I started in
            this stressful world of software development in 2015.
          </p>
          <p>
            Learn stuffs about{' '}
            <strong>performance and infrastructure is what I love</strong>. I
            genuinely enjoy to find solutions to specific problems.
          </p>
          <p>
            <strong>Ruby on Rails</strong> is my main skill to develop back-end
            software since I decided to learn it about 3 years ago. Now I'm part
            of the mentors team of RoR at BrightCoders, academy.
          </p>
        </div>
        <figure className='aspect-square w-[280px] overflow-clip rounded-full ring-2 ring-[crimson] p-2 shadow-[5px_5px_10px_0px_#0f0f0f] md:col-start-5 md:col-span-2 place-self-center order-1 md:order-2'>
          <img
            src={about}
            alt=''
            className='object-cover object-center rounded-full w-full h-full'
          />
        </figure>
      </article>
    </section>
  )
}

export default About
