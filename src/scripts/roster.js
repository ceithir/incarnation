import React from 'react';

const rosterIntroduction = `
<p>Eschyle s'est plongé en transe, mais n'a pour l'instant invoqué aucun esprit précis. D'après les instructions sommaires que vous avez reçues avant cette mascarade, vous êtes censés abattre vos cartes en même temps, sans savoir ce que l'autre vous prépare. Pour que le spectacle ne soit pas trop court, il vous a quand même été indiquée que vous aviez intérêt à balancer ce que vous avez de plus costaud dès le départ.</p>

<p>Ce qui limite fortement vos possibilités. Même si les accusations à votre encontre sont assez vagues pour laisser supposer que vous avez pactisé avec la moitié de l'enfer, la vérité est bien plus modeste. La plupart des esprits avec qui vous avez tenté de communier n'ont tout simplement pas répondu à votre appel, et pour d'autres la première incarnation s'est si mal passée que vous ne les avez plus jamais recontactés. Au final ne reste qu'une petite douzaine d'esprits en qui vous avez confiance et que vous savez pourquoi invoquer de façon fiable.</p>

<p>Et parmi eux, rares sont ceux susceptibles de vous aider dans la présente situation. Vous avez beau adorer les livres de Wisp, ce n'est pas sa plume qui va vous protéger de l'épée d'Eschyle.</p>

<p>Au terme d'intenses réflexions, que vous avez eu tout le temps de mener alors que vous pourrissiez dans votre cellule, vous êtes arrivée à la conclusion que la liste des personnes capables de présentement vous prêter assistance ne comporte que trois noms.</p>
`;

const ionnaDescription = `
<p>De tous les membres de votre limité arsenal, c'est celle qui s'approche le plus des canons recherchés par l'Ordre. Elle a vécu à une époque très éloignée, avait un comportement intransigeant et un schéma de pensée conservateur, et a laissé des traces dans l'imaginaire collectif. Selon vous, une seule raison explique qu'elle se soit retrouvée du mauvais côté de la liste : une tendance marquée à remettre en place ses supérieurs hiérarchiques supposés quand leurs décisions lui déplaisaient.</p>

<p>C'est également une combattante à l'ancienne, habituée à cogner dur avec toute sorte d'objets souvent métalliques, et à subir de même en retour.</p>
`;

const rebeccaDescription = `
<p>À écrire.</p>
`;

const onawaDescription = `
<p>À faire.</p>
`;

const roster = {
  "roster": {
    "text": rosterIntroduction,
    "next": (goToSection) => {
      const buildDl = (name, description) => {
        return `
          <dl>
            <dt>${name}</dt>
            <dd>${description}</dd>
          </dl>
        `;
      }
      const logs =  rosterIntroduction + "<div class=\"in-text-choices\">" + buildDl("Ionna", ionnaDescription) + buildDl("Rebecca", rebeccaDescription) + buildDl("Onawa", onawaDescription) + "</div>";
      const choice = (section, name, description) => {
        const action = () => {
          goToSection(section, {}, logs.replace("<dt>"+name, "<dt class=\"chosen\">"+name));
        };
        return (
          <dl>
            <dt><a className="choice" onClick={action}>{name}</a></dt>
            <dd dangerouslySetInnerHTML={{"__html": description}}></dd>
          </dl>
        );
      }
      return (
        <div>
          {choice("first-sacred", "Ionna", ionnaDescription)}
          {choice("first-pirate", "Rebecca", rebeccaDescription)}
          {choice("first-rebellion", "Onawa", onawaDescription)}
        </div>
      );
    },
  },
};

export default roster;
