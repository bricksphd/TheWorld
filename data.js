const everyone = [
  { name: "Everyone", percent: 1 }
]

//https://ourworldindata.org/gender-ratio
const genderPercents = [
  { name: "Female", percent: .496 },
  { name: "Male", percent: .504 }
]

const continentPercents = [
  { name: "Asia", percent: .5969 },
  { name: "Africa", percent: .1636 },
  { name: "Europe", percent: .0994 },
  { name: "North America", percent: .0779 },
  { name: "South America", percent: .0568 },
  { name: "Oceania", percent: .0054 },
]

const churchMembership = [
  { name: "Member of the Church of Jesus Christ of Latter-day Saints", percent: .0022 }
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

const worldExtremePoverty = [
  {name:"Living Extreme Poverty", percent:.1},
]

const sanitaryToilets = [
  {name:"Sanitary Toilets", percent:.4545}
]

const internetUsers = [
  {name:"Internet Users", percent:.62}
]

const religions = [
  {name:"Christian", percent:2.3/7.8},
  {name:"Islam", percent:1.6/7.8},
  {name:"Hinduism", percent:1.11/7.8},
  {name:"No Religion", percent:1.1/7.8},
  {name:"Buddhism", percent:.4/7.8},
  {name:"Folk Religion", percent:.6/7.8},
  {name:"Shinto", percent:.027/7.8},
  {name:"Sikhism", percent:.024/7.8},
  {name:"Judaism", percent:.014/7.8},
  {name:"Janism", percent:.008/7.8},
  {name:"Bahai Faith", percent:.0073/7.8},
  {name:"Cao Dai", percent:.001/7.8},
  {name:"Cheondoism", percent:.003/7.8},
  {name:"Tenrikyo", percent:.002/7.8},
  {name:"Wicca", percent:.001/7.8},
  {name:"Church of World Messianity", percent:.001/7.8},
]

function fillUp(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].percent;
  }
  array.push({ name: 'Other', percent: 1 - sum })
}

// fillUp(continentPercents);
// fillUp(churchMembership);
// fillUp(languagePercents);
// fillUp(englishSpeakingPercent);
// fillUp(worldExtremePoverty);


let arrays = [
  { partition: "Everyone", array: everyone },
  { partition: "Gender", array: genderPercents },
  { partition: "Continent Population", array: continentPercents },
  { partition: "Chunch Membership", array: churchMembership },
  { partition: "Native Languages", array: languagePercents },
  { partition: "Native English Speakers", array: englishSpeakingPercent },
  { partition: "World Extreme Poverty", array: worldExtremePoverty },
  { partition: "Sanitary Toilets", array: sanitaryToilets },
  { partition: "Internet Users", array: internetUsers },
  { partition: "Religions", array: religions },
];

for(let a=0; a < arrays.length; a++){
  let array = arrays[a];
  fillUp(array.array);
}