import React from 'react';

const Exercice1 = () => (
  <section>
    <header>
      <h2>Exercice 1</h2>
    </header>

    <section>
      Hello world !
    </section>

    <footer>
      {new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </footer>
  </section>
);

export default Exercice1;
