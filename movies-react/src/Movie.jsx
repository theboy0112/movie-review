import React from "react";
import scary from "./assets/scary.jpg";
import avengers from "./assets/avengers.jpg";
import endgame from "./assets/endgame.jpg";
import tlat from "./assets/tlat.jpg";
import ir from "./assets/infinitywar.jpg";
import gotg from "./assets/gotg.jpg";
import App from "./App.jsx";
import { Link } from "react-router-dom";
function Movie() {
  return (
    <div className="movie">
      <ul className="navbar">
        <li>
                  <Link className="application" to="/application">
                    HOME
                  </Link>
                </li>
         
      </ul>
      <div className="cards-container">
        <div className="card">
          <img src={scary} />
          <div className="overlay">
            <div className="text">
              Scary Movie is a raunchy, over the top parody of popular horror
              films, mainly spoofing Scream and I Know What You Did Last Summer.
              It follows a group of teens who accidentally kill someone and are
              later stalked by a masked killer all while ridiculous chaos
              ensues.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={endgame} />
          <div className="overlay">
            <div className="text">
              Avengers: Endgame is a powerful, emotional, and action packed
              conclusion to over a decade of Marvel storytelling. Following the
              tragic events of Infinity War, the remaining heroes unite to undo
              the damage caused by Thanos. The film is filled with heart, humor,
              jaw dropping action, and satisfying character arcs. It’s a
              cinematic event that honors its characters, pays off long running
              storylines, and gives fans unforgettable moments. With standout
              performances especially from Robert Downey Jr. and Chris Evans it
              blends spectacle with heart.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={avengers} />
          <div className="overlay">
            <div className="text">
              The Avengers (2012) marked the first time Marvel’s biggest heroes
              teamed up on the big screen. It brings together Iron Man, Captain
              America, Thor, Hulk, Black Widow, and Hawkeye to form the Avengers
              Initiative. Their mission? To stop Loki, Thor's adopted brother,
              from using the Tesseract a powerful energy cube to open a portal
              and unleash an alien invasion on Earth. At the time, this was a
              historic crossover in cinema and it delivered.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ir} />
          <div className="overlay">
            <div className="text">
              Avengers: Infinity War is the beginning of the epic conclusion to
              the Marvel Cinematic Universe's MCU first grand storyline. It
              brings together nearly every hero introduced over the past decade
              as they unite to stop Thanos, a powerful cosmic warlord, from
              collecting all six Infinity Stones artifacts that give him the
              power to wipe out half of all life in the universe. This movie is
              darker, more intense, and more emotional than any Marvel film
              before it. It sets the stage for Endgame, but stands strong on its
              own.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={tlat} />
          <div className="overlay">
            <div className="text">
              Thor: Love and Thunder is the fourth standalone Thor movie in the
              Marvel Cinematic Universe and a direct sequel to Thor: Ragnarok.
              Once again directed by Taika Waititi, the film continues Thor’s
              journey post-Avengers: Endgame. He’s on a quest for inner peace
              but is pulled back into action when Gorr the God Butcher played
              by Christian Bale begins eliminating gods across the universe.
              Thor must team up with Valkyrie, Korg, and a newly empowered
              Mighty Thor aka Jane Foster Natalie Portman to stop Gorr and
              save the cosmos.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={gotg} />
          <div className="overlay">
            <div className="text">
              Thor: Love and Thunder is entertaining, visually bold, and often
              funny but it suffers from tonal imbalance and a rushed story.
              While fans of Ragnarok might enjoy the humor and heart, others may
              find it too chaotic or emotionally hollow. It’s a fun watch, but
              not the strongest MCU film.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
