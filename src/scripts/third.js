const third = {
  "third-form": {
    "text": `
<p>Le dernier esprit d'Eschyle vous a déjà mise à terre, avec le goût de votre propre sang dans votre bouche. Qu'est-ce qu'il va encore bien pouvoir vous sortir ? Un bourreau avec sa hache ?</p>

<p>Un petit gros.</p>

<p>Un petit gros. Pas tout jeune, le crâne et la barbe rasés, portant une robe de prêtre toute simple et allant pieds nus.</p>

<p>Il s'approche et se penche vers vous, vous tendant la main.</p>

<div class="conversation">
<p>- Le combat est fini ma sœur. La leçon a été rude, mais elle était nécessaire. Je vois que vous avez compris maintenant. Il ne vous reste plus qu'à abjurer vos pêchés, et vous serez pardonnée.</p>
</div>

<p>Évidemment. Cette démonstration ne pouvait se finir sans votre repentance publique.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Vous jetez l'éponge.`,
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
<p>Non.</p>
    `,
    "next": (goToSection) => {
      return [
        {
          "text": `Ionna`,
          "next": () => {
            goToSection("third-ionna");
          }
        },
        {
          "text": `Rebecca`,
          "next": () => {
            goToSection("third-rebecca");
          }
        },
        {
          "text": `Onawa`,
          "next": () => {
            //Quite different if already called several times
            goToSection("third-onawa");
          }
        },
      ];
    },
  },
};

export default third;
