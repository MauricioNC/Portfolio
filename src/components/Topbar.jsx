function Topbar() {
  if (innerWidth <= 768) {
    let lastScrollTop
    let navbar
    setTimeout(() => {
      navbar = document.querySelector('nav')
    }, 2)

    window.addEventListener('scroll', function () {
      let scrollTop = document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        navbar.style.bottom = '-50px'
      } else {
        navbar.style.bottom = '0'
      }

      lastScrollTop = scrollTop
    })
  }

  return (
    <nav className='flex flex-row w-full justify-between items-center px-4 -bottom-20 left-0 fixed md:absolute md:top-6 md:bottom-auto bg-[#121414] md:bg-transparent z-20 overflow-x-scroll whitespace-nowrap transition-all duration-150 md:overflow-hidden md:whitespace-normal md:transition-none md:duration-0'>
      <div className="text-2xl hidden md:flex gap-1 md:before:content-['</'] md:before:text-[crimson] md:before:font-bold md:after:content-['>'] md:after:font-bold md:after:text-[crimson] md:before:hover:-translate-x-2 md:before:transition-all md:before:duration-300 md:after:hover:translate-x-2 md:after:transition-all md:after:duration-300">
        MauricioNC
      </div>
      <div className='w-full md:w-auto'>
        <ul className='flex flex-row gap-4 items-center justify-between md:justify-normal'>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='/#experience'>Experience</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='/#projects'>Projects</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='/#about'>About me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar
