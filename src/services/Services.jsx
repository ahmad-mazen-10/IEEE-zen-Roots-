import "./services.css";

function Services() {
  return (
    <>
      <section className="contact">
        <div className="contact-1">
          <h1>
            Our <span>Services</span>
          </h1>
          <p>
            Our services are designed to support your mental well-being and
            personal growth,Our experienced professionals are dedicated to
            providing a compassionate and supportive environment to help you
            achieve a balanced and fulfilling life.
          </p>
        </div>
        <div className="contact-2">
          <img
            className="img-frame"
            src="https://github.com/AhmadEkramy/Front-End-IEEE-Task/blob/master/Images/pana.png?raw=true"
          />
        </div>
      </section>

      <div className="services">
        <h1>Services</h1>
        <div className="service-grid">
          <div className="service-item">
            <h2>Meditation</h2>
            <p>
              Meditation is a practice that involves focusing the mind to
              achieve a state of relaxation.
            </p>
            <img
              src="https://github.com/AhmadEkramy/Front-End-IEEE-Task/blob/master/Images/amico2.png?raw=true"
              alt="Meditation"
            />
          </div>
          <div className="service-item">
            <h2>Improve Sleep</h2>
            <p>
              Discover tips for creating a restful environment, establishing a
              calming bedtime routine.
            </p>
            <img
              src="https://github.com/AhmadEkramy/Front-End-IEEE-Task/blob/master/Images/dreamer.png?raw=true"
              alt="Improve Sleep"
            />
          </div>
          <div className="service-item">
            <h2>Reduce Stress</h2>
            <p>
              Discover effective strategies to reduce stress and enhance your
              well-being.
            </p>
            <img
              src="https://github.com/AhmadEkramy/Front-End-IEEE-Task/blob/master/Images/Frame%2033.png?raw=true"
              alt="Reduce Stress"
            />
          </div>
          <div className="service-item">
            <h2>Track Mood</h2>
            <p>
              Monitor your emotional well-being with our mood tracking feature.
              Record your feelings to gain your mental health.
            </p>
            <img
              src="https://github.com/AhmadEkramy/Front-End-IEEE-Task/blob/master/Images/Group%20185.png?raw=true"
              alt="Track Mood"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
