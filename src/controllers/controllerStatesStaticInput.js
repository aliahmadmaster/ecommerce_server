const { country } = require("../models");
const db = require("../models");

var statesPakistan = [
  {
    name: "Azad Kashmir",
    state_code: "JK",
  },
  {
    name: "Balochistan",
    state_code: "BA",
  },
  {
    name: "Federally Administered Tribal Areas",
    state_code: "TA",
  },
  {
    name: "Gilgit-Baltistan",
    state_code: "GB",
  },
  {
    name: "Islamabad Capital Territory",
    state_code: "IS",
  },
  {
    name: "Khyber Pakhtunkhwa",
    state_code: "KP",
  },
  {
    name: "Punjab",
    state_code: "PB",
  },
  {
    name: "Sindh",
    state_code: "SD",
  },
];
var statesUSA = [
  {
    name: "Alabama",
    state_code: "AL",
  },
  {
    name: "Alaska",
    state_code: "AK",
  },
  {
    name: "American Samoa",
    state_code: "AS",
  },
  {
    name: "Arizona",
    state_code: "AZ",
  },
  {
    name: "Arkansas",
    state_code: "AR",
  },
  {
    name: "Baker Island",
    state_code: "UM-81",
  },
  {
    name: "California",
    state_code: "CA",
  },
  {
    name: "Colorado",
    state_code: "CO",
  },
  {
    name: "Connecticut",
    state_code: "CT",
  },
  {
    name: "Delaware",
    state_code: "DE",
  },
  {
    name: "District of Columbia",
    state_code: "DC",
  },
  {
    name: "Florida",
    state_code: "FL",
  },
  {
    name: "Georgia",
    state_code: "GA",
  },
  {
    name: "Guam",
    state_code: "GU",
  },
  {
    name: "Hawaii",
    state_code: "HI",
  },
  {
    name: "Howland Island",
    state_code: "UM-84",
  },
  {
    name: "Idaho",
    state_code: "ID",
  },
  {
    name: "Illinois",
    state_code: "IL",
  },
  {
    name: "Indiana",
    state_code: "IN",
  },
  {
    name: "Iowa",
    state_code: "IA",
  },
  {
    name: "Jarvis Island",
    state_code: "UM-86",
  },
  {
    name: "Johnston Atoll",
    state_code: "UM-67",
  },
  {
    name: "Kansas",
    state_code: "KS",
  },
  {
    name: "Kentucky",
    state_code: "KY",
  },
  {
    name: "Kingman Reef",
    state_code: "UM-89",
  },
  {
    name: "Louisiana",
    state_code: "LA",
  },
  {
    name: "Maine",
    state_code: "ME",
  },
  {
    name: "Maryland",
    state_code: "MD",
  },
  {
    name: "Massachusetts",
    state_code: "MA",
  },
  {
    name: "Michigan",
    state_code: "MI",
  },
  {
    name: "Midway Atoll",
    state_code: "UM-71",
  },
  {
    name: "Minnesota",
    state_code: "MN",
  },
  {
    name: "Mississippi",
    state_code: "MS",
  },
  {
    name: "Missouri",
    state_code: "MO",
  },
  {
    name: "Montana",
    state_code: "MT",
  },
  {
    name: "Navassa Island",
    state_code: "UM-76",
  },
  {
    name: "Nebraska",
    state_code: "NE",
  },
  {
    name: "Nevada",
    state_code: "NV",
  },
  {
    name: "New Hampshire",
    state_code: "NH",
  },
  {
    name: "New Jersey",
    state_code: "NJ",
  },
  {
    name: "New Mexico",
    state_code: "NM",
  },
  {
    name: "New York",
    state_code: "NY",
  },
  {
    name: "North Carolina",
    state_code: "NC",
  },
  {
    name: "North Dakota",
    state_code: "ND",
  },
  {
    name: "Northern Mariana Islands",
    state_code: "MP",
  },
  {
    name: "Ohio",
    state_code: "OH",
  },
  {
    name: "Oklahoma",
    state_code: "OK",
  },
  {
    name: "Oregon",
    state_code: "OR",
  },
  {
    name: "Palmyra Atoll",
    state_code: "UM-95",
  },
  {
    name: "Pennsylvania",
    state_code: "PA",
  },
  {
    name: "Puerto Rico",
    state_code: "PR",
  },
  {
    name: "Rhode Island",
    state_code: "RI",
  },
  {
    name: "South Carolina",
    state_code: "SC",
  },
  {
    name: "South Dakota",
    state_code: "SD",
  },
  {
    name: "Tennessee",
    state_code: "TN",
  },
  {
    name: "Texas",
    state_code: "TX",
  },
  {
    name: "United States Minor Outlying Islands",
    state_code: "UM",
  },
  {
    name: "United States Virgin Islands",
    state_code: "VI",
  },
  {
    name: "Utah",
    state_code: "UT",
  },
  {
    name: "Vermont",
    state_code: "VT",
  },
  {
    name: "Virginia",
    state_code: "VA",
  },
  {
    name: "Wake Island",
    state_code: "UM-79",
  },
  {
    name: "Washington",
    state_code: "WA",
  },
  {
    name: "West Virginia",
    state_code: "WV",
  },
  {
    name: "Wisconsin",
    state_code: "WI",
  },
  {
    name: "Wyoming",
    state_code: "WY",
  },
];
var statesChina = [
  {
    name: "Anhui",
    state_code: "AH",
  },
  {
    name: "Beijing",
    state_code: "BJ",
  },
  {
    name: "Chongqing",
    state_code: "CQ",
  },
  {
    name: "Fujian",
    state_code: "FJ",
  },
  {
    name: "Gansu",
    state_code: "GS",
  },
  {
    name: "Guangdong",
    state_code: "GD",
  },
  {
    name: "Guangxi Zhuang Autonomous Region",
    state_code: "GX",
  },
  {
    name: "Guizhou",
    state_code: "GZ",
  },
  {
    name: "Hainan",
    state_code: "HI",
  },
  {
    name: "Hebei",
    state_code: "HE",
  },
  {
    name: "Heilongjiang",
    state_code: "HL",
  },
  {
    name: "Henan",
    state_code: "HA",
  },
  {
    name: "Hong Kong",
    state_code: "HK",
  },
  {
    name: "Hubei",
    state_code: "HB",
  },
  {
    name: "Hunan",
    state_code: "HN",
  },
  {
    name: "Inner Mongolia",
    state_code: "NM",
  },
  {
    name: "Jiangsu",
    state_code: "JS",
  },
  {
    name: "Jiangxi",
    state_code: "JX",
  },
  {
    name: "Jilin",
    state_code: "JL",
  },
  {
    name: "Keelung",
    state_code: "TW-KEE",
  },
  {
    name: "Liaoning",
    state_code: "LN",
  },
  {
    name: "Macau",
    state_code: "MO",
  },
  {
    name: "Ningxia Hui Autonomous Region",
    state_code: "NX",
  },
  {
    name: "Qinghai",
    state_code: "QH",
  },
  {
    name: "Shaanxi",
    state_code: "SN",
  },
  {
    name: "Shandong",
    state_code: "SD",
  },
  {
    name: "Shanghai",
    state_code: "SH",
  },
  {
    name: "Shanxi",
    state_code: "SX",
  },
  {
    name: "Sichuan",
    state_code: "SC",
  },
  {
    name: "Taiwan Province, People's Republic of China",
    state_code: "TW",
  },
  {
    name: "Tibet Autonomous Region",
    state_code: "XZ",
  },
  {
    name: "Xinjiang",
    state_code: "XJ",
  },
  {
    name: "Yunnan",
    state_code: "YN",
  },
  {
    name: "Zhejiang",
    state_code: "ZJ",
  },
];
var statesIndia = [
  {
    name: "Andaman and Nicobar Islands",
    state_code: "AN",
  },
  {
    name: "Andhra Pradesh",
    state_code: "AP",
  },
  {
    name: "Arunachal Pradesh",
    state_code: "AR",
  },
  {
    name: "Assam",
    state_code: "AS",
  },
  {
    name: "Bihar",
    state_code: "BR",
  },
  {
    name: "Chandigarh",
    state_code: "CH",
  },
  {
    name: "Chhattisgarh",
    state_code: "CT",
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    state_code: "DH",
  },
  {
    name: "Delhi",
    state_code: "DL",
  },
  {
    name: "Goa",
    state_code: "GA",
  },
  {
    name: "Gujarat",
    state_code: "GJ",
  },
  {
    name: "Haryana",
    state_code: "HR",
  },
  {
    name: "Himachal Pradesh",
    state_code: "HP",
  },
  {
    name: "Jammu and Kashmir",
    state_code: "JK",
  },
  {
    name: "Jharkhand",
    state_code: "JH",
  },
  {
    name: "Karnataka",
    state_code: "KA",
  },
  {
    name: "Kerala",
    state_code: "KL",
  },
  {
    name: "Ladakh",
    state_code: "LA",
  },
  {
    name: "Lakshadweep",
    state_code: "LD",
  },
  {
    name: "Madhya Pradesh",
    state_code: "MP",
  },
  {
    name: "Maharashtra",
    state_code: "MH",
  },
  {
    name: "Manipur",
    state_code: "MN",
  },
  {
    name: "Meghalaya",
    state_code: "ML",
  },
  {
    name: "Mizoram",
    state_code: "MZ",
  },
  {
    name: "Nagaland",
    state_code: "NL",
  },
  {
    name: "Odisha",
    state_code: "OR",
  },
  {
    name: "Puducherry",
    state_code: "PY",
  },
  {
    name: "Punjab",
    state_code: "PB",
  },
  {
    name: "Rajasthan",
    state_code: "RJ",
  },
  {
    name: "Sikkim",
    state_code: "SK",
  },
  {
    name: "Tamil Nadu",
    state_code: "TN",
  },
  {
    name: "Telangana",
    state_code: "TG",
  },
  {
    name: "Tripura",
    state_code: "TR",
  },
  {
    name: "Uttar Pradesh",
    state_code: "UP",
  },
  {
    name: "Uttarakhand",
    state_code: "UT",
  },
  {
    name: "West Bengal",
    state_code: "WB",
  },
];
var statesUK = [
  {
    name: "Aberdeen",
    state_code: "ABE",
  },
  {
    name: "Aberdeenshire",
    state_code: "ABD",
  },
  {
    name: "Angus",
    state_code: "ANS",
  },
  {
    name: "Antrim",
    state_code: "ANT",
  },
  {
    name: "Antrim and Newtownabbey",
    state_code: "ANN",
  },
  {
    name: "Ards",
    state_code: "ARD",
  },
  {
    name: "Ards and North Down",
    state_code: "AND",
  },
  {
    name: "Argyll and Bute",
    state_code: "AGB",
  },
  {
    name: "Armagh City and District Council",
    state_code: "ARM",
  },
  {
    name: "Armagh, Banbridge and Craigavon",
    state_code: "ABC",
  },
  {
    name: "Ascension Island",
    state_code: "SH-AC",
  },
  {
    name: "Ballymena Borough",
    state_code: "BLA",
  },
  {
    name: "Ballymoney",
    state_code: "BLY",
  },
  {
    name: "Banbridge",
    state_code: "BNB",
  },
  {
    name: "Barnsley",
    state_code: "BNS",
  },
  {
    name: "Bath and North East Somerset",
    state_code: "BAS",
  },
  {
    name: "Bedford",
    state_code: "BDF",
  },
  {
    name: "Belfast district",
    state_code: "BFS",
  },
  {
    name: "Birmingham",
    state_code: "BIR",
  },
  {
    name: "Blackburn with Darwen",
    state_code: "BBD",
  },
  {
    name: "Blackpool",
    state_code: "BPL",
  },
  {
    name: "Blaenau Gwent County Borough",
    state_code: "BGW",
  },
  {
    name: "Bolton",
    state_code: "BOL",
  },
  {
    name: "Bournemouth",
    state_code: "BMH",
  },
  {
    name: "Bracknell Forest",
    state_code: "BRC",
  },
  {
    name: "Bradford",
    state_code: "BRD",
  },
  {
    name: "Bridgend County Borough",
    state_code: "BGE",
  },
  {
    name: "Brighton and Hove",
    state_code: "BNH",
  },
  {
    name: "Buckinghamshire",
    state_code: "BKM",
  },
  {
    name: "Bury",
    state_code: "BUR",
  },
  {
    name: "Caerphilly County Borough",
    state_code: "CAY",
  },
  {
    name: "Calderdale",
    state_code: "CLD",
  },
  {
    name: "Cambridgeshire",
    state_code: "CAM",
  },
  {
    name: "Carmarthenshire",
    state_code: "CMN",
  },
  {
    name: "Carrickfergus Borough Council",
    state_code: "CKF",
  },
  {
    name: "Castlereagh",
    state_code: "CSR",
  },
  {
    name: "Causeway Coast and Glens",
    state_code: "CCG",
  },
  {
    name: "Central Bedfordshire",
    state_code: "CBF",
  },
  {
    name: "Ceredigion",
    state_code: "CGN",
  },
  {
    name: "Cheshire East",
    state_code: "CHE",
  },
  {
    name: "Cheshire West and Chester",
    state_code: "CHW",
  },
  {
    name: "City and County of Cardiff",
    state_code: "CRF",
  },
  {
    name: "City and County of Swansea",
    state_code: "SWA",
  },
  {
    name: "City of Bristol",
    state_code: "BST",
  },
  {
    name: "City of Derby",
    state_code: "DER",
  },
  {
    name: "City of Kingston upon Hull",
    state_code: "KHL",
  },
  {
    name: "City of Leicester",
    state_code: "LCE",
  },
  {
    name: "City of London",
    state_code: "LND",
  },
  {
    name: "City of Nottingham",
    state_code: "NGM",
  },
  {
    name: "City of Peterborough",
    state_code: "PTE",
  },
  {
    name: "City of Plymouth",
    state_code: "PLY",
  },
  {
    name: "City of Portsmouth",
    state_code: "POR",
  },
  {
    name: "City of Southampton",
    state_code: "STH",
  },
  {
    name: "City of Stoke-on-Trent",
    state_code: "STE",
  },
  {
    name: "City of Sunderland",
    state_code: "SND",
  },
  {
    name: "City of Westminster",
    state_code: "WSM",
  },
  {
    name: "City of Wolverhampton",
    state_code: "WLV",
  },
  {
    name: "City of York",
    state_code: "YOR",
  },
  {
    name: "Clackmannanshire",
    state_code: "CLK",
  },
  {
    name: "Coleraine Borough Council",
    state_code: "CLR",
  },
  {
    name: "Conwy County Borough",
    state_code: "CWY",
  },
  {
    name: "Cookstown District Council",
    state_code: "CKT",
  },
  {
    name: "Cornwall",
    state_code: "CON",
  },
  {
    name: "County Durham",
    state_code: "DUR",
  },
  {
    name: "Coventry",
    state_code: "COV",
  },
  {
    name: "Craigavon Borough Council",
    state_code: "CGV",
  },
  {
    name: "Cumbria",
    state_code: "CMA",
  },
  {
    name: "Darlington",
    state_code: "DAL",
  },
  {
    name: "Denbighshire",
    state_code: "DEN",
  },
  {
    name: "Derbyshire",
    state_code: "DBY",
  },
  {
    name: "Derry City and Strabane",
    state_code: "DRS",
  },
  {
    name: "Derry City Council",
    state_code: "DRY",
  },
  {
    name: "Devon",
    state_code: "DEV",
  },
  {
    name: "Doncaster",
    state_code: "DNC",
  },
  {
    name: "Dorset",
    state_code: "DOR",
  },
  {
    name: "Down District Council",
    state_code: "DOW",
  },
  {
    name: "Dudley",
    state_code: "DUD",
  },
  {
    name: "Dumfries and Galloway",
    state_code: "DGY",
  },
  {
    name: "Dundee",
    state_code: "DND",
  },
  {
    name: "Dungannon and South Tyrone Borough Council",
    state_code: "DGN",
  },
  {
    name: "East Ayrshire",
    state_code: "EAY",
  },
  {
    name: "East Dunbartonshire",
    state_code: "EDU",
  },
  {
    name: "East Lothian",
    state_code: "ELN",
  },
  {
    name: "East Renfrewshire",
    state_code: "ERW",
  },
  {
    name: "East Riding of Yorkshire",
    state_code: "ERY",
  },
  {
    name: "East Sussex",
    state_code: "ESX",
  },
  {
    name: "Edinburgh",
    state_code: "EDH",
  },
  {
    name: "England",
    state_code: "ENG",
  },
  {
    name: "Essex",
    state_code: "ESS",
  },
  {
    name: "Falkirk",
    state_code: "FAL",
  },
  {
    name: "Fermanagh and Omagh",
    state_code: "FMO",
  },
  {
    name: "Fermanagh District Council",
    state_code: "FER",
  },
  {
    name: "Fife",
    state_code: "FIF",
  },
  {
    name: "Flintshire",
    state_code: "FLN",
  },
  {
    name: "Gateshead",
    state_code: "GAT",
  },
  {
    name: "Glasgow",
    state_code: "GLG",
  },
  {
    name: "Gloucestershire",
    state_code: "GLS",
  },
  {
    name: "Gwynedd",
    state_code: "GWN",
  },
  {
    name: "Halton",
    state_code: "HAL",
  },
  {
    name: "Hampshire",
    state_code: "HAM",
  },
  {
    name: "Hartlepool",
    state_code: "HPL",
  },
  {
    name: "Herefordshire",
    state_code: "HEF",
  },
  {
    name: "Hertfordshire",
    state_code: "HRT",
  },
  {
    name: "Highland",
    state_code: "HLD",
  },
  {
    name: "Inverclyde",
    state_code: "IVC",
  },
  {
    name: "Isle of Wight",
    state_code: "IOW",
  },
  {
    name: "Isles of Scilly",
    state_code: "IOS",
  },
  {
    name: "Kent",
    state_code: "KEN",
  },
  {
    name: "Kirklees",
    state_code: "KIR",
  },
  {
    name: "Knowsley",
    state_code: "KWL",
  },
  {
    name: "Lancashire",
    state_code: "LAN",
  },
  {
    name: "Larne Borough Council",
    state_code: "LRN",
  },
  {
    name: "Leeds",
    state_code: "LDS",
  },
  {
    name: "Leicestershire",
    state_code: "LEC",
  },
  {
    name: "Limavady Borough Council",
    state_code: "LMV",
  },
  {
    name: "Lincolnshire",
    state_code: "LIN",
  },
  {
    name: "Lisburn and Castlereagh",
    state_code: "LBC",
  },
  {
    name: "Lisburn City Council",
    state_code: "LSB",
  },
  {
    name: "Liverpool",
    state_code: "LIV",
  },
  {
    name: "London Borough of Barking and Dagenham",
    state_code: "BDG",
  },
  {
    name: "London Borough of Barnet",
    state_code: "BNE",
  },
  {
    name: "London Borough of Bexley",
    state_code: "BEX",
  },
  {
    name: "London Borough of Brent",
    state_code: "BEN",
  },
  {
    name: "London Borough of Bromley",
    state_code: "BRY",
  },
  {
    name: "London Borough of Camden",
    state_code: "CMD",
  },
  {
    name: "London Borough of Croydon",
    state_code: "CRY",
  },
  {
    name: "London Borough of Ealing",
    state_code: "EAL",
  },
  {
    name: "London Borough of Enfield",
    state_code: "ENF",
  },
  {
    name: "London Borough of Hackney",
    state_code: "HCK",
  },
  {
    name: "London Borough of Hammersmith and Fulham",
    state_code: "HMF",
  },
  {
    name: "London Borough of Haringey",
    state_code: "HRY",
  },
  {
    name: "London Borough of Harrow",
    state_code: "HRW",
  },
  {
    name: "London Borough of Havering",
    state_code: "HAV",
  },
  {
    name: "London Borough of Hillingdon",
    state_code: "HIL",
  },
  {
    name: "London Borough of Hounslow",
    state_code: "HNS",
  },
  {
    name: "London Borough of Islington",
    state_code: "ISL",
  },
  {
    name: "London Borough of Lambeth",
    state_code: "LBH",
  },
  {
    name: "London Borough of Lewisham",
    state_code: "LEW",
  },
  {
    name: "London Borough of Merton",
    state_code: "MRT",
  },
  {
    name: "London Borough of Newham",
    state_code: "NWM",
  },
  {
    name: "London Borough of Redbridge",
    state_code: "RDB",
  },
  {
    name: "London Borough of Richmond upon Thames",
    state_code: "RIC",
  },
  {
    name: "London Borough of Southwark",
    state_code: "SWK",
  },
  {
    name: "London Borough of Sutton",
    state_code: "STN",
  },
  {
    name: "London Borough of Tower Hamlets",
    state_code: "TWH",
  },
  {
    name: "London Borough of Waltham Forest",
    state_code: "WFT",
  },
  {
    name: "London Borough of Wandsworth",
    state_code: "WND",
  },
  {
    name: "Magherafelt District Council",
    state_code: "MFT",
  },
  {
    name: "Manchester",
    state_code: "MAN",
  },
  {
    name: "Medway",
    state_code: "MDW",
  },
  {
    name: "Merthyr Tydfil County Borough",
    state_code: "MTY",
  },
  {
    name: "Metropolitan Borough of Wigan",
    state_code: "WGN",
  },
  {
    name: "Mid and East Antrim",
    state_code: "MEA",
  },
  {
    name: "Mid Ulster",
    state_code: "MUL",
  },
  {
    name: "Middlesbrough",
    state_code: "MDB",
  },
  {
    name: "Midlothian",
    state_code: "MLN",
  },
  {
    name: "Milton Keynes",
    state_code: "MIK",
  },
  {
    name: "Monmouthshire",
    state_code: "MON",
  },
  {
    name: "Moray",
    state_code: "MRY",
  },
  {
    name: "Moyle District Council",
    state_code: "MYL",
  },
  {
    name: "Neath Port Talbot County Borough",
    state_code: "NTL",
  },
  {
    name: "Newcastle upon Tyne",
    state_code: "NET",
  },
  {
    name: "Newport",
    state_code: "NWP",
  },
  {
    name: "Newry and Mourne District Council",
    state_code: "NYM",
  },
  {
    name: "Newry, Mourne and Down",
    state_code: "NMD",
  },
  {
    name: "Newtownabbey Borough Council",
    state_code: "NTA",
  },
  {
    name: "Norfolk",
    state_code: "NFK",
  },
  {
    name: "North Ayrshire",
    state_code: "NAY",
  },
  {
    name: "North Down Borough Council",
    state_code: "NDN",
  },
  {
    name: "North East Lincolnshire",
    state_code: "NEL",
  },
  {
    name: "North Lanarkshire",
    state_code: "NLK",
  },
  {
    name: "North Lincolnshire",
    state_code: "NLN",
  },
  {
    name: "North Somerset",
    state_code: "NSM",
  },
  {
    name: "North Tyneside",
    state_code: "NTY",
  },
  {
    name: "North Yorkshire",
    state_code: "NYK",
  },
  {
    name: "Northamptonshire",
    state_code: "NTH",
  },
  {
    name: "Northern Ireland",
    state_code: "NIR",
  },
  {
    name: "Northumberland",
    state_code: "NBL",
  },
  {
    name: "Nottinghamshire",
    state_code: "NTT",
  },
  {
    name: "Oldham",
    state_code: "OLD",
  },
  {
    name: "Omagh District Council",
    state_code: "OMH",
  },
  {
    name: "Orkney Islands",
    state_code: "ORK",
  },
  {
    name: "Outer Hebrides",
    state_code: "ELS",
  },
  {
    name: "Oxfordshire",
    state_code: "OXF",
  },
  {
    name: "Pembrokeshire",
    state_code: "PEM",
  },
  {
    name: "Perth and Kinross",
    state_code: "PKN",
  },
  {
    name: "Poole",
    state_code: "POL",
  },
  {
    name: "Powys",
    state_code: "POW",
  },
  {
    name: "Reading",
    state_code: "RDG",
  },
  {
    name: "Redcar and Cleveland",
    state_code: "RCC",
  },
  {
    name: "Renfrewshire",
    state_code: "RFW",
  },
  {
    name: "Rhondda Cynon Taf",
    state_code: "RCT",
  },
  {
    name: "Rochdale",
    state_code: "RCH",
  },
  {
    name: "Rotherham",
    state_code: "ROT",
  },
  {
    name: "Royal Borough of Greenwich",
    state_code: "GRE",
  },
  {
    name: "Royal Borough of Kensington and Chelsea",
    state_code: "KEC",
  },
  {
    name: "Royal Borough of Kingston upon Thames",
    state_code: "KTT",
  },
  {
    name: "Rutland",
    state_code: "RUT",
  },
  {
    name: "Saint Helena",
    state_code: "SH-HL",
  },
  {
    name: "Salford",
    state_code: "SLF",
  },
  {
    name: "Sandwell",
    state_code: "SAW",
  },
  {
    name: "Scotland",
    state_code: "SCT",
  },
  {
    name: "Scottish Borders",
    state_code: "SCB",
  },
  {
    name: "Sefton",
    state_code: "SFT",
  },
  {
    name: "Sheffield",
    state_code: "SHF",
  },
  {
    name: "Shetland Islands",
    state_code: "ZET",
  },
  {
    name: "Shropshire",
    state_code: "SHR",
  },
  {
    name: "Slough",
    state_code: "SLG",
  },
  {
    name: "Solihull",
    state_code: "SOL",
  },
  {
    name: "Somerset",
    state_code: "SOM",
  },
  {
    name: "South Ayrshire",
    state_code: "SAY",
  },
  {
    name: "South Gloucestershire",
    state_code: "SGC",
  },
  {
    name: "South Lanarkshire",
    state_code: "SLK",
  },
  {
    name: "South Tyneside",
    state_code: "STY",
  },
  {
    name: "Southend-on-Sea",
    state_code: "SOS",
  },
  {
    name: "St Helens",
    state_code: "SHN",
  },
  {
    name: "Staffordshire",
    state_code: "STS",
  },
  {
    name: "Stirling",
    state_code: "STG",
  },
  {
    name: "Stockport",
    state_code: "SKP",
  },
  {
    name: "Stockton-on-Tees",
    state_code: "STT",
  },
  {
    id: 2393,
    name: "Strabane District Council",
    state_code: "STB",
  },
  {
    name: "Suffolk",
    state_code: "SFK",
  },
  {
    name: "Surrey",
    state_code: "SRY",
  },
  {
    name: "Swindon",
    state_code: "SWD",
  },
  {
    name: "Tameside",
    state_code: "TAM",
  },
  {
    name: "Telford and Wrekin",
    state_code: "TFW",
  },
  {
    name: "Thurrock",
    state_code: "THR",
  },
  {
    name: "Torbay",
    state_code: "TOB",
  },
  {
    name: "Torfaen",
    state_code: "TOF",
  },
  {
    name: "Trafford",
    state_code: "TRF",
  },
  {
    name: "United Kingdom",
    state_code: "UKM",
  },
  {
    name: "Vale of Glamorgan",
    state_code: "VGL",
  },
  {
    name: "Wakefield",
    state_code: "WKF",
  },
  {
    name: "Wales",
    state_code: "WLS",
  },
  {
    name: "Walsall",
    state_code: "WLL",
  },
  {
    name: "Warrington",
    state_code: "WRT",
  },
  {
    name: "Warwickshire",
    state_code: "WAR",
  },
  {
    name: "West Berkshire",
    state_code: "WBK",
  },
  {
    name: "West Dunbartonshire",
    state_code: "WDU",
  },
  {
    name: "West Lothian",
    state_code: "WLN",
  },
  {
    name: "West Sussex",
    state_code: "WSX",
  },
  {
    name: "Wiltshire",
    state_code: "WIL",
  },
  {
    name: "Windsor and Maidenhead",
    state_code: "WNM",
  },
  {
    name: "Wirral",
    state_code: "WRL",
  },
  {
    name: "Wokingham",
    state_code: "WOK",
  },
  {
    name: "Worcestershire",
    state_code: "WOR",
  },
  {
    name: "Wrexham County Borough",
    state_code: "WRX",
  },
];
var stateAfghanistan = [
  {
    name: "Badakhshan",
    state_code: "BDS",
  },
  {
    name: "Badghis",
    state_code: "BDG",
  },
  {
    name: "Baghlan",
    state_code: "BGL",
  },
  {
    name: "Balkh",
    state_code: "BAL",
  },
  {
    name: "Bamyan",
    state_code: "BAM",
  },
  {
    name: "Daykundi",
    state_code: "DAY",
  },
  {
    name: "Farah",
    state_code: "FRA",
  },
  {
    name: "Faryab",
    state_code: "FYB",
  },
  {
    name: "Ghazni",
    state_code: "GHA",
  },
  {
    name: "Ghōr",
    state_code: "GHO",
  },
  {
    name: "Helmand",
    state_code: "HEL",
  },
  {
    name: "Herat",
    state_code: "HER",
  },
  { name: "Jowzjan", state_code: "JOW" },
  {
    name: "Kabul",
    state_code: "KAB",
  },
  {
    name: "Kandahar",
    state_code: "KAN",
  },
  {
    name: "Kapisa",
    state_code: "KAP",
  },
  {
    name: "Khost",
    state_code: "KHO",
  },
  {
    name: "Kunar",
    state_code: "KNR",
  },
  {
    name: "Kunduz Province",
    state_code: "KDZ",
  },
  {
    name: "Laghman",
    state_code: "LAG",
  },
  {
    name: "Logar",
    state_code: "LOG",
  },
  {
    name: "Nangarhar",
    state_code: "NAN",
  },
  {
    name: "Nimruz",
    state_code: "NIM",
  },
  {
    name: "Nuristan",
    state_code: "NUR",
  },
  {
    name: "Paktia",
    state_code: "PIA",
  },
  {
    name: "Paktika",
    state_code: "PKA",
  },
  {
    name: "Panjshir",
    state_code: "PAN",
  },
  {
    name: "Parwan",
    state_code: "PAR",
  },
  {
    name: "Samangan",
    state_code: "SAM",
  },
  {
    name: "Sar-e Pol",
    state_code: "SAR",
  },
  {
    name: "Takhar",
    state_code: "TAK",
  },
  {
    name: "Urozgan",
    state_code: "URU",
  },
  {
    name: "Zabul",
    state_code: "ZAB",
  },
];
async function funStates() {
  var countries = await db.country.find().select("name _id");
  db.state.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      countries.map((country) => {
        if (country.name == "PAKISTAN") {
          statesPakistan.map((pk) => {
            pk["country"] = country.id;
          });
          statesPakistan.map((stPK) => db.state(stPK).save());
          console.log("statesPakistan save");
        }
        if (country.name == "UNITED STATES") {
          statesUSA.map((us) => {
            us["country"] = country.id;
          });
          statesUSA.map((stUS) => db.state(stUS).save());
          console.log("statesUSA save");
        }
        if (country.name == "CHINA") {
          statesChina.map((cn) => {
            cn["country"] = country.id;
          });
          statesChina.map((stCN) => db.state(stCN).save());
          console.log("statesChina save");
        }
        if (country.name == "INDIA") {
          statesIndia.map((ind) => {
            ind["country"] = country.id;
          });
          statesIndia.map((stIN) => db.state(stIN).save());
          console.log("statesIndia save");
        }
        if (country.name == "UNITED KINGDOM") {
          statesUK.map((uk) => {
            uk["country"] = country.id;
          });
          statesUK.map((stUK) => db.state(stUK).save());
          console.log("statesUK save");
        }
        if (country.name == "AFGHANISTAN") {
          stateAfghanistan.map((af) => {
            af["country"] = country.id;
          });
          stateAfghanistan.map((stAf) => db.state(stAf).save());
          console.log("stateAfghanistan save");
        }
      });
    }
  });
}
function loadStatesStaticData() {
  funStates();
}
module.exports = loadStatesStaticData;
