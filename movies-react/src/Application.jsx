import React, { useEffect, useState } from "react";
import scary from "./assets/bal.jpg";
import avengers from "./assets/wnp.jpg";
import endgame from "./assets/joker.jpeg";
import tlat from "./assets/tf.jpg";
import ir from "./assets/cap.jpg";
import gotg from "./assets/sc.jpg";
import wc from "./assets/wc.jpg"
import sing from "./assets/sing.jpg";
import zoo from "./assets/zoo.jpg";
import zh from "./assets/zh.jpg";
import hm from "./assets/hm.jpg";
import ic from "./assets/ic.jpg";
import cm from "./assets/cm.jpg";
import bob from "./assets/bob.jpg";
import el from "./assets/el.jpeg"
import { Link } from "react-router-dom";
function Application() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="movie">
      <ul className="navbar">
        <li>
          <Link className="movies" to="/movies">
            MOVIES
          </Link>
        </li>
        <li>
          <Link to="/series">TV-SERIES</Link>
        </li>
        <li>
          <Link to="/horror">HORROR</Link>
        </li>
        <li>
          <Link to="/anime">ANIME</Link>
        </li>
        <li>
          <Link to="/kdrama">K-DRAMA</Link>
        </li>
        <li>
          <Link to="/comedies">COMEDIES</Link>
        </li>
        <li>
          <Link className="home" to="/">
            LOGOUT
          </Link>
        </li>
        <li>
          <li onClick={toggleDarkMode}>{darkMode ? "💡" : "🌙"}</li>
        </li>
        
      </ul>
      <div className="cards-container">
        <div className="card">
          <img src={wc} />
          <div className="overlay">
            <div className="text">“Joker” is not your typical comic book film. It abandons the flashy action and superpowered spectacle in favor of a dark, psychological exploration of a man on the edge. Set in a grim, decaying Gotham City, the film paints a bleak portrait of Arthur Fleck a struggling comedian battling mental illness, isolation, and a society that constantly turns its back on him. This is a haunting character study, one that strips away the glossy veneer of traditional superhero narratives and replaces it with raw, uncomfortable realism. Joaquin Phoenix delivers a transformative, career-defining performance, capturing Arthur's slow descent into madness with chilling precision. His portrayal is both heartbreaking and disturbing, making “Joker” a powerful, unsettling commentary on mental health, neglect, and the consequences of a broken system.</div>
          </div>
        </div>
        <div className="card">
          <img src={scary} />
          <div className="overlay">
            <div className="text">
              Starring Ana de Armas as Rooney, a deadly ballerina-assassin
              trained at the same ruthless institution seen in John Wick:
              Chapter 3, the film follows her journey of vengeance after her
              family is murdered. Rooney dances between grace and violence as
              she tracks down those responsible, blending ballet precision with
              brutal action. With appearances from Keanu Reeves (John Wick) and
              Ian McShane (Winston), Ballerina expands the Wickverse with its
              stylish cinematography, choreographed gun-fu, and a deeper
              emotional arc.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={endgame} />
          <div className="overlay">
            <div className="text">“Joker” is not your typical comic book film. It abandons the flashy action and superpowered spectacle in favor of a dark, psychological exploration of a man on the edge. Set in a grim, decaying Gotham City, the film paints a bleak portrait of Arthur Fleck a struggling comedian battling mental illness, isolation, and a society that constantly turns its back on him. This is a haunting character study, one that strips away the glossy veneer of traditional superhero narratives and replaces it with raw, uncomfortable realism. Joaquin Phoenix delivers a transformative, career-defining performance, capturing Arthur's slow descent into madness with chilling precision. His portrayal is both heartbreaking and disturbing, making “Joker” a powerful, unsettling commentary on mental health, neglect, and the consequences of a broken system.</div>
          </div>
        </div>
        <div className="card">
          <img src={avengers} />
          <div className="overlay">
            <div className="text">
              Diary of a Wimpy Kid is a hilarious coming-of-age comedy that
              follows Greg Heffley, a middle school kid just trying to survive
              the daily chaos of school, family, and friendship. Told through
              his doodle-filled journal, Greg shares awkward, funny, and
              painfully relatable moments as he chases popularity—often failing
              in the most embarrassing ways possible.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ir} />
          <div className="overlay">
            <div className="text">
              Captain America: Brave New World is the upcoming MCU film starring
              Sam Wilson (Anthony Mackie) as the new Captain America, following
              the events of The Falcon and the Winter Soldier. Scheduled for
              release in 2025, this film marks Sam’s first big-screen outing as
              Cap.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={tlat} />
          <div className="overlay">
            <div className="text">
              A couple on a road trip stops at a rural diner, only to be
              kidnapped and thrown into a horrifying world where humans are
              treated like livestock—bred, butchered, milked, and sold. Yup, you
              read that right. It's cannibal horror with a twisted animal rights
              metaphor.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={gotg} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={el} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sing} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
         <div className="card">
          <img src={zoo} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
         <div className="card">
          <img src={zh} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
         <div className="card">
          <img src={hm} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
         <div className="card">
          <img src={ic} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
         <div className="card">
          <img src={cm} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
          <div className="card">
          <img src={bob} />
          <div className="overlay">
            <div className="text">
              Captain Colter Stevens (Jake Gyllenhaal) wakes up on a train in
              someone else’s body—and discovers he’s part of a government
              experiment called the Source Code, which lets him relive the last
              8 minutes of a bombing victim’s life to find the terrorist before
              another attack happens.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
