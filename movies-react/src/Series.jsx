import React from "react";
import soprano from "./assets/soprano.jpg";
import nm from "./assets/nm.jpg";
import narcos from "./assets/narcos.jpg";
import bb from "./assets/bb.jpg";
import bbt from "./assets/bbt.jpg";
import pb from "./assets/pb.jpg";
import ga from "./assets/ga.webp";
import tsm from "./assets/tsm.webp";
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
              while showing both sides of the drug war — from the law
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
              post–World War I Birmingham, England. It follows the rise of Tommy
              Shelby, a brilliant and ambitious leader of the Peaky Blinders, a
              dangerous gang known for sewing razor blades into their caps. As
              the Shelby family expands their influence through illegal betting,
              arms smuggling, and politics, they clash with enemies ranging from
              rival gangs to government agents.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;
