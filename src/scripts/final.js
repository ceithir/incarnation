const musashiboDescription = `
<p>La personne qui se tient devant vous est un colosse, votre tête lui arrivant à peine au niveau de la poitrine. Ses amples vêtements ne cachent guère son imposante musculature, ni d’ailleurs l’armure à la japonaise qu’il porte en-dessous. La bande de tissu blanc enroulé autour de sa tête est plus efficace dans cette opération de dissimulation, ne laissant paraître que ses yeux.</p>

<p>Ses deux mains enserrent une arme d’hast se terminant par une imposante lame courbe, avec laquelle il décrit déjà une large arc de cercle pour vous faucher. Vous êtes forcée de reculer d’un pas pour esquiver, ne pouvant juste pas espérer bloquer ou même simplement dévier une attaque de ce type. Entre la différence dans vos poids respectifs et l’effet levier, vous décolleriez du sol si l’envie vous prenez d’essayer.</p>
`;

const final = {
  "final-rebecca": {
    "text": (flags) => {
      let lowerGround = `
<p>Sa lame passe un peu trop près de votre visage à votre goût. Vous reculez de quelques pas et vous retrouvez au bord de la scène. Il profite de l’occasion pour réduire la distance et entreprendre de vous fracasser son arme sur le coin du crâne.</p>

<p>Vous vous laissez simplement tomber sur le sol un peu plus bas. Une chute d’un mètre cinquante pour échapper à un coup de boutoir, ce n’est pas cher payé, et tant mieux si le public ne peut plus vous voir. Vous vous attendriez presque à ce qu’il reste là-haut, dépité de votre manque de fair-play, mais il bondit, se révélant plus agile que vous ne l’auriez cru, et atterrit juste devant vous pour vous empêcher de profiter de l’occasion pour filer.</p>

<p>Ce qui faisait effectivement partie du plan il est vrai.</p>

<p>Le plan de secours étant de profiter du fait que ce grand balourd est juste à côté de vous pour lui en remettre une.</p>
      `;

      if (flags.triedToEscapeAsRebecca) {
        lowerGround = `
<p>Sa lame passe un peu trop près de votre visage à votre goût. Vous reculez de quelques pas et manquez de trébucher sur les câbles.</p>

<p>Bon, la plaisanterie a assez duré. Votre objectif n’est pas de sortir triomphante d’un combat loyal ou quelque idiotie de ce genre, mais de vous tirez d’ici.</p>

<p>Vous rompez le duel en sautant au-dessus un enrouleur, courrez vers une des sorties, en ouvrant la voie de quelques tirs bien placés.</p>

<p>Le balourd réagit aussitôt. Bien plus rapide que vous ne l’auriez cru, il se jette entre vous et le couloir que vous aviez choisi. L’espace d’un instant, vous manquez de lui rentrer dedans, mur vivant bloquant tout l’espace à l’aide de son corps et de son arme qu’il tient en diagonale.</p>

<p>L’instant d’après, vous profitez d’être beaucoup trop près pour lui en remettre une.</p>
        `;
      }

      return `
${musashiboDescription}

<p>Mais vous n’avez de toute façon pas signé pour un combat au corps à corps.</p>

<p>Vous tirez une première fois. Jambe. Encore ce problème de puissance de feu réduite. À croire que votre arme est chargée avec des munitions d’entraînement.</p>

<p>Le mastoc vous fonce dessus. Vous lui en mettez une deuxième en plein ventre. Un morceau de la plaque de métal qui protège ses organes à cet endroit vole mais il ne s’arrête pas. Deux tirs consécutifs dans la même zone finissent par le stopper, mais le sang se refuse toujours à couler, et il se reprend aussitôt.</p>

<p>Okay, cette blague commence sérieusement à vous les casser.</p>

${lowerGround}

<p>La dernière.</p>

<p>Vous pointez votre arme droit vers sa tête et tirez.</p>

<p>L’extrémité du canon est à moins de trente centimètres du visage de votre ennemi au moment où vous pressez la détente. C’est déjà assez pour que le projectile perde la moitié de sa matière avant de toucher. La moitié restante est largement suffisante pour faire le travail.</p>

<p>Cette fois, vous voyez enfin le sang gicler.</p>

<hr/>

<p>Vous soupesez l’arme dans votre main. Bien plus lourde que vous ne l’auriez imaginée, surtout chargée.</p>

<p>C’est une vraie cette fois, pas une simple projection spirituelle d’une arme ayant jadis existé. Les balles qu’elles tirent ont une portée et une destructivité infiniment supérieure à la médiocre copie avec laquelle vous deviez vous débrouiller jusque là. Rebecca vient de la tester et de l’approuver.</p>

<p>Vous passez énormément de temps habitée par Rebecca dernièrement. Vous avez constamment besoin de son aide pour échapper aux ennuis ou vous préparer à affronter les suivants.</p>

<p>Vous extraire des griffes de l’Ordre n’a pas été très difficile. Ils n’avaient rien de prévu contre une arme à feu moderne. Il n’a même pas dû leur venir à l’idée qu’il était possible d’en invoquer une, ni que vous n’hésiteriez pas à l’utiliser contre ceux qui vous avaient supposément élevée.</p>

<p>C’est après que la situation s’est compliquée. Non seulement vous avez été officiellement déclarée ennemie public numméro 1 pour l’Ordre, mais les dégâts que vous avez infligé là-bas vous ont également fait remarquer des autorités séculières de ce pays. Si le fait que vous aviez été enlevée, enfermée et contrainte à combattre pour votre liberté ne les a apparemment pas marquées, le meurtre du grand prêtre de l’Ordre les a pas mal secouées.</p>

<p>Et vous aussi il faut bien dire. Vous n’arrivez pas encore à bien réaliser. Cela s’est passé dans le feu du moment, sous l’influence de Rebecca, et Eschyle n’est pas vraiment quelqu’un que vous connaissiez en tant que personne. À vos yeux, c’était plutôt une sorte d’incarnation de l’Ordre dans toute sa rigidité.</p>

<p>En fait, vous essayez d’éviter de trop penser à ce qui s’est passé alors, et ce que cela implique pour vous. C’est peut-être aussi pour cela que vous laissez beaucoup les rênes à Rebecca en ce moment.</p>

<p>Elle, ce crime, elle s’en fiche comme de sa dernière couleur de cheveux.</p>
      `;
    },
    "next": () => {

    }
  },
  "rebecca-escape": {
    "text": `
<p>La fenêtre d’opportunité est ridiculement courte, mais vous avez la surprise pour vous.</p>

<p>Vous vous retournez vers la foule et tirez dedans. Ils sont beaucoup trop loin pour que cela blesse quiconque, votre projectile s’effaçant bien avant de rencontrer quoi que ce soit de solide, mais l’acte lui-même et son bruit provoquent la panique dans l’assemblée jadis disciplinée, déjà électrisée par la manière dont vous avez éclaté leur champion.</p>

<p>Ça se met à courir dans tous les sens, à se rentrer dedans, bref un magnifique chaos détournant l’attention de vos propres actions. Vous piquez aussitôt un sprint vers l’arrière de la scène, et vous laissez tomber. Vous êtes à deux pas des coulisses, et de gros balourds vous foncent déjà dessus, mais vous repérez ce que vous cherchiez, que Misty avait vu lorsqu’elle était passée par là mais n’avait pas identifié comme important : un gros amas de câbles et de boîtiers, tout un pan de la connectique et de l’alimentation de l’éclairage.</p>

<p>Vous mettez une balle dans le genou du garde le plus proche alors qu’il sort un taser, quasiment à bout portant, ce qui a enfin l’effet escompté et calme d’un coup tous les autres, et videz la moitié du chargeur dans l’équipement électrique au pif en espérant toucher quelque chose d’important. Ça en revanche, ça n’a à peu près aucun effet. C’était sans doute beaucoup demander à la déesse de la chance que de s’attendre à toucher le centre névralgique de tout ce bazar avec pareille méthode. Vous regrettez de rien avoir d’explosif sous la main, ça vous aurait bien simplifié la vie.</p>

<p>Alors que vous adaptez votre plan à l’évolution de la situation, un anachronisme vivant atterrit devant vous.</p>
    `,
    "next": (goToSection) => {
      return {
        "text": `Votre grand ami Eschyle ne sait pas quand il faut abandonner.`,
        "action": () => {
          goToSection("final-rebecca");
        },
      }
    },
  },
  "surrender": {
    "text": (flags) => {
      return `
<p>Suffit. Vous avez compris. Les dés sont aussi pipés qu'il fallait s'y attendre, vous n'allez pas continuer à prendre des coups juste pour la beauté du geste.</p>

<p>Toujours incapable de parler correctement${(flags.onawaVersusMakabi|flags.onawaVersusBernardo)? ` sans aide extérieure`: ''}, vous vous agenouillez et gargouillez faiblement quelques mots en essayant d'adopter une expression de repentance appropriée. Cela devrait vaguement faire illusion pour un public trop loin pour vous entendre.</p>

<p>Eschyle en tout cas semble satisfait. Il se lance dans une interminable tirade ne faisant que paraphraser son discours d'accueil tandis que vous restez prostrée sur scène en attendant le moment où vous pourrez enfin retourner en coulisses.</p>

<hr/>

<p>Vous listez les points positifs de votre nouvelle situation. Vous êtes en vie. Plus personne ne vous tape dessus.${(flags.lightlyWounded|flags.badlyWounded)? ` Vos blessures ont été soignées.` : ``} Vous avez un toit, et trois repas par jour.</p>

<p>Voilà, le compte doit y être. Pour le reste, la cellule où vous croupissez n'incite pas à l'optimisme.</p>

<p>Officiellement, vous avez de vous-même choisi de vous isoler du monde pour purger votre âme de la corruption qui s'y était installée.</p>

<p>Vous ignorez si cette fable pousse le vice jusqu'à expliquer que c'est vous et vous seule qui avez demandé à être enfermée et avait réclamé ce couple caméra/sprinkler qui permet de vous asperger d'eau glacée au moindre signe que vous pourriez peut-être, éventuellement, être en train d'appeler un esprit non déclaré. Vous avez d'ailleurs été réveillée de cette manière aujourd'hui, sans que vous sachiez si vos mouvements nocturnes aient été réellement suspicieux ou si votre surveillant s'ennuyait simplement.</p>

<p>Oui, vous ne savez plus grand chose. En l'absence de lumière du jour et de montre, votre définition même du temps s'est étiolée. Seuls les repas rythment vos journées. Et encore, vous suspectez qu'ils leur arrivent de vous faire jeûner, sans doute pour votre bien, pour faciliter votre détachement spirituel.</p>

<p>Le pire dans cette affaire reste encore l'ennui. La cellule ne contient que le strict nécessaire pour y vivre, sans la moindre distraction. Vous ne demandez pas Internet ou la télé, mais mêmes papiers et crayons vous ont été refusés. Vous n'avez rien d'autre à faire que de penser. Et quand vous n'en pouvez plus de penser, vos idées tournant vite en ronds en l'absence de stimulus extérieurs, vous vous épuisez par des exercices physiques et retournez vous coucher.</p>

<p>Bien sûr, vous savez ce à quoi vos tourmenteurs souhaitent que vous employiez votre temps libre. Ils vous ont remis un livre, plastifié. Vous l'avez déjà lu, plusieurs fois même, l'ennui étant plus fort que la rancœur. C'est un recueil d'informations sur une liste extrêmement restreinte de « bons esprits », tous anciens membres rigoristes de l'Ordre.</p>

<p>Bien sûr, vous pourriez essayer de communier avec eux. Vous ne doutez pas qu'ils vous permettraient de mieux comprendre pourquoi tout ceci est pour votre bien et celui de la communauté.</p>

<p>Ou vous pourriez continuer à examiner cette tache au plafond.</p>
      `;
  },
    "end": "jail",
  }
};

export default final;
