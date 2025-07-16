import React from "react";
import ns from "./assets/ns.jpg";
import op from "./assets/op.jpg";
import mha from "./assets/mha.jpg";
import dz from "./assets/dz.jpg";
import ans from "./assets/ans.jpg";
import sd from "./assets/sd.jpg";
import sa from "./assets/sa.jpg";
import { Link } from "react-router-dom";
function Anime() {
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
          <img src={op} />
          <div className="overlay">
            <div className="text">
              Monkey D. Luffy, a cheerful boy with a rubber body and big dreams,
              sets sail to find the legendary treasure known as the One Piece
              and become the Pirate King. Along the way, he builds a crew of
              loyal friends, battles powerful enemies, and uncovers the world’s
              darkest secrets. An epic adventure full of action, humor, heart,
              and endless imagination.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ns} />
          <div className="overlay">
            <div className="text">
              Naruto Uzumaki returns to the Hidden Leaf Village after years of
              intense training, now stronger and more determined than ever to
              protect his friends and become Hokage. As dark forces like the
              Akatsuki rise and old bonds are tested, Naruto faces epic battles,
              deep losses, and the truth behind his past. A powerful journey of
              friendship, sacrifice, and never giving up.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={mha} />
          <div className="overlay">
            <div className="text">
              In a world where most people have superpowers called “Quirks,”
              Izuku Midoriya is born powerless—but still dreams of becoming a
              great hero. After a chance encounter with his idol, All Might, he
              inherits a powerful Quirk and enters U.A. High, a prestigious hero
              academy. Packed with action, emotion, and powerful themes of
              courage and growth, it’s a story of rising from nothing to become
              a true hero.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={dz} />
          <div className="overlay">
            <div className="text">
              Goku, a powerful Saiyan warrior, defends Earth from fierce enemies
              like Vegeta, Frieza, Cell, and Majin Buu. Alongside his friends
              and family, he pushes past his limits through intense battles,
              transformations, and training. Packed with epic fights, powerful
              rivalries, and legendary moments, it’s a timeless action-packed
              story of strength, perseverance, and protecting what matters most.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ans} />
          <div className="overlay">
            <div className="text">
              Sora Kurumatani, a short but passionate teenager, joins a high
              school basketball team full of delinquents with no motivation.
              Despite his height disadvantage, Sora’s skill, determination, and
              love for the game slowly inspire his teammates to believe in
              themselves and play for real. A heartfelt sports anime about
              teamwork, growth, and never backing down from your dreams.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sa} />
          <div className="overlay">
            <div className="text">
              When 10-year-old Chihiro stumbles into a mysterious spirit world,
              her parents are turned into pigs, and she must work in a magical
              bathhouse to free them. Along the way, she encounters strange
              creatures, dangerous gods, and discovers her own courage. A
              breathtaking coming-of-age fantasy by Studio Ghibli, filled with
              wonder, mystery, and unforgettable beauty.
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sd} />
          <div className="overlay">
            <div className="text">
              – Taro Sakamoto, once a legendary hitman feared by all, leaves the
              underworld to live a quiet life as a humble convenience store
              owner with his family. But when enemies from his past return, the
              retired assassin must protect his peaceful life—without killing. A
              hilarious and action-packed manga blending brutal fights, clever
              tactics, and comedy, all centered around the world’s deadliest
              (and chubbiest) family man.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
