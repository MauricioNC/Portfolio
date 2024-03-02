function ArrowUpRight(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-up-right text-[crimson]'
      width={props.width}
      height={props.height}
      viewBox='0 0 24 24'
      strokeWidth={props.strokeWidth}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M17 7l-10 10' />
      <path d='M8 7l9 0l0 9' />
    </svg>
  )
}

export default ArrowUpRight
