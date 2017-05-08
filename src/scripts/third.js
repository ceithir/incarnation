const batuoOffer = `
<p>Il s’approche et se penche vers vous, vous tendant la main.</p>

<div class="conversation">
<p>— Le combat est fini ma sœur. La leçon a été rude, mais elle était nécessaire. Je vois que vous avez compris maintenant. Il ne vous reste plus qu’à abjurer vos pêchés, et vous serez pardonnée.</p>
</div>
`;

const third = {
  "second-surrender-offer": {
    "text": (flags) => {
      return `
<p>Vous vous relevez péniblement, épuisée et endolorie. Vos multiples coupures vous démangent. Dans le meilleur des cas. La Misty au fond de a beau savoir que les blessures ainsi reçues vont en partie se résorber lorsque vous romprez l'invocation, emportées avec vos autres modifications physiques temporaires, cela ne change rien à votre état de délabrement actuel.</p>

<p>Même si en tant ${flags.rebeccaVersusBernardo? `que Rebecca`: `qu’Onawa`} vous avez connu pire, il ne s'agit pas du genre d'expérience que vous aimez reproduire.</p>

${flags.onawaVersusBernardo? `<p>De savoir la guérison très incomplète démange aussi votre conscience.</p>`: ""}

<p>Toutefois, vous serrez les dents et vous vous préparez à accueillir la nouvelle diablerie d'd’Eschyle comme il se doit.</p>

<p>Dont le nouvel avatar s'avère être un petit gros. Pas tout jeune en plus, le crâne et la barbe rasés, portant une robe de prêtre toute simple et allant pieds nus.</p>

${batuoOffer}

${flags.onawaVersusBernardo? `
<p>Votre instinct est de refuser d'un bloc, mais vous vous forcez à rompre le charme pour pouvoir réfléchir à cette proposition sans que vos pensées ne soient teintées de celles de votre invocation.</p>

<p>Le retour à la réalité est particulièrement douloureux. Peu importe la réalité de ce qui arrive à votre métabolisme, vos perceptions sont maintenant entièrement les vôtres, sans le filtre d'un esprit parasite, et vous les recevez de plein fouet dans tout ce qu'elles ont de désagréable.</p>

<p>Grimaçant, respirant lourdement, vous observez la main tendue.</p>
`: ""}
      `;
    },
    "next": (goToSection, flags) => {
      if (flags.rebeccaVersusBernardo) {
        return {
          "text": `Mais bien sûr.`,
          "action": () => {goToSection("no-surrender-rebecca");},
        };
      }

      return [
        {
          "text": `Vous la prenez.`,
          "action": () => {goToSection("surrender");},
        },
        {
          "text": `Vous lui retournez un autre geste que celui attendu.`,
          "action": () => {goToSection("no-surrender-light-wounds");},
        }
      ];
    },
  },
  "second-surrender-offer-ionna": {
    "text": (flags) => {
      return `
<p>Un petit gros. Pas tout jeune en plus, le crâne et la barbe rasés, portant une robe de prêtre toute simple et allant pieds nus.</p>

<p>Vous ne sauriez dire à quoi vous vous attendiez, mais en tout cas pas à ça.</p>

${batuoOffer}

<p>Votre instinct est de refuser d'un bloc, mais vous vous forcez à rompre le charme pour pouvoir réfléchir à cette proposition sans que vos pensées ne soient teintées par celles de votre invocation.</p>

<p>Le retour à votre forme normale est l'occasion pour vous de constater que vous avez écopé de quelques belles ecchymoses malgré votre victoire, qui s'ajoutent aux coups reçus lors de votre premier duel. Si la joie intense d'avoir fait reculer Eschyle anesthésie la douleur, vous êtes en réalité en bien piteux état tandis que votre adversaire n'a lui été meurtri que dans son orgueil.</p>

<p>Gardant cela en tête, vous observez la main tendue.</p>
      `;
    },
    "next": (goToSection, flags) => {
      return [
        {
          "text": `Vous la prenez.`,
          "action": () => {goToSection("surrender");},
        },
        {
          "text": `Vous lui retournez un autre geste que celui attendu.`,
          "action": () => {goToSection("no-surrender-light-wounds");},
        }
      ];
    },
  },
  "second-surrender-offer-no-summon": {
    "text": `
<p>Le dernier esprit d’Eschyle vous a déjà mise à terre, avec le goût de votre propre sang dans votre bouche. Qu’est-ce qu’il va encore bien pouvoir vous sortir ? Un bourreau avec sa hache ?</p>

<p>Un petit gros.</p>

<p>Un petit gros. Pas tout jeune, le crâne et la barbe rasés, portant une robe de prêtre toute simple et allant pieds nus.</p>

${batuoOffer}

<p>Évidemment. Cette démonstration ne pouvait se finir sans votre repentance publique.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Vous jetez l’éponge.`,
          "action": () => {
            goToSection("surrender");
          },
        },
        {
          "text": `Non.`,
          "action": () => {
            goToSection("no-surrender-heavy-wounds");
          },
        },
      ];
    },
  },
  "no-surrender-light-wounds": {
    "text": `
<p>Vous exprimez de manière muette mais explicite votre refus.</p>

<p>L'homme secoue la tête d'un air triste de comédien professionnel.</p>

<div class="conversation">
<p>- Ainsi soit-il. Je suis désolé pour ce qui va arriver.</p>
</div>

<p>Et il claque théâtralement ses mains, amorçant une nouvelle invocation.</p>

<p>Et vous allez lui répondre comme il se doit.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Ionna`,
          "action" => () => {goToSection("final-ionna");},
        },
        {
          "text": `Rebecca`,
          "action" => () => {goToSection("final-rebecca");},
        },
        {
          "text": `Onawa`,
          "action" => () => {goToSection("final-onawa");},
        },
      ];
    },
  },
  "no-surrender-rebecca": {
    "text": `
<p>Vous répondez en appuyant sur la gâchette de votre arme.</p>

<p>Il s'y attendait et se met en mouvement avant même la détonation, esquivant votre tir avec une souplesse et des réflexes démontrant une pratique avancée des arts martiaux.</p>

<p>Vous vous attendiez un peu à une blague du genre. Il y a être sûr de soi, et il y a se ramener sans défense devant un flingue. Apparemment, Eschyle n'a pas encore basculé dans la seconde catégorie.</p>

<p>Il affiche cependant une expression contrariée, nerveuse.</p>

<div class="conversation">
<p>- Ainsi soit-il, déclare-t-il en entamant une nouvelle invocation.</p>
</div>

<p>Vous lui en remettez une durant le processus, mais votre éphèmère projectile se dissout dans les méandres de sa chaotique transformation, aussi brutale que fugace. Vous ne couperez pas à une nouvelle surprise.</p>
    `,
    "next": (goToSection) => {
      return {
        "text": `Mais cette fois, ce sera la dernière.`,
        "action" => () => {goToSection("final-rebecca");},
      };
    },
  },
  "no-surrender-heavy-wounds": {
    "text": `
<p>Plutôt crever.</p>
    `,
    "next": (goToSection, flags) => {
      return [
        {
          "text": `Ionna`,
          "action": () => {
            goToSection("iron-ionna");
          }
        },
        {
          "text": `Rebecca`,
          "action": () => {
            goToSection("summoning-failure");
          }
        },
        {
          "text": `Onawa`,
          "action": () => {
            if (flags.onawaVersusMakabi && flags.onawaVersusBernardo) {
              return goToSection("red-eyed-onawa");
            }

            goToSection("summoning-failure");
          }
        },
      ];
    },
  },
  "iron-ionna": {
    "text": `
<p>Vous essayez de vous concentrer. Tâche impossible. Vous avez mal. Vraiment mal. Vous n’êtes même pas sûre de pouvoir utiliser votre jambe. Et même si vous avez du mal à l’accepter, vous êtes terrifiée. Par l’idée que tout ceci puisse encore empirer si vous cherchez encore à vous battre.</p>

<p>La synchronisation avec Ionna s’effectue naturellement. Pas par les sentiments que vous lui prêtez d’habitude, mais par une résonance viscérale.</p>

<p>Vous avez mal. Mal comme jamais. Froid aussi. La terre humide et glacée collait à votre visage. La terre avale le sang coulant lentement de votre cou.</p>

<p>Une flèche chanceuse. Enfin, pas si chanceuse. Vous êtes encore en vie. Enfin, l’êtes-vous vraiment ? Tout votre corps est lourd. Pourrait être la boue. Pourrait être la fatigue des dernières semaines demandant son dû comptant. Pourrait être la vie qui vous quitte.</p>

<p>Vous ne pouvez pas entendre les cris. Mais vous les entendez quand même. Le bruit de la panique dans votre camp. La charge de la victoire dans celui d’en face. Toute cette opération ne tient que par le filet d’espoir que vous représentez pour les uns, et la crainte que vous inspirez aux autres. Vous morte, ou supposée morte, cette bataille est perdue.</p>

<p>Vous pouvez accepter votre mort. Pas celle de l’espoir.</p>

<p>Vous vous relevez.</p>

<p>Votre épée vous sert de cane. Votre armure pèse, mais elle maintient vos différents morceaux en place. Votre blessure hurle, mais elle devra attendre. Vous avez une bataille à gagner.</p>

<p>Vous n’êtes pas Ionna. Vous n’êtes la championne d’aucune cause. Mais vous en avez assez de vous faire cracher dessus. Vous en avez assez que tout un groupe crachent sur des êtres aussi remarquables qu’elle.</p>

<p>Ionna, Rebecca, Onawa, les autres, sont loin d’être parfaites. Mais elles ont toujours été là quand vous aviez besoin d’elles, et ce jour ne fait pas exception. Alors vous n’allez pas les abandonner parce qu’un type mort voilà deux mille ans en a décidé ainsi.</p>

<p>Vous détachez votre arme du sol et la pointez vers votre ennemi. L’avatar d’Eschyle secoue tristement la tête.</p>

<div class="conversation">
<p>— Je suis tellement déçu mon enfant.</p>
</div>

<p>Et il change à nouveau d’apparence.</p>
    `,
    "next": (goToSection, flags) => {
      return {
        "text": `Quoi qu’il vous réserve encore, vous êtes prête.`,
        "action": () => {
          if (flags.onawaVersusMakabi && flags.rebeccaVersusBernardo) {
            return goToSection("three-as-one");
          }

          goToSection("final-ionna");
        },
      };
    },
  },
  "role-reversing-ionna": {
    "text": `
<p>Un petit gros. Pas tout jeune en plus, le crâne et la barbe rasés, portant une robe de prêtre toute simple et allant pieds nus.</p>

<p>Vous ne sauriez dire à quoi vous vous attendiez, mais en tout cas pas à ça.</p>

<p>Contrairement aux deux autres, il cherche pas à vous planter un morceau de métal dans le corps dès son arrivée. Au contraire, il garde ses distances, ouvre grand les bras et s'adresse chaleureusement à vous :</p>

<div class="conversation">
<p>- Sœur Iphigénie, ces premiers échanges m'ont permis de mieux cerner les problèmes qui vous hantent. J'y ai ressenti beaucoup de rage, de fureur, de colère. Pas tant de la malice comme je l'avais craint, mais une énorme confusion. Les esprits avec lesquels vous avez communiés sont aussi perdus que vous l'êtes, et expriment leur déroute par leur agressivité.</p>
<p>« Ce recours permanent à la violence peut vous donner l'impression qu'ils sont forts et protecteurs. Mais il n'en est rien. Tout au plus peuvent-ils faire illusions face à d'autres esprits faibles de même nature, ou, dans le cas présent, face à de nobles âmes qui s'efforcent de retenir leur bras pour ne pas meurtrir votre chair plus que nécessaire. Mais si vous persistez dans cette voie, je me verrai obligé de les laisser employer toute leur majesté pour vous empêcher de faire du mal, à vous et aux autres.</p>
</div>

<p>Vous êtes estomaquée par la mauvaise foi de ce discours, qui ose vous condamner pour avoir rendu les coups, alors que c'est là-même la procédure du jugement. Ainsi, vous défendre fait de vous une aussi parfaite coupable que de tendre l'autre joue.</p>

<p>Ce qui vous désole encore plus, c'est que c'est la seconde fois que vous êtes confrontée à pareille rhétorique judiciaire de l'absurde, capable de se contredire sans vergogne tant que cela satisfait ses intérêts.</p>

<p>La première fois, en dépit de l'absurdité des accusations, cela s'était très mal fini pour vous.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Vous laissez Ionna en charge.`,
          "action": () => {goToSection("lawyer-ionna")},
        },
        {
          "text": `Vous basculez vers un esprit plus à même de se défendre.`,
          "action": () => {goToSection("calling-the-defense")},
        },
      ];
    },
  },
  "lawyer-ionna": {
    "text": `
<p>Vous essayez de prononcer une réplique bien sentie, mais n'arrivez qu'à éructer quelques pâteuses syllabes, encore sous l'emprise de la maléfique drogue.</p>

<p>De rage, vous vous signez, et pointez un point accusateur vers votre juge corrompu.</p>

<p>Celui-ci pousse un profond soupir.</p>

<div class="conversation">
<p>- Je ne voulais pas en arriver là, énonce-t-il.</p>
</div>

<p>S'il dit vrai, ce n'est sans doute pas par compassion, mais plutôt car ce scénario sert moins ses intérêts.</p>

<p>Et il se transforme à nouveau.</p>
    `,
    "next": (goToSection) => {
      return {
        "text": `Quoi qu'il invoque, vous êtes prête.`,
        "action": () => {goToSection("final-ionna")}
      };
    },
  },
  "calling-the-defense": {
    "text": `
<p>Songeant qu'un affrontement avec une Ionna furieuse est justement là où Eschyle veut vous entraîner, vous la révoquez au profit d'un esprit plus inattendu.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Rebecca`,
          "action": () => {goToSection("lawyer-rebecca")},
        },
        {
          "text": `Onawa`,
          "action": () => {goToSection("legal-victory")},
        }
      ];
    },
  },
  "lawyer-rebecca": {
    "text": `
<p>Dès que la forme de Rebecca se précise, Eschyle entame une nouvelle invocation. Le souvenir de son premier échec cuisant contre le miracle de la technologie l'incite clairement à la prudence.</p>
    `,
    "next": (goToSection) => {
      "text": `Et il a bien raison de paniquer.`,
      "action": () => {goToSection("final-rebecca")},
    }
  },
};

export default third;
