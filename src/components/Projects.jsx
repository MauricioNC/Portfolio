import newlineblog from '../assets/images/newlineblog.webp'
import moviesnop from '../assets/images/moviesnop.webp'
import tasks_manager from '../assets/images/tasks_manager.webp'
import ExternalLink from './icons/ExternalLink'
import Github from './icons/Github'
import ArrowUpRight from './icons/ArrowUpRight'

function Projects() {
  return (
    <section
      id='projects'
      className='flex flex-col mb-32 relative w-full py-20'>
      <div className='columns-1 md:columns-2 gap-8 space-y-8 mx-auto px-4 lg:max-w-4xl xl:max-w-6xl'>
        <article className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
          <div className='flex flex-row justify-center items-center'>
            <div className='mb-14 relative flex items-center justify-center'>
              <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-start before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
              <h3 className='z-10 bg-transparent px-2 relative flex items-center'>
                Latest projects
              </h3>
              <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-end before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
            </div>
          </div>
          <div className='relative overflow-clip rounded-md'>
            <img
              className='aspect-video object-cover object-top rounded-md h-38 md:h-48 xl:h-60 md:group-hover:scale-[1.05] transition-all duration-500 ease-in-out w-full'
              loading='lazy'
              src={newlineblog}
              alt='New Line blog screenshot of the home page'
            />
          </div>
          <div className='pt-3'>
            <h3 className='mb-3 text-[crimson]'>New line blog</h3>
            <div>
              <p>
                Blog for my YouTube channel where I share content about Ruby and
                Ruby on Rails among other programming-related content.
              </p>
              <footer className='mt-5 pt-3'>
                <ul className='flex flex-row text-xs gap-1'>
                  <li className='bg-[#dc143c33] py-1 px-2 rounded-xl'>
                    Ruby on rails
                  </li>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>JWT</li>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>
                    Sidekiq
                  </li>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>
                    Amazon S3
                  </li>
                </ul>
              </footer>
            </div>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://github.com/MauricioNC/newline_blog'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2 md:hover:contrast-[1.1]'
                target='_blank'>
                Repo
                <Github width={22} height={22} strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
        <article className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
          <div className='relative overflow-clip rounded-md'>
            <img
              className='aspect-video object-cover object-top rounded-md h-38 md:h-48 xl:h-60 md:group-hover:scale-[1.05] transition-all duration-500 ease-in-out w-full'
              loading='lazy'
              src={moviesnop}
              alt='MovieSnop API screenshot'
            />
          </div>
          <div className='pt-3'>
            <h3 className='mb-3 text-[crimson]'>Movies API</h3>
            <div>
              <p>
                Movies API deployed on Render and documented with Swagger. This
                API use JWT tokens as authorization token.
              </p>
              <footer className='mt-5 pt-3'>
                <ul className='flex flex-row text-xs gap-1'>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>
                    Ruby on rails
                  </li>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>JWT</li>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>
                    PostgreSQL
                  </li>
                </ul>
              </footer>
            </div>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://moviesnop.onrender.com/api-docs/index.html'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2 md:hover:contrast-[1.1]'
                target='_blank'>
                Visit
                <ExternalLink />
              </a>
              <a
                href='https://github.com/MauricioNC/MovieSnop'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2 md:hover:contrast-[1.1]'
                target='_blank'>
                Repo
                <Github width={22} height={22} strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
        <article className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
          <div className='relative overflow-clip rounded-md'>
            <img
              className='aspect-video object-cover object-top rounded-md h-38 md:h-48 xl:h-60 md:group-hover:scale-[1.05] transition-all duration-500 ease-in-out w-full'
              loading='lazy'
              src={tasks_manager}
              alt='MovieSnop API screenshot'
            />
          </div>
          <div className='pt-3'>
            <h3 className='mb-3 text-[crimson]'>Tasks manager</h3>
            <div>
              <p>Basic task manger with login, CRUD and notifications.</p>
              <footer className='mt-5 pt-3'>
                <ul className='flex flex-row text-xs gap-1'>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>
                    Ruby on rails
                  </li>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>Turbo</li>
                  <li className='bg-[#dc143c42] py-1 px-2 rounded-xl'>
                    Stimulus
                  </li>
                </ul>
              </footer>
            </div>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://github.com/MauricioNC/task_manager'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2 md:hover:contrast-[1.1]'
                target='_blank'>
                Repo
                <Github width={22} height={22} strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
        <div className='hidden flex-col justify-center items-center'>
          <a className='w-36 h-36 text-sm p-4 border-[0.12rem] border-[#ffffffa1] rounded-full text-center flex flex-col items-center justify-center md:hover:cursor-pointer'>
            <ArrowUpRight width={24} height={24} strokeWidth={2} />
            View all projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
