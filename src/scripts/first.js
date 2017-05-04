import {ionnaFirstSummon, rebeccaFirstSummon, bulletExplanation, onawaFirstSummon} from "./summons.js";

const summoningDescription = (summonName) => {
  return `
<p>Malgré votre expérience dans le domaine, vous ne sauriez réellement expliquer le fonctionnement d’une invocation. Dès très jeune, l’Ordre vous a fait faire des exercices dont l’intérêt exact ne vous a jamais été expliqué, et, un jour, un professeur vous a dit que vous étiez prête, et effectivement vous l’étiez. C’est un peu comme le vélo ou la natation : un processus peu pédagogique, l’idée d’un coup à prendre, que votre corps sait, que vous n’avez pas besoin de théorie mais seulement de pratique.</p>

<p>Vous n’êtes d’ailleurs pas sûre que la plupart de vos instructeurs connaissaient eux-même la théorie. Sans doute ne faisaient-ils que répéter ce que leurs parents leur avaient appris.</p>

<p>À votre niveau, la principale difficulté reste d’établir une connexion avec l’esprit. Dans le cas de personnalités que vous avez déjà hébergées à plusieurs reprises, c’est toutefois chose aisée.</p>

<p>Vous vous remémorez ce que vous aviez ressenti lors de vos précédents contacts avec ${summonName}. L’état d’esprit est primordial pour une incarnation réussie, plus encore que les souvenirs d’une autre époque, d’une autre vie.</p>
  `;
};

const makabiDescription = `
<p>En réaction à votre propre ancrage dans le moment, l’apparence de votre adversaire se précise. Une armure antique avec un casque à la mode grecque, une cotte à larges mailles, un bouclier allongé dans une main et une lance dans l’autre. La barbe toujours, mais courte et bien taillé. Une peau plus sombre, un visage plus beau, un corps plus grand.</p>

<p>D’un coup sec, il cogne le sol de la hampe de son arme, provoquant une vague de silence, et déclare solennellement, d’une voix forte, habituée à commander et à prêcher :</p>

<div class="conversation">
<p>— Je suis Makabi, défenseur de la juste foi. Nos croyances, nos usages, nos coutumes, ont été dévoyés par les actes impies d’une barbare qui a autrefois été des nôtres. Encore une fois, il me revient l’honneur de purifier le temple.</p>
</div>

<p>Il bascule alors sa lance pour en faire pointer le fer droit vers vous.</p>
`;

const first = {
  "first-ionna": {
    "text": `
${summoningDescription("Ionna")}

${ionnaFirstSummon}

${makabiDescription}

<p>Vous abaissez la visière de votre casque. Faites jouer vos épaules pour vous assurer que vos différentes couches protectrices sont bien agencées. Elles accompagnent votre mouvement sans heurt, se soutenant les unes les autres. La sensation est familière. Depuis que votre quête a commencé, il est devenu bien rare qu’un jour complet ne s’écoule sans que vous ne soyez contrainte de vous harnacher ainsi.</p>

<div class="conversation">
<p>— J’ai fait ce que j’ai fait car cela était juste, et jamais je ne le renierai.</p>
<p>— Il est des saints hommes qui auraient pu te montrer tes erreurs par la seule force leur verbe. Je n’en suis malheureusement pas un, et devrais me contenter de ma colère.</p>
</div>

<p>La première attaque de Makabi est avant tout un coup de semonce, destiné à vous effrayer et à jauger votre niveau. Sa lance vole en une trajectoire prévisible, vous l’esquivez sans mal, et dégainez en réponse.</p>

<p> Vous commencez alors à vous tourner autour.</p>

<p>Il a l’avantage de la taille et de l’allonge, mais son équipement a un bon millénaire de retard sur le vôtre, devant peser tout aussi lourd pour protéger moins bien une zone nettement plus réduite du corps. Autant de failles que vous vous ferez un plaisir d’exploiter.</p>

<p>Vous tentez un assaut. Il pare de son bouclier. Riposte. La lance glisse sans dommage sur le flanc de votre jambière. Une estocade haute. Déviée par son bouclier à nouveau. Un contre en pleine épaule. Votre cuirasse arrête la pointe, l’impact vous secoue, il reprend de la distance.</p>

<p>Nouvel échange. Résultat similaire. Vous n’arrivez pas à le toucher, il vous contusionne quelque peu d’un revers de son arme contre votre mollet.</p>

<p>Nouvelle passe d’armes, nouvel échec. Il vous touche encore à la même épaule, et vous commencez à sentir une douleur sourde quand vous bougez le bras.</p>

<p>Il est meilleur que vous. C’est un combattant professionnel, il ne prend pas de risque, garde ses distances, vous épuise et vous blesse peu à peu.</p>

<p>Votre esprit se coupe en deux. Ionna est persuadée qu’elle peut l’emporter, comme elle est toujours persuadée de tout. Misty se rend bien compte que la situation est en sa défaveur.</p>

<p>Et devant ce flagrant conflit, l’incarnation cesse. Vous vous retrouvez avec juste une épaisseur de tissu synthétique et vos petits bras pour votre défendre contre un soldat en armes.</p>
    `,
    "next": (goToSection) => {
      return {
        "text": `Vous vous préparez au pire.`,
        "action": () => {
          goToSection("second-form");
        }
      };
    },
  },
  "first-rebecca": {
    "text": `
${summoningDescription("Rebecca")}

${rebeccaFirstSummon}

${makabiDescription}

<p>Sérieux, ce type vous menace avec une lance ? Des siècles et des siècles après l’invention de la poudre à canon ?</p>

<p>Il y a le trip nostalgique, et il y a la stupidité dans toute sa splendeur.</p>

<p>Vous faites jaillir le Beretta de son étui et lui collez direct une bastos dans l’épaule, sans préavis. Ça l’arrête net, et sa bouche s’ouvre de façon comique sous l’effet de la surprise. Vous plissez vous-même les yeux d’étonnement car vous lui avez juste roussi le cuir là où il aurait dû y avoir une belle giclée de sang.</p>

${bulletExplanation}

<p>Cette pensée parasite est bien sûre signée Misty, et non Rebecca. La dichotomie mentale qu’elle implique vous fige pendant un instant, qu’Eschyle met à profit pour entamer une nouvelle invocation, à la recherche d’une forme plus apte à combattre votre modernité toute relative.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Vous l’attendez de pied ferme.`,
          "action": () => {
            goToSection("second-rebecca", {"badlyWounded": true});
          }
        },
        {
          "text": `Vous en profitez pour décamper.`,
          "action": () => {
            goToSection("rebecca-escape");
          }
        },
        {
          "text": `Vous invoquez vous aussi un nouvel esprit.`,
          "action": () => {
            goToSection("second-change-rebecca");
          }
        },
      ];
    },
  },
  "first-onawa": {
    "text": `
${summoningDescription("Rebecca")}

${onawaFirstSummon}

${makabiDescription}

<p>Vous posez les yeux sur sa phallique menace, et basculez la tête dans un geste de dédain complet.</p>

<div class="conversation">
<p>— Ah, monsieur Makabi. Je suppose que vous êtes un agent du procureur. Je comprends que vous soyez nerveux devant l’excellence de ma défense, mais tout de même, ce n’est parce que j’ai une hortensia derrière l’oreille que vous pouvez m’interrompre.</p>
</div>

<p>Votre répartie a pour conséquence qu’il tente de vous embrocher de sa lance.</p>

<p>Grossier personnage.</p>

<p>Vous esquivez en vous dérobant sur le côté, sans toutefois réellement creuser la distance vous séparant de votre adversaire. Volontairement. Vous ne pouvez vous permettre de reculer. Vous avez un public à convaincre. Flancher sur le plan physique donnerait l’illusion que vous êtes également faiblarde sur le plan des idées.</p>

<p>Raisonnement stupide, mais humain. Plus vous impressionnerez la salle par vos actes, plus ils seront disposés à entendre vos paroles.</p>

<p>Ce qui implique de continuer à discourir et à flirter avec le danger au même rythme.</p>

<div class="conversation">
<p>— Je vois que vous restez coi devant ma bonne foi. Initiative que je salue, car votre camp n’a que trop parlé, et le mien pas assez. Beau procès que celui où un seul parti a le droit de s’exprimer.</p>
<p>« Alors me voilà. Je suis la quintessence de ce que vous craignez. L’esprit désaxé dans toute sa splendeur. Ai-je l’air si terrible ? En dehors de mes goûts vestimentaires…</p>
</div>

<p>La pique vous frôle de beaucoup trop près à votre goût, créant une pause inopinée dans votre discours.</p>

<div class="conversation">
<p>— … douteux j’entends. Pour sûr, je ne ressemble pas aux esprits que vous avez l’habitude de voir. Il me manque la barbe déjà. Mais n’est-ce pas là tout le nœud du problème justement ? En vous limitant à un seul schéma type, vous évitez quelques mauvaises surprises, mais vous vous privez aussi des bonnes. Le monde…</p>
</div>

<p>Cette fois, il ne vous manque pas. Un bon gros coup sous l’aisselle gauche, bien violent.</p>

<p>Vous vous jetez sur lui. Coup de pied sur son bouclier. Vous agrippez le bouclier à deux mains. Le rejetez sur le côté. Nouveau coup de pied. Votre semelle compensée cogne en plein sternum. Le guerrier encaisse, reculant un peu sous l’impact. Vous repousse en frappant avec le manche de son arme. Le bois heurte l’avant-bras dressé pour protéger le reste de votre corps.</p>

<div class="conversation">
<p>— C’est vraiment trop te demander que de me laisser parler ?</p>
</div>

<p>La phrase claque, sèche et déterminée. Malheureusement, Onawa a beau faire la fière, façon « quand on me cherche on me trouve », les coups qu’elle a portés ont plus fait trembler votre propre corps que celui de son adversaire, et cette petite saute d’humeur sert surtout à cacher que le gugusse ne vous a vraiment pas raté. Vous avez horriblement mal au flanc, et cela affecte votre concentration.</p>

<p>Vous vous attendez à ce qu’Eschyle remette le couvert aussitôt. Au lieu de cela, après vous avoir bien observé sous sa forme de Makabi, il rompt soudainement l’invocation.</p>
    `,
    "next": (goToSection) => {
      return {
        "text": `À quel jeu joue-t-il ?`,
        "action": () => {
          goToSection("second-form-onawa");
        }
      };
    },
  },
};

export default first;
