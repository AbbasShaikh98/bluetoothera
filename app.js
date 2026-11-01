const tracks = [
  {
    id: 1,
    title: "Blue Eyes",
    artist: "Yo Yo Honey Singh · Official Video",
    youtubeId: "NbyHNASFi6U",
    era: "club",
    moods: ["party", "slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Blue Eyes — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 2,
    title: "Lungi Dance",
    artist: "Chennai Express · Yo Yo Honey Singh",
    youtubeId: "69CEiHfS_mc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Lungi Dance — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 3,
    title: "High Heels",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "vdcrzeJ09nY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "High Heels — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 4,
    title: "Brown Rang",
    artist: "International Villager · Yo Yo Honey Singh",
    youtubeId: "eizmCZv3aKI",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Brown Rang — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 5,
    title: "Desi Kalakaar",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "KhnVcAC5bIM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Desi Kalakaar — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 6,
    title: "Love Dose",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "TvngY4unjn4",
    era: "club",
    moods: ["slow", "party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Love Dose — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 7,
    title: "Party All Night",
    artist: "Boss · Yo Yo Honey Singh",
    youtubeId: "Wd7H311MrWA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Party All Night — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 8,
    title: "Yaar Naa Miley",
    artist: "Kick · Devil",
    youtubeId: "iMmKHLFZn10",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Yaar Naa Miley — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 9,
    title: "One Bottle Down",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "NDJ-1FK1c_k",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "One Bottle Down — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 10,
    title: "Birthday Bash",
    artist: "Dilliwaali Zaalim Girlfriend",
    youtubeId: "CiyAA_xraSo",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Birthday Bash — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 11,
    title: "Chaar Botal Vodka",
    artist: "Ragini MMS 2 · Yo Yo Honey Singh",
    youtubeId: "x8F5dz8kv1w",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Chaar Botal Vodka — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 12,
    title: "Sunny Sunny",
    artist: "Yaariyan · Yo Yo Honey Singh",
    youtubeId: "MXJCnccDLA0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Sunny Sunny — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 13,
    title: "Urvashi",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "0VwgpYJ4q38",
    era: "club",
    moods: ["slow", "party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Urvashi — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 14,
    title: "Makhna",
    artist: "Yo Yo Honey Singh · Neha Kakkar",
    youtubeId: "1bvYHkQxWmg",
    era: "club",
    moods: ["slow", "party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Makhna — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 15,
    title: "First Kiss",
    artist: "Yo Yo Honey Singh Ft. Ipsitaa",
    youtubeId: "HO7CRp44s10",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "First Kiss — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 16,
    title: "Dheere Dheere",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "nCD2hj6zJEc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Dheere Dheere — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 17,
    title: "Dope Shope",
    artist: "International Villager · Yo Yo Honey Singh",
    youtubeId: "NrXdauEv9HY",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Dope Shope — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 18,
    title: "Get Up Jawani",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "8Z8qobg8UdA",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Get Up Jawani — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 19,
    title: "I'm Your DJ Tonight",
    artist: "Desi Kalakaar · Yo Yo Honey Singh",
    youtubeId: "hrayLOq_VDE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "I'm Your DJ Tonight — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 20,
    title: "Gabru",
    artist: "J Star Feat. Yo Yo Honey Singh",
    youtubeId: "q1wK0r51ARs",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Gabru — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 21,
    title: "Moonlight",
    artist: "Yo Yo Honey Singh feat. Priceless",
    youtubeId: "JF42RpxAEko",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Moonlight — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 22,
    title: "Dil Chori",
    artist: "Sonu Ke Titu Ki Sweety · Yo Yo Honey Singh",
    youtubeId: "xWi8nDUjHGA",
    era: "club",
    moods: ["slow", "party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Dil Chori — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 23,
    title: "Bring Me Back",
    artist: "MTV Spoken Word · Yo Yo Honey Singh",
    youtubeId: "gAt_hSIIUMU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Bring Me Back — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 24,
    title: "Issey Kehte Hain Hip Hop",
    artist: "The Shaukeens · Yo Yo Honey Singh",
    youtubeId: "uaCYeQ9FtSI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Issey Kehte Hain Hip Hop — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 25,
    title: "Aata Majhi Satakli",
    artist: "Singham Returns · Yo Yo Honey Singh",
    youtubeId: "M3KqzpP6Ej0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Aata Majhi Satakli — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 26,
    title: "Shor Machega",
    artist: "Mumbai Saga · Yo Yo Honey Singh",
    youtubeId: "FKYBHMVrh8Q",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Shor Machega — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 27,
    title: "Kuley Kuley",
    artist: "Honey 3.0 · Apache Indian",
    youtubeId: "z3LZbS6pM3M",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Kuley Kuley — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 28,
    title: "Call Aundi",
    artist: "Zorawar · Yo Yo Honey Singh",
    youtubeId: "OIv0FLrbnGE",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Call Aundi — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 29,
    title: "Stardom",
    artist: "Desi Kalakaar · Yo Yo Honey Singh",
    youtubeId: "Vp4gGoaVUyE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Stardom — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 30,
    title: "Jingle Bell",
    artist: "Hommie Dilliwala Ft. Yo Yo Honey Singh",
    youtubeId: "Hw3NH_-_ja8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Jingle Bell — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 31,
    title: "Care Ni Karda",
    artist: "Chhalaang · Yo Yo Honey Singh",
    youtubeId: "WGdoaRVOm8o",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Care Ni Karda — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 32,
    title: "Manali Trance",
    artist: "The Shaukeens · Yo Yo Honey Singh & Neha Kakkar",
    youtubeId: "vZ_NpLWuL00",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Manali Trance — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 33,
    title: "Gatividhi",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "hZdfe7E1XR8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Gatividhi — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 34,
    title: "Fugly Fugly Kya Hai",
    artist: "Fugly · Yo Yo Honey Singh",
    youtubeId: "bCloJm9gptM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Fugly Fugly Kya Hai — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 35,
    title: "Chhote Chhote Peg",
    artist: "Sonu Ke Titu Ki Sweety · Yo Yo Honey Singh",
    youtubeId: "xvYBg6MWPbM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Chhote Chhote Peg — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 36,
    title: "6 AM",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "I5iCw4CIpAU",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "6 AM — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 37,
    title: "Party On My Mind",
    artist: "Race 2 · Yo Yo Honey Singh",
    youtubeId: "UJpjx0ssWHE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Party On My Mind — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 38,
    title: "Banjarey",
    artist: "Fugly · Yo Yo Honey Singh",
    youtubeId: "a6XkY53VlhM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Banjarey — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 39,
    title: "One Thousand Miles",
    artist: "Desi Kalakaar · Yo Yo Honey Singh",
    youtubeId: "EWRBHho2b_E",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "One Thousand Miles — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 40,
    title: "Bonita",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "q3EsYvIapPQ",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Bonita — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 41,
    title: "Beautiful",
    artist: "Malkit Singh Ft. Yo Yo Honey Singh",
    youtubeId: "c_7UZPBzfcY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Beautiful — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 42,
    title: "Shopping List",
    artist: "Leo Grewal · Yo Yo Honey Singh",
    youtubeId: "dzuZ-_xscps",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Shopping List — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 43,
    title: "God Style",
    artist: "Hommie Dilliwala · Yo Yo Honey Singh",
    youtubeId: "9KYyngnqom8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "God Style — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 44,
    title: "Rooh",
    artist: "Yo Yo Honey Singh · Nushrratt Bharuccha",
    youtubeId: "5v6LQlrUOtY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Rooh — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 45,
    title: "Payal",
    artist: "Yo Yo Honey Singh · Nora Fatehi · Paradox",
    youtubeId: "a-PAcmi5Kas",
    era: "club",
    moods: ["party", "punjabi", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Payal — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 46,
    title: "Money Money",
    artist: "Total Dhamaal · Yo Yo Honey Singh",
    youtubeId: "L8GQD4c915U",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Money Money — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 47,
    title: "Lonely",
    artist: "Khiladi 786 · Yo Yo Honey Singh",
    youtubeId: "Ffs-tQd5Ihs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Lonely — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 48,
    title: "Kalaastar",
    artist: "Honey 3.0 · Yo Yo Honey Singh",
    youtubeId: "5oExKMYIE9U",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Kalaastar — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 49,
    title: "Paris Ka Trip",
    artist: "Millind Gaba X Yo Yo Honey Singh",
    youtubeId: "zM6s3JgF9_0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Paris Ka Trip — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 50,
    title: "Break Up Party",
    artist: "Yo Yo Honey Singh Feat. Leo",
    youtubeId: "EpJk_dSpjVM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Break Up Party — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 51,
    title: "Party With The Bhoothnath",
    artist: "Bhoothnath Returns · Yo Yo Honey Singh",
    youtubeId: "W7kdKf_aqX4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Party With The Bhoothnath — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 52,
    title: "Laal Pari",
    artist: "Housefull 5 · Yo Yo Honey Singh",
    youtubeId: "KGn-erOG-Bs",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Laal Pari — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 53,
    title: "Haye Mera Dil",
    artist: "Alfaaz Feat. Yo Yo Honey Singh",
    youtubeId: "m4lPhauTvtw",
    era: "club",
    moods: ["slow", "party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Haye Mera Dil — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 54,
    title: "Hai Apna Dil",
    artist: "The Xpose · Yo Yo Honey Singh",
    youtubeId: "adDtRrqJzys",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Hai Apna Dil — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 55,
    title: "Angreji Beat",
    artist: "Yo Yo Honey Singh · Gippy Grewal",
    youtubeId: "YEf_hnXBbyI",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Angreji Beat — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 56,
    title: "Jaadugar",
    artist: "Yo Yo Honey Singh · 51 Glorious Days",
    youtubeId: "odJE47wW_J4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Jaadugar — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 57,
    title: "Raja Rani",
    artist: "Son of Sardaar · Yo Yo Honey Singh",
    youtubeId: "kbxTPZQMLko",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Raja Rani — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 58,
    title: "Alcoholic",
    artist: "The Shaukeens · Yo Yo Honey Singh",
    youtubeId: "j2OY8I03LeA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Alcoholic — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 59,
    title: "Glassy",
    artist: "Yo Yo Honey Singh · Ashok Mastie",
    youtubeId: "AmrRPNwrGQU",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Glassy — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 60,
    title: "Raat Jashan Di",
    artist: "Zorawar · Yo Yo Honey Singh",
    youtubeId: "D--rQj49heE",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Raat Jashan Di — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 61,
    title: "Lakk 28 Kudi Da",
    artist: "Diljit Dosanjh · Yo Yo Honey Singh",
    youtubeId: "LVxcksTBKvM",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Lakk 28 Kudi Da — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 62,
    title: "Lovely",
    artist: "Happy New Year · Yo Yo Honey Singh",
    youtubeId: "HT7g_9eNnYk",
    era: "club",
    moods: ["party", "slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Lovely — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 63,
    title: "Jatt Mehkma",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "vrjndQ4BXMU",
    era: "club",
    moods: ["party", "punjabi", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Jatt Mehkma — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 64,
    title: "Galat Baat Hai",
    artist: "Main Tera Hero · Yo Yo Honey Singh",
    youtubeId: "coQ95u7w_18",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Galat Baat Hai — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 65,
    title: "Mashooqa",
    artist: "Yo Yo Honey Singh · Charmee Zaveri",
    youtubeId: "-Irm631_TTM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Mashooqa — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 66,
    title: "Millionaire",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "XO8wew38VM8",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Millionaire — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 67,
    title: "High On Me",
    artist: "Glory · Yo Yo Honey Singh · Talwiinder",
    youtubeId: "hYqC5bTj1Io",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "High On Me — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 68,
    title: "Maniac",
    artist: "Glory · Yo Yo Honey Singh · Esha Gupta",
    youtubeId: "W8x6Dwyj0-A",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Maniac — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 69,
    title: "Sheeshe Wali Chunni",
    artist: "Glory · Yo Yo Honey Singh · Shehnaaz Gill",
    youtubeId: "AWruapvge9A",
    era: "club",
    moods: ["party", "punjabi", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Sheeshe Wali Chunni — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 70,
    title: "Loca",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "QeLoW2ySlbc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Loca — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 71,
    title: "Aao Raja",
    artist: "Gabbar Is Back · Neha Kakkar · Yo Yo Honey Singh",
    youtubeId: "66VN2ZIWPnw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Aao Raja — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 72,
    title: "This Party Getting Hot",
    artist: "Jazzy B · Yo Yo Honey Singh",
    youtubeId: "ZuoIW4aINak",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey", "jazzy"],
    quotes: [
      { text: "This Party Getting Hot — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 73,
    title: "Teri Yaadein",
    artist: "Glory · Yo Yo Honey Singh · Grini",
    youtubeId: "9vETi6ld38g",
    era: "ballad",
    moods: ["slow", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Teri Yaadein — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 74,
    title: "Malamaal",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "-oBqkSp1EbI",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Malamaal — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 75,
    title: "Caliente",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "YqIbpGp-p5w",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Caliente — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 76,
    title: "Chhori",
    artist: "Glory · Yo Yo Honey Singh · Paradox",
    youtubeId: "CrcSNpnf3h0",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Chhori — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 77,
    title: "Beeba",
    artist: "Glory · Yo Yo Honey Singh · Laïoung",
    youtubeId: "ZugEfmN5K3A",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Beeba — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 78,
    title: "Hide It",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "6kuyhj4ayjU",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Hide It — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 79,
    title: "Majnoonh",
    artist: "Glory · Yo Yo Honey Singh · Jamila El Badaoui",
    youtubeId: "rlHHu42pquE",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Majnoonh — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 80,
    title: "Rap God",
    artist: "Glory · Yo Yo Honey Singh",
    youtubeId: "6Qydcwr8X34",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Rap God — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 81,
    title: "Shamaan De Vele",
    artist: "Glory · Yo Yo Honey Singh · Leo Grewal",
    youtubeId: "bl0i0NskOFc",
    era: "club",
    moods: ["party", "punjabi", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Shamaan De Vele — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 82,
    title: "Rounds N Ring",
    artist: "Glory · Yo Yo Honey Singh · Navaan Sandhu",
    youtubeId: "RkxbApdS9Pg",
    era: "club",
    moods: ["party", "punjabi", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Rounds N Ring — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 83,
    title: "Lapata",
    artist: "Glory · Yo Yo Honey Singh · Pho",
    youtubeId: "rKa5EcIAinM",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Lapata — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 84,
    title: "Sawaal Puchdi",
    artist: "51 Glorious Days · Yo Yo Honey Singh · Bohemia",
    youtubeId: "472GGh5D_h8",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Sawaal Puchdi — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 85,
    title: "Goliyan",
    artist: "International Villager · Diljit Dosanjh · Yo Yo Honey Singh",
    youtubeId: "k3PA-39uXHY",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Goliyan — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 86,
    title: "Mast Kalander",
    artist: "Mika Singh · Yo Yo Honey Singh",
    youtubeId: "jKHj2n6yb-0",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Mast Kalander — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 87,
    title: "Achko Machko",
    artist: "Yo Yo Honey Singh · Official",
    youtubeId: "sI502AHWyn8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Achko Machko — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 88,
    title: "Vigdiyan Heeran",
    artist: "Honey 3.0 · Yo Yo Honey Singh · Urvashi Rautela",
    youtubeId: "feigIqugUsA",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Vigdiyan Heeran — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 89,
    title: "Naagan",
    artist: "Honey 3.0 · Yo Yo Honey Singh",
    youtubeId: "nt008uBfze4",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Naagan — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 90,
    title: "Savage",
    artist: "Honey 3.0 · Yo Yo Honey Singh · Nushrratt Bharuccha",
    youtubeId: "-UrwxWot5Sk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Savage — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 91,
    title: "Habibti",
    artist: "Honey 3.0 · Yo Yo Honey Singh",
    youtubeId: "uek9IYnQrzs",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Habibti — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 92,
    title: "Dheeth",
    artist: "Honey 3.0 · Yo Yo Honey Singh",
    youtubeId: "EwWMV9RGfcQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Dheeth — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 93,
    title: "Tujh Pe Pyaar",
    artist: "Honey 3.0 · Yo Yo Honey Singh",
    youtubeId: "SnXjGLFGCQU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Tujh Pe Pyaar — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 94,
    title: "Soul",
    artist: "Honey 3.0 · Yo Yo Honey Singh · Nia Sharma",
    youtubeId: "eYQiibZoxwk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Soul — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 95,
    title: "Lets Get It Party",
    artist: "Honey 3.0 · Yo Yo Honey Singh · Leo Grewal",
    youtubeId: "kjcEL6RzT8s",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Lets Get It Party — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 96,
    title: "Chal Mere Ghar",
    artist: "Desi Kalakaar · Yo Yo Honey Singh",
    youtubeId: "a_Eq1P1UO4I",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Chal Mere Ghar — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 97,
    title: "Daftar Ki Girl",
    artist: "Desi Kalakaar · Yo Yo Honey Singh",
    youtubeId: "AFzUm1dK8qY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Daftar Ki Girl — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 98,
    title: "Tanning",
    artist: "Desi Kalakaar · Yo Yo Honey Singh",
    youtubeId: "uOEPLYpp9ZY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Tanning — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 99,
    title: "Head Banger",
    artist: "International Villager · Yo Yo Honey Singh · Escape",
    youtubeId: "2hIsENvGAHI",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Head Banger — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 100,
    title: "Yadaan",
    artist: "International Villager · Yo Yo Honey Singh · Sardool Sikander",
    youtubeId: "s4madTXhfns",
    era: "ballad",
    moods: ["slow", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Yadaan — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 101,
    title: "Mujh Ko Jaane Do",
    artist: "International Villager · Yo Yo Honey Singh · Raj Brar",
    youtubeId: "PtQxO0GUug0",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Mujh Ko Jaane Do — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 102,
    title: "Sambhle",
    artist: "International Villager · Yo Yo Honey Singh · Manak Ali",
    youtubeId: "IxjkDI8N1-8",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Sambhle — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 103,
    title: "Yaad",
    artist: "International Villager · Yo Yo Honey Singh · Romey Gill",
    youtubeId: "Hcq3dvtI-Tw",
    era: "ballad",
    moods: ["slow", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Yaad — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 104,
    title: "Aashke",
    artist: "International Villager · Yo Yo Honey Singh",
    youtubeId: "fsDZaamL9ew",
    era: "memory",
    moods: ["party", "punjabi", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Aashke — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 105,
    title: "Body Roll",
    artist: "Nora Fatehi · Yo Yo Honey Singh",
    youtubeId: "hOrvqKLbZY4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Body Roll — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 106,
    title: "F Them",
    artist: "Glory · Yo Yo Honey Singh · Leo Grewal",
    youtubeId: "qk8Bm_K0CbI",
    era: "club",
    moods: ["party", "glory", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "F Them — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 107,
    title: "Aadat",
    artist: "51 Glorious Days · Yo Yo Honey Singh · AP Dhillon",
    youtubeId: "lcw4TDMBjZA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Aadat — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 108,
    title: "Mafia",
    artist: "51 Glorious Days · Yo Yo Honey Singh · Nargis Fakhri",
    youtubeId: "Yd8EDpIB1To",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Mafia — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 109,
    title: "Saiyaan Ji",
    artist: "Yo Yo Honey Singh · Neha Kakkar",
    youtubeId: "VEkj2sanAeU",
    era: "club",
    moods: ["slow", "party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Saiyaan Ji — Bluetooth era classic.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 152,
    title: "Yaar Bathere",
    artist: "Alfaaz · Yo Yo Honey Singh",
    youtubeId: "GNSXB6k0NW8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Yaar bathere — Punjabi Bluetooth classic.", cite: "Alfaaz" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 153,
    title: "Designer",
    artist: "Guru Randhawa · Yo Yo Honey Singh",
    youtubeId: "xZQ_Qw2IJOQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey", "guru"],
    quotes: [
      { text: "Designer drip on every playlist.", cite: "T-Series" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 154,
    title: "Chillgum",
    artist: "Yo Yo Honey Singh · Malaika Arora",
    youtubeId: "cTokGAQAaK4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Chillgum — 51 Glorious Days energy.", cite: "YOYO" },
      { text: "Volume up. Worry later.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 155,
    title: "De Taali",
    artist: "Yo Yo Honey Singh · Bhool Bhulaiyaa 2",
    youtubeId: "ly5FEs0F8_I",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "De taali — clap for the drop.", cite: "BB2" },
      { text: "Theatre speakers shaking.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 156,
    title: "JAAM",
    artist: "Yo Yo Honey Singh",
    youtubeId: "ej6Qgxq4u_A",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "JAAM — raise one for the night.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 157,
    title: "I'm In Love With You",
    artist: "Yo Yo Honey Singh",
    youtubeId: "IkdUxukRsX8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Soft Honey — late-night transfer.", cite: "51 Glorious Days" },
      { text: "Headphones only.", cite: "Nokia days" },
    ],
  },
  {
    id: 158,
    title: "Kudiye Ni Tere",
    artist: "Yo Yo Honey Singh · Starfish",
    youtubeId: "t0esWv0AJhw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Kudiye ni tere — film fest energy.", cite: "Starfish" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 159,
    title: "Modern Ranjha",
    artist: "Singhsta · Yo Yo Honey Singh",
    youtubeId: "RroS0o5vlT0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Modern Ranjha — new-age folklore.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 160,
    title: "Bebo",
    artist: "Alfaaz · Yo Yo Honey Singh",
    youtubeId: "fB15QJmX7GM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Bebo — Punjabi party staple.", cite: "Alfaaz" },
      { text: "Wedding season Bluetooth.", cite: "Memory card" },
    ],
  },
  {
    id: 161,
    title: "Current Laga Re",
    artist: "Yo Yo Honey Singh · Cirkus",
    youtubeId: "df3Id8Kuf-w",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Current laga re — shock the floor.", cite: "Cirkus" },
      { text: "Theatre to phone transfer.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 162,
    title: "Garaari",
    artist: "Yo Yo Honey Singh · Meet Malkit",
    youtubeId: "UpIHpI7Uv6g",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Garaari — International Villager deep cut.", cite: "IV" },
      { text: "Album track royalty.", cite: "2011" },
    ],
  },
  {
    id: 163,
    title: "Tu Mera 22 Main Tera 22",
    artist: "Amrinder Gill · Yo Yo Honey Singh",
    youtubeId: "FwIXjy4XBX8",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Tu mera 22 — Punjabi cinema heat.", cite: "Speed Records" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 164,
    title: "Fantasy",
    artist: "Alfaaz · Yo Yo Honey Singh",
    youtubeId: "MwcL3_9u07E",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Fantasy — Alfaaz + Honey combo.", cite: "Jatt Airways" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 165,
    title: "Mere Mehboob Qayamat Hogi",
    artist: "Yo Yo Honey Singh",
    youtubeId: "crzVi631scc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Classic reborn — Honey edition.", cite: "YOYO" },
      { text: "Old soul, new bass.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 166,
    title: "Jaan Mangdi",
    artist: "Jassi Sidhu · Yo Yo Honey Singh",
    youtubeId: "XSUtffxPcyQ",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Jaan mangdi — Punjabi Bluetooth staple.", cite: "Jassi Sidhu" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 167,
    title: "Sargi",
    artist: "Yo Yo Honey Singh",
    youtubeId: "gxWd8mShtGQ",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Sargi — early morning energy.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 168,
    title: "Yai Re",
    artist: "Yo Yo Honey Singh · Lulia Vantur",
    youtubeId: "om5Cc9aZ1JI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Yai re — party on loop.", cite: "YOYO" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 110,
    title: "Pehli Nazar Mein",
    artist: "Atif Aslam · Race",
    youtubeId: "BadBAMnPX0I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Pehli Nazar Mein on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 111,
    title: "Pehli Dafa",
    artist: "Atif Aslam",
    youtubeId: "SxTYjptEzZs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Pehli Dafa on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 112,
    title: "Aadat",
    artist: "Atif Aslam · Kalyug",
    youtubeId: "e5LShHAE03A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif", "emraan"],
    quotes: [
      { text: "Aadat on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 113,
    title: "Tera Hone Laga Hoon",
    artist: "Atif Aslam · Ajab Prem Ki Ghazab Kahani",
    youtubeId: "rTuxUAuJRyY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tera Hone Laga Hoon on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 114,
    title: "Tu Jaane Na",
    artist: "Atif Aslam · Ajab Prem Ki Ghazab Kahani",
    youtubeId: "53l2DkivxJs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tu Jaane Na on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 115,
    title: "Jeene Laga Hoon",
    artist: "Atif Aslam · Ramaiya Vastavaiya",
    youtubeId: "qpIdoaaPa6U",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Jeene Laga Hoon on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 116,
    title: "Be Intehaan",
    artist: "Atif Aslam · Race 2",
    youtubeId: "r_3K9vZ4oZE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Be Intehaan on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 117,
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam · Tiger Zinda Hai",
    youtubeId: "SAcpESN_Fk4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Dil Diyan Gallan on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 118,
    title: "Jeena Jeena",
    artist: "Atif Aslam · Badlapur",
    youtubeId: "ziTHTlmPdhQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Jeena Jeena on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 119,
    title: "Woh Lamhe",
    artist: "Atif Aslam · Zeher",
    youtubeId: "Sut_KOIbwn0",
    fallbacks: ["1DBhic8SSKs"],
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif", "emraan"],
    quotes: [
      { text: "Woh Lamhe on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 136,
    title: "Tajdar-e-Haram",
    artist: "Atif Aslam · Coke Studio",
    youtubeId: "a18py61_F_w",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tajdar-e-Haram — pure Atif.", cite: "Coke Studio" },
      { text: "Transferred in silence.", cite: "Earphone era" },
    ],
  },
  {
    id: 137,
    title: "Dil Meri Na Sune",
    artist: "Atif Aslam · Genius",
    youtubeId: "a7tM2UxVF70",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Dil meri na sune…", cite: "Genius" },
      { text: "Late-night Atif.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 138,
    title: "Paniyon Sa",
    artist: "Atif Aslam · Satyameva Jayate",
    youtubeId: "Jm7Satp7Zqk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Paniyon sa…", cite: "Satyameva Jayate" },
      { text: "Soft drop. Full feel.", cite: "Memory card" },
    ],
  },
  {
    id: 139,
    title: "O Saathi",
    artist: "Atif Aslam · Baaghi 2",
    youtubeId: "YuXLN23ZGQo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "O saathi…", cite: "Baaghi 2" },
      { text: "Atif on loop.", cite: "Earphone era" },
    ],
  },
  {
    id: 140,
    title: "Tere Sang Yaara",
    artist: "Atif Aslam · Rustom",
    youtubeId: "5gwy0gcjIkI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tere sang yaara…", cite: "Rustom" },
      { text: "Wedding season Bluetooth.", cite: "Memory card" },
    ],
  },
  {
    id: 141,
    title: "Hoor",
    artist: "Atif Aslam · Hindi Medium",
    youtubeId: "ioj6YBaSAyE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Hoor…", cite: "Hindi Medium" },
      { text: "Atif magic.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 142,
    title: "Musafir",
    artist: "Atif Aslam · Sweetiee Weds NRI",
    youtubeId: "Sh3rF46yoKU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Musafir — road trip Atif.", cite: "Sweetiee Weds NRI" },
      { text: "Window seat approved.", cite: "Nokia days" },
    ],
  },
  {
    id: 143,
    title: "Main Rang Sharbaton Ka",
    artist: "Atif Aslam · Phata Poster Nikhla Hero",
    youtubeId: "aKdqQ5BC_S4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Main rang sharbaton ka…", cite: "Phata Poster" },
      { text: "Colour on a grey LCD.", cite: "Memory card" },
    ],
  },
  {
    id: 144,
    title: "Mar Jaayen",
    artist: "Atif Aslam · Loveshhuda",
    youtubeId: "i8dPrAHqVFc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Mar jaayen…", cite: "Loveshhuda" },
      { text: "Heartbreak file.", cite: "Earphone era" },
    ],
  },
  {
    id: 145,
    title: "Darasal",
    artist: "Atif Aslam · Raabta",
    youtubeId: "uCMYzolEbO0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Darasal…", cite: "Raabta" },
      { text: "Atif forever.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 146,
    title: "Dekhte Dekhte",
    artist: "Atif Aslam · Batti Gul Meter Chalu",
    youtubeId: "rkWJyMhIWLo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Dekhte dekhte…", cite: "Batti Gul Meter Chalu" },
      { text: "Shared at 1%.", cite: "Memory card" },
    ],
  },
  {
    id: 147,
    title: "Le Jaa Tu Mujhe",
    artist: "Atif Aslam · F.A.L.T.U",
    youtubeId: "lHnMYYYwCrM",
    era: "ballad",
    moods: ["slow", "party", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Le jaa tu mujhe…", cite: "F.A.L.T.U" },
      { text: "College fest energy.", cite: "Nokia days" },
    ],
  },
  {
    id: 148,
    title: "Tere Liye",
    artist: "Atif Aslam · Prince",
    youtubeId: "AlvUuGJccKs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tere liye…", cite: "Prince" },
      { text: "Atif + Shreya feel.", cite: "Earphone era" },
    ],
  },
  {
    id: 149,
    title: "Rabba Sacheya",
    artist: "Atif Aslam · Coke Studio",
    youtubeId: "I8_jTmPX0gM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Rabba sacheya…", cite: "Coke Studio" },
      { text: "Sufi on a feature phone.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 150,
    title: "Kuch Is Tarah",
    artist: "Atif Aslam · Doorie",
    youtubeId: "bfMeglYx5Xw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Kuch is tarah…", cite: "Doorie" },
      { text: "OG Atif album nights.", cite: "Memory card" },
    ],
  },
  {
    id: 151,
    title: "Dil Jalane Ki Baat",
    artist: "Atif Aslam",
    youtubeId: "gWZzOqGF4kw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Dil jalane ki baat…", cite: "Atif Aslam" },
      { text: "Quiet storm.", cite: "Earphone era" },
    ],
  },
  {
    id: 120,
    title: "Zara Sa",
    artist: "KK · Jannat · Emraan Hashmi",
    youtubeId: "5IY4BNj0-10",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "kk"],
    quotes: [
      { text: "Zara Sa on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 121,
    title: "Haan Tu Hain",
    artist: "KK · Jannat · Emraan Hashmi",
    youtubeId: "V1fbOsHBlZE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "kk"],
    quotes: [
      { text: "Haan Tu Hain on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 122,
    title: "Tu Hi Meri Shab Hai",
    artist: "KK · Gangster · Emraan Hashmi",
    youtubeId: "mWBvudKcByg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "kk"],
    quotes: [
      { text: "Tu Hi Meri Shab Hai on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 123,
    title: "Lamha Lamha",
    artist: "KK · Gangster · Emraan Hashmi",
    youtubeId: "J0A9l2zTAjg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "kk"],
    quotes: [
      { text: "Lamha Lamha on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 124,
    title: "Aye Khuda",
    artist: "Murder 2 · Emraan Hashmi",
    youtubeId: "K6SsC42pZWg",
    fallbacks: ["HGfc06RZyjQ"],
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Aye Khuda on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 125,
    title: "Tera Mera Rishta",
    artist: "Mustafa Zahid · Awarapan · Emraan Hashmi",
    youtubeId: "0J0HZrDvbjY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Tera Mera Rishta on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 126,
    title: "Agar Tum Mil Jao",
    artist: "Shreya Ghoshal · Zeher · Emraan Hashmi",
    youtubeId: "2E2WA8_teMY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Agar Tum Mil Jao on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 127,
    title: "Toh Phir Aao",
    artist: "Mustafa Zahid · Awarapan · Emraan Hashmi",
    youtubeId: "h5-Kq9k3zeo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Toh Phir Aao on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 128,
    title: "Aankhon Mein Teri Ajab Si",
    artist: "KK · Om Shanti Om",
    youtubeId: "2drIKUOCZxU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Aankhon Mein Teri Ajab Si on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 129,
    title: "Tujhe Bhula Diya",
    artist: "KK · Anjaana Anjaani",
    youtubeId: "-Hb2DeHvvEg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tujhe Bhula Diya on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 130,
    title: "Labon Ko",
    artist: "KK · Bhool Bhulaiyaa",
    youtubeId: "XG8XskoJz1I",
    fallbacks: ["-FP2Cmc7zj4"],
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Labon Ko on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 131,
    title: "Khuda Jaane",
    artist: "KK · Bachna Ae Haseeno",
    youtubeId: "cmMiyZaSELo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Khuda Jaane on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 132,
    title: "Soniye",
    artist: "KK · Aksar · Emraan Hashmi",
    youtubeId: "Ikhaj6B6_Zw",
    fallbacks: ["mK-XfCnttkE"],
    era: "memory",
    moods: ["slow", "party", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Soniye on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 133,
    title: "Zindagi Do Pal Ki",
    artist: "KK · Kites",
    youtubeId: "r-XG86T2jNc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Zindagi Do Pal Ki on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 134,
    title: "Dilnashin Dilnashin",
    artist: "KK · Aashiq Banaya Aapne",
    youtubeId: "c8TqlaLU7gg",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Dilnashin Dilnashin on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 135,
    title: "Abhi Abhi",
    artist: "KK · Jism 2",
    youtubeId: "m8hSKo0m04Q",
    fallbacks: ["HttLRTo4N6U"],
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Abhi Abhi on every memory card.", cite: "Bluetooth Era" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 169,
    title: "Kya Mujhe Pyar Hai",
    artist: "KK · Woh Lamhe",
    youtubeId: "lrAM_H7v8wM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Kya Mujhe Pyar Hai — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 170,
    title: "Dil Ibaadat",
    artist: "KK · Tum Mile",
    youtubeId: "xzUVPN68Ym4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Dil Ibaadat — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 171,
    title: "Beete Lamhein",
    artist: "KK · The Train",
    youtubeId: "2d4I1xW2sNk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Beete Lamhein — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 172,
    title: "Tu Jo Mila",
    artist: "KK · Bajrangi Bhaijaan",
    youtubeId: "6DCOjq0omBc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tu Jo Mila — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 173,
    title: "Alvida",
    artist: "KK · Life In A Metro",
    youtubeId: "dlBX5YKuanI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Alvida — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 174,
    title: "O Humdum Suniyo Re",
    artist: "KK · Saathiya",
    youtubeId: "_9geEbZIAJM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "O Humdum Suniyo Re — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 175,
    title: "Dil Kyun Yeh Mera",
    artist: "KK · Kites",
    youtubeId: "M51OYEo2yjc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Dil Kyun Yeh Mera — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 176,
    title: "Teri Yaadon Mein",
    artist: "KK · The Killer",
    youtubeId: "fVeJ6sJERR4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Teri Yaadon Mein — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 177,
    title: "Aashayein",
    artist: "KK · Iqbal",
    youtubeId: "CaI0xNLpurM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Aashayein — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 178,
    title: "Mat Aazma Re",
    artist: "KK · Murder 3",
    youtubeId: "Y8ap6HgfMNg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Mat Aazma Re — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 179,
    title: "Tadap Tadap",
    artist: "KK · Hum Dil De Chuke Sanam",
    youtubeId: "qsiHgJbwJUE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tadap Tadap — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 180,
    title: "Kaho Na Kaho",
    artist: "KK · Murder",
    youtubeId: "E-OM5ueIgDo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Kaho Na Kaho — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 181,
    title: "Tu Hi Haqeeqat",
    artist: "KK · Tum Mile",
    youtubeId: "7RZJCLb4g9A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Tu Hi Haqeeqat — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 182,
    title: "O Saathi Re",
    artist: "KK · Murder",
    youtubeId: "PAJrT5C3Ixc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "O Saathi Re — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 183,
    title: "Humko Pyaar Hua",
    artist: "KK · Ready",
    youtubeId: "kGNfOErq49s",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Humko Pyaar Hua — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 184,
    title: "Mera Pehla Pehla Pyar",
    artist: "KK",
    youtubeId: "4_pioLA47AU",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Mera Pehla Pehla Pyar — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 185,
    title: "Yaaron",
    artist: "KK",
    youtubeId: "wBqVgZTvuHE",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Yaaron — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 186,
    title: "Dus Bahane",
    artist: "KK · Shaan · Dus",
    youtubeId: "qE3DfF66DNA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["kk", "shaan"],
    quotes: [
      { text: "Dus Bahane — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 187,
    title: "Tere Bin",
    artist: "KK · Bas Ek Pal",
    youtubeId: "RkkDcaP8beI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tere Bin — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 188,
    title: "O Meri Jaan",
    artist: "KK · Life In A Metro",
    youtubeId: "jZi8TI050ec",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "O Meri Jaan — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 189,
    title: "Tu Aashiqui Hai",
    artist: "KK · Jhankaar Beats",
    youtubeId: "aw0s2KaoA2Q",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tu Aashiqui Hai — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 190,
    title: "Dil Mein Jaagi Dhadkan",
    artist: "KK · Sur",
    youtubeId: "gYPX11AitK4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Dil Mein Jaagi Dhadkan — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 191,
    title: "Bhula Dena",
    artist: "KK · Aashiqui 2",
    youtubeId: "II4CvWvgIsI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Bhula Dena — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 192,
    title: "Piya Aaye Na",
    artist: "KK · Aashiqui 2",
    youtubeId: "bXNhPOMgavI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Piya Aaye Na — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 193,
    title: "Chhod Aaye Hum",
    artist: "KK · Maachis",
    youtubeId: "mEQCOkFk-ME",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Chhod Aaye Hum — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 194,
    title: "Tum Ho Mera Pyar",
    artist: "KK · Haunted",
    youtubeId: "8ibe8RPRcIM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tum Ho Mera Pyar — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 195,
    title: "Ek Pal Ke Liye",
    artist: "KK · Ankahee",
    youtubeId: "6xFWI-abi0c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Ek Pal Ke Liye — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 196,
    title: "Koi Kahe Kehta Rahe",
    artist: "KK · Dil Chahta Hai",
    youtubeId: "ctJI7pCbxAo",
    era: "club",
    moods: ["party", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Koi Kahe Kehta Rahe — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 197,
    title: "Jaavedaan Hai",
    artist: "KK · 1920 Evil Returns",
    youtubeId: "x3EwxH4pc8s",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Jaavedaan Hai — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 198,
    title: "Bin Tere",
    artist: "KK · I Hate Luv Storys",
    youtubeId: "JPZxMhZ4KDw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Bin Tere — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 199,
    title: "Party On My Mind (Race 2)",
    artist: "KK · Honey Singh · Race 2",
    youtubeId: "O7AbwNGz4XA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["kk", "honey"],
    quotes: [
      { text: "Party On My Mind (Race 2) — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 200,
    title: "Rabba Main Toh Mar Gaya Oye",
    artist: "KK · Mausam",
    youtubeId: "rWC4EC6GQN0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Rabba Main Toh Mar Gaya Oye — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 201,
    title: "Bheegi Bheegi",
    artist: "KK · Gangster",
    youtubeId: "_RZwGzElnIs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Bheegi Bheegi — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 202,
    title: "O Jaana",
    artist: "KK · Gangster",
    youtubeId: "S6Gdnxtw9rM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "O Jaana — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 203,
    title: "Teri Yaad Yaad",
    artist: "KK · Vaah! Life Ho Toh Aisi",
    youtubeId: "_WMFsIxgSE0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Teri Yaad Yaad — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 204,
    title: "Jannatein Kahan",
    artist: "KK · Jannat 2",
    youtubeId: "BqVq573Bq40",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Jannatein Kahan — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 205,
    title: "Thoda Sa Pyar Hua Hai",
    artist: "KK · Maine Dil Tujhko Diya",
    youtubeId: "v2HYFTGrdsM",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Thoda Sa Pyar Hua Hai — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 206,
    title: "Tose Naina",
    artist: "KK · Anwar",
    youtubeId: "fXeIK4xbXgs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tose Naina — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 207,
    title: "Jee Le Zara",
    artist: "KK · Talaash",
    youtubeId: "UT3NjMzSzO4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Jee Le Zara — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 208,
    title: "Sapnon Se Bhare Naina",
    artist: "KK · Luck By Chance",
    youtubeId: "UfNjLCD-WVM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Sapnon Se Bhare Naina — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 209,
    title: "Mujh Mein Tu",
    artist: "KK · Special 26",
    youtubeId: "eJfGY7q0dGU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Mujh Mein Tu — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 210,
    title: "Yeh Honsla",
    artist: "KK · Dor",
    youtubeId: "3TndEMf6zws",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Yeh Honsla — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 211,
    title: "In Dino",
    artist: "KK · Life In A Metro",
    youtubeId: "DUH30aKt4Cg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "In Dino — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 212,
    title: "Uff Teri Ada",
    artist: "KK · Karthik Calling Karthik",
    youtubeId: "x9FDSf1YLMo",
    era: "club",
    moods: ["party", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Uff Teri Ada — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 213,
    title: "Door Na Ja",
    artist: "KK · Jannat",
    youtubeId: "zgsT4epSmpU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Door Na Ja — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 214,
    title: "Humsafar",
    artist: "KK",
    youtubeId: "dQBqgctS300",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Humsafar — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 215,
    title: "Soniye (Heartless)",
    artist: "KK · Heartless",
    youtubeId: "TTUxwWyClT0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Soniye (Heartless) — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 216,
    title: "Woh Pehli Baar",
    artist: "KK · Pyaar Mein Kabhi Kabhi",
    youtubeId: "KsFCVaDiegU",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Woh Pehli Baar — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 217,
    title: "Jaane Ye Kya Hua",
    artist: "KK · Karthik Calling Karthik",
    youtubeId: "HEAmcT5Gy_c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Jaane Ye Kya Hua — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 218,
    title: "O Jaana (Tere Naam)",
    artist: "KK · Tere Naam",
    youtubeId: "0pehqPZuB8A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "O Jaana (Tere Naam) — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 219,
    title: "Aye Khuda (Paathshaala)",
    artist: "KK · Paathshaala",
    youtubeId: "T-g39o0rDos",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Aye Khuda (Paathshaala) — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 220,
    title: "Lamha Lamha (Duet)",
    artist: "KK · Gangster",
    youtubeId: "lEpRrV0Wl_g",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Lamha Lamha (Duet) — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 221,
    title: "Beete Lamhein (Unplugged)",
    artist: "KK",
    youtubeId: "MO7H073x3RY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Beete Lamhein (Unplugged) — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 222,
    title: "Kya Mujhe Pyar Hai (Live)",
    artist: "KK",
    youtubeId: "spCw7iq1ilc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Kya Mujhe Pyar Hai (Live) — KK forever.", cite: "Bluetooth Era" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 223,
    title: "Tum Se Hi",
    artist: "Mohit Chauhan · Jab We Met",
    youtubeId: "mt9xg0mmt28",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Tum Se Hi — every Bluetooth transfer’s softest file.", cite: "Jab We Met" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 224,
    title: "Mauja Hi Mauja",
    artist: "Mohit Chauhan · Jab We Met",
    youtubeId: "PaDaoNnOQaM",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Mauja Hi Mauja on loudspeaker mode.", cite: "Jab We Met" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 225,
    title: "Ye Ishq Hai",
    artist: "Mohit Chauhan · Jab We Met",
    youtubeId: "b_sCZbYyuO4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Ye Ishq Hai — rain + earphones.", cite: "Jab We Met" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 226,
    title: "Dil Ye Bekarar Kyun Hai",
    artist: "Mohit Chauhan · Shreya Ghoshal · Players",
    youtubeId: "fXY-IEf8gAU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Dil Ye Bekarar — Players soft hit.", cite: "Players" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 227,
    title: "Khuda Bhi",
    artist: "Mohit Chauhan · Ek Paheli Leela",
    youtubeId: "IgK5-PUeARg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Khuda Bhi — late-night Bluetooth classic.", cite: "Ek Paheli Leela" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 228,
    title: "Kun Faya Kun",
    artist: "A.R. Rahman · Javed Ali · Mohit Chauhan · Rockstar",
    youtubeId: "T94PHkuydcw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Kun Faya Kun — soul on loop.", cite: "Rockstar" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 229,
    title: "Jo Bhi Main",
    artist: "Mohit Chauhan · Rockstar",
    youtubeId: "_kOzFMR9Hys",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Jo Bhi Main — Rockstar nights.", cite: "Rockstar" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 230,
    title: "Nadaan Parindey",
    artist: "Mohit Chauhan · A.R. Rahman · Rockstar",
    youtubeId: "ttIKsnxPrMY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Nadaan Parindey — fly back home.", cite: "Rockstar" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 231,
    title: "Phir Se Ud Chala",
    artist: "Mohit Chauhan · Rockstar",
    youtubeId: "2mWaqsC3U7k",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Phir Se Ud Chala — open-road Bluetooth.", cite: "Rockstar" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 232,
    title: "Tum Ho",
    artist: "Mohit Chauhan · Rockstar",
    youtubeId: "gkCKTuR-ECI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Tum Ho — quiet room, full volume.", cite: "Rockstar" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 233,
    title: "Katiya Karoon",
    artist: "Mohit Chauhan · Rockstar",
    youtubeId: "IlVjro3FlXM",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Katiya Karoon — folk fire on a 2GB card.", cite: "Rockstar" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 234,
    title: "Sadda Haq",
    artist: "Mohit Chauhan · Rockstar",
    youtubeId: "p9DQINKZxWE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Sadda Haq — protest anthem in earphones.", cite: "Rockstar" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 235,
    title: "Aur Ho",
    artist: "Mohit Chauhan · Alma Ferovic · Rockstar",
    youtubeId: "w7lNCCSFowk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Aur Ho — Rockstar afterglow.", cite: "Rockstar" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 236,
    title: "Sheher Mein",
    artist: "Mohit Chauhan · Karthik · Rockstar",
    youtubeId: "Igo8_eK7z9g",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Sheher Mein — city lights on LCD.", cite: "Rockstar" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 237,
    title: "Hawa Hawa",
    artist: "Mohit Chauhan · Rockstar",
    youtubeId: "0W1hGx5CChI",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Hawa Hawa — wind in the speakers.", cite: "Rockstar" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 238,
    title: "Masakali",
    artist: "Mohit Chauhan · Delhi-6",
    youtubeId: "SS3lIQdKP-A",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Masakali — pigeon dance era.", cite: "Delhi-6" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 239,
    title: "Dil Kyun Yeh Mera",
    artist: "Mohit Chauhan · Kites",
    youtubeId: "M51OYEo2yjc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Dil Kyun Yeh Mera — Kites sky.", cite: "Kites" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 240,
    title: "Zindagi Do Pal Ki",
    artist: "Mohit Chauhan · Kites",
    youtubeId: "r-XG86T2jNc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Zindagi Do Pal Ki — short lives, long songs.", cite: "Kites" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 241,
    title: "Tune Jo Na Kaha",
    artist: "Mohit Chauhan · New York",
    youtubeId: "dTu5dTEzVM4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Tune Jo Na Kaha — silent chats, loud feelings.", cite: "New York" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 242,
    title: "Bheegi Si Bhaagi Si",
    artist: "Mohit Chauhan · Antara Mitra · Raajneeti",
    youtubeId: "yHWPO9DDnsk",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Bheegi Si Bhaagi Si — monsoon Bluetooth.", cite: "Raajneeti" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 243,
    title: "Khwabon Ke Parindey",
    artist: "Mohit Chauhan · Luck By Chance",
    youtubeId: "R0XjwtP_iTY",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Khwabon Ke Parindey — dream files.", cite: "Luck By Chance" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 244,
    title: "Pee Loon",
    artist: "Mohit Chauhan · Once Upon A Time in Mumbaai",
    youtubeId: "D8XFTglfSMg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Pee Loon — golden-hour romance.", cite: "Once Upon A Time" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 245,
    title: "Saajna",
    artist: "Mohit Chauhan · I Hate Luv Storys",
    youtubeId: "zNpRLfA6ADg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Saajna — soft loop forever.", cite: "I Hate Luv Storys" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 246,
    title: "Ala Barfi",
    artist: "Mohit Chauhan · Barfi!",
    youtubeId: "1YDULSDalig",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Ala Barfi — mute cinema, loud heart.", cite: "Barfi!" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 247,
    title: "Tu Hi Haqeeqat",
    artist: "Mohit Chauhan · Tum Mile",
    youtubeId: "3QhajVg6SjE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Tu Hi Haqeeqat — late-night transfers.", cite: "Tum Mile" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 248,
    title: "Matargashti",
    artist: "Mohit Chauhan · Tamasha",
    youtubeId: "6vKucgAeF_Q",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Matargashti — Corsica in your pocket.", cite: "Tamasha" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 249,
    title: "Meherbaan",
    artist: "Mohit Chauhan · Ash King · Bang Bang",
    youtubeId: "_JND3HuOmDM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Meherbaan — action film soft side.", cite: "Bang Bang" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 250,
    title: "Heer Toh Badi Sad Hai",
    artist: "Mohit Chauhan · Jab Harry Met Sejal",
    youtubeId: "dioKyJt5-PE",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Heer Toh Badi Sad Hai — travel playlist staple.", cite: "JHMS" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 251,
    title: "Main Hoon Hero Tera",
    artist: "Mohit Chauhan · Hero",
    youtubeId: "DMH-GARKr1U",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Main Hoon Hero Tera — title track energy.", cite: "Hero" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 252,
    title: "Mai Ni Meriye",
    artist: "Mohit Chauhan",
    youtubeId: "cQNeFYgMjg0",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Mai Ni Meriye — pure Mohit folk soul.", cite: "Mohit Chauhan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 253,
    title: "Duur",
    artist: "Mohit Chauhan · Musafir",
    youtubeId: "GvuMA_m-sPs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Duur — distance never sounded this close.", cite: "Mohit Chauhan" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 254,
    title: "Dooba Dooba",
    artist: "Mohit Chauhan · Silk Route",
    youtubeId: "ecPMVO7JuTo",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Dooba Dooba — Silk Route forever.", cite: "Silk Route" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 255,
    title: "Mesmerize",
    artist: "Mohit Chauhan · Silk Route",
    youtubeId: "O5ftSkrScD8",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Mesmerize — before Bollywood, still timeless.", cite: "Silk Route" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 256,
    title: "Amplifier",
    artist: "Imran Khan",
    youtubeId: "uuCFRaFWjwY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Amplifier — every memory card’s loudest file.", cite: "Unforgettable" },
      { text: "Shared phone to phone.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 257,
    title: "Bewafa",
    artist: "Imran Khan",
    youtubeId: "JYodEWUdIso",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Bewafa — heartbreak on loop.", cite: "Unforgettable" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 258,
    title: "Ni Nachleh",
    artist: "Imran Khan · Lucky",
    youtubeId: "-160PFUogeI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Ni Nachleh — dance floor Bluetooth.", cite: "Unforgettable" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 259,
    title: "Satisfya",
    artist: "Imran Khan",
    youtubeId: "pfVODjDBFxU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Satisfya — flex track of the era.", cite: "Imran Khan" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 260,
    title: "Pata Chalgea",
    artist: "Imran Khan",
    youtubeId: "JOX09U8noOE",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Pata Chalgea — bass in the pocket.", cite: "Unforgettable" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 261,
    title: "Aaja We Mahiya",
    artist: "Imran Khan",
    youtubeId: "NDecL8qqJn4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Aaja We Mahiya — soft Imran nights.", cite: "Unforgettable" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 262,
    title: "Bounce Billo",
    artist: "Imran Khan",
    youtubeId: "yqqf6yV6l3g",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Bounce Billo — party transfer staple.", cite: "Imran Khan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 263,
    title: "Imaginary",
    artist: "Imran Khan",
    youtubeId: "eBI23_Sjfeo",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Imaginary — daydream bassline.", cite: "Imran Khan" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 264,
    title: "President Roley",
    artist: "Imran Khan",
    youtubeId: "40_-U_ca17w",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "President Roley — Unforgettable swagger.", cite: "Unforgettable" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 265,
    title: "Hey Girl",
    artist: "Imran Khan",
    youtubeId: "pa__uJOA0i8",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Hey Girl — chill Bluetooth vibes.", cite: "Imran Khan" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 266,
    title: "Zina",
    artist: "Imran Khan · Twin N Twice",
    youtubeId: "QXHN3ijCHJI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Zina — later-era Imran heat.", cite: "Imran Khan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 267,
    title: "Knightridah",
    artist: "Imran Khan",
    youtubeId: "E-5WCxcaH6Q",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Knightridah — night ride anthem.", cite: "Unforgettable" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 268,
    title: "Nai Reina",
    artist: "Imran Khan",
    youtubeId: "spNAziC7LDc",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Nai Reina — quiet side of Imran.", cite: "Imran Khan" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 269,
    title: "40 Pra",
    artist: "Imran Khan",
    youtubeId: "T3NV3ILOOak",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "40 Pra — underground Bluetooth legend.", cite: "Imran Khan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 270,
    title: "Gora Gora Rang",
    artist: "Imran Khan",
    youtubeId: "iP872SycxjI",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Gora Gora Rang — Punjabi pop classic.", cite: "Imran Khan" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 271,
    title: "Saajna",
    artist: "Falak Shabir · I Me Aur Main",
    youtubeId: "1ybUPCdkYvI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Saajna — Falak on every memory card.", cite: "I Me Aur Main" },
      { text: "Shared phone to phone.", cite: "Bluetooth Era" },
    ],
  },
  {
    id: 272,
    title: "Soniye",
    artist: "Falak Shabir",
    youtubeId: "Sk9UE7xEWvE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Soniye — soft Falak nights.", cite: "Falak Shabir" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 273,
    title: "Tu Mera Dil",
    artist: "Falak Shabir",
    youtubeId: "SmE856v3Jbk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Tu Mera Dil — Bluetooth romance.", cite: "Falak Shabir" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 274,
    title: "Ijazat",
    artist: "Falak Shabir",
    youtubeId: "nn59knX5n1w",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Ijazat — permission to feel everything.", cite: "Falak Shabir" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 275,
    title: "Teri Kasam",
    artist: "Falak Shabir · Judah",
    youtubeId: "t4yUELG8o28",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Teri Kasam — Judah-era Falak.", cite: "Judah" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 276,
    title: "Intezaar",
    artist: "Falak Shabir",
    youtubeId: "vK_DPgoiBPU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Intezaar — waiting never sounded this good.", cite: "Falak Shabir" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 277,
    title: "Kya Tujhe Ab Ye Dil Bataye",
    artist: "Falak Shabir · Sanam Re",
    youtubeId: "BLsEdmwqUak",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Sanam Re soft hit — Falak forever.", cite: "Sanam Re" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 278,
    title: "Bholi Bhali",
    artist: "Falak Shabir · Judah",
    youtubeId: "2CM-KIZoe40",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Bholi Bhali — Judah album gem.", cite: "Judah" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 279,
    title: "Mandiyan",
    artist: "Falak Shabir",
    youtubeId: "zo7qfjGy0U4",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Mandiyan — Falak on the streets.", cite: "Falak Shabir" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 280,
    title: "Mujh Main Hai Tu",
    artist: "Falak Shabir",
    youtubeId: "nFCvMzoSgIg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Mujh Main Hai Tu — pure Falak ache.", cite: "Falak Shabir" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 281,
    title: "Sitam",
    artist: "Falak Shabir",
    youtubeId: "vRq1Uu-RPa4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Sitam — OST heartbreak hours.", cite: "Falak Shabir" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 282,
    title: "With You",
    artist: "Falak Shabir · DJ Harpz",
    youtubeId: "kh5MNEcFrvM",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "With You — UK desi Bluetooth vibe.", cite: "Falak Shabir" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 283,
    title: "Yaar Mila De",
    artist: "Falak Shabir",
    youtubeId: "urOpxQwQZ30",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Yaar Mila De — friendship anthem.", cite: "Falak Shabir" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 284,
    title: "Pyaar Da Sahara",
    artist: "Falak Shabir",
    youtubeId: "-Jq4aAtmvt4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Pyaar Da Sahara — soft Falak comfort.", cite: "Falak Shabir" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 285,
    title: "Naina Da Nasha",
    artist: "Deep Money · Falak Shabir",
    youtubeId: "afCeAahHyjk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Naina Da Nasha — party card staple.", cite: "Falak Shabir" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 286,
    title: "Ik Waar",
    artist: "Falak Shabir · DJ Shadow",
    youtubeId: "afDIo7NxqSA",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Ik Waar — one more Falak loop.", cite: "Falak Shabir" },
      { text: "Transfer complete.", cite: "Nokia days" },
    ],
  },
  {
    id: 287,
    title: "Hum Sab Jantey Hai",
    artist: "Falak Shabbir · Nimra Mehra",
    youtubeId: "X7kSKz5qZMQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["falak"],
    quotes: [
      { text: "Hum Sab Jantey Hai — modern Falak feels.", cite: "Falak Shabbir" },
      { text: "On every memory card.", cite: "Nokia days" },
    ],
  },
  {
    id: 288,
    title: "Bakhuda Tumhi Ho",
    artist: "Atif Aslam \u00b7 Alka Yagnik \u00b7 Kismat Konnection",
    youtubeId: "PP7WOMnT288",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Bakhuda Tumhi Ho on every memory card.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 289,
    title: "O Mere Khuda",
    artist: "Atif Aslam \u00b7 Prince",
    youtubeId: "MnR5YqU-0GI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "O Mere Khuda \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 290,
    title: "Baarishein",
    artist: "Arko \u00b7 Atif Aslam",
    youtubeId: "P0NfnFYpENo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Baarishein \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 291,
    title: "Doorie",
    artist: "Atif Aslam \u00b7 Doorie",
    youtubeId: "Jv2Z9KJgYjU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Doorie \u2014 album classic on every card.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 292,
    title: "Ehsaas",
    artist: "Atif Aslam \u00b7 Doorie",
    youtubeId: "eYpfKTq0_eg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Ehsaas \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 293,
    title: "Maula",
    artist: "Atif Aslam \u00b7 Doorie",
    youtubeId: "An3PS08bcVE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Maula \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 294,
    title: "Piya O Re Piya",
    artist: "Atif Aslam \u00b7 Shreya Ghoshal \u00b7 Tere Naal Love Ho Gaya",
    youtubeId: "u-FaTNxrWhw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Piya O Re Piya \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 295,
    title: "Rafta Rafta",
    artist: "Atif Aslam \u00b7 Raj Ranjodh",
    youtubeId: "B-J_PuEhyOM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Rafta Rafta \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 296,
    title: "Bairiyaa",
    artist: "Atif Aslam \u00b7 Shreya Ghoshal \u00b7 Tere Naal Love Ho Gaya",
    youtubeId: "CW3QJkF_w-U",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Bairiyaa \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 297,
    title: "Hona Tha Pyar",
    artist: "Atif Aslam \u00b7 Hadiqa Kiani \u00b7 Bol",
    youtubeId: "jFmi69lb8sQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Hona Tha Pyar \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 298,
    title: "Tu Mohabbat Hai",
    artist: "Atif Aslam \u00b7 Monali Thakur \u00b7 Tere Naal Love Ho Gaya",
    youtubeId: "mc0eVgtuxd0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tu Mohabbat Hai \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 299,
    title: "Meri Kahani",
    artist: "Atif Aslam \u00b7 Meri Kahani",
    youtubeId: "Wh-AgS7PKdM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Meri Kahani \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 300,
    title: "Khair Mangda",
    artist: "Atif Aslam",
    youtubeId: "vYcpoSLpF3k",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Khair Mangda \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 301,
    title: "Yakeen",
    artist: "Atif Aslam \u00b7 Yakeen",
    youtubeId: "KiF3UPITWq8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Yakeen \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 302,
    title: "Bheegi Yaadein",
    artist: "Atif Aslam \u00b7 Woh Lamhe",
    youtubeId: "itQ9EpzaeXw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif", "emraan"],
    quotes: [
      { text: "Bheegi Yaadein \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 303,
    title: "Tere Bin",
    artist: "Atif Aslam \u00b7 Doorie",
    youtubeId: "GmbOGB91CYg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tere Bin \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 304,
    title: "High Heels Te Nachche",
    artist: "Meet Bros \u00b7 Yo Yo Honey Singh \u00b7 KI & KA",
    youtubeId: "N_KpjLhJa1k",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "High Heels Te Nachche \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 305,
    title: "Main Tera Boyfriend",
    artist: "Arijit Singh \u00b7 Neha Kakkar \u00b7 Yo Yo Honey Singh \u00b7 Raabta",
    youtubeId: "1ac9FLyQo88",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey", "arijit"],
    quotes: [
      { text: "Main Tera Boyfriend \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 306,
    title: "Aaja Ni Chamak Challo",
    artist: "Yo Yo Honey Singh \u00b7 Dope Shope",
    youtubeId: "BTTJCFb6h3s",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Aaja Ni Chamak Challo \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 307,
    title: "Sajna",
    artist: "Shael Oswal \u00b7 Yo Yo Honey Singh",
    youtubeId: "k_FHxA8cyeQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Sajna \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 308,
    title: "Jhoom Sharaabi",
    artist: "Yo Yo Honey Singh \u00b7 De De Pyaar De 2",
    youtubeId: "gE4mWAnZGb4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Jhoom Sharaabi \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 309,
    title: "Melody Roja",
    artist: "Yo Yo Honey Singh",
    youtubeId: "mltafzVW-Ms",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Melody Roja \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 310,
    title: "Reactor",
    artist: "Yo Yo Honey Singh \u00b7 Sunny Leone",
    youtubeId: "QQ0s3UeqGPI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["honey"],
    quotes: [
      { text: "Reactor \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 311,
    title: "Tujhe Sochta Hoon",
    artist: "KK \u00b7 Emraan Hashmi \u00b7 Jannat 2",
    youtubeId: "cZBFVrp3qgw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "kk"],
    quotes: [
      { text: "Tujhe Sochta Hoon \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 312,
    title: "Aap Ki Kashish",
    artist: "Himesh Reshammiya \u00b7 Emraan Hashmi \u00b7 Aashiq Banaya Aapne",
    youtubeId: "jx0qbW_YTCs",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["emraan", "himesh"],
    quotes: [
      { text: "Aap Ki Kashish \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 313,
    title: "Phir Mohabbat",
    artist: "Mohammed Irfan \u00b7 Arijit Singh \u00b7 Emraan Hashmi \u00b7 Murder 2",
    youtubeId: "m1rcse8INWk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "arijit"],
    quotes: [
      { text: "Phir Mohabbat \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 314,
    title: "Maula Maula",
    artist: "Emraan Hashmi \u00b7 Awarapan",
    youtubeId: "7xPo_XaxSJU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Maula Maula \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 315,
    title: "Tera Chehra",
    artist: "Arijit Singh \u00b7 Emraan Hashmi \u00b7 Sanam Teri Kasam",
    youtubeId: "i6fuIGIzaAs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "himesh", "arijit"],
    quotes: [
      { text: "Tera Chehra \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 316,
    title: "Hamari Adhuri Kahani",
    artist: "Arijit Singh \u00b7 Emraan Hashmi \u00b7 Hamari Adhuri Kahani",
    youtubeId: "f3FFOBrMmdg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "arijit"],
    quotes: [
      { text: "Hamari Adhuri Kahani \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 317,
    title: "Humnava",
    artist: "Papon \u00b7 Emraan Hashmi \u00b7 Hamari Adhuri Kahani",
    youtubeId: "ktPD6TMovxs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan", "papon"],
    quotes: [
      { text: "Humnava \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 318,
    title: "Bheege Hont Tere",
    artist: "Kunal Ganjawala \u00b7 Emraan Hashmi \u00b7 Murder",
    youtubeId: "ojUTswFMjyM",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Bheege Hont Tere \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 319,
    title: "Tere Bin Nahi Laage",
    artist: "Mustafa Zahid \u00b7 Emraan Hashmi \u00b7 Ek Paheli Leela",
    youtubeId: "ODp3B_pQD48",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Tere Bin Nahi Laage \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 320,
    title: "Maahi",
    artist: "Toshi \u00b7 Sharib \u00b7 Emraan Hashmi",
    youtubeId: "e1edxTqJnKk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Maahi \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 321,
    title: "Sach Keh Raha Hai Deewana",
    artist: "KK \u00b7 Rehnaa Hai Terre Dil Mein",
    youtubeId: "HC-t5iSoS8M",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Sach Keh Raha Hai Deewana \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 322,
    title: "Pyaar Ke Pal",
    artist: "KK",
    youtubeId: "NUqlCJTYu6I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Pyaar Ke Pal \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 323,
    title: "Bas Ek Pal",
    artist: "KK \u00b7 Bas Ek Pal",
    youtubeId: "7MDCPJhs5Fk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Bas Ek Pal \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 324,
    title: "Dooriyan",
    artist: "Mohit Chauhan \u00b7 Love Aaj Kal",
    youtubeId: "kPtn26x8TZM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Dooriyan \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 325,
    title: "Tu Bin Bataye",
    artist: "Mohit Chauhan \u00b7 Rang De Basanti",
    youtubeId: "UqblLzBwlns",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Tu Bin Bataye \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 326,
    title: "Khoon Chala",
    artist: "Mohit Chauhan \u00b7 Rang De Basanti",
    youtubeId: "28OJpIA_rNo",
    era: "memory",
    moods: ["desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Khoon Chala \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 327,
    title: "Roobaroo",
    artist: "A.R. Rahman \u00b7 Mohit Chauhan \u00b7 Rang De Basanti",
    youtubeId: "8kMv5ssr6Dw",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Roobaroo \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 328,
    title: "Ik Junoon (Paint It Red)",
    artist: "Mohit Chauhan \u00b7 Zindagi Na Milegi Dobara",
    youtubeId: "ivUXoV0qLpE",
    era: "memory",
    moods: ["party", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Ik Junoon (Paint It Red) \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 329,
    title: "Moh Moh Ke Dhaage",
    artist: "Papon \u00b7 Dum Laga Ke Haisha",
    youtubeId: "T-8vVY-IECk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Moh Moh Ke Dhaage \u2014 soft Bluetooth classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 330,
    title: "Labon Ka Karobaar",
    artist: "Papon \u00b7 Befikre",
    youtubeId: "o1naAWn2IsY",
    era: "memory",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Labon Ka Karobaar \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 331,
    title: "Jiyein Kyun",
    artist: "Papon \u00b7 Dum Maaro Dum",
    youtubeId: "sJW37INWnYk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Jiyein Kyun \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 332,
    title: "Bulleya",
    artist: "Papon \u00b7 Sultan",
    youtubeId: "a9Hxkc9YxGE",
    era: "memory",
    moods: ["desi"],
    artists: ["papon"],
    quotes: [
      { text: "Bulleya \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 333,
    title: "Kaun Mera",
    artist: "Papon \u00b7 Special 26",
    youtubeId: "YC6XzrpRdoI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Kaun Mera \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 334,
    title: "Kyon",
    artist: "Papon \u00b7 Sunidhi Chauhan \u00b7 Barfi",
    youtubeId: "Rq7tyOcVgLQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon", "sunidhi"],
    quotes: [
      { text: "Kyon \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 335,
    title: "Maula Sun Le Re",
    artist: "Papon \u00b7 Madras Cafe",
    youtubeId: "CWgpfxiuY8E",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Maula Sun Le Re \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 336,
    title: "Tu",
    artist: "Papon \u00b7 Shreya Ghoshal \u00b7 Bobby Jasoos",
    youtubeId: "QGJdBK2xtys",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Tu \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 337,
    title: "Heartquake",
    artist: "Papon \u00b7 Karwaan",
    youtubeId: "a4NGZFMhEUY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Heartquake \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 338,
    title: "Tu Meri Poori Kahani",
    artist: "Papon \u00b7 Anu Malik",
    youtubeId: "sJ-JInwwUvw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Tu Meri Poori Kahani \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 339,
    title: "Moh Moh Ke Dhaage (Unplugged)",
    artist: "Papon \u00b7 MTV Unplugged",
    youtubeId: "D1ESokj6fOQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["papon"],
    quotes: [
      { text: "Moh Moh Ke Dhaage (Unplugged) \u2014 Bluetooth era classic.", cite: "Bluetooth Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 340,
    title: "My Time Is Now",
    artist: "John Cena \u00b7 WWE Entrance",
    youtubeId: "Aqv5TYQTFYM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "The Champ is here \u2014 Bluetooth arena mode.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 341,
    title: "Electrifying",
    artist: "The Rock \u00b7 WWE Entrance",
    youtubeId: "xG_bocuI54M",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "If you smelllll\u2026 shared phone to phone.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 342,
    title: "Glass Shatters",
    artist: "Stone Cold Steve Austin \u00b7 WWE Entrance",
    youtubeId: "17JRkXlFo90",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Glass shatters \u2014 Attitude Era classic.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 343,
    title: "Rest In Peace",
    artist: "The Undertaker \u00b7 WWE Entrance",
    youtubeId: "nGh5D-wUicE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Rest In Peace \u2014 lights out classic.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 344,
    title: "Ain't No Grave",
    artist: "The Undertaker \u00b7 WWE Entrance",
    youtubeId: "yeJpYoGToPg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Ain't No Grave \u2014 Deadman returns.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 345,
    title: "The Game",
    artist: "Triple H \u00b7 WWE Entrance",
    youtubeId: "svYTnXU8rHg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "The Game \u2014 Cerebral Assassin walkout.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 346,
    title: "Sexy Boy",
    artist: "Shawn Michaels \u00b7 WWE Entrance",
    youtubeId: "EKs0aDNDWY4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Sexy Boy \u2014 Showstopper entrance.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 347,
    title: "Voices",
    artist: "Randy Orton \u00b7 Rev Theory \u00b7 WWE Entrance",
    youtubeId: "pM76LtznNrc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Voices \u2014 Viper is here.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 348,
    title: "I Walk Alone",
    artist: "Batista \u00b7 WWE Entrance",
    youtubeId: "l6SOYlunc88",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "I Walk Alone \u2014 Animal mode.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 349,
    title: "Cult of Personality",
    artist: "CM Punk \u00b7 Living Colour \u00b7 WWE Entrance",
    youtubeId: "jzbITYihqQg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Cult of Personality \u2014 Best in the World.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 350,
    title: "Booyaka 619",
    artist: "Rey Mysterio \u00b7 WWE Entrance",
    youtubeId: "1QFonkRXeO8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Booyaka 619 \u2014 mask and memory card.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 351,
    title: "Metalingus",
    artist: "Edge \u00b7 Alter Bridge \u00b7 WWE Entrance",
    youtubeId: "z6rhLTg6M7A",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Metalingus \u2014 Rated-R entrance.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 352,
    title: "No More Words",
    artist: "Jeff Hardy \u00b7 WWE Entrance",
    youtubeId: "C8mFcUAxFlo",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "No More Words \u2014 Charismatic Enigma.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 353,
    title: "Slow Chemical",
    artist: "Kane \u00b7 Finger Eleven \u00b7 WWE Entrance",
    youtubeId: "afe6TNZWRJ4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Slow Chemical \u2014 Big Red Machine.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 354,
    title: "Break The Walls Down",
    artist: "Chris Jericho \u00b7 WWE Entrance",
    youtubeId: "EbIMKOUJWEQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Break The Walls Down \u2014 Y2J.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 355,
    title: "Medal",
    artist: "Kurt Angle \u00b7 WWE Entrance",
    youtubeId: "jYRKvdEJSJc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "You suck \u2014 Medal entrance.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 356,
    title: "Next Big Thing",
    artist: "Brock Lesnar \u00b7 WWE Entrance",
    youtubeId: "J6kDgywJi_4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Next Big Thing \u2014 Beast Incarnate.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 357,
    title: "Head Of The Table",
    artist: "Roman Reigns \u00b7 WWE Entrance",
    youtubeId: "n0QT_teLcNk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Acknowledge him \u2014 Head of the Table.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 358,
    title: "Burn It Down",
    artist: "Seth Rollins \u00b7 WWE Entrance",
    youtubeId: "SKlAV7EMQmc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Burn It Down \u2014 Visionary walkout.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 359,
    title: "Phenomenal",
    artist: "AJ Styles \u00b7 WWE Entrance",
    youtubeId: "fj9ala8nZ7U",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Phenomenal \u2014 Styles Clash vibes.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 360,
    title: "Kingdom",
    artist: "Cody Rhodes \u00b7 WWE Entrance",
    youtubeId: "tJj6Z-q9kcA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Kingdom \u2014 American Nightmare.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 361,
    title: "Are You Ready?",
    artist: "D-Generation X \u00b7 WWE Entrance",
    youtubeId: "EWRa1jFIK-0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Suck it \u2014 DX classic.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 362,
    title: "Line In The Sand",
    artist: "Evolution \u00b7 WWE Entrance",
    youtubeId: "EH2FBDs4Epw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Line In The Sand \u2014 Evolution.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 363,
    title: "Rockhouse",
    artist: "nWo \u00b7 WCW / WWE Entrance",
    youtubeId: "3gm0w4Pb0ls",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "nWo forever \u2014 Rockhouse.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 364,
    title: "Real American",
    artist: "Hulk Hogan \u00b7 WWE Entrance",
    youtubeId: "lZcQZTOeSLc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Real American \u2014 Hulkamania.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 365,
    title: "Also Sprach Zarathustra",
    artist: "Ric Flair \u00b7 WWE Entrance",
    youtubeId: "qW8MYcy9u8M",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Wooo! \u2014 Nature Boy theme.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 366,
    title: "I Came To Play",
    artist: "The Miz \u00b7 Downstait \u00b7 WWE Entrance",
    youtubeId: "s_RbUDBHT0M",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "I Came To Play \u2014 Awesome.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 367,
    title: "Written In My Face",
    artist: "Sheamus \u00b7 WWE Entrance",
    youtubeId: "-Suxx3_abgI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Written In My Face \u2014 Celtic Warrior.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 368,
    title: "Invasion",
    artist: "Goldberg \u00b7 WWE Entrance",
    youtubeId: "M9udAirjw3U",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Who's next? \u2014 Goldberg.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 369,
    title: "Special Op",
    artist: "The Shield \u00b7 WWE Entrance",
    youtubeId: "1d_1S31lIOY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Special Op \u2014 Believe in The Shield.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 370,
    title: "Flight of the Valkyries",
    artist: "Daniel Bryan \u00b7 WWE Entrance",
    youtubeId: "WHU5D2O31vs",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Yes! Yes! Yes! \u2014 Valkyries.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 371,
    title: "The Man",
    artist: "Becky Lynch \u00b7 WWE Entrance",
    youtubeId: "bna-e4oHkTw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "The Man \u2014 Becky Lynch.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 372,
    title: "Gallantry",
    artist: "Drew McIntyre \u00b7 WWE Entrance",
    youtubeId: "03aaGXSDOiQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Gallantry \u2014 Scottish Warrior.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 373,
    title: "Loaded",
    artist: "The Hardy Boyz \u00b7 WWE Entrance",
    youtubeId: "urS0StTaTLw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "Loaded \u2014 Hardy Boyz.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 374,
    title: "One Of A Kind",
    artist: "Rob Van Dam \u00b7 WWE Entrance",
    youtubeId: "1Vh6UVZ3aek",
    era: "club",
    moods: ["party", "desi"],
    artists: ["wwe"],
    quotes: [
      { text: "One Of A Kind \u2014 RVD.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 375,
    title: "12 Saal",
    artist: "Bilal Saeed \u00b7 Twelve",
    youtubeId: "UiVErlUAi_U",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "12 Saal \u2014 Bluetooth Punjabi classic.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 376,
    title: "Mahi Mahi",
    artist: "Bilal Saeed \u00b7 Twelve",
    youtubeId: "BuiMqMNff1c",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Mahi Mahi on every memory card.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 377,
    title: "2 Number",
    artist: "Bilal Saeed \u00b7 Amrinder Gill \u00b7 Twelve",
    youtubeId: "Y8VowIFepy0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "2 Number \u2014 Twelve era hit.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 378,
    title: "No Make Up",
    artist: "Bilal Saeed \u00b7 Bohemia",
    youtubeId: "dwiaTmTDHWM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "No Make Up \u2014 Bloodline classic.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 379,
    title: "Baari",
    artist: "Bilal Saeed \u00b7 Momina Mustehsan",
    youtubeId: "uMcG0tjYWrU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Baari \u2014 soft late-night transfer.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 380,
    title: "Teri Khair Mangdi",
    artist: "Bilal Saeed \u00b7 Baar Baar Dekho",
    youtubeId: "dMByhaezv9A",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Teri Khair Mangdi \u2014 Bollywood Bilal.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 381,
    title: "LA LA LA",
    artist: "Neha Kakkar \u00b7 Bilal Saeed \u00b7 Baazaar",
    youtubeId: "H3l1B_0Jdmc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "LA LA LA \u2014 party card staple.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 382,
    title: "Hookah Hookah",
    artist: "Bilal Saeed \u00b7 Muhfaad",
    youtubeId: "JfE5Deu8RTU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Hookah Hookah \u2014 Bloodline vibes.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 383,
    title: "Lethal Combination",
    artist: "Bilal Saeed \u00b7 Roach Killa",
    youtubeId: "ikjA7-Vt9iQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Lethal Combination \u2014 Speed Records.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 384,
    title: "Lambiya Judaiyan",
    artist: "Bilal Saeed",
    youtubeId: "j0GtcPQlPKo",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Lambiya Judaiyan \u2014 long-distance feels.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 385,
    title: "Kaash",
    artist: "Bilal Saeed \u00b7 Bloodline",
    youtubeId: "ZBunyPEE-ik",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Kaash \u2014 Bloodline soft hit.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 386,
    title: "Choothi",
    artist: "Bilal Saeed",
    youtubeId: "Vrf_cx8uDy4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Choothi \u2014 Punjabi Bluetooth classic.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 387,
    title: "Udh Di Phiran",
    artist: "Sunanda Sharma \u00b7 Bilal Saeed",
    youtubeId: "x1OYHA7gujE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Udh Di Phiran \u2014 modern Bilal.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 388,
    title: "High Waist Jeans",
    artist: "Bilal Saeed \u00b7 Ziggy Bonafide",
    youtubeId: "xZULD-nZ11s",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "High Waist Jeans \u2014 party loop.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 389,
    title: "Nee Soniye",
    artist: "Bilal Saeed",
    youtubeId: "904lJgiAo3g",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Nee Soniye \u2014 soft Bilal.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 390,
    title: "Ja Jay Tu Jana",
    artist: "Bilal Saeed",
    youtubeId: "FPYAB5KSuFM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Ja Jay Tu Jana \u2014 full video classic.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 391,
    title: "Suroor",
    artist: "Neha Kakkar \u00b7 Bilal Saeed",
    youtubeId: "CRrJwY_qS1c",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Suroor \u2014 Neha x Bilal.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 392,
    title: "Ek Teri Yaad",
    artist: "BONAFIDE \u00b7 Bilal Saeed",
    youtubeId: "1KQ7QyEfbuw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Ek Teri Yaad \u2014 Memories.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 393,
    title: "12 Saal Remix",
    artist: "Bilal Saeed",
    youtubeId: "NKQ_hCxxRKc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "12 Saal Remix \u2014 one more loop.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 394,
    title: "Adhi Adhi Raat",
    artist: "Bilal Saeed \u00b7 Twelve",
    youtubeId: "sT5I4pNN30U",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Adhi Adhi Raat \u2014 Twelve deep cut.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 395,
    title: "Blah Blah Blah",
    artist: "Bilal Saeed \u00b7 Young Desi",
    youtubeId: "e2e6wvdYuQA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["bilal"],
    quotes: [
      { text: "Blah Blah Blah \u2014 Speed Records.", cite: "Bilal Saeed" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 396,
    title: "Oh Kehri",
    artist: "Jazzy B \u00b7 Sukshinder Shinda",
    youtubeId: "vB8-G-ZIkQ4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Oh Kehri \u2014 Punjabi Bluetooth classic.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 397,
    title: "Romeo",
    artist: "Jazzy B \u00b7 Sukshinder Shinda",
    youtubeId: "K-XQP1VwYrY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Romeo \u2014 Jazzy B era anthem.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 398,
    title: "Dil Lutiya",
    artist: "Jazzy B \u00b7 Apache Indian \u00b7 Sukshinder Shinda",
    youtubeId: "TI7RQO2cuh0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Dil Lutiya \u2014 crossover classic.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 399,
    title: "Rambo",
    artist: "Jazzy B",
    youtubeId: "14SQofBSZp8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Rambo \u2014 Speed Records hit.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 400,
    title: "Patole",
    artist: "Jazzy B \u00b7 Sonu Kakkar",
    youtubeId: "HnBiTxnB3pM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Patole \u2014 party card staple.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 401,
    title: "Naag",
    artist: "Jazzy B \u00b7 Sukshinder Shinda",
    youtubeId: "J1zcfvGPBfg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Naag \u2014 Jazzy B fire.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 402,
    title: "Naag 2",
    artist: "Jazzy B",
    youtubeId: "4ihC_A5faY8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Naag 2 \u2014 sequel on loop.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 403,
    title: "Jindey Sun Jindey",
    artist: "Jazzy B \u00b7 Mahek Chahal \u00b7 Sukshinder Shinda",
    youtubeId: "ulVkQojja18",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Jindey Sun Jindey \u2014 90s vibes.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 404,
    title: "Already Sohni",
    artist: "Jazzy B",
    youtubeId: "Z_I-HdOCQQc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Already Sohni \u2014 modern Jazzy.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 405,
    title: "Lak De Hulareh",
    artist: "Jazzy B",
    youtubeId: "08GeN4mgpQw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Lak De Hulareh \u2014 dancefloor classic.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 406,
    title: "Yaari",
    artist: "Jazzy B \u00b7 Romeo",
    youtubeId: "DJ0jeIy0HcM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Yaari \u2014 friendship anthem.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 407,
    title: "Dil Mudia Na",
    artist: "Jazzy B \u00b7 Bunty Bains",
    youtubeId: "BDGUqy1hnUY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Dil Mudia Na \u2014 Ishq Di EP.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 408,
    title: "Saanu Rab Ne Banaye Maharaje",
    artist: "Jazzy B \u00b7 Maharajas",
    youtubeId: "7ksXwq1H3eg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Maharajas \u2014 royal entrance.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 409,
    title: "Surma",
    artist: "Jazzy B \u00b7 Sukshinder Shinda",
    youtubeId: "Jg7PryiPjpw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Surma \u2014 John Abraham era.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 410,
    title: "Jugni",
    artist: "Jazzy B \u00b7 Saheb Biwi Aur Gangster Returns",
    youtubeId: "DEs7F4mW78c",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Jugni \u2014 film classic.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 411,
    title: "Soniye",
    artist: "Jazzy B",
    youtubeId: "sVz-xzZ_MO4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Soniye \u2014 soft Jazzy B.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 412,
    title: "Putt Sardara De",
    artist: "Jazzy B \u00b7 Byg Byrd",
    youtubeId: "gkkUEpdthMc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Putt Sardara De \u2014 2020 heat.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 413,
    title: "Shri Guru Granth Sahib Ji",
    artist: "Jazzy B \u00b7 Sukshinder Shinda",
    youtubeId: "giHQwP6m3N8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["jazzy"],
    quotes: [
      { text: "Spiritual Jazzy B classic.", cite: "Jazzy B" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 414,
    title: "Aashiq Banaya Aapne",
    artist: "Himesh Reshammiya \u00b7 Shreya Ghoshal",
    youtubeId: "UCAVuqJDZqE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Aashiq Banaya Aapne \u2014 the Himesh era.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 415,
    title: "Jhalak Dikhlaja",
    artist: "Himesh Reshammiya \u00b7 Aksar",
    youtubeId: "6hQ7yZIh9K4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Jhalak Dikhlaja \u2014 Aksar classic.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 416,
    title: "Tera Suroor",
    artist: "Himesh Reshammiya \u00b7 Aap Kaa Surroor",
    youtubeId: "idNyQkZU2VA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Tera Suroor \u2014 nasal magic.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 417,
    title: "Tera Surroor (Remix)",
    artist: "Himesh Reshammiya \u00b7 Aap Kaa Surroor",
    youtubeId: "Oqe_2fs5RIQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Tera Surroor Remix \u2014 club card.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 418,
    title: "Aapka Kya Hoga (Dhanno)",
    artist: "Mika Singh \u00b7 Himesh Reshammiya \u00b7 Housefull",
    youtubeId: "gcVbtUGLDNk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Dhanno \u2014 Housefull party.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 419,
    title: "Hookah Bar",
    artist: "Himesh Reshammiya \u00b7 Khiladi 786",
    youtubeId: "b4b1cMVZOUU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Hookah Bar \u2014 Khiladi 786.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 420,
    title: "Wada Tainu",
    artist: "Himesh Reshammiya \u00b7 Aap Kaa Surroor",
    youtubeId: "je1DXe2o6d4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Wada Tainu \u2014 Surroor classic.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 421,
    title: "I Love You Sayyoni",
    artist: "Himesh Reshammiya \u00b7 Aap Kaa Surroor",
    youtubeId: "HDRLic_vfXM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "I Love You Sayyoni \u2014 memory card hit.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 422,
    title: "Tanhaiyaan",
    artist: "Himesh Reshammiya \u00b7 Aap Kaa Surroor",
    youtubeId: "ZVwq_a5JrO0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Tanhaiyaan \u2014 Surroor film.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 423,
    title: "Kajraare",
    artist: "Himesh Reshammiya",
    youtubeId: "k_rWvSracr4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Kajraare \u2014 Himesh signature.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 424,
    title: "Dekhoon Tujhe To Pyaar Aaye",
    artist: "Himesh Reshammiya \u00b7 Apne",
    youtubeId: "GZ-x3jUEr3M",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Dekhoon Tujhe \u2014 Apne romance.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 425,
    title: "Mohabbat Ke",
    artist: "Himesh Reshammiya \u00b7 Tulsi Kumar \u00b7 Aksar",
    youtubeId: "_AEoIBrTVsU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Mohabbat Ke \u2014 Aksar duet.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 426,
    title: "Aashiq Banaya Aapne (Recreate)",
    artist: "Himesh Reshammiya \u00b7 Neha Kakkar \u00b7 Hate Story 4",
    youtubeId: "obUOnAh25Ws",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Aashiq Banaya recreate \u2014 new era.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 427,
    title: "Jumme Ki Raat",
    artist: "Mika Singh \u00b7 Himesh Reshammiya \u00b7 Kick",
    youtubeId: "dv_Qjzca56k",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Jumme Ki Raat \u2014 Kick party.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 428,
    title: "Aashiqana",
    artist: "Himesh Reshammiya \u00b7 Alka Yagnik \u00b7 Good Boy Bad Boy",
    youtubeId: "aTkCUFgzpjE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Aashiqana \u2014 Good Boy Bad Boy.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 429,
    title: "Soniye",
    artist: "Himesh Reshammiya \u00b7 KK \u00b7 Sunidhi \u00b7 Aksar",
    youtubeId: "RE46-BjrhNQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh", "sunidhi"],
    quotes: [
      { text: "Soniye \u2014 Aksar soft hit.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 430,
    title: "Tera Hi Bas Hona Chaahoon",
    artist: "Himesh Reshammiya \u00b7 Haunted",
    youtubeId: "3DcU5pD1jLw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Tera Hi Bas Hona \u2014 Haunted.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 431,
    title: "Dil Ke Sannate",
    artist: "Himesh Reshammiya",
    youtubeId: "nUDIZ33F9yA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Dil Ke Sannate \u2014 deep cut.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 432,
    title: "Tonight",
    artist: "Himesh Reshammiya \u00b7 Aap Se Mausiiquii",
    youtubeId: "DTrkJkOShtw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Tonight \u2014 Aap Se Mausiiquii.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 433,
    title: "Aafreen Tera Chehra",
    artist: "Himesh Reshammiya \u00b7 Red",
    youtubeId: "LRx7kW9Dt3M",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Aafreen Tera Chehra \u2014 Red.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 434,
    title: "Shakalaka Boom Boom",
    artist: "Himesh Reshammiya",
    youtubeId: "9cU0xgt03hc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Shakalaka Boom Boom \u2014 title heat.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 435,
    title: "Heeriye",
    artist: "Himesh Reshammiya \u00b7 Arijit \u00b7 Shreya \u00b7 Happy Hardy And Heer",
    youtubeId: "4BL1RBU_HwE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Heeriye \u2014 Happy Hardy And Heer.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 436,
    title: "Hum Pagal Nahin Hai",
    artist: "Himesh Reshammiya \u00b7 Humshakals",
    youtubeId: "E7bCLxY4xBE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Hum Pagal Nahin Hai \u2014 Humshakals.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 437,
    title: "My Love For You",
    artist: "Himesh Reshammiya \u00b7 Rocky The Rebel",
    youtubeId: "_EuwotYz9qA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "My Love For You \u2014 Rocky.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 438,
    title: "Aashiq Banaya Aapne (Title)",
    artist: "Himesh Reshammiya \u00b7 Shreya Ghoshal",
    youtubeId: "19E65tOn3tI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Title track \u2014 Emraan era.", cite: "Himesh Reshammiya" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 439,
    title: "Cocktail Mashup",
    artist: "DJ Chetas \u00b7 T-Series",
    youtubeId: "UNXppWPwG4E",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Cocktail Mashup \u2014 party card staple.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 440,
    title: "Bolly Rave Mashup",
    artist: "DJ Shadow Dubai",
    youtubeId: "IUmn1G7UP4s",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Non-stop Bolly rave mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 441,
    title: "Tu Jo Mila \u00d7 Raabta",
    artist: "T-Series Mixtape \u00b7 Shirley Setia \u00b7 Jubin Nautiyal",
    youtubeId: "Y4fodpIwal8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "T-Series Mixtape classic.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 442,
    title: "Tose Naina \u00d7 Tum Jo Aaye",
    artist: "T-Series Mixtape \u00b7 Armaan Malik \u00b7 Tulsi Kumar",
    youtubeId: "3wkPgFrM36o",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Mixtape romance mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 443,
    title: "Honey Singh Mega Mashup",
    artist: "Yo Yo Honey Singh \u00b7 Mahesh Suthar Mashup",
    youtubeId: "K8PvqHzxJVM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Honey Singh nonstop mega mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 444,
    title: "Love Mashup 2026",
    artist: "Bollywood Love Mashup",
    youtubeId: "2zcBtwgkOLg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Confirm of love mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 445,
    title: "Party Mashup",
    artist: "DJ Raahul Pai \u00b7 Ravi Sharma",
    youtubeId: "JTu3O3VH78w",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Party mashup \u2014 loudspeaker mode.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 446,
    title: "Heartless Mashup",
    artist: "Arijit \u00b7 B Praak \u00b7 KK \u00b7 Emraan",
    youtubeId: "5O0-I2-UJJY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Heartless late-night mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 447,
    title: "Ae Dil Hai Mushkil Mashup",
    artist: "DJ Veronika",
    youtubeId: "UzWZLLQRb00",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "ADHM mashup loop.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 448,
    title: "Aashiqui 2 Mashup",
    artist: "Kiran Kamath",
    youtubeId: "izy2tV-Ssj8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Aashiqui 2 mashup \u2014 tears on transfer.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 449,
    title: "Atif \u00d7 Arijit Love Mashup",
    artist: "Atif Aslam \u00b7 Arijit Singh",
    youtubeId: "S5tvYng1Ov4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Atif meets Arijit.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 450,
    title: "Bollywood Sufi Mashup",
    artist: "Sufi Bollywood Mix",
    youtubeId: "axs1mSyliDU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Sufi mashup \u2014 earphones in.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 451,
    title: "Bollywood Sunset Mix",
    artist: "DJ NYK",
    youtubeId: "vMpaSBYh5pA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "DJ NYK sunset mix.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 452,
    title: "Emraan Hashmi Mashup",
    artist: "Jay Guldekar",
    youtubeId: "xDn-3GYbRQQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Emraan hits mashed.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 453,
    title: "Himesh Reshammiya Mashup",
    artist: "Himesh Classic Hits Mashup",
    youtubeId: "Y9GVBoxJ320",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Lord Himesh mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 454,
    title: "Jazzy B Mega Mashup",
    artist: "Jazzy B Birthday Special",
    youtubeId: "PEMfy7qZui4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Jazzy B mega mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 455,
    title: "Bilal Saeed Memories Mashup",
    artist: "Bilal Saeed Mashup",
    youtubeId: "-wP5A_WVTRM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "12 Saal \u00d7 Baari \u00d7 more.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 456,
    title: "Desi Kalakaar Mega Mashup",
    artist: "Yo Yo Honey Singh \u00b7 Imran Khan \u00b7 DJ Sumit",
    youtubeId: "N1UNd7wyLNk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Desi Kalakaar mega mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 457,
    title: "Bollywood Dance Mashup 2024",
    artist: "DJ Ekyam",
    youtubeId: "BP9Ub7GkOEQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Dance floor mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 458,
    title: "Wedding Mashup 2025",
    artist: "Naresh Parmar",
    youtubeId: "CbMRLTpWDIU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Wedding mashup \u2014 sangeet mode.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 459,
    title: "Breakup Mashup 2023",
    artist: "Arijit Singh Late Night Mashup",
    youtubeId: "CPadk2A6FRs",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Breakup mashup \u2014 2AM feels.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 460,
    title: "Monsoon Love Mix",
    artist: "Arijit \u00b7 Jubin \u00b7 Darshan \u00b7 Mithoon",
    youtubeId: "oj9j7KCCX48",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Monsoon love mix.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 461,
    title: "KK Mashup Tribute",
    artist: "AB Ambients \u00b7 KK Chillout Mix",
    youtubeId: "WP_VUK6uaQM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "KK forever mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 462,
    title: "DJ Chetas Party Mashups",
    artist: "DJ Chetas \u00b7 Bollywood",
    youtubeId: "ytQMzNdD3tc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Non-stop Chetas party mashups.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 463,
    title: "Party Mashup 2019",
    artist: "Bollywood Party Songs Mashup",
    youtubeId: "s9mRAqFunAY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "2019 party mashup with BGM.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 464,
    title: "Best of Arijit Mashup 2024",
    artist: "AMEET Mashup \u00b7 Arijit Singh",
    youtubeId: "c92tUshrZ9g",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Best of Arijit mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 465,
    title: "Saiyaara \u00d7 Aashiqui \u00d7 Half Girlfriend",
    artist: "Bollywood Sad Mashup",
    youtubeId: "H9SlWGJpFkA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Sad songs mega mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 466,
    title: "Baby Ko Bass Pasand Hai Remix",
    artist: "DJ Chetas \u00b7 Sultan",
    youtubeId: "Wa4G5-Y9-lM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Chetas Sultan remix.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 467,
    title: "Workout Anthem Mashup",
    artist: "Bollywood Motivational Mashup",
    youtubeId: "6SFfS9QMloU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["mashup"],
    quotes: [
      { text: "Non-stop workout mashup.", cite: "Mashup Era" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 468,
    title: "Ya Ali",
    artist: "KK · Gangster",
    youtubeId: "pmHnlBqjpm0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk", "emraan"],
    quotes: [
      { text: "Ya Ali — Bluetooth era classic.", cite: "KK" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 469,
    title: "Hai Junoon",
    artist: "KK · New York",
    youtubeId: "aZngT1Eas4w",
    era: "club",
    moods: ["party", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Hai Junoon — Bluetooth era classic.", cite: "KK" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 470,
    title: "Tu Bhoola Jise",
    artist: "KK · Airlift",
    youtubeId: "fiJWyk_a5HI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Tu Bhoola Jise — Bluetooth era classic.", cite: "KK" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 471,
    title: "Sang Hoon Tere",
    artist: "Nikhil D'Souza · Jannat 2",
    youtubeId: "ApulIISXBk0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Sang Hoon Tere — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 472,
    title: "Judai",
    artist: "Kamran Ahmed · Jannat",
    youtubeId: "sSFM_hCFgko",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Judai — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 473,
    title: "Haal-e-Dil",
    artist: "Harshit Saxena · Murder 2",
    youtubeId: "BAp87r3dWUE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Haal-e-Dil — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 474,
    title: "Hum Jee Lenge",
    artist: "Mustafa Zahid · Murder 3",
    youtubeId: "WYtmISG_piI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Hum Jee Lenge — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 475,
    title: "Rab Ka Shukrana",
    artist: "Mohit Chauhan · Jannat 2",
    youtubeId: "UeaO8uEXp0c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit", "emraan"],
    quotes: [
      { text: "Rab Ka Shukrana — Bluetooth era classic.", cite: "Mohit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 476,
    title: "Tum Mile",
    artist: "Neeraj Shridhar · Tum Mile",
    youtubeId: "UcqI3uBKgTg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Tum Mile — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 477,
    title: "Mere Bina",
    artist: "Nikhil D'Souza · Crook",
    youtubeId: "XvUSsh3gdO4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Mere Bina — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 478,
    title: "Challa",
    artist: "Babbu Maan · Crook",
    youtubeId: "l4EuF-mR-KY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Challa — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 479,
    title: "Jiya Dhadak Dhadak",
    artist: "Rahat Fateh Ali Khan · Kalyug",
    youtubeId: "iasxMdSu7Jo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["emraan"],
    quotes: [
      { text: "Jiya Dhadak Dhadak — Bluetooth era classic.", cite: "Emraan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 480,
    title: "Meherbani",
    artist: "Jubin Nautiyal · The Shaukeens",
    youtubeId: "c9T8k3A5Tn4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Meherbani — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 481,
    title: "Tu Chahiye",
    artist: "Atif Aslam · Bajrangi Bhaijaan",
    youtubeId: "zuvla6ABKbs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tu Chahiye — Bluetooth era classic.", cite: "Atif" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 482,
    title: "Mahiya",
    artist: "Jal",
    youtubeId: "F4EC_0yzJYA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Mahiya — Bluetooth era classic.", cite: "Atif" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 483,
    title: "Jal Pari",
    artist: "Atif Aslam · Coke Studio",
    youtubeId: "Kf6MsltI7lQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Jal Pari — Bluetooth era classic.", cite: "Atif" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 484,
    title: "Tera Hua",
    artist: "Atif Aslam · Loveyatri",
    youtubeId: "Ipbe7C4w1qc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Tera Hua — Bluetooth era classic.", cite: "Atif" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 485,
    title: "Dil Kare",
    artist: "Atif Aslam · Ho Mann Jahaan",
    youtubeId: "WD4TMHfmUlQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Dil Kare — Bluetooth era classic.", cite: "Atif" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 486,
    title: "Abhi Kuch Dino Se",
    artist: "Mohit Chauhan · Dil Toh Baccha Hai Ji",
    youtubeId: "1pc60L6mBt0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit", "emraan"],
    quotes: [
      { text: "Abhi Kuch Dino Se — Bluetooth era classic.", cite: "Mohit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 487,
    title: "Guncha",
    artist: "Mohit Chauhan",
    youtubeId: "4WRP2G-Azb0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["mohit"],
    quotes: [
      { text: "Guncha — Bluetooth era classic.", cite: "Mohit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 488,
    title: "Naam Hai Tera",
    artist: "Himesh Reshammiya · Aap Kaa Surroor",
    youtubeId: "v9rEc-yaI8I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Naam Hai Tera — Bluetooth era classic.", cite: "Himesh" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 489,
    title: "Tera Mera Milna",
    artist: "Himesh Reshammiya · Aap Kaa Surroor",
    youtubeId: "vJQvXHnkcIo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Tera Mera Milna — Bluetooth era classic.", cite: "Himesh" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 490,
    title: "Jhoot Nahin Bolna",
    artist: "Himesh Reshammiya · Aap Kaa Surroor",
    youtubeId: "--pE_qim3n0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Jhoot Nahin Bolna — Bluetooth era classic.", cite: "Himesh" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 491,
    title: "Chalao Na Naino Se",
    artist: "Himesh Reshammiya · Bol Bachchan",
    youtubeId: "z-2ObrQ2Ct0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["himesh"],
    quotes: [
      { text: "Chalao Na Naino Se — Bluetooth era classic.", cite: "Himesh" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 492,
    title: "Superstar",
    artist: "Imran Khan",
    youtubeId: "FLkbpOqYzy4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Superstar — Bluetooth era classic.", cite: "Imran" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 493,
    title: "Qott Ghusian Da",
    artist: "Imran Khan",
    youtubeId: "TfhloTwBAJI",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["imran"],
    quotes: [
      { text: "Qott Ghusian Da — Bluetooth era classic.", cite: "Imran" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 494,
    title: "Kangna",
    artist: "Dr Zeus · Master Rakesh",
    youtubeId: "-CVD7PUBzLk",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: [],
    quotes: [
      { text: "Kangna — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 495,
    title: "Just Close Your Eyes",
    artist: "Christian · WWE Entrance",
    youtubeId: "oZ6VlUpGedU",
    era: "club",
    moods: ["party"],
    artists: ["wwe"],
    quotes: [
      { text: "Just Close Your Eyes — Bluetooth era classic.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 496,
    title: "Crank It Up",
    artist: "The Big Show · WWE Entrance",
    youtubeId: "lRi07aIvjEU",
    era: "club",
    moods: ["party"],
    artists: ["wwe"],
    quotes: [
      { text: "Crank It Up — Bluetooth era classic.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 497,
    title: "Live in Fear",
    artist: "Bray Wyatt · WWE Entrance",
    youtubeId: "9psDkhyh28A",
    era: "club",
    moods: ["party"],
    artists: ["wwe"],
    quotes: [
      { text: "Live in Fear — Bluetooth era classic.", cite: "WWE" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 498,
    title: "Galliyan",
    artist: "Ankit Tiwari · Ek Villain",
    youtubeId: "FxAG_11PzCk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Galliyan — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 499,
    title: "Banjaara",
    artist: "Mohammed Irfan · Ek Villain",
    youtubeId: "0NFxcNheoLc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Banjaara — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 500,
    title: "Zehnaseeb",
    artist: "Chinmayi · Hasee Toh Phasee",
    youtubeId: "KLYwt0YmQw8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Zehnaseeb — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 501,
    title: "Baarish",
    artist: "Mohammed Irfan · Yaariyan",
    youtubeId: "Qvd-I7lTecI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Baarish — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 502,
    title: "Munni Badnaam Hui",
    artist: "Mamta Sharma · Dabangg",
    youtubeId: "Jn5hsfbhWx4",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Munni Badnaam Hui — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 503,
    title: "Sheila Ki Jawani",
    artist: "Sunidhi Chauhan · Tees Maar Khan",
    youtubeId: "ZTmF2v59CtI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Sheila Ki Jawani — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 504,
    title: "Chikni Chameli",
    artist: "Shreya Ghoshal · Agneepath",
    youtubeId: "MQM7CNoAsBI",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Chikni Chameli — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 505,
    title: "London Thumakda",
    artist: "Labh Janjua · Queen",
    youtubeId: "udra3Mfw2oo",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "London Thumakda — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 506,
    title: "Baby Doll",
    artist: "Kanika Kapoor · Ragini MMS 2",
    youtubeId: "yP9KiFTyBks",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Baby Doll — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 507,
    title: "Chittiyaan Kalaiyaan",
    artist: "Meet Bros · Roy",
    youtubeId: "zpsVpnvFfZQ",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Chittiyaan Kalaiyaan — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 508,
    title: "Kala Chashma",
    artist: "Amar Arshi · Baar Baar Dekho",
    youtubeId: "4WRJHbL4dAk",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Kala Chashma — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 509,
    title: "Kar Gayi Chull",
    artist: "Badshah · Kapoor & Sons",
    youtubeId: "NTHz9ephYTw",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Kar Gayi Chull — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 510,
    title: "Abhi Toh Party Shuru Hui",
    artist: "Badshah · Khoobsurat",
    youtubeId: "8LZgzAZ2lpQ",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Abhi Toh Party Shuru Hui — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 511,
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
    youtubeId: "hjWf8A0YNSE",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "High Rated Gabru — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 512,
    title: "Lahore",
    artist: "Guru Randhawa",
    youtubeId: "dZ0fwJojhrs",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Lahore — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 513,
    title: "Suit Suit",
    artist: "Guru Randhawa · Arjun",
    youtubeId: "uQ763VvqiEM",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Suit Suit — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 514,
    title: "Bom Diggy Diggy",
    artist: "Zack Knight · Jasmin Walia",
    youtubeId: "Jt5yIFgh6wQ",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Bom Diggy Diggy — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 515,
    title: "Naah",
    artist: "Harrdy Sandhu · Nora Fatehi",
    youtubeId: "JitX0w0Squ8",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: [],
    quotes: [
      { text: "Naah — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 516,
    title: "Proper Patola",
    artist: "Diljit Dosanjh · Badshah",
    youtubeId: "GVhmynWOPoM",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: [],
    quotes: [
      { text: "Proper Patola — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 517,
    title: "3 Peg",
    artist: "Sharry Mann",
    youtubeId: "hzTg4zPBtDU",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: [],
    quotes: [
      { text: "3 Peg — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 518,
    title: "Tere Mast Mast Do Nain",
    artist: "Rahat Fateh Ali Khan · Dabangg",
    youtubeId: "oyLVu753XJw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Tere Mast Mast Do Nain — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 519,
    title: "O Re Piya",
    artist: "Rahat Fateh Ali Khan · Aaja Nachle",
    youtubeId: "JyvX1LkNXz8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "O Re Piya — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 520,
    title: "Aaj Din Chadheya",
    artist: "Rahat Fateh Ali Khan · Love Aaj Kal",
    youtubeId: "IImcBEHuDRI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Aaj Din Chadheya — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 521,
    title: "Jag Ghoomeya",
    artist: "Rahat Fateh Ali Khan · Sultan",
    youtubeId: "U2iXYl8TiQE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Jag Ghoomeya — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 522,
    title: "Tum Hi Ho",
    artist: "Arijit Singh · Aashiqui 2",
    youtubeId: "81qmmlsIE3k",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tum Hi Ho — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 523,
    title: "Sunn Raha Hai",
    artist: "Arijit Singh · Aashiqui 2",
    youtubeId: "eHRrZ5DQCV4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Sunn Raha Hai — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 524,
    title: "Chahun Main Ya Naa",
    artist: "Arijit Singh · Aashiqui 2",
    youtubeId: "E9w2lAuVLsk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Chahun Main Ya Naa — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 525,
    title: "Milne Hai Mujhse Aayi",
    artist: "Arijit Singh · Aashiqui 2",
    youtubeId: "GtPvCa3vvxA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Milne Hai Mujhse Aayi — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 526,
    title: "Hamdard",
    artist: "Arijit Singh · Ek Villain",
    youtubeId: "cf8eijMlRrU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Hamdard — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 527,
    title: "Samjhawan",
    artist: "Arijit Singh · Humpty Sharma Ki Dulhania",
    youtubeId: "gYCnfvZCClY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Samjhawan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 528,
    title: "Kabira",
    artist: "Arijit Singh · Yeh Jawaani Hai Deewani",
    youtubeId: "ta-W16uw7zg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Kabira — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 529,
    title: "Ilahi",
    artist: "Arijit Singh · Yeh Jawaani Hai Deewani",
    youtubeId: "hG7dg7dX4hg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ilahi — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 530,
    title: "Sooraj Dooba Hain",
    artist: "Arijit Singh · Roy",
    youtubeId: "nJZcbidTutE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Sooraj Dooba Hain — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 531,
    title: "Kabhi Jo Baadal Barse",
    artist: "Arijit Singh · Jackpot",
    youtubeId: "CXxkOAE1gPw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Kabhi Jo Baadal Barse — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 532,
    title: "Tu Hi Hai Aashiqui",
    artist: "Arijit Singh · Dishkiyaoon",
    youtubeId: "_OW8FJ0IU0U",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tu Hi Hai Aashiqui — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 533,
    title: "Muskurane",
    artist: "Arijit Singh · CityLights",
    youtubeId: "uuIl0_92Hj0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Muskurane — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 534,
    title: "Mast Magan",
    artist: "Arijit Singh · 2 States",
    youtubeId: "fXRvluHnjxE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Mast Magan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 535,
    title: "Manwa Laage",
    artist: "Arijit Singh · Happy New Year",
    youtubeId: "d8IT-16kA8M",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Manwa Laage — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 536,
    title: "Gerua",
    artist: "Arijit Singh · Dilwale",
    youtubeId: "pRCQEI4GGr8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Gerua — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 537,
    title: "Janam Janam",
    artist: "Arijit Singh · Dilwale",
    youtubeId: "cgmhimjsczk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Janam Janam — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 538,
    title: "Channa Mereya",
    artist: "Arijit Singh · Ae Dil Hai Mushkil",
    youtubeId: "284Ov7ysmfA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Channa Mereya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 539,
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh · Ae Dil Hai Mushkil",
    youtubeId: "NY2gKc17YwI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ae Dil Hai Mushkil — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 540,
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh · Tamasha",
    youtubeId: "xRb8hxwN5zc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Agar Tum Saath Ho — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 541,
    title: "Nashe Si Chadh Gayi",
    artist: "Arijit Singh · Befikre",
    youtubeId: "ryUESj2fIxA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Nashe Si Chadh Gayi — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 542,
    title: "Phir Bhi Tumko Chaahunga",
    artist: "Arijit Singh · Half Girlfriend",
    youtubeId: "_iktURk0X-A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Phir Bhi Tumko Chaahunga — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 543,
    title: "Hawayein",
    artist: "Arijit Singh · Jab Harry Met Sejal",
    youtubeId: "lBACSadCKaQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Hawayein — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 544,
    title: "Phir Le Aaya Dil",
    artist: "Arijit Singh · Barfi",
    youtubeId: "R4YeD7aoOmU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Phir Le Aaya Dil — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 545,
    title: "Laal Ishq",
    artist: "Arijit Singh · Ram-Leela",
    youtubeId: "-aYL_iHfFXY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Laal Ishq — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 546,
    title: "Enna Sona",
    artist: "Arijit Singh · OK Jaanu",
    youtubeId: "mrdRHsIkK_c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Enna Sona — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 547,
    title: "Raabta",
    artist: "Arijit Singh · Agent Vinod",
    youtubeId: "zlt38OOqwDc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Raabta — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 548,
    title: "Raabta (Title)",
    artist: "Arijit Singh · Raabta",
    youtubeId: "zAU_rsoS5ok",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Raabta (Title) — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 549,
    title: "Ik Vaari Aa",
    artist: "Arijit Singh · Raabta",
    youtubeId: "zXLgYBSdv74",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ik Vaari Aa — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 550,
    title: "Tera Yaar Hoon Main",
    artist: "Arijit Singh · Sonu Ke Titu Ki Sweety",
    youtubeId: "EatzcaVJRMs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tera Yaar Hoon Main — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 551,
    title: "Khairiyat",
    artist: "Arijit Singh · Chhichhore",
    youtubeId: "DMRRC0rwO_I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Khairiyat — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 552,
    title: "Ve Maahi",
    artist: "Arijit Singh · Kesari",
    youtubeId: "eCjRRK6U3Xo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ve Maahi — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 553,
    title: "Bekhayali",
    artist: "Arijit Singh · Kabir Singh",
    youtubeId: "RqiQmj4hlzM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Bekhayali — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 554,
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh · Kabir Singh",
    youtubeId: "2IGDsD-dLF8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tujhe Kitna Chahne Lage — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 555,
    title: "Qaafirana",
    artist: "Arijit Singh · Kedarnath",
    youtubeId: "ZmcBC9-wAXM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Qaafirana — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 556,
    title: "Tum Hi Aana",
    artist: "Arijit Singh · Marjaavaan",
    youtubeId: "RemShT6JAHw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tum Hi Aana — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 557,
    title: "Pachtaoge",
    artist: "Arijit Singh",
    youtubeId: "oTnF5sNJnbE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Pachtaoge — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 558,
    title: "Palat",
    artist: "Arijit Singh · Main Tera Hero",
    youtubeId: "Y8gYX3mrJN8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Palat — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 559,
    title: "Baatein Ye Kabhi Na",
    artist: "Arijit Singh · Khamoshiyan",
    youtubeId: "SOessajf_Ik",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Baatein Ye Kabhi Na — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 560,
    title: "Galti Se Mistake",
    artist: "Arijit Singh · Jagga Jasoos",
    youtubeId: "ROtv13CqjzU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Galti Se Mistake — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 561,
    title: "Kalank",
    artist: "Arijit Singh · Kalank",
    youtubeId: "b4hrUSBP4nc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Kalank — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 562,
    title: "First Class",
    artist: "Arijit Singh · Kalank",
    youtubeId: "e8B0AzmXPV8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "First Class — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 563,
    title: "Ae Watan",
    artist: "Arijit Singh · Raazi",
    youtubeId: "x4z8P9_eyZ8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ae Watan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 564,
    title: "Besabriyaan",
    artist: "Arijit Singh · M.S. Dhoni",
    youtubeId: "UBBHpoW3AKA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Besabriyaan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 565,
    title: "Sanam Re",
    artist: "Arijit Singh · Sanam Re",
    youtubeId: "DS-raAyMxl4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Sanam Re — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 566,
    title: "Hua Hain Aaj Pehli Baar",
    artist: "Arijit Singh · Sanam Re",
    youtubeId: "DGVJtAHzzDQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Hua Hain Aaj Pehli Baar — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 567,
    title: "Aasan Nahin Yahan",
    artist: "Arijit Singh · Aashiqui 2",
    youtubeId: "aNToVeBBKn4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Aasan Nahin Yahan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 568,
    title: "Soch Na Sake",
    artist: "Arijit Singh · Airlift",
    youtubeId: "MRtRcTfszjY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Soch Na Sake — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 569,
    title: "Suno Na Sangemarmar",
    artist: "Arijit Singh · Youngistaan",
    youtubeId: "v7jiFpX5SU4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Suno Na Sangemarmar — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 570,
    title: "Sawan Aaya Hai",
    artist: "Arijit Singh · Creature 3D",
    youtubeId: "UPxKI6pgyBQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Sawan Aaya Hai — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 571,
    title: "Naina",
    artist: "Arijit Singh · Dangal",
    youtubeId: "yXbeYaVQ8JY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Naina — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 572,
    title: "Lo Maan Liya",
    artist: "Arijit Singh · Raaz Reboot",
    youtubeId: "KSGYVl4ZgRs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit", "emraan"],
    quotes: [
      { text: "Lo Maan Liya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 573,
    title: "Saware",
    artist: "Arijit Singh · Phantom",
    youtubeId: "RguA0jevrAc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Saware — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 574,
    title: "Sukoon Mila",
    artist: "Arijit Singh · Mary Kom",
    youtubeId: "rRx88tN2LYo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Sukoon Mila — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 575,
    title: "Lambiyaan Si Judaiyaan",
    artist: "Arijit Singh · Raabta",
    youtubeId: "vc-KxBjIbgI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Lambiyaan Si Judaiyaan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 576,
    title: "Phir Kabhi",
    artist: "Arijit Singh · M.S. Dhoni",
    youtubeId: "qVHaXD7zHDQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Phir Kabhi — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 577,
    title: "Tu Har Lamha",
    artist: "Arijit Singh · Khamoshiyan",
    youtubeId: "GqR4gLsjEKc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tu Har Lamha — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 578,
    title: "Khamoshiyan",
    artist: "Arijit Singh · Khamoshiyan",
    youtubeId: "Mv3SZDP7QUo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Khamoshiyan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 579,
    title: "Thodi Jagah",
    artist: "Arijit Singh · Marjaavaan",
    youtubeId: "WLsc66rAfTc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Thodi Jagah — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 580,
    title: "Ghungroo",
    artist: "Arijit Singh · War",
    youtubeId: "qFkNATtc3mc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ghungroo — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 581,
    title: "Pal Pal Dil Ke Paas",
    artist: "Arijit Singh · Pal Pal Dil Ke Paas",
    youtubeId: "lgTHGZF3BQw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Pal Pal Dil Ke Paas — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 582,
    title: "Kesariya",
    artist: "Arijit Singh · Brahmāstra",
    youtubeId: "6mr4cYJ7yew",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Kesariya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 583,
    title: "Deva Deva",
    artist: "Arijit Singh · Brahmāstra",
    youtubeId: "WjAPDofGg28",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Deva Deva — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 584,
    title: "Jhoome Jo Pathaan",
    artist: "Arijit Singh · Pathaan",
    youtubeId: "YxWlaYCA8MU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Jhoome Jo Pathaan — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 585,
    title: "Satranga",
    artist: "Arijit Singh · Animal",
    youtubeId: "HrnrqYxYrbk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Satranga — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 586,
    title: "Heeriye",
    artist: "Arijit Singh · Jasleen Royal",
    youtubeId: "RLzC55ai0eo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Heeriye — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 587,
    title: "O Maahi",
    artist: "Arijit Singh · Dunki",
    youtubeId: "Etkd-07gnxM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "O Maahi — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 588,
    title: "Sajni",
    artist: "Arijit Singh · Laapataa Ladies",
    youtubeId: "k3g_WjLCsXM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Sajni — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 589,
    title: "Ve Kamleya",
    artist: "Arijit Singh · Rocky Aur Rani",
    youtubeId: "QXJyMpxd210",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ve Kamleya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 590,
    title: "Tum Kya Mile",
    artist: "Arijit Singh · Rocky Aur Rani",
    youtubeId: "hacByYwJ_a4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tum Kya Mile — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 591,
    title: "O Bedardeya",
    artist: "Arijit Singh · Tu Jhoothi Main Makkaar",
    youtubeId: "npwn6KVMtFI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "O Bedardeya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 592,
    title: "Pasoori Nu",
    artist: "Arijit Singh · Satyaprem Ki Katha",
    youtubeId: "UAuvmx3cPos",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Pasoori Nu — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 593,
    title: "Phir Aur Kya Chahiye",
    artist: "Arijit Singh · Zara Hatke Zara Bachke",
    youtubeId: "PR_mFnjFidk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Phir Aur Kya Chahiye — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 594,
    title: "Jaan Nisaar",
    artist: "Arijit Singh · Kedarnath",
    youtubeId: "za4Q_7gYyS4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Jaan Nisaar — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 595,
    title: "Haan Main Galat",
    artist: "Arijit Singh · Love Aaj Kal",
    youtubeId: "yRB0xbKDebo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Haan Main Galat — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 596,
    title: "Darkhaast",
    artist: "Arijit Singh · Shivaay",
    youtubeId: "LMnJp_dSdnw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Darkhaast — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 597,
    title: "Shayad",
    artist: "Arijit Singh · Love Aaj Kal",
    youtubeId: "MJyKN-8UncM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Shayad — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 598,
    title: "Apna Bana Le",
    artist: "Arijit Singh · Bhediya",
    youtubeId: "ElZfdU54Cp8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Apna Bana Le — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 599,
    title: "Chaleya",
    artist: "Arijit Singh · Jawan",
    youtubeId: "VAdGW7QDJiU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Chaleya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 600,
    title: "Aayat",
    artist: "Arijit Singh · Bajirao Mastani",
    youtubeId: "vKDsAB1ccn0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Aayat — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 601,
    title: "Itni Si Baat Hain",
    artist: "Arijit Singh · Azhar",
    youtubeId: "tucWbkH5WX0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit", "emraan"],
    quotes: [
      { text: "Itni Si Baat Hain — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 602,
    title: "Ullu Ka Pattha",
    artist: "Arijit Singh · Jagga Jasoos",
    youtubeId: "h2GhQBI5YGw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Ullu Ka Pattha — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 603,
    title: "Mere Naam Tu",
    artist: "Arijit Singh · Zero",
    youtubeId: "6vXG7JOYfn8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Mere Naam Tu — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 604,
    title: "Zaalima",
    artist: "Arijit Singh · Raees",
    youtubeId: "qiglT5BZx58",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Zaalima — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 605,
    title: "Alizeh",
    artist: "Arijit Singh · Ae Dil Hai Mushkil",
    youtubeId: "QkYWZSetSrQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Alizeh — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 606,
    title: "The Breakup Song",
    artist: "Arijit Singh · Ae Dil Hai Mushkil",
    youtubeId: "kd5KqlmcHNo",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "The Breakup Song — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 607,
    title: "Jhumritalaiyya",
    artist: "Arijit Singh · Jagga Jasoos",
    youtubeId: "OSbe_bq_vN4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Jhumritalaiyya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 608,
    title: "Tere Pyaar Mein",
    artist: "Arijit Singh · Tu Jhoothi Main Makkaar",
    youtubeId: "IMg_UUJVpMo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tere Pyaar Mein — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 609,
    title: "Pyaar Hota Kayi Baar Hai",
    artist: "Arijit Singh · Tu Jhoothi Main Makkaar",
    youtubeId: "2yeRRm9AIxI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Pyaar Hota Kayi Baar Hai — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 610,
    title: "Lutt Putt Gaya",
    artist: "Arijit Singh · Dunki",
    youtubeId: "7CdpHATpXXU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Lutt Putt Gaya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 611,
    title: "Tere Hawaale",
    artist: "Arijit Singh · Laal Singh Chaddha",
    youtubeId: "KUpwupYj_tY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tere Hawaale — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 612,
    title: "Subah Subah",
    artist: "Arijit Singh · Sonu Ke Titu Ki Sweety",
    youtubeId: "ZgTKmRPWMq4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Subah Subah — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 613,
    title: "Le Aaunga",
    artist: "Arijit Singh · Satyaprem Ki Katha",
    youtubeId: "iDF8c3Na0xc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Le Aaunga — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 614,
    title: "Soch Liya",
    artist: "Arijit Singh · Radhe Shyam",
    youtubeId: "gqYOQrQm66c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Soch Liya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 615,
    title: "Tera Fitoor",
    artist: "Arijit Singh · Genius",
    youtubeId: "jGBj55PMihM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Tera Fitoor — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 616,
    title: "Bandeya",
    artist: "Arijit Singh · Dil Juunglee",
    youtubeId: "xlNek_Oe12Y",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["arijit"],
    quotes: [
      { text: "Bandeya — Bluetooth era classic.", cite: "Arijit" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 617,
    title: "Malang",
    artist: "Ved Sharma · Malang",
    youtubeId: "KBIq11mNB0I",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Malang — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 618,
    title: "Lamhey",
    artist: "Atif Aslam · Jal",
    youtubeId: "gAnV7VBo0tg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Lamhey — Bluetooth era classic.", cite: "Atif" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 619,
    title: "Bikhra Hoon Main",
    artist: "Atif Aslam · Jal",
    youtubeId: "CpXgYGXokgI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["atif"],
    quotes: [
      { text: "Bikhra Hoon Main — Bluetooth era classic.", cite: "Atif" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 620,
    title: "Make Some Noise",
    artist: "KK · Desi Boyz",
    youtubeId: "lyWHtKq1PcQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["kk"],
    quotes: [
      { text: "Make Some Noise — Bluetooth era classic.", cite: "KK" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 621,
    title: "Afreen Afreen",
    artist: "Rahat Fateh Ali Khan · Coke Studio",
    youtubeId: "kw4tT7SCmaY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["rahat"],
    quotes: [
      { text: "Afreen Afreen — Bluetooth era classic.", cite: "Rahat" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 622,
    title: "Mere Rashke Qamar",
    artist: "Rahat Fateh Ali Khan · Baadshaho",
    youtubeId: "GPv8pY0i8HA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["rahat"],
    quotes: [
      { text: "Mere Rashke Qamar — Bluetooth era classic.", cite: "Rahat" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 623,
    title: "Teri Ore",
    artist: "Rahat Fateh Ali Khan · Singh Is Kinng",
    youtubeId: "CWfCp96-yck",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["rahat"],
    quotes: [
      { text: "Teri Ore — Bluetooth era classic.", cite: "Rahat" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 624,
    title: "Sajda",
    artist: "Rahat Fateh Ali Khan · My Name Is Khan",
    youtubeId: "lllCz3lmEbE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["rahat"],
    quotes: [
      { text: "Sajda — Bluetooth era classic.", cite: "Rahat" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 625,
    title: "Mann Ki Lagan",
    artist: "Rahat Fateh Ali Khan · Paap",
    youtubeId: "mfxkXYzawEA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["rahat"],
    quotes: [
      { text: "Mann Ki Lagan — Bluetooth era classic.", cite: "Rahat" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 626,
    title: "Zaroori Tha",
    artist: "Rahat Fateh Ali Khan",
    youtubeId: "6-n_szx2XRE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["rahat"],
    quotes: [
      { text: "Zaroori Tha — Bluetooth era classic.", cite: "Rahat" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 627,
    title: "Ban Ja Rani",
    artist: "Guru Randhawa · Tumhari Sulu",
    youtubeId: "hlvbDjksdCg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Ban Ja Rani — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 628,
    title: "Ishare Tere",
    artist: "Guru Randhawa · Dhvani Bhanushali",
    youtubeId: "8nGFWWJLHio",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Ishare Tere — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 629,
    title: "Made in India",
    artist: "Guru Randhawa",
    youtubeId: "pnMQLrS5sTE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Made in India — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 630,
    title: "Downtown",
    artist: "Guru Randhawa",
    youtubeId: "klzyuLXNsGE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Downtown — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 631,
    title: "Yaar Mod Do",
    artist: "Guru Randhawa · Millind Gaba",
    youtubeId: "dGwau9Vcc0o",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Yaar Mod Do — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 632,
    title: "DJ Waley Babu",
    artist: "Badshah · Aastha Gill",
    youtubeId: "OulN7vTDq1I",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "DJ Waley Babu — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 633,
    title: "Mercy",
    artist: "Badshah",
    youtubeId: "Jyst8oIHOAY",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Mercy — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 634,
    title: "Saturday Saturday",
    artist: "Indeep Bakshi · Badshah",
    youtubeId: "0fXlZ3vnQd0",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Saturday Saturday — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 635,
    title: "Paagal",
    artist: "Badshah",
    youtubeId: "bdesdebUFLE",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Paagal — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 636,
    title: "Genda Phool",
    artist: "Badshah · Jacqueline Fernandez",
    youtubeId: "SD4Z8dlZPd8",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Genda Phool — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 637,
    title: "Badtameez Dil",
    artist: "Benny Dayal · Yeh Jawaani Hai Deewani",
    youtubeId: "II2EO3Nw4m0",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Badtameez Dil — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 638,
    title: "Balam Pichkari",
    artist: "Vishal Dadlani · Yeh Jawaani Hai Deewani",
    youtubeId: "0WtRNGubWGA",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Balam Pichkari — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 639,
    title: "Radha",
    artist: "Shreya Ghoshal · Student of the Year",
    youtubeId: "52deq20h6Q4",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Radha — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 640,
    title: "Daaru Desi",
    artist: "Benny Dayal · Cocktail",
    youtubeId: "3nA1hmKCRpE",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Daaru Desi — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 641,
    title: "Subha Hone Na De",
    artist: "Mika Singh · Desi Boyz",
    youtubeId: "Y7G-tYRzwYY",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Subha Hone Na De — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 642,
    title: "Fevicol Se",
    artist: "Mamta Sharma · Dabangg 2",
    youtubeId: "zE7Pwgl6sLA",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Fevicol Se — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 643,
    title: "Ghagra",
    artist: "Rekha Bhardwaj · Yeh Jawaani Hai Deewani",
    youtubeId: "caoGNx1LF2Q",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Ghagra — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 644,
    title: "Deewani Mastani",
    artist: "Shreya Ghoshal · Bajirao Mastani",
    youtubeId: "h6lHUn20J5g",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Deewani Mastani — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 645,
    title: "Malhari",
    artist: "Vishal Dadlani · Bajirao Mastani",
    youtubeId: "l_MyUGq7pgs",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Malhari — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 646,
    title: "Bhar Do Jholi",
    artist: "Adnan Sami · Bajrangi Bhaijaan",
    youtubeId: "zk0-f92gg9A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Bhar Do Jholi — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 647,
    title: "Namo Namo",
    artist: "Amit Trivedi · Kedarnath",
    youtubeId: "lut2xNUhNwg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Namo Namo — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 648,
    title: "Gazab Ka Hai Din",
    artist: "Jubin Nautiyal · Sanam Re",
    youtubeId: "xJmu_ud93GU",
    era: "club",
    moods: ["party", "desi"],
    artists: [],
    quotes: [
      { text: "Gazab Ka Hai Din — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 649,
    title: "Bulleya (Ae Dil Hai Mushkil)",
    artist: "Amit Mishra · Ae Dil Hai Mushkil",
    youtubeId: "wTgrZE9RWNY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: [],
    quotes: [
      { text: "Bulleya (Ae Dil Hai Mushkil) — Bluetooth era classic.", cite: "Memory card" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 650,
    title: "Slowly Slowly",
    artist: "Guru Randhawa · Pitbull",
    youtubeId: "hGsVLXnFgbA",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Slowly Slowly — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 651,
    title: "Ishq Tera",
    artist: "Guru Randhawa",
    youtubeId: "3KXZduvOfDo",
    era: "ballad",
    moods: ["slow", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Ishq Tera — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 652,
    title: "Tere Te",
    artist: "Guru Randhawa · Ikka",
    youtubeId: "hpUyVmeM56c",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Tere Te — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 653,
    title: "Dance Meri Rani",
    artist: "Guru Randhawa · Nora Fatehi",
    youtubeId: "G-XMiVMlLRI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Dance Meri Rani — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 654,
    title: "Moon Rise",
    artist: "Guru Randhawa · Shehnaaz Gill",
    youtubeId: "y3RhoAQXJ8I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Moon Rise — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 655,
    title: "Outfit",
    artist: "Guru Randhawa",
    youtubeId: "rK8_v2N35WY",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Outfit — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 656,
    title: "Patola",
    artist: "Guru Randhawa · Bohemia",
    youtubeId: "zuoIaejT7b4",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Patola — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 657,
    title: "Enni Soni",
    artist: "Guru Randhawa · Saaho",
    youtubeId: "wiFOmS6ZvOs",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Enni Soni — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 658,
    title: "Lagdi Lahore Di",
    artist: "Guru Randhawa · Street Dancer 3D",
    youtubeId: "v2tXijdT56o",
    era: "club",
    moods: ["party", "punjabi", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Lagdi Lahore Di — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 659,
    title: "Nachle Na",
    artist: "Guru Randhawa · Dil Juunglee",
    youtubeId: "cajMxG9Y-Dk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Nachle Na — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 660,
    title: "Morni Banke",
    artist: "Guru Randhawa · Neha Kakkar",
    youtubeId: "1EadhOBcfI0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Morni Banke — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 661,
    title: "Daaru Wargi",
    artist: "Guru Randhawa · Why Cheat India",
    youtubeId: "VXVmtHcf2Dg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["guru", "emraan"],
    quotes: [
      { text: "Daaru Wargi — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 662,
    title: "Tera Ki Khayal",
    artist: "Guru Randhawa",
    youtubeId: "kJo1IvursYA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["guru"],
    quotes: [
      { text: "Tera Ki Khayal — Bluetooth era classic.", cite: "Guru" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 663,
    title: "Kamli",
    artist: "Sunidhi Chauhan · Dhoom 3",
    youtubeId: "C8kSrkz8Hz8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Kamli — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 664,
    title: "Dhoom Machale",
    artist: "Sunidhi Chauhan · Dhoom",
    youtubeId: "2uUmHTgT65I",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Dhoom Machale — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 665,
    title: "Crazy Kiya Re",
    artist: "Sunidhi Chauhan · Dhoom 2",
    youtubeId: "J2Bh68GTUOU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Crazy Kiya Re — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 666,
    title: "Desi Girl",
    artist: "Sunidhi Chauhan · Dostana",
    youtubeId: "wDIrpvH8MzE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Desi Girl — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 667,
    title: "Shut Up & Bounce",
    artist: "Sunidhi Chauhan · Dostana",
    youtubeId: "0akqVN4ts0w",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Shut Up & Bounce — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 668,
    title: "Dance Pe Chance",
    artist: "Sunidhi Chauhan · Rab Ne Bana Di Jodi",
    youtubeId: "rap8SoUIPaw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Dance Pe Chance — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 669,
    title: "Aaja Nachle",
    artist: "Sunidhi Chauhan",
    youtubeId: "MP4F0ZcW_G0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Aaja Nachle — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 670,
    title: "Ainvayi Ainvayi",
    artist: "Sunidhi Chauhan · Band Baaja Baaraat",
    youtubeId: "pElk1ShPrcE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Ainvayi Ainvayi — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 671,
    title: "Beedi",
    artist: "Sunidhi Chauhan · Omkara",
    youtubeId: "XLJCtZK0x5M",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Beedi — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 672,
    title: "Gun Gun Guna",
    artist: "Sunidhi Chauhan · Agneepath",
    youtubeId: "a25MOFKAtNo",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Gun Gun Guna — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 673,
    title: "Udi",
    artist: "Sunidhi Chauhan · Guzaarish",
    youtubeId: "hbP3vLetsnM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Udi — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 674,
    title: "Right Now Now",
    artist: "Sunidhi Chauhan · Housefull 2",
    youtubeId: "m_4lF320DfQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Right Now Now — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 675,
    title: "The Disco Song",
    artist: "Sunidhi Chauhan · Student of the Year",
    youtubeId: "mcL6ZErM49Q",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "The Disco Song — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 676,
    title: "Chhaliya",
    artist: "Sunidhi Chauhan · Tashan",
    youtubeId: "YPpOqfIQ5ME",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Chhaliya — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 677,
    title: "Soni De Nakhre",
    artist: "Sunidhi Chauhan · Partner",
    youtubeId: "GFljvZMZI0U",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Soni De Nakhre — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 678,
    title: "Dekh Le",
    artist: "Sunidhi Chauhan · Munna Bhai M.B.B.S.",
    youtubeId: "zCWMhHclBOQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Dekh Le — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 679,
    title: "Bhaage Re Mann",
    artist: "Sunidhi Chauhan · Chameli",
    youtubeId: "dCosqNGw2ck",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Bhaage Re Mann — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 680,
    title: "Halka Halka",
    artist: "Sunidhi Chauhan · Fanney Khan",
    youtubeId: "nZhLM-FeV9A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sunidhi"],
    quotes: [
      { text: "Halka Halka — Bluetooth era classic.", cite: "Sunidhi" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 681,
    title: "Chand Sifarish",
    artist: "Shaan · Fanaa",
    youtubeId: "zWEOx7TSM6I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Chand Sifarish — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 682,
    title: "Where's The Party Tonight",
    artist: "Shaan · Kabhi Alvida Naa Kehna",
    youtubeId: "ifT-NS_E7EY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Where's The Party Tonight — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 683,
    title: "It's The Time To Disco",
    artist: "Shaan · Kal Ho Naa Ho",
    youtubeId: "Y8ZN7QjQcP0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "It's The Time To Disco — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 684,
    title: "Kuch To Hua Hai",
    artist: "Shaan · Kal Ho Naa Ho",
    youtubeId: "NMsvr4txH_g",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Kuch To Hua Hai — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 685,
    title: "Main Aisa Kyun Hoon",
    artist: "Shaan · Lakshya",
    youtubeId: "gWn4Csu3Kc8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Main Aisa Kyun Hoon — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 686,
    title: "Woh Ladki Hai Kahan",
    artist: "Shaan · Dil Chahta Hai",
    youtubeId: "IIg8H60bRJo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Woh Ladki Hai Kahan — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 687,
    title: "Tanha Dil",
    artist: "Shaan",
    youtubeId: "64KSVbMDr0c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Tanha Dil — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 688,
    title: "Bhool Ja",
    artist: "Shaan",
    youtubeId: "HCKeFdWaiIo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Bhool Ja — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 689,
    title: "Musu Musu",
    artist: "Shaan · Pyaar Mein Kabhi Kabhi",
    youtubeId: "5ahWUJsgqGg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Musu Musu — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 690,
    title: "My Dil Goes Mmmm",
    artist: "Shaan · Salaam Namaste",
    youtubeId: "fV4x7OCqFLA",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "My Dil Goes Mmmm — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 691,
    title: "Jab Se Tere Naina",
    artist: "Shaan · Saawariya",
    youtubeId: "3XtUEgQLI5Y",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Jab Se Tere Naina — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 692,
    title: "Behti Hawa",
    artist: "Shaan · 3 Idiots",
    youtubeId: "ewvddSUEONQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Behti Hawa — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 693,
    title: "Chaar Kadam",
    artist: "Shaan · PK",
    youtubeId: "WKbwopSXLWU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Chaar Kadam — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 694,
    title: "Hey Shona",
    artist: "Shaan · Sunidhi Chauhan · Ta Ra Rum Pum",
    youtubeId: "vxVsDSB5UWw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan", "sunidhi"],
    quotes: [
      { text: "Hey Shona — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 695,
    title: "Ladki Kyun",
    artist: "Shaan · Hum Tum",
    youtubeId: "6WLugDJYXmM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Ladki Kyun — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 696,
    title: "Aao Milo Chalen",
    artist: "Shaan · Jab We Met",
    youtubeId: "Mo5tQDcs__g",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Aao Milo Chalen — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 697,
    title: "Shikdum",
    artist: "Shaan · Dhoom",
    youtubeId: "7jhSVtC6Axs",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Shikdum — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 698,
    title: "Main Hoon Don",
    artist: "Shaan · Don",
    youtubeId: "NZAi6QTNZtE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Main Hoon Don — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 699,
    title: "Suno Na",
    artist: "Shaan · Jhankaar Beats",
    youtubeId: "rEpfftr_Zgg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Suno Na — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 700,
    title: "Rock N Roll Soniye",
    artist: "Shaan · Kabhi Alvida Naa Kehna",
    youtubeId: "7nDKFPWbJMU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Rock N Roll Soniye — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 701,
    title: "Let's Rock Soniye",
    artist: "Shaan · Bhool Bhulaiyaa",
    youtubeId: "Vj8LBk_7fsk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Let's Rock Soniye — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 702,
    title: "Welcome",
    artist: "Shaan · Welcome",
    youtubeId: "dKbTZ217gaQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Welcome — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 703,
    title: "Just Chill",
    artist: "Shaan · Maine Pyaar Kyun Kiya",
    youtubeId: "w5iA5LIwF2A",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Just Chill — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 704,
    title: "Deewangi Deewangi",
    artist: "Shaan · Om Shanti Om",
    youtubeId: "VzLG6OqOcn8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Deewangi Deewangi — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 705,
    title: "You're My Love",
    artist: "Shaan · Partner",
    youtubeId: "dBUxfFoQpuo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "You're My Love — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 706,
    title: "Do U Wanna Partner",
    artist: "Shaan · Partner",
    youtubeId: "37ciobbzY3Q",
    era: "club",
    moods: ["party", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Do U Wanna Partner — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 707,
    title: "Chahat",
    artist: "Shaan",
    youtubeId: "R8_tTtsCo5c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["shaan"],
    quotes: [
      { text: "Chahat — Bluetooth era classic.", cite: "Shaan" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 708,
    title: "Chura Liya",
    artist: "Sanam",
    youtubeId: "DASoD0d5HBc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Chura Liya — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 709,
    title: "Badan Pe Sitare",
    artist: "Sanam",
    youtubeId: "Gf7Lf4kiZ-A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Badan Pe Sitare — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 710,
    title: "Kya Hua Tera Wada Pt. 2",
    artist: "Sanam",
    youtubeId: "MGsw7CnqdJo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Kya Hua Tera Wada Pt. 2 — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 711,
    title: "Aur Iss Dil Mein Pt. 1",
    artist: "Sanam",
    youtubeId: "cZ5eTWoa01A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Aur Iss Dil Mein Pt. 1 — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 712,
    title: "Nazron Ko Nazron Se (Acoustic)",
    artist: "Sanam",
    youtubeId: "L8iLYMdAjAQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Nazron Ko Nazron Se (Acoustic) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 713,
    title: "Pyar Deewana Hota Hai",
    artist: "Sanam",
    youtubeId: "ArOK4_oLiFg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Pyar Deewana Hota Hai — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 714,
    title: "Anange",
    artist: "Sanam",
    youtubeId: "is00uFhPF74",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Anange — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 715,
    title: "Pyar Hua Chupke Se",
    artist: "Sanam · Trishala",
    youtubeId: "Pz08UV4ciNs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Pyar Hua Chupke Se — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 716,
    title: "Raat Kali Ek Khwab Mein Aai",
    artist: "Sanam · Jerusha Mendes",
    youtubeId: "NH9GVbjRd8k",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Raat Kali Ek Khwab Mein Aai — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 717,
    title: "Tum Na Jaane Kis Jahan Mein Kho Gaye",
    artist: "Sanam",
    youtubeId: "j3mY2Skq1LI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Tum Na Jaane Kis Jahan Mein Kho Gaye — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 718,
    title: "Mere Samne Wali Khidki Mein",
    artist: "Sanam",
    youtubeId: "OYx_9s9ggu8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Mere Samne Wali Khidki Mein — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 719,
    title: "The Gloria Medley",
    artist: "Sanam · Lisa Mishra",
    youtubeId: "k5VEYP-keQ4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "The Gloria Medley — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 720,
    title: "Mukhda",
    artist: "Sanam",
    youtubeId: "Rn_zZD1YT5s",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Mukhda — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 721,
    title: "Patthar Ke Sanam",
    artist: "Sanam",
    youtubeId: "b17BI6grg44",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Patthar Ke Sanam — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 722,
    title: "Ehsan Tera Hoga",
    artist: "Sanam",
    youtubeId: "6119GAyM_YE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ehsan Tera Hoga — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 723,
    title: "Likhe Jo Khat Tujhe",
    artist: "Sanam",
    youtubeId: "3wGLsjgTx4c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Likhe Jo Khat Tujhe — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 724,
    title: "Dil Nachda",
    artist: "Sanam · Samira Koppikar",
    youtubeId: "5CovTgX355k",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Dil Nachda — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 725,
    title: "Aaj Na Jaana",
    artist: "Sanam",
    youtubeId: "iLUJ8uvD0sE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Aaj Na Jaana — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 726,
    title: "Aajkal Tere Mere Pyar Ke Charche",
    artist: "Sanam · Sanah Moidutty",
    youtubeId: "zwsc1rVdPxA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Aajkal Tere Mere Pyar Ke Charche — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 727,
    title: "Apni Yaari",
    artist: "Sanam",
    youtubeId: "WdWTTBfZwNY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Apni Yaari — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 728,
    title: "Fakira",
    artist: "Sanam",
    youtubeId: "q1zbZAR8Zpg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Fakira — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 729,
    title: "Taarif Karoon",
    artist: "Sanam",
    youtubeId: "jgYl4hZacx0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Taarif Karoon — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 730,
    title: "Chala Jata Hoon",
    artist: "Sanam",
    youtubeId: "jrOIZA-G-z4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Chala Jata Hoon — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 731,
    title: "Humein Tumse Pyar Kitna",
    artist: "Sanam",
    youtubeId: "DtAijYxUi74",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Humein Tumse Pyar Kitna — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 732,
    title: "Kahin Door",
    artist: "Sanam",
    youtubeId: "CkByVrzQT2c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Kahin Door — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 733,
    title: "Ek Pyar Ka Nagma",
    artist: "Sanam",
    youtubeId: "eVv8rcMEMuM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ek Pyar Ka Nagma — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 734,
    title: "Dooba Dooba",
    artist: "Sanam",
    youtubeId: "GBBxiJMHONA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Dooba Dooba — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 735,
    title: "Bheegi Bheegi Raaton Mein",
    artist: "Sanam",
    youtubeId: "EJ89r_Gw1Gg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Bheegi Bheegi Raaton Mein — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 736,
    title: "Tu Yahaan",
    artist: "Sanam",
    youtubeId: "zglerPUwchI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Tu Yahaan — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 737,
    title: "Sanam Mennu (Remake)",
    artist: "Sanam · Joshi",
    youtubeId: "9cuUA1Rlkrc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Sanam Mennu (Remake) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 738,
    title: "Sanam Mennu (DJ Shadow Remix)",
    artist: "Sanam",
    youtubeId: "kTPfP7TPjSM",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Sanam Mennu (DJ Shadow Remix) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 739,
    title: "Amar Mallika Bone",
    artist: "Sanam · Paroma Dasgupta",
    youtubeId: "AIu48zGbrI4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Amar Mallika Bone — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 740,
    title: "Sanam Mennu (Remix)",
    artist: "Sanam",
    youtubeId: "B5jEskSBM1k",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Sanam Mennu (Remix) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 741,
    title: "Sanam Mennu",
    artist: "Sanam",
    youtubeId: "uLTfIm5aptQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Sanam Mennu — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 742,
    title: "Share Our Blessings",
    artist: "Sanam",
    youtubeId: "j-ciQHFG2RI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Share Our Blessings — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 743,
    title: "Dil Diyan Gallan",
    artist: "Sanam",
    youtubeId: "EsPrpf_vpi8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Dil Diyan Gallan — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 744,
    title: "Jaane Woh Kaise",
    artist: "Sanam",
    youtubeId: "XvlS-oM1ORg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Jaane Woh Kaise — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 745,
    title: "Itni Door",
    artist: "Sanam",
    youtubeId: "lY8lePck7Hk",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Itni Door — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 746,
    title: "Har Indian Ka Moonshot",
    artist: "Sanam · Sona Mohapatra",
    youtubeId: "w5K1pXx6LK8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Har Indian Ka Moonshot — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 747,
    title: "Dil Kya Kare",
    artist: "Sanam",
    youtubeId: "SrMLFxMlflA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Dil Kya Kare — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 748,
    title: "Shama Hai Jali",
    artist: "Sanam",
    youtubeId: "KbpixBUnwvA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Shama Hai Jali — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 749,
    title: "Lakshya",
    artist: "Sanam",
    youtubeId: "IG-gsEUFElA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Lakshya — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 750,
    title: "Neele Neele Ambar Par",
    artist: "Sanam",
    youtubeId: "uqa0BvYy03I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Neele Neele Ambar Par — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 751,
    title: "La Bamba",
    artist: "Sanam",
    youtubeId: "LPIOWN7-bWw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "La Bamba — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 752,
    title: "Ae Kash Ke Hum",
    artist: "Sanam",
    youtubeId: "9yGC2WNhA0A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ae Kash Ke Hum — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 753,
    title: "Yeh Raat Bheegi Bheegi",
    artist: "Sanam · Aishwarya Majmudar",
    youtubeId: "JVLw6msJhto",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Yeh Raat Bheegi Bheegi — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 754,
    title: "Bulleya",
    artist: "Sanam",
    youtubeId: "xPWEzkl6g4w",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Bulleya — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 755,
    title: "Channa Mereya",
    artist: "Sanam",
    youtubeId: "crJJhShfefw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Channa Mereya — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 756,
    title: "O Holy Night",
    artist: "Sanam",
    youtubeId: "dBY5Fzs4zhY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "O Holy Night — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 757,
    title: "Teri Deewani",
    artist: "Sanam · Sandeep Thakur",
    youtubeId: "Q52CVnkLb_s",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Teri Deewani — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 758,
    title: "Aaja Aaja",
    artist: "Sanam",
    youtubeId: "xs6kwrSK6KQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Aaja Aaja — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 759,
    title: "Ae Dil Hai Mushkil",
    artist: "Sanam",
    youtubeId: "UXAxf0gG9NA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ae Dil Hai Mushkil — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 760,
    title: "Saiyaan",
    artist: "Sanam",
    youtubeId: "B81OIGJoSfQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Saiyaan — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 761,
    title: "Inquilab Mera Khwab",
    artist: "Sanam · Clinton Cerejo",
    youtubeId: "bdCV1rNvjCE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Inquilab Mera Khwab — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 762,
    title: "Agar Tum Suno",
    artist: "Sanam",
    youtubeId: "AOZUyXdJc3o",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Agar Tum Suno — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 763,
    title: "Nazron Ko Nazron Se",
    artist: "Sanam",
    youtubeId: "Coq2t0vcVfs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Nazron Ko Nazron Se — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 764,
    title: "Ishtyle",
    artist: "Sanam",
    youtubeId: "thmh7OWx8gQ",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ishtyle — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 765,
    title: "Hai Apna Dil To Awara",
    artist: "Sanam · Soogum Sookha",
    youtubeId: "JlgkMXex2DI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Hai Apna Dil To Awara — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 766,
    title: "Pehla Nasha",
    artist: "Sanam",
    youtubeId: "vFN3eNe0_Hs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Pehla Nasha — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 767,
    title: "Tere Bina Zindagi Se",
    artist: "Sanam",
    youtubeId: "OsXUsTZRpZA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Tere Bina Zindagi Se — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 768,
    title: "Gulabi Aankhen",
    artist: "Sanam",
    youtubeId: "hgi2MYAFgE8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Gulabi Aankhen — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 769,
    title: "Yeh Vaada Raha",
    artist: "Sanam · Mira",
    youtubeId: "qwvn-heOJVw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Yeh Vaada Raha — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 770,
    title: "Hum Bewafa Hargiz Na The",
    artist: "Sanam",
    youtubeId: "AvRcKyEMkns",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Hum Bewafa Hargiz Na The — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 771,
    title: "Dilbar Mere",
    artist: "Sanam",
    youtubeId: "iFwRoxuN_9o",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Dilbar Mere — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 772,
    title: "Kora Kagaz Tha Ye Man Mera",
    artist: "Sanam · Sanah Moidutty",
    youtubeId: "SzHQSzAlxOI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Kora Kagaz Tha Ye Man Mera — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 773,
    title: "I'm Not The Only One",
    artist: "Sanam",
    youtubeId: "wDUSdQYh1IQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "I'm Not The Only One — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 774,
    title: "Tumi Robe Nirobe",
    artist: "Sanam",
    youtubeId: "qZbdZEFsT3U",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Tumi Robe Nirobe — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 775,
    title: "Roop Tera Mastana",
    artist: "Sanam · Rhys Sebastian",
    youtubeId: "dt6aKKhNhaA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Roop Tera Mastana — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 776,
    title: "Kuch Na Kaho",
    artist: "Sanam · Shirley Setia",
    youtubeId: "3A1LgFkIPfA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Kuch Na Kaho — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 777,
    title: "O Mere Dil Ke Chain",
    artist: "Sanam",
    youtubeId: "w--g30WTfBs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "O Mere Dil Ke Chain — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 778,
    title: "Garmi Di Tu (Live)",
    artist: "Sanam",
    youtubeId: "A8LPnJFCx10",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Garmi Di Tu (Live) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 779,
    title: "Mere Mehboob Qayamat Hogi",
    artist: "Sanam",
    youtubeId: "M6Ul3ASaFLU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Mere Mehboob Qayamat Hogi — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 780,
    title: "Samjhawan",
    artist: "Sanam",
    youtubeId: "aEcw8DU-VPw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Samjhawan — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 781,
    title: "Hawa Hawa (Live)",
    artist: "Sanam",
    youtubeId: "hU4HkuAYvys",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Hawa Hawa (Live) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 782,
    title: "Pal Pal Dil Ke Paas",
    artist: "Sanam",
    youtubeId: "GvK5ZVFju1I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Pal Pal Dil Ke Paas — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 783,
    title: "Jaanta Tha",
    artist: "Sanam",
    youtubeId: "E67XZE8nfiM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Jaanta Tha — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 784,
    title: "Garmi Di Tu",
    artist: "Sanam",
    youtubeId: "iHAhsSNevRU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Garmi Di Tu — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 785,
    title: "Badalne Ke Intezaar Mein (Acoustic)",
    artist: "Sanam",
    youtubeId: "cetXSn_Ta1c",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Badalne Ke Intezaar Mein (Acoustic) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 786,
    title: "Paa Hi Liya",
    artist: "Sanam",
    youtubeId: "m0bcsscuP40",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Paa Hi Liya — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 787,
    title: "Mere Sapno Ki Rani",
    artist: "Sanam",
    youtubeId: "IrpRI8NyulE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Mere Sapno Ki Rani — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 788,
    title: "Mary Did You Know",
    artist: "Sanam",
    youtubeId: "C7gi8hb9yBQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Mary Did You Know — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 789,
    title: "Yeh Raaten Yeh Mausam",
    artist: "Sanam · Simran Sehgal",
    youtubeId: "4HRC6c5-2lQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Yeh Raaten Yeh Mausam — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 790,
    title: "Tujhse Naraz Nahi Zindagi",
    artist: "Sanam",
    youtubeId: "uyzUJwWg9yM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Tujhse Naraz Nahi Zindagi — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 791,
    title: "Tara Vina Shyam",
    artist: "Sanam · Baljinder Singh",
    youtubeId: "n2v2sW-Wqyc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Tara Vina Shyam — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 792,
    title: "Aap Ki Nazron Ne Samjha",
    artist: "Sanam",
    youtubeId: "BWLYFc9MDFI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Aap Ki Nazron Ne Samjha — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 793,
    title: "Ek Ladki Ko Dekha (Acoustic)",
    artist: "Sanam",
    youtubeId: "XKbiIahG6ok",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ek Ladki Ko Dekha (Acoustic) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 794,
    title: "Khushnaseeb",
    artist: "Sanam",
    youtubeId: "JNSjthZ7NnI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Khushnaseeb — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 795,
    title: "Lag Jaa Gale (Acoustic)",
    artist: "Sanam",
    youtubeId: "HnLtNrvfZTU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Lag Jaa Gale (Acoustic) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 796,
    title: "Main Hoon",
    artist: "Sanam",
    youtubeId: "aE79diaYIww",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Main Hoon — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 797,
    title: "Titli",
    artist: "Sanam",
    youtubeId: "Vudu9vkJodQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Titli — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 798,
    title: "Ishq Bulaava",
    artist: "Sanam",
    youtubeId: "Y9N6zdXdz9A",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ishq Bulaava — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 799,
    title: "Duaa (Acoustic)",
    artist: "Sanam · Sanah Moidutty",
    youtubeId: "GGErfAmSK9I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Duaa (Acoustic) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 800,
    title: "Dhat Teri Ki",
    artist: "Sanam",
    youtubeId: "w5e66arTahc",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Dhat Teri Ki — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 801,
    title: "Teri Aankhon Se (Acoustic)",
    artist: "Sanam · Jonita Gandhi",
    youtubeId: "1ba9Yc96nZ0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Teri Aankhon Se (Acoustic) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 802,
    title: "Jee Le Zaraa",
    artist: "Sanam",
    youtubeId: "KHrvjVxXRhU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Jee Le Zaraa — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 803,
    title: "Behka",
    artist: "Sanam",
    youtubeId: "4WqCqZWSlLI",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Behka — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 804,
    title: "Boondon Se",
    artist: "Sanam",
    youtubeId: "gm_DTx9X-vc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Boondon Se — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 805,
    title: "Teri Aankhon Se",
    artist: "Sanam",
    youtubeId: "7FhsRxNAgNg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Teri Aankhon Se — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 806,
    title: "Gal Mithi Mithi Bol (Rehearsal)",
    artist: "Sanam",
    youtubeId: "fucFhjtHe-Q",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Gal Mithi Mithi Bol (Rehearsal) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 807,
    title: "Chhammak Challo (Rehearsal)",
    artist: "Sanam",
    youtubeId: "JdIr3Ik4ViE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Chhammak Challo (Rehearsal) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 808,
    title: "Ainvayi Ainvayi (Rehearsal)",
    artist: "Sanam",
    youtubeId: "U5vCGBY8SY4",
    era: "club",
    moods: ["party", "desi"],
    artists: ["sanam"],
    quotes: [
      { text: "Ainvayi Ainvayi (Rehearsal) — Bluetooth era classic.", cite: "Sanam" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 809,
    title: "Tera Zikr",
    artist: "Darshan Raval",
    youtubeId: "eK0IIyBlYew",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tera Zikr — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 810,
    title: "Hawa Banke",
    artist: "Darshan Raval",
    youtubeId: "QCXaa1mEUK0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Hawa Banke — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 811,
    title: "Chogada",
    artist: "Darshan Raval · Loveyatri",
    youtubeId: "yr7JFNsz5dU",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Chogada — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 812,
    title: "Mehrama",
    artist: "Darshan Raval · Love Aaj Kal",
    youtubeId: "HYUpNJJELeE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Mehrama — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 813,
    title: "Asal Mein",
    artist: "Darshan Raval",
    youtubeId: "beqprrnaKFc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Asal Mein — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 814,
    title: "Ek Tarfa",
    artist: "Darshan Raval",
    youtubeId: "fIip0BH6z7I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Ek Tarfa — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 815,
    title: "Baarish Lete Aana",
    artist: "Darshan Raval",
    youtubeId: "EFqkHIMbhQg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Baarish Lete Aana — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 816,
    title: "Is Qadar",
    artist: "Darshan Raval · Tulsi Kumar",
    youtubeId: "TBlixHMv_GQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Is Qadar — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 817,
    title: "Teri Aankhon Mein",
    artist: "Darshan Raval · Neha Kakkar",
    youtubeId: "mClF6mJV5xM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Teri Aankhon Mein — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 818,
    title: "Kamariya",
    artist: "Darshan Raval · Mitron",
    youtubeId: "i0_m90T04uw",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Kamariya — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 819,
    title: "Kabhii Tumhhe",
    artist: "Darshan Raval · Shershaah",
    youtubeId: "ByIZIKFmHOA",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Kabhii Tumhhe — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 820,
    title: "Ek Ladki Ko Dekha Toh Aisa Laga",
    artist: "Darshan Raval",
    youtubeId: "IAIGnS9BPKs",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Ek Ladki Ko Dekha Toh Aisa Laga — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 821,
    title: "Mahiye Jinna Sohna",
    artist: "Darshan Raval",
    youtubeId: "0Iu5kQi8lns",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Mahiye Jinna Sohna — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 822,
    title: "Bhula Diya",
    artist: "Darshan Raval",
    youtubeId: "g7Gu9fc4hEI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Bhula Diya — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 823,
    title: "Do Din",
    artist: "Darshan Raval",
    youtubeId: "R4mCK5P7WZE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Do Din — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 824,
    title: "Tu Mileya",
    artist: "Darshan Raval",
    youtubeId: "gEV_Po7PeIY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tu Mileya — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 825,
    title: "Judaiyaan",
    artist: "Darshan Raval · Shreya Ghoshal",
    youtubeId: "hUQ6kVhoM88",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Judaiyaan — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 826,
    title: "Jannat Ve",
    artist: "Darshan Raval",
    youtubeId: "LLF3GMfNEYU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Jannat Ve — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 827,
    title: "Tere Naal",
    artist: "Darshan Raval · Tulsi Kumar",
    youtubeId: "UY15igCWc2U",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tere Naal — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 828,
    title: "Tera Naam",
    artist: "Darshan Raval · Tulsi Kumar",
    youtubeId: "S1T1jGLSgZ4",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tera Naam — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 829,
    title: "Mujhe Peene Do",
    artist: "Darshan Raval",
    youtubeId: "tOXMlseYc7E",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Mujhe Peene Do — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 830,
    title: "Kaash Aisa Hota",
    artist: "Darshan Raval",
    youtubeId: "S2RYBkcAkVQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Kaash Aisa Hota — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 831,
    title: "Baarishon Mein",
    artist: "Darshan Raval",
    youtubeId: "3EueXxgltHg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Baarishon Mein — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 832,
    title: "Faasla",
    artist: "Darshan Raval · Shirley Setia",
    youtubeId: "qg6OsNiVRzQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Faasla — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 833,
    title: "Rabba Mehar Kari",
    artist: "Darshan Raval",
    youtubeId: "7zEx0AJguSM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Rabba Mehar Kari — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 834,
    title: "Lo Aayi Barsaat",
    artist: "Darshan Raval",
    youtubeId: "27sCc_J5ut8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Lo Aayi Barsaat — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 835,
    title: "Piya Re",
    artist: "Darshan Raval",
    youtubeId: "4KHsiBHyK6o",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Piya Re — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 836,
    title: "Saahiba",
    artist: "Darshan Raval",
    youtubeId: "b3MWLHWtmw8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Saahiba — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 837,
    title: "Goriye",
    artist: "Darshan Raval",
    youtubeId: "HmESsvTPQPk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Goriye — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 838,
    title: "Naal Naal Ve",
    artist: "Darshan Raval",
    youtubeId: "KnlQjZDChGk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Naal Naal Ve — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 839,
    title: "Barsaat Lagdi Ae",
    artist: "Darshan Raval",
    youtubeId: "pYKHceNOwo0",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Barsaat Lagdi Ae — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 840,
    title: "Nafrat",
    artist: "Darshan Raval",
    youtubeId: "25qkuX8qzQo",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Nafrat — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 841,
    title: "Morni",
    artist: "Darshan Raval",
    youtubeId: "DoaE_6Y2_8I",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Morni — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 842,
    title: "Saathiya",
    artist: "Darshan Raval",
    youtubeId: "zm4OWfvnP0M",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Saathiya — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 843,
    title: "Sajna",
    artist: "Darshan Raval",
    youtubeId: "YkjOuYP8wjc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Sajna — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 844,
    title: "Haara",
    artist: "Darshan Raval",
    youtubeId: "UbiYbqKaxVU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Haara — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 845,
    title: "Only Mine",
    artist: "Darshan Raval",
    youtubeId: "QhxidVMpWK0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Only Mine — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 846,
    title: "Sirf Tum",
    artist: "Darshan Raval",
    youtubeId: "_YMYy7eTio8",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Sirf Tum — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 847,
    title: "Preet Re",
    artist: "Darshan Raval · Dhadak 2",
    youtubeId: "k6q4lENp434",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Preet Re — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 848,
    title: "Soni Soni",
    artist: "Darshan Raval · Ishq Vishk Rebound",
    youtubeId: "axepn8QqxRk",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Soni Soni — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 849,
    title: "Odhani",
    artist: "Darshan Raval · Made In China",
    youtubeId: "xLPglKArWRE",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Odhani — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 850,
    title: "Bekhudi",
    artist: "Darshan Raval · Teraa Surroor",
    youtubeId: "SfEk5W3zH98",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Bekhudi — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 851,
    title: "Main Woh Chaand",
    artist: "Darshan Raval · Teraa Surroor",
    youtubeId: "8hBQJH2pHQ0",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Main Woh Chaand — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 852,
    title: "Kheech Meri Photo",
    artist: "Darshan Raval · Himesh Reshammiya",
    youtubeId: "pO-b3u3DCCs",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan", "himesh"],
    quotes: [
      { text: "Kheech Meri Photo — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 853,
    title: "Jab Tum Chaho",
    artist: "Darshan Raval · Prem Ratan Dhan Payo",
    youtubeId: "abCXAUnQfYU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Jab Tum Chaho — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 854,
    title: "Jaane Kis Mod Pe",
    artist: "Darshan Raval · Pehla Pyaar Doosri Baar",
    youtubeId: "l9tIQ54YRUU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Jaane Kis Mod Pe — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 855,
    title: "Dhol Bajaa",
    artist: "Darshan Raval",
    youtubeId: "7xNcMwyHQ6c",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Dhol Bajaa — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 856,
    title: "Jigar Thanda",
    artist: "Darshan Raval · Tere Ishk Mein",
    youtubeId: "TtD5BByOBHY",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Jigar Thanda — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 857,
    title: "Dhindhora Baje Re",
    artist: "Darshan Raval · Rocky Aur Rani",
    youtubeId: "zqgsnFehCzY",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Dhindhora Baje Re — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 858,
    title: "Needa Padadhani",
    artist: "Darshan Raval · Jersey",
    youtubeId: "wJVq_6DkavM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Needa Padadhani — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 859,
    title: "Yaara Teri Yaari",
    artist: "Darshan Raval",
    youtubeId: "jVug6gAdHuE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Yaara Teri Yaari — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 860,
    title: "Sahibaa",
    artist: "Darshan Raval · The Great Indian Family",
    youtubeId: "4ZWT6KPbYnE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Sahibaa — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 861,
    title: "Na Door Hai Na Paas Hai",
    artist: "Darshan Raval · Chandigarh Kare Aashiqui",
    youtubeId: "rQGq4SeaU-M",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Na Door Hai Na Paas Hai — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 862,
    title: "Tere Siva Jag Mein",
    artist: "Darshan Raval · Tadap",
    youtubeId: "aviO1jHvpDE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tere Siva Jag Mein — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 863,
    title: "Tere Siva",
    artist: "Darshan Raval",
    youtubeId: "Woq10xXdIhM",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tere Siva — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 864,
    title: "Shab Tum Ho",
    artist: "Darshan Raval",
    youtubeId: "DLxgg8HwhDg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Shab Tum Ho — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 865,
    title: "Tu Dua Hai",
    artist: "Darshan Raval",
    youtubeId: "1S-YYZA7A04",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tu Dua Hai — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 866,
    title: "Ishq Chadha Hai",
    artist: "Darshan Raval",
    youtubeId: "z3t4Ylb_e30",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Ishq Chadha Hai — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 867,
    title: "Ye Baarish",
    artist: "Darshan Raval",
    youtubeId: "RimXddCwM2I",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Ye Baarish — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 868,
    title: "Ab Phirse Jab Baarish",
    artist: "Darshan Raval",
    youtubeId: "T36e9-7Ql1E",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Ab Phirse Jab Baarish — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 869,
    title: "Saari Ki Saari",
    artist: "Darshan Raval",
    youtubeId: "ylWRcrh-uHI",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Saari Ki Saari — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 870,
    title: "Nayan Ne Bandh Rakhine",
    artist: "Darshan Raval",
    youtubeId: "8pfdxZAvKoU",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Nayan Ne Bandh Rakhine — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 871,
    title: "Dil Mera Blast",
    artist: "Darshan Raval",
    youtubeId: "l1YtQ2YOZDg",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Dil Mera Blast — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 872,
    title: "Tu Hai",
    artist: "Darshan Raval",
    youtubeId: "7E3xekt0QFc",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tu Hai — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 873,
    title: "Ik Tara",
    artist: "Darshan Raval",
    youtubeId: "62XccJOh9Lg",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Ik Tara — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 874,
    title: "O Beliya",
    artist: "Darshan Raval",
    youtubeId: "UFrg-IQS9Ac",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "O Beliya — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 875,
    title: "Kinni Soni",
    artist: "Darshan Raval",
    youtubeId: "1ha9tAhJC-k",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Kinni Soni — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 876,
    title: "Jeeja",
    artist: "Darshan Raval",
    youtubeId: "A1vEZhwH8y8",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Jeeja — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 877,
    title: "Taarifein",
    artist: "Darshan Raval",
    youtubeId: "1uqGOitqdWQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Taarifein — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 878,
    title: "Batao Zara",
    artist: "Darshan Raval",
    youtubeId: "ChTW6C5basw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Batao Zara — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 879,
    title: "Tera Ho Gaya",
    artist: "Darshan Raval",
    youtubeId: "AMGtL2fbp6Q",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Tera Ho Gaya — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 880,
    title: "Out Of Control",
    artist: "Darshan Raval",
    youtubeId: "8do3-kAEq1E",
    era: "club",
    moods: ["party", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Out Of Control — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 881,
    title: "Yaar Mere",
    artist: "Darshan Raval",
    youtubeId: "YZIPQ41KARE",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Yaar Mere — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 882,
    title: "Karwaan",
    artist: "Darshan Raval",
    youtubeId: "jjIf5CYBJyw",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Karwaan — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  },
  {
    id: 883,
    title: "Jaadu",
    artist: "Darshan Raval",
    youtubeId: "DXw_OjhxrzQ",
    era: "ballad",
    moods: ["slow", "desi"],
    artists: ["darshan"],
    quotes: [
      { text: "Jaadu — Bluetooth era classic.", cite: "Darshan Raval" },
      { text: "Shared phone to phone.", cite: "Memory card" },
    ],
  }
].map((t) => ({
  ...t,
  art: `https://i.ytimg.com/vi/${t.youtubeId}/hqdefault.jpg`,
  accent: "#3ec6ff",
  artists: t.artists || inferArtistsFromMeta(t),
}));

function inferArtistsFromMeta(t) {
  const blob = `${t.artist || ""} ${t.title || ""}`.toLowerCase();
  const artists = [];
  if (/honey|yo yo/.test(blob)) artists.push("honey");
  if (/atif/.test(blob)) artists.push("atif");
  if (/arijit/.test(blob)) artists.push("arijit");
  if (/\bkk\b|k\.k/.test(blob)) artists.push("kk");
  if (/emraan/.test(blob)) artists.push("emraan");
  if (/mohit/.test(blob)) artists.push("mohit");
  if (/\bimran khan\b/.test(blob) && !/jaane tu|delhi belly|i hate luv|luck by chance|mere brother|ek main aur/.test(blob)) {
    artists.push("imran");
  }
  if (/falak/.test(blob)) artists.push("falak");
  if (/papon/.test(blob)) artists.push("papon");
  if (/\bwwe\b|entrance|titantron|wrestling/.test(blob)) artists.push("wwe");
  if (/bilal saeed|\bbilal\b/.test(blob)) artists.push("bilal");
  if (/jazzy b|\bjazzy\b/.test(blob)) artists.push("jazzy");
  if (/himesh/.test(blob)) artists.push("himesh");
  if (/rahat/.test(blob)) artists.push("rahat");
  if (/guru randhawa/.test(blob)) artists.push("guru");
  if (/sunidhi/.test(blob)) artists.push("sunidhi");
  if (/\bshaan\b/.test(blob)) artists.push("shaan");
  if (/mashup|mixtape|mega mix/.test(blob)) artists.push("mashup");
  return artists.length ? artists : ["mixed"];
}
const LS = {
  fav: "bt-era-favs",
  resume: "bt-era-resume",
  shuffle: "bt-era-shuffle",
  repeat: "bt-era-repeat",
  volume: "bt-era-volume",
  likedRadio: "bt-era-liked-radio",
  muted: "bt-era-muted",
};

const nearbyDevices = [
  { id: "nokia-5130", name: "Nokia 5130", meta: "XpressMusic · Class 2", signal: "Strong", color: "#3ec6ff", short: "N5" },
  { id: "se-w810", name: "Sony Ericsson W810", meta: "Walkman phone", signal: "Near", color: "#ff7eb6", short: "W8" },
  { id: "samsung-guru", name: "Samsung Guru", meta: "Dual SIM classic", signal: "Good", color: "#ffb45a", short: "SG" },
  { id: "nokia-6300", name: "Nokia 6300", meta: "Steel finish", signal: "Fair", color: "#7cffb2", short: "N6" },
  { id: "microsd", name: "2GB Memory Card", meta: "Via card reader", signal: "USB", color: "#c9d4de", short: "2G" },
];

const defaultQuotes = [
  { text: "Songs we shared phone to phone — waiting for that progress bar.", cite: "Bluetooth Era" },
  { text: "2GB card. Unlimited nostalgia.", cite: "Pre-Spotify India" },
  { text: "No login. Just press play.", cite: "BT Radio" },
];

let index = 0;
let ytPlayer = null;
let ready = false;
let playing = false;
let seeking = false;
let progressTimer = null;
let quoteTimer = null;
let pairTimer = null;
let queueOpen = false;
let queueCloseTimer = null;
const QUEUE_ANIM_MS = 300;
let queueFilter = "all";
let queueQuery = "";
let artistFilter = null;
const artistLabels = {
  honey: "Yo Yo Honey Singh",
  atif: "Atif Aslam",
  arijit: "Arijit Singh",
  emraan: "Emraan Hashmi",
  kk: "KK",
  shaan: "Shaan",
  sanam: "Sanam",
  darshan: "Darshan Raval",
  mohit: "Mohit Chauhan",
  imran: "Imran Khan",
  falak: "Falak Shabbir",
  papon: "Papon",
  wwe: "WWE Entrances",
  bilal: "Bilal Saeed",
  jazzy: "Jazzy B",
  rahat: "Rahat Fateh Ali Khan",
  guru: "Guru Randhawa",
  sunidhi: "Sunidhi Chauhan",
  himesh: "Himesh Reshammiya",
  mashup: "Mashups",
};
let shuffleOn = localStorage.getItem(LS.shuffle) === "1";
let repeatMode = localStorage.getItem(LS.repeat) || "off";
let volumeLevel = Number(localStorage.getItem(LS.volume) ?? 80);
let muted = localStorage.getItem(LS.muted) === "1";
let favorites = loadFavorites();
let shuffleBag = [];
let shufflePos = 0;
let resumeSeekSec = 0;
let blocked = new Set();
let pendingPlay = false;
let fallbackCursor = new Map();
let skipGuardUntil = 0;
let droppingTrack = false;
let loadedVideoId = null;

const el = {
  shell: document.getElementById("player-shell"),
  play: document.getElementById("play"),
  prev: document.getElementById("prev"),
  next: document.getElementById("next"),
  iconPlay: document.getElementById("icon-play"),
  iconPause: document.getElementById("icon-pause"),
  title: document.getElementById("track-title"),
  artist: document.getElementById("track-artist"),
  discImg: document.getElementById("disc-img"),
  trackDisc: document.getElementById("track-disc"),
  dock: document.querySelector(".dock"),
  seek: document.getElementById("seek"),
  timeCurrent: document.getElementById("time-current"),
  timeTotal: document.getElementById("time-total"),
  toast: document.getElementById("toast"),
  quoteText: document.getElementById("quote-text"),
  clockH: document.getElementById("clock-h"),
  clockM: document.getElementById("clock-m"),
  clockAmPm: document.getElementById("clock-ampm"),
  dockKicker: document.getElementById("dock-kicker"),
  bgA: document.getElementById("bg-a"),
  bgB: document.getElementById("bg-b"),
  shareBtn: document.getElementById("share-btn"),
  helpBtn: document.getElementById("help-btn"),
  keysheet: document.getElementById("keysheet"),
  keysheetClose: document.getElementById("keysheet-close"),
  queue: document.getElementById("queue"),
  queueToggle: document.getElementById("queue-toggle"),
  queueClose: document.getElementById("queue-close"),
  queueBackdrop: document.getElementById("queue-backdrop"),
  queueList: document.getElementById("queue-list"),
  queueSearch: document.getElementById("queue-search"),
  queueCount: document.getElementById("queue-count"),
  queueEmpty: document.getElementById("queue-empty"),
  queueArtists: [...document.querySelectorAll(".queue__artist")],
  tabAll: document.getElementById("tab-all"),
  tabLiked: document.getElementById("tab-liked"),
  favBtn: document.getElementById("fav-btn"),
  shuffleBtn: document.getElementById("shuffle-btn"),
  repeatBtn: document.getElementById("repeat-btn"),
  repeatBadge: document.getElementById("repeat-badge"),
  muteBtn: document.getElementById("mute"),
  iconVol: document.getElementById("icon-vol"),
  iconMute: document.getElementById("icon-mute"),
  volume: document.getElementById("volume"),
  discover: document.getElementById("discover"),
  moreLike: document.getElementById("more-like-this"),
  playlistActive: document.getElementById("playlist-active"),
  playlistName: document.getElementById("playlist-name"),
  pairBtn: document.getElementById("pair-btn"),
  pairSheet: document.getElementById("pair-sheet"),
  pairBackdrop: document.getElementById("pair-backdrop"),
  pairClose: document.getElementById("pair-close"),
  pairList: document.getElementById("pair-list"),
  pairStatus: document.getElementById("pair-status"),
  pairProgress: document.getElementById("pair-progress"),
  pairProgressLabel: document.getElementById("pair-progress-label"),
  pairProgressPct: document.getElementById("pair-progress-pct"),
  pairProgressFill: document.getElementById("pair-progress-fill"),
};

function artFor(track) {
  if (track?.art) return track.art;
  if (track?.youtubeId) return `https://i.ytimg.com/vi/${track.youtubeId}/hqdefault.jpg`;
  return "";
}

function lcdFileName(track) {
  const raw = (track?.title || "track").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "_");
  return `${raw.slice(0, 22) || "track"}.mp3`;
}

function loadFavorites() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS.fav) || "[]");
    return new Set(Array.isArray(raw) ? raw.map(Number) : []);
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  localStorage.setItem(LS.fav, JSON.stringify([...favorites]));
}

function formatTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function showToast(msg) {
  el.toast.hidden = false;
  el.toast.textContent = msg;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    el.toast.hidden = true;
  }, 2200);
}

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  el.clockH.textContent = String(h).padStart(2, "0");
  el.clockM.textContent = String(m).padStart(2, "0");
  el.clockAmPm.textContent = ampm;
}

function activePool() {
  let list = tracks.filter((t) => !blocked.has(t.id));
  if (artistFilter) list = list.filter((t) => (t.artists || []).includes(artistFilter));
  return list.length ? list : tracks.filter((t) => !blocked.has(t.id) && (!artistFilter || (t.artists || []).includes(artistFilter)));
}

function indexInPool(pool, trackId = tracks[index]?.id) {
  const i = pool.findIndex((t) => t.id === trackId);
  return i >= 0 ? i : 0;
}

function rebuildShuffleBag() {
  const pool = activePool();
  shuffleBag = pool.map((_, i) => i);
  for (let i = shuffleBag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleBag[i], shuffleBag[j]] = [shuffleBag[j], shuffleBag[i]];
  }
  shufflePos = indexInPool(pool);
  const cur = shuffleBag.indexOf(shufflePos);
  if (cur > 0) {
    shuffleBag.splice(cur, 1);
    shuffleBag.unshift(shufflePos);
    shufflePos = 0;
  }
}

function setTransportReady(isReady) {
  ready = isReady;
  el.play.disabled = !isReady;
  el.prev.disabled = !isReady;
  el.next.disabled = !isReady;
  el.play.classList.toggle("is-loading", !isReady);
  el.play.setAttribute("aria-busy", String(!isReady));
  el.play.setAttribute("aria-label", isReady ? "Play" : "Loading player…");
}

function setPlayingUI(isPlaying) {
  playing = isPlaying;
  el.shell.classList.toggle("is-playing", isPlaying);
  el.iconPlay.classList.toggle("is-hidden", isPlaying);
  el.iconPause.classList.toggle("is-hidden", !isPlaying);
  el.play.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
}

function setSeekProgress(value) {
  const v = Math.max(0, Math.min(100, Number(value) || 0));
  el.seek.value = String(v);
  el.seek.style.setProperty("--seek-progress", `${v}%`);
  el.dock?.style.setProperty("--seek-progress", `${v}%`);
}

function syncProgress() {
  if (!ytPlayer || seeking) return;
  const current = ytPlayer.getCurrentTime?.() || 0;
  const duration = ytPlayer.getDuration?.() || 0;
  el.timeCurrent.textContent = formatTime(current);
  el.timeTotal.textContent = formatTime(duration);
  if (duration > 0) setSeekProgress((current / duration) * 100);
}

function startProgress() {
  stopProgress();
  progressTimer = setInterval(syncProgress, 400);
}

function stopProgress() {
  clearInterval(progressTimer);
  progressTimer = null;
}

function applyVolumeToPlayer() {
  if (!ytPlayer?.setVolume) return;
  ytPlayer.setVolume(muted ? 0 : volumeLevel);
  if (muted) ytPlayer.mute?.();
  else ytPlayer.unMute?.();
}

function updateVolumeUI() {
  const shown = muted ? 0 : volumeLevel;
  el.volume.value = String(volumeLevel);
  el.volume.style.setProperty("--vol-progress", `${shown}%`);
  el.muteBtn.setAttribute("aria-pressed", String(muted || volumeLevel === 0));
  el.muteBtn.setAttribute("aria-label", muted || volumeLevel === 0 ? "Unmute" : "Mute");
  el.iconVol.classList.toggle("is-hidden", muted || volumeLevel === 0);
  el.iconMute.classList.toggle("is-hidden", !(muted || volumeLevel === 0));
}

function setVolumeLevel(v) {
  volumeLevel = Math.max(0, Math.min(100, Number(v)));
  muted = volumeLevel === 0;
  localStorage.setItem(LS.volume, String(volumeLevel));
  localStorage.setItem(LS.muted, muted ? "1" : "0");
  applyVolumeToPlayer();
  updateVolumeUI();
}

function nudgeVolume(delta) {
  setVolumeLevel(volumeLevel + delta);
}

function toggleMute() {
  if (muted || volumeLevel === 0) {
    muted = false;
    if (volumeLevel === 0) volumeLevel = 60;
  } else {
    muted = true;
  }
  localStorage.setItem(LS.muted, muted ? "1" : "0");
  localStorage.setItem(LS.volume, String(volumeLevel));
  applyVolumeToPlayer();
  updateVolumeUI();
}

function updateFavUI() {
  const track = tracks[index];
  const on = track && favorites.has(track.id);
  el.favBtn.setAttribute("aria-pressed", String(!!on));
  el.favBtn.setAttribute("aria-label", on ? "Unlike" : "Like");
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveFavorites();
  updateFavUI();
  buildQueue();
  updateLikedRadioUI();
  showToast(favorites.has(id) ? "Saved to memory card" : "Removed from likes");
}

function updateShuffleUI() {
  el.shuffleBtn.setAttribute("aria-pressed", String(shuffleOn));
  el.shuffleBtn.setAttribute("aria-label", shuffleOn ? "Shuffle on" : "Shuffle");
}

function toggleShuffle() {
  shuffleOn = !shuffleOn;
  localStorage.setItem(LS.shuffle, shuffleOn ? "1" : "0");
  if (shuffleOn) rebuildShuffleBag();
  updateShuffleUI();
  showToast(shuffleOn ? "Shuffle on" : "Shuffle off");
}

function updateRepeatUI() {
  el.repeatBtn.dataset.mode = repeatMode;
  el.repeatBtn.setAttribute("aria-pressed", String(repeatMode !== "off"));
  el.repeatBtn.setAttribute(
    "aria-label",
    repeatMode === "one" ? "Repeat one" : repeatMode === "all" ? "Repeat all" : "Repeat"
  );
  el.repeatBadge.hidden = repeatMode !== "one";
}

function cycleRepeat() {
  repeatMode = repeatMode === "off" ? "all" : repeatMode === "all" ? "one" : "off";
  localStorage.setItem(LS.repeat, repeatMode);
  updateRepeatUI();
  showToast(repeatMode === "off" ? "Repeat off" : repeatMode === "one" ? "Repeat one" : "Repeat all");
}

function updateArtistUI() {
  const label = artistFilter ? artistLabels[artistFilter] : "All";
  if (el.playlistName) el.playlistName.textContent = label;
  el.playlistActive?.setAttribute(
    "aria-label",
    `Open playlist · ${label}`
  );
  el.queueArtists.forEach((btn) => {
    const value = btn.dataset.artist || "";
    const active = artistFilter ? value === artistFilter : value === "";
    btn.classList.toggle("is-on", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function setArtistFilter(artist, { play = false } = {}) {
  artistFilter = artist || null;
  updateArtistUI();
  if (shuffleOn) rebuildShuffleBag();
  updatePlaylistCountUI();
  buildQueue();
  const pool = activePool();
  if (play && pool.length && ready) {
    const pick = pool[Math.floor(Math.random() * pool.length)];
    playTrackById(pick.id, { autoplay: true });
  } else if (pool.length && !pool.find((t) => t.id === tracks[index]?.id)) {
    playTrackById(pool[0].id, { autoplay: false });
  }
  showToast(artistFilter ? `${artistLabels[artistFilter]} playlist — tap Play` : "All playlists");
}

function updatePlaylistCountUI() {
  const n = activePool().length;
  const label = artistFilter ? artistLabels[artistFilter] : "Bluetooth Era";
  el.dockKicker.textContent = `${label} · ${n} tracks · non-stop`;
}

function moreLikeThis() {
  const current = tracks[index];
  if (!current) return;
  const pool = activePool().filter((t) => t.id !== current.id);
  const scored = pool
    .map((t) => {
      let score = 0;
      if (t.era === current.era) score += 2;
      score += t.moods.filter((m) => current.moods.includes(m)).length;
      score += (t.artists || []).filter((a) => (current.artists || []).includes(a)).length * 3;
      return { t, score };
    })
    .sort((a, b) => b.score - a.score || Math.random() - 0.5);
  const pick = scored[0]?.t || pool[Math.floor(Math.random() * pool.length)];
  if (pick) playTrackById(pick.id, { autoplay: true });
}

function showTrackQuote(instant = false) {
  const track = tracks[index];
  const bank = track?.quotes?.length ? track.quotes : defaultQuotes;
  const q = bank[Math.floor(Math.random() * bank.length)];
  if (!q) return;
  if (!instant) {
    el.quoteText.style.opacity = "0";
    setTimeout(() => {
      el.quoteText.textContent = q.text;
      el.quoteText.style.opacity = "1";
    }, 220);
  } else {
    el.quoteText.textContent = q.text;
    el.quoteText.style.opacity = "1";
  }
}

const BG_IMAGES = Array.from({ length: 9 }, (_, i) => `assets/${i + 1}.png`);
let currentBg = "";
let useBgA = true;

function preloadBg(src) {
  if (!src) return;
  const img = new Image();
  img.src = src;
}

function bgForTrack(track) {
  if (!track) return BG_IMAGES[0];
  let i = Math.abs((Number(track.id) || 1) - 1) % BG_IMAGES.length;
  if (BG_IMAGES[i] === currentBg) {
    i = (i + 1 + (Math.abs(Number(track.id) || 0) % 3)) % BG_IMAGES.length;
  }
  return BG_IMAGES[i];
}

function setBackground(art, { instant = false } = {}) {
  if (!art || !el.bgA || !el.bgB || art === currentBg) return;
  currentBg = art;

  const next = useBgA ? el.bgB : el.bgA;
  const prev = useBgA ? el.bgA : el.bgB;

  next.style.backgroundImage = `url("${art}")`;
  if (instant) {
    prev.classList.remove("is-active");
    next.classList.add("is-active");
  } else {
    next.classList.add("is-active");
    prev.classList.remove("is-active");
  }
  useBgA = !useBgA;

  const idx = BG_IMAGES.indexOf(art);
  if (idx >= 0) {
    preloadBg(BG_IMAGES[(idx + 1) % BG_IMAGES.length]);
    preloadBg(BG_IMAGES[(idx + 2) % BG_IMAGES.length]);
  }
}

function startQuotes() {
  clearInterval(quoteTimer);
  quoteTimer = setInterval(() => showTrackQuote(false), 9000);
}

function updateMeta({ instantBg = false, instantQuote } = {}) {
  const track = tracks[index];
  if (!track) return;
  el.title.textContent = track.title;
  el.artist.textContent = track.artist;
  el.discImg.src = artFor(track);
  setBackground(bgForTrack(track), { instant: instantBg });
  if (el.trackDisc) {
    el.trackDisc.classList.remove("is-swap");
    void el.trackDisc.offsetWidth;
    el.trackDisc.classList.add("is-swap");
  }
  document.title = track?.title ? `Bluetooth Era · ${track.title}` : "Bluetooth Era";
  updateFavUI();
  showTrackQuote(instantQuote ?? instantBg);
  highlightQueue();
}

function saveResume(force = false) {
  if (!tracks[index]) return;
  const current = ytPlayer?.getCurrentTime?.() || 0;
  if (!force && current < 2) return;
  try {
    localStorage.setItem(
      LS.resume,
      JSON.stringify({ id: tracks[index].id, t: current, at: Date.now() })
    );
  } catch {
    /* ignore */
  }
}

function applyDeepLinkOrResume() {
  const params = new URLSearchParams(location.search);
  const artistParam = params.get("artist");
  if (artistParam && artistLabels[artistParam]) {
    artistFilter = artistParam;
  }
  const tParam = Number(params.get("t"));
  if (tParam) {
    const i = tracks.findIndex((x) => x.id === tParam);
    if (i >= 0) {
      index = i;
      return;
    }
  }
  try {
    const raw = JSON.parse(localStorage.getItem(LS.resume) || "null");
    if (raw?.id) {
      const i = tracks.findIndex((x) => x.id === raw.id);
      if (i >= 0) {
        index = i;
        if (raw.t > 3 && Date.now() - (raw.at || 0) < 1000 * 60 * 60 * 12) {
          resumeSeekSec = raw.t;
        }
      }
    }
  } catch {
    /* ignore */
  }
}

function setQueueOpen(open) {
  if (queueCloseTimer) {
    window.clearTimeout(queueCloseTimer);
    queueCloseTimer = null;
  }

  if (open) {
    queueOpen = true;
    if (el.queue) {
      el.queue.hidden = false;
      el.queue.classList.remove("is-closing");
      // Force reflow so open transition plays even if reopening quickly
      void el.queue.offsetWidth;
      el.queue.classList.add("is-open");
    }
    if (el.queueBackdrop) {
      el.queueBackdrop.hidden = false;
      void el.queueBackdrop.offsetWidth;
      el.queueBackdrop.classList.add("is-open");
    }
    el.queue?.setAttribute("aria-hidden", "false");
    el.queueToggle?.setAttribute("aria-expanded", "true");
    el.queueToggle?.classList.add("is-open");
    el.queueToggle?.setAttribute("aria-label", "Close queue");
    el.playlistActive?.setAttribute("aria-expanded", "true");
    el.playlistActive?.classList.add("is-on");
    buildQueue();
    window.setTimeout(() => el.queueSearch?.focus?.(), 80);
    return;
  }

  queueOpen = false;
  el.queue?.classList.remove("is-open");
  el.queue?.classList.add("is-closing");
  el.queueBackdrop?.classList.remove("is-open");
  el.queue?.setAttribute("aria-hidden", "true");
  el.queueToggle?.setAttribute("aria-expanded", "false");
  el.queueToggle?.classList.remove("is-open");
  el.queueToggle?.setAttribute("aria-label", "Queue");
  el.playlistActive?.setAttribute("aria-expanded", "false");
  el.playlistActive?.classList.remove("is-on");

  queueCloseTimer = window.setTimeout(() => {
    queueCloseTimer = null;
    if (el.queue) {
      el.queue.classList.remove("is-closing");
      el.queue.hidden = true;
    }
    if (el.queueBackdrop) el.queueBackdrop.hidden = true;
  }, QUEUE_ANIM_MS);
}

function setQueueFilter(filter) {
  queueFilter = filter;
  el.tabAll?.classList.toggle("is-active", filter === "all");
  el.tabLiked?.classList.toggle("is-active", filter === "liked");
  buildQueue();
}

function buildQueue() {
  if (!el.queueList) return;
  const q = queueQuery.trim().toLowerCase();
  let list = tracks.filter((t) => !blocked.has(t.id));
  if (queueFilter === "liked") list = list.filter((t) => favorites.has(t.id));
  if (artistFilter) list = list.filter((t) => (t.artists || []).includes(artistFilter));
  if (q) {
    list = list.filter(
      (t) => t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q)
    );
  }

  // All playlist (and filtered views): A→Z by title
  list = list.slice().sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base", numeric: true })
  );

  if (el.queueCount) {
    const label = artistFilter ? artistLabels[artistFilter] : "All";
    el.queueCount.textContent = `${list.length} track${list.length === 1 ? "" : "s"} · ${label}`;
  }

  if (!list.length) {
    el.queueList.innerHTML = "";
    if (el.queueEmpty) {
      el.queueEmpty.hidden = false;
      el.queueEmpty.textContent =
        queueFilter === "liked"
          ? "No liked songs yet — tap ♥ on a track."
          : "No tracks in this playlist.";
    }
    return;
  }

  if (el.queueEmpty) el.queueEmpty.hidden = true;

  el.queueList.innerHTML = list
    .map((t, i) => {
      const fav = favorites.has(t.id);
      const current = tracks[index]?.id === t.id;
      return `<li class="queue__row">
        <button type="button" class="queue__item${current ? " is-active" : ""}" data-id="${t.id}">
          <img class="queue__thumb" src="${artFor(t)}" alt="" loading="lazy" />
          <span class="queue__num">${String(i + 1).padStart(2, "0")}</span>
          <span class="queue__song">
            <span class="queue__song-title">${escapeHtml(t.title)}</span>
            <span class="queue__song-artist">${escapeHtml(t.artist)}</span>
          </span>
        </button>
        <button type="button" class="queue__fav${fav ? " is-on" : ""}" data-fav="${t.id}" aria-label="${fav ? "Unlike" : "Like"}">${fav ? "♥" : "♡"}</button>
      </li>`;
    })
    .join("");
}

function highlightQueue() {
  el.queueList?.querySelectorAll(".queue__item").forEach((node) => {
    node.classList.toggle("is-active", Number(node.dataset.id) === tracks[index]?.id);
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function playTrackById(id, { autoplay = true } = {}) {
  const i = tracks.findIndex((t) => t.id === id);
  if (i < 0) return;
  index = i;
  fallbackCursor.set(id, 0);
  updateMeta({ instantQuote: true });
  if (!ytPlayer || !ready) {
    pendingPlay = !!autoplay;
    showToast("Tuning in…");
    return;
  }
  loadCurrent({ autoplay });
}

function currentVideoId(track) {
  if (!track) return null;
  const alts = [track.youtubeId, ...(track.fallbacks || [])].filter(Boolean);
  const cursor = fallbackCursor.get(track.id) || 0;
  return alts[Math.min(cursor, alts.length - 1)];
}

function loadCurrent({ autoplay = true } = {}) {
  const track = tracks[index];
  if (!track) return;
  if (!ytPlayer || !ready) {
    pendingPlay = !!autoplay;
    return;
  }
  updateMeta();
  saveResume(true);
  const videoId = currentVideoId(track);
  loadedVideoId = videoId;

  // Exact yoyoera pattern
  if (autoplay) {
    ytPlayer.loadVideoById(videoId);
  } else {
    ytPlayer.cueVideoById(videoId);
    setPlayingUI(false);
    stopProgress();
  }

  if (shuffleOn) {
    const pool = activePool();
    shufflePos = indexInPool(pool);
  }
  buildQueue();
}

function playNext({ fromEnded = false } = {}) {
  const pool = activePool();
  if (!pool.length) return;

  if (fromEnded && repeatMode === "one") {
    ytPlayer?.seekTo(0, true);
    ytPlayer?.playVideo();
    return;
  }

  const currentPoolIndex = indexInPool(pool);
  let nextPoolIndex;

  if (shuffleOn) {
    shufflePos = (shufflePos + 1) % Math.max(shuffleBag.length, 1);
    if (shufflePos === 0 && repeatMode === "off" && fromEnded) {
      setPlayingUI(false);
      return;
    }
    nextPoolIndex = shuffleBag[shufflePos] ?? 0;
  } else {
    nextPoolIndex = currentPoolIndex + 1;
    if (nextPoolIndex >= pool.length) {
      if (repeatMode === "off" && fromEnded) {
        setPlayingUI(false);
        return;
      }
      nextPoolIndex = 0;
    }
  }

  const next = pool[nextPoolIndex];
  if (next) playTrackById(next.id, { autoplay: true });
}

function playPrev() {
  const current = ytPlayer?.getCurrentTime?.() || 0;
  if (current > 3) {
    ytPlayer.seekTo(0, true);
    return;
  }
  const pool = activePool();
  if (!pool.length) return;
  let prevPoolIndex;
  if (shuffleOn) {
    shufflePos = (shufflePos - 1 + shuffleBag.length) % Math.max(shuffleBag.length, 1);
    prevPoolIndex = shuffleBag[shufflePos] ?? 0;
  } else {
    const currentPoolIndex = indexInPool(pool);
    prevPoolIndex = (currentPoolIndex - 1 + pool.length) % pool.length;
  }
  const prev = pool[prevPoolIndex];
  if (prev) playTrackById(prev.id, { autoplay: true });
}

function togglePlay() {
  if (!ready || !ytPlayer) {
    pendingPlay = true;
    showToast("Tuning in…");
    return;
  }
  const state = ytPlayer.getPlayerState?.();
  if (state === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

function seekBy(delta) {
  if (!ready || !ytPlayer) return;
  const current = ytPlayer.getCurrentTime?.() || 0;
  const duration = ytPlayer.getDuration?.() || 0;
  const next = Math.max(0, Math.min(duration, current + delta));
  ytPlayer.seekTo(next, true);
  syncProgress();
  saveResume(true);
}

function dropCurrentTrack({ autoplay = true, reason = "Track unavailable — skipping" } = {}) {
  // Same guard + flow as yoyoera
  if (droppingTrack) return;

  const track = tracks[index];
  if (track) {
    const alts = [track.youtubeId, ...(track.fallbacks || [])].filter(Boolean);
    const cursor = (fallbackCursor.get(track.id) || 0) + 1;
    if (cursor < alts.length) {
      fallbackCursor.set(track.id, cursor);
      showToast("Trying another upload…");
      loadCurrent({ autoplay: true });
      return;
    }
  }

  if (Date.now() < skipGuardUntil) return;
  skipGuardUntil = Date.now() + 250;
  droppingTrack = true;

  if (track) blocked.add(track.id);

  showToast(reason);
  updatePlaylistCountUI();
  buildQueue();
  if (shuffleOn) rebuildShuffleBag();

  const pool = activePool();
  if (!pool.length) {
    setPlayingUI(false);
    droppingTrack = false;
    showToast("No playable tracks left");
    return;
  }

  const start = index;
  let played = false;
  for (let step = 1; step <= tracks.length; step += 1) {
    const candidate = tracks[(start + step) % tracks.length];
    if (!blocked.has(candidate.id) && pool.some((t) => t.id === candidate.id)) {
      playTrackById(candidate.id, { autoplay });
      played = true;
      break;
    }
  }
  if (!played) playTrackById(pool[0].id, { autoplay });

  window.setTimeout(() => {
    droppingTrack = false;
  }, 250);
}

function shareApp() {
  const track = tracks[index];
  const url = new URL(location.href);
  if (track) url.searchParams.set("t", String(track.id));
  if (artistFilter) url.searchParams.set("artist", artistFilter);
  else url.searchParams.delete("artist");
  const text = track
    ? `Listening to ${track.title} on Bluetooth Era`
    : "Bluetooth Era — songs we shared phone to phone";
  if (navigator.share) {
    navigator.share({ title: "Bluetooth Era", text, url: url.toString() }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(url.toString()).then(
      () => showToast("Link copied"),
      () => showToast(url.toString())
    );
  }
}

function setKeysheetOpen(open) {
  el.keysheet.hidden = !open;
  el.helpBtn?.classList.toggle("is-on", open);
  el.helpBtn?.setAttribute("aria-pressed", String(open));
}

function toggleKeysheet() {
  setKeysheetOpen(el.keysheet.hidden);
}

function setPairSheetOpen(open) {
  if (!el.pairSheet) return;
  el.pairSheet.hidden = !open;
  el.pairBtn?.setAttribute("aria-expanded", String(open));
  if (open) {
    el.shell.classList.add("is-paired");
    renderNearbyDevices();
    el.pairStatus.textContent = "Scanning for phones nearby…";
    el.pairProgress.hidden = true;
    el.pairProgressFill.style.width = "0%";
    el.pairSheet.classList.remove("is-pairing");
  } else {
    clearInterval(pairTimer);
    pairTimer = null;
    el.shell.classList.remove("is-paired");
    el.pairSheet.classList.remove("is-pairing");
  }
}

function renderNearbyDevices() {
  if (!el.pairList) return;
  el.pairList.innerHTML = nearbyDevices
    .map(
      (d) => `
    <button type="button" class="pair-device" role="listitem" data-device="${d.id}" style="--device-color:${d.color}">
      <span class="pair-device__avatar">${d.short}</span>
      <span>
        <p class="pair-device__name">${d.name}</p>
        <p class="pair-device__meta">${d.meta}</p>
      </span>
      <span class="pair-device__signal">${d.signal}</span>
    </button>`
    )
    .join("");
}

function pairWithDevice(deviceId) {
  const device = nearbyDevices.find((d) => d.id === deviceId);
  if (!device || !el.pairSheet) return;

  clearInterval(pairTimer);
  el.pairSheet.classList.add("is-pairing");
  el.pairProgress.hidden = false;
  el.pairStatus.textContent = `Pairing with ${device.name}…`;
  el.pairList.querySelectorAll(".pair-device").forEach((btn) => {
    btn.classList.toggle("is-paired", btn.dataset.device === deviceId);
    btn.disabled = true;
  });

  const steps = [8, 22, 41, 63, 84, 100];
  let i = 0;
  el.pairProgressLabel.textContent = "Waiting for accept…";
  el.pairProgressPct.textContent = "0%";
  el.pairProgressFill.style.width = "0%";

  pairTimer = setInterval(() => {
    const pct = steps[i];
    el.pairProgressFill.style.width = `${pct}%`;
    el.pairProgressPct.textContent = `${pct}%`;
    if (pct < 40) el.pairProgressLabel.textContent = "Connecting…";
    else if (pct < 90) el.pairProgressLabel.textContent = `Sending Blue_Eyes.mp3`;
    else el.pairProgressLabel.textContent = "Transfer complete";
    i += 1;
    if (i >= steps.length) {
      clearInterval(pairTimer);
      pairTimer = null;
      el.pairStatus.textContent = `Paired with ${device.name}`;
      showToast(`Connected · ${device.name}`);
      el.pairList.querySelectorAll(".pair-device").forEach((btn) => {
        btn.disabled = false;
      });
      setTimeout(() => setPairSheetOpen(false), 1600);
    }
  }, 480);
}

function runPairSequence() {
  setPairSheetOpen(true);
}

function onYouTubeIframeAPIReady() {
  if (ytPlayer) return;
  if (!tracks.length) {
    showToast("No playable tracks left");
    return;
  }

  // Exact pattern from AbbasShaikh98/yoyoera
  ytPlayer = new YT.Player("yt-player", {
    height: "200",
    width: "200",
    videoId: tracks[index]?.youtubeId || tracks[0].youtubeId,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      iv_load_policy: 3,
    },
    events: {
      onReady: () => {
        setTransportReady(true);
        updateMeta({ instantBg: true });
        applyVolumeToPlayer();
        updateVolumeUI();
        if (resumeSeekSec > 3) {
          try {
            ytPlayer.seekTo(resumeSeekSec, true);
          } catch {
            /* ignore */
          }
          resumeSeekSec = 0;
        }
        if (pendingPlay) {
          pendingPlay = false;
          loadCurrent({ autoplay: true });
        }
      },
      onError: (event) => {
        const code = event?.data;
        const embedBlocked = code === 101 || code === 150 || code === 153;
        const missing = code === 100 || code === 2;
        dropCurrentTrack({
          autoplay: true,
          reason: embedBlocked
            ? "Track blocks embedding — skipping"
            : missing
              ? "Track unavailable — skipping"
              : "Couldn’t play — skipping",
        });
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.PLAYING) {
          setPlayingUI(true);
          startProgress();
        }
        if (event.data === YT.PlayerState.PAUSED) {
          setPlayingUI(false);
          stopProgress();
          syncProgress();
          saveResume(true);
        }
        if (event.data === YT.PlayerState.ENDED) {
          setPlayingUI(false);
          stopProgress();
          playNext({ fromEnded: true });
        }
      },
    },
  });
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function loadYouTubeApi() {
  if (window.location.protocol === "file:") {
    showToast("Open via http://localhost:5173 — file:// can’t play YouTube");
  } else if (window.location.hostname === "127.0.0.1") {
    showToast("Use http://localhost:5173 (not 127.0.0.1) for songs");
  }
  if (window.YT && window.YT.Player) {
    onYouTubeIframeAPIReady();
    return;
  }
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

el.play.addEventListener("click", togglePlay);
el.prev.addEventListener("click", () => playPrev());
el.next.addEventListener("click", () => playNext());
el.shuffleBtn?.addEventListener("click", toggleShuffle);
el.repeatBtn?.addEventListener("click", cycleRepeat);
el.queueToggle.addEventListener("click", () => setQueueOpen(!queueOpen));
el.playlistActive?.addEventListener("click", () => setQueueOpen(!queueOpen));
el.queueClose?.addEventListener("click", () => setQueueOpen(false));
el.queueBackdrop?.addEventListener("click", () => setQueueOpen(false));

document.addEventListener("pointerdown", (e) => {
  if (!queueOpen) return;
  const target = e.target;
  if (!(target instanceof Node)) return;
  if (el.queue?.contains(target)) return;
  if (el.queueToggle?.contains(target)) return;
  if (el.playlistActive?.contains(target)) return;
  if (el.queueBackdrop === target) return; // handled by its own click
  setQueueOpen(false);
});
el.favBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const track = tracks[index];
  if (track) toggleFavorite(track.id);
});
el.shareBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  shareApp();
});
el.helpBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  toggleKeysheet();
});
el.keysheetClose?.addEventListener("click", () => setKeysheetOpen(false));
el.keysheet?.addEventListener("click", (e) => {
  if (e.target === el.keysheet) setKeysheetOpen(false);
});
el.tabAll?.addEventListener("click", () => setQueueFilter("all"));
el.tabLiked?.addEventListener("click", () => setQueueFilter("liked"));
el.queueArtists.forEach((btn) => {
  btn.addEventListener("click", () => {
    setArtistFilter(btn.dataset.artist || "", { play: false });
  });
});
el.queueSearch?.addEventListener("input", () => {
  queueQuery = el.queueSearch.value || "";
  buildQueue();
});
el.queueList?.addEventListener("click", (e) => {
  const fav = e.target.closest("[data-fav]");
  if (fav) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(Number(fav.dataset.fav));
    return;
  }
  const item = e.target.closest(".queue__item");
  if (item?.dataset.id) {
    playTrackById(Number(item.dataset.id), { autoplay: true });
    setQueueOpen(false);
  }
});
el.moreLike?.addEventListener("click", () => moreLikeThis());
el.pairBtn?.addEventListener("click", () => {
  const open = el.pairSheet?.hidden !== false;
  setPairSheetOpen(open);
});
el.pairClose?.addEventListener("click", () => setPairSheetOpen(false));
el.pairBackdrop?.addEventListener("click", () => setPairSheetOpen(false));
el.pairList?.addEventListener("click", (e) => {
  const btn = e.target.closest(".pair-device");
  if (btn?.dataset.device) pairWithDevice(btn.dataset.device);
});
el.muteBtn?.addEventListener("click", toggleMute);
el.volume?.addEventListener("input", () => setVolumeLevel(el.volume.value));

el.seek.addEventListener("pointerdown", () => {
  seeking = true;
});
el.seek.addEventListener("pointerup", () => {
  seeking = false;
  if (!ready || !ytPlayer) return;
  const duration = ytPlayer.getDuration?.() || 0;
  if (duration > 0) {
    ytPlayer.seekTo((Number(el.seek.value) / 100) * duration, true);
    saveResume(true);
  }
});
el.seek.addEventListener("input", () => {
  setSeekProgress(el.seek.value);
  if (!ready || !ytPlayer) return;
  const duration = ytPlayer.getDuration?.() || 0;
  if (duration > 0) {
    el.timeCurrent.textContent = formatTime((Number(el.seek.value) / 100) * duration);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.target.matches("input, textarea, [contenteditable]")) return;
  const key = e.key.toLowerCase();

  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    seekBy(-5);
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    seekBy(5);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    nudgeVolume(5);
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    nudgeVolume(-5);
  } else if (key === "m") {
    toggleMute();
  } else if (key === "f") {
    const track = tracks[index];
    if (track) toggleFavorite(track.id);
  } else if (key === "s") {
    shareApp();
  } else if (key === "n") {
    playNext();
  } else if (key === "p") {
    playPrev();
  } else if (key === "h") {
    toggleShuffle();
  } else if (key === "r") {
    cycleRepeat();
  } else if (key === "q") {
    setQueueOpen(!queueOpen);
  } else if (key === "b") {
    runPairSequence();
  } else if (e.key === "?" || (e.key === "/" && e.shiftKey)) {
    e.preventDefault();
    toggleKeysheet();
  } else if (e.key === "Escape") {
    if (!el.keysheet.hidden) setKeysheetOpen(false);
    else if (el.pairSheet && !el.pairSheet.hidden) setPairSheetOpen(false);
    else if (queueOpen) setQueueOpen(false);
  }
});

window.addEventListener("pagehide", () => saveResume(true));

(function setupLogoParallax() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let raf = 0;
  let targetX = 0;
  let targetY = 0;
  let curX = 0;
  let curY = 0;

  const tick = () => {
    curX += (targetX - curX) * 0.08;
    curY += (targetY - curY) * 0.08;
    hero.style.setProperty("--logo-tilt-x", `${curX.toFixed(2)}deg`);
    hero.style.setProperty("--logo-tilt-y", `${curY.toFixed(2)}deg`);
    raf = requestAnimationFrame(tick);
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetY = nx * 7;
      targetX = -ny * 5;
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: true }
  );

  window.addEventListener(
    "pointerleave",
    () => {
      targetX = 0;
      targetY = 0;
    },
    { passive: true }
  );
})();

el.quoteText.style.transition = "opacity 0.25s ease";
BG_IMAGES.forEach(preloadBg);
applyDeepLinkOrResume();
if (index >= tracks.length) index = 0;
if (shuffleOn) rebuildShuffleBag();
updateShuffleUI();
updateRepeatUI();
updateArtistUI();
updatePlaylistCountUI();
updateVolumeUI();
updateFavUI();
buildQueue();
updateClock();
setInterval(updateClock, 1000);
showTrackQuote(true);
startQuotes();
updateMeta({ instantBg: true, instantQuote: true });
setTransportReady(false);
loadYouTubeApi();
