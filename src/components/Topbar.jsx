function Topbar() {
  return (
    <header className='container top-0 left-0 right-0 py-3 z-20 flex items-center justify-center mx-auto max-w-6xl'>
      <nav className='flex justify-between items-center w-full rounded-md'>
        <div className="text-2xl pl-3 hidden md:flex gap-1 md:before:content-['</'] md:before:text-[crimson] md:before:font-bold md:after:content-['>'] md:after:font-bold md:after:text-[crimson] md:before:hover:-translate-x-2 md:before:transition-all md:before:duration-300 md:after:hover:translate-x-2 md:after:transition-all md:after:duration-300">
          MauricioNC
        </div>
        <div className='w-full md:w-auto'>
          <ul className='flex flex-row gap-4 items-center justify-center md:justify-normal'>
            <li className='p-3 rounded-md hover:text-[crimson] transition-all'>
              <a href='/#experience'>Experience</a>
            </li>
            <li className='p-3 rounded-md hover:text-[crimson] transition-all'>
              <a href='/#projects'>Projects</a>
            </li>
            <li className='p-3 rounded-md hover:text-[crimson] transition-all'>
              <a href='/#about'>About me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Topbar
