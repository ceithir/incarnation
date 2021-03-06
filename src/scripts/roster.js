import React from "react";

const ionnaDescription = `
<p>De tous les membres de votre limité arsenal, c’est celle qui s’approche le plus des canons recherchés par l’Ordre. Elle a vécu à une époque très éloignée, était dévote, intransigeante, conservatrice, et a laissé des traces dans l’imaginaire collectif. Selon vous, une seule raison explique qu’elle se soit retrouvée du mauvais côté de la liste : une tendance marquée à remettre en place ceux qui s’estimaient être ses supérieurs quand leurs décisions lui déplaisaient.</p>

<p>C’est également une combattante à l’ancienne, habituée à cogner dur avec toutes sortes d’objets métalliques, et à subir de même en retour.</p>
`;

const rebeccaDescription = `
<p>De son vivant, Rebecca participait à des activités illégales sur les mers dans un but d’enrichissement personnel en usant parfois de violence.</p>

<p>C’est sans aucun doute la personnalité la plus discutable avec qui vous vous soyez jamais associée. Si elle a des qualités tout à fait honorables, elle reste avant tout une hors-la-loi avec du sang sur les mains. Ainsi, vous ne vous rachèterez certainement pas une réputation en la révélant au grand jour.</p>

<p>Elle a également une tendance marquée à rejeter l’idée qu’elle ne soit plus qu’un spectre, et ses actions se heurtent régulièrement aux limites de sa condition actuelle.</p>

<p>Toutefois, c’est aussi votre alliée la plus acharnée et débrouillarde. Si quelqu’un peut retourner ce duel, c’est bien elle.</p>
`;

const onawaDescription = `
<p>Onawa est un cas très particulier. C’est le plus frais des esprits à votre disposition, sa mort remontant à peine à quelques années. Et également la plus imprévisible du lot, de loin. Elle semble constamment improviser, peut changer d’humeur du tout au tout d’un instant à l’autre, prend souvent des risques dingues sans raison valable.</p>

<p>Et pourtant, en dépit des apparences, elle arrive très souvent à ses fins.</p>

<p>Vous ignorez totalement ce qu’elle va pouvoir vous sortir dans une pareille situation. Vous savez juste que cela sera certainement mémorable.</p>
`;

const roster = {
  "roster": {
    "text": `
<p>Eschyle s’est plongé en transe, mais n’a pour l’instant invoqué aucun esprit précis. D’après les instructions sommaires que vous avez reçues avant cette mascarade, vous êtes supposés abattre vos cartes tous deux en même temps, sans savoir ce que l’autre vous prépare. Pour que le spectacle ne soit pas trop court, il vous a quand même été indiqué que vous aviez intérêt à balancer ce que vous avez de plus costaud dès le départ.</p>

<p>Ce qui limite fortement vos possibilités. Même si les accusations à votre encontre sont assez vagues pour laisser supposer que vous avez pactisé avec la moitié de l’enfer, la vérité est bien plus modeste. La plupart des esprits originaux avec qui vous avez tenté de communier n’ont tout simplement pas répondu à votre appel. Pour d’autres la première incarnation s’est si mal passée que vous ne les avez plus jamais recontactés. Au final ne reste qu’une petite douzaine de personnes en qui vous avez confiance et que vous savez pouvoir invoquer de façon fiable.</p>

<p>Et parmi eux, rares sont ceux susceptibles de vous aider dans la présente situation. Vous avez beau adorer les livres de Wisp, ce n’est pas sa plume qui va vous protéger de l’épée d’Eschyle.</p>

<p>Au terme d’intenses réflexions, que vous avez eu tout le temps de mener alors que vous pourrissiez dans votre cellule, vous êtes arrivée à la conclusion que la liste des personnes capables de présentement vous prêter assistance ne comporte en réalité que trois noms :</p>
    `,
    "next": (goToSection) => {
      const buildDl = (name, description, chosen) => {
        return `
          <dl>
            <dt${chosen? ` class="chosen"`: ""}>${name}</dt>
            <dd>${description}</dd>
          </dl>
        `;
      }

      const choice = (section, flags, name, description) => {
        const logs = (text) => {
          return `
            ${text}
            <div class="in-text-choices">
              ${buildDl("Ionna", ionnaDescription, name === "Ionna")}
              ${buildDl("Rebecca", rebeccaDescription, name === "Rebecca")}
              ${buildDl("Onawa", onawaDescription, name === "Onawa")}
            </div>
          `;
        };

        const action = () => {goToSection(section, flags, logs);};

        return (
          <dl>
            <dt><a className="choice" onClick={action}>{name}</a></dt>
            <dd dangerouslySetInnerHTML={{"__html": description}}></dd>
          </dl>
        );
      }
      return (
        <div>
          {choice("first-ionna", {"ionnaVersusMakabi": true, "lightlyWounded": true}, "Ionna", ionnaDescription)}
          {choice("first-rebecca", {"rebeccaVersusMakabi": true}, "Rebecca", rebeccaDescription)}
          {choice("first-onawa", {"onawaVersusMakabi": true, "lightlyWounded": true}, "Onawa", onawaDescription)}
        </div>
      );
    },
  },
};

export default roster;
