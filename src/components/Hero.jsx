import profile from '../assets/images/profile.jpg'
import Github from './icons/Github'
import Linkedin from './icons/Linkedin'

function Hero() {
  return (
    <article className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-stretch min-h-[100vh] mb-10'>
      <div className='flex flex-col items-center lg:items-start justify-center gap-2 text-center md:text-left'>
        <h2 className='text-balance'>Hi there!</h2>
        <h1 className='text-balance mb-5 text-center lg:text-start md:leading-[1.13]'>
          I'm Mauricio, Back-end developer with{' '}
          <span className='text-[crimson] font-semibold'>Ruby on Rails </span>
          from &#x1F1F2;&#x1F1FD;
        </h1>
        <div className='lg:self-start flex flex-col md:flex-row justify-center items-center gap-3'>
          <span className='flex flex-col md:flex-row items-center gap-3 text-lg'>
            Checkout my
            <hr className='w-[2px] h-[40px] bg-[crimson] border-0 md:w-[150px] md:h-[0.064rem]' />
          </span>
          <div className='flex flex-row'>
            <a
              className='bg-[#151718] p-2  relative rounded-full flex items-center justify-center transition-all duration-300 hover:contrast-[1.1]'
              href='https://www.linkedin.com/in/mauricionc/'
              target='blank'>
              <Linkedin />
            </a>
            <a
              className='bg-[#151718] p-2  relative rounded-full flex items-center justify-center transition-all duration-300 hover:contrast-[1.1]'
              href='https://github.com/MauricioNC'
              target='blank'>
              <Github />
            </a>
          </div>
        </div>
      </div>
      <picture className='aspect-square rounded-md w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[550px] mt-10 lg:mt-0 self-center'>
        <img
          className='object-cover rounded-md w-full h-full'
          src={profile}
          alt='User profile image'
        />
      </picture>
    </article>
  )
}

export default Hero
