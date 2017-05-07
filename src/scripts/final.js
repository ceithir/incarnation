const musashiboDescription = `
<p>La personne qui se tient devant vous est un colosse, votre tête lui arrivant à peine au niveau de la poitrine. Ses amples vêtements ne cachent guère son imposante musculature, ni d’ailleurs l’armure à la japonaise qu’il porte en-dessous. La bande de tissu blanc enroulé autour de sa tête est plus efficace dans cette opération de dissimulation, ne laissant paraître que ses yeux.</p>

<p>Ses deux mains enserrent une arme d’hast se terminant par une imposante lame courbe, avec laquelle il décrit déjà une large arc de cercle pour vous faucher. Vous êtes forcée de reculer d’un pas pour esquiver, ne pouvant juste pas espérer bloquer ou même simplement dévier une attaque de ce type. Entre la différence dans vos poids respectifs et l’effet levier, vous décolleriez du sol si l’envie vous prenez d’essayer.</p>
`;

const jailDescription = (flags) => {
  return `
<p>Vous listez les points positifs de votre nouvelle situation. Vous êtes en vie. Plus personne ne vous tape dessus.${(flags.lightlyWounded|flags.badlyWounded)? ` Vos blessures ont été soignées.` : ``} Vous avez un toit, et trois repas par jour.</p>

<p>Voilà, le compte doit y être. Pour le reste, la cellule où vous croupissez n’incite pas à l’optimisme.</p>

<p>Officiellement, vous avez de vous-même choisi de vous isoler du monde pour purger votre âme de la corruption qui s’y était installée.</p>

<p>Vous ignorez si cette fable pousse le vice jusqu’à expliquer que c’est vous et vous seule qui avez demandé à être enfermée et avait réclamé ce couple caméra/sprinkler qui permet de vous asperger d’eau glacée au moindre signe que vous pourriez peut-être, éventuellement, être en train d’appeler un esprit non déclaré. Vous avez d’ailleurs été réveillée de cette manière aujourd’hui, sans que vous sachiez si vos mouvements nocturnes aient été réellement suspicieux ou si votre surveillant s’ennuyait simplement.</p>

<p>Oui, vous ne savez plus grand chose. En l’absence de lumière du jour et de montre, votre définition même du temps s’est étiolée. Seuls les repas rythment vos journées. Et encore, vous suspectez qu’ils leur arrivent de vous faire jeûner, sans doute pour votre bien, pour faciliter votre détachement spirituel.</p>

<p>Le pire dans cette affaire reste encore l’ennui. La cellule ne contient que le strict nécessaire pour y vivre, sans la moindre distraction. Vous ne demandez pas Internet ou la télé, mais mêmes papiers et crayons vous ont été refusés. Vous n’avez rien d’autre à faire que de penser. Et quand vous n’en pouvez plus de penser, vos idées tournant vite en ronds en l’absence de stimulus extérieurs, vous vous épuisez par des exercices physiques et retournez vous coucher.</p>

<p>Bien sûr, vous savez ce à quoi vos tourmenteurs souhaitent que vous employiez votre temps libre. Ils vous ont remis un livre, plastifié. Vous l’avez déjà lu, plusieurs fois même, l’ennui étant plus fort que la rancœur. C’est un recueil d’informations sur une liste extrêmement restreinte de « bons esprits », tous anciens membres rigoristes de l’Ordre.</p>

<p>Bien sûr, vous pourriez essayer de communier avec eux. Vous ne doutez pas qu’ils vous permettraient de mieux comprendre pourquoi tout ceci est pour votre bien et celui de la communauté.</p>

<p>Ou vous pourriez continuer à examiner cette tache au plafond.</p>
  `;
}

const final = {
  "final-rebecca": {
    "text": (flags) => {
      return `
${musashiboDescription}

<p>Mais vous n’avez de toute façon pas signé pour un combat au corps à corps.</p>

<p>Vous tirez une première fois. Jambe. Encore ce problème de puissance de feu réduite. À croire que votre arme est chargée avec des munitions d’entraînement.</p>

<p>Le mastoc vous fonce dessus. Vous lui en mettez une deuxième en plein ventre. Un morceau de la plaque de métal qui protège ses organes à cet endroit vole mais il ne s’arrête pas. Deux tirs consécutifs dans la même zone finissent par le stopper, mais le sang se refuse toujours à couler, et il se reprend aussitôt.</p>

<p>Okay, cette blague commence sérieusement à vous les casser.</p>

<p>Sa lame passe un peu trop près de votre visage à votre goût. Vous reculez de quelques pas et vous retrouvez au bord de la scène. Il profite de l’occasion pour réduire la distance et entreprendre de vous fracasser son arme sur le coin du crâne.</p>

<p>Vous vous laissez simplement tomber sur le sol un peu plus bas. Une chute d’un mètre cinquante pour échapper à un coup de boutoir, ce n’est pas cher payé, et tant mieux si le public ne peut plus vous voir. Vous vous attendriez presque à ce qu’il reste là-haut, dépité de votre manque de fair-play, mais il bondit, se révélant plus agile que vous ne l’auriez cru, et atterrit juste devant vous pour vous empêcher de profiter de l’occasion pour filer.</p>

<p>Ce qui faisait effectivement partie du plan il est vrai.</p>

<p>Le plan de secours étant de profiter du fait que ce grand balourd est juste à côté de vous pour lui en remettre une.</p>

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
    "end": "blood-pact",
  },
  "rebecca-escape": {
    "text": `
<p>La fenêtre d’opportunité est ridiculement courte, mais vous avez l'avantage de la surprise pour vous.</p>

<p>Vous vous retournez vers la foule et tirez dedans. Ils sont beaucoup trop loin pour que cela blesse quiconque, votre projectile s’effaçant bien avant de rencontrer quoi que ce soit de solide. Toutefois, leurs petits cerveaux ne réagissent pas de façon aussi rationnelle. Le bruit de la détonation, le canon pointé dans leur direction, le souvenir tout frais de l'humiliante défaite de leur champion, votre air revêche, cela suffit à provoquer une vague de panique.</p>

<p>Ça se met à crier, à courir dans tous les sens, à se rentrer dedans. Un magnifique chaos détournant l’attention de vos propres actions. Vous piquez aussitôt un sprint vers l’arrière de la scène, vous laissez tomber. Vous êtes à deux pas des coulisses, et de gros balourds vous foncent déjà dessus, mais vous repérez ce que vous cherchiez, que Misty avait vu lorsqu’elle était passée par là mais n’avait pas identifié comme important : un gros amas de câbles et de boîtiers. Un nœud vital de la connectique et de l’alimentation de l’éclairage.</p>

<p>Vous mettez une balle dans le genou du garde le plus proche alors qu’il sort un taser. Vous êtes presque à bout portant, et il déguste sec. Cela calme aussitôt les ardeurs de ses potes. Vous en profitez pour mettre la zone dans le matériel électrique qui vous entoure. Vous n'y connaissez rien, mais balancez d'un coup de pied bien ciblé un truc qui a l'air important sur un autre truc qui a l'air important, et, magie, une partie des lumières s'éteignent dans un grésillement.</p>

<p>Vous y voyez encore trop bien à votre goût et un nouveau larron s'en mêle avant que vous ne puissiez pousser plus loin votre bricolage, s'interposant d'un bon entre vous et vos victimes de cuivre et de plastique.</p>

${musashiboDescription}

<p>Vous n'avez de toute manière aucune envie de l'affronter. Vous vous élancez sur un gradin maintenant déserté et enténébré, passant entre deux gorilles que la présence d'un encore plus gros bonhomme a un peu réveillés. Le nombre jouerait en leur faveur s'ils étaient entraînés en ce sens, mais en l'occurrence ils se gênent mutuellement, vous permettant de grappiller de précieuses secondes d'avance, de sortir de leur champ de vision en plongeant derrière une rangée de sièges.</p>

<p>Leur erreur suivante est de s'aventurer dans l'obscurité à votre poursuite, immédiatement, sans méthode, les nombreux montant au fur et à mesure qu'ils arrivent sans s'attendre, s'éparpillant pour couvrir une plus grande surface. Seul l'avatar d'Eschyle reste en bas, dans la lumière, fouillant du regard la zone où vous vous êtes dissimulée.</p>

<p>Vous n'avez qu'une vague idée de ce qu'il peut bien capter de sa position. Des mouvements grisâtres indistincts entrecoupés de courts flashs lumineux lorsque vos armes font feu. Les cris, les pas précipités, les détonations, les chocs durs, étouffés, métalliques, chair contre chair. Les silhouettes qui s'effondrent les unes après les autres. L'amertume de la défaite.</p>

<p>Lorsque le dernier garde se montre un peu plus malin que les autres et décampe avant de se prendre un coup ou une balle dans son angle mort, votre vieil ennemi hésite sans doute à s'avancer lui-même. À s'enfoncer dans le noir, sur un terrain inégal et inhabituel, pour jouer au chat et à la souris avec vous.</p>

<p>Vous ne lui laissez cependant pas le temps de se décider à pénétrer dans votre monde de ténèbres, d'embuscades, et d'attaques en traître. Pendant qu'il réfléchit, vous vous glissez jusqu'au rebord supérieur des gradins, et entreprenez de descendre le long de leur face extérieure.</p>

<hr/>

<p>Retour à la case départ.</p>

<p>Voilà un peu plus d'un an, vous quittiez l'Ordre subrepticement, avec bien peu d'affaires et d'argent. S'en était suivie une série de galères, jusqu'à ce que vous arriviez à tirer profit de vos facultés spirituelles pour péniblement stabiliser votre situation.</p>

<p>Et voilà que vous devez tout recommencer à zéro. En pire, puisque vous n'avez aucun bagage cette fois-ci, et qu'ils n'attendront pas six mois et un rapport alarmant sur vos pratiques avant d'ouvrir la chasse.</p>

<p>Toutefois, vous n'arrivez pas à vous défaire d'un absurde optimiste. Au cours de votre première année de liberté, vous avez beaucoup appris, sur vous-même et sur le monde, assez pour infliger un surprenant et humiliant revers à vos anciens tourmenteurs. Vous êtes dorénavant capable de faire des choses qu'eux ne sont même capables de concevoir.</p>

<p>Et ce n'est que le commencement. Maintenant que le vent de la liberté souffle de nouveau dans votre dos, vous comptez bien aller plus loin. Beaucoup plus loin.</p>
    `,
    "end": "escape-artist",
  },
  "surrender": {
    "text": (flags) => {
      return `
<p>Suffit. Vous avez compris. Les dés sont aussi pipés qu’il fallait s’y attendre, vous n’allez pas continuer à prendre des coups juste pour la beauté du geste.</p>

<p>Toujours incapable de parler correctement${(flags.onawaVersusMakabi|flags.onawaVersusBernardo)? ` sans aide extérieure`: ``}, vous vous agenouillez et gargouillez faiblement quelques mots en essayant d’adopter une expression de repentance appropriée. Cela devrait vaguement faire illusion pour un public trop loin pour vous entendre.</p>

<p>Eschyle en tout cas semble satisfait. Il se lance dans une interminable tirade ne faisant que paraphraser son discours d’accueil tandis que vous restez prostrée sur scène en attendant le moment où vous pourrez enfin retourner en coulisses.</p>

<hr/>

${jailDescription(flags)}
      `;
  },
    "end": "jail",
  }
  "red-eyed-onawa": {
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
    "text": (flags) => {
      return `
<p>Vous vous concentrez. Tentez de dompter votre respiration saccadée. D'ignorer la douleur. De vous détacher de la présente situation pour ne faire plus qu'un avec l'esprit appelé.</p>

<p>Une bien noble intention. Sauf que vous n'êtes pas une héroïne fictionnelle surentraînée capable de se relever et de repartir comme si de rien n'était après un pareil passage à tabac. Chair et sang limitent vos possibilités.</p>

<p>Vous donneriez beaucoup pour avoir la force d'accomplir un ultime coup d'éclat.</p>

<p>Vous vous contentez de vous relever tant bien que mal et de cracher un gros glaviot coloré dans la direction de ce sombre type.</p>

<p>Puis vous vous écroulez à nouveau, sombrant dans un état de conscience altérée un sourire narquois aux lèvres.</p>

<hr/>

${jailDescription(flags)}
      `;
    },
    "end": "jail",
  },
};

export default final;
