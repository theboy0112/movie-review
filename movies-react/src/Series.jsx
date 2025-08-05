import React from "react";
import soprano from "./assets/soprano.jpg";
import nm from "./assets/nm.jpg";
import narcos from "./assets/narcos.jpg";
import bb from "./assets/bb.jpg";
import pb from "./assets/pb.webp";
import ec from "./assets/ec.jpg";
import sw from "./assets/sw.jpg";
import nss from "./assets/nss.jpg";
import ih from "./assets/ih.jpg";
import kd from "./assets/kd.webp";
import lcdp from "./assets/lcdp.webp";
import vk from "./assets/vk.jpg";
import dd from "./assets/dd.jpg";
import wd from "./assets/wd.jpg";
import { Link } from "react-router-dom";
function Series() {
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
          <img src={narcos} />
          <div className="overlay">
            <div className="text">
              Narcos tells the gripping true story of Colombia's infamous drug
              kingpin, Pablo Escobar, and the rise and fall of the Medellín
              Cartel. Set during the 1980s and 1990s, the series follows DEA
              agents Steve Murphy and Javier Peña as they hunt down Escobar,
              while showing both sides of the drug war from the law
              enforcement efforts to the inner workings of the cartel. Gritty,
              violent, and deeply compelling, Narcos explores power, corruption,
              and the far-reaching impact of the cocaine trade.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={nm} />
          <div className="overlay">
            <div className="text">
              Narcos: Mexico is a companion series to Narcos, shifting the focus
              from Colombia to Mexico. It explores the origins of the modern
              Mexican drug war, beginning with the rise of the Guadalajara
              Cartel in the 1980s. The story centers on Miguel Ángel Félix
              Gallardo, a former police officer who unites drug traffickers to
              build a powerful empire, and Kiki Camarena, a determined DEA agent
              whose undercover mission in Mexico leads to tragic consequences.
              As the series progresses, it delves deeper into cartel rivalries,
              government corruption, and the brutal path toward power.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={soprano} />
          <div className="overlay">
            <div className="text">
              The Sopranos is widely regarded as one of the greatest TV series
              of all time. It follows Tony Soprano, a New Jersey mob boss who
              tries to balance the demands of his criminal organization with the
              struggles of his personal and family life. To cope with anxiety
              and panic attacks, Tony begins therapy with Dr. Jennifer Melfi,
              leading to deep introspection and psychological conflict. The show
              masterfully explores themes of identity, loyalty, morality, and
              mental health, all set against the backdrop of organized crime.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={bb} />
          <div className="overlay">
            <div className="text">
              Breaking Bad tells the story of Walter White, a mild-mannered high
              school chemistry teacher in Albuquerque, New Mexico, who turns to
              making and selling methamphetamine after being diagnosed with
              terminal lung cancer. Partnering with his former student Jesse
              Pinkman, Walter dives deeper into the criminal underworld,
              transforming from a desperate man into the ruthless drug kingpin
              known as "Heisenberg." The show explores morality, pride, family,
              and the consequences of choices, with intense storytelling and
              powerful character arcs.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={pb} />
          <div className="overlay">
            <div className="text">
              Peaky Blinders is a stylish and gritty British crime drama set in
              post World War I Birmingham, England. It follows the rise of Tommy
              Shelby, a brilliant and ambitious leader of the Peaky Blinders, a
              dangerous gang known for sewing razor blades into their caps. As
              the Shelby family expands their influence through illegal betting,
              arms smuggling, and politics, they clash with enemies ranging from
              rival gangs to government agents.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ec} />
          <div className="overlay">
            <div className="text">
              A crime drama based on the life of Joaquín "El Chapo" Guzmán, one of the most notorious drug lords in history. The series follows his rise in the 1980s working for the Guadalajara Cartel, his rise to power with the Sinaloa Cartel, and his eventual downfall.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={lcdp} />
          <div className="overlay">
            <div className="text">
              A Spanish heist thriller about a criminal mastermind known as "The Professor" who assembles a team of specialists to carry out the biggest heist in recorded history—printing billions of euros in the Royal Mint of Spain. With emotional backstories, intense action, and political undertones, the series has gained global popularity.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sw} />
          <div className="overlay">
            <div className="text">
              Set in the Star Wars universe, this series follows former Jedi Knight Ahsoka Tano as she investigates an emerging threat to a vulnerable galaxy after the fall of the Empire. It ties closely with "The Mandalorian" and "Star Wars Rebels" in storyline and characters.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={nss} />
          <div className="overlay">
            <div className="text">
              A South Korean crime drama inspired by real events, the series follows a civilian businessman who becomes involved in a covert government mission to capture a Korean drug lord operating in Suriname. It's a gritty tale of survival, deception, and international intrigue.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ih} />
          <div className="overlay">
            <div className="text">
              An upcoming Marvel series centered on Riri Williams, a genius inventor who creates a suit of armor more advanced than Iron Man’s. The show explores her journey balancing genius, youth, and legacy, especially in a world still mourning Tony Stark.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={vk} />
          <div className="overlay">
            <div className="text">
              A historical drama that follows legendary Norse hero Ragnar Lothbrok and his descendants as they rise from humble farmers to legendary warriors and rulers. The show is known for its raw depiction of Viking culture, epic battles, and family betrayals.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={dd} />
          <div className="overlay">
            <div className="text">
              A Marvel superhero series featuring Matt Murdock, a blind lawyer by day and vigilante Daredevil by night. Set in Hell’s Kitchen, New York, the show explores his moral struggles as he faces crime bosses like Wilson Fisk while trying to protect his city.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={wd} />
          <div className="overlay">
            <div className="text">
             A post-apocalyptic horror series that follows a group of survivors in a world overrun by zombies (“walkers”). Led initially by sheriff Rick Grimes, the group faces not just the undead but also the collapse of society and human threats more dangerous than the infected.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={kd} />
          <div className="overlay">
            <div className="text">
              A South Korean historical horror series set during the Joseon Dynasty, where a mysterious plague resurrects the dead. As political intrigue unfolds, a crown prince investigates the origins of the epidemic to save his people and the throne.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;
