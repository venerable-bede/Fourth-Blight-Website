$(document).ready(function(){
    $(".inputButton").click(function(){
        $(".randomDiseaseInfo").html(function(){
          var diseasePrefix = [
            "Cow",
            "Chicken",
            "Swine",
            "Avian",
            "Hound",
            "Dragon",
            "Goblin",
            "Troll",
            "Hand",
            "Mouth",
            "Foot",
            "Eye",
            "Gold",
            "Silver",
            "Copper",
            "Red",
            "Yellow",
            "Blue",
            "Green",
            "Purple",
            "Pink",
            "Black",
            "White",
            "Gut",
            "Throat",
            "Tongue",
            "Blood",
            "Fowl",
            "Rat",
            "Flea",
            "Jaw",
            "Heart",
            "Mule",
            "Wolf",
            "Devil",
            "Violet",
            "Cat",
            "Swamp",
            "Bog",
            "Sea",
            "River",
            "Tree",
            "Forest",
            "Mountain",
            "Winter",
            "Summer",
            "Fall",
            "Spring",
            "Spirit",
            "Rock",
            "Ruby"
          ];

          var diseaseType = [
            "Fever",
            "Blight",
            "Pox",
            "Drought",
            "Flu",
            "Sickness",
            "Plague",
            "Death",
            "Syndrome",
            "Disorder",
            "Disease",
            "Mumps",
            "Warts",
            "Boils",
            "Sores",
            "Affliction",
            "Hemophelia",
            "Shivers",
            "Rash",
            "Blindness",
            "Cough",
            "Paralysis",
            "Hunger",
            "Hysteria"
          ];

          var diseaseEffect = [
            "muscle weakness",
            "partial blindness",
            "partial paralysis",
            "auditory hallucinations",
            "loss of appetite",
            "numbness",
            "gastric distress",
            "sneezing",
            "red eyes",
            "headaches",
            "difficulty swallowing",
            "nausea",
            "difficulty concentrating",
            "loss of hearing",
            "dry mouth",
            "paranoia",
            "muscle spasms",
            "fragile bones",
            "moodiness",
            "blackened flesh",
            "reddened flesh",
            "swollen throat",
            "hair loss",
            "drowsiness",
            "disorientation",
            "loss of hearing",
            "delusions",
            "unpleasant smell",
            "chest pains",
            "irritability",
            "impaired cognitive abilities",
            "ashen skin",
            "red spots",
            "eye irritation",
            "unusually-colored mucus",
            "partial paralysis",
            "slurred speech",
            "thick mucus",
            "bloody vomit",
            "seizures",
            "oozing sores",
            "delusions",
            "tingling in extremities",
            "painful sores",
            "black oily vomit",
            "swolen hands",
            "swolen feet",
            "body-wide pins & needles",
            "fainting",
            "uncontrollable gas",
            "heart murmurs",
            "short of breath",
            "weight gain",
            "weight loss",
            "muscle degeneration",
            "bone dengeneration",
            "vertigo",
            "uncontrollable shaking",
            "burning eyes",
            "sensitivity to light",
            "spontaneus vein erruption",
            "total paralysis",
            "high fever",
            "body tempurature drops",
            "unintelligible speech"
          ];

          var disease = "<b>"
          //Finds disease prefix
          var randomSelection = Math.floor(Math.random() * diseasePrefix.length);
          disease = disease + diseasePrefix[randomSelection];

          //Finds effect name
          var randomSelection = Math.floor(Math.random() * diseaseType.length);
          disease = (disease + " " + diseaseType[randomSelection]);

          //Adds effect
          for(var i = 0; i <= 3; i++)
          {
            randomSelection = (Math.floor(Math.random() * 100) - 1);
            if (i == 0)
            {
              randomSelection = Math.floor(Math.random() * diseaseEffect.length);
              disease = (disease + ":</b><br>" + diseaseEffect[randomSelection]);
            }
            else if (randomSelection >= 50)
            {
              randomSelection = Math.floor(Math.random() * diseaseEffect.length);
              disease = (disease + ", " + diseaseEffect[randomSelection]);
            }

          }
          return disease;
        });
      });
    });
