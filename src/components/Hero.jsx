import profile from '../assets/images/profile.jpg'

function Hero() {
  return (
    <article>
      <div>
        <h1>Hi! I'm Mauricio</h1>
        <p>
          Back-end developer with{' '}
          <span>Ruby on Rails living in &#x1F1F2;&#x1F1FD;</span>
        </p>
      </div>
      <img src={profile} alt='User profile image' width={200} />
    </article>
  )
}

export default Hero
