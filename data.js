const everyone = [
  { name: "everyone", percent: 1 }
]

//https://ourworldindata.org/gender-ratio
const genderPercents = [
  { name: "female", percent: .496 },
  { name: "male", percent: .504 }
]

const continentPercents = [
  { name: "asia", percent: .5969 },
  { name: "africa", percent: .1636 },
  { name: "europe", percent: .0994 },
  { name: "north america", percent: .0779 },
  { name: "south america", percent: .0568 },
  { name: "oceania", percent: .0054 },
]

const churchMembership = [
  { name: "member", percent: .0022 }
];

//https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers#:~:text=Languages%20with%20at%20least%2010%20million%20first-language%20speakers,%20%20Indo-European%20%2037%20more%20rows%20
const languagePercents = [
  { name: "Chinese", percent: .16862 },
  { name: "Indo-Aryan", percent: .15417 },
  { name: "Spanish", percent: .0594 },
  { name: "English", percent: .0492 },
  { name: "Semitic", percent: .03864 },
  { name: "Dravidian", percent: .03087 },
  { name: "Balto-Slavic", percent: .0301 },
  { name: "Portugese", percent: .02870 },
  { name: "Malayo-Polynesian", percent: .02593 },
  { name: "Japanese", percent: .01662 },
  { name: "Iranian", percent: .01289 },
  { name: "Orghuz", percent: .0121 },
  { name: "Germanic", percent: .01171 },
  { name: "Korean", percent: .01004 },
  { name: "French", percent: .01003 },
  { name: "Vietnamese", percent: .00987 },
  { name: "Volta-Niger", percent: .00842 },
  { name: "Italian", percent: .00842 },
  { name: "Chadu", percent: .0057 },
  { name: "Karluk", percent: .00461 },
  { name: "Bantu", percent: .00454 },
  { name: "Burmese", percent: .00427 },
  { name: "Romanian", percent: .00316 },
  { name: "Dutch", percent: .003 },
  { name: "Chushitic", percent: .0027 },
  { name: "Thai", percent: .00269 },
  { name: "Khmer", percent: .00216 },
  { name: "Senegambian", percent: .00188 },
  { name: "Greek", percent: .0017 },
  { name: "Kipchak", percent: .00168 },
  { name: "Hungarian", percent: .00164 },

]

const englishSpeakingPercent = [
  { name: "English", percent: .0492 },
]

function fillUp(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].percent;
  }
  array.push({ name: 'other', percent: 1 - sum })
}

fillUp(continentPercents);
fillUp(churchMembership);
fillUp(languagePercents);
fillUp(englishSpeakingPercent);


let arrays = [
  { partition: "everyone", array: everyone },
  { partition: "gender", array: genderPercents, colors: ["pink", "lightblue"] },
  { partition: "continent", array: continentPercents },
  { partition: "churchMembership", array: churchMembership },
  { partition: "languagePercents", array: languagePercents },
  { partition: "englishSpeakingPercent", array: englishSpeakingPercent },
];