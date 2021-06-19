const db = require("../../../models");

var citiesAzadKashmir = [
  {
    name: "Bhimbar",
  },
  {
    name: "Kotli",
  },
  {
    name: "Kotli District",
  },
  {
    name: "Mirpur District",
  },
  {
    name: "Muzaffarābād",
  },
  {
    name: "New Mirpur",
  },
  {
    name: "Rawala Kot",
  },
];
var citiesBalochistan = [
  {
    name: "Alik Ghund",
  },
  {
    name: "Awārān District",
  },
  {
    name: "Barkhan",
  },
  {
    name: "Bārkhān District",
  },
  {
    name: "Bela",
  },
  {
    name: "Bhag",
  },
  {
    name: "Chāgai District",
  },
  {
    name: "Chaman",
  },
  {
    name: "Chowki Jamali",
  },
  {
    name: "Dadhar",
  },
  {
    name: "Dalbandin",
  },
  {
    name: "Dera Bugti",
  },
  {
    name: "Dera Bugti District",
  },
  {
    name: "Duki",
  },
  {
    name: "Gadani",
  },
  {
    name: "Garhi Khairo",
  },
  {
    name: "Gwadar",
  },
  {
    name: "Harnai",
  },
  {
    name: "Jāfarābād District",
  },
  {
    name: "Jhal Magsi District",
  },
  {
    name: "Jiwani",
  },
  {
    name: "Kalat",
  },
  {
    name: "Kalāt District",
  },
  {
    name: "Khadan Khak",
  },
  {
    name: "Kharan",
  },
  {
    name: "Khārān District",
  },
  {
    name: "Khuzdar",
  },
  {
    name: "Khuzdār District",
  },
  {
    name: "Kohlu",
  },
  {
    name: "Kot Malik Barkhurdar",
  },
  {
    name: "Lasbela District",
  },
  {
    name: "Loralai",
  },
  {
    name: "Loralai District",
  },
  {
    name: "Mach",
  },
  {
    name: "Mastung",
  },
  {
    name: "Mastung District",
  },
  {
    name: "Mehrabpur",
  },
  {
    name: "Mūsa Khel District",
  },
  {
    name: "Nasīrābād District",
  },
  {
    name: "Nushki",
  },
  {
    name: "Ormara",
  },
  {
    name: "Panjgūr District",
  },
  {
    name: "Pasni",
  },
  {
    name: "Pishin",
  },
  {
    name: "Qila Saifullāh District",
  },
  {
    name: "Quetta",
  },
  {
    name: "Quetta District",
  },
  {
    name: "Sibi",
  },
  {
    name: "Sohbatpur",
  },
  {
    name: "Surab",
  },
  {
    name: "Turbat",
  },
  {
    name: "Usta Muhammad",
  },
  {
    name: "Uthal",
  },
  {
    name: "Zhob",
  },
  {
    name: "Zhob District",
  },
  {
    name: "Ziarat",
  },
  {
    name: "Ziārat District",
  },
];
var citiesTribal = [
  {
    name: "Alizai",
  },
  {
    name: "Gulishah Kach",
  },
  {
    name: "Landi Kotal",
  },
  {
    name: "Miran Shah",
  },
  {
    name: "North Wazīristān Agency",
  },
  {
    name: "Shinpokh",
  },
  {
    name: "South Wazīristān Agency",
  },
  {
    name: "Wana",
  },
];
var citiesGilgit = [
  {
    name: "Barishal",
  },
  {
    name: "Gilgit",
  },
  {
    name: "Skardu",
  },
];
var citiesIslamabad = [
  {
    name: "Islamabad",
  },
];
var citiesPakhtoonKhaw = [
  {
    name: "Abbottabad",
  },
  {
    name: "Akora",
  },
  {
    name: "Aman Garh",
  },
  {
    name: "Amirabad",
  },
  {
    name: "Ashanagro Koto",
  },
  {
    name: "Baffa",
  },
  {
    name: "Bannu",
  },
  {
    name: "Bat Khela",
  },
  {
    name: "Battagram",
  },
  {
    name: "Battagram District",
  },
  {
    name: "Buner District",
  },
  {
    name: "Charsadda",
  },
  {
    name: "Cherat Cantonement",
  },
  {
    name: "Chitral",
  },
  {
    name: "Dera Ismail Khan",
  },
  {
    name: "Dera Ismāīl Khān District",
  },
  {
    name: "Doaba",
  },
  {
    name: "Hangu",
  },
  {
    name: "Haripur",
  },
  {
    name: "Havelian",
  },
  {
    name: "Kakad Wari Dir Upper",
  },
  {
    name: "Karak",
  },
  {
    name: "Khalabat",
  },
  {
    name: "Kohat",
  },
  {
    name: "Kulachi",
  },
  {
    name: "Lachi",
  },
  {
    name: "Lakki",
  },
  {
    name: "Mansehra",
  },
  {
    name: "Mardan",
  },
  {
    name: "Mingora",
  },
  {
    name: "Noorabad",
  },
  {
    name: "Nowshera",
  },
  {
    name: "Nowshera Cantonment",
  },
  {
    name: "Pabbi",
  },
  {
    name: "Paharpur",
  },
  {
    name: "Peshawar",
  },
  {
    name: "Risalpur Cantonment",
  },
  {
    name: "Sarai Naurang",
  },
  {
    name: "Shabqadar",
  },
  {
    name: "Shingli Bala",
  },
  {
    name: "Shorkot",
  },
  {
    name: "Swabi",
  },
  {
    name: "Tangi",
  },
  {
    name: "Tank",
  },
  {
    name: "Thal",
  },
  {
    name: "Topi",
  },
  {
    name: "Upper Dir",
  },
  {
    name: "Utmanzai",
  },
  {
    name: "Zaida",
  },
];
var citiesSindh = [
  {
    name: "Adilpur",
  },
  {
    name: "Badin",
  },
  {
    name: "Bagarji",
  },
  {
    name: "Bandhi",
  },
  {
    name: "Berani",
  },
  {
    name: "Bhan",
  },
  {
    name: "Bhiria",
  },
  {
    name: "Bhit Shah",
  },
  {
    name: "Bozdar Wada",
  },
  {
    name: "Bulri",
  },
  {
    name: "Chak",
  },
  {
    name: "Chamber",
  },
  {
    name: "Chhor",
  },
  {
    name: "Chuhar Jamali",
  },
  {
    name: "Dadu",
  },
  {
    name: "Daromehar",
  },
  {
    name: "Darya Khan Marri",
  },
  {
    name: "Daulatpur",
  },
  {
    name: "Daur",
  },
  {
    name: "Dhoro Naro",
  },
  {
    name: "Digri",
  },
  {
    name: "Diplo",
  },
  {
    name: "Dokri",
  },
  {
    name: "Gambat",
  },
  {
    name: "Garhiyasin",
  },
  {
    name: "Gharo",
  },
  {
    name: "Ghauspur",
  },
  {
    name: "Ghotki",
  },
  {
    name: "Goth Garelo",
  },
  {
    name: "Goth Phulji",
  },
  {
    name: "Goth Radhan",
  },
  {
    name: "Hala",
  },
  {
    name: "Hingorja",
  },
  {
    name: "Hyderabad",
  },
  {
    name: "Islamkot",
  },
  {
    name: "Jacobabad",
  },
  {
    name: "Jām Sāhib",
  },
  {
    name: "Jamshoro",
  },
  {
    name: "Jati",
  },
  {
    name: "Jhol",
  },
  {
    name: "Johi",
  },
  {
    name: "Kadhan",
  },
  {
    name: "Kambar",
  },
  {
    name: "Kandhkot",
  },
  {
    name: "Kandiari",
  },
  {
    name: "Kandiaro",
  },
  {
    name: "Karachi",
  },
  {
    name: "Karaundi",
  },
  {
    name: "Kario Ghanwar",
  },
  {
    name: "Kashmor",
  },
  {
    name: "Keti Bandar",
  },
  {
    name: "Khadro",
  },
  {
    name: "Khairpur",
  },
  {
    name: "Khairpur Mir’s",
  },
  {
    name: "Khairpur Nathan Shah",
  },
  {
    name: "Khanpur Mahar",
  },
  {
    name: "Kot Diji",
  },
  {
    name: "Kotri",
  },
  {
    name: "Kunri",
  },
  {
    name: "Lakhi",
  },
  {
    name: "Larkana",
  },
  {
    name: "Madeji",
  },
  {
    name: "Malir Cantonment",
  },
  {
    name: "Matiari",
  },
  {
    name: "Matli",
  },
  {
    name: "Mehar",
  },
  {
    name: "Miro Khan",
  },
  {
    name: "Mirpur Bhtoro",
  },
  {
    name: "Mirpur Khas",
  },
  {
    name: "Mirpur Mathelo",
  },
  {
    name: "Mirpur Sakro",
  },
  {
    name: "Mirwah Gorchani",
  },
  {
    name: "Mithi",
  },
  {
    name: "Moro",
  },
  {
    name: "Nabisar",
  },
  {
    name: "Nasirabad",
  },
  {
    name: "Naudero",
  },
  {
    name: "Naukot",
  },
  {
    name: "Naushahro Firoz",
  },
  {
    name: "Nawabshah",
  },
  {
    name: "New Bādāh",
  },
  {
    name: "Pad Idan",
  },
  {
    name: "Pano Aqil",
  },
  {
    name: "Pir Jo Goth",
  },
  {
    name: "Pithoro",
  },
  {
    name: "Rajo Khanani",
  },
  {
    name: "Ranipur",
  },
  {
    name: "Ratodero",
  },
  {
    name: "Rohri",
  },
  {
    name: "Rustam",
  },
  {
    name: "Sakrand",
  },
  {
    name: "Samaro",
  },
  {
    name: "Sanghar",
  },
  {
    name: "Sann",
  },
  {
    name: "Sehwan",
  },
  {
    name: "Setharja Old",
  },
  {
    name: "Shahdad Kot",
  },
  {
    name: "Shahdadpur",
  },
  {
    name: "Shahpur Chakar",
  },
  {
    name: "Shikarpur",
  },
  {
    name: "Sinjhoro",
  },
  {
    name: "Sīta Road",
  },
  {
    name: "Sobhodero",
  },
  {
    name: "Sukkur",
  },
  {
    name: "Talhar",
  },
  {
    name: "Tando Adam",
  },
  {
    name: "Tando Allahyar",
  },
  {
    name: "Tando Bago",
  },
  {
    name: "Tando Jam",
  },
  {
    name: "Tando Mitha Khan",
  },
  {
    name: "Tando Muhammad Khan",
  },
  {
    name: "Tangwani",
  },
  {
    name: "Tharu Shah",
  },
  {
    name: "Thatta",
  },
  {
    name: "Thul",
  },
  {
    name: "Ubauro",
  },
  {
    name: "Umarkot",
  },
  {
    name: "Umerkot District",
  },
  {
    name: "Warah",
  },
];
var citiesPunjab = [
  {
    name: "Ahmadpur Sial",
  },
  {
    name: "Ahmedpur East",
  },
  {
    name: "Alipur Chatha",
  },
  {
    name: "Arifwala",
  },
  {
    name: "Attock Tehsil",
  },
  {
    name: "Baddomalhi",
  },
  {
    name: "Bahawalnagar",
  },
  {
    name: "Bahawalpur",
  },
  {
    name: "Bakhri Ahmad Khan",
  },
  {
    name: "Basirpur",
  },
  {
    name: "Basti Dosa",
  },
  {
    name: "Begowala",
  },
  {
    name: "Bhakkar",
  },
  {
    name: "Bhalwal",
  },
  {
    name: "Bhawana",
  },
  {
    name: "Bhera",
  },
  {
    name: "Bhopalwala",
  },
  {
    name: "Burewala",
  },
  {
    name: "Chak Azam Saffo",
  },
  {
    name: "Chak Jhumra",
  },
  {
    name: "Chak One Hundred Twenty Nine Left",
  },
  {
    name: "Chak Thirty-one -Eleven Left",
  },
  {
    name: "Chak Two Hundred Forty-Nine TDA",
  },
  {
    name: "Chakwal",
  },
  {
    name: "Chawinda",
  },
  {
    name: "Chichawatni",
  },
  {
    name: "Chiniot",
  },
  {
    name: "Chishtian",
  },
  {
    name: "Choa Saidanshah",
  },
  {
    name: "Chuhar Kana",
  },
  {
    name: "Chunian",
  },
  {
    name: "Daira Din Panah",
  },
  {
    name: "Dajal",
  },
  {
    name: "Dandot RS",
  },
  {
    name: "Darya Khan",
  },
  {
    name: "Daska",
  },
  {
    name: "Daud Khel",
  },
  {
    name: "Daultala",
  },
  {
    name: "Dera Ghazi Khan",
  },
  {
    name: "Dhanot",
  },
  {
    name: "Dhaunkal",
  },
  {
    name: "Dhok Awan",
  },
  {
    name: "Dijkot",
  },
  {
    name: "Dinan Bashnoian Wala",
  },
  {
    name: "Dinga",
  },
  {
    name: "Dipalpur",
  },
  {
    name: "Dullewala",
  },
  {
    name: "Dunga Bunga",
  },
  {
    name: "Dunyapur",
  },
  {
    name: "Eminabad",
  },
  {
    name: "Faisalabad",
  },
  {
    name: "Faqirwali",
  },
  {
    name: "Faruka",
  },
  {
    name: "Fazilpur",
  },
  {
    name: "Ferozewala",
  },
  {
    name: "Fort Abbas",
  },
  {
    name: "Garh Maharaja",
  },
  {
    name: "Gojra",
  },
  {
    name: "Gujar Khan",
  },
  {
    name: "Gujranwala",
  },
  {
    name: "Gujranwala Division",
  },
  {
    name: "Gujrat",
  },
  {
    name: "Hadali",
  },
  {
    name: "Hafizabad",
  },
  {
    name: "Harnoli",
  },
  {
    name: "Harunabad",
  },
  {
    name: "Hasan Abdal",
  },
  {
    name: "Hasilpur",
  },
  {
    name: "Haveli Lakha",
  },
  {
    name: "Hazro",
  },
  {
    name: "Hujra Shah Muqeem",
  },
  {
    name: "Jahanian Shah",
  },
  {
    name: "Jalalpur Jattan",
  },
  {
    name: "Jalalpur Pirwala",
  },
  {
    name: "Jampur",
  },
  {
    name: "Jand",
  },
  {
    name: "Jandiala Sher Khan",
  },
  {
    name: "Jaranwala",
  },
  {
    name: "Jatoi Shimali",
  },
  {
    name: "Jauharabad",
  },
  {
    name: "Jhang",
  },
  {
    name: "Jhang Sadar",
  },
  {
    name: "Jhawarian",
  },
  {
    name: "Jhelum",
  },
  {
    name: "Kabirwala",
  },
  {
    name: "Kahna Nau",
  },
  {
    name: "Kahuta",
  },
  {
    name: "Kalabagh",
  },
  {
    name: "Kalaswala",
  },
  {
    name: "Kaleke Mandi",
  },
  {
    name: "Kallar Kahar",
  },
  {
    name: "Kalur Kot",
  },
  {
    name: "Kamalia",
  },
  {
    name: "Kamar Mushani",
  },
  {
    name: "Kamoke",
  },
  {
    name: "Kamra",
  },
  {
    name: "Kanganpur",
  },
  {
    name: "Karor",
  },
  {
    name: "Kasur",
  },
  {
    name: "Keshupur",
  },
  {
    name: "Khairpur Tamiwali",
  },
  {
    name: "Khandowa",
  },
  {
    name: "Khanewal",
  },
  {
    name: "Khanga Dogran",
  },
  {
    name: "Khangarh",
  },
  {
    name: "Khanpur",
  },
  {
    name: "Kharian",
  },
  {
    name: "Khewra",
  },
  {
    name: "Khurrianwala",
  },
  {
    name: "Khushab",
  },
  {
    name: "Kohror Pakka",
  },
  {
    name: "Kot Addu Tehsil",
  },
  {
    name: "Kot Ghulam Muhammad",
  },
  {
    name: "Kot Mumin",
  },
  {
    name: "Kot Radha Kishan",
  },
  {
    name: "Kot Rajkour",
  },
  {
    name: "Kot Samaba",
  },
  {
    name: "Kot Sultan",
  },
  {
    name: "Kotli Loharan",
  },
  {
    name: "Kundian",
  },
  {
    name: "Kunjah",
  },
  {
    name: "Ladhewala Waraich",
  },
  {
    name: "Lahore",
  },
  {
    name: "Lala Musa",
  },
  {
    name: "Lalian",
  },
  {
    name: "Layyah",
  },
  {
    name: "Layyah District",
  },
  {
    name: "Liliani",
  },
  {
    name: "Lodhran",
  },
  {
    name: "Mailsi",
  },
  {
    name: "Malakwal",
  },
  {
    name: "Malakwal City",
  },
  {
    name: "Mamu Kanjan",
  },
  {
    name: "Mananwala",
  },
  {
    name: "Mandi Bahauddin",
  },
  {
    name: "Mandi Bahauddin District",
  },
  {
    name: "Mangla",
  },
  {
    name: "Mankera",
  },
  {
    name: "Mehmand Chak",
  },
  {
    name: "Mian Channun",
  },
  {
    name: "Mianke Mor",
  },
  {
    name: "Mianwali",
  },
  {
    name: "Minchinabad",
  },
  {
    name: "Mitha Tiwana",
  },
  {
    name: "Moza Shahwala",
  },
  {
    name: "Multan",
  },
  {
    name: "Multan District",
  },
  {
    name: "Muridke",
  },
  {
    name: "Murree",
  },
  {
    name: "Mustafabad",
  },
  {
    name: "Muzaffargarh",
  },
  {
    name: "Nankana Sahib",
  },
  {
    name: "Narang Mandi",
  },
  {
    name: "Narowal",
  },
  {
    name: "Naushahra Virkan",
  },
  {
    name: "Nazir Town",
  },
  {
    name: "Okara",
  },
  {
    name: "Pakki Shagwanwali",
  },
  {
    name: "Pakpattan",
  },
  {
    name: "Pasrur",
  },
  {
    name: "Pattoki",
  },
  {
    name: "Phalia",
  },
  {
    name: "Pind Dadan Khan",
  },
  {
    name: "Pindi Bhattian",
  },
  {
    name: "Pindi Gheb",
  },
  {
    name: "Pir Mahal",
  },
  {
    name: "Qadirpur Ran",
  },
  {
    name: "Qila Didar Singh",
  },
  {
    name: "Rabwah",
  },
  {
    name: "Rahim Yar Khan",
  },
  {
    name: "Rahimyar Khan District",
  },
  {
    name: "Raiwind",
  },
  {
    name: "Raja Jang",
  },
  {
    name: "Rajanpur",
  },
  {
    name: "Rasulnagar",
  },
  {
    name: "Rawalpindi",
  },
  {
    name: "Rawalpindi District",
  },
  {
    name: "Renala Khurd",
  },
  {
    name: "Rojhan",
  },
  {
    name: "Sadiqabad",
  },
  {
    name: "Sahiwal",
  },
  {
    name: "Sambrial",
  },
  {
    name: "Sangla Hill",
  },
  {
    name: "Sanjwal",
  },
  {
    name: "Sarai Alamgir",
  },
  {
    name: "Sarai Sidhu",
  },
  {
    name: "Sargodha",
  },
  {
    name: "Shahkot Tehsil",
  },
  {
    name: "Shahpur",
  },
  {
    name: "Shahr Sultan",
  },
  {
    name: "Shakargarh",
  },
  {
    name: "Sharqpur",
  },
  {
    name: "Sheikhupura",
  },
  {
    name: "Shorkot",
  },
  {
    name: "Shujaabad",
  },
  {
    name: "Sialkot",
  },
  {
    name: "Sillanwali",
  },
  {
    name: "Sodhra",
  },
  {
    name: "Sukheke Mandi",
  },
  {
    name: "Surkhpur",
  },
  {
    name: "Talagang",
  },
  {
    name: "Talamba",
  },
  {
    name: "Tandlianwala",
  },
  {
    name: "Taunsa",
  },
  {
    name: "Toba Tek Singh",
  },
  {
    name: "Umerkot",
  },
  {
    name: "Vihari",
  },
  {
    name: "Wah",
  },
  {
    name: "Warburton",
  },
  {
    name: "Wazirabad",
  },
  {
    name: "West Punjab",
  },
  {
    name: "Yazman",
  },
  {
    name: "Zafarwal",
  },
  {
    name: "Zahir Pir",
  },
];

async function funCities() {
  var pakStates = await db.state.find().select("name _id state_code");
  db.city.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      pakStates.map((state) => {
        if (state.state_code == "JK" && state.name == "Azad Kashmir") {
          citiesAzadKashmir.map((jk) => {
            jk["state"] = state.id;
          });
          citiesAzadKashmir.map((cityJK) => db.city(cityJK).save());
          console.log("cityAzadKashmir save");
        }
        if (state.state_code == "BA" && state.name == "Balochistan") {
          citiesBalochistan.map((ba) => {
            ba["state"] = state.id;
          });
          citiesBalochistan.map((cityBA) => db.city(cityBA).save());
          console.log("cityBalochistan save");
        }
        if (
          state.state_code == "TA" &&
          state.name == "Federally Administered Tribal Areas"
        ) {
          citiesTribal.map((ta) => {
            ta["state"] = state.id;
          });
          citiesTribal.map((cityTA) => db.city(cityTA).save());
          console.log("cityTribalAreas save");
        }
        if (state.state_code == "GB" && state.name == "Gilgit-Baltistan") {
          citiesGilgit.map((gb) => {
            gb["state"] = state.id;
          });
          citiesGilgit.map((cityGB) => db.city(cityGB).save());
          console.log("cityGilgit save");
        }
        if (
          state.state_code == "IS" &&
          state.name == "Islamabad Capital Territory"
        ) {
          citiesIslamabad.map((isl) => {
            isl["state"] = state.id;
          });
          citiesIslamabad.map((cityIS) => db.city(cityIS).save());
          console.log("cityIslamabad save");
        }
        if (state.state_code == "KP" && state.name == "Khyber Pakhtunkhwa") {
          citiesPakhtoonKhaw.map((kp) => {
            kp["state"] = state.id;
          });
          citiesPakhtoonKhaw.map((cityKP) => db.city(cityKP).save());
          console.log("cityKhyberPakhtoon save");
        }
        if (state.state_code == "PB" && state.name == "Punjab") {
          citiesPunjab.map((pb) => {
            pb["state"] = state.id;
          });
          citiesPunjab.map((cityPB) => db.city(cityPB).save());
          console.log("citiesPunjab save");
        }
        if (state.state_code == "SD" && state.name == "Sindh") {
          citiesSindh.map((sd) => {
            sd["state"] = state.id;
          });
          citiesSindh.map((citySD) => db.city(citySD).save());
          console.log("citiesSindh save");
        }
      });
    }
  });
}
function loadCitiesStaticData() {
  funCities();
}
module.exports = loadCitiesStaticData;
