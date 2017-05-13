const transitionBetweenFirstAndSecond = {
  "first-surrender-offer-no-summon": {
    "text": `
<p>Vous croisez les bras devant votre visage en prévision du prochain assaut. Ce mouvement défensif réflexe représente à peu près à lui seul toute votre expérience en combat réel quand vous n’avez personne pour vous souffler les mouvements.</p>

<p>Autant dire que vous vous attendez à passer un sale quart d’heure.</p>

<p>Toutefois, au lieu de simplement vous battre comme un sac de plâtre, votre adversaire recule. L’instant suivant, le charme est rompu et un sourire torve s’affiche sur le visage d’Eschyle. Il prend le temps de vous détailler du regard, se pourléchant presque les babines.</p>

<div class="conversation">
<p>— Il ne fait aucun doute que vos esprits sont aussi faibles qu’annoncés. Vous n’avez pas besoin de vous infliger cela sœur Iphigénie. Abandonnez dès maintenant, et votre châtiment ne sera point alourdi.</p>
</div>

<p>Votre premier réflexe est de rejeter sa proposition en bloc. Toutefois, la situation est effectivement bien mal engagée. Et si vous saviez que vous alliez devoir vous battre, ce n’est que maintenant que vous réalisez ce que cela signifie vraiment, que vous comprenez qu’Eschyle est réellement préparé, et même plutôt enjoué, à l’idée de vous faire physiquement du mal.</p>
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
          "text": `Vous invoquez à nouveau.`,
          "action": () => {
            goToSection("second-summon");
          },
        },
      ];
    },
  },
  "first-surrender-offer-onawa": {
    "text": `
<p>Eschyle s’efforce de prendre un air compatissant, mais n’arrive pas à dissimuler totalement son sourire satisfait.</p>

<div class="conversation">
<p>— Vos esprits sont aussi faibles qu’il était à craindre sœur Iphigénie. Vous n’avez pas besoin de vous infliger cela. Abandonnez dès maintenant, et votre châtiment ne sera point alourdi.</p>
</div>

<p>Onawa refuse tout de go. Misty… Misty hésite.</p>

<p>Parce qu’il faut bien le reconnaître, vous venez de vous manger une lance. Et ça fait sacrément mal. Et ce type est sérieusement assez fou pour ne pas s’arrêter là. Vous n’avez pas signé pour réellement mettre votre vie en danger dans des jeux du cirque reconstitués.</p>

<p>Votre état d’esprit, aussi humain soit-il, s’oppose tellement à la détermination presque enragée d’Onawa que le charme se rompt. L’invocation se termine et l’esprit vous abandonne, sans apporter de réponse à votre dilemme.</p>
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
            goToSection("second-summon");
          },
        },
      ];
    },
  },
  "second-summon": {
    "text": `
<p>Vous venez d’essuyer un revers, c’est certain. Toutefois, si Eschyle croit que vous allez abandonner aussi facilement ce qui est peut-être votre dernière opportunité de vous sortir de ce guêpier, c’est qu’il est encore plus dénué d’empathie que vous ne le pensiez.</p>

<p>Vous amorcez une nouvelle invocation. Votre bourreau ne semble pas déçu de votre décision. Tout au contraire, son sourire malveillant s’élargit encore un peu plus tandis qu’il vous répond en faisant de même.</p>

<p>Vous ne savez pas ce qu’il vous prépare, mais au moins ne l’affronterez-vous pas seule.</p>
    `,
    "next": (goToSection, flags) => {
      return [
        {
          "text": `Ionna.`,
          "action": () => {
            goToSection("second-ionna", {"ionnaVersusBernardo": true});
          },
        },
        {
          "text": `Rebecca.`,
          "action": () => {
            goToSection("second-rebecca", {"rebeccaVersusBernardo": true, "lightlyWounded": true, "badlyWounded": flags.lightlyWounded});
          },
        },
        {
          "text": `Onawa.`,
          "action": () => {
            goToSection("second-onawa", {"onawaVersusBernardo": true, "lightlyWounded": true, "badlyWounded": flags.lightlyWounded});
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
    "next": (goToSection, flags) => {
      return [
        {
          "text": `Du classique, avec Ionna.`,
          "action": () => {
            goToSection("second-ionna", {"ionnaVersusBernardo": true});
          },
        },
        {
          "text": `Du baroque, avec Onawa.`,
          "action": () => {
            goToSection("second-onawa", {"onawaVersusBernardo": true, "lightlyWounded": true, "badlyWounded": flags.lightlyWounded});
          },
        },
      ];
    },
  },
};

export default transitionBetweenFirstAndSecond;
