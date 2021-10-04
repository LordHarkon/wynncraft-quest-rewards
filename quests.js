const quests = {
  "Enzan's Brother": [
    { quantity: "100", item: "Experience Points" },
    { quantity: "1", item: "First Steps" },
  ],
  "King's Recruit": [
    { quantity: "35", item: "Experience Points" },
    { quantity: "6", item: "Emeralds" },
    { quantity: "1", item: "Ragni Teleport Scroll" },
    { quantity: 1, item: "Access to the Province of Wynn" },
  ],
  "Poisoning the Pest": [
    { quantity: "140", item: "Experience Points" },
    { quantity: "25", item: "Emeralds" },
    { quantity: 1, item: "Access to Farmer Cevalus's Farm" },
  ],
  "Cook Assistant": [
    { quantity: "200", item: "Experience Points" },
    { quantity: "28", item: "Emeralds" },
    { quantity: "1", item: "Royal Cake Slice" },
    { quantity: "1", item: "Waist Apron" },
  ],
  "Infested Plants": [
    { quantity: "270", item: "Experience Points" },
    { quantity: "5", item: "Emeralds" },
    { quantity: "1", item: "Cleaned Saccharum" },
  ],
  "The Sewers of Ragni": [
    { quantity: "350", item: "Experience Points" },
    { quantity: "1", item: "Thoracic" },
    { quantity: "1", item: "Decrepit Sewers Dungeon Key" },
    { quantity: 1, item: "Access to the Decrepit Sewers Dungeon" },
  ],
  "Tunnel Trouble": [
    { quantity: "300", item: "Experience Points" },
    { quantity: "55", item: "Emeralds" },
    {
      quantity: 1,
      item: "Access to fast travel between Ragni and Detlas.",
    },
  ],
  Underwater: [
    { quantity: "550", item: "Experience Points" },
    { quantity: "32", item: "Emeralds" },
    { quantity: "50", item: "Fishing Experience Points" },
    { quantity: "1", item: "Breathing Helmet" },
    { quantity: "1", item: "Treasure Boots" },
    { quantity: "1", item: "Gathering Rod T1" },
  ],
  "Mushroom Man": [
    { quantity: "1000", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: "1", item: "Yahya's Stained Bowl" },
  ],
  "Elemental Exercise": [
    { quantity: "850", item: "Experience Points" },
    { quantity: "64", item: "Emeralds" },
    { quantity: 1, item: "Ragon's Bracelet" },
    { quantity: "1", item: "Vibrant Augment" },
  ],
  "Potion Making": [
    { quantity: "1600", item: "Experience Points" },
    { quantity: 1, item: "Essren's Coat" },
    { quantity: "1", item: "Weakening Catalyst" },
  ],
  "Stable Story": [
    { quantity: "900", item: "Experience Points" },
    { quantity: "1", item: "Brown Horse" },
    { quantity: 1, item: "Access to Ternaves's Horse Shop" },
  ],
  "Arachnids' Ascent": [
    { quantity: "850", item: "Experience Points" },
    { quantity: "1", item: "Infested Pit Key" },
    { quantity: 1, item: "Access to the Infested Pit dungeon" },
    { quantity: 1, item: "Access to the Infested Pit fast travel" },
  ],
  "Creeper Infiltration": [
    { quantity: "1400", item: "Experience Points" },
    { quantity: "64", item: "Emeralds" },
    { quantity: "1", item: "Creeper Mask" },
  ],
  "Maltics Well": [
    { quantity: "2000", item: "Experience Points" },
    { quantity: "1", item: "Maltic Recommendation Letter" },
  ],
  "Lava Springs": [
    { quantity: "4000", item: "Experience Points" },
    { quantity: "192", item: "Emeralds" },
    { quantity: 1, item: "Access to Bremminglar's Healer Shop" },
  ],
  "Grave Digger": [
    { quantity: "3300", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: "1", item: "Sayleros' Brother's Ashes" },
    { quantity: 1, item: "Access to the Saint's Row Graveyard" },
  ],
  "Studying the Corrupt": [
    { quantity: "3600", item: "Experience Points" },
    { quantity: "1", item: "Lost Sanctuary Dungeon Key" },
    { quantity: 1, item: "Access to the Lost Sanctuary Dungeon" },
  ],
  "Macabre Masquerade Hallowynn 2014": [
    { quantity: "10000", item: "Experience Points" },
    { quantity: "192", item: "Emeralds" },
  ],
  "Pit of the Dead": [
    { quantity: "2675", item: "Experience Points" },
    { quantity: 1, item: "Skeletal Legs" },
  ],
  "Cluck Cluck": [
    { quantity: "2800", item: "Experience Points" },
    { quantity: 1, item: "Cluckles' Favourite Feather" },
  ],
  "The Dark Descent": [
    { quantity: "2400", item: "Experience Points" },
    { quantity: 1, item: "Dark Diadem" },
    { quantity: 1, item: "Underworld Crypt Dungeon Key" },
    { quantity: 1, item: "Access to the Underworld Crypt Dungeon" },
  ],
  "Dwelling Walls": [
    { quantity: "3650", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
  ],
  "Recover the Past": [
    { quantity: "7000", item: "Experience Points" },
    { quantity: "1024", item: "Emeralds" },
    { quantity: "1", item: "Shattered Memory Shard" },
    { quantity: "1", item: "Skill Reset Scroll" },
  ],
  "Tempo Town Trouble": [
    { quantity: "5650", item: "Experience Points" },
    { quantity: "1", item: "Time Fragment" },
    { quantity: 1, item: "Access to Time Valley's Time Trouble bosses" },
  ],
  "The Corrupted Village": [
    { quantity: "4800", item: "Experience Points" },
    { quantity: "136", item: "Emeralds" },
    { quantity: 1, item: "Corrupted Potato" },
  ],
  "Lost Tower": [
    { quantity: "6500", item: "Experience Points" },
    { quantity: "64", item: "Emeralds" },
  ],
  "Deja Vu": [
    { quantity: "5500", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: "1", item: "Familiar Essence" },
  ],
  "Misadventure on the Sea": [
    { quantity: "8500", item: "Experience Points" },
    { quantity: 1, item: "Free Seaskipper travel to Selchar" },
    { quantity: 1, item: "Various ingredients and emeralds" },
  ],
  "Craftmas Chaos": [
    { quantity: "12000", item: "Experience Points" },
    { quantity: "640", item: "Emeralds" },
  ],
  "The Mercenary": [
    { quantity: "11000", item: "Experience Points" },
    { quantity: "384", item: "Emeralds" },
    { quantity: 1, item: "Vindicator" },
  ],
  "Green Gloop": [
    { quantity: "9500", item: "Experience Points" },
    { quantity: "192", item: "Emeralds" },
    { quantity: 1, item: "Access to the Glassblowing Merchant" },
  ],
  "A Sandy Scandal": [
    { quantity: "22000", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: 1, item: "Access to the Almuj Bank" },
  ],
  "Kingdom of Sand": [
    { quantity: "10000", item: "Experience Points" },
    { quantity: "192", item: "Emeralds" },
    { quantity: "1", item: "Sand-Swept Tomb Key" },
    { quantity: 1, item: "Access to the Sand-Swept Tomb dungeon" },
  ],
  "Meaningful Holiday": [
    { quantity: "15000", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
  ],
  "WynnExcavation Site A": [
    { quantity: "15000", item: "Experience Points" },
    { quantity: "1", item: "Yellow Crystals" },
  ],
  "Tribal Aggression": [
    { quantity: "24000", item: "Experience Points" },
    { quantity: "42", item: "Gold Bars" },
  ],
  "Wrath of the Mummy": [
    { quantity: "16600", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: "1", item: "Mummy's Rag" },
    { quantity: "1", item: "The Mummy's Bandage" },
  ],
  "Canyon Condor": [
    { quantity: "21000", item: "Experience Points" },
    { quantity: "640", item: "Emeralds" },
    { quantity: 1, item: "Access to Rymek elevators" },
  ],
  "Pirate's Trove": [
    { quantity: "26000", item: "Experience Points" },
    { quantity: "150", item: "Emeralds" },
  ],
  "Tower of Ascension": [
    { quantity: "925000", item: "Max (see Tips) Experience Points" },
    { quantity: "32768", item: "Emeralds" },
    { quantity: 1, item: "Champion Armour" },
  ],
  "Ice Nations": [
    { quantity: "25000", item: "Experience Points" },
    { quantity: "256", item: "Emeralds" },
    { quantity: "1", item: "Climbing Helmet" },
    { quantity: 1, item: "Access to the Dujgon Blacksmith" },
  ],
  "Heart of Llevigar": [
    { quantity: "24500", item: "Experience Points" },
    { quantity: "224", item: "Emeralds" },
    { quantity: 1, item: "Generator Amulet" },
  ],
  "Clearing the Camps": [
    { quantity: "23000", item: "Experience Points" },
    { quantity: "320", item: "Emeralds" },
  ],
  "Star Thief": [
    { quantity: "40000", item: "Experience Points" },
    { quantity: "256", item: "Emeralds" },
  ],
  "Fate of the Fallen": [
    { quantity: "20000", item: "Experience Points" },
    { quantity: "1", item: "Avalanche" },
    { quantity: "1", item: "Ice Barrows Dungeon Key" },
    { quantity: 1, item: "Access to the Ice Barrows Dungeon" },
  ],
  Underice: [
    { quantity: "34000", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: 1, item: "Gernald's Amulet / Calamaro's Token" },
  ],
  "Blazing Retribution": [
    { quantity: "38000", item: "Experience Points" },
    { quantity: "512", item: "Emeralds" },
    { quantity: 1, item: "Hide of Gregg'r" },
  ],
  "Bob's Lost Soul": [
    { quantity: "55000", item: "Experience Points" },
    { quantity: 1, item: "Bob's Battle Chestplate" },
    { quantity: 1, item: "Access to Bob's Tomb" },
    { quantity: 1, item: "Bob's Crushed Soul" },
  ],
  "WynnExcavation Site B": [
    { quantity: "50000", item: "Experience Points" },
    { quantity: "1536", item: "Emeralds" },
    { quantity: "1", item: "Purple Crystal Shard" },
  ],
  "Frost Bite": [
    { quantity: "61000", item: "Experience Points" },
    { quantity: "640", item: "Emeralds" },
    { quantity: "1", item: "Glaciate" },
  ],
  "An Iron Heart Part I": [
    { quantity: "42000", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: 1, item: "Mechanical Reactor" },
  ],
  "Rise of the Quartron": [
    { quantity: "75000", item: "Experience Points" },
    { quantity: "1408", item: "Emeralds" },
    { quantity: "1800", item: "Mining Experience Points" },
    { quantity: 1, item: "Quartron's Eye" },
    { quantity: 1, item: "Acess to Karoc Mine Annex" },
  ],
  "The House of Twain": [
    { quantity: "45000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
  ],
  "A Grave Mistake": [
    { quantity: "66666", item: "Experience Points" },
    { quantity: "640", item: "Emeralds" },
  ],
  "The Maiden Tower": [
    { quantity: "77500", item: "Experience Points" },
    { quantity: "640", item: "Emeralds" },
  ],
  "Corrupted Betrayal": [
    { quantity: "87725", item: "Experience Points" },
    { quantity: "1024", item: "Emeralds" },
    { quantity: "1", item: "Undergrowth Ruins Dungeon Key" },
    { quantity: 1, item: "Access to the Undergrowth Ruins Dungeon" },
  ],
  "Crop Failure": [
    { quantity: "57500", item: "Experience Points" },
    { quantity: "640", item: "Emeralds" },
    { quantity: "5", item: "T3 Oat Strings and Grains" },
    { quantity: "2500", item: "Farming Experience Points" },
  ],
  "Jungle Fever": [
    { quantity: "86250", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
    { quantity: "1", item: "Undergrowth Ruins Key" },
  ],
  "Master Piece": [
    { quantity: "85000", item: "Experience Points" },
    { quantity: 1, item: "Caissop's Master Piece" },
  ],
  "Death Whistle": [
    { quantity: "95000", item: "Experience Points" },
    { quantity: "1", item: "Death Whistle Leaf" },
    { quantity: "3", item: "Cyclone Blue Leaves" },
    { quantity: "3", item: "Pink Pelulite" },
    { quantity: "5", item: "Pink Pelute" },
  ],
  "Realm of Light I - The Worm Holes": [
    { quantity: "100000", item: "Experience Points" },
    { quantity: "768", item: "Emeralds" },
    { quantity: 1, item: "Access to Nest of the Grootslangs" },
    { quantity: "6", item: "Az Runes" },
    { quantity: 1, item: "Access to Mastery Tomes" },
  ],
  "The Shadow of the Beast": [
    { quantity: "100000", item: "Experience Points" },
    { quantity: "128", item: "Emeralds" },
    { quantity: "3200", item: "Fishing Experience Points" },
    { quantity: "3200", item: "Mining Experience Points" },
    { quantity: "3200", item: "Woodcutting Experience Points" },
    { quantity: "1", item: "Crushed Bigfoot Bone" },
  ],
  "Zhight Island": [
    { quantity: "95000", item: "Experience Points" },
    { quantity: 1, item: "Access to Zhight Grand Exchange" },
    { quantity: 1, item: "Access to Zhight Treasure Tour" },
    { quantity: "16", item: "Zhight Money" },
  ],
  "WynnExcavation Site C": [
    { quantity: "150000", item: "Experience Points" },
    { quantity: 1, item: "Red Crystal Shard" },
  ],
  "The Passage": [
    { quantity: "140000", item: "Experience Points" },
    { quantity: "256", item: "Emeralds" },
    { quantity: 1, item: "Access to The Passage" },
  ],
  "An Iron Heart Part II": [
    { quantity: "160000", item: "Experience Points" },
    { quantity: "512", item: "/ 768 Emeralds" },
    { quantity: 1, item: "Greaves of Honor / Shameful Greaves" },
  ],
  "The Order of the Grook": [
    { quantity: "242500", item: "Experience Points" },
    { quantity: 1, item: "access to The Nexus" },
    {
      quantity: 1,
      item: "Draoi Fair /Dragon's Eye Bracelet /Renda Langit",
    },
  ],
  "Beneath the Depths": [
    { quantity: "185000", item: "Experience Points" },
    { quantity: "1", item: "Emeralds" },
    { quantity: "1", item: "Abysso Galoshes" },
    { quantity: "1", item: "Galleon's Graveyard Key" },
  ],
  "Redbeard's Booty": [
    { quantity: "180000", item: "Experience Points" },
    { quantity: "1", item: "Galleon's Graveyard Key" },
    { quantity: "1", item: "Golden Pirate Fish" },
  ],
  "Reclaiming the House": [
    { quantity: "250000", item: "Experience Points" },
    { quantity: "1024", item: "Emeralds" },
  ],
  "Realm of Light II - Taproot": [
    { quantity: "275000", item: "Experience Points" },
    { quantity: "1600", item: "Emeralds" },
    { quantity: 1, item: "Photon" },
  ],
  "Lost in the Jungle": [
    { quantity: "225000", item: "Experience Points" },
    { quantity: "3", item: "Jungle Jet Shards" },
    { quantity: 1, item: "Access to Gracen's house" },
  ],
  "Out of My Mind": [
    { quantity: "300000", item: "Experience Points" },
    { quantity: "1024", item: "Emeralds" },
    { quantity: 1, item: "Troms Kid Badge" },
  ],
  "Realm of Light III - A Headless History": [
    { quantity: "385000", item: "Experience Points" },
    { quantity: 1, item: "Cloak of Luminosity" },
  ],
  "Lost Royalty": [
    { quantity: "290000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
  ],
  "Lost Soles": [
    { quantity: "352000", item: "Experience Points" },
    { quantity: "1152", item: "Emeralds" },
    { quantity: 1, item: "Sodeta Boots" },
  ],
  "Memory Paranoia": [
    { quantity: "375000", item: "Experience Points" },
    { quantity: "1536", item: "Emeralds" },
    { quantity: 1, item: "Ring of Generosity" },
  ],
  "From the Mountains": [
    { quantity: "390000", item: "Experience Points" },
    { quantity: 1, item: "Fire Wire" },
  ],
  "Temple of the Legends": [
    { quantity: "550000", item: "Experience Points" },
    { quantity: 1, item: "Access to the Temple of the Legends" },
    { quantity: "1", item: "Purified Helmet of the Legends" },
    { quantity: 1, item: "Unlocked Tome Slot" },
  ],
  "Grand Youth": [
    { quantity: "425000", item: "Experience Points" },
    { quantity: "1024", item: "Emeralds" },
  ],
  "Lazarus Pit": [
    { quantity: "500000", item: "Experience Points" },
    { quantity: "1024", item: "Emeralds" },
    { quantity: 1, item: "Lazarus' Brace" },
  ],
  "Haven Antiquity": [
    { quantity: "300000", item: "Experience Points" },
    { quantity: "1408", item: "Emeralds" },
  ],
  "Shattered Minds": [
    { quantity: "300000", item: "Experience Points" },
    { quantity: "2560", item: "Emeralds" },
    { quantity: 1, item: "Psychomend Vest" },
  ],
  "WynnExcavation Site D": [
    { quantity: "600000", item: "Experience Points" },
    { quantity: "16384", item: "Emeralds" },
    { quantity: "1", item: "Royal Token of Gratitude" },
  ],
  "Realm of Light IV - Finding the Light": [
    { quantity: "675000", item: "Experience Points" },
    { quantity: 1, item: "Clearsight Spectacles" },
    { quantity: 1, item: "Access to Light Portal" },
  ],
  "Lexdale Witch Trials": [
    { quantity: "650000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
  ],
  "Forbidden Prison": [{ quantity: "740000", item: "Experience Points" }],
  "Murder Mystery": [
    { quantity: "350000", item: "Experience Points" },
    { quantity: "3072", item: "Emeralds" },
    { quantity: "1", item: "Detective's Ring" },
  ],
  "Troubled Tribesmen": [
    { quantity: "500000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
    {
      quantity: 1,
      item: "Access to the Dernel Tribe Shop in Entamis Village",
    },
  ],
  Reincarnation: [
    { quantity: "750000", item: "Experience Points" },
    { quantity: "1", item: "Corrupted Treasure" },
  ],
  "Acquiring Credentials": [
    { quantity: "300000", item: "Experience Points" },
    { quantity: "768", item: "Emeralds" },
    { quantity: "1", item: "Gavellian Passport" },
    { quantity: 1, item: "Access to the Letvus Elevator" },
  ],
  "Aldorei's Secret Part I": [
    { quantity: "512500", item: "Experience Points" },
    { quantity: "0", item: "/ 8192 Emeralds" },
    { quantity: 1, item: "Elven Medallion / Receipt" },
    { quantity: 1, item: "Access to Aldorei Town" },
  ],
  "Flight in Distress": [
    { quantity: "750000", item: "Experience Points" },
    { quantity: 1, item: "Ring of Rubies" },
    {
      quantity: 1,
      item: "Access to fast travel between Cinfras and Detlas",
    },
  ],
  "The Ultimate Weapon": [
    { quantity: "450000", item: "Experience Points" },
    { quantity: "1", item: "Dodegar's Ultimate Weapon" },
  ],
  "Aldorei's Secret Part II": [
    { quantity: "450000", item: "Experience Points" },
    { quantity: "10240", item: "/ 0 Emeralds" },
    { quantity: 1, item: "Kaerynn's Armour / Elves' Disappointment" },
  ],
  "The Bigger Picture": [
    { quantity: "500000", item: "Experience Points" },
    { quantity: "1920", item: "Emeralds" },
    { quantity: 1, item: "Gnome's Ring" },
    { quantity: 1, item: "Giant's Ring" },
  ],
  "Purple and Blue": [
    { quantity: "500000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
    { quantity: 1, item: "Restored Ancient Helmet" },
  ],
  "The Hunger of Gerts Part 1": [
    { quantity: "675000", item: "Experience Points" },
    { quantity: "4864", item: "Emeralds" },
  ],
  "The Hunger of Gerts Part 2": [
    { quantity: "730000", item: "Experience Points" },
    { quantity: 1, item: "Gerten Ritual Mask" },
  ],
  "Realm of Light V - The Realm of Light": [
    { quantity: "1300000", item: "Experience Points" },
    { quantity: 1, item: "Double Vision" },
    { quantity: 1, item: "Access to Orphion's Nexus of Light" },
  ],
  "Fallen Delivery": [
    { quantity: "1300000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
    { quantity: 1, item: "Access to Cinfras Scroll Merchant" },
  ],
  "General's Orders": [
    { quantity: "1300000", item: "Experience Points" },
    { quantity: 1, item: "Changeling's Chestplate" },
  ],
  "The Qira Hive": [
    { quantity: "6250000", item: "Max (see Tips) Experience Points" },
    { quantity: "1", item: "Master Voucher" },
  ],
  "???": [
    { quantity: "1400000", item: "Experience Points" },
    { quantity: "6144", item: "Emeralds" },
    { quantity: 1, item: "Altum Spatium" },
    { quantity: 1, item: "Cosmic Armour" },
  ],
  "From the Bottom": [
    { quantity: "700000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
    { quantity: "1", item: "Troll Hair" },
    { quantity: "32", item: "Platinum Ingots" },
  ],
  "The Thanos Vaults": [
    { quantity: "775000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
  ],
  "The Belly of the Beast": [
    { quantity: "1250000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
    { quantity: 1, item: "Dragon Hide Plate" },
  ],
  "A Marauder's Dues": [
    { quantity: "1375000", item: "Experience Points" },
    { quantity: "8192", item: "Emeralds" },
  ],
  "The Envoy Part I": [
    { quantity: "1750000", item: "Experience Points" },
    { quantity: "9152", item: "Emeralds" },
    { quantity: "1", item: "Maxie's House Key" },
    { quantity: 1, item: "Access to the C.S.S. Wavebreaker" },
  ],
  "The Canyon Guides": [
    { quantity: "1450000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
  ],
  "The Canary Calls": [
    { quantity: "1575000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
  ],
  "The Lost": [
    { quantity: "1575000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
    { quantity: 1, item: "Canyon Chart" },
  ],
  Cowfusion: [
    { quantity: "2300000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
    { quantity: 1, item: "Veekhat's Udders" },
    { quantity: 1, item: "Veekhat's Horns" },
  ],
  "Desperate Metal": [
    { quantity: "1580000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
    { quantity: 1, item: "Mech Core" },
  ],
  "Mixed Feelings": [
    { quantity: "1750000", item: "Experience Points" },
    { quantity: "2048", item: "Emeralds" },
  ],
  "Beyond the Grave": [
    { quantity: "2100000", item: "Experience Points" },
    { quantity: "8192", item: "Emeralds" },
    { quantity: 1, item: "Raging Wind" },
  ],
  "The Hidden City": [
    { quantity: "2700000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
    {
      quantity: 1,
      item: "Access to fast travel between Thesead and Eltom",
    },
  ],
  "Enter the Dojo": [
    { quantity: "2900000", item: "Experience Points" },
    { quantity: 1, item: "Master's Gi" },
  ],
  "The Envoy Part II": [
    { quantity: "3050000", item: "Experience Points" },
    { quantity: 1, item: "Electro Mage's Boots" },
    { quantity: "1", item: "Fallen Factory Key" },
    {
      quantity: 1,
      item: "Access to the hot air balloon fast travel between Corkus City and Kandon-Beda",
    },
    { quantity: 1, item: "Access to the Fallen Factory Dungeon" },
  ],
  "Fantastic Voyage": [
    { quantity: "3100000", item: "Experience Points" },
    { quantity: "6144", item: "Emeralds" },
    { quantity: 1, item: "Pendant of Prosperity" },
  ],
  "Dwarves and Doguns Part I": [
    { quantity: "3300000", item: "Experience Points" },
    { quantity: "1", item: "Dogun Badge of Trust" },
    { quantity: 1, item: "Access to the Molten Heights elevators" },
  ],
  "The Feathers Fly Part I": [
    { quantity: "2900000", item: "Experience Points" },
    { quantity: "20", item: "Bipedal Springs" },
    { quantity: "3", item: "Golden Avia Feathers" },
  ],
  "Dwarves and Doguns Part II": [
    { quantity: "3500000", item: "Experience Points" },
    { quantity: "1", item: "Letter to Korzim" },
    { quantity: 1, item: "Access to the Thanos-Rodoroc trading tunnel" },
  ],
  "Dwarves and Doguns Part III": [
    { quantity: "4000000", item: "Experience Points" },
    { quantity: 1, item: "Staff of True Ice" },
    { quantity: 1, item: "Amulet of Fire Resistance" },
    { quantity: 1, item: "Access to the Maex Resource Mine" },
  ],
  "The Feathers Fly Part II": [
    { quantity: "3300000", item: "Experience Points" },
    { quantity: "12288", item: "Emeralds" },
    { quantity: "16", item: "Bipedal Springs" },
    { quantity: "8", item: "Speed Surge" },
    { quantity: "3", item: "Corkian Amplifier I" },
    { quantity: 1, item: "Access to The Workshop" },
  ],
  "Dwarves and Doguns Part IV": [
    { quantity: "6000000", item: "Experience Points" },
    { quantity: "20480", item: "Emeralds" },
    { quantity: 1, item: "Access to the Ingredient shop in Maex" },
  ],
  "One Thousand Meters Under": [
    { quantity: "5500000", item: "Experience Points" },
    { quantity: "8192", item: "Emeralds" },
    { quantity: 1, item: "Access to The Void elevators" },
    { quantity: 1, item: "Ominous Wind" },
  ],
  "Recipe For Disaster": [
    { quantity: "4200000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
    { quantity: 1, item: "Chef Hamsey's Apron (Brie)" },
    { quantity: 1, item: "Smoldering Apron (Kale)" },
    { quantity: 1, item: "Sky Chef's Apron (Frank)" },
    { quantity: 1, item: "Access to Juggler's fast travel to Ahmsord" },
  ],
  "The Fortuneteller": [
    { quantity: "3900000", item: "Experience Points" },
    { quantity: 1, item: "Wealth or Knowledge" },
  ],
  "Royal Trials": [
    { quantity: "7270000", item: "Experience Points" },
    { quantity: "4096", item: "Emeralds" },
    { quantity: 1, item: "The Queen's Headpiece" },
  ],
  "The Hero of Gavel": [
    { quantity: "5500000", item: "Experience Points" },
    { quantity: "20480", item: "Emeralds" },
  ],
  "A Journey Beyond": [
    { quantity: "6000000", item: "Experience Points" },
    { quantity: "12288", item: "Emeralds" },
  ],
  "The Olmic Rune": [
    { quantity: "5800000", item: "Experience Points" },
    { quantity: 1, item: "Access to Tol Altar" },
  ],
  "A Journey Further": [
    { quantity: "7500000", item: "Experience Points" },
    { quantity: "20480", item: "Emeralds" },
    { quantity: 1, item: "Access to the Eldritch Outlook Dungeon" },
  ],
  "Point of No Return": [
    { quantity: "7000000", item: "Experience Points" },
    { quantity: "8192", item: "Emeralds" },
  ],
  "A Hunter's Calling": [
    { quantity: "10008000", item: "Experience Points" },
    { quantity: "1", item: "Corrupted Soul Token" },
    { quantity: 1, item: "Hunted Mode" },
  ],
};
