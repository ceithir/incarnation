import {rebeccaFirstSummon, bulletExplanation} from "./summons.js";

const musashiboDescription = `
<p>La personne qui se tient maintenant devant vous est un colosse, votre tête lui arrivant à peine au niveau de la poitrine. Ses amples vêtements ne cachent guère son imposante musculature, ni d’ailleurs l’armure à la japonaise qu’il porte en-dessous. La bande de tissu blanc enroulé autour de sa tête réussit en revanche à dissimuler son visage, ne laissant paraître que ses yeux.</p>

<p>Ses deux mains enserrent une arme d’hast se terminant par une imposante lame courbe, avec laquelle il décrit déjà une large arc de cercle pour vous faucher.</p>
`;

const jailDescription = (flags) => {
  return `
<p>Vous listez les points positifs de votre nouvelle situation. Vous êtes en vie. Plus personne ne vous tape dessus.${(flags.lightlyWounded|flags.badlyWounded)? ` Vos blessures ont été soignées.` : ``} Vous avez le gîte et le couvert gracieusement offerts.</p>

<p>Voilà, le compte doit y être. Pour le reste, la cellule où vous croupissez n’incite pas à l’optimisme.</p>

<p>Officiellement, vous avez de vous-même choisi de vous isoler du monde pour purger votre âme de la corruption qui s’y était installée.</p>

<p>Vous ignorez si cette fable pousse le vice jusqu’à expliquer que c’est vous et vous seule qui avez demandé à être enfermée et avait réclamé ce couple caméra/sprinkler qui permet de vous asperger d’eau glacée au moindre signe que vous pourriez peut-être, éventuellement, potentiellement, être en train d’appeler un esprit non déclaré. Vous avez d’ailleurs été réveillée de cette manière aujourd’hui même, sans que vous sachiez si vos mouvements nocturnes aient été réellement suspicieux ou si votre surveillant s’ennuyait simplement.</p>

<p>C’est loin d’être la seule chose que vous ignorez. En l’absence de lumière du jour et de montre, votre définition même du temps s’est étiolée. Seuls les repas rythment vos journées. Et encore, vous suspectez qu’ils leur arrivent de vous faire jeûner, sans doute pour faciliter votre détachement spirituel.</p>

<p>Le pire dans cette affaire reste encore l’ennui. La cellule ne contient que le strict nécessaire pour y vivre, sans la moindre distraction. Vous ne demandez pas Internet ou la télé, mais mêmes papiers et crayons vous ont été refusés. Vous n’avez rien d’autre à faire que de penser. Et quand vous n’en pouvez plus de penser, vos idées tournant vite en ronds en l’absence de stimulus extérieurs, vous vous épuisez par des exercices physiques et retournez vous coucher.</p>

<p>Bien sûr, vous savez ce à quoi vos tourmenteurs souhaiteraient que vous employiez votre temps libre. Ils vous ont remis un livre, plastifié, plutôt joli. Vous l’avez déjà lu, plusieurs fois même, l’ennui étant plus fort que la rancœur. C’est un recueil d’informations sur une liste extrêmement restreinte de « bons esprits », tous anciens membres rigoristes de l’Ordre.</p>

<p>Bien sûr, vous pourriez essayer de communier avec eux. Vous ne doutez pas qu’ils vous permettraient de mieux comprendre pourquoi tout ceci est pour votre bien et celui de la communauté.</p>

<p>Ou vous pourriez continuer à examiner cette tache au plafond.</p>
  `;
}

const final = {
  "final-ionna": {
    "text": (flags) => {
        return `
<p>Vous n’avez jamais affronté de dragon, mais Dieu a apparemment décidé qu’il était temps de vous opposer à Goliath.</p>

${musashiboDescription}

<p>Vous êtes forcée de reculer d’un pas pour esquiver, ne pouvant juste pas espérer bloquer ou même simplement dévier une attaque de ce type. Entre la différence dans vos poids respectifs et l’effet levier, vous décolleriez du sol si l’envie vous prenez d’essayer.</p>

<p>Cette première attaque est aussitôt suivie d’une autre, visant vos pieds, pus d’une troisième à destination de votre tête qui se change au dernier moment en rapide estocade en plein ventre. Celle-là, vous ne réussissez pas à l’éviter totalement, et si votre armure absorbe le gros des dommages, l’impact vous coupe le souffle et vous oblige de nouveau à reculer.</p>

<p>Vous avez bien du mal à vous retenir de jurer. En plus d’être massif et costaud, il est rapide et sait se servir de son arme. Que ce soit en terme de technique ou de physique, vous êtes largement surclassée.</p>

<p>Vous disposez toutefois d’un indéniable avantage moral, soutenant une juste cause contrairement à ce guerrier égarré.</p>

<p>Vous saisissez votre arme à deux mains, la tenant devant vous comme en prière. Vous faites le vide dans votre esprit, laissant votre foi vous habiter, le Seigneur guider votre bras.</p>

<p>Et vous vous jetez en avant.</p>

<p>Le premier coup vous cueille à l’épaule. Vous ressentez la morsure de la douleur, mais l’armure tient. Vous progressez d’un pas. Le second touche à la hanche, assez fort pour abîmer quelque chose là-dedans. Votre pas suivant est vacillant mais vous rapproche assez de votre adversaire pour que vous puissiez frapper. Vous abattez votre arme. Cognez contre la hampe de la sienne. Êtes repoussée de force. Titubez. Tombez. Le géant cogne votre poignet. Vous lâchez votre épée. Un coup à la tête. Votre conscience clignote.</p>

<p>Dieu vous a abandonné. Comme il vous avait abandonné à Margny, lorsque vous vous étiez révélée incapable de vous débarrasser des quelques soudards envoyés vous capturer. Auriez-vous abusé de Sa bienveillance ? S’agit-il d’une leçon, Vous rappelle-t-il que vous ne devez pas dépendre de Lui ? Auriez-vous pêché par orgueil et êtes-vous punie pour cela ?</p>

<p>Les doutes d’Ionna rompent l’invocation plus efficacemment que n’importe quelle volonté de votre part en ce sens. Vous redevenez Misty, récupérez le plein usage de vos sens et avec eux la pleine mesure des traumatismes qu’endure votre corps.</p>

<p>Autrement dit, vous douillez grave. Vous avez mal partout, des trucs cassés, ou fêlés, ou on s’en fiche du mot exact, ça fait mal tout pareil, à vous en faire perdre votre vocabulaire.</p>

<p>Vous essayez vaguement, par réflexe, de bouger, mais une douleur fulgurante dans vos membres vous convainc de cesser tout mouvement.</p>

<p>À peine capable de rouler les yeux, vous observez l’absurde masse de la dernière forme qu’a choisie Eschyle se déplacer au-dessus de vous et pointer l’envers de son arme vers votre visage.</p>

<p>Il vous frappe un grand coup en plein nez, et, constatant que vous avez à peine la force de gromeler quelques grossièretés en réponse, reprend son apparence ordinaire pour s’adresser à son public.</p>

<p>Vous n’avez plus la patience ni l’énergie ni l’envie d’écouter son discours. Vous vous contentez de dériver dans un état de semi-conscience que quelqu’un se donne la peine de vous ramasser, de vous brinquebaler jusqu’à un lit et de vous faire boire un médoc à dormir.</p>

<hr/>

${jailDescription(flags)}
        `;
    },
    "end": "jail",
  },
  "final-rebecca": {
    "text": (flags) => {
      const neverSummonedRebeccaBefore = !flags.rebeccaVersusMakabi && !flags.rebeccaVersusBernardo;

      let summoning = ``;

      if (neverSummonedRebeccaBefore) {
        summoning = `
<p>Vous faites le vide dans votre esprit, puis le plongez dans l’état nécessaire à invoquer Rebecca.</p>

${rebeccaFirstSummon}
        `;
      }

      return `
${summoning}

${musashiboDescription}

<p>Vous esquivez en reculant de quelques pas. Vous n’avez de toute façon pas signé pour un combat au corps à corps.</p>

<p>Vous tirez une première fois. Jambe. ${neverSummonedRebeccaBefore? `Votre tir touche de plein fouet, mais se contente de roussir sa protection au lieu de la transpercer.`: `Encore ce problème de puissance de feu réduite. À croire que votre arme est chargée avec des munitions d’entraînement.`}</p>

${neverSummonedRebeccaBefore? `
<p>C’est le prix à payer pour user du souvenir matérialisé d’une arme plutôt que d’un véritable pistolet physique.</p>

${bulletExplanation}

<p>Et bien, vous allez devoir faire avec ce handicap.</p>
`: ""}

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

<p>C’est après que la situation s’est compliquée. Non seulement vous avez été officiellement déclarée ennemie public numéro 1 de l’Ordre, mais les dégâts que vous avez infligés là-bas vous ont également fait remarquer des autorités séculières de ce pays. Si le fait que vous aviez été enlevée, enfermée et contrainte à combattre pour votre liberté ne les a apparemment pas marquées, le meurtre du grand prêtre de l’Ordre les a en revanche pas mal secouées.</p>

<p>Et vous aussi il faut bien dire. Vous n’arrivez pas encore à bien réaliser. Cela s’est passé dans le feu du moment, sous l’influence de Rebecca, et Eschyle n’est pas vraiment quelqu’un que vous connaissiez en tant que personne. À vos yeux, c’était plutôt une sorte d’incarnation de l’Ordre dans toute sa rigidité.</p>

<p>En fait, vous essayez d’éviter de trop penser à ce qui s’est passé alors, et ce que cela implique pour vous. C’est peut-être aussi pour cela que vous laissez beaucoup les rênes à Rebecca en ce moment.</p>

<p>Elle, ce crime, elle s’en fiche comme de sa dernière couleur de cheveux.</p>
      `;
    },
    "end": "blood-pact",
  },
  "final-onawa": {
    "text": (flags) => {
      return `
${musashiboDescription}

<div class="conversation">
<p>— Dis-moi Eschyle, c’est un esprit officiel ça ? Dans mes souvenirs, votre fameuse liste ne comportait aucun soldat oriental. Je sais ! Il suffit de vérifier. Ça ira vite, y’a pas plus d’une vingtaine de personnalités agréées en Asie de l’Est. Pour des gens qui prétendent offrir au monde entier la possibilité de communier avec leurs ancêtres, vous vous limitez quand même beaucoup aux grands hommes du pourtour de la Méditerranée.</p>
<p>« Ah, mais non, suis-je bête. Tu n’as pas besoin de te restreindre à cette liste toi. Tu es dans les hautes sphères, celles où les lois ne s’appliquent plus. Vous avez même rédigé la règle de façon à vous laisser ce droit. À vous et vous seuls bien sûr.</p>
</div>

<p>Autant le comportement actuel d’Eschyle vous offre un boulevard pour démontrer ses contradictions, autant il vous expose à un danger physique bien réel. Il frappe comme s’il voulait vraiment vous priver de quelques morceaux de vous-même. Votre refus de céder, qui plus est publiquement, devant son jeu de la méchante invocation et de la gentille invocation l’a mis en rogne. Maintenant il veut juste en finir avec ce simulacre de procès avant d’en perdre totalement le contrôle.</p>

<p>Vous n’allez évidemment pas lui laisser ce plaisir.</p>

<div class="conversation">
<p>— Je n’ai plus vraiment besoin de parler à ce stade. Je le fais pour combler ce sinistre silence, mais un bon accompagnement musical serait beaucoup plus approprié.</p>
</div>

<p>Vous prenez le risque de vous détourner de lui un instant pour vous adresser à l’audience.</p>

<div class="conversation">
<p>— Imaginez-vous s’il vous plaît le thème de la gentille qui montre crescendo, annonçant son inéluctable triomphe devant le grand méchant qui lance désespérément ses dernières forces dans la bataille alors que tout le monde a bien compris qu’il avait déjà perdu.</p>
</div>

<p>Un impact extrêmement violent entre vos omoplates. Vous volez sur quelques mètres.</p>

<p>Ce type n’a pas hésité une seule seconde à vous frapper dans le dos. Vous ne pouvez pas voir la blessure, mais vous pouvez malheureusement la sentir.</p>

<p>Vous pouvez vous estimer heureuse de pouvoir encore vous redresser après cela. Mais inutile de dire que cela handicape d’autant plus vos chances de souplement esquiver ses prochains assauts.</p>

<p>Le tout pour le tout dans ce cas. Si vous tombez maintenant, minablement, l’Ordre vous fera disparaître dans ses efforts pour ne pas ébruiter cette déconvenue. Ils ne vous tueront pas, ce n’est plus l’époque, mais vous ne reverrez pas la lumière du jour. Vous n’avez plus à attendre la moindre pitié d’eux à ce stade.</p>

<p>Et Misty en est bien consciente elle aussi, vous soutenant dans votre folie même si votre plan lui fait serrer les dents si forts que vous les entendriez grincer si elle disposait de son corps physique en ce moment.</p>

<p>Vous vous efforcez de prendre votre air le plus décontracté en dépit de tout.</p>

<div class="conversation">
<p>— Eschyle, Eschyle, je crois que ce que tu appelles tes frères et sœurs ont compris que tu ne voulais pas que je leur parle. La question qu’ils se posent tous maintenant, c’est pourquoi. Après tout, quels arguments pourrais-je donner qu’un saint homme tel que toi ne serait pas en mesure de réfuter d’un mot bien choisi ? De quel mensonge celui qui possède la vérité peut-il donc avoir peur ? À m…</p>
</div>

<p>Votre phrase est encore une fois interrompue par une attaque justement destinée à vous faire taire.</p>

<p>Vous ne l’esquivez pas. Vous ne la parez pas. Vous ne la déviez pas. Vous la prenez de plein fouet, comme si vous ne l’aviez pas du tout vu venir.</p>

<p>Il vous embroche littéralement. Sa lance s’enfonce en vous, va tripatouiller des trucs à l’intérieur, et ressort par l’autre côté.</p>

<p>Vous n’avez aucune idée de l’étendue des dégâts. Assez pour vous clore le bec et rompre l’invocation en tout cas. Mais vous avez une vision très précise de l’image qui est en train de s’imprimer dans la rétine de chaque spectateur.</p>

<p>Une jeune fille, certes rebelle mais tout de même définie comme innocente dans la rhétorique même de son accusateur, sauvagement exécutée par une brute masquée et silencieuse alors qu’elle tentait simplement d’expliquer ses actions.</p>

<p>Ce n’est pas forcément la vérité exacte de ce qui vient de se passer, mais c’est celle qui va rester dans les mémoires. En vous portant le coup de grâce à ce moment précis, ce n’est pas tant vous que sa réputation, sa légitimité, sa vision de l’Ordre qu’il vient de réduire en morceaux.</p>

<p>Vous ne savez pas si et quand vous rouvrirez les yeux, mais ce ne sera plus dans un monde où il pourra imposer sa loi.</p>
      `;
    },
    "end": "sacrifice",
  },
  "rebecca-escape": {
    "text": `
<p>La fenêtre d’opportunité est ridiculement courte, mais vous avez l’avantage de la surprise pour vous.</p>

<p>Vous vous retournez vers la foule et tirez dedans. Ils sont beaucoup trop loin pour que cela blesse quiconque, votre projectile s’effaçant bien avant de rencontrer quoi que ce soit de solide. Toutefois, leurs petits cerveaux ne réagissent pas de façon aussi rationnelle. Le bruit de la détonation, le canon pointé dans leur direction, le souvenir tout frais de l’humiliante retraite de leur champion, votre air revêche, cela suffit à provoquer une vague de panique.</p>

<p>Ça se met à crier, à courir dans tous les sens, à se rentrer dedans. Un magnifique chaos détournant l’attention de vos propres actions. Vous piquez aussitôt un sprint vers l’arrière de la scène, vous laissez tomber. Vous êtes à deux pas des coulisses, et de gros balourds vous foncent déjà dessus, mais vous repérez ce que vous cherchiez, que Misty avait vu lorsqu’elle était passée par là mais n’avait pas identifié comme important : un gros amas de câbles et de boîtiers. Un nœud vital de la connectique et de l’alimentation de l’éclairage.</p>

<p>Vous mettez une balle dans le genou du garde le plus proche alors qu’il sort un taser. Vous êtes presque à bout portant, et il déguste sec. Cela calme aussitôt les ardeurs de ses potes. Vous en profitez pour mettre la zone dans le matériel électrique qui vous entoure. Vous n’y connaissez rien, mais vous balancez d’un coup de pied bien ciblé un truc qui a l’air important sur un autre truc qui a l’air important, et, magie, une partie des lumières s’éteignent dans un grésillement.</p>

<p>Vous y voyez encore trop bien à votre goût et un nouveau larron s’en mêle avant que vous ne puissiez pousser plus loin votre bricolage, s’interposant d’un bond entre vous et vos victimes de cuivre et de plastique.</p>

${musashiboDescription}

<p>En réponse, vous prenez aussi le large, vous élançant dans un gradin maintenant déserté et enténébré, passant entre deux gorilles que la présence d’un encore plus gros bonhomme a un peu réveillés. Le nombre jouerait en leur faveur s’ils étaient entraînés en ce sens, mais en l’occurrence ils se gênent mutuellement, vous permettant de grappiller de précieuses secondes d’avance et de sortir de leur champ de vision en plongeant derrière une rangée de sièges.</p>

<p>Leur erreur suivante est de s’aventurer dans l’obscurité à votre poursuite, immédiatement, sans méthode, les escaladant au fur et à mesure qu’ils arrivent sans s’attendre, s’éparpillant pour couvrir une plus grande surface. Seul l’avatar d’Eschyle reste en bas, dans la lumière, fouillant du regard la zone où vous vous êtes dissimulée.</p>

<p>Vous n’avez qu’une vague idée de ce qu’il peut bien apercevoir de sa position. Des mouvements grisâtres indistincts entrecoupés de courts flashs lumineux lorsque vos armes font feu. Les cris, les pas précipités, les détonations, les chocs durs, étouffés, métalliques, chair contre chair. Les silhouettes qui s’effondrent les unes après les autres. L’amertume de la défaite.</p>

<p>Lorsque le dernier garde se montre un peu plus malin que les autres et décampe avant de se prendre un coup ou une balle dans son angle mort, votre vieil ennemi hésite sans doute à s’avancer lui-même. À s’enfoncer dans le noir, sur un terrain inégal et inhabituel, pour jouer au chat et à la souris avec vous.</p>

<p>Vous ne lui laissez cependant pas le temps de se décider à pénétrer dans votre monde de ténèbres, d’embuscades, et d’attaques en traître. Pendant qu’il réfléchit, vous vous glissez jusqu’au rebord supérieur des gradins, et entreprenez de descendre le long de leur face extérieure.</p>

<hr/>

<p>Retour à la case départ.</p>

<p>Voilà un peu plus d’un an, vous quittiez l’Ordre subrepticement, avec bien peu d’affaires et d’argent. S’en était suivie une série de galères, jusqu’à ce que vous arriviez à tirer profit de vos facultés spirituelles pour péniblement stabiliser votre situation.</p>

<p>Et voilà que vous devez tout recommencer à zéro. En pire, puisque vous n’avez aucun bagage cette fois-ci, et qu’ils n’attendront pas six mois et un rapport alarmant sur vos pratiques avant d’ouvrir la chasse.</p>

<p>Toutefois, vous n’arrivez pas à vous défaire d’un absurde optimiste. Au cours de votre première année de liberté, vous avez beaucoup appris, sur vous-même et sur le monde, assez pour infliger un surprenant et humiliant revers à vos anciens tourmenteurs. Vous êtes dorénavant capable de faire des choses qu’eux ne sont même capables de concevoir.</p>

<p>Et ce n’est que le commencement. Maintenant que le vent de la liberté souffle de nouveau dans votre dos, vous comptez bien aller plus loin. Beaucoup plus loin.</p>
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
  },
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
<p>Vous vous concentrez. Tentez de dompter votre respiration saccadée. D’ignorer la douleur. De vous détacher de la présente situation pour ne faire plus qu’un avec l’esprit appelé.</p>

<p>Une bien noble intention. Sauf que vous n’êtes pas une héroïne fictionnelle surentraînée capable de se relever et de repartir comme si de rien n’était après un pareil passage à tabac. Chair et sang limitent vos possibilités.</p>

<p>Vous donneriez beaucoup pour avoir la force d’accomplir un ultime coup d’éclat.</p>

<p>Vous vous contentez de vous relever tant bien que mal et de cracher un gros glaviot coloré dans la direction de ce sombre type.</p>

<p>Puis vous vous écroulez à nouveau, sombrant dans un état de conscience altérée un sourire narquois aux lèvres.</p>

<hr/>

${jailDescription(flags)}
      `;
    },
    "end": "jail",
  },
  "legal-victory": {
    "text": `
<p>Eschyle a décidé d’adopter une forme moins menaçante. Et bien deux peuvent jouer à ce jeu.</p>

<p>Il ne cille pas à l’apparition d’Onawa. Après tout, contrairement à vos deux incarnation précédentes, elle ne porte pas d’arme. Et est de façon générale moins agressive dans son apparence, même si plus délurée.</p>

<p>Son expression se fissure quelque peu quand vous vous mettez à parler.</p>

<div class="conversation">
<p>— Oh, mais je suis toute prête à accepter une joute oratoire plutôt que physique.</p>
</div>

<p>Votre adversaire reste coi, se demandant sans doute comment vous arrivez à parler. Difficilement il faut dire. Toutefois, vous avez des années, ou plutôt des décennies, d’expérience dans l’art de faire entendre votre voix dans les pires conditions. Vous vous êtes même spécifiquement beaucoup entraînée pour cela (en partie parce que vous aviez envisagé une carrière dans la chanson à une époque il est vrai, mais il faut savoir tirer ressources de ses échecs aussi).</p>

<div class="conversation">
<p>— Et bien quoi ? Si on me lance une épée à la figure, je me défends de même. Si on me parle posément, alors j’use de la parole comme arme.</p>
<p>— Répondre à la violence par plus de violence démontre une immaturité, parvient enfin à lâcher.</p>
<p>— Refuser de se défendre face à la menace démontre une stupidité.</p>
<p>— Vous insultez nombre de grands penseurs pacifistes par vos propos.</p>
<p>— La vie n’est pas faite que de théories. Il y a des fois où il est nécessaire de briser les beaux principes pour parvenir à un résultat. Et la meilleure preuve s’il en est, c’est que tu n’as accepté de discuter qu’après que je t’ai mis ta raclée par deux fois Eschy.</p>
</div>

<p>Eschyle a bien du mal à garder son calme. Même si l’invocation qu’il a choisie semble d’un naturel placide, la contrariété de son hôte transparaît.</p>

<div class="conversation">
<p>— Sœur Iphigénie, vous abusez de ma bonté. Je vous offre une énième chance d’abjurer vos fautes plutôt que de souffrir inutilement, et vous préférez m’insulter que de la saisir.</p>
<p>— Tu ne m’offres rien du tout Eschy. Je t’ai éclaté, une fois, deux fois, et tu flippes que cela continue dans la même veine. Alors tu cherches une échappatoire, quelque chose qui te permettrait d’éviter une nouvelle raclée. Et bien laisse-moi te dire que ta nouvelle raclée, tu es en train de la prendre.</p>
</div>

<p>Vous effectuez une pirouette pour capter encore un peu plus l’attention du public.</p>

<div class="conversation">
<p>— Telle que tu me vois, je suis en pleine forme. Peut-être même plus en forme que tu ne l’aurais voulu d’ailleurs. Je n’étais pas censée offrir une vraie résistance après tout. Mais que veux-tu, tu l’as compris, je ne suis pas du genre à me coucher et à laisser le camion me passer dessus. Je t’ai battu Eschy. À chacun de tes nobles esprits, j’ai opposé un des miens, et à chaque fois je l’ai emporté.</p>
</div>

<p>Vous ne sauriez dire si vous incarnez encore Onawa. Vous utilisez ses capacités vocales certes, mais ce discours devient de plus en plus celui de Misty, et d’ailleurs vous pensez déjà à nouveau pleinement comme Misty. Pourtant le lien ne se rompt pas, probablement car votre état d’esprit actuel est parfaitement cohérent avec celui de votre invocation. Irrévérencieux et déterminé.</p>

<div class="conversation">
<p>— Alors Eschy, la vraie question est : est-ce que tu admets ta défaite, ou est-ce qu’il faut que j’écrase un par un chaque esprit de ton cher manuel avant cela ?</p>
</div>

<p>Il ne répond pas. Il est évident que ce n’est pas l’envie qui lui manque, mais il n’ose pas. Il a réellement peur de vous. Chacune de ses tentatives pour prouver sa supériorité sur vous s’est soldée par un lamentable échec, et il en est bien conscient. Que vous n’ayez pas hésité à lui tirer dessus doit aussi attiser ses craintes sur les risques physiques qu’il prendrait à continuer.</p>

<p>Vous décidez de l’ignorer, et vous adresser directement à l’audience.</p>

<div class="conversation">
<p>— Bon, puisque nous avons apparemment un peu de temps devant nous, j’aimerais vous parler de mon expérience d’invocatrice libre. Tout a commencé alors que…</p>
<p>— Suffit.</p>
</div>

<p>Eschyle crache le mot avec rage en reprenant son apparence normale.</p>

<div class="conversation">
<p>— Tu es libre de partir. Maintenant disparais.</p>
</div>

<p>Et il fait signe à ses gros bras de vous évacuer manu militari.</p>

<p>Vous avez réellement des tas de choses intéressantes à dire, mais reprendre les hostilités ne serait pas forcément à votre avantage en terme d’image.</p>

<p>Vous rompez le charme et descendez de vous-même de la scène avant que quiconque vous y oblige, marchant vers la sortie la tête haute.</p>

<hr/>

<p>Vous vous écrasez dans le canapé avec délectation.</p>

<p>Vous avez bien galéré pour parvenir jusqu’ici. L’Ordre n’ayant pas eu la gentillesse de vous rendre vos affaires, dont votre argent et les clés de votre chez-vous, et son siège se trouvant au milieu de nulle part, vous avez dû enchaîner marche et stop. C’est finalement un fidèle impressionné par votre performance mais ne sachant trop quoi faire de vous, un syndrome qu’il n’est apparemment pas le seul à partager, qui vous a repéré sur le bas-côté et ramené dans sa voiture jusque chez des amis à même de vous héberger.</p>

<p>Toute cette affaire a des conséquences politiques et théologiques à n’en pas finir. L’Ordre ne va sans doute pas vous lâcher comme cela, et vous vous attendez à tout moment à une nouvelle intervention musclée de votre part. Votre chauffeur vous a également demandé un moyen de vous recontacter pour vous poser de plus amples questions, et vos coordonnées semblent déjà avoir circulé partout.</p>

<p>Dans les jours qui viennent, vous avez sans doute devoir vous battre, encore et encore, au moins sur le terrain des idées. Votre vie va devenir encore plus compliquée maintenant.</p>

<p>Mais vous verrez cela demain. Pour l’heure, vous n’avez qu’une seule volonté. Celle de pouvoir dormir tout votre saoul, et de vous réveiller sous la lumière du soleil.</p>
    `,
    "end": "by-the-rules",
  },
  "three-as-one": {
    "text": `
<p>[Introduction du combat manquante, devrait théoriquement être la même que celle du combat d’Ionna ordinaire]</p>

<p>Si vous continuez ainsi, vous ne pouvez que perdre.</p>

<p>Ionna le sait. Son adversaire la surclasse sur le plan physique et technique et il ne se laisse pas décontenancer par son obstination, par la légende qui l’auréole.</p>

<p>Rebecca partage cet avis. Votre adversaire vous a privé de vos armes propres, vous a attiré sur son terrain, vous oblige à jouer selon ses règles.</p>

<p>Onawa approuve. Les dés sont pipés, persister à vouloir les lancer ne les fera pas tomber sur la bonne face.</p>

<p>Misty est perturbée par cette déferlante de pessimisme. Tout autant que par la présence de trois esprits autres que le sien en simultané sous son crâne.</p>

<p>Vous savez expliquer le phénomène. C’est un problème qui peut se produire si vous invoquez rapidement plusieurs esprits différents sans prendre le temps de nettoyer les traces du précédent. Une empreinte subsiste alors, pas assez forte pour influencer le monde physique, mais assez pour générer des pensées parasites incohérentes. Pour régler ce problème, il suffit simplement de faire le ménage, en procédant à une révocation intégrale en bonne et due forme. Et à faire plus attention la prochaine fois.</p>

<p>Cela ne vous était pas arrivé depuis que vous étiez toute petite. Depuis que vos professeurs d’alors vous ont appris à l’éviter, vous aviez effectivement toujours bien fait attention, avec autant sinon plus de sérieux que vous n’en mettez à vous brosser les dents. C’était devenu un réflexe auquel vous ne réfléchissiez même plus. Il aura fallu des circonstances exceptionnels pour que vous le transgressiez.</p>

<p>Et ce petit détail de rien du tout vous fait réaliser à quel point vous êtes encore assujettie aux enseignements de l’Ordre. Vous invoquez les esprits suivant les méthodes qu’ils vous ont enseignées. Vous les révoquez de même. Vous les <em>considérez</em> à travers le prisme qu’ils ont implanté en vous. Tant de points que vous n’avez jamais remis en question, d’idées, de méthodes, de concepts que vous considérez comme naturels, évidents, logiques, simplement parce que vous avez été élevée au milieu d’eux, au sujet desquels vous n’avez jamais réellement réfléchi.</p>

<p>Ce combat est l’apothéose de votre rébellion de façade. Si vous faites preuve d’une, déjà bienvenue, originalité de façade, avec des invocations sortant pour la plupart des canons établis, vous respectez tout de même la plupart des règles non énoncées du jeu. Vous avez ainsi accepté inconsciemment l’idée qu’il s’agissait forcément d’une série de duels en un contre un, esprit contre esprit, au singulier, juste parce qu’il ne vous ait même pas venu à l’idée que vous pouviez employer plusieurs esprits à la fois.</p>

<p>Tout comme cela n’a pas traversé l’esprit de votre adversaire, aussi empêtré dans ses préjugés que vous. Dans la philosophie de l’Ordre, une invocation, c’est permettre à un unique ancien de s’incarner pleinement dans le présent, copie parfaite de ce qu’il a été, dans ses qualités comme ses défauts. L’idée de mélanger les invocations est donc par nature exclue. Même si dans la pratique, l’invocation est déjà affectée par le corps qu’elle habite et les raisons pour lesquelles elle a été invoquée. Sinon vous ne seriez pas en train de de vous taper dessus par antiquités interposées.</p>

<p>Il se peut que vous soyez en train de broder tout un discours au fond de votre crâne pour vous convaincre vous-même que ce que vous allez faire est la conclusion logique de ce que vous êtes, et pas juste une idée parasite soufflée par Onawa. L’un n’empêche pas l’autre d’ailleurs.</p>

<p>Tout en maintenant votre lien avec Ionna, qui a réussi à piloter votre corps seule alors que votre psyché battait la campagne, et dont la robustesse vous permet encore de tenir debout malgré les blessures et la fatigue, vous laissez Onawa vous imprégner de son essence.</p>

<p>Tous vos réflexes s’opposent à cette cohabitation contre nature de deux, non de trois, Misty se refusant elle aussi à s’effacer, esprits dans un même corps. Ce n’est pas habituel, pas normal, pas naturel.</p>

<p>Et cela vous éclate.</p>

<div class="conversation">
<p>— Je vous ai manqué ?</p>
</div>

<p>Votre voix sonne assez étrangement, même en tenant compte de vos problèmes de gorge. Une histoire de caisse de résonance différente sans doute. Bah, vous n’allez pas vous émouvoir pour si peu. Surtout que, même à travers son masque, vous pouvez admirer l’expression incrédule de votre ennemi.</p>

<p>Vous ôtez votre casque. Vous avez encore l’armure et la corpulence d’Ionna, mais en passant la main sur votre visage, vous confirmez que vous avez retrouvé le maquillage d’Onawa. Il vous manque un miroir pour savoir à quoi vous ressemblez exactement, quelle étrange chimère vous êtes devenue.</p>

<div class="conversation">
<p>— Oui, c’est bien moi. Et moi. Et moi aussi.</p>
<p>— … Sa… Sacrilège !</p>
</div>

<p>Vous esquivez son assaut rageur et précipité sans mal. La colère le fait frapper fort, pas juste. Son cri mal maîtrisé fait écho aux nombreuses exclamations du public, pour la plupart plus déroutées par la tournure des événements que comprenant réellement ce qui se passe.</p>

<p>Mais Eschyle lui a bien réalisé la situation. À son niveau, il peut presque sentir le mélange actif des différentes âmes en vous.</p>

<div class="conversation">
<p>— Qu’est-ce qui t’énerve le plus Eschyle ? Le fait que je sois en train d’invoquer plusieurs esprits en même temps ? Que je puisse le faire ? Que tu ne puisses pas le faire ? Que tu n’es même pas pensé qu’il était possible de le faire ?</p>
<p>— Abomination ! Démon !</p>
</div>

<p>Il frappe, frappe, sans aucune maîtrise. Son contrôle sur son invocation est en train de se fissurer, tout comme son contrôle sur lui-même et la situation. Vous n’êtes pas simplement sortie du rôle qui vous était assignée, vous êtes carrément en train de réécrire la pièce.</p>

<p>Le coup de grâce vient sous la forme d’une balle de neuf millimètres de diamètre le heurtant en pleine poitrine. Enfin, comme pour le combat précédent, la plupart de la  matière s’évanouit entre le canon de l’arme fraîchement matérialisée dans votre main libre. Ce qu’il en reste suffit cependant à briser les dernières résistances du charme d’Eschyle et à l’envoyer voler sous son apparence ordinaire.</p>

<p>Il fait un petit bond d’un mètre, touche le sol le dos en premier, glisse encore un peu pour épuiser l’énergie cinétique, puis s’immobilise. Sa bouche continue à vomir un babil d’imprécations, mais il ne fait pas mine de se relever. En fait, il vous semble même avoir pris un sacré coup de vieux dans cette position peu reluisante.</p>

<p>Vous pouvez déjà voir et entendre la sécurité du site se ruer vers la scène. Vous leur offrez votre meilleur profil, une épée dans une main, un pistolet dans l’autre, une armure sacrément cabossée, une mèche de cheveux colorés qui ne cessent de vous tomber au coin du nez, un sourire ravageur. La combinaison fait son petit épée car ils se contentent d’encercler un peu plus près votre tribune au lieu d’y monter, avec des regards inquiets vers leur hiérarchie.</p>

<p>Eschyle justement se relève, tremblant, les yeux injectés de sang. Il vous contemple encore une fois, puis se met à hurler :</p>

<div class="conversation">
<p>— Emparez-vous d’elle !</p>
<p>— Je ne crois pas non. Nous avons un jugement à finir n’est-ce pas Eschyle ? Vous vouliez démontrer que les esprits que je côtoie n’étaient pas dignes d’être appelées.</p>
<p>— Ce jugement n’a plus de raison d’être. Une telle abomination ne saurait être tolérée.</p>
<p>— Eschy, Eschy, tu nous as cassé les oreilles avec tes histoires de mauvais esprit qui ne saurait triompher des nobles ancêtres et blablabla, et alors que je t’offre exactement ce que tu veux, le sacrilège sur un plateau, tu te dégonfles ? Comment veux-tu que quiconque te prenne au sérieux après cela ?</p>
</div>

<p>Vous vous retournez vers le public.</p>

<div class="conversation">
<p>— Et vous, vous allez le laisser faire ? Vous avez le droit de ne pas être d’accord avec ce que je suis et ce que je fais, mais votre patron avait énoncé des règles claires. Si je lui cassais figure en un contre un, mes péchés seraient absous. Il n’est plus en état de faire quoi que ce soit d’autre que de hurler sa frustration tandis que j’ai encore de la réserve…</p>
</div>

<p>Vous faites tourner vos deux armes sur elles-mêmes dans un mouvement tape-à-l’œil.</p>

<div class="conversation">
<p>— … Aussi l’affaire me semble-t-elle réglée. Alors vous pouvez le laisser se parjurer, et jetez l’opprobre sur vous tous. Ou vous pouvez accepter cette défaite en adultes.</p>
</div>

<p>Cela discute beaucoup dans le public. L’opinion générale semble négative à votre égard, mais les débats sont passionnés.</p>

<p>Vous rangez vos armes, et ouvrez les bras, vous offrant à la merci de la foule</p>

<p>Et vous vous effondrez.</p>

<hr/>

<p>Vous prenez le temps de vous admirer dans le miroir. Cette bonne vieille Misty vous rend votre regard avec une absence d’enthousiasme qui fait peur. Vous avez les traits tirés de quelqu’un de malade qui n’a pas eu son quota de sommeil. Les multiples pansements et l’attelle ajoutent encore à cette impression que vous êtes au bord de la tombe.</p>

<p>Dans les faits, le pire est passé. Vous avez encore quelques nausées, mal de partout, vous n’arrivez pas à dormir plus de quelques heures sans devoir aller vous vider l’estomac, mais rien de comparable à ce que vous avez ressenti lorsque l’invocation multiple s’est interrompue d’elle-même, votre organisme ayant outrepassé ses limites depuis longtemps. Il n’était pas préparé pour ce que vous lui avez fait subir, et il vous l’a bien fait comprendre. Vous avez bien cru que vous alliez rendre l’âme, là, devant tout le monde.</p>

<p>Mais même vos accusateurs n’ont pas osé vous laisser expirer ainsi. Vous avez été transporté à l’infirmerie, et vos blessures et votre extrême épuisement ont été convenablement traités. Vous avez été placée sous étroite surveillance bien sûr, mais votre garde a aussi la décence de vous laisser tranquille aux toilettes, ce qui vous donne une raison de plus de vous attarder à cet endroit</p>

<p>Vous souriez à pleines dents en songeant que votre petit numéro a semé le chaos dans la hiérarchie de l’Ordre. La rumeur est parvenue jusqu’à votre lit de convalescence, et vous savez qu’Eschyle a perdu sa place, coincé entre les ultras, qui veulent vous voir brûler et lui en veulent d’avoir perdu le contrôle de sa chère cérémonie, et les modérés qui lui reprochent l’emploi de cette justice archaïque.</p>

<p>Ce qui ne veut pas dire qu’ils ne souhaitent pas vous condamner. Juste pas de cette façon, et plus forcément sur les mêmes chefs d’accusation. Ironiquement, vous avez gagné du temps en commettant un crime à leurs yeux plus grands, et surtout, et c’est bien là leur problème, techniquement inédit.</p>

<p>Oh, bien sûr, certains ont sans doute déjà essayés de mélanger des esprits par le passé. Mais personne n’avait réussi jusqu’ici. Du moins pas publiquement. Vous soupçonnez que vous n’êtes vous-même arrivée à vos fins que parce qu’il s’agissait d’une sélection très précise, avec laquelle vous avez beaucoup travaillé et donc chaque membre partage, au milieu d’un océan de différences, des points communs forts avec les autres et avec vous-même.</p>

<p>Mais maintenant qu’il a été démontré qu’un tel acte était du champ du possible, vous ne doutez pas que d’autres vont s’y essayer.</p>

<p>Vous êtes pire qu’une simple hérétique. Vous êtes la fondatrice d’une nouvelle hérésie.</p>

<p>Et vous comptez bien la propager.</p>
    `,
    "end": "three-as-one",
  },
};

export default final;
