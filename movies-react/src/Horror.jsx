import React from "react";
import insidiousrd from "./assets/insidiousrd.jpg";
import weeks from "./assets/weeks.jpg";
import scream from "./assets/scream.jpg";
import ab from "./assets/ab.jpg";

import { Link } from "react-router-dom";
function Horror() {
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
          <img src={insidiousrd} />
          <div className="overlay">
            <div className="text">
              Insidious: The Red Door continues the terrifying legacy of the
              Lambert family, picking up a decade after the events of the
              earlier films. Josh Lambert and his now-college-aged son Dalton
              must return to the supernatural realm known as The Further to
              confront their dark past and the trauma they've suppressed. When
              Dalton begins experiencing disturbing visions and uncovering
              buried memories, father and son must unlock the truth behind a
              mysterious red door that holds the key to their haunting—and
              survival. This installment blends emotional depth with classic
              Insidious scares and marks Patrick Wilson’s directorial debut.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={weeks} />
          <div className="overlay">
            <div className="text">
              28 Weeks Later is a post-apocalyptic horror film set six months
              after the Rage Virus outbreak devastated Britain. The infected
              have died of starvation, and the U.S. military has begun a
              cautious effort to repopulate and rebuild a secure zone in London.
              But when a carrier of the virus unknowingly enters the safe zone,
              the nightmare reignites—spreading faster and deadlier than before.
              The story follows Don, a survivor with a dark secret, and his
              children Andy and Tammy, as they navigate chaos, military
              collapse, and infection in a city once again consumed by fear.
              Gritty and intense, it builds on the emotional and visceral horror
              of the original.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={scream} />
          <div className="overlay">
            <div className="text">
              Scream is a self-aware slasher horror franchise that redefined the
              genre by blending classic horror with satire and meta-commentary.
              The original 1996 film follows Sidney Prescott, a high school
              student in the town of Woodsboro, who becomes the target of a
              masked killer known as Ghostface. As the killer taunts victims
              through phone calls and horror movie trivia, the story cleverly
              deconstructs slasher clichés while delivering genuine scares,
              twists, and gore.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ab} />
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
      </div>
    </div>
  );
}

export default Horror;
