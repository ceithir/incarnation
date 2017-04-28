import {ionnaFirstSummon, rebeccaFirstSummon, bulletExplanation, onawaFirstSummon} from "./summons.js";

const bernardoDescription = `
<p>Votre nouvel adversaire se matérialise. Une riche armure d’acier damasquiné. Un manteau d’un rouge écarlate. Une rapière à la lame ondulante. Un masque de fer.</p>

<p>Il s’incline légèrement pour vous saluer, relevant sa cape d’un mouvement désuet.</p>

<div class="conversation">
<p>— Je m’excuse pour ce qui va suivre. Mais c’est nécessaire, pour votre bien, pour extraire le démon qui est en vous.</p>
</div>

<p>Il s’avance au même rythme que les mots sortent de la fente qui lui sert de bouche et frappe en guise de ponctuation.</p>
`;

const defeatDescription = `
<p>Un coup particulièrement réussi à la jambe vous force à tomber sur un genou. Un autre à la joue ne vous inflige pas grand mal mais vous fait goûter votre propre sang. Une troisième à l’épaule rend particulièrement douloureux pour vous d’user de votre bras droit.</p>

<p>Vous ne pouvez pas maintenir la concentration nécessaire à l’invocation alors que tous les signaux de votre organisme passent au rouge. Vous redevenez Misty, et souffrez d’autant plus que vos perceptions sont maintenant entièrement les vôtres.</p>

<div class="conversation">
<p>— Comme à chaque fois, le mal recule devant la lame de la justice. Ne vous inquiétez sœur Iphigénie, cette épreuve nécessaire est bientôt finie.</p>
</div>

<p>Et Eschyle change encore une fois d’esprit.</p>
`;

const second = {
  "second-form": {
    "text": `
<p>Vous croisez les bras devant votre visage en prévision du prochain assaut. Ce mouvement défensif réflexe représente à peu près à lui seul toute votre expérience en combat réel quand vous n’avez personne pour vous souffler les mouvements.</p>

<p>Autant dire que vous vous attendez à passer un sale quart d’heure.</p>

<p>Toutefois, au lieu de simplement vous battre comme un sac de plâtre, votre adversaire recule. L’instant suivant, le charme est rompu et un sourire torve s’affiche sur le visage d’Eschyle. Il prend le temps de vous détailler du regard, se pourléchant presque les babines.</p>

<div class="conversation">
<p>— Il ne fait aucun doute que vos esprits sont aussi faibles qu’annoncés. Vous n’avez pas besoin de vous infliger cela sœur Iphigénie. Abandonnez dès maintenant, et votre châtiment ne sera point alourdi.</p>
</div>

<p>Votre premier réflexe est de rejeter sa proposition en bloc. Toutefois, la situation est effectivement bien mal engagée.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Vous acceptez son offre.`,
          "action": () => {
            goToSection("surrender");
          },
        },
        {
          "text": `Vous invoquez un autre esprit.`,
          "action": () => {
            goToSection("second-form-2");
          },
        },
      ];
    },
  },
  "second-form-2": {
    "text": `
<p>Vous venez d’essuyer un revers, c’est certain. Toutefois, si Eschyle croit que vous allez lâcher aussi facilement ce qui est peut-être votre dernière opportunité de vous sortir de ce guêpier, c’est qu’il est encore plus dénué d’empathie que vous ne le pensiez.</p>

<p>Vous amorcez une nouvelle invocation. Votre bourreau ne semble pas déçu de votre décision. Tout au contraire, son sourire malveillant s’élargit encore un peu plus tandis qu’il vous répond en faisant de même.</p>

<p>Vous ne savez pas ce qu’il vous prépare, mais au moins ne l’affronterez-vous pas seule.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Ionna.`,
          "action": () => {
            goToSection("second-ionna");
          },
        },
        {
          "text": `Rebecca.`,
          "action": () => {
            goToSection("second-rebecca", {"badlyWounded": true});
          },
        },
        {
          "text": `Onawa.`,
          "action": () => {
            goToSection("second-onawa", {"onawaVersusBernardo": true, "badlyWounded": true});
          },
        },
      ];
    },
  },
  "second-change-rebecca": {
    "text": `
<p>Vous avez eu Eschyle par surprise une première fois, et vous comptez bien continuer à lui imposer votre rythme.</p>

<p>Vous rompez l’invocation de Rebecca, qui vous abandonne avec un détachement proche de l’apathie, et entamez le second morceau de votre répertoire.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Du classique, avec Ionna.`,
          "action": () => {
            goToSection("second-ionna");
          },
        },
        {
          "text": `Du baroque, avec Onawa.`,
          "action": () => {
            goToSection("second-onawa", {"onawaVersusBernardo": true, "badlyWounded": true});
          },
        },
      ];
    },
  },
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
    "next": (goToSection) => {
      return {
        "text": `Quelle qu’elle soit, vous êtes prête à l’accueillir.`,
        "action": () => {
          goToSection("final-form");
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

${defeatDescription}
      `;
    },
    "next": (goToSection) => {
      return {
        "text": `Qu’est-ce qu’il peut encore vous faire subir ?`,
        "action": () => {
          goToSection("third-form");
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

${defeatDescription}
      `;
    },
    "next": (goToSection) => {
      return {
        "text": `Quoi encore ?`,
        "action": () => {
          goToSection("third-form");
        },
      };
    },
  },
  "second-form-onawa": {
    "text": `
<p>Eschyle s’efforce de prendre un air compatissant, mais n’arrive pas à dissimuler totalement son sourire satisfait.</p>

<div class="conversation">
<p>— Vos esprits sont aussi faibles qu’il était à craindre sœur Iphigénie. Vous n’avez pas besoin de vous infliger cela. Abandonnez dès maintenant, et votre châtiment ne sera point alourdi.</p>
</div>

<p>Onawa refuse tout de go. Misty… Misty hésite.</p>

<p>Merde à la fin, vous venez de vous manger une lance. Ça fait putain de mal, et ce type est sérieusement assez fou pour ne pas s’arrêter là. Vous n’avez pas signé pour ces conneries, pour réellement mettre votre vie en danger dans des jeux du cirque stupides.</p>

<p>Cet état d’esprit totalement contraire à celui de l’esprit hébergé rompt aussitôt le charme. Onawa vous quitte, sans apporter de réponse à votre dilemme.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Vous acceptez l’offre d’Eschyle.`,
          "action": () => {
            goToSection("surrender");
          },
        },
        {
          "text": `Vous serrez les dents et vous préparez pour la seconde manche.`,
          "action": () => {
            goToSection("second-form-2");
          },
        },
      ];
    },
  },
};

export default second;
