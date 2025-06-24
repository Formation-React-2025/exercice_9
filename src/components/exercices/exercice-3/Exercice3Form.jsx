import React, { useState, } from 'react';

const requiredFieldError = (value) => {
  if (!value?.trim()) {
    return 'Le champ est obligatoire.';
  }

  return '';
};

const calculateErrors = (formulaire) => {
  const nom = requiredFieldError(formulaire.nom);
  const prenom = requiredFieldError(formulaire.prenom);

  const errors = {
    nom,
    prenom,
  };

  return Object.keys(errors).filter((key) => errors[key]).reduce((acc, key) => ({
    ...acc,
    [key]: errors[key],
  }), {});
};

const Exercice3Form = () => {
  const [
    formulaire,
    setFormulaire,
  ] = useState({
    nom: '',
    prenom: '',
  });

  const onEnregistrerClick = (e) => {
    e.preventDefault();
    const errors = calculateErrors(formulaire);
    if (Object.keys(errors)?.length > 0) {
      setFormulaire({
        ...formulaire,
        errors,
      });
    }
  }

  return (
    <form
      className="exercice-3-form"
      onSubmit={onEnregistrerClick}
      noValidate // pour empêcher la gestion automatique des champs required par le navigateur
    >
      <label
        htmlFor="nom"
      >
        <span>Nom : </span>
        <input
          className={formulaire.errors?.nom ? 'input-error error' : ''}
          id="nom"
          name="nom"
          required
          type="text"
          value={formulaire.nom}
          onInput={(event) => setFormulaire({
            ...formulaire,
            nom: event.target.value,
            errors: {
              ...formulaire.errors,
              nom: '',
            },
          })}
        />
        <br />
        <i className={formulaire.errors?.nom ? 'error' : ''}>{formulaire.errors?.nom ?? ''}</i>
      </label>

      <label
        htmlFor="prenom"
      >
        <span>Prénom : </span>
        <input
          className={formulaire.errors?.prenom ? 'input-error error' : ''}
          id="prenom"
          name="prenom"
          type="text"
          required
          value={formulaire.prenom}
          onInput={(event) => setFormulaire({
            ...formulaire,
            prenom: event.target.value,
            errors: {
              ...formulaire.errors,
              prenom: '',
            },
          })}
        />
        <br/>
        <span className={formulaire.errors?.prenom ? 'error' : ''}>{formulaire.errors?.prenom ?? ''}</span>
      </label>

      <button
        type="submit"
      >
        Enregistrer
      </button>

    </form>
  );
};

export default Exercice3Form;
