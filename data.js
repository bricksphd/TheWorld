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

// const churchMembership = [
//   { name: "Member of the Church of Jesus Christ of Latter-day Saints", percent: .0022 }
// ];

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
  {name:"Living Extreme Poverty", percent:.08},
]

const sanitaryToilets = [
  {name:"Sanitary Toilets", percent:.4545}
]

const internetUsers = [
  {name:"Internet Users", percent:.62}
]

const religions = [
  {name:"Christian", percent:2.168/7.79},
  {name:"Islam", percent:1.599/7.79},
  {name:"No Religion", percent:1.193/7.79},
  {name:"Hinduism", percent:1.161/7.79},
  {name:"Buddhism", percent:.506/7.79},
  {name:"Chinese Traditional Religions", percent:.394/7.79},
  {name:"Ethnic Religions", percent:.3/7.79},
  {name:"Aftrican Traditional Religions", percent:.1/7.79},
  {name:"Sikhism", percent:.026/7.79},
  {name:"Spiritism", percent:.015/7.79},
  {name:"Judaism", percent:.0147/7.79},
  {name:"Baha'i", percent:.005/7.79},
  {name:"Janism", percent:.0042/7.79},
  {name:"Shinto", percent:.004/7.79},
  {name:"Cao Dai", percent:.004/7.79},
  {name:"Zoroastrianism", percent:.0026/7.79},
  {name:"Tenrikyo", percent:.002/7.79},
  {name:"Animism", percent:.0019/7.79},
  {name:"Neo-Paganism", percent:.001/7.79},
  {name:"Unitarian Universalism", percent:.0008/7.79},
  {name:"Rastafari", percent:.0006/7.79}
]

function fillUp(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].percent;
  }
  array.push({ name: 'Other', percent: 1 - sum })
}



let arrays = [
  { partition: "Everyone", array: everyone },
  { partition: "Gender", array: genderPercents },
  { partition: "Continent Population", array: continentPercents },
 // { partition: "Chunch Membership", array: churchMembership },
  { partition: "Native Languages", array: languagePercents, shortSource: 'Wikipedia', source:'https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers', comments:['Languages grouped by branch, whith the exception of romance languages, which are listed individually.'], updated:'November, 2020' },
  { partition: "Native English Speakers", array: englishSpeakingPercent, shortSource: 'Wikipedia', source:'https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers', comments:['Languages grouped by branch, whith the exception of romance languages, which are listed individually.'], updated:'November, 2020' },
  { partition: "World Extreme Poverty", array: worldExtremePoverty, shortSource:'United Nations', source:'https://www.un.org/en/sections/issues-depth/poverty/', comments:['From the UN website: "In 2018, almost 8 per cent of the world’s workers and their families lived on less than US$1.90 per person per day."'], updated:"November, 2020" },
  { partition: "Sanitary Toilets", array: sanitaryToilets, shortSource:'United Nations', source:'https://www.un.org/en/observances/toilet-day', comments:['From the UN website, "4.2 billion people living without access to safely managed sanitation." '], updated: 'November, 2020' },
  { partition: "Internet Users", array: internetUsers },
  { partition: "Religions", array: religions, sourceShort:'Wikipedia', source:'https://en.wikipedia.org/wiki/List_of_religious_populations', comments:['Note that these numbers can change dramatically depending on the source.'], updated:'November 2020' },
];

for(let a=0; a < arrays.length; a++){
  let array = arrays[a];
  fillUp(array.array);
}