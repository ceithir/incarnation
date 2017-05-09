import {ionnaFirstSummon, rebeccaFirstSummon, bulletExplanation, onawaFirstSummon} from "./summons.js";

const bernardoDescription = `
<p>Votre nouvel adversaire se matérialise. Une riche armure d’acier damasquiné. Un manteau d’un rouge écarlate. Une rapière à la lame ondulante. Un masque de fer.</p>

<p>Il s’incline légèrement pour vous saluer, relevant sa cape d’un mouvement désuet.</p>

<div class="conversation">
<p>— Je m’excuse pour ce qui va suivre. Mais c’est nécessaire, pour votre bien, pour extraire le démon qui est en vous.</p>
</div>

<p>Il s’avance au même rythme que les mots sortent de la fente qui lui sert de bouche et frappe en guise de ponctuation.</p>
`;

const defeatDescription = (flags) => {
  let text = ``;

  if (flags.lightlyWounded) {
    text += `
<p>Il s'acharne sur vos blessures toutes fraîches, prenant un malin plaisir à frapper encore et encore des endroits où vous souffrez déjà. Les coups s'enchaînent sans répit, et vos piètres efforts ne parviennent guère à en atténuer l'impact.</p>

<p>Un coup particulièrement réussi à la jambe sonne le glas de votre fébrile résistance. Vous vous effondrez, à genoux, en sang, ayant mal de partout.</p>

<p>Ne pouvant maintenir la concentration nécessaire à l’invocation alors que tous les signaux de votre organisme passent au rouge, vous redevenez Misty, et ressentez d’autant plus la douleur des nombreuses morsures de l'acier que vos perceptions sont maintenant entièrement les vôtres.</p>

<p>Votre adversaire s'extasie devant votre pitoyable résistance.</p>
    `;
  } else {
    text += `

<p>Votre adversaire continue à vous aiguillonner prudemment, se refusant à raccourcir la distance en une frappe plus impactante. Ce qui n'empêche pas ses frappes d'être nombreuses et sanguinolentes. Vos membres sont rapidement couverts de coupures écarlates. Une lacération à la joue vous fait goûter votre propre sang. Un point rouge en haut à gauche de votre poitrine démontre qu'il aurait pu vous transpercer le coeur eusse-t-il appuyé son geste.</p>

<p>Il se joue de vous comme si vous n'étiez qu'une poupée, contrôlant vos mouvements en vous encageant d'acier, dessinant sur votre corps le symbole de sa victoire.</p>

<p>Il conclut sa prestation d'un touche légère juste entre vos deux yeux. Et se détourne ensuite de vous, se retournant pour saluer son public, tandis que vous vous effondrez comme une marionette désarticulée, vos jambes tétanisées par les efforts désordonnés qu'elles ont dû accomplir pour suivre cette macabre danse.</p>
    `;
  }

  return text += `
<div class="conversation">
<p>— Comme à chaque fois, le mal recule devant la lame de la justice. Ne vous inquiétez sœur Iphigénie, cette épreuve nécessaire est bientôt finie.</p>
</div>

<p>Et Eschyle change encore une fois d’esprit.</p>
  `;
};

const second = {
  "second-ionna": {
    "text": (flags) => {
      let summonDescription = `
<p>Vous décidez de changer de fusil d’épaule, et en appelez à Ionna cette fois-ci. Il vous faut une certaine gymnastique mentale pour réussir à vous plonger dans l’état d’esprit particulier dans lequel celle-ci peut s’épanouir, bien différent de celui de votre précédente alliée.</p>

${ionnaFirstSummon}
      `;

      if (flags.ionnaVersusMakabi) {
        summonDescription = `
<p>Malgré la cuisante défaite qu’elle vient de subir, vous rappelez Ionna, moitié car elle reste l’invocation que vous maîtrisez qui encaisse le mieux, moitié car vous comptez sur le fait qu’Eschyle ne s’attende pas à une telle stratégie. Et comme sa présence est encore toute fraîche dans votre mémoire, il vous est aisée de vous replonger dans le personnage.</p>
        `;
      }

      return `
${summonDescription}

${bernardoDescription}

<p>Vous parez avec votre propre arme. Votre lame glisse sur la forme inhabituelle de l’autre, finit détournée par la garde ouvragée. Cela lui offre une ouverture, qu’il exploite en rappant votre hanche.</p>

<p>Cela a pour seul effet de laisser une trace disgracieuse sur votre armure.</p>

<p>L’échange de coups qui s’ensuit se révèle tout aussi maladroit.</p>

<p>Sur le papier, l’avantage est pour lui. Vous avez été quelque peu rossée à l’affrontement précédent alors qu’il est encore indemne, votre équipement est bien plus grossier que le sien, plus lourd, moins bien articulé. Les gantelets en sont les meilleurs exemples : les siens sont finement ouvragés, avec des doigts séparés, tandis que vous ne disposez que de demi-moufles métalliques ne couvrant que la face extérieure de vos mains.</p>

<p>Cela lui ouvre les portes à tout un panel de techniques contre lesquelles vous luttez difficilement, lui permettant de vous toucher sans que vous soyez capable de lui rendre la pareille. Il virevolte, dévie votre lame en la saisissant entre le pouce et l’index, fait onduler quelque peu la sienne pour frapper en courbe.</p>

<p>Sauf que dans la pratique toutes ses attaques ricochent piteusement sur votre armure.</p>

<p>Ce n’est pas une question d’arme inadaptée ou de force. C’est simplement qu’il ne frappe que par pointes rapides et légères sur des zones sensibles du corps. Une technique de duels de cour, idéale pour faire rapidement couler le sang et humilier son adversaire.</p>

<p>Aussi, entre ratages complets et touches pauvres, en êtes-vous toujours au même point après une bonne minute de ferraillage.</p>

<p>Ensuite, la situation bascule en votre faveur. Votre adversaire peine à s’adapter tandis que vous redoublez d’efforts. Il s’efforce bien de changer de stratégie, mais péniblement, mais mal, mais trop tard. Cela lui fait commettre des erreurs, que vous exploitez à votre tour.</p>

<p>Jusqu’à ce que votre épée s’abatte en plein sur son visage.</p>

<p>Le masque encaisse, même s’il vole au passage, révélant un visage tout à fait quelconque avec une petite barbichette brune. Son propriétaire fait cependant un sacré bon en arrière.</p>

<p>Et s’efface. Tout son être devient flou alors qu’Eschyle change brutalement de stratégie et d’invocation.</p>

<p>Une fuite à la première difficulté. Pitoyable.</p>

<p>Vous plantez votre épée droite dans le sol entre vos jambes, joignez les mains devant la croix improvisée et remerciez le Seigneur d’avoir soutenu votre bras tandis que votre ennemi prépare sa nouvelle diablerie.</p>
      `;
    },
    "next": (goToSection, flags) => {
      return {
        "text": `Quelle qu’elle soit, vous êtes prête à l’accueillir.`,
        "action": () => {
          if (!flags.lightlyWounded) {
            return goToSection("role-reversing-ionna");
          }

          goToSection("second-surrender-offer-ionna");
        },
      };
    },
  },
  "second-rebecca": {
    "text": (flags) => {
      let summonDescription = `
<p>Votre premier essai n’ayant guère été couronné de succès, vous vous plongez dans l’état d’esprit nécessaire à invoquer la plus controversée des esprits à votre disposition.</p>

${rebeccaFirstSummon}
      `;

      let explanation = `
${bulletExplanation}
      `;

      if (flags.rebeccaVersusMakabi) {
        summonDescription = `
<p>Vous ne changez pas une recette gagnante, vous préparant à faire feu à nouveau.</p>
        `;

        explanation = `
<p>Comme dans votre duel précédent de fait. Si ce n’est que vous ne faites maintenant face à un adversaire adapté à la situation.</p>
        `;
      }

      return `
${summonDescription}

${bernardoDescription}

<p>Vous lui répondez d’une balle en pleine poitrine.</p>

<p>Qui n’a aucun effet, qu’il soit physiologique ou psychologique. Son armure bombée arrête ce qu’il reste de votre projectile sans difficulté, et il ne dévie pas son attaque d’un pouce, vous éraflant le bras au passage.</p>

<p>L’instant suivant, il a ramené son pied en arrière, creusant à nouveau la distance.</p>

<div class="conversation">
<p>— Ton pétaradant est le miroir de tes erreurs spirituelles. Le choix d’une illusoire facilité dont les faiblesses se révèlent maintenant au grand jour.</p>
</div>

<p>Vous lui en remettez deux tandis qu’il vous mouche à nouveau, à la jambe cette fois. Vous le touchez, aucun doute là-dessus, mais vous commencez à comprendre qu’il porte justement une armure conçue pour résister aux projectiles.</p>

<p>À des projectiles pas trop rapides et pas trop résistants certes, mais vous êtes ironiquement dans ce cas de figure.</p>

${explanation}

<p>Vous essayez de vous rapprocher pour lui mettre une balle de plus près, mais il semble parfaitement conscient de votre faiblesse actuelle et s’assure de garder ses distances, vous aiguillonnant au passage.</p>

${defeatDescription(flags)}
      `;
    },
    "next": (goToSection, flags) => {
      return {
        "text": `Quoi encore ?`,
        "action": () => {
          if (flags.badlyWounded) {
            return goToSection("second-surrender-offer-no-summon");
          }
          goToSection("second-surrender-offer");
        },
      };
    },
  },
  "second-onawa": {
    "text": (flags) => {
      let summonDescription = `
<p>Votre premier essai n’ayant guère été couronné de succès, vous vous décidez à abattre votre joker, et vous concentrez pour synchroniser votre personnalité sur la sienne.</p>

${onawaFirstSummon}
      `;

      let wound = `
<p>Il dit ça, mais il frappe tout de même dans le même mouvement, vous infligeant une belle coupure sanglante au flanc.</p>
      `;

      if (flags.onawaVersusMakabi) {
        summonDescription = `
<p>La première tentative d’Onawa d’expliquer vos choix a tourné court. Raison de plus pour remettre le couvert.</p>
        `;

        wound = `
<p>Il dit ça, mais il vous attaque tout de même, vous chatouillant, certainement à dessein, là même où la précédente invocation vous avez douloureusement frappée.</p>
        `;
      }

      return `
${summonDescription}

${bernardoDescription}

<p>Guère surprise, vous esquivez aussitôt d’un pas sur le côté.</p>

<div class="conversation">
<p>— Et bien, quelle entrée en matière. Serait-ce trop vous demander que de me laisser parler, tous autant que vous êtes ?</p>
<p>— Si c’est pour entendre ta confession, je n’y vois pas d’inconvénient.</p>
</div>

${wound}

<p>Toutefois, le simple fait qu’il vous réponde, et s’en amuse, laisse entrevoir la possibilité de l’amener de son terrain vers le vôtre. Surtout que cela détourne également sa propre attention du combat physique.</p>

<div class="conversation">
<p>— Déjà, si tu pouvais éviter de trop me charcuter, ce serait fantastique. Le sang, c’est vachement dur à nettoyer.</p>
<p>— Mon enfant, tu devrais te repentir et non rire. Si ce sang a coulé, c’est uniquement en raison de tes pêchés.</p>
<p>— Je sais pas trop. J’ai probablement mangé une religieuse de plus que de raison la dernière fois, mais même si j’avais alors surmonté ce pêché de gourmandise, je pense que ma situation actuelle n’aurait globalement pas changé.</p>
<p>« En revanche, je suis certaine que si personne ne s’était mis en tête de m’embrocher et de me couper en morceaux aujourd’hui, j’aurais encore toute mon hémoglobine pour moi.</p>
</div>

<p>Nouvelle attaque. Aine. Un coup fort et douloureux, mais surtout tremblant de rage.</p>

<p>Il n’en faut pas beaucoup pour le mettre en rogne celui-là.</p>

<div class="conversation">
<p>— Ce que tu as mangé ou pas n’a aucun rapport avec la présente situation !</p>
<p>— Ah ? Mais dans ce cas, que me reproche-t-on exactement ?</p>
<p>— D’être un esprit impie, malfaisant, tentateur, corrupteur…</p>
<p>— Oui, oui, je suis extraordinaire, je sais. Mais que me reproche-t-on <em>d’avoir fait</em> ? On ne peut condamner quelqu’un que par rapport à ses actes, pas simplement sur ce qu’il est.</p>
</div>

<p>Sa réponse vient sous la forme d’une pluie d’attaques silencieuses. Il ne joue plus, uniquement concentré sur l’idée de vous faire taire.</p>

${defeatDescription(flags)}
      `;
    },
    "next": (goToSection, flags) => {
      return {
        "text": `Quoi encore ?`,
        "action": () => {
          if (flags.badlyWounded) {
            return goToSection("second-surrender-offer-no-summon");
          }
          goToSection("second-surrender-offer");
        },
      };
    },
  },
};

export default second;
