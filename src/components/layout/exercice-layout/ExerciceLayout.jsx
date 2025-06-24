import React, { Children, } from 'react';
import PropTypes from 'prop-types';
import './ExerciceLayout.css';

const ExerciceLayout = ({
  title,
  children = undefined,
}) => (
  <section className="exercice-layout">
    <header>
      <h2>{title}</h2>
    </header>

    <section>
      {Children.map(children, (c) => c)}
    </section>

    <footer>
      {`Layout rendered le ${new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}`}
    </footer>
  </section>
);

ExerciceLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ExerciceLayout;
