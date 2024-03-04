import Heart from './icons/Heart'

function Footer() {
  const date = new Date()
  return (
    <footer className='py-8'>
      <div className='text-sm text-[#a0a5a7b9] font-medium flex flex-row justify-between items-start flex-wrap'>
        <div className='flex flex-row gap-1 flex-wrap'>
          Made without <Heart /> by Mauricio Navarro
        </div>
        <div className=''>
          <span>&copy; </span>
          {date.getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
