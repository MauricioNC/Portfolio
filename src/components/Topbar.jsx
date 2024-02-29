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
        navbar.style.bottom = '-40px'
      } else {
        navbar.style.bottom = '0'
      }

      lastScrollTop = scrollTop
    })
  }

  return (
    <nav className='flex flex-row w-full justify-between items-center px-4 md:px-20 lg:px-24 xl:px-36 bottom-0 left-0 fixed md:absolute md:top-6 md:bottom-auto bg-[#121414] md:bg-transparent z-20 overflow-x-scroll whitespace-nowrap transition-all duration-150 md:overflow-hidden md:whitespace-normal md:transition-none md:duration-0'>
      <div className='text-2xl hidden md:flex'>
        <span className='text-[crimson] font-bold'>{'</'}</span>MauricioNC
        <span className='text-[crimson] font-bold'>{'>'}</span>
      </div>
      <div className='w-full md:w-auto'>
        <ul className='flex flex-row gap-4 items-center justify-between md:justify-normal'>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='#'>Experience</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='#'>Projects</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='#'>Soft skills</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='#'>About me</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson] transition-all'>
            <a href='#'>Hobbies</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar
