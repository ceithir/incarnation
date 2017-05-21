const intro = {
  "intro" : {
    "text": (flags, skip) => {
      if (skip) {
        return `
<p>Eschyle vient de terminer son très long et très ennuyeux discours. Vous n’en avez pas écouté le moindre mot. Inutile de vous infliger pareil somnifère, vous savez parfaitement pourquoi vous êtes là et ce qu’il vous reste à faire.</p>

<p>Alors autant entrer tout de suite dans le vif du sujet.</p>
        `;
      }

      return `
<p>L’homme a les mains jointes et les yeux clos, comme en prière. Si sa position dans l’espace reste fixe, tout son être est en mouvement, son corps vibrant à un rythme effréné, auréolant sa silhouette d’un halo flou épuisant l’œil qui voudrait le fixer.</p>

<p>Et entre chaque battement de paupière, il change.</p>

<p>Sa robe mauve bordée de fil d’or s’épaissit, gagne une doublure satinée et une traîne. Sa touffue barbe blanche de patriarche s’allonge, devient grise et fillasse. Son crâne chauve regagne quelques cheveux, qui disparaissent sous une tiare ornée de pierres précieuses. Les traits mêmes de son visage se réarrangent, en formant un autre, plus maigre, plus sec.</p>

<p>Il ouvre les yeux. Contemple l’assemblée en silence.</p>

<p>Les secondes s’écoulent alors que les derniers bruits se meurent. Si l’être est toujours au cœur d’un déconcertant maelström, il n’évolue désormais plus. Chacun retient son souffle.</p>

<p>Enfin, il prend la parole :</p>

<div class="conversation">
<p>— Comme nous tous, Porphyre le fondateur a grandi bercé par les exploits des plus grands héros de l’ancien temps. Parvenu à l’âge adulte, il entreprit un pèlerinage sur les traces de ces grands hommes. Il trouva des monuments à leur gloire, il découvrit des reliques, il consigna des récits qui lui avait échappés jusque là. Mais Porphyre comprit bientôt que cela ne constituait que des témoignages indirects et partiels de la grandeur de ces hommes, et que le seul moyen de jamais réellement appréhender leur courage, leur génie, leur charisme serait de les rencontrer en personne.</p>

<p>« Il consacra le reste de sa vie à réaliser ce rêve. Et il y parvint. Après cent jours et cent nuits de méditation, Porphyre perça le secret qui reliait l’âme au corps. Il comprit que l’un et l’autre n’étaient pas irrémédiablement unis, qu’un corps pouvait offrir refuge à un autre esprit que celui avec lequel il était venu au monde, et que si les corps périssaient, les esprits eux ne disparaissaient jamais.</p>

<p>« Alors il abaissa ses défenses et appela à lui, en lui, l’âme d’Utnapishtim le sage. Et le miracle s’accomplit, et il devint Utnapishtim.</p>

<p>« Cette première communion fut aussi éphémère que révélatrice. Porphyre cisela ensuite sa technique durant de longues années, jusqu’à être en mesure de pouvoir incarner en lui l’esprit de n’importe quel mort pour la durée qu’il désirait. Grâce à ce don, il put conseiller rois et princes comme s’il était leurs plus valeureux ancêtres. Car il l’était.</p>

<p>« Porphyre ne pouvant être partout où ses services étaient requis, et étant le premier conscient du fléau de la mortalité, il forma des disciples. Disciples qui à sa mort en formèrent à leur tour d’autres, jusqu’à ce que bientôt leur nombre se compte en centaines. Des êtres d’exception, ayant consacrés leur vie à établir un pont entre les morts et les vivants. Je parle bien sûr de vous, mes très chers frères, mes très chères sœurs.</p>
</div>

<p>Chaque membre de l’assemblée baisse humblement et silencieusement la tête en entendant cette phrase. Leurs visages disparaissent ainsi entièrement sous les capuchons de leurs robes rituelles.</p>

<div class="conversation">
<p>— Le prix à payer pour ce don unique est celui de la responsabilité. Il nous revient à nous qui possédons le pouvoir de nous assurer qu’il soit employé justement et respectueusement. Pour cela, le conseil est moi-même avons décidé d’imposer deux règles fondamentales.</p>

<p>« Tout d’abord, aucune invocation ne saurait dorénavant être opérée sans l’accord du conseil. Nous devons tout aux anciens, et la première des politesses consiste à ne pas les importuner pour de triviales raisons. Le conseil seul sera juge si une demande est d’assez d’importance pour le voile de la mort soit soulevé.</p>

<p>« Ensuite, seuls les acolytes de plus haut rang seront désormais libres d’invoquer les esprits de leur choix. Les autres devront se limiter à un catalogue d’âmes dont la pureté a déjà été éprouvée et consignée. J’ai confiance en chacun de vous, mes frères et mes sœurs. Je sais qu’aucun de vous n’invoquerait de son plein gré un esprit maléfique. Mais le plus grand talent du mal est de savoir se dissimuler derrière des oripeaux de vertu, et beaucoup d’entre vous sont encore jeunes et inexpérimentés. Pour  que jamais une innocente erreur d’appréciation ne tourne au drame, une stricte discipline est nécessaire.</p>

<p>« Et cela suppose des châtiments appropriés si ces règles venaient à être transgressées.</p>
</div>

<p>L’orateur incline légèrement le buste en un geste de salut. Le frémissement qui le parcourait se meurt alors extrêmement vite, et l’homme retrouve l’apparence qu’il avait au tout début de la cérémonie. Lorsqu'il reprend la parole, c'est d’une voix toute différente :</p>

<div class="conversation">
<p>— C’est toujours un honneur pour moi d’accueillir en ma chair Cyrille, premier disciple de Porphyre et fondateur de notre ordre. En vertu de la première règle qu’il a énoncée, cette invocation n’a cependant pas seulement pour but de rappeler le miracle qui nous permet encore aujourd’hui d’entendre la voix non déformée de ceux sans qui rien de ceci n’existerait.</p>
</div>

<p>D’un geste de la main, il englobe la scène sur laquelle il se trouve, les gradins aux rangs parsemés de fidèles qui l’entoure, et le massif bâtiment non loin qui tient lieu de siège à son ordre.</p>

<div class="conversation">
<p>— Non, si des règles aussi fondamentales ont dû être rappelées, c’est parce qu’elles ont été transgressées.</p>
</div>
      `;
    },
    "next": (goToSection, flags, skip) => {
      if (skip) {
        return [
          {
            "text": `Ionna`,
            "action": () => {goToSection("first-ionna", {"ionnaVersusMakabi": true, "lightlyWounded": true})},
          },
          {
            "text": `Rebecca`,
            "action": () => {goToSection("first-rebecca", {"rebeccaVersusMakabi": true})},
          },
          {
            "text": `Onawa`,
            "action": () => {goToSection("first-onawa", {"onawaVersusMakabi": true, "lightlyWounded": true})}
          },
        ];
      }

      return {
        "text": `En coulisses, quelqu’un vous ôte enfin votre bâillon et vos menottes.`,
        "action": () => {
          goToSection("intro-2");
        },
      };
    },
  },
  "intro-2": {
    "text":`
<p>Vous avez été libérée de vos entraves, mais c’est bien là la seule liberté qu’on vous offre. Deux malabars sont là pour s’assurer que vous n’empruntiez pas un autre chemin que celui menant à la scène, et l’un d’eux s’avance déjà pour vous y pousser de force. Vous le devancez, fatiguée d’être brinquebalée comme un sac de patates.</p>

<p>La lumière des projecteurs vous éblouit. L’Ordre de Ceux qui Transmettent l’Antique Sagesse a beau être aussi vieux jeu que son nom est suranné, même eux ont franchi, à regret, le cap de l'électricité.</p>

<p>Vous placez une main au-dessus de vos yeux pour vous protéger, profitant de la chaleur du spot pour vous réchauffer quelque peu. Votre tenue n’est pas adaptée à cette fraîche nuit d’automne, mais, là encore, vous n’avez pas eu le choix. Pour que vous puissiez offrir votre plus beau profil de terrible rebelle en ce soir, on vous a forcée à remettre les vêtements (lavés) que vous portiez lors de votre capture.</p>

<p>Enfin, il n’y a vraiment qu’ici, au milieu de toutes ces robes violettes identiques que votre T-shirt peut choquer qui que ce soit.</p>

<div class="conversation">
<p>— Sœur Iphigénie ! Je vous en prie, avancez.</p>
</div>

<p>Eschyle. Grand maître de l’Ordre de Ceux qui Ont un Nom Stupide, tout frais sorti de son petit numéro de maître invocateur.</p>

<p>Vous détestiez déjà ce type avant, mais la situation actuelle vous a fait découvrir un tout autre niveau de haine. Par pure défiance, vous lui répondez de là où vous êtes, en retrait, presque dans l’ombre.</p>

<div class="conversation">
<p>— Sœur Iphigénie n’existe plus depuis un bail. Pas sûr qu’elle ait jamais existé d’ailleurs. C’est Misty maintenant.</p>
</div>

<p>Enfin, telle est la phrase que vous aviez formulée dans votre tête. Et telle qu’elle aurait dû résonner haut et fort. En pratique, c’est un minable gargouillis à peine intelligible qui s’est extirpé de votre gorge à grand renfort de raclements.</p>

<p>Vous lâchez quelques insanités, mais là aussi vos mots tombent sans force. Vous qui vous demandiez comment l’Ordre allait vous empêcher d’exprimer des opinions et des faits peu à leur goût une fois sur scène, vous avez votre réponse. De même que vous connaissez dorénavant l'effet de la saleté huileuse que vos cerbères vous ont forcée à avaler peu de temps avant le début de ce cirque. Sur le coup, vous aviez supposé qu'il s'agissait d'un simple calmant, pour que vous n'offriez pas trop de résistance, mais c'était sous-estimer leur perversité.</p>

<p>Devant vos pitoyables efforts, pour vous exprimer, Eschyle affiche un large sourire paternaliste, comme si vous étiez un bébé perdu ayant besoin d’aide, expression  éminemment théâtrale, et donc parfaitement à sa place dans cette farce.</p>

<p>Il se retourne ensuite vers la foule pour continuer son monologue :</p>

<div class="conversation">
<p>— Sœur Iphigénie nous a brutalement quittés voilà plus d’un an, abandonnant son titre, son nom et sa place dans l’Ordre au profit d’un retour à la vie temporelle. Un choix que nous respectons même si nous aurions aimé qu’il se déroule dans de meilleures circonstances.</p>
</div>

<p>Vous aimeriez beaucoup pouvoir évoquer le mois de pénitence qui avait été la seule réponse à votre première demande polie de partir. Évidemment qu’après pareil traitement, votre seconde tentative s’est effectuée en douce après avoir piqué un maximum de liquidités parmi les offrandes.</p>

<div class="conversation">
<p>— Cependant, durant son séjour dans le monde, elle commit l’irréparable à de nombreuses reprises, usant des talents qu’elle avait développé en notre sein sans le consentement de l’Ordre dans un but de gain matériel…</p>
</div>

<p>Oh, vous auriez bien voulu mettre à profit toutes les autres compétences que vous avez apprises en ces lieux. Sauf qu’après des années d’une éducation uniquement tournée vers l’idée de faire de vous un parfait petit réceptacle à esprits, vous n’aviez besoin que d’un doigt pour compter les cordes de votre arc, et que cet arc-là pour vous procurer de quoi manger.</p>

<div class="conversation">
<p>— … et qui plus est en invoquant régulièrement des esprits dont la pureté n’a pas été confirmée par l’Ordre.</p>
</div>

<p>Frémissements dans l’assemblée jusque là bien disciplinée. L’invocation d’esprits non répertoriés reste un tabou majeur, entretenu par de nombreuses histoires abominables et pas forcément toutes complètement inventées.</p>

<p>Toutefois, à force d’avoir peur des flammes, on finit par mourir de froid. Leur stupide liste ne contient aucune personne ayant vécu dans les deux derniers siècles, et une poignée seulement pour les trois qui les précèdent. La plupart des esprits officiels sont ainsi bien trop déconnectés de la réalité présente pour être d’une quelconque aide pratique de nos jours.</p>

<p>Et, bien sûr, leurs philosophies de vie datent elles aussi d’une autre époque. Être une invocatrice, au féminin, et s’en tenir aux bons esprits officiels, signifie passer votre existence à tenir la porte à de vieux barbons qui vous font bien comprendre que votre place est au gynécée à pondre la génération suivante.</p>

<p>Tout un argumentaire que vous bouillez de ne pas pouvoir exprimer autrement que par des borborygmes.</p>

<div class="conversation">
<p>— À crime exceptionnel, procédure exceptionnelle. La jurisprudence de l’Ordre est limpide sur de tels sujets. Sœur Iphigénie a le droit d’essayer de démontrer que les esprits avec qui elle s’est acoquinée sont dignes de cette confiance. Si elle y parvient, elle ne sera condamnée que sur sa désobéissance à la première règle et le conseil de l’Ordre se penchera sur la possibilité d’ajouter ses compagnons spirituels à la liste officielle. Si elle échoue, elle subira l’intégralité du blâme.</p>
</div>

<p>Si vous gagnez, vous serez exécutée avec une épée effilée, sinon ce sera la hache. Belle consolation. En réalité, vous n’avez accepté de participer à cette mascarade que parce qu’elle vous offrait plus de possibilités de vous en sortir que de simplement rester enfermée dans votre cellule à l’isolement.</p>

<div class="conversation">
<p>— Cette démonstration prendra la forme d’un “jugement des esprits”. C’est une procédure très rare, historique, avec laquelle la plupart d’entre vous ne sont sans doute pas familiers, mais d’une grande simplicité. Sœur Iphigénie va invoquer les êtres avec qui elle a pactisés. J’appellerai quant à moi les nobles esprits de l’Ordre. Et, par l’intermédiaire de nos corps, ces esprits s’affronteront.</p>
<p>« Les esprits mauvais, sous leur masque d’arrogance, sont faibles et fragiles, tandis que les bons sont forts et endurants. Si les esprits de sœur Iphigénie en sont dignes, ils résisteront aux coups de ceux dont la pureté est inattaquable. Si à l’inverse ils laissent leur hôte subir pour se protéger eux, alors leur vilenie sera démontrée.</p>
</div>

<p>Vous avez été briefée sur le sujet de façon un peu moins emphatique. Dans la pratique, Eschyle va invoquer des gros bras du passé, et vous allez devoir faire votre possible pour rester en un seul morceau. C’est une procédure qui date d’une époque où les duels et guerres judiciaires étaient monnaie courante, et qui ne vole donc pas très haut.</p>

<p>Dans les jours qui précédent, vous vous êtes d’ailleurs beaucoup interrogée sur les raisons qui ont poussé l’ordre à déterrer une méthode de jugement pareil. Maintenant que vous êtes dans l’arène, face à de nombreux fidèles qui boivent les paroles de leur maître à penser, vous vous dites que c’est justement pour cela. L’occasion rêvée d’organiser une grande messe, de rappeler les racines de l’Ordre, la force de ses traditions et le châtiment qui attend ceux et celles qui s’y opposent.</p>

<p>Eschyle abandonne enfin son public pour se tourner vers vous. Le silence se fait dans la foule, remplacé par une tension électrique. Ne pouvant plus reculer, vous avancez vers le centre de la scène, bien en vue de tous, faisant face à votre bourreau.</p>

<p>Il joint les mains, dans le geste aussi ritualisé que techniquement inutile indiquant qu’il va à nouveau invoquer un esprit, et déclare officiellement le début des hostilités :</p>

<div class="conversation">
<p>— Bien. Les enjeux ont été rappelés, le jugement proprement dit peut commencer.</p>
</div>
    `,
   "next": (goToSection) => {
     return {
        "text": `Les contours de sa silhouette s’émiettent à nouveau.`,
        "action": () => {
          goToSection("roster");
        },
      };
    },
  },
};

export default intro;
