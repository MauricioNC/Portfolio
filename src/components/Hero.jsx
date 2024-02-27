import profile from '../assets/images/profile.jpg'

function Hero() {
  return (
    <div>
      <div>
        <article>
          <h1>Hi! I'm Mauricio</h1>
          <h4>
            Back-end developer with{' '}
            <span>Ruby on Rails living in &#x1F1F2;&#x1F1FD;</span>
          </h4>
        </article>
        <img src={profile} alt='User profile image' width={200} />
      </div>
    </div>
  )
}

export default Hero
