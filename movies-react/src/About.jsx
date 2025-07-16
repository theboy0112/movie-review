import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link className="application" to="/">
            HOME
          </Link>
        </li>
      </ul>
      <div>
        <h1>About Us</h1>
        <h2>Welcome to ReelTalks – Where Film Meets Thought</h2>
        <h3>
          At ReelTalks, we believe that movies are more than just entertainment
          they’re powerful reflections of culture, emotion, and imagination.
          Whether you’re searching for your next binge worthy series, a
          thought-provoking indie film, or a feel good weekend watch, we’re here
          to guide you through the vast world of cinema.
        </h3>
        <h1>What We Do</h1>
        <li>
          Curated Movie Recommendations – Personalized suggestions for every
          mood, genre, or occasion.
        </li>
        <li>
          Honest and Insightful Reviews – Thoughtful takes on the latest
          releases and timeless classics.
        </li>
        <li>
          Engaging Film Discussions – Dive deeper into the themes, characters,
          and messages that make movies matter.
        </li>
      </div>
    </div>
  );
}

export default About;
