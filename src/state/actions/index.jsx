import { 
  GET_SHOWS, 
  SET_LOADING
} from '../actions/types';

let mock = {
  "request_hash": "request:search:b5021fb5569664933c0ddceeeda2cfdfbe5ad745",
  "request_cached": true,
  "request_cache_expiry": 354844,
  "API_DEPRECATION": true,
  "API_DEPRECATION_DATE": "2022-02-10T16:02:50+00:00",
  "API_DEPRECATION_INFO": "https:\/\/bit.ly\/jikan-v3-deprecation",
  "results": [
      {
          "mal_id": 1735,
          "url": "https:\/\/myanimelist.net\/anime\/1735\/Naruto__Shippuuden",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/17407.jpg?s=2bf24a22a339223dcadb1cdfc3307b61",
          "title": "Naruto: Shippuuden",
          "airing": false,
          "synopsis": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the myster...",
          "type": "TV",
          "episodes": 500,
          "score": 8.24,
          "start_date": "2007-02-15T00:00:00+00:00",
          "end_date": "2017-03-23T00:00:00+00:00",
          "members": 2113834,
          "rated": "PG-13"
      },
      {
          "mal_id": 16870,
          "url": "https:\/\/myanimelist.net\/anime\/16870\/The_Last__Naruto_the_Movie",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/67631.jpg?s=d84468711f6c7b6c122e4822fb4ab805",
          "title": "The Last: Naruto the Movie",
          "airing": false,
          "synopsis": "Two years have passed since the end of the Fourth Great Ninja War. Konohagakure has remained in a state of peace and harmony\u2014until Sixth Hokage Kakashi Hatake notices the moon is dangerously approachi...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.78,
          "start_date": "2014-12-06T00:00:00+00:00",
          "end_date": "2014-12-06T00:00:00+00:00",
          "members": 515788,
          "rated": "PG-13"
      },
      {
          "mal_id": 28755,
          "url": "https:\/\/myanimelist.net\/anime\/28755\/Boruto__Naruto_the_Movie",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/78280.jpg?s=9d8b257b29ff99f0f136562547d0d465",
          "title": "Boruto: Naruto the Movie",
          "airing": false,
          "synopsis": "The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.42,
          "start_date": "2015-08-07T00:00:00+00:00",
          "end_date": "2015-08-07T00:00:00+00:00",
          "members": 414895,
          "rated": "PG-13"
      },
      {
          "mal_id": 4437,
          "url": "https:\/\/myanimelist.net\/anime\/4437\/Naruto__Shippuuden_Movie_2_-_Kizuna",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/17830.jpg?s=bb43646538390435098f5ef84faa0437",
          "title": "Naruto: Shippuuden Movie 2 - Kizuna",
          "airing": false,
          "synopsis": "Unleashing a devastating surprise attack, flying ninjas from the Land of Sky are seeking revenge against their old enemy Konohagakure. Despite his eagerness to join the fight, Naruto Uzumaki is held u...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.28,
          "start_date": "2008-08-02T00:00:00+00:00",
          "end_date": "2008-08-02T00:00:00+00:00",
          "members": 236236,
          "rated": "PG-13"
      },
      {
          "mal_id": 32365,
          "url": "https:\/\/myanimelist.net\/anime\/32365\/Boruto__Naruto_the_Movie_-_Naruto_ga_Hokage_ni_Natta_Hi",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/77678.jpg?s=fc407cec1b4439623be598ad1eb31867",
          "title": "Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi",
          "airing": false,
          "synopsis": "Bundled with the limited edition of Blu-ray\/DVD of Boruto: Naruto the Movie.",
          "type": "Special",
          "episodes": 1,
          "score": 7.36,
          "start_date": "2016-07-06T00:00:00+00:00",
          "end_date": "2016-07-06T00:00:00+00:00",
          "members": 98806,
          "rated": "PG-13"
      },
      {
          "mal_id": 13667,
          "url": "https:\/\/myanimelist.net\/anime\/13667\/Naruto__Shippuuden_Movie_6_-_Road_to_Ninja",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1620\/94336.jpg?s=12e72e32bba541ac795227b2278f8c72",
          "title": "Naruto: Shippuuden Movie 6 - Road to Ninja",
          "airing": false,
          "synopsis": "Returning home to Konohagakure, the young ninja celebrate defeating a group of supposed Akatsuki members. Naruto Uzumaki and Sakura Haruno, however, feel differently. Naruto is jealous of his comrades...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.67,
          "start_date": "2012-07-28T00:00:00+00:00",
          "end_date": "2012-07-28T00:00:00+00:00",
          "members": 300394,
          "rated": "PG-13"
      },
      {
          "mal_id": 10589,
          "url": "https:\/\/myanimelist.net\/anime\/10589\/Naruto__Shippuuden_Movie_5_-_Blood_Prison",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/41403.jpg?s=f4f60444cfbcda379ad585d64316a1c6",
          "title": "Naruto: Shippuuden Movie 5 - Blood Prison",
          "airing": false,
          "synopsis": "During their discussion of a sensitive investigation A, the Fourth Raikage, and his subordinates are ambushed by a cloaked intruder. As the Kumogakure leader repels the assault, he is shocked to disco...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.45,
          "start_date": "2011-07-30T00:00:00+00:00",
          "end_date": "2011-07-30T00:00:00+00:00",
          "members": 212228,
          "rated": "PG-13"
      },
      {
          "mal_id": 8246,
          "url": "https:\/\/myanimelist.net\/anime\/8246\/Naruto__Shippuuden_Movie_4_-_The_Lost_Tower",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1479\/116734.jpg?s=b548d20a8e17963f03657b92f37df886",
          "title": "Naruto: Shippuuden Movie 4 - The Lost Tower",
          "airing": false,
          "synopsis": "Led by Yamato, Naruto Uzumaki, Sakura Haruno, and Sai are assigned to capture Mukade, a rogue ninja who is pursuing the ancient chakra Ryuumyaku located underneath the Rouran ruins. While the Ryuumyak...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.42,
          "start_date": "2010-07-31T00:00:00+00:00",
          "end_date": "2010-07-31T00:00:00+00:00",
          "members": 222747,
          "rated": "PG-13"
      },
      {
          "mal_id": 2472,
          "url": "https:\/\/myanimelist.net\/anime\/2472\/Naruto__Shippuuden_Movie_1",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/79705.jpg?s=80162f3e16a4b76638f535bf23ac324c",
          "title": "Naruto: Shippuuden Movie 1",
          "airing": false,
          "synopsis": "A group of ninja is planning to revive a powerful demon, and once its spirit is reunited with its body, the world will be destroyed. The only way to prevent this from happening is for Shion, a shrine...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.29,
          "start_date": "2007-08-04T00:00:00+00:00",
          "end_date": "2007-08-04T00:00:00+00:00",
          "members": 265535,
          "rated": "PG-13"
      },
      {
          "mal_id": 12979,
          "url": "https:\/\/myanimelist.net\/anime\/12979\/Naruto_SD__Rock_Lee_no_Seishun_Full-Power_Ninden",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/36475.jpg?s=afbabba381a6eebe252dc3c6ed09067a",
          "title": "Naruto SD: Rock Lee no Seishun Full-Power Ninden",
          "airing": false,
          "synopsis": "The competitive shinobi world has proven to be challenging for Rock Lee, who lacks the typically required abilities. To compensate for this handicap, the young ninja tenaciously endures severe trainin...",
          "type": "TV",
          "episodes": 51,
          "score": 7.16,
          "start_date": "2012-04-03T00:00:00+00:00",
          "end_date": "2013-03-26T00:00:00+00:00",
          "members": 85975,
          "rated": "PG-13"
      },
      {
          "mal_id": 442,
          "url": "https:\/\/myanimelist.net\/anime\/442\/Naruto_Movie_1__Dai_Katsugeki_Yuki_Hime_Shinobu_Houjou_Dattebayo",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/76015.jpg?s=cf22c3c0297cf6dca2fb1c97ced2cd41",
          "title": "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!",
          "airing": false,
          "synopsis": "Naruto Uzumaki and his squadmates, Sasuke Uchiha and Sakura Haruno, are sent on a mission to escort a movie crew on its way to film in the Land of Snow. They soon find out that they are accompanying a...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.11,
          "start_date": "2004-08-21T00:00:00+00:00",
          "end_date": "2004-08-21T00:00:00+00:00",
          "members": 264841,
          "rated": "PG-13"
      },
      {
          "mal_id": 6325,
          "url": "https:\/\/myanimelist.net\/anime\/6325\/Naruto__Shippuuden_Movie_3_-_Hi_no_Ishi_wo_Tsugu_Mono",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1493\/116732.jpg?s=e4ad4f9c01d532b7068ac7bed5604d73",
          "title": "Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono",
          "airing": false,
          "synopsis": "After being sent to investigate the alarming disappearance of four bloodline limit-wielding ninjas from different countries, Kakashi Hatake, Naruto Uzumaki, Sakura Haruno, and Sai successfully discove...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.33,
          "start_date": "2009-08-01T00:00:00+00:00",
          "end_date": "2009-08-01T00:00:00+00:00",
          "members": 183094,
          "rated": "PG-13"
      },
      {
          "mal_id": 936,
          "url": "https:\/\/myanimelist.net\/anime\/936\/Naruto_Movie_2__Dai_Gekitotsu_Maboroshi_no_Chiteiiseki_Dattebayo",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/76016.jpg?s=77c701f8a3bd608240c69f4080212431",
          "title": "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
          "airing": false,
          "synopsis": "In a tumultuous effort, the Sunagakure ninjas attempt to repel an unforeseen invasion of mysterious armored warriors on the Land of Wind. Shortly afterwards, the same armored troops led by Temujin\u2014a s...",
          "type": "Movie",
          "episodes": 1,
          "score": 6.87,
          "start_date": "2005-08-06T00:00:00+00:00",
          "end_date": "2005-08-06T00:00:00+00:00",
          "members": 212310,
          "rated": "PG-13"
      },
      {
          "mal_id": 2144,
          "url": "https:\/\/myanimelist.net\/anime\/2144\/Naruto_Movie_3__Dai_Koufun_Mikazuki_Jima_no_Animaru_Panikku_Dattebayo",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/76017.jpg?s=07ffbcb450ac4c783fc80d64c302cd4c",
          "title": "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo!",
          "airing": false,
          "synopsis": "Led by Kakashi Hatake, Naruto Uzumaki, Sakura Haruno, and Rock Lee are tasked to escort the extravagant Prince Michiru Tsuki and his spoiled son Hikaru to the prosperous Land of Moon when the two retu...",
          "type": "Movie",
          "episodes": 1,
          "score": 6.91,
          "start_date": "2006-08-05T00:00:00+00:00",
          "end_date": "2006-08-05T00:00:00+00:00",
          "members": 187756,
          "rated": "PG-13"
      },
      {
          "mal_id": 20,
          "url": "https:\/\/myanimelist.net\/anime\/20\/Naruto",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
          "title": "Naruto",
          "airing": false,
          "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
          "type": "TV",
          "episodes": 220,
          "score": 7.97,
          "start_date": "2002-10-03T00:00:00+00:00",
          "end_date": "2007-02-08T00:00:00+00:00",
          "members": 2480968,
          "rated": "PG-13"
      },
      {
          "mal_id": 10075,
          "url": "https:\/\/myanimelist.net\/anime\/10075\/Naruto_x_UT",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/30485.jpg?s=0e585f452876ec490cd1f922d26fad36",
          "title": "Naruto x UT",
          "airing": false,
          "synopsis": "All-new animation offered throughout UNIQLO clothing stores in Japan on January 1, 2011. The DVD contains an exclusive version of Mayonaka Orchestra, by the Japanese rock band Aqua Timez. A limited nu...",
          "type": "OVA",
          "episodes": 1,
          "score": 7.38,
          "start_date": "2011-01-01T00:00:00+00:00",
          "end_date": "2011-01-01T00:00:00+00:00",
          "members": 48311,
          "rated": "PG-13"
      },
      {
          "mal_id": 4134,
          "url": "https:\/\/myanimelist.net\/anime\/4134\/Naruto__Shippuuden_-_Shippuu_Konoha_Gakuen_Den",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/51895.jpg?s=50657ee2b01cf3e31680314e7fe65981",
          "title": "Naruto: Shippuuden - Shippuu! \"Konoha Gakuen\" Den",
          "airing": false,
          "synopsis": "Naruto school special. Naruto is a new cool student and when he meets Sasuke they start fighting.",
          "type": "Special",
          "episodes": 1,
          "score": 7.15,
          "start_date": "2008-02-06T00:00:00+00:00",
          "end_date": "2008-02-06T00:00:00+00:00",
          "members": 60821,
          "rated": "PG-13"
      },
      {
          "mal_id": 19511,
          "url": "https:\/\/myanimelist.net\/anime\/19511\/Naruto__Shippuuden_-_Sunny_Side_Battle",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1047\/91638.jpg?s=0fc6795322dd479caca2103d775de05b",
          "title": "Naruto: Shippuuden - Sunny Side Battle",
          "airing": false,
          "synopsis": "Back at their childhood home, siblings Itachi and Sasuke Uchiha experience an unusual morning together when Itachi becomes obsessed with cooking the perfect fried egg for Sasuke. Despite being complet...",
          "type": "Special",
          "episodes": 1,
          "score": 7.54,
          "start_date": "2013-10-06T00:00:00+00:00",
          "end_date": "2013-10-06T00:00:00+00:00",
          "members": 62113,
          "rated": "PG-13"
      },
      {
          "mal_id": 34566,
          "url": "https:\/\/myanimelist.net\/anime\/34566\/Boruto__Naruto_Next_Generations",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/84460.jpg?s=ae561b0c245d07556cbdfbbf1ee374a9",
          "title": "Boruto: Naruto Next Generations",
          "airing": true,
          "synopsis": "Following the successful end of the Fourth Shinobi World War, Konohagakure has been enjoying a period of peace, prosperity, and extraordinary technological advancement. This is all due to the efforts...",
          "type": "TV",
          "episodes": 0,
          "score": 5.84,
          "start_date": "2017-04-05T00:00:00+00:00",
          "end_date": null,
          "members": 750419,
          "rated": "PG-13"
      },
      {
          "mal_id": 10659,
          "url": "https:\/\/myanimelist.net\/anime\/10659\/Naruto_Soyokazeden_Movie__Naruto_to_Mashin_to_Mitsu_no_Onegai_Dattebayo",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/31573.jpg?s=6a58b632acb146691169f14b2d9f5860",
          "title": "Naruto Soyokazeden Movie: Naruto to Mashin to Mitsu no Onegai Dattebayo!!",
          "airing": false,
          "synopsis": "While enjoying a barbecue alongside team members and peers, Naruto Uzumaki stumbles upon a strange old bottle that houses a genie! The mythical being is willing to grant three wishes, but in a flurry...",
          "type": "Movie",
          "episodes": 1,
          "score": 6.96,
          "start_date": "2010-07-31T00:00:00+00:00",
          "end_date": "2010-07-31T00:00:00+00:00",
          "members": 48750,
          "rated": "PG-13"
      },
      {
          "mal_id": 10686,
          "url": "https:\/\/myanimelist.net\/anime\/10686\/Naruto__Honoo_no_Chuunin_Shiken_Naruto_vs_Konohamaru",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/30813.jpg?s=55399a5c0c95cad6a6fb83e09dba727c",
          "title": "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!",
          "airing": false,
          "synopsis": "As the Fourth Great Ninja War quickly approaches, Sunagakure hosts a special Chunin exam to strengthen the troops of the Allied Shinobi Forces. Among the participants are Konohamaru Sarutobi, an ambit...",
          "type": "Movie",
          "episodes": 1,
          "score": 7.17,
          "start_date": "2011-07-30T00:00:00+00:00",
          "end_date": "2011-07-30T00:00:00+00:00",
          "members": 70372,
          "rated": "PG-13"
      },
      {
          "mal_id": 761,
          "url": "https:\/\/myanimelist.net\/anime\/761\/Naruto__Akaki_Yotsuba_no_Clover_wo_Sagase",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/11240.jpg?s=9c3e8b5fbbc6163c4c25c67d54692406",
          "title": "Naruto: Akaki Yotsuba no Clover wo Sagase",
          "airing": false,
          "synopsis": "When Konohamaru Sarutobi asks Naruto Uzumaki for help, the latter readily accepts to join his young friend on a special mission\u2014the retrieval of the legendary crimson four-leaf clover, rumored to have...",
          "type": "Special",
          "episodes": 1,
          "score": 6.55,
          "start_date": "2003-05-24T00:00:00+00:00",
          "end_date": "2003-05-24T00:00:00+00:00",
          "members": 79466,
          "rated": "PG-13"
      },
      {
          "mal_id": 7367,
          "url": "https:\/\/myanimelist.net\/anime\/7367\/Naruto__The_Cross_Roads",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/27050.jpg?s=5dd6d0b9017576c7b5c94d2dab8fdf7d",
          "title": "Naruto: The Cross Roads",
          "airing": false,
          "synopsis": "The operation to find a missing person goes awry when Kakashi Hatake falls victim to a suspicious trap and gets separated from his students Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. To make ma...",
          "type": "Special",
          "episodes": 1,
          "score": 6.8,
          "start_date": "2009-10-12T00:00:00+00:00",
          "end_date": "2009-10-12T00:00:00+00:00",
          "members": 48295,
          "rated": "PG-13"
      },
      {
          "mal_id": 36564,
          "url": "https:\/\/myanimelist.net\/anime\/36564\/Kamiusagi_Rope_x_Boruto__Naruto_Next_Generations",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/88377.jpg?s=79fc85f6fc2e86282ec74b6fc1c1e204",
          "title": "Kamiusagi Rope x Boruto: Naruto Next Generations",
          "airing": false,
          "synopsis": "A 3-way collaboration between Kamiusagi Rope, Boruto: Naruto Next Generations, and TOHO Cinemas. The purpose is to promote a new TOHO theater opening up in Ueno on November 4, 2017. The collaboration...",
          "type": "ONA",
          "episodes": 1,
          "score": 5.53,
          "start_date": "2017-10-12T00:00:00+00:00",
          "end_date": "2017-10-12T00:00:00+00:00",
          "members": 7145,
          "rated": "G"
      },
      {
          "mal_id": 1074,
          "url": "https:\/\/myanimelist.net\/anime\/1074\/Naruto_Narutimate_Hero_3__Tsuini_Gekitotsu_Jounin_vs_Genin_Musabetsu_Dairansen_Taikai_Kaisai",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/11244.jpg?s=04a45f30a2d3fa666388fcb5dab37750",
          "title": "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
          "airing": false,
          "synopsis": "Konohagakure hosts a special tournament for ninjas of all ranks, stirring up fervor among the rookies who are eager to prove themselves in a competition against their superiors. Additionally, the winn...",
          "type": "OVA",
          "episodes": 1,
          "score": 6.78,
          "start_date": "2005-12-22T00:00:00+00:00",
          "end_date": "2005-12-22T00:00:00+00:00",
          "members": 74736,
          "rated": "PG-13"
      },
      {
          "mal_id": 594,
          "url": "https:\/\/myanimelist.net\/anime\/594\/Naruto__Takigakure_no_Shitou_-_Ore_ga_Eiyuu_Dattebayo",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/20921.jpg?s=ea9c1b5c96a68b2a7b2616e8c25512c1",
          "title": "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
          "airing": false,
          "synopsis": "After safely escorting the cowardly Takigakure leader Shibuki to his homeland, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno are taken aback by the village's sudden invasion of rogue ninjas. As the...",
          "type": "Special",
          "episodes": 1,
          "score": 6.76,
          "start_date": "2003-12-20T00:00:00+00:00",
          "end_date": "2003-12-20T00:00:00+00:00",
          "members": 83909,
          "rated": "PG-13"
      },
      {
          "mal_id": 2248,
          "url": "https:\/\/myanimelist.net\/anime\/2248\/Naruto__Dai_Katsugeki_Yuki_Hime_Shinobu_Houjou_Dattebayo_-_Konoha_no_Sato_no_Dai_Undoukai",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1\/2473.jpg?s=540fd3ee478ab403e24fb781cae1e4ed",
          "title": "Naruto: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo! - Konoha no Sato no Dai Undoukai",
          "airing": false,
          "synopsis": "The Konohagakure Grand Sports Festival has begun with all ninja squads vying for the ultimate prize\u2014a whole week of paid leave! Despite his enthusiasm to achieve victory alongside Sasuke Uchiha and Sa...",
          "type": "Special",
          "episodes": 1,
          "score": 6.87,
          "start_date": "2004-08-21T00:00:00+00:00",
          "end_date": "2004-08-21T00:00:00+00:00",
          "members": 72237,
          "rated": "PG-13"
      },
      {
          "mal_id": 838,
          "url": "https:\/\/myanimelist.net\/anime\/838\/Narutaru__Mukuro_Naru_Hoshi_Tama_Taru_Ko",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/12023.jpg?s=8dfc94b92c45916f8de54db0ca5054de",
          "title": "Narutaru: Mukuro Naru Hoshi Tama Taru Ko",
          "airing": false,
          "synopsis": "During her summer holiday at her grandparents house Tamai Shiina, a young and cheerful schoolgirl, meets a strange looking creature. They befriend each other and Shiina names it \"Hoshimaru: The Round...",
          "type": "TV",
          "episodes": 13,
          "score": 6.01,
          "start_date": "2003-07-07T00:00:00+00:00",
          "end_date": "2003-09-29T00:00:00+00:00",
          "members": 32826,
          "rated": "R"
      },
      {
          "mal_id": 28621,
          "url": "https:\/\/myanimelist.net\/anime\/28621\/Subete_ga_F_ni_Naru",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/76071.jpg?s=fdc6902408ec1ded27127502ae9f0863",
          "title": "Subete ga F ni Naru",
          "airing": false,
          "synopsis": "In a research facility hidden away on a remote island, genius programmer Shiki Magata has lived as a recluse for years. She rarely sees guests, but associate professor Souhei Saikawa and university st...",
          "type": "TV",
          "episodes": 11,
          "score": 7.26,
          "start_date": "2015-10-09T00:00:00+00:00",
          "end_date": "2015-12-18T00:00:00+00:00",
          "members": 156838,
          "rated": "R"
      },
      {
          "mal_id": 952,
          "url": "https:\/\/myanimelist.net\/anime\/952\/Magical_Nyan_Nyan_Taruto",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1\/952.jpg?s=dc4e285b7587bcceb59d1cd68f64e261",
          "title": "Magical Nyan Nyan Taruto",
          "airing": false,
          "synopsis": "Taruto is a little cat who has just moved to a new city with her master's family. Taruto spends her days making friends and exploring her new home town. She also has a knack for getting herself into t...",
          "type": "TV",
          "episodes": 12,
          "score": 6.22,
          "start_date": "2001-07-05T00:00:00+00:00",
          "end_date": "2001-09-27T00:00:00+00:00",
          "members": 6740,
          "rated": "G"
      },
      {
          "mal_id": 3806,
          "url": "https:\/\/myanimelist.net\/anime\/3806\/Sasuga_no_Sarutobi",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/6775.jpg?s=a6a3f890b75a1caca175e8065f09c0cf",
          "title": "Sasuga no Sarutobi",
          "airing": false,
          "synopsis": "Nikumaru, meaning \"meatball\" in Japanese, is a seventeen-year-old student at Ninja High School, a special school for the training of ninja. He is short and chubby, but he possesses a super technique k...",
          "type": "TV",
          "episodes": 69,
          "score": 6.39,
          "start_date": "1982-10-17T00:00:00+00:00",
          "end_date": "1984-03-11T00:00:00+00:00",
          "members": 1337,
          "rated": "G"
      },
      {
          "mal_id": 6311,
          "url": "https:\/\/myanimelist.net\/anime\/6311\/Sarutobi_Ecchan",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/59333.jpg?s=b0d1bc06f4e54240b35d5f5720f22de1",
          "title": "Sarutobi Ecchan",
          "airing": false,
          "synopsis": "A strange girl transfers to Mitsuba Elementary School. At first glance, she is a normal student. However, she is a great athlete, and can talk to animals. Accoding to her, she is the 33rd descendant o...",
          "type": "TV",
          "episodes": 26,
          "score": 5.96,
          "start_date": "1971-10-04T00:00:00+00:00",
          "end_date": "1972-03-27T00:00:00+00:00",
          "members": 851,
          "rated": "PG"
      },
      {
          "mal_id": 247,
          "url": "https:\/\/myanimelist.net\/anime\/247\/Harukanaru_Toki_no_Naka_de__Hachiyou_Shou",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/7227.jpg?s=8bd939befc234ebd8d071ec6a43d3cd5",
          "title": "Harukanaru Toki no Naka de: Hachiyou Shou",
          "airing": false,
          "synopsis": "Akane Motomiya and her friends Tenma and Shimon are pulled by a demon into another world, where Akane becomes the Priestess of the Dragon God. The people of this world tell her that she is the only on...",
          "type": "TV",
          "episodes": 26,
          "score": 7.02,
          "start_date": "2004-10-06T00:00:00+00:00",
          "end_date": "2005-03-30T00:00:00+00:00",
          "members": 22838,
          "rated": "PG-13"
      },
      {
          "mal_id": 4948,
          "url": "https:\/\/myanimelist.net\/anime\/4948\/Shounen_Sarutobi_Sasuke",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1266\/100537.jpg?s=e56a2ecbb7973a0c963100c7045b5ac7",
          "title": "Shounen Sarutobi Sasuke",
          "airing": false,
          "synopsis": "\"Magic Boy\" was the first ever Japanese animation to be released theatrically in North America. Sasuke, a boy vexed by an evil witch, studies magic and uses his powers to defeat her. (Source: bcdb)",
          "type": "Movie",
          "episodes": 1,
          "score": 5.97,
          "start_date": "2059-12-25T00:00:00+00:00",
          "end_date": "2059-12-25T00:00:00+00:00",
          "members": 1640,
          "rated": "PG"
      },
      {
          "mal_id": 5091,
          "url": "https:\/\/myanimelist.net\/anime\/5091\/Manga_Sarutobi_Sasuke",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/57257.jpg?s=954861fd427ad164c69e2beb1673e1af",
          "title": "Manga Sarutobi Sasuke",
          "airing": false,
          "synopsis": "Sasuke is the story of a ninja child that starts right after the battle of Sekigahara where Tokugawa Ieyasu becomes shogun of Japan. Sarutobi Sasuke (Jump Like Monkey Sasuke) was a famous ninja in the...",
          "type": "TV",
          "episodes": 24,
          "score": 6.74,
          "start_date": "1979-10-09T00:00:00+00:00",
          "end_date": "1980-04-15T00:00:00+00:00",
          "members": 1427,
          "rated": "PG"
      },
      {
          "mal_id": 5554,
          "url": "https:\/\/myanimelist.net\/anime\/5554\/Eguchi_Hisashi_no_Nantoka_Narudesho",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/58919.jpg?s=4dc99179d2fa12caad791f01ad4bc7d6",
          "title": "Eguchi Hisashi no Nantoka Narudesho!",
          "airing": false,
          "synopsis": "Part anime, part live action, and part puppet show. This MAL entry duration will reflect the anime segment only. Nantoka Narudesho is a series of seemingly unrelated sketches. Viewer-be-warned, some s...",
          "type": "OVA",
          "episodes": 1,
          "score": 4.76,
          "start_date": "1990-01-25T00:00:00+00:00",
          "end_date": "1990-01-25T00:00:00+00:00",
          "members": 1909,
          "rated": "R+"
      },
      {
          "mal_id": 35072,
          "url": "https:\/\/myanimelist.net\/anime\/35072\/Boruto__Jump_Festa_2016_Special",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/84622.jpg?s=c2abafee8537e4c7eb2225d2310cf617",
          "title": "Boruto: Jump Festa 2016 Special",
          "airing": false,
          "synopsis": "The special anime adaptation of Boruto will be screening at Shueisha\u2019s by-invitation anime event Jump Special Anime Festa 2016!",
          "type": "Special",
          "episodes": 1,
          "score": 6.17,
          "start_date": "2016-11-27T00:00:00+00:00",
          "end_date": "2016-11-27T00:00:00+00:00",
          "members": 13717,
          "rated": "PG-13"
      },
      {
          "mal_id": 840,
          "url": "https:\/\/myanimelist.net\/anime\/840\/Narue_no_Sekai",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/19048.jpg?s=67d9ecd185af80afe163db672fd821c2",
          "title": "Narue no Sekai",
          "airing": false,
          "synopsis": "Meet Narue, an adorable schoolgirl with a secret. She's really an alien with powers right out of a sci-fi comic! But growing up is never easy, and sometimes it doesn't help when you're from outer spac...",
          "type": "TV",
          "episodes": 12,
          "score": 6.54,
          "start_date": "2003-04-05T00:00:00+00:00",
          "end_date": "2003-06-28T00:00:00+00:00",
          "members": 17850,
          "rated": "PG-13"
      },
      {
          "mal_id": 30895,
          "url": "https:\/\/myanimelist.net\/anime\/30895\/HaruChika__Haruta_to_Chika_wa_Seishun_suru",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/77835.jpg?s=0d851d926bba48d6f496fa5988a59ad9",
          "title": "HaruChika: Haruta to Chika wa Seishun suru",
          "airing": false,
          "synopsis": "Chika Homura begins her high school career with a goal: to develop a \"cute girl\" persona. After quitting the volleyball team despite her all-star status, Chika decides to join her school's underrated...",
          "type": "TV",
          "episodes": 12,
          "score": 6.34,
          "start_date": "2016-01-07T00:00:00+00:00",
          "end_date": "2016-03-24T00:00:00+00:00",
          "members": 85464,
          "rated": "PG-13"
      },
      {
          "mal_id": 41005,
          "url": "https:\/\/myanimelist.net\/anime\/41005\/Ane_Naru_Mono",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1544\/105268.jpg?s=0b53950de3a705b3c6cc9e99cb2e4525",
          "title": "Ane Naru Mono",
          "airing": false,
          "synopsis": "Since the death of his parents, young Yuu has suffered considerably from neglect and abuse at the hands of his adoptive relatives, who leave him to his own resources to survive. Fortunately, a girl na...",
          "type": "OVA",
          "episodes": 0,
          "score": 0,
          "start_date": null,
          "end_date": null,
          "members": 12497,
          "rated": null
      },
      {
          "mal_id": 335,
          "url": "https:\/\/myanimelist.net\/anime\/335\/Matantei_Loki_Ragnarok",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/75300.jpg?s=73a332998988f64e81d4c70550b3c9f4",
          "title": "Matantei Loki Ragnarok",
          "airing": false,
          "synopsis": "Loki, the Norse god of mischief, has been exiled to the human world for what was apparently a bad joke. Along with being exiled, he's forced to take the form of a child. He's told the only way he can...",
          "type": "TV",
          "episodes": 26,
          "score": 7.27,
          "start_date": "2003-04-05T00:00:00+00:00",
          "end_date": "2003-09-27T00:00:00+00:00",
          "members": 36535,
          "rated": "PG-13"
      },
      {
          "mal_id": 37786,
          "url": "https:\/\/myanimelist.net\/anime\/37786\/Yagate_Kimi_ni_Naru",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1783\/96153.jpg?s=417ebf7092dad72389d824b840bf37b5",
          "title": "Yagate Kimi ni Naru",
          "airing": false,
          "synopsis": "Yuu Koito has always been entranced with romantic shoujo manga and the lyrics of love songs. She patiently waits for the wings of love to sprout and send her heart aflutter on the day that she finally...",
          "type": "TV",
          "episodes": 13,
          "score": 7.91,
          "start_date": "2018-10-05T00:00:00+00:00",
          "end_date": "2018-12-28T00:00:00+00:00",
          "members": 283898,
          "rated": "PG-13"
      },
      {
          "mal_id": 417,
          "url": "https:\/\/myanimelist.net\/anime\/417\/Ragnar\u00f6k_The_Animation",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/2589.jpg?s=6fa615e9abd5342098020d9256b56540",
          "title": "Ragnar\u00f6k The Animation",
          "airing": false,
          "synopsis": "A great evil is sweeping over the realm; an evil that the young swordsman Roan and his life-long companion, the acolyte Yufa, must face head on! For these two travel toward their destiny, from the hig...",
          "type": "TV",
          "episodes": 26,
          "score": 6.45,
          "start_date": "2004-04-07T00:00:00+00:00",
          "end_date": "2004-09-29T00:00:00+00:00",
          "members": 46582,
          "rated": "PG-13"
      },
      {
          "mal_id": 20457,
          "url": "https:\/\/myanimelist.net\/anime\/20457\/Inari_Konkon_Koi_Iroha",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/64897.jpg?s=7477f95e389a7af19cfc494a891a3922",
          "title": "Inari, Konkon, Koi Iroha.",
          "airing": false,
          "synopsis": "Frazzle-haired middle schooler Inari Fushimi is less than average; she's painfully shy and horribly clumsy, but despite all this, she is undeniably kind. Running about the winding streets of her homet...",
          "type": "TV",
          "episodes": 10,
          "score": 7.2,
          "start_date": "2014-01-16T00:00:00+00:00",
          "end_date": "2014-03-20T00:00:00+00:00",
          "members": 151231,
          "rated": "PG-13"
      },
      {
          "mal_id": 15077,
          "url": "https:\/\/myanimelist.net\/anime\/15077\/Tabisuru_Nuigurumi__Traveling_Daru",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1962\/112790.jpg?s=714a2a926446d8da6ea002adae5d90f2",
          "title": "Tabisuru Nuigurumi: Traveling Daru",
          "airing": false,
          "synopsis": "Daru, a cherished handmade stuffed toy, gets lost and separated from its owner one day when at the airport. Determined to find her again, Daru sets out on a journey around the world in search of her....",
          "type": "Movie",
          "episodes": 1,
          "score": 7.21,
          "start_date": "2012-04-04T00:00:00+00:00",
          "end_date": "2012-04-04T00:00:00+00:00",
          "members": 4540,
          "rated": "G"
      },
      {
          "mal_id": 34262,
          "url": "https:\/\/myanimelist.net\/anime\/34262\/Oushitsu_Kyoushi_Heine",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/85517.jpg?s=5b4cce980727638c555010d93d7aedbb",
          "title": "Oushitsu Kyoushi Heine",
          "airing": false,
          "synopsis": "Equally charming and stern, Heine Wittgenstein is a brilliant man who commands respect, despite his short, childlike stature. Thus, the king of Grannzreich has called upon Heine to undertake a dauntin...",
          "type": "TV",
          "episodes": 12,
          "score": 7.47,
          "start_date": "2017-04-05T00:00:00+00:00",
          "end_date": "2017-06-21T00:00:00+00:00",
          "members": 127418,
          "rated": "PG-13"
      },
      {
          "mal_id": 6956,
          "url": "https:\/\/myanimelist.net\/anime\/6956\/Working",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/75262.jpg?s=6077f0616e8fab853db4a3039b86c457",
          "title": "Working!!",
          "airing": false,
          "synopsis": "Due to his love for small, cute things, Souta Takanashi cannot turn childlike Popura Taneshima down when she recruits him to work for Wagnaria, a family restaurant located in Hokkaido. Takanashi takes...",
          "type": "TV",
          "episodes": 13,
          "score": 7.66,
          "start_date": "2010-04-04T00:00:00+00:00",
          "end_date": "2010-06-27T00:00:00+00:00",
          "members": 404410,
          "rated": "PG-13"
      },
      {
          "mal_id": 25879,
          "url": "https:\/\/myanimelist.net\/anime\/25879\/Working",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/73886.jpg?s=522027c9dd38a3f0d2d210ea08ec9be2",
          "title": "Working!!!",
          "airing": false,
          "synopsis": "As the stories of those connected to Wagnaria come to a close, only one thing is certain: the workplace is about to get crazier than ever before! Whether it be incredibly awkward romances, relentless...",
          "type": "TV",
          "episodes": 13,
          "score": 7.98,
          "start_date": "2015-07-05T00:00:00+00:00",
          "end_date": "2015-09-27T00:00:00+00:00",
          "members": 227667,
          "rated": "PG-13"
      },
      {
          "mal_id": 40747,
          "url": "https:\/\/myanimelist.net\/anime\/40747\/Dounika_Naru_Hibi",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1924\/106583.jpg?s=4ccf225f29b71d54e6df2c696fffcc37",
          "title": "Dounika Naru Hibi",
          "airing": false,
          "synopsis": "Love is love. Someday, the pain of being in love will be an endearing memory. No matter who the feelings are towards, no matter what form it takes, all love and lifestyles have the same value. An omni...",
          "type": "Movie",
          "episodes": 1,
          "score": 5.42,
          "start_date": "2020-10-23T00:00:00+00:00",
          "end_date": "2020-10-23T00:00:00+00:00",
          "members": 17612,
          "rated": "PG-13"
      },
      {
          "mal_id": 33274,
          "url": "https:\/\/myanimelist.net\/anime\/33274\/Onara_Gorou",
          "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/79963.jpg?s=9369b0c0c34291a6f07fb8df6b4217f4",
          "title": "Onara Gorou",
          "airing": false,
          "synopsis": "Onara Gorou follows the everyday life of Gorou, the \"most admirable of farts,\" as he solves problems in ways that only a fart can. (Source: ANN)",
          "type": "TV",
          "episodes": 13,
          "score": 5.55,
          "start_date": "2016-07-03T00:00:00+00:00",
          "end_date": "2016-09-24T00:00:00+00:00",
          "members": 13458,
          "rated": "PG"
      }
  ],
  "last_page": 20
};



export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount
    })
  }
}

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdrow",
      payload: amount
    })
  }
}

export const getShows = (searchValue) => {

  let results = [];
  if(searchValue.length > 2) {
    // const url = `https://api.jikan.moe/v3/search/anime?q=${searchValue}`;
    results = mock.results;
    // try {
    //   // const response = await fetch(url);
    //   // const json = await response.json();
    //   // results = json.results;
    //   // const json = mock;
    //   results = mock.results;
    // } catch (error) {
    //   console.error("Error: ", error);
    // }
    
  }
  if(!searchValue || searchValue === ""){
    results = [];
  }
  console.log("ACTIONS", results)
  console.log("ACTIONS searchValue", searchValue)

  return (dispatch) => {
    dispatch({
      type: GET_SHOWS,
      payload: results
    })
  }
}

export const setLoading = (loading) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: loading
    })
  }
}