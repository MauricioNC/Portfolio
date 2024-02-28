function Topbar() {
  return (
    <nav className='flex felx-row w-full justify-between items-center px-8 md:px-20 lg:px-24 xl:px-36 absolute top-6 left-0'>
      <div className='text-2xl'>
        <span className='text-[crimson] font-bold'>{'</'}</span>MauricioNC
        <span className='text-[crimson] font-bold'>{'>'}</span>
      </div>
      <div>
        <ul className='flex flex-row gap-4 items-center'>
          <li className='p-2 rounded-md hover:text-[crimson]'>
            <a href='#'>Experience</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson]'>
            <a href='#'>Projects</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson]'>
            <a href='#'>Soft skills</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson]'>
            <a href='#'>About me</a>
          </li>
          <li className='p-2 rounded-md hover:text-[crimson]'>
            <a href='#'>Hobbies</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar
