import newlineblog from '../assets/images/newlineblog.webp'
import moviesnop from '../assets/images/moviesnop.webp'
import ExternalLink from './icons/ExternalLink'
import Github from './icons/Github'

function Projects() {
  return (
    <section className='flex flex-col items-stretch'>
      <div className="self-center mb-14 relative flex items-center justify-center before:content-[''] before:w-[130%] before:h-[0.18rem] before:bg-[crimson] before:absolute">
        <h2 className="z-10 bg-[#1D2021] px-2 relative flex items-center before:-left-11 before:content[''] before:absolute before:w-2 before:h-2 before:bg-[crimson] before:rounded-full after:-right-11 after:content[''] after:absolute after:w-2 after:h-2 after:bg-[crimson] after:rounded-full">
          Latest projects
        </h2>
      </div>
      <div className='columns-1 md:columns-2 gap-5 space-y-5'>
        <article className='w-full break-inside-avoid group hover:bg-[#181a1a] rounded-lg transition duration-500 ease-in-out'>
          <div className='relative overflow-clip rounded-tl-md rounded-tr-md'>
            <img
              src={newlineblog}
              alt='New Line blog screenshot of the home page'
              className='aspect-video object-cover object-top rounded-tl-md rounded-tr-md group-hover:scale-105 transition-all duration-500 ease-in-out w-full h-[260px]'
              loading='lazy'
            />
          </div>
          <div className='p-3'>
            <h3 className='mb-3 text-[crimson]'>New line blog</h3>
            <p>
              Blog for my YouTube channel where I share content about Ruby and
              Ruby on Rails among other programming-related content.
            </p>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://github.com/MauricioNC/newline_blog'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2'
                target='blank'>
                Repo
                <Github width={22} height={22} strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
        <article className='w-full break-inside-avoid group hover:bg-[#181a1a] rounded-lg transition duration-500 ease-in-out'>
          <div className='relative overflow-clip rounded-tl-md rounded-tr-md'>
            <img
              src={moviesnop}
              alt='New Line blog screenshot of the home page'
              className='aspect-video object-cover object-top rounded-tl-md rounded-tr-md group-hover:scale-105 transition-all duration-500 ease-in-out w-full h-[260px]'
              loading='lazy'
            />
          </div>
          <div className='p-3'>
            <h3 className='mb-3 text-[crimson]'>Movies API</h3>
            <p>
              Movies API deployed on Render and documented with Swagger. This
              API use JWT tokens as authorization token.
            </p>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://moviesnop.onrender.com/api-docs/index.html'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2'
                target='blank'>
                Visit
                <ExternalLink />
              </a>
              <a
                href='https://github.com/MauricioNC/MovieSnop'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2'
                target='blank'>
                Repo
                <Github width={22} height={22} strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
