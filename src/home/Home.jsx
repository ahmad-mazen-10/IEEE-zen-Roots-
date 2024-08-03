import "./home.css";
import {
  appleStore,
  demo_screen,
  fullStarRate,
  googlePlay,
  halfStarRate,
  improveSleep,
  joinNow,
  mainCover,
  meditatioMoon,
  menna_tarek,
  omar_ahmad,
  reduceStress,
  tarek_ali,
  trackMood,
} from "../assets";

import OneService from "./OneService";
import UserOpinion from "./UserOpinion";

function Home() {
  return (
    <>
      <section className="mainSection">
        <div className="txt">
          <h1>Your Mental Health Matter</h1>
          <h5>
            Your mental health is a priority Your happiness is an essential.
            Your self-care is a necessity
          </h5>
          <button className="btnRead">Read More</button>
        </div>
        <div className="rightImg">
          <img src={mainCover} alt="midetaion" />
        </div>
      </section>

      {/* Services section  */}
      <section className="services">
        <h1>Our Services</h1>
        <div className="rowServices">
          <OneService
            img={meditatioMoon}
            title="Meditation"
            className="oneService"
          >
            <h4>Meditation</h4>
          </OneService>
          <OneService
            img={improveSleep}
            title="Improve Sleep"
            className="oneService"
          >
            <h4>Improve Sleep</h4>
          </OneService>
          <OneService
            img={reduceStress}
            title="Reduce Stress"
            className="oneService"
          >
            <h4>Reduce Stress</h4>
          </OneService>
          <OneService img={trackMood} title="Track Mood" className="oneService">
            <h4>Track Mood</h4>
          </OneService>
        </div>
      </section>

      {/* joinNow */}
      <section className="joinNow">
        <div className="txt">
          <h3>You Can Join Our Community</h3>
          <p>
            A meditation community provides a supportive environment where
            individuals can come together to practice mindfulness and
            meditation.
          </p>
          <button className="btnJoin">Join Now</button>
        </div>
        <div className="rightImg">
          <img src={joinNow} alt="Persons Joined" />
        </div>
      </section>

      {/* Our Users Opinions */}
      <section className="opinions">
        <h2>Our Users Opinions</h2>
        <div className="users">
          <div className="tarek">
            <div className="oneUser oneUserTarek">
              <UserOpinion
                img={tarek_ali}
                name="Tarek Ali"
                description="It is a very wonderful and beautiful Session."
                className="userOpinion"
              />
              <div className="rating">
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={halfStarRate} />
              </div>
            </div>
          </div>
          <div className="menna">
            <div className="oneUser">
              <UserOpinion
                img={menna_tarek}
                name="Menna Tarek"
                description="I became so relax end calm."
                className="userOpinion"
              />
              <div className="rating">
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={halfStarRate} />
              </div>
            </div>
          </div>
          <div className="omar">
            <div className="oneUser ">
              <UserOpinion
                img={omar_ahmad}
                name="Omar Ahmad"
                description="Coaches are very effective."
                className="userOpinion"
              />
              <div className="rating">
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={fullStarRate} />
                <img src={fullStarRate} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* download App */}
      <section className="downloadApp">
        <h1>Download Our Application</h1>
        <div className="allImgs">
          <div className="rowStores">
            <div className="googlePlay store">
              <img src={googlePlay} alt="googlePlay" />
              <p>
                Download on the <br />
                <span> Apple Store</span>{" "}
              </p>
            </div>
            <div className="appleStore store">
              <img src={appleStore} alt="appleStore" />
              <p>
                GIT IT ON <br />
                <span> Google Play</span>{" "}
              </p>
            </div>
          </div>
          <img src={demo_screen} />
        </div>
      </section>
    </>
  );
}

export default Home;
