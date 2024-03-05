import profile from '../assets/images/profile.webp'
import Github from './icons/Github'
import Linkedin from './icons/Linkedin'

function Hero() {
  return (
    <article className='w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-stretch min-h-[50vh] mt-24 md:mt-44 mb-32'>
      <div className='flex flex-col justify-center lg:items-start gap-2 md:text-left px-4'>
        <h2 className='text-balance'>Hi there!</h2>
        <h1 className='text-balance mb-5 md:leading-[1.13]'>
          I'm Mauricio, Back-end developer with{' '}
          <span className='text-[crimson] font-semibold'>Ruby on Rails </span>
          from &#x1F1F2;&#x1F1FD;
        </h1>
        <div className='lg:self-start flex md:flex-row justify-start items-center gap-3'>
          <span className="flex flex-row items-center justify-center gap-3 text-lg relative after:content-[''] after:bg-[crimson] after:w-20 after:h-[0.13rem] after:z-10 after:right-0">
            Checkout my
          </span>
          <div className='flex flex-row gap-3'>
            <a
              className='bg-[#151718] p-2  relative rounded-full flex items-center justify-center transition-all duration-300 hover:contrast-[1.1]'
              href='https://www.linkedin.com/in/mauricionc/'
              target='_blank'>
              <Linkedin />
            </a>
            <a
              className='bg-[#151718] p-2  relative rounded-full flex items-center justify-center transition-all duration-300 hover:contrast-[1.1]'
              href='https://github.com/MauricioNC'
              target='_blank'>
              <Github width={36} height={36} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>
      <picture
        id='profile_hero_image'
        className='aspect-square rounded-md w-[300px] h-[350px] 2xl:w-[300px] 2xl:h-[350px] mt-10 lg:mt-0 self-center md:after:hover:shadow-[5px_5px_10px_0_rgba(24,24,24,0.74)]'>
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
