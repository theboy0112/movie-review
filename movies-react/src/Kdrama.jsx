import React from "react";
import soprano from "./assets/soprano.jpg";
import su from "./assets/su.jpg";
import wots from "./assets/wots.jpg";
import sg from "./assets/sg.png";
import inar from "./assets/inar.jpg";
import ttby from "./assets/ttby.jpg";
import m from "./assets/m.jpg";
import flaw from "./assets/flaw.jpg";
import dc from "./assets/dc.jpg";
import qot from "./assets/qot.jpg";
import iontbo from "./assets/iontbo.jpg";
import tph from "./assets/tph.jpg";

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
          <img src={inar} />
          <div className="overlay">
            <div className="text">
              Kim Min-kyu, a wealthy man with a rare allergy to human contact,
              lives in isolation until he agrees to test a lifelike AI robot.
              But when the robot malfunctions, a woman named Ji-ah secretly
              takes its place, pretending to be the robot. As Min-kyu begins to
              open his heart to her, their fake setup turns into real emotions.
              A romantic, funny, and emotional K-drama that explores love,
              identity, and healing.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={su} />
          <div className="overlay">
            <div className="text">
              Set in South Korea’s high-tech world of entrepreneurs, Start-Up
              follows Seo Dal-mi, a passionate dreamer who wants to become
              Korea’s Steve Jobs. She crosses paths with Nam Do-san, a
              struggling genius coder, and Han Ji-pyeong, a successful investor
              with a hidden past connected to her. As love, ambition, and
              rivalry collide, they all chase success in the competitive world
              of start-ups. A mix of romance, inspiration, and personal growth.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={wots} />
          <div className="overlay">
            <div className="text">
              A gripping legal thriller about Seo Jin-woo, a brilliant young
              lawyer with hyperthymesia—the ability to remember every detail of
              his life. He fights to prove his father’s innocence after he’s
              wrongfully convicted of murder. As Jin-woo takes on a corrupt
              legal system and powerful enemies, the stakes rise, and memories
              become both his weapon and his burden. A suspenseful tale of
              justice, loss, and determination.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sg} />
          <div className="overlay">
            <div className="text">
              Hundreds of desperate people join a mysterious survival game for a
              massive cash prize. But the children's games they play turn
              deadly, and only one can win. As alliances form and morals are
              tested, it’s a brutal fight for survival. A chilling, suspenseful
              thriller about greed, humanity, and the cost of desperation.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ttby} />
          <div className="overlay">
            <div className="text">
              Goo Jae-hee, a girl inspired by a high jumper, disguises herself
              as a boy to enter an all-boys school and help him jump again.
              Living in the same dorm, she tries to stay hidden while getting
              closer to her idol, Kang Tae-joon. A light, fun, and heartwarming
              rom-com about dreams, friendship, and finding love in disguise.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={m} />
          <div className="overlay">
            <div className="text">
              Dong Baek, a detective with the supernatural ability to read
              people's memories by touch, uses his power to solve brutal crimes.
              When a mysterious serial killer emerges, he teams up with genius
              profiler Han Sun-mi. As they dig deeper, shocking truths and dark
              pasts unravel. A gripping crime thriller filled with suspense,
              twists, and a dash of the paranormal.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={flaw} />
          <div className="overlay">
            <div className="text">
              Set in Korea’s national weather service, this drama follows Jin
              Ha-kyung, a smart but reserved forecaster, and Lee Si-woo, a
              passionate free spirit with a talent for predicting the weather.
              As they navigate office politics, storms, and personal
              heartbreaks, love begins to form amidst the unpredictability. A
              refreshing romance about careers, emotions, and the changing
              seasons of life.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={dc} />
          <div className="overlay">
            <div className="text">
              Set in Korea’s national weather service, this drama follows Jin
              Ha-kyung, a smart but reserved forecaster, and Lee Si-woo, a
              passionate free spirit with a talent for predicting the weather.
              As they navigate office politics, storms, and personal
              heartbreaks, love begins to form amidst the unpredictability. A
              refreshing romance about careers, emotions, and the changing
              seasons of life.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={tph} />
          <div className="overlay">
            <div className="text">
              Set in Korea’s national weather service, this drama follows Jin
              Ha-kyung, a smart but reserved forecaster, and Lee Si-woo, a
              passionate free spirit with a talent for predicting the weather.
              As they navigate office politics, storms, and personal
              heartbreaks, love begins to form amidst the unpredictability. A
              refreshing romance about careers, emotions, and the changing
              seasons of life.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={qot} />
          <div className="overlay">
            <div className="text">
              Queen of Tears is a heartfelt South Korean romance drama that
              tells the emotional story of Baek Hyun-woo, a top legal director
              from a prestigious conglomerate family, and Hong Hae-in, the
              heiress and CEO of Queens Group. Though once passionately in love,
              their marriage starts to crumble under pressure,
              misunderstandings, and emotional distance.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={iontbo} />
          <div className="overlay">
            <div className="text">
              It’s Okay to Not Be Okay is a unique Korean drama about a
              psychiatric caregiver and a troubled children’s book author who
              help each other heal from past emotional wounds. With themes of
              mental health, trauma, and love, the story beautifully blends
              romance, healing, and fantasy into a touching and visually
              stunning journey.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;
