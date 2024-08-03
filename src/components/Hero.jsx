import profile from '../assets/images/profile.webp'
import Github from './icons/Github'
import Linkedin from './icons/Linkedin'

function Hero() {
  return (
    <article className='w-full flex flex-col md:flex-row justify-center md:justify-around items-center md:items-stretch min-h-[50vh] mt-24 md:mt-44 mb-32 lg:max-w-4xl xl:max-w-6xl mx-auto'>
      <div className='flex flex-col justify-center lg:items-start gap-2 md:text-left px-4 xl:max-w-[700px]'>
        <h2 className='text-balance'>Hi there!</h2>
        <h1 className='text-wrap mb-5 md:leading-[1.13]'>
          I'm Mauricio, Back-end developer with{' '}
          <span className='text-[crimson] font-semibold'>Ruby on Rails </span>
          from &#x1F1F2;&#x1F1FD;
        </h1>
        <div className='lg:self-start flex md:flex-row justify-start items-center gap-3'>
          <span className="md:flex flex-row items-center justify-center gap-3 text-lg relative after:content-[''] after:bg-[crimson] after:w-20 after:h-[0.13rem] after:z-10 after:right-0 hidden text-nowrap">
            Checkout my
          </span>
          <div className='flex flex-row justify-center gap-5 md:gap-3 w-full md:w-auto'>
            <a
              className='bg-[#151718] relative flex items-center justify-center transition-all duration-300 hover:contrast-[1.2] overflow-clip rounded-full ring-2 ring-[crimson] p-1 md:col-span-2 place-self-center'
              href='https://www.linkedin.com/in/mauricionc/'
              target='_blank'>
              <Linkedin />
            </a>
            <a
              className='bg-[#151718] relative flex items-center justify-center transition-all duration-300 hover:contrast-[1.2] overflow-clip rounded-full ring-2 ring-[crimson] p-1 md:col-span-2 place-self-center'
              href='https://github.com/MauricioNC'
              target='_blank'>
              <Github width={36} height={36} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>
      <picture
        id='profile_hero_image'
        className='aspect-square rounded-md w-[250px] h-[300px] md:w-[680px] md:h-[340px] lg:w-[620px] lg:h-[380px] xl:w-[320px] mt-10 lg:mt-0 self-center md:after:hover:shadow-[5px_5px_10px_0_rgba(24,24,24,0.74)]'>
        <img
          className='object-cover object-bottom rounded-md w-full h-full overflow-clip'
          loading='eager'
          fetchpriority='high'
          alt='Mauricio Navarro'
          src={profile}
        />
      </picture>
    </article>
  )
}

export default Hero
