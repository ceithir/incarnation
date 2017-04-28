const third = {
  "third-form": {
    "text": `
<p>Le dernier esprit d’Eschyle vous a déjà mise à terre, avec le goût de votre propre sang dans votre bouche. Qu’est-ce qu’il va encore bien pouvoir vous sortir ? Un bourreau avec sa hache ?</p>

<p>Un petit gros.</p>

<p>Un petit gros. Pas tout jeune, le crâne et la barbe rasés, portant une robe de prêtre toute simple et allant pieds nus.</p>

<p>Il s’approche et se penche vers vous, vous tendant la main.</p>

<div class="conversation">
<p>— Le combat est fini ma sœur. La leçon a été rude, mais elle était nécessaire. Je vois que vous avez compris maintenant. Il ne vous reste plus qu’à abjurer vos pêchés, et vous serez pardonnée.</p>
</div>

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
            goToSection("third-form-2");
          },
        },
      ];
    },
  },
  "third-form-2": {
    "text": `
<p>Plutôt crever.</p>
    `,
    "next": (goToSection, flags) => {
      return [
        {
          "text": `Ionna`,
          "action": () => {
            goToSection("third-ionna");
          }
        },
        {
          "text": `Rebecca`,
          "action": () => {
            goToSection("third-rebecca");
          }
        },
        {
          "text": `Onawa`,
          "action": () => {
            if (flags.onawaVersusMakabi && flags.onawaVersusBernardo) {
              goToSection("third-onawa");
              return;
            }

            goToSection("summoning-failure");
          }
        },
      ];
    },
  },
  "third-onawa": {
    "text": (flags) => {
      return `
<p>Vous essayez d’ignorer la douleur. De vous relever. De vous concentrer.</p>

<p>Vous échouez lamentablement.</p>

<p>Votre nouvel ersatz d’adversaire pose une main sur votre épaule. Vous pouvez sentir sa poigne derrière l’apparente gentillesse du geste.</p>

<div class="conversation">
<p>— Non mon enfant. Vous devez résister à la tentation.</p>
</div>

<p>Vous hochez faiblement la tête. Cessez de résister. Il sourit et vous lâche.</p>

<p>C’est là que vous lui mettez un grand coup dans les gencives.</p>

<p>Vous y mettez tellement du cœur que vos phalanges dégustent à l’impact. Mais ça en valait la peine. L’avatar d’Eschyle se tient la mâchoire, une expression stupéfaite sur le visage. Son corps a cependant le réflexe de glisser en arrière pour se prémunir d’un second assaut, se mouvant avec la célérité et la fluidité d’un expert en arts martiaux.</p>

<p>« Gentil chauve » a donc été choisi pour un peu plus que sa bonne bouille. Eschyle devait craindre que vous n’ayez encore un as dans votre manche.</p>

<p>Et d’une certaine façon, il aura eu raison. Vous ne sauriez dire à quel moment vous avez réussi à invoquer Onawa. Il serait probablement plus exact de dire que vous ne l’avez jamais vraiment révoquée depuis le début de l’affrontement, la conservant là, à la lisière de votre conscience, prête à revenir en cas de pépin.</p>

<p>Ce qui est encore le cas maintenant. Vous êtes dans état transitoire, où vous basculez constamment entre Misty et Onawa. Votre physique bouge moins vite que votre esprit, aussi conservez-vous majoritairement le physique de la première, à quelques bricoles près.</p>

<p>Et vous voudriez bien un miroir pour savoir quelle apparence vous avez en ce moment, car elle perturbe Eschyle au point de craqueler la sérénité de son visage actuel. Assez littéralement, puisqu’il perd le contrôle sur sa propre invocation.</p>

<div class="conversation">
<p>— Sœur Iphigénie, cessez je vous prie. Votre corps ne devrait pas changer comme cela. Vous êtes en train de vous faire du mal.</p>
</div>

<p>Vous vous relevez. Votre genou vous fait un mal de chien, mais vous ne converserez pas en position d’inférieure.</p>

<div class="conversation">
<p>— C’est bien humain à toi de t’intéresser à ma santé Eschyle. J’aurais préféré que ce soit un peu plus tôt. Avant que tes hommes ne me trimballent comme un sac de patates, avant le cachot, avant que tu ne cherches à me droguer pour m’empêcher de parler, avant que tu n’appelles des gros bras du passé pour me faire ma fête. Mais c’est gentil quand même.</p>
</div>

<p>Les mots de Misty jaillissent de vos lèvres avec la voix d’Onawa. Vous vous attendez à ce que Eschyle vous interrompe, violemment, à n’importe quel moment, mais il se contente de vous observer fixement comme une souris devant un cobra. Le public est fasciné de même.</p>

<div class="conversation">
<p>— Si je me rappelle bien les règles de ton jeu stupide, il me suffit de ne pas flancher pour gagner. Alors, tu dois être satisfait maintenant ? J’ai encaissé, encaissé, et encaissé, avant et pendant, et je suis encore là.</p>
<p>— Ce… Ce n’est pas simple.</p>
<p>— Si. Ça l’est.</p>
</div>

<p>Vous boitez jusqu’à l’escalier qui descend de la scène. Vous boitez à travers le couloir qui sort du théâtre. Vous boitez jusqu’à la route. Vous boitez sur le bitume en direction de la ville au loin.</p>

<hr/>

<p>Vous retomberez dans les griffes de l’Ordre moins de quatre heures plus tard. Avant cela, vous aurez eu le temps d’être pris en stop par un automobiliste suffisamment apitoyé par votre sanglante apparence, d’être déposée à l’hôpital et de recevoir les premiers soins. C’est quelque part vers le petit matin, alors que vous dormiez encore d’un sommeil médicamenteux que les agents de l’Ordre retrouveront votre trace et sécuriseront la zone pour ne pas que vous vous enfuyez. Avec une jambe aussi bien emmaillotée, et peut-être la nécessité d’une rééducation après déballage, ils n’avaient cependant pas besoin d’autant se presser.</p>

<p>Si vous disposez maintenant d’une garde rapprochée filtrant drastiquement les personnes essayant de communiquer avec vous, aucun effort n’est fait dans l’immédiat pour vous ramener dans un local appartenant à l’Ordre. Vous comprenez bien vite que la cause de cette soudaine compassion réside dans les fortes dissensions politiques que votre petit numéro a fait naître, engendrant à son tour une incapacité à décider ce qu’il fallait faire de vous. Si le courant majoritaire veut simplement vous enfermer dans un coin et ne plus entendre parler de toute cette histoire, un autre envisage de restaurer les bûchers rien que pour brûler l’abomination que vous êtes, un troisième suggère que vous repassiez l’exercice avant de prendre une quelconque décision, et vous en avez favorablement intrigué quelques-uns.</p>

<p>Tout ceci, vous l’apprenez principalement par l’intermédiaire d’un de vos gardes qui appartient à la dernière catégorie, et indirectement en observant les tensions entre vos différents surveillants, qui ne sont pas tous de la même obédience.</p>

<p>Bref, votre convalescence se passe tranquillement, même si vous ne savez pas de quoi l’avenir sera fait. Vous profitez également de ce temps pour discrètement vous entraîner à reproduire ce qui s’est passé sur scène. Le processus se révèle pénible et peu gratifiant, vous imposant de désapprendre quelques réflexes induits en vous depuis votre plus jeune âge.</p>

<p>Quand deux yeux écarlates se mettent à vous fixer depuis le miroir, vous savez que vous avez réussi. Et vous arrivez enfin à croire à ce que vos diserts gardiens vous ont raconté. À propos des yeux démoniaques que vous aviez braqués sur l’assistance médusée du jugement des esprits.</p>

<p>Vous ne comprenez toujours pas comment un tel miracle est possible. Certes, une légende urbaine prétend qu’Onawa avait des yeux de démon lorsqu’elle se mettait en colère, mais c’est une légende. Directement entretenue par Onawa elle-même d’ailleurs. Elle n’a jamais, et elle vous le confirme, vraiment eu un pareil regard. Personne d’humain n’a un pareil regard.</p>

<p>Vous avez plein d’hypothèses sur le sujet, toutes très compliquées. Pour faire simple, vous pensez que vous avez été en mesure d’incarner, en usant des mêmes mécaniques de matérialisation, la légende autour d’Onawa plutôt que sa réalité historique.</p>

<p>Cela ouvre tout un nouveau champ des possibles absolument fascinant.</p>

<p>Et maintenant que votre jambe a presque retrouvé toute sa vigueur, cela vous fournira également un atout de poids pour regagner votre liberté.</p>
      `;
    },
    "end": "red-eyes",
  },
  "summoning-failure": {
    "text": `
[Décrire échec de l’invocation et inconscience]
    `,
    "next": (goToSection) => {
    },
  },
  "third-ionna": {
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
    "next": (goToSection) => {
      return {
        "text": `Quoi qu’il vous réserve encore, vous êtes prête.`,
        "action": () => {
          goToSection("final-ionna");
        },
      };
    },
  },
};

export default third;
