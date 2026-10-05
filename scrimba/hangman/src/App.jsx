import React from "react";
import ProgrammingLanguage from "./ProgrammingLanguage";
import { languages } from "./languages.js";
/**
 * Goal: Build out the main parts of our app
 *
 * Challenge: Build a status section below the header.
 * For now, you can just hard-code in the styles for
 * a winning game, and we'll make it more dynamic
 * later.
 */

export default function AssemblyEndgame() {
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <div className="programming-languages">
        {
          languages.map((language) => (
            <ProgrammingLanguage
              key={language.name}
              name={language.name}
              backgroundColor={language.backgroundColor}
              color={language.color}
              className="programming-language"
            />
          ))
        }
      </div>
    </main>
  );
}
