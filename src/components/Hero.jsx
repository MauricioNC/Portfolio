import profile from '../assets/images/profile.jpg'

function Hero() {
  return (
    <>
      <article>
        <h1>Hi! I'm Mauricio</h1>
        <p>
          Back-end developer with{' '}
          <span>Ruby on Rails living in &#x1F1F2;&#x1F1FD;</span>
        </p>
      </article>
      <img src={profile} alt='User profile image' width={200} />
    </>
  )
}

export default Hero
