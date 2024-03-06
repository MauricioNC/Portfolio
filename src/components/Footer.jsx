import Heart from './icons/Heart'

function Footer() {
  const date = new Date()
  return (
    <footer className='py-8 text-sm text-[#a0a5a7b9] font-medium mx-auto px-4 lg:max-w-4xl xl:max-w-6xl z-20'>
      <div className='flex flex-row justify-between items-start flex-wrap'>
        <div className='flex flex-row gap-1 flex-wrap'>
          Made without <Heart /> by Mauricio Navarro
        </div>
        <div className=''>
          <span>&copy; </span>
          {date.getFullYear()}
        </div>
      </div>
      <div>
        <p>
          This portfolio is based on{' '}
          <span className='font-bold'>midudev's</span> portfolio and{' '}
          <span>
            <a
              href='https://www.behance.net/gallery/191441155/Personal-Protfolio'
              target='_blank'
              className='font-bold'>
              jonaidjonaid3{' '}
            </a>
          </span>
          design
        </p>
      </div>
    </footer>
  )
}

export default Footer
