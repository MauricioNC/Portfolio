import newlineblog from '../assets/images/newlineblog.webp'
import moviesnop from '../assets/images/moviesnop.webp'
import tasks_manager from '../assets/images/tasks_manager.webp'
import ExternalLink from './icons/ExternalLink'
import Github from './icons/Github'
import ArrowUpRight from './icons/ArrowUpRight'

function Projects() {
  return (
    <section id='projects' className='flex flex-col mb-32'>
      <div className='columns-1 md:columns-2 gap-5 space-y-5'>
        <article className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
          <div className='flex flex-row justify-center items-center'>
            <div className="mb-14 relative flex items-center justify-center before:content-[''] before:w-[136%] md:before:w-[130%] before:h-[0.18rem] before:bg-[crimson] before:absolute">
              <h3 className="z-10 bg-[#1D2021] px-2 relative flex items-center before:-left-9 2xl:before:-left-11  before:content[''] before:absolute before:w-2 before:h-2 before:bg-[crimson] before:rounded-full after:-right-9 2xl:after:-right-11 after:content[''] after:absolute after:w-2 after:h-2 after:bg-[crimson] after:rounded-full">
                Latest projects
              </h3>
            </div>
          </div>
          <div className='relative overflow-clip rounded-tl-md rounded-tr-md'>
            <img
              className='aspect-video object-cover object-top rounded-tl-md rounded-tr-md h-38 md:h-48 xl:h-60 md:group-hover:scale-[1.05] transition-all duration-500 ease-in-out w-full'
              loading='lazy'
              src={newlineblog}
              alt='New Line blog screenshot of the home page'
            />
          </div>
          <div className='p-3'>
            <h3 className='mb-3 text-[crimson]'>New line blog</h3>
            <div>
              <p>
                Blog for my YouTube channel where I share content about Ruby and
                Ruby on Rails among other programming-related content.
              </p>
              <footer className='mt-5 pt-3'>
                <ul className='flex flex-row text-xs font-semibold gap-2 text-[#fffff57c]'>
                  <li className='bg-[#0f111173] p-1 rounded-md'>
                    Ruby on rails
                  </li>
                  <li className='bg-[#0f111173] p-1 rounded-md'>JWT</li>
                  <li className='bg-[#0f111173] p-1 rounded-md'>Sidekiq</li>
                  <li className='bg-[#0f111173] p-1 rounded-md'>Amazon S3</li>
                </ul>
              </footer>
            </div>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://github.com/MauricioNC/newline_blog'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2'
                target='_blank'>
                Repo
                <Github width={22} height={22} strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
        <article className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
          <div className='relative overflow-clip rounded-tl-md rounded-tr-md'>
            <img
              className='aspect-video object-cover object-top rounded-tl-md rounded-tr-md h-38 md:h-48 xl:h-60 md:group-hover:scale-[1.05] transition-all duration-500 ease-in-out w-full'
              loading='lazy'
              src={moviesnop}
              alt='MovieSnop API screenshot'
            />
          </div>
          <div className='p-3'>
            <h3 className='mb-3 text-[crimson]'>Movies API</h3>
            <div>
              <p>
                Movies API deployed on Render and documented with Swagger. This
                API use JWT tokens as authorization token.
              </p>
              <footer className='mt-5 pt-3'>
                <ul className='flex flex-row text-xs font-semibold gap-2 text-[#fffff57c]'>
                  <li className='bg-[#0f111173] p-1 rounded-md'>
                    Ruby on rails
                  </li>
                  <li className='bg-[#0f111173] p-1 rounded-md'>JWT</li>
                  <li className='bg-[#0f111173] p-1 rounded-md'>PostgreSQL</li>
                </ul>
              </footer>
            </div>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://moviesnop.onrender.com/api-docs/index.html'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2'
                target='_blank'>
                Visit
                <ExternalLink />
              </a>
              <a
                href='https://github.com/MauricioNC/MovieSnop'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2'
                target='_blank'>
                Repo
                <Github width={22} height={22} strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
        <article className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
          <div className='relative overflow-clip rounded-tl-md rounded-tr-md'>
            <img
              className='aspect-video object-cover object-top rounded-tl-md rounded-tr-md h-38 md:h-48 xl:h-60 md:group-hover:scale-[1.05] transition-all duration-500 ease-in-out w-full'
              loading='lazy'
              src={tasks_manager}
              alt='MovieSnop API screenshot'
            />
          </div>
          <div className='p-3'>
            <h3 className='mb-3 text-[crimson]'>Tasks manager</h3>
            <div>
              <p>Basic task manger with login, CRUD and notifications.</p>
              <footer className='mt-5 pt-3'>
                <ul className='flex flex-row text-xs font-semibold gap-2 text-[#fffff57c]'>
                  <li className='bg-[#0f111173] p-1 rounded-md'>
                    Ruby on rails
                  </li>
                  <li className='bg-[#0f111173] p-1 rounded-md'>Turbo</li>
                  <li className='bg-[#0f111173] p-1 rounded-md'>Stimulus</li>
                </ul>
              </footer>
            </div>
            <div className='flex flex-row gap-3 mt-3'>
              <a
                href='https://github.com/MauricioNC/task_manager'
                className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2'
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
