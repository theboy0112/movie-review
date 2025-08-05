import React from "react";
import insidiousrd from "./assets/insidiousrd.jpg";
import weeks from "./assets/weeks.jpg";
import scream from "./assets/scream.jpg";
import ab from "./assets/ab.jpg";
import it from "./assets/it.jpg";
import ma from "./assets/ma.jpg";
import s from "./assets/s.jpg";
import fs from "./assets/fs.jpg";
import sm from "./assets/sm.jpg";
import n from "./assets/n.webp";
import t from "./assets/t.webp";
import e from "./assets/e.jpg";
import l from "./assets/l.jpg";
import fr from "./assets/fr.jpg";
import hc from "./assets/hc.jpg";
import tc from "./assets/tc.jpeg";
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
              earlier films. Josh Lambert and his now college aged son Dalton
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
              the nightmare reignites spreading faster and deadlier than before.
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
              genre by blending classic horror with satire and meta commentary.
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
              A supernatural horror film that centers on a possessed doll named
              Annabelle, linked to a satanic cult. It’s part of The Conjuring
              Universe, exploring the dark origins of one of the franchise’s
              most terrifying entities.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={it} />
          <div className="overlay">
            <div className="text">
              Based on Stephen King's novel, "IT" follows a group of children
              terrorized by a shapeshifting entity, often appearing as Pennywise
              the Dancing Clown. Set in the town of Derry, Maine, the story is
              both a supernatural horror and a tale of friendship and trauma.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={s} />
          <div className="overlay">
            <div className="text">
              A true-crime writer finds disturbing home videos in his attic,
              each showing a family being murdered. He discovers a connection to
              an ancient pagan deity that feeds on children’s souls, unraveling
              a chilling pattern across decades.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ma} />
          <div className="overlay">
            <div className="text">
              After a tragic event, two young sisters are found living in the
              woods. As they begin a new life with their uncle and his
              girlfriend, they are followed by a dark maternal spirit“Mama” who
              raised them and refuses to let them go.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={tc} />
          <div className="overlay">
            <div className="text">
              Based on real-life cases of Ed and Lorraine Warren, the film
              follows the couple as they investigate a haunted farmhouse in
              Rhode Island. The film kickstarted The Conjuring Universe,
              blending ghost stories with exorcism, possessions, and demonic
              lore.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={hc} />
          <div className="overlay">
            <div className="text">
              A grotesque body horror film about a mad German surgeon who
              surgically joins three people mouth to anus to form a “human
              centipede.” Infamous for its shock value and disturbing concept.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={fr} />
          <div className="overlay">
            <div className="text">
              A Filipino horror film inspired by the true story of Fr. Severino
              Mallari, a 19th-century priest and serial killer. The movie blends
              history, religion, and supernatural themes, exploring madness and
              guilt within a colonial-era setting.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={l} />
          <div className="overlay">
            <div className="text">
              A Filipino horror project may refer to different versions or
              adaptations that centers on mythological demonic entities called
              Lilim female spirits or demons often tied to seduction and
              vengeance. Details may vary depending on the version.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={e} />
          <div className="overlay">
            <div className="text">
              Set in a Catholic girls’ school in the Philippines, a guidance
              counselor investigates the suicide of a student. As she digs
              deeper, she uncovers a dark history of abuse and a vengeful spirit
              haunting the campus.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={t} />
          <div className="overlay">
            <div className="text">
              A Filipino horror film about a couple who inherit a condo located
              at a “tumbok” direct energy point, which is said to attract bad
              luck and spirits. Their lives spiral into a terrifying series of
              hauntings and misfortunes.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={n} />
          <div className="overlay">
            <div className="text">
              A 2023 Filipino horror movie from Mikhail Red. It follows a woman
              returning to her hometown after a family tragedy, only to face a
              terrifying ancestral curse rooted in Ilocano folklore. Atmospheric
              and steeped in cultural horror.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sm} />
          <div className="overlay">
            <div className="text">
              A Filipino supernatural thriller starring Kris Aquino. It revolves
              around a woman haunted by ghostly visions after acquiring a
              second-hand bag. The film reveals dark secrets and intertwines
              trauma, possession, and revenge.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={fs} />
          <div className="overlay">
            <div className="text">
              A Filipino horror film where a woman finds a Bagua mirror believed
              to bring luck—but it comes with a deadly curse. Anyone who sees
              their reflection in it meets a violent death tied to their Chinese
              zodiac sign. A cult classic in Philippine horror.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horror;
