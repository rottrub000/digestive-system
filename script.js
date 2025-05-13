
const digestionFacts = {
  bread: {
    type: "Carbohydrate",
    path: [
      "Mouth: Saliva starts breaking down starch into sugar.",
      "Stomach: Minimal digestion here for carbs.",
      "Small Intestine: Enzymes break it down to glucose, absorbed into blood.",
      "Fun Fact: Glucose powers your brain and muscles!"
    ]
  },
  apple: {
    type: "Carbohydrate",
    path: [
      "Mouth: Chewing and saliva break down fibers and sugars.",
      "Stomach: Softened but not digested much.",
      "Small Intestine: Fructose absorbed here.",
      "Fun Fact: Apples are great for fiber and gut health!"
    ]
  },
  rice: {
    type: "Carbohydrate",
    path: [
      "Mouth: Amylase starts digesting starch.",
      "Stomach: Little digestion for carbs here.",
      "Small Intestine: Glucose absorbed for energy.",
      "Fun Fact: Rice gives quick energy!"
    ]
  },

  chicken: {
    type: "Protein",
    path: [
      "Mouth: Chewing breaks it into smaller pieces.",
      "Stomach: Pepsin starts breaking down proteins into peptides.",
      "Small Intestine: Enzymes finish breaking proteins into amino acids.",
      "Fun Fact: Amino acids are building blocks of muscles!"
    ]
  },
  eggs: {
    type: "Protein",
    path: [
      "Mouth: Chewed and swallowed.",
      "Stomach: Protein digestion begins.",
      "Small Intestine: Amino acids absorbed into bloodstream.",
      "Fun Fact: Eggs contain all 9 essential amino acids!"
    ]
  },
  tofu: {
    type: "Protein",
    path: [
      "Mouth: Chewed tofu moves to stomach.",
      "Stomach: Pepsin breaks soy protein.",
      "Small Intestine: Amino acids absorbed.",
      "Fun Fact: Tofu is a plant-based protein powerhouse!"
    ]
  },

  avocado: {
    type: "Fat",
    path: [
      "Mouth: Chewed, not digested here.",
      "Stomach: Minimal fat digestion.",
      "Small Intestine: Bile from liver emulsifies fats for absorption.",
      "Fun Fact: Healthy fats like avocado are great for your brain!"
    ]
  },
  oliveOil: {
    type: "Fat",
    path: [
      "Mouth: Swallowed.",
      "Stomach: Moves to small intestine quickly.",
      "Small Intestine: Bile helps absorb fatty acids.",
      "Fun Fact: Olive oil is heart-healthy!"
    ]
  },
  cheese: {
    type: "Fat",
    path: [
      "Mouth: Chewed, begins digestion journey.",
      "Stomach: Fat and protein digestion starts.",
      "Small Intestine: Fats absorbed into lymphatic system.",
      "Fun Fact: Cheese gives both fats and proteins!"
    ]
  }
};

function startDigestion() {
  const carb = document.getElementById("carbSelect").value;
  const protein = document.getElementById("proteinSelect").value;
  const fat = document.getElementById("fatSelect").value;

  const output = document.getElementById("digestionOutput");
  output.innerHTML = "";

  [carb, protein, fat].forEach(food => {
    const data = digestionFacts[food];
    const section = document.createElement("div");
    section.innerHTML = `<h3>${data.type}: ${capitalize(food)}</h3><ul>${data.path.map(step => `<li>${step}</li>`).join('')}</ul>`;
    output.appendChild(section);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
