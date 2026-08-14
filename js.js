const items = [
    // OP.GG-data hamnar här
    {
        "name": "Doran's Blade",
        "cost": 475,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771055_dorans_blade.png",
        "description": "80 Health 10 Attack Damage Passive: Basic Attacks restore 5 Health On-Hit."
    },
    {
        "name": "Doran's Ring",
        "cost": 400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771056_dorans_ring.png",
        "description": "60 Health 15 Ability Power 3 Mana Regen per 5 seconds Passive: Restores 4 Mana upon killing a unit."
    },
    {
        "name": "Doran's Shield",
        "cost": 440,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771054_dorans_shield.png",
        "description": "100 Health 10 Health Regen per 5 seconds Shieldwall: Blocks 8 damage from champion Basic Attacks."
    },
    {
        "name": "Red Trinket",
        "cost": 0,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3364_class_t1_oracleslens.png",
        "description": "Active s Reveals enemy wards in the area for 8 seconds."
    },
    {
        "name": "Yellow Trinket",
        "cost": 0,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3340_class_t1_wardingtotem.png",
        "description": "Active s Places an Invisible Stealth Ward that grants vision for 60 seconds."
    },
    {
        "name": "AD Rune Replacer",
        "cost": 0,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/2140_class_t0_elixirofwrath.png",
        "description": "36 Health 12.69 Armor 12.06 Magic Resist 17% Attack Speed 9.55 Attack Damage"
    },
    {
        "name": "AP Rune Replacer",
        "cost": 0,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772139_class_t1_elixirofsorcery.png",
        "description": "30 Health 17.69 Armor 12.06 Magic Resist 22 Ability Power"
    },
    {
        "name": "Crystalline Flask",
        "cost": 345,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772041_crystalline_flask.png",
        "description": "Replenishment: Holds 3 charges and refills upon visiting the shop. Active Consumes a charge to restore 120 Health and 60 Mana over 12 seconds."
    },
    {
        "name": "Elixir of Agility",
        "cost": 250,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/2038_potion_of_elusiveness.project_jade.png",
        "description": "Click to Consume: Grants Attack Speed and 15% Critical Strike Chance for 180 seconds."
    },
    {
        "name": "Elixir of Brilliance",
        "cost": 250,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/2039_potion_of_brilliance.project_jade.png",
        "description": "Click to Consume: Grants Ability Power and 10% Cooldown Reduction for 180 seconds."
    },
    {
        "name": "Elixir of Fortitude",
        "cost": 350,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/2037_potion_of_giant_strength.project_jade.png",
        "description": "Click to Consume: Grants Health and 15 Attack Damage for 180 seconds."
    },
    {
        "name": "Health Potion",
        "cost": 35,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772003_health_potion.png",
        "description": "Click to Consume: Restores 150 Health over 15 seconds. Limited to 5 at one time."
    },
    {
        "name": "Health Potion",
        "cost": 35,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772003_health_potion.png",
        "description": "Click to Consume: Restores 150 Health over 15 seconds."
    },
    {
        "name": "Mana Potion",
        "cost": 35,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772004_mana_potion.png",
        "description": "Click to Consume: Restores 100 Mana over 15 seconds."
    },
    {
        "name": "Oracle's Elixir",
        "cost": 400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/2026_arcane_protection_potion.project_jade.png",
        "description": "Click to Consume: Grants detection of nearby invisible units for up to 4 minutes. Revealing a ward in this manner grants a portion of the gold reward for killing that unit."
    },
    {
        "name": "Ruby Sightstone",
        "cost": 1700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/2049_ruby_ward.project_jade.png",
        "description": "380 Health Ward Refresh: Holds 5 charges and refills upon visiting the shop. Active Consumes a charge to place an invisible ward that reveals the surrounding area for 3 minutes (maximum 3 wards placed from this item at once)."
    },
    {
        "name": "Sight Ward",
        "cost": 75,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772044_sight_ward.png",
        "description": "Click to Consume: Places an invisible ward that reveals the surrounding area for 3 minutes."
    },
    {
        "name": "Sightstone",
        "cost": 800,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772049_sightstone.png",
        "description": "180 Health Ward Refresh: Holds 3 charges and refills upon visiting the shop. Active Consumes a charge to place an invisible ward that reveals the surrounding area for 3 minutes (maximum 2 wards placed from this item at once)."
    },
    {
        "name": "Vision Ward",
        "cost": 125,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772043_vision_ward.png",
        "description": "Click to Consume: Places an invisible ward that reveals the surrounding area and invisible units in the area for 3 minutes. Revealing a ward in this manner grants a portion of the gold reward when that unit is killed."
    },
    {
        "name": "Amplifying Tome",
        "cost": 435,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771052_amplifying_tome.png",
        "description": "20 Ability Power"
    },
    {
        "name": "B. F. Sword",
        "cost": 1550,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771038_bf_sword.png",
        "description": "45 Attack Damage"
    },
    {
        "name": "Blasting Wand",
        "cost": 860,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771026_blasting_wand.png",
        "description": "40 Ability Power"
    },
    {
        "name": "Brawler's Gloves",
        "cost": 400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771051_brawlers_gloves.png",
        "description": "8% Critical Strike Chance"
    },
    {
        "name": "Chain Vest",
        "cost": 720,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/1031_base_t2_chainvest.png",
        "description": "40 Armor"
    },
    {
        "name": "Cloak of Agility",
        "cost": 730,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771018_cloak_of_agility.png",
        "description": "15% Critical Strike Chance"
    },
    {
        "name": "Cloth Armor",
        "cost": 300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771029_cloth_armor.png",
        "description": "15 Armor"
    },
    {
        "name": "Dagger",
        "cost": 400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/1042_dagger_jade.png",
        "description": "12% Attack Speed"
    },
    {
        "name": "Faerie Charm",
        "cost": 180,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771004_faerie_charm.png",
        "description": "3 Mana Regen per 5 seconds"
    },
    {
        "name": "Giant's Belt",
        "cost": 1000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771011_giants_belt.png",
        "description": "380 Health"
    },
    {
        "name": "Hunter's Machete",
        "cost": 300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771040_hunters_machete.png",
        "description": "Passive: Basic Attacks deal 10 magic damage to monsters On-Hit. Butcher: Damage dealt to monsters increased by 10%."
    },
    {
        "name": "Long Sword",
        "cost": 400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771036_long_sword.png",
        "description": "10 Attack Damage"
    },
    {
        "name": "Needlessly Large Rod",
        "cost": 1600,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771058_needlessly_large_rod.png",
        "description": "80 Ability Power"
    },
    {
        "name": "Negatron Cloak",
        "cost": 720,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771057_negatron_cloak.png",
        "description": "40 Magic Resist"
    },
    {
        "name": "Null-Magic Mantle",
        "cost": 400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771033_null_magic_mantle.png",
        "description": "20 Magic Resist"
    },
    {
        "name": "Pickaxe",
        "cost": 875,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771037_pickaxe.png",
        "description": "25 Attack Damage"
    },
    {
        "name": "Recurve Bow",
        "cost": 900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771044_recurve_bow.png",
        "description": "30% Attack Speed"
    },
    {
        "name": "Rejuvenation Bead",
        "cost": 180,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771006_rejuvenation_bead.png",
        "description": "5 Health Regen per 5 seconds"
    },
    {
        "name": "Ruby Crystal",
        "cost": 475,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771028_ruby_crystal.png",
        "description": "180 Health"
    },
    {
        "name": "Sapphire Crystal",
        "cost": 400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771027_sapphire_crystal.png",
        "description": "200 Mana \"Some say that Sapphire was the original source of classical magic.\""
    },
    {
        "name": "Berserker's Greaves",
        "cost": 900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3006_berserkers_greaves_jade.png",
        "description": "20% Attack Speed Enhanced Movement: 45 Move Speed"
    },
    {
        "name": "Boots of Mobility",
        "cost": 1000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773117_boots_of_mobility.png",
        "description": "Enhanced Movement: 45 Move Speed . Increases to 105 Move Speed when out of combat for 5 seconds."
    },
    {
        "name": "Boots of Speed",
        "cost": 325,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/1001_boots_of_speed_jade.png",
        "description": "Limited to 1. Enhanced Movement: 25 Move Speed"
    },
    {
        "name": "Boots of Swiftness",
        "cost": 1000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3009_boots_of_teleportation.project_jade.png",
        "description": "Enhanced Movement: 60 Move Speed Slow Resist: Movement slowing effects are reduced by 25% ."
    },
    {
        "name": "Ionian Boots of Lucidity",
        "cost": 1000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773158_ionian_boots_of_lucidity.png",
        "description": "Light Step: 15% Cooldown Reduction Enhanced Movement: 45 Move Speed \"This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.\""
    },
    {
        "name": "Mercury's Treads",
        "cost": 1200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3008_boots_of_swiftness.project_jade.png",
        "description": "25 Magic Resist Enhanced Movement: 45 Move Speed Tenacity: Reduces the duration of Stuns, Slows, Taunts, Fears, Silences, Blinds, and Immobilizes by 35% ."
    },
    {
        "name": "Ninja Tabi",
        "cost": 1000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773047_ninja_tabi.png",
        "description": "25 Armor Ninja Footwork: Blocks 10% of the damage from Basic Attacks. Enhanced Movement: 45 Move Speed"
    },
    {
        "name": "Sorcerer's Shoes",
        "cost": 1100,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773020_sorcerers_shoes.png",
        "description": "15 Magic Penetration Enhanced Movement: 45 Move Speed"
    },
    {
        "name": "Aegis of the Legion",
        "cost": 2150,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/034_steel_shield.project_jade.png",
        "description": "250 Health 20 Armor 20 Magic Resist Aura - Legion: Grants nearby allies 10 Armor and 15 Magic Resist . This effect is increased by 50% on allied minions."
    },
    {
        "name": "Archangel's Staff",
        "cost": 2700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773003_archangels_staff.png",
        "description": "250 Mana 60 Ability Power 10 Mana Regen per 5 seconds Insight: Grants Ability Power equal to 3% of maximum Mana . Mana Charge: Grants +8 maximum Mana (max 750 Mana ) for each spell cast and Mana expenditure (occurs up to 2 times every 4 seconds). Transforms into Seraph's Embrace at +750 Mana."
    },
    {
        "name": "Avarice Blade",
        "cost": 800,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773093_avarice_blade.png",
        "description": "10% Critical Strike Chance Avarice: 3 Gold per 10 seconds Greed: Grants 2 Gold upon killing a unit."
    },
    {
        "name": "Bilgewater Cutlass",
        "cost": 1400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/jade/3144_bilgewater_cutlass.png",
        "description": "25 Attack Damage 12% Life Steal Active 90s Deals 100 magic damage and Slows the target champion's Move Speed by 25% for 2 seconds."
    },
    {
        "name": "Catalyst the Protector",
        "cost": 1200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3010_catalyst_the_protector.project_jade.png",
        "description": "200 Health 300 Mana Contemplation: Upon leveling up, restores 150 Health and 200 Mana over 8 seconds."
    },
    {
        "name": "Chalice of Harmony",
        "cost": 880,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773028_chalice_of_harmony.png",
        "description": "25 Magic Resist 7 Mana Regen per 5 seconds Mana Font: Increases Mana Regen by 1% per 1% of missing Mana ."
    },
    {
        "name": "Emblem of Valor",
        "cost": 650,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773052_emblem_of_valor.png",
        "description": "20 Armor Aura - Valor: Grants nearby allied champions 7 Health Regen per 5 seconds."
    },
    {
        "name": "Fiendish Codex",
        "cost": 820,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773108_fiendish_codex.png",
        "description": "30 Ability Power Fiendish Recall: 10% Cooldown Reduction"
    },
    {
        "name": "Glacial Shroud",
        "cost": 1350,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773024_glacial_shroud.png",
        "description": "45 Armor 300 Mana Coolheaded: 10% Cooldown Reduction"
    },
    {
        "name": "Haunting Guise",
        "cost": 1485,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3014_doppleganker.project_jade.png",
        "description": "25 Ability Power 200 Health Eyes of Pain: 15 Magic Penetration"
    },
    {
        "name": "Heart of Gold",
        "cost": 825,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3051_renewal_tunic.project_jade.png",
        "description": "200 Health Shelling Out: 5 Gold per 10 seconds."
    },
    {
        "name": "Hexdrinker",
        "cost": 1350,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3155_hexdrinker.project_jade.png",
        "description": "25 Attack Damage 25 Magic Resist Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a Shield that absorbs 250 magic damage for 5 seconds (90 second cooldown)."
    },
    {
        "name": "Hextech Revolver",
        "cost": 1200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773145_hextech_revolver.png",
        "description": "40 Ability Power Hex Bullets: 12% Spell Vamp"
    },
    {
        "name": "Kindlegem",
        "cost": 850,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773067_kindlegem.png",
        "description": "200 Health Kindlespark: 10% Cooldown Reduction"
    },
    {
        "name": "Lucky Pick",
        "cost": 765,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773098_kages_lucky_pick.png",
        "description": "25 Ability Power Lucky Shadow: 4 Gold per 10 seconds"
    },
    {
        "name": "Madred's Razors",
        "cost": 700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/139_strygwyrs_reaver.project_jade.png",
        "description": "25 Armor Passive: Basic Attacks have a 25% chance to deal 300 bonus magic damage to minions and monsters On-Hit."
    },
    {
        "name": "Mana Manipulator",
        "cost": 300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3037_mana_manipulator.project_jade.png",
        "description": "Aura - Mana Warp: Grants nearby allied champions 5 Mana Regen per 5 seconds."
    },
    {
        "name": "Phage",
        "cost": 1250,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773044_phage.png",
        "description": "200 Health 20 Attack Damage Rage: Basic Attacks grant 20 Move Speed for 2 seconds On-Hit. Kills grant 60 Move Speed for 2 seconds."
    },
    {
        "name": "Philosopher's Stone",
        "cost": 700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773096_philosophers_stone.png",
        "description": "7 Health Regen per 5 seconds 9 Mana Regen per 5 seconds Transmute: 5 Gold per 10 seconds."
    },
    {
        "name": "Quicksilver Sash",
        "cost": 1550,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/1008_sash_of_valor.project_jade.png",
        "description": "45 Magic Resist Active 90s Removes all debuffs."
    },
    {
        "name": "Seeker's Armguard",
        "cost": 1160,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772420_seekers_armguard.png",
        "description": "30 Armor 20 Ability Power Seeker's Insight: Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times."
    },
    {
        "name": "Sheen",
        "cost": 1200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773057_sheen.png",
        "description": "200 Mana 25 Ability Power Spellblade: After using an ability, the next Basic Attack deals bonus physical damage equal to base Attack Damage On-Hit (2 second cooldown)."
    },
    {
        "name": "Spectre's Cowl",
        "cost": 1400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773211_spectrescowl.project_jade.png",
        "description": "200 Health 45 Magic Resist Shadow Mending: Grants 3 Health Regen per 5 seconds for up to 10 seconds after taking damage from an enemy champion."
    },
    {
        "name": "Spirit Stone",
        "cost": 700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771108_spiritstone.png",
        "description": "14 Health Regen per 5 seconds 7 Mana Regen per 5 seconds Passive: Basic Attacks deal 10 magic damage to monsters On-Hit. Butcher: Damage dealt to monsters increased by 20%."
    },
    {
        "name": "Stinger",
        "cost": 1250,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/stinger_item.png",
        "description": "40% Attack Speed Light as a Feather: 10% Cooldown Reduction"
    },
    {
        "name": "Tear of the Goddess",
        "cost": 700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773070_tear_of_the_goddess.png",
        "description": "250 Mana 7 Mana Regen per 5 seconds Mana Charge: Grants 4 maximum Mana (max 750 Mana ) for each spell cast and Mana expenditure (occurs up to 2 times every 4 seconds)."
    },
    {
        "name": "The Brutalizer",
        "cost": 1337,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/772020_the_brutalizer.png",
        "description": "25 Attack Damage Onslaught: 10% Cooldown Reduction Crushing Blow: 10 Lethality"
    },
    {
        "name": "Tiamat",
        "cost": 1900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3077_tiamat.project_jade.png",
        "description": "40 Attack Damage 15 Health Regen per 5 seconds Cleave: Basic Attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target On-Hit (enemies closest to the target take the most damage). Active 10s Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage)."
    },
    {
        "name": "Vampiric Scepter",
        "cost": 800,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/1053_vampiric_scepter_jade.png",
        "description": "10 Attack Damage 10% Life Steal"
    },
    {
        "name": "Warden's Mail",
        "cost": 1000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773082_wardens_mail.png",
        "description": "50 Armor Cold Steel: When hit by Basic Attacks, reduces the attacker's Attack Speed by 15% for 1 second."
    },
    {
        "name": "Zeal",
        "cost": 1175,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773086_zeal.png",
        "description": "18% Attack Speed 10% Critical Strike Chance 5% Move Speed"
    },
    {
        "name": "Abyssal Scepter",
        "cost": 2560,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3001_abyssal_scepter.project_jade.png",
        "description": "70 Ability Power 45 Magic Resist Aura - Despair: Reduces the Magic Resist of nearby enemies by 20"
    },
    {
        "name": "Ardent Censer",
        "cost": 2200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3504_enchanter_t3_ardentcenser.png",
        "description": "40 Ability Power 10% Cooldown Reduction 10 Mana Regen per 5 seconds Dedication: 8% Move Speed Fervent Vapor: Your Heals and Shields on another unit grant them 25% attack speed for 6 seconds. This does not include regeneration effects or effects on yourself."
    },
    {
        "name": "Atma's Impaler",
        "cost": 2300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3005_atmas_impaler.project_jade.png",
        "description": "45 Armor 15% Critical Strike Chance Impact: Grants bonus Attack Damage equal to 1.5% of Maximum Health ."
    },
    {
        "name": "Banner of Command",
        "cost": 2360,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3060_banner_of_command.project_jade.png",
        "description": "40 Ability Power 30 Armor 10% Cooldown Reduction Aura - Leadership: Grants nearby allies 10 Health Regen per 5 seconds. Nearby allied minions deal 15% increased damage. Active 180s Empowers a nearby siege or super minion with an additional Health , 40 Armor , 50% Attack Speed , and 75 Attack Range and grants all gold the unit earns."
    },
    {
        "name": "Banshee's Veil",
        "cost": 2750,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773102_bansheesveil.png",
        "description": "450 Health 55 Magic Resist Intangibility: Grants a Spell Shield that blocks the next enemy ability. This Shield refreshes after no damage is taken from enemy champions for 25 seconds. Shadow Mending: Grants 9 Health Regen per 5 for up to 10 seconds after taking damage from an enemy champion or when the Spell Shield breaks."
    },
    {
        "name": "Blade of The Ruined King",
        "cost": 3200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3153_blade_of_the_ruined_king.project_jade.png",
        "description": "25 Attack Damage 40% Attack Speed 15% Life Steal Ruination: Basic Attacks deal 5% of the target's current Health as bonus physical damage On-Hit. (Max 60 to Minions and Monsters) Active 90s Deals 15% max health to target champion (Min 100 Damage) and steals 30% of their Move Speed for 3 seconds."
    },
    {
        "name": "Deathfire Grasp",
        "cost": 3100,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/autoatlas/largeicons/3128_deathfire_grasp.png",
        "description": "120 Ability Power 10% Cooldown Reduction Active 60s Deals 15% of target champion's maximum Health in magic damage and increases all subsequent magic damage taken by the target by 20% for 4 seconds."
    },
    {
        "name": "Eleisa's Miracle",
        "cost": 1100,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3173_eleisas_miracle.project_jade.png",
        "description": "10 Health Regen per 5 seconds 15 Mana Regen per 5 seconds Aid: Heal, Clairvoyance and Clarity summoner spell cooldowns are reduced by 25%. Eleisa's Blessing: Upon gaining 3 levels with this item, all effects of this item become permanent, and this item is consumed."
    },
    {
        "name": "Executioner's Calling",
        "cost": 1900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773123_executioners_calling.png",
        "description": "25 Attack Damage 20% Critical Strike Chance Rending Strike: Basic Attacks inflict Grievous Wounds on enemy champions for 1.5 seconds On-Hit. ( Grievous Wounds reduces incoming healing and regeneration effects by 50%.)"
    },
    {
        "name": "Force of Nature",
        "cost": 2610,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/124_gladiators_pride.project_jade.png",
        "description": "76 Magic Resist 8% Move Speed 20 Health Regen per 5 seconds Steadfast : Regenerate an additional health per 5 seconds."
    },
    {
        "name": "Frozen Heart",
        "cost": 2900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/122_frozen_heart.project_jade.png",
        "description": "95 Armor 400 Mana 20% Cooldown Reduction Aura - Frostbite: Reduces the Attack Speed of nearby enemies by 20%."
    },
    {
        "name": "Frozen Mallet",
        "cost": 3300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771039_frozen_mallet.png",
        "description": "700 Health 30 Attack Damage Icy: Basic Attacks Slow the target's Move Speed for 1.5 seconds On-Hit (40% Slow for Melee Attacks, 30% Slow for Ranged Attacks). \"We brought it back just for you.\""
    },
    {
        "name": "Guardian Angel",
        "cost": 2750,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3026_guardian_angel.project_jade.png",
        "description": "50 Armor 40 Magic Resist Guardian's Intervention: Upon taking lethal damage, restores 30% of maximum Health and Mana after 4 seconds of stasis (5 minute cooldown)."
    },
    {
        "name": "Guinsoo's Rageblade",
        "cost": 2600,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/jade/3064_spike_the_ripper.png",
        "description": "30 Attack Damage 40 Ability Power Growing Fury: Basic Attacks (on attack) and spell casts grant 4% Attack Speed and 4 Ability Power for 8 seconds (stacks up to 8 times). Enrage: Falling below 50% Health grants 20% Attack Speed , 10% Life Steal , and 10% Spell Vamp until out of combat (30 second cooldown)."
    },
    {
        "name": "Hextech Gunblade",
        "cost": 3400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/jade/3146_hextech_gunblade.png",
        "description": "65 Ability Power 45 Attack Damage 12% Life Steal Hex Cannon: 20% Spell Vamp Reload: Basic Attacks (On-Hit) and single-target spells against champions reduce the cooldown of this item by 3 seconds. Active 60s Deals magic damage and Slows the target champion's Move Speed by 40% for 2 seconds."
    },
    {
        "name": "Iceborn Gauntlet",
        "cost": 3250,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3025_frozen_fist.project_jade.png",
        "description": "30 Ability Power 500 Mana 70 Armor 10% Cooldown Reduction Spellblade of True Ice: After using an ability, the next Basic Attack (On-Hit) deals bonus physical damage equal to 125% of base Attack Damage to enemies near the target, and creates a field around the target for 2 seconds that Slows enemy Move Speed by 30% (2 second cooldown, half-sized field if ranged)."
    },
    {
        "name": "Infinity Edge",
        "cost": 3800,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773031_infinity_edge.png",
        "description": "70 Attack Damage 25% Critical Strike Chance Infinite Precision: Critical strikes deal 250% damage instead of 200%."
    },
    {
        "name": "Innervating Locket",
        "cost": 2650,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773084_innervating_locket.project_jade.png",
        "description": "430 Health 450 Mana Innervation : Restore 50 Health and 20 Mana over 2 seconds to the lowest-Health nearby allied Champion whenever you use an Ability. Innervation has a 3 second cooldown."
    },
    {
        "name": "Ionic Spark",
        "cost": 1950,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3178_ionicspark.project_jade.png",
        "description": "50% Attack Speed 250 Health Ionic Charge: Every 4th Basic Attack unleases a chain of lightning, dealing 125 magic damage to up to 4 targets in a 400 radius of each other. Targets cannot be hit twice by the same lightning."
    },
    {
        "name": "Last Whisper",
        "cost": 2300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773035_last_whisper.png",
        "description": "40 Attack Damage Piercing Volley: You ignore 35% of your opponent's armor."
    },
    {
        "name": "Leviathan",
        "cost": 1275,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3138_leviathan.project_jade.png",
        "description": "180 Health Juggernaut: Grants 32 Health per stack. Grants 2 stacks for a kill or 1 stack for an assist (maximum 20 stacks). A third of the stacks are lost upon death. At 20 stacks, reduces all damage taken by 15%."
    },
    {
        "name": "Liandry's Torment",
        "cost": 2900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3151_liandrys_lament.project_jade.png",
        "description": "50 Ability Power 300 Health Eyes of Pain: 15 Magic Penetration Mana Burn: Dealing spell damage applies a damage-over-time effect for 3 seconds that deals bonus magic damage equal to 2% of the target's current Health per second . This bonus damage is doubled against movement-impaired units and capped at 100 damage per second vs. monsters."
    },
    {
        "name": "Lich Bane",
        "cost": 3000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773100_lichbane.png",
        "description": "80 Ability Power 250 Mana 5% Move Speed Spellblade of The Arcane: After using an ability, the next Basic Attack deals bonus magic damage On-Hit (2 second cooldown)."
    },
    {
        "name": "Locket of the Iron Solari",
        "cost": 2225,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3190_crest_of_the_iron_solari.project_jade.png",
        "description": "300 Health 35 Armor Solari Resilience: Grants nearby allied champions 15 Health Regen per 5 seconds. Active 60s Grants a Shield to nearby allies for 5 seconds that absorbs up to damage."
    },
    {
        "name": "Madred's Bloodrazor",
        "cost": 3800,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3126_madreds_bloodrazor.project_jade.png",
        "description": "40 Attack Damage 40% Attack Speed 25 Armor Seeing Red : Attacks deal 4% of the target's maximum Health as bonus magic damage on-hit. Deals a maximum of 120 bonus damage to monsters."
    },
    {
        "name": "Malady",
        "cost": 2035,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3114_malady.project_jade.png",
        "description": "25 Ability Power 45% Attack Speed Cursed Blade: Basic Attacks deal bonus magic damage On-Hit and remove 4 Magic Resist from the target for 8 seconds (stacks up to 7 times)."
    },
    {
        "name": "Manamune",
        "cost": 2100,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3004_manamune.project_jade.png",
        "description": "250 Mana 20 Attack Damage 7 Mana Regen per 5 seconds Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. Mana Charge: Grants 4 maximum Mana (max 750 Mana) for each Basic Attack, spell cast, and Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Muramana at 750 Mana ."
    },
    {
        "name": "Maw of Malmortius",
        "cost": 3200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3156_phaseblade.project_jade.png",
        "description": "60 Attack Damage 40 Magic Resist Feeding Frenzy: Grants 1 Attack Damage for every 2% of missing Health , up to a maximum of 35 Attack Damage . Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a Shield that absorbs 400 magic damage for 5 seconds (90 second cooldown)."
    },
    {
        "name": "Mejai's Soulstealer",
        "cost": 1235,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3041_mejais_soulstealer.project_jade.png",
        "description": "20 Ability Power Soul Capture: Grants 8 Ability Power per stack. Grants 2 stacks for a kill or 1 stack for an assist (max 20 stacks). A third of the stacks are lost upon death. At 20 stacks, grants 15% Cooldown Reduction."
    },
    {
        "name": "Mercurial Scimitar",
        "cost": 3700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3139_mercurial_scimitar.project_jade.png",
        "description": "60 Attack Damage 45 Magic Resist Active 90s Removes all debuffs, and if champion is melee, also grants 50% bonus Move Speed for 1 second."
    },
    {
        "name": "Mikael's Crucible",
        "cost": 2500,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3222_mikaels_crucible.project_jade.png",
        "description": "40 Magic Resist 7 Health Regen per 5 seconds 18 Mana Regen per 5 seconds Mana Font: Increases Mana Regen by 1% for every 1% of missing Mana. Active 180s Removes all Stuns, Slows, Taunts, Fears, Silences, Blinds, and Immobilizes on an allied champion and Heals that champion for 150 ( +10 of maximum Health )."
    },
    {
        "name": "Morellonomicon",
        "cost": 2200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3165_noxusnomicon.project_jade.png",
        "description": "75 Ability Power 12 Mana Regen per 5 seconds 20% Cooldown Reduction Morello's Hatred: Dealing magic damage to enemy champions below 40% Health inflicts Grievous Wounds for 4 seconds. ( Grievous Wounds reduces incoming healing and regeneration effects by 50%.)"
    },
    {
        "name": "Nashor's Tooth",
        "cost": 2500,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3115_nashors_tooth.project_jade.png",
        "description": "65 Ability Power 50% Attack Speed 20% Cooldown Reduction"
    },
    {
        "name": "Ohmwrecker",
        "cost": 2835,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3056_ohmwrecker.project_jade.png",
        "description": "350 Health 50 Ability Power 15 Health Regen per 5 seconds 15 Mana Regen per 5 seconds Active 120s Prevents nearby enemy turrets from attacking for 2.5 seconds. This effect cannot be used against the same turret more than once every 7.5 seconds."
    },
    {
        "name": "Phantom Dancer",
        "cost": 2800,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773046_phantom_dancer.png",
        "description": "50% Attack Speed 30% Critical Strike Chance 5% Move Speed Ghostly Waltz: Champion can move through units."
    },
    {
        "name": "Rabadon's Deathcap",
        "cost": 3300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773089_rabadons_deathcap.png",
        "description": "120 Ability Power Magical Opus: Increases Ability Power by 30% ."
    },
    {
        "name": "Randuin's Omen",
        "cost": 3125,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3143_randuins_omen.project_jade.png",
        "description": "500 Health 70 Armor Cold Steel: When hit by Basic Attacks, reduces the attacker's Attack Speed by 15% and Move Speed by 10% for 1 seconds. Active 60s Slows nearby enemy units by 35% for seconds."
    },
    {
        "name": "Ravenous Hydra",
        "cost": 3300,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3074_ravenous_hydra.project_jade.png",
        "description": "75 Attack Damage 12% Life Steal 15 Health Regen per 5 seconds Insatiable Hunger: Life Steal applies to damage dealt by this item. Cleave: Basic Attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target On-Hit (enemies closest to the target take the most damage). Active 10s Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage)."
    },
    {
        "name": "Rod of Ages",
        "cost": 2800,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3027_guinsoos_rod_of_oblivion.project_jade.png",
        "description": "450 Health 450 Mana 60 Ability Power Wisdom of Ages: Grants 20 Health , 20 Mana , and 2 Ability Power per stack (max 200 Health , 200 Mana , and 20 Ability Power ). Grants 1 stack per minute (max 10 stacks). Contemplation: Upon leveling up, restores 150 Health and 200 Mana over 8 seconds."
    },
    {
        "name": "Runaan's Hurricane",
        "cost": 2400,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3085_runaans_hurricane.project_jade.png",
        "description": "70% Attack Speed Hurricane Volley: When Attacking, bolts are fired at up to 2 enemies near the target, each dealing each dealing 10 ( 50% of Attack Damage ) physical damage. These bolts apply on-hit effects."
    },
    {
        "name": "Runic Bulwark",
        "cost": 2950,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3107_runic_bulwark.project_jade.png",
        "description": "300 Health 20 Armor 30 Magic Resist Aura - Legion: Grants nearby allies 10 Armor and 25 Magic Resist . This effect is increased by 50% on allied minions."
    },
    {
        "name": "Rylai's Crystal Scepter",
        "cost": 2900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3116_rylais_sceptre.project_jade.png",
        "description": "500 Health 80 Ability Power Frost Crystal: Dealing spell damage Slows the target's Move Speed by 35% for 1.5 seconds (15% for multi-target and damage-over-time spells)."
    },
    {
        "name": "Shard of True Ice",
        "cost": 1600,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3092_kages_last_breath.project_jade.png",
        "description": "45 Ability Power Lucky Shadow: 4 Gold per 10 seconds Mana Infusion: Grants nearby allied champions 5 Mana Regen per 5 seconds. Active 60s Surrounds an ally with a blizzard for 4 seconds that Slows nearby enemy Movement Speed by 30%."
    },
    {
        "name": "Shurelya's Reverie",
        "cost": 2100,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3069_shurelyas_firecrest.project_jade.png",
        "description": "250 Health 10 Health Regen per 5 seconds 10 Mana Regen per 5 seconds 10% Cooldown Reduction Active 60s Grants nearby allies 40% Move Speed for 3 seconds."
    },
    {
        "name": "Shushei's Mana Jug",
        "cost": 2600,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773174_athenesunholygrail.png",
        "description": "60 Ability Power 40 Magic Resist 20% Cooldown Reduction 15 Mana Regen per 5 seconds Rabble-Rousing: Restores Health and Mana on kill or assist. Mana Font: Increases Mana Regen by 1% for every 1% of missing Mana."
    },
    {
        "name": "Soul Shroud",
        "cost": 2285,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3063_soul_shroud.project_jade.png",
        "description": "520 Health Whispers of the Dead: Nearby allied Champions gain 10% Cooldown Reduction and 12 Mana Regen per 5 seconds."
    },
    {
        "name": "Spirit of the Ancient Golem",
        "cost": 2000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771110_spiritoftheancientgolem.png",
        "description": "500 Health 14 Health Regen per 5 seconds 7 Mana Regen per 5 seconds 10% Cooldown Reduction Butcher: Damage dealt to monsters increased by 30%. Tenacity: Reduces the duration of Stuns, Slows, Taunts, Fears, Silences, Blinds, and Immobilizes by 35%."
    },
    {
        "name": "Spirit of the Elder Lizard",
        "cost": 2000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771111_spiritoftheelderlizard.png",
        "description": "35 Attack Damage 14 Health Regen per 5 seconds 7 Mana Regen per 5 seconds 10% Cooldown Reduction Butcher: Damage dealt to monsters increased by 30%. Touch of Flame: Basic Attacks and spells that do not inflict damage-over-time deal bonus true damage over 3 seconds On-Hit."
    },
    {
        "name": "Spirit of the Spectral Wraith",
        "cost": 2000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/771112_spiritofthespectralwraith.png",
        "description": "40 Ability Power 10 Mana Regen per 5 seconds 10% Cooldown Reduction Wraith Touch: 20% Spell Vamp Haunting Memories: Reduces the cooldown of Smite by 20%. Butcher: Damage dealt to monsters increased by 30%."
    },
    {
        "name": "Spirit Visage",
        "cost": 2750,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3065_spirit_visage.project_jade.png",
        "description": "400 Health 55 Magic Resist 4 Health Regen per 5 seconds 20% Cooldown Reduction Lifeforce: Increases self-healing , Health Regen , Lifesteal , and Spell Vamp effects by 20%."
    },
    {
        "name": "Stack of Sunfire Capes",
        "cost": 3000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/jade/773073_stack_of_sunfire_capes.project_jade.png",
        "description": "450 Health 45 Armor Excessive Heat: Deals 40 magic damage per second to nearby enemies."
    },
    {
        "name": "Stark's Fervor",
        "cost": 2550,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3050_rallying_banner.project_jade.png",
        "description": "250 Health 20% Cooldown Reduction Aura - Triumph: Grants nearby allied champions 10% Life Steal and 20 Attack Damage ."
    },
    {
        "name": "Statikk Shiv",
        "cost": 2500,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/jade/3087_statikk_shiv.png",
        "description": "40% Attack Speed 20% Critical Strike Chance 6% Move Speed Statikk Shank: Grants Static Charges upon moving or Attacking. At 100 Charges, Attacking expends all Charges to deal 100 bonus magic damage to up to 4 targets On-Hit (this damage can critically strike)."
    },
    {
        "name": "Sunfire Cape",
        "cost": 2650,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773068_sunfire_cape.png",
        "description": "450 Health 45 Armor Searing Heat: Deals 40 magic damage per second to nearby enemies."
    },
    {
        "name": "Sword of the Divine",
        "cost": 2150,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3084_widowmaker.project_jade.png",
        "description": "45% Attack Speed. Forsaken: This item does not grant any Attack Speed while on cooldown. Champion kills reduce the current cooldown by 50%. Active 60s Grants 100% Attack Speed and 100% Critical Strike Chance for 3 seconds or 3 critical strikes."
    },
    {
        "name": "Sword of the Occult",
        "cost": 1200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3034_kenyus_kukri.project_jade.png",
        "description": "10 Attack Damage Demonic Pact: Grants 5 Attack Damage per stack. Grants 2 stacks for a kill or 1 stack for an assist (max 20 stacks). A third of the stacks are lost upon death. At 20 stacks, grants 15% bonus Move Speed ."
    },
    {
        "name": "The Black Cleaver",
        "cost": 3000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/jade/3071_the_black_cleaver.png",
        "description": "200 Health 50 Attack Damage 10% Cooldown Reduction Wicked Edge: 10 Lethality Cleaving Strike: Dealing physical damage to an enemy champion reduces their Armor by 5% for 4 seconds (stacks up to 5 times, up to 25%)."
    },
    {
        "name": "The Bloodthirster",
        "cost": 3200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773072_the_bloodthirster.png",
        "description": "70 Attack Damage 12% Life Steal Bloodthirst: Grants 1 Attack Damage and 0.2% Life Steal per stack (max 30 Attack Damage and 6% Life Steal ). Grants 1 stack per unit kill (max 30 stacks). Half of the stacks are lost upon death."
    },
    {
        "name": "Thornmail",
        "cost": 2200,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3075_thornmail.project_jade.png",
        "description": "100 Armor Enchanted Spikes: Upon being hit by a Basic Attack, returns 30% of the incoming damage (before being reduced by defenses) to the attacker as magic damage ."
    },
    {
        "name": "Trinity Force",
        "cost": 3628,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773078_trinity_force.png",
        "description": "30 Attack Damage 30 Ability Power 30% Attack Speed 10% Critical Strike Chance 8% Move Speed 250 Health 200 Mana Rage: Basic Attacks grant 20 Move Speed for 2 seconds On-Hit. Kills grant 60 Move Speed for 2 seconds. Spellblade of Tons of Damage: After using an ability, the next Basic Attack deals bonus physical damage equal to 200% of base Attack Damage On-Hit (2 second cooldown)."
    },
    {
        "name": "Twin Shadows",
        "cost": 1900,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3023_wraith_collar.project_jade.png",
        "description": "40 Ability Power 40 Magic Resist 6% Move Speed Active 120s Summons up to 2 invulnerable ghosts that seek out the two nearest enemy champions for 6 seconds. If a ghost reaches its target, it reveals the target and Slows their Move Speed by 40% for 2.5 seconds (120 second cooldown)."
    },
    {
        "name": "Void Staff",
        "cost": 2295,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773135_void_staff.png",
        "description": "70 Ability Power Touch of the Void: Magic damage ignores 35% of the target's Magic Resist ."
    },
    {
        "name": "Warmog's Armor",
        "cost": 3000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3083_warmog_the_living_armor.project_jade.png",
        "description": "920 Health 10 Health Regen per 5 seconds Passive: Permanently gain 3.5 Health and 0.1 Health Regen per 5 sec. per stack. 1 stack is gained per minion or monster kill and 10 stacks are gained per Takedown. Maximum bonuses: Health and Health Regen per 5 seconds."
    },
    {
        "name": "Will of the Ancients",
        "cost": 2550,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/2008_tome_of_combat_mastery.project_jade.png",
        "description": "50 Ability Power Aura - Tradition: Grants nearby allied champions 30 Ability Power and 20% Spellvamp ."
    },
    {
        "name": "Wit's End",
        "cost": 2150,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773091_wits_end.png",
        "description": "40% Attack Speed 25 Magic Resist Feedback Loop: Basic Attacks deal 42 bonus magic damage On-Hit and increase your Magic Resist by 5 for 5 seconds (stacks up to 4 times.)"
    },
    {
        "name": "Wriggle's Lantern",
        "cost": 2000,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3154_wrigglelantern.project_jade.png",
        "description": "25 Attack Damage 25 Armor 15% Life Steal Passive: Basic Attacks have a 25% chance to deal 500 bonus magic damage to minions and monsters On-Hit. Transforms into Feral Flare after earning 30 large Monsters kills or Champion takedowns. Active 180s Places an invisible Sight Ward that reveals the surrounding area for 180 seconds."
    },
    {
        "name": "Youmuu's Ghostblade",
        "cost": 2700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3142_youmus_spectral_blade.project_jade.png",
        "description": "30 Attack Damage 15% Critical Strike Chance 10% Cooldown Reduction Spirit Edge: 20 Lethality Active 45s Grants 20% Move Speed and 40% Attack Speed (lasts 6 seconds for melee champions, 4 seconds for ranged champions)."
    },
    {
        "name": "Zephyr",
        "cost": 2850,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3172_zephyr.project_jade.png",
        "description": "25 Attack Damage 50% Attack Speed 10% Move Speed 10% Cooldown Reduction Tenacity: Reduces the duration of Stuns, Slows, Taunts, Fears, Silences, Blinds, and Immobilizes by 35% ."
    },
    {
        "name": "Zhonya's Hourglass",
        "cost": 3260,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/773157_zhonyas_hourglass.png",
        "description": "120 Ability Power 50 Armor Active 90s Champion becomes Invulnerable and Untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time."
    },
    {
        "name": "Zz'Rot Portal",
        "cost": 2700,
        "image": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/items/icons2d/3512_zzrot_portal.png",
        "description": "50 Armor 50 Magic Resist 5 Health Regen per 5 seconds Point Runner: Grants +30% bonus Move Speed that builds up over 2 seconds when near turrets or void gates. Active 150s Spawns a gate at the target location for 150 seconds (Can't be placed near turrets). Every 4 seconds the gate spawns a volatile Voidspawn that travels down the nearest lane. After 4 seconds, a Voidspawn's health will rapidly decay to 0. The fourth Voidspawn and every Voidspawn thereafter will deal bonus damage equal to 50% of your resistances."
    }
];

// ==================================================
// ITEM BUILD PATHS - LEAGUE CLASSIC
// ==================================================

const itemBuilds = {

    // --------------------------------------------------
    // BOOTS
    // --------------------------------------------------

    "Berserker's Greaves": {
        buildsFrom: [
            "Boots of Speed",
            "Dagger"
        ]
    },

    "Boots of Swiftness": {
        buildsFrom: [
            "Boots of Speed"
        ]
    },

    "Sorcerer's Shoes": {
        buildsFrom: [
            "Boots of Speed"
        ]
    },

    "Ninja Tabi": {
        buildsFrom: [
            "Boots of Speed",
            "Cloth Armor"
        ]
    },

    "Mercury's Treads": {
        buildsFrom: [
            "Boots of Speed",
            "Null-Magic Mantle"
        ]
    },

    "Boots of Mobility": {
        buildsFrom: [
            "Boots of Speed"
        ]
    },

    "Ionian Boots of Lucidity": {
        buildsFrom: [
            "Boots of Speed"
        ]
    },


    // --------------------------------------------------
    // BASIC / EARLY ITEMS
    // --------------------------------------------------

    "Vampiric Scepter": {
        buildsFrom: [
            "Long Sword"
        ]
    },

    "Spirit Stone": {
        buildsFrom: [
            "Hunter's Machete",
            "Rejuvenation Bead",
            "Faerie Charm"
        ]
    },

    "Ruby Sightstone": {
        buildsFrom: [
            "Sightstone",
            "Heart of Gold"
        ]
    },

    "Sightstone": {
        buildsFrom: [
            "Ruby Crystal"
        ]
    },

    "Madred's Razors": {
        buildsFrom: [
            "Hunter's Machete",
            "Cloth Armor"
        ]
    },

    "Heart of Gold": {
        buildsFrom: [
            "Ruby Crystal"
        ]
    },

    "Kindlegem": {
        buildsFrom: [
            "Ruby Crystal"
        ]
    },

    "Emblem of Valor": {
        buildsFrom: [
            "Cloth Armor",
            "Rejuvenation Bead"
        ]
    },

    "Fiendish Codex": {
        buildsFrom: [
            "Amplifying Tome"
        ]
    },

    "The Brutalizer": {
        buildsFrom: [
            "Long Sword",
            "Long Sword"
        ]
    },

    "Avarice Blade": {
        buildsFrom: [
            "Brawler's Gloves"
        ]
    },

    "Philosopher's Stone": {
        buildsFrom: [
            "Faerie Charm",
            "Rejuvenation Bead"
        ]
    },

    "Lucky Pick": {
        buildsFrom: [
            "Amplifying Tome"
        ]
    },

    "Stinger": {
        buildsFrom: [
            "Dagger",
            "Dagger"
        ]
    },

    "Warden's Mail": {
        buildsFrom: [
            "Cloth Armor",
            "Cloth Armor"
        ]
    },

    "Seeker's Armguard": {
        buildsFrom: [
            "Cloth Armor",
            "Amplifying Tome",
            "Cloth Armor"
        ]
    },

    "Quicksilver Sash": {
        buildsFrom: [
            "Negatron Cloak"
        ]
    },

    "Hexdrinker": {
        buildsFrom: [
            "Long Sword",
            "Null-Magic Mantle"
        ]
    },


    // --------------------------------------------------
    // AP ITEMS
    // --------------------------------------------------

    "Abyssal Scepter": {
        buildsFrom: [
            "Blasting Wand",
            "Negatron Cloak"
        ]
    },

    "Archangel's Staff": {
        buildsFrom: [
            "Tear of the Goddess",
            "Blasting Wand"
        ]
    },

    "Catalyst the Protector": {
        buildsFrom: [
            "Ruby Crystal",
            "Sapphire Crystal"
        ]
    },

    "Rod of Ages": {
        buildsFrom: [
            "Catalyst the Protector",
            "Blasting Wand"
        ]
    },

    "Chalice of Harmony": {
        buildsFrom: [
            "Faerie Charm",
            "Null-Magic Mantle",
            "Faerie Charm"
        ]
    },

    "Mejai's Soulstealer": {
        buildsFrom: [
            "Amplifying Tome"
        ]
    },

    "Rabadon's Deathcap": {
        buildsFrom: [
            "Needlessly Large Rod",
            "Blasting Wand"
        ]
    },

    "Deathfire Grasp": {
        buildsFrom: [
            "Needlessly Large Rod",
            "Fiendish Codex"
        ]
    },

    "Void Staff": {
        buildsFrom: [
            "Blasting Wand",
            "Amplifying Tome"
        ]
    },

    "Haunting Guise": {
        buildsFrom: [
            "Ruby Crystal",
            "Amplifying Tome"
        ]
    },

    "Lich Bane": {
        buildsFrom: [
            "Sheen",
            "Blasting Wand"
        ]
    },

    "Banshee's Veil": {
        buildsFrom: [
            "Spectre's Cowl",
            "Ruby Crystal"
        ]
    },

    "Nashor's Tooth": {
        buildsFrom: [
            "Stinger",
            "Fiendish Codex"
        ]
    },

    "Rylai's Crystal Scepter": {
        buildsFrom: [
            "Blasting Wand",
            "Amplifying Tome",
            "Giant's Belt"
        ]
    },

    "Will of the Ancients": {
        buildsFrom: [
            "Lucky Pick",
            "Hextech Revolver"
        ]
    },

    "Liandry's Torment": {
        buildsFrom: [
            "Haunting Guise",
            "Amplifying Tome"
        ]
    },

    "Morellonomicon": {
        buildsFrom: [
            "Lucky Pick",
            "Faerie Charm",
            "Fiendish Codex"
        ]
    },

    "Shushei's Mana Jug": {
        buildsFrom: [
            "Fiendish Codex",
            "Chalice of Harmony"
        ]
    },

    "Spirit of the Spectral Wraith": {
        buildsFrom: [
            "Spirit Stone",
            "Hextech Revolver"
        ]
    },

    "Zhonya's Hourglass": {
        buildsFrom: [
            "Seeker's Armguard",
            "Needlessly Large Rod"
        ]
    },


    // --------------------------------------------------
    // AD ITEMS
    // --------------------------------------------------

    "Manamune": {
        buildsFrom: [
            "Tear of the Goddess",
            "Long Sword"
        ]
    },

    "Atma's Impaler": {
        buildsFrom: [
            "Chain Vest",
            "Avarice Blade"
        ]
    },

    "Last Whisper": {
        buildsFrom: [
            "Long Sword",
            "Pickaxe"
        ]
    },

    "Phage": {
        buildsFrom: [
            "Ruby Crystal",
            "Long Sword"
        ]
    },

    "The Black Cleaver": {
        buildsFrom: [
            "The Brutalizer",
            "Ruby Crystal"
        ]
    },

    "The Bloodthirster": {
        buildsFrom: [
            "B. F. Sword",
            "Vampiric Scepter"
        ]
    },

    "Ravenous Hydra": {
        buildsFrom: [
            "Tiamat",
            "Vampiric Scepter"
        ]
    },

    "Tiamat": {
        buildsFrom: [
            "Pickaxe",
            "Long Sword",
            "Rejuvenation Bead",
            "Rejuvenation Bead"
        ]
    },

    "The Brutalizer": {
        buildsFrom: [
            "Long Sword",
            "Long Sword"
        ]
    },

    "Youmuu's Ghostblade": {
        buildsFrom: [
            "Avarice Blade",
            "The Brutalizer"
        ]
    },

    "Sword of the Occult": {
        buildsFrom: [
            "Long Sword"
        ]
    },

    "Mercurial Scimitar": {
        buildsFrom: [
            "Quicksilver Sash",
            "B. F. Sword"
        ]
    },

    "Maw of Malmortius": {
        buildsFrom: [
            "Hexdrinker",
            "Pickaxe"
        ]
    },

    "Bilgewater Cutlass": {
        buildsFrom: [
            "Vampiric Scepter",
            "Long Sword"
        ]
    },

    "Hextech Revolver": {
        buildsFrom: [
            "Amplifying Tome",
            "Amplifying Tome"
        ]
    },

    "Hextech Gunblade": {
        buildsFrom: [
            "Hextech Revolver",
            "Bilgewater Cutlass"
        ]
    },

    "Blade of The Ruined King": {
        buildsFrom: [
            "Dagger",
            "Bilgewater Cutlass",
            "Dagger"
        ]
    },


    // --------------------------------------------------
    // ATTACK SPEED / CRIT
    // --------------------------------------------------

    "Infinity Edge": {
        buildsFrom: [
            "B. F. Sword",
            "Pickaxe",
            "Cloak of Agility"
        ]
    },
    "Zephyr": {
        buildsFrom: [
            "Stinger",
            "Pickaxe"
        ]
    },
    "Zeal": {
        buildsFrom: [
            "Brawler's Gloves",
            "Dagger"
        ]
    },

    "Phantom Dancer": {
        buildsFrom: [
            "Cloak of Agility",
            "Zeal",
            "Dagger"
        ]
    },

    "Statikk Shiv": {
        buildsFrom: [
            "Zeal",
            "Avarice Blade"
        ]
    },

    "Runaan's Hurricane": {
        buildsFrom: [
            "Dagger",
            "Recurve Bow",
            "Dagger"
        ]
    },

    "Ionic Spark": {
        buildsFrom: [
            "Recurve Bow",
            "Ruby Crystal"
        ]
    },

    "Malady": {
        buildsFrom: [
            "Dagger",
            "Dagger",
            "Amplifying Tome"
        ]
    },

    "Sword of the Divine": {
        buildsFrom: [
            "Recurve Bow",
            "Dagger"
        ]
    },

    "Guinsoo's Rageblade": {
        buildsFrom: [
            "Blasting Wand",
            "Pickaxe"
        ]
    },

    "Madred's Bloodrazor": {
        buildsFrom: [
            "Madred's Razors",
            "Pickaxe",
            "Recurve Bow"
        ]
    },

    "Wit's End": {
        buildsFrom: [
            "Recurve Bow",
            "Null-Magic Mantle"
        ]
    },


    // --------------------------------------------------
    // TRINITY / SHEEN ITEMS
    // --------------------------------------------------

    "Sheen": {
        buildsFrom: [
            "Amplifying Tome",
            "Sapphire Crystal"
        ]
    },

    "Trinity Force": {
        buildsFrom: [
            "Zeal",
            "Sheen",
            "Phage"
        ]
    },

    "Iceborn Gauntlet": {
        buildsFrom: [
            "Sheen",
            "Glacial Shroud"
        ]
    },


    // --------------------------------------------------
    // DEFENSIVE ITEMS
    // --------------------------------------------------

    "Frozen Mallet": {
        buildsFrom: [
            "Ruby Crystal",
            "Giant's Belt",
            "Pickaxe"
        ]
    },

    "Glacial Shroud": {
        buildsFrom: [
            "Chain Vest",
            "Sapphire Crystal"
        ]
    },

    "Guardian Angel": {
        buildsFrom: [
            "Negatron Cloak",
            "Chain Vest"
        ]
    },

    "Frozen Heart": {
        buildsFrom: [
            "Glacial Shroud",
            "Warden's Mail"
        ]
    },

    "Thornmail": {
        buildsFrom: [
            "Cloth Armor",
            "Chain Vest"
        ]
    },

    "Sunfire Cape": {
        buildsFrom: [
            "Chain Vest",
            "Giant's Belt"
        ]
    },

    "Stack of Sunfire Capes": {
        buildsFrom: [
            "Chain Vest",
            "Giant's Belt"
        ]
    },

    "Randuin's Omen": {
        buildsFrom: [
            "Heart of Gold",
            "Warden's Mail",
            "Cloth Armor"
        ]
    },

    "Warmog's Armor": {
        buildsFrom: [
            "Giant's Belt",
            "Heart of Gold",
            "Rejuvenation Bead"
        ]
    },

    "Force of Nature": {
        buildsFrom: [
            "Rejuvenation Bead",
            "Rejuvenation Bead",
            "Null-Magic Mantle",
            "Negatron Cloak"
        ]
    },

    "Spirit Visage": {
        buildsFrom: [
            "Spectre's Cowl",
            "Kindlegem"
        ]
    },

    "Spectre's Cowl": {
        buildsFrom: [
            "Ruby Crystal",
            "Negatron Cloak"
        ]
    },

    "Aegis of the Legion": {
        buildsFrom: [
            "Heart of Gold",
            "Cloth Armor",
            "Null-Magic Mantle"
        ]
    },

    "Runic Bulwark": {
        buildsFrom: [
            "Null-Magic Mantle",
            "Aegis of the Legion"
        ]
    },

    "Locket of the Iron Solari": {
        buildsFrom: [
            "Emblem of Valor",
            "Heart of Gold"
        ]
    },

    "Ohmwrecker": {
        buildsFrom: [
            "Ruby Crystal",
            "Philosopher's Stone",
            "Blasting Wand"
        ]
    },

    "Zz'Rot Portal": {
        buildsFrom: [
            "Negatron Cloak",
            "Chain Vest",
            "Rejuvenation Bead"
        ]
    },

    // --------------------------------------------------
    // SUPPORT ITEMS
    // --------------------------------------------------
    "Eleisa's Miracle": {
        buildsFrom: [
            "Philosopher's Stone"
        ]
    },
    "Leviathan": {
        buildsFrom: [
            "Ruby Crystal"
        ]
    },
    "Twin Shadows": {
        buildsFrom: [
            "Fiendish Codex",
            "Aether Wisp"
        ]
    },
    "Stark's Fervor": {
        buildsFrom: [
            "Kindlegem",
            "Vampiric Scepter"
        ]
    },
    "Innervating Locket": {
        buildsFrom: [
            "Catalyst the Protector",
            "Mana Manipulator"
        ]
    },
    "Mana Manipulator": {
        buildsFrom: [
            "Faerie Charm"
        ]
    },

    "Shurelya's Reverie": {
        buildsFrom: [
            "Kindlegem",
            "Philosopher's Stone"
        ]
    },

    "Soul Shroud": {
        buildsFrom: [
            "Mana Manipulator",
            "Kindlegem",
            "Ruby Crystal"
        ]
    },

    "Mikael's Crucible": {
        buildsFrom: [
            "Philosopher's Stone",
            "Chalice of Harmony"
        ]
    },

    "Ardent Censer": {
        buildsFrom: [
            "Faerie Charm",
            "Faerie Charm",
            "Faerie Charm",
            "Lucky Pick"
        ]
    },

    "Banner of Command": {
        buildsFrom: [
            "Fiendish Codex",
            "Emblem of Valor"
        ]
    },

    "Shard of True Ice": {
        buildsFrom: [
            "Lucky Pick",
            "Mana Manipulator"
        ]
    },


    // --------------------------------------------------
    // JUNGLE ITEMS
    // --------------------------------------------------

    "Spirit of the Ancient Golem": {
        buildsFrom: [
            "Spirit Stone",
            "Kindlegem"
        ]
    },

    "Spirit of the Elder Lizard": {
        buildsFrom: [
            "Spirit Stone",
            "Long Sword",
            "Long Sword"
        ]
    },

    "Wriggle's Lantern": {
        buildsFrom: [
            "Madred's Razors",
            "Vampiric Scepter"
        ]
    },


    // --------------------------------------------------
    // MANA ITEMS
    // --------------------------------------------------

    "Tear of the Goddess": {
        buildsFrom: [
            "Sapphire Crystal",
            "Faerie Charm"
        ]
    },

    "Seraph's Embrace": {
        buildsFrom: [
            "Archangel's Staff"
        ]
    },


    // --------------------------------------------------
    // OTHER
    // --------------------------------------------------

    "Executioner's Calling": {
        buildsFrom: [
            "Avarice Blade",
            "Long Sword"
        ]
    },

    "Liandry's Torment": {
        buildsFrom: [
            "Haunting Guise",
            "Amplifying Tome"
        ]
    },

    "Shushei's Mana Jug": {
        buildsFrom: [
            "Fiendish Codex",
            "Chalice of Harmony"
        ]
    },

    "Perfect Hex Core": {
        buildsFrom: [
            "Hex Core mk-2"
        ]
    },

    "Hex Core mk-2": {
        buildsFrom: [
            "Hex Core mk-1"
        ]
    },

    "Hex Core mk-1": {
        buildsFrom: [
            "Prototype Hex Core"
        ]
    }

};

// ==================================================
// SKAPA "BUILDS INTO" AUTOMATISKT
// ==================================================

// ==================================================
// SKAPA "BUILDS INTO" AUTOMATISKT
// ==================================================

const buildsInto = {};

Object.entries(itemBuilds).forEach(
    ([itemName, data]) => {

        data.buildsFrom.forEach(
            componentName => {

                if (!buildsInto[componentName]) {
                    buildsInto[componentName] = [];
                }


                // Lägg bara till itemet om det
                // inte redan finns i listan
                if (
                    !buildsInto[componentName]
                        .includes(itemName)
                ) {

                    buildsInto[componentName]
                        .push(itemName);

                }

            }
        );

    }
);

const itemsContainer = document.querySelector("#items");

// ==================================================
// VISA ALLA ITEMS
// ==================================================

items
    .sort((a, b) => {

        if (a.cost !== b.cost) {
            return a.cost - b.cost;
        }

        return a.name.localeCompare(b.name);

    })
    .forEach(item => {

    const itemElement = document.createElement("div");

    itemElement.classList.add("item");

   itemElement.innerHTML = `
    <div class="item-image-container">

        <img
            src="${item.image}"
            alt="${item.name}"
            class="item-image"
            draggable="true"
        >

        <span class="item-cost-overlay">
            ${item.cost}
        </span>

    </div>
`;

    const image = itemElement.querySelector(".item-image");


    // ----------------------------------------------
    // KLICKA PÅ ITEM → VISA INFORMATION
    // ----------------------------------------------

    image.addEventListener("click", () => {

        showItemInfo(item);

    });


    // ----------------------------------------------
    // DRA ITEM → SKICKA DATA TILL BUILD
    // ----------------------------------------------

    image.addEventListener("dragstart", event => {

        event.dataTransfer.setData(
            "text/plain",
            JSON.stringify({
                item: item,
                source: "item-list"
            })
        );

    });


    itemsContainer.appendChild(itemElement);

});

// ==================================================
// ITEM FILTER
// ==================================================

const filterCheckboxes = document.querySelectorAll("#filters input[type='checkbox']");
const itemSearch = document.querySelector("#item-search");
const statKeywords = {

    "Attack Damage": [
        ["Attack Damage"]
    ],

    "Critical Strike": [
        ["Critical Strike"]
    ],

    "Attack Speed": [
        ["Attack Speed"]
    ],

    "On-Hit Effects": [
        ["On-Hit"],
        ["On-Hit Effects"]
    ],

    "Armor Penetration": [
        ["Armor Penetration"],
        ["ignore", "armor"],
        ["reduces", "armor"]
    ],

    "Ability Power": [
        ["Ability Power"]
    ],

    "Mana & Regeneration": [
        ["Mana"],
        ["Mana Regen"],
        ["Mana Regeneration"]
    ],

    "Magic Penetration": [
        ["Magic Penetration"],
        ["ignore", "Magic Resist"],
        ["reduces", "Magic Resist"]
    ],

    "Health & Regeneration": [
        ["Health"],
        ["Health Regen"],
        ["Health Regeneration"]
    ],

    "Armor": [
        ["Armor"]
    ],

    "Magic Resistance": [
        ["Magic Resistance"],
        ["Magic Resist"]
    ],

    "Ability Haste": [
        ["Ability Haste"],
        ["Cooldown Reduction"]
    ],

    "Movement": [
        ["Move Speed"],
        ["Movement Speed"]
    ],

    "Life Steal & Vamp": [
        ["Life Steal"],
        ["Lifesteal"],
        ["Vamp"]
    ]

};


filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener(
        "change",
        filterItems
    );
});

itemSearch.addEventListener(
    "input",
    filterItems
);


function filterItems() {

    // ==================================================
    // HÄMTA VALDA STATS
    // ==================================================

    const selectedStats = [
        ...filterCheckboxes
    ]
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);


    // ==================================================
    // HÄMTA SÖKTEXT
    // ==================================================

    const searchText =
        itemSearch.value
            .trim()
            .toLowerCase();


    // ==================================================
    // HÄMTA ALLA ITEM-ELEMENT
    // ==================================================

    const itemElements =
        document.querySelectorAll(".item");


    // ==================================================
    // GÅ IGENOM ALLA ITEMS
    // ==================================================

    items.forEach((item, index) => {

        const itemElement =
            itemElements[index];


        // ==================================================
        // SÖKNING PÅ ITEMETS NAMN
        // ==================================================

        const matchesSearch =
            item.name
                .toLowerCase()
                .includes(searchText);


        // ==================================================
        // STAT-FILTER
        // ==================================================

        const description =
            item.description.toLowerCase();


        const matchesAllStats =
            selectedStats.every(stat => {

                const rules =
                    statKeywords[stat];


                return rules.some(rule => {

                    return rule.every(keyword =>
                        description.includes(
                            keyword.toLowerCase()
                        )
                    );

                });

            });


        // ==================================================
        // VISA / DÖLJ ITEM
        // ==================================================

        if (
            matchesSearch &&
            matchesAllStats
        ) {

            itemElement.style.display = "";

        } else {

            itemElement.style.display = "none";

        }

    });

}


// Skydda regex mot specialtecken
function escapeRegExp(text) {

    return text.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

}


// ==================================================
// BUILD BOX
// ==================================================

const buildBox = document.querySelector("#build-box");
const buildTotal = document.querySelector("#build-total");
const buildStats = document.querySelector("#build-stats");

let totalCost = 0;
let currentBuildStats = {};

// ==================================================
// BERÄKNA STATS FÖR EN BUILD
// ==================================================

function calculateBuildStats(buildItemNames) {

    const stats = {
        "Attack Damage": 0,
        "Ability Power": 0,
        "Attack Speed": 0,
        "Critical Strike Chance": 0,
        "Health": 0,
        "Health Regen": 0,
        "Armor": 0,
        "Magic Resistance": 0,
        "Ability Haste": 0,
        "Move Speed": 0,
        "Move Speed %": 0,
        "Life Steal": 0,
        "Mana": 0,
        "Mana Regen": 0,
        "Armor Penetration": 0,
        "Magic Penetration": 0,
        "Lethality": 0
    };


    // ==================================================
    // VILKA STAT-TEXTER SOM KAN FINNAS
    // ==================================================

    const statPatterns = [

        {
            name: "Attack Damage",
            regex: /^(\d+(?:\.\d+)?)\s+Attack Damage\b/i
        },

        {
            name: "Ability Power",
            regex: /^(\d+(?:\.\d+)?)\s+Ability Power\b/i
        },

        {
            name: "Attack Speed",
            regex: /^(\d+(?:\.\d+)?)%\s+Attack Speed\b/i
        },

        {
            name: "Critical Strike Chance",
            regex: /^(\d+(?:\.\d+)?)%\s+Critical Strike Chance\b/i
        },

        {
            name: "Health",
            regex: /^(\d+(?:\.\d+)?)\s+Health\b(?!\s+Regen)/i
        },

        {
            name: "Health Regen",
            regex: /^(\d+(?:\.\d+)?)\s+Health Regen\b/i
        },

        {
            name: "Armor",
            regex: /^(\d+(?:\.\d+)?)\s+Armor\b/i
        },

        {
            name: "Magic Resistance",
            regex: /^(\d+(?:\.\d+)?)\s+Magic Resist\b/i
        },

        {
            name: "Ability Haste",
            regex: /^(\d+(?:\.\d+)?)\s+Ability Haste\b/i
        },

        {
            name: "Cooldown Reduction",
            regex: /^(\d+(?:\.\d+)?)%\s+Cooldown Reduction\b/i
        },

        {
            name: "Move Speed",
            regex: /^(\d+(?:\.\d+)?)\s+Move Speed\b/i
        },

        {
            name: "Move Speed %",
            regex: /^(\d+(?:\.\d+)?)%\s+Move Speed\b/i
        },

        {
            name: "Life Steal",
            regex: /^(\d+(?:\.\d+)?)%\s+(?:Life Steal|Lifesteal)\b/i
        },

        {
            name: "Mana",
            regex: /^(\d+(?:\.\d+)?)\s+Mana\b(?!\s+Regen)/i
        },

        {
            name: "Mana Regen",
            regex: /^(\d+(?:\.\d+)?)\s+Mana Regen\b/i
        },

        {
            name: "Armor Penetration",
            regex: /^(\d+(?:\.\d+)?)%?\s+Armor Penetration\b/i
        },

        {
            name: "Magic Penetration",
            regex: /^(\d+(?:\.\d+)?)%?\s+Magic Penetration\b/i
        },

        {
            name: "Lethality",
            regex: /^(\d+(?:\.\d+)?)\s+Lethality\b/i
        }

    ];


    // ==================================================
    // GÅ IGENOM ALLA ITEMS
    // ==================================================

    buildItemNames.forEach(itemName => {

        const item =
            items.find(
                item =>
                    item.name === itemName
            );


        if (!item) {
            return;
        }


        let description =
            item.description.trim();


        // ==================================================
        // LÄS ENDAST STATSEKTIONEN
        // ==================================================

        while (description.length > 0) {

            let foundStat = false;


            for (const stat of statPatterns) {

                const match =
                    description.match(
                        stat.regex
                    );


                if (!match) {
                    continue;
                }


                const value =
                    Number(match[1]);


                // ==================================================
                // COOLDOWN REDUCTION = ABILITY HASTE
                // ==================================================

                if (
                    stat.name ===
                    "Cooldown Reduction"
                ) {

                    stats["Ability Haste"] +=
                        value;

                }

                else {

                    stats[stat.name] +=
                        value;

                }


                // ==================================================
                // TA BORT DEN STAT VI JUST HITTADE
                // ==================================================

                description =
                    description
                        .slice(match[0].length)
                        .trim();


                // ==================================================
                // TA BORT "PER 5 SECONDS"
                // ==================================================

                if (
                    stat.name === "Health Regen" ||
                    stat.name === "Mana Regen"
                ) {

                    description =
                        description.replace(
                            /^per 5 seconds\b/i,
                            ""
                        ).trim();

                }


                foundStat = true;

                break;

            }


            if (!foundStat) {
                break;
            }

        }

    });


    return stats;

}

function updateBuildStats() {

    totalCost = 0;


    // ==================================================
    // HÄMTA ITEMS FRÅN BUILDEN
    // ==================================================

    const buildItemNames = [
        ...document.querySelectorAll(
            ".build-item"
        )
    ]
        .map(buildItem => {

            const image =
                buildItem.querySelector(
                    ".build-item-image"
                );

            return image
                ? image.alt
                : null;

        })
        .filter(Boolean);


    // ==================================================
    // BERÄKNA STATS
    // ==================================================

    const stats =
        calculateBuildStats(
            buildItemNames
        );


    // Spara stats så att de kan användas
    // av resten av programmet

    currentBuildStats =
        stats;


    // ==================================================
    // RÄKNA TOTALT GULD
    // ==================================================

    buildItemNames.forEach(itemName => {

        const item =
            items.find(
                item =>
                    item.name === itemName
            );


        if (!item) {
            return;
        }


        totalCost +=
            Number(item.cost);

    });


    // ==================================================
    // VISA TOTALT GULD
    // ==================================================

    buildTotal.querySelector(
        ".total-cost"
    ).textContent =
        `Total: ${totalCost}g`;


    // ==================================================
    // TÖM GAMLA STATS
    // ==================================================

    buildStats.innerHTML = "";


    // ==================================================
    // VISA STATS
    // ==================================================

    Object.entries(stats).forEach(
        ([statName, value]) => {


            if (value === 0) {
                return;
            }


            const statElement =
                document.createElement("div");


            statElement.classList.add(
                "build-stat"
            );


            let displayValue =
                value;


            // ==================================================
            // PROCENTSTATS
            // ==================================================

            if (
                statName === "Attack Speed" ||
                statName === "Critical Strike Chance" ||
                statName === "Move Speed %" ||
                statName === "Life Steal"
            ) {

                displayValue =
                    `${value}%`;

            }


            statElement.innerHTML = `
                <span>${statName}</span>
                <strong>${displayValue}</strong>
            `;


            buildStats.appendChild(
                statElement
            );

        }
    );

}

// ==================================================
// DRAGOVER BUILD BOX
// ==================================================

buildBox.addEventListener("dragover", event => {

    event.preventDefault();

    buildBox.classList.add("drag-over");


    // Hitta itemet som just nu dras
    const draggingItem =
        document.querySelector(".being-dragged");


    // Om vi drar från itemlistan finns inget
    // .being-dragged ännu
    if (!draggingItem) {
        return;
    }


    // Hitta var itemet ska placeras
    const afterElement =
        getDragAfterElement(
            buildBox,
            event.clientX
        );


    if (afterElement === null) {

        buildBox.appendChild(draggingItem);

    } else {

        buildBox.insertBefore(
            draggingItem,
            afterElement
        );

    }

});


// ==================================================
// DRAGLEAVE BUILD BOX
// ==================================================

buildBox.addEventListener("dragleave", event => {

    if (!buildBox.contains(event.relatedTarget)) {

        buildBox.classList.remove("drag-over");

    }

});


// ==================================================
// DROP I BUILD BOX
// ==================================================

buildBox.addEventListener("drop", event => {

    event.preventDefault();

    buildBox.classList.remove("drag-over");


    const data =
        event.dataTransfer.getData("text/plain");


    if (!data) {
        return;
    }


    const dragData =
        JSON.parse(data);


    // Item från itemlistan
    if (dragData.source === "item-list") {

        addItemToBuild(dragData.item);

    }

});


// ==================================================
// LÄGG TILL KOPIA I BUILD
// ==================================================

function addItemToBuild(item) {

    // Container för build-item
    const buildItem = document.createElement("div");

    buildItem.classList.add("build-item");

    buildItem.innerHTML = `
        <img
            src="${item.image}"
            alt="${item.name}"
            class="build-item-image"
        >

        <span class="build-item-cost">
            ${item.cost}
        </span>
    `;


    // Unikt ID för denna kopia
    const buildId =
        Date.now() + Math.random();

    buildItem.dataset.buildId = buildId;


    // Gör hela itemet dragbart
    buildItem.draggable = true;


    // ----------------------------------------------
    // DRAGSTART
    // ----------------------------------------------

    buildItem.addEventListener("dragstart", event => {

        buildItem.classList.add("being-dragged");

        event.dataTransfer.setData(
            "text/plain",
            JSON.stringify({
                id: buildId,
                source: "build"
            })
        );

    });


    // ----------------------------------------------
    // DRAGEND
    // ----------------------------------------------

    buildItem.addEventListener("dragend", () => {

        buildItem.classList.remove("being-dragged");

        buildBox.classList.remove("drag-over");

    });


    // ----------------------------------------------
    // KLICK → VISA INFORMATION
    // ----------------------------------------------

    buildItem.addEventListener("click", () => {

        showItemInfo(item);

    });


    buildBox.appendChild(buildItem);
    updateBuildStats();
}


// ==================================================
// BESTÄM VAR ITEMET SKA HAMNA
// ==================================================

function getDragAfterElement(container, x) {

    const draggableElements = [
        ...container.querySelectorAll(
            ".build-item:not(.being-dragged)"
        )
    ];


    return draggableElements.reduce(
        (closest, child) => {

            const box =
                child.getBoundingClientRect();


            const offset =
                x -
                box.left -
                box.width / 2;


            if (
                offset < 0 &&
                offset > closest.offset
            ) {

                return {
                    offset: offset,
                    element: child
                };

            } else {

                return closest;

            }

        },
        {
            offset: Number.NEGATIVE_INFINITY,
            element: null
        }
    ).element;

}


// ==================================================
// TRASH ZONE
// ==================================================

const trashZone =
    document.querySelector("#trash-zone");


// ----------------------------------------------
// DRAGOVER SOPTUNNA
// ----------------------------------------------

trashZone.addEventListener("dragover", event => {

    event.preventDefault();

    trashZone.classList.add(
        "drag-over"
    );

});


// ----------------------------------------------
// DRAGLEAVE SOPTUNNA
// ----------------------------------------------

trashZone.addEventListener("dragleave", () => {

    trashZone.classList.remove(
        "drag-over"
    );

});


// ----------------------------------------------
// DROP I SOPTUNNA
// ----------------------------------------------

trashZone.addEventListener("drop", event => {

    event.preventDefault();

    trashZone.classList.remove(
        "drag-over"
    );


    const data =
        event.dataTransfer.getData("text/plain");


    if (!data) {
        return;
    }


    const dragData =
        JSON.parse(data);


    // Ta bara bort kopior som finns i builden
    if (dragData.source === "build") {

        const buildItem =
            document.querySelector(
                `[data-build-id="${dragData.id}"]`
            );


        if (buildItem) {

            buildItem.remove();
            updateBuildStats();

        }

    }

});


// ==================================================
// ITEM INFORMATION MODAL
// ==================================================

function showItemInfo(item) {

    const overlay =
        document.createElement("div");


    overlay.classList.add(
        "item-overlay"
    );


    // ==================================================
    // BUILDS FROM
    // ==================================================

    const buildData =
        itemBuilds[item.name];


    let buildsFromHTML = "";


    if (
        buildData &&
        buildData.buildsFrom &&
        buildData.buildsFrom.length > 0
    ) {

        const components =
            buildData.buildsFrom
                .map(componentName => {

                    const component =
                        items.find(
                            item =>
                                item.name ===
                                componentName
                        );


                    if (!component) {
                        return "";
                    }


                    return `
                        <div
                            class="modal-component"
                            data-item-name="${component.name}"
                        >

                            <img
                                src="${component.image}"
                                alt="${component.name}"
                            >

                            <span>
                                ${component.name}
                            </span>

                        </div>
                    `;

                })
                .join("");


        buildsFromHTML = `

            <div class="modal-section">

                <h3>
                    Builds From
                </h3>

                <div class="modal-components">
                    ${components}
                </div>

            </div>

        `;

    }


    // ==================================================
    // BUILDS INTO
    // ==================================================

    const nextItems =
        buildsInto[item.name] || [];


    let buildsIntoHTML = "";


    if (nextItems.length > 0) {

        const nextItemsHTML =
            nextItems
                .map(nextItemName => {

                    const nextItem =
                        items.find(
                            item =>
                                item.name ===
                                nextItemName
                        );


                    if (!nextItem) {
                        return "";
                    }


                    return `
                        <div
                            class="modal-builds-into-item"
                            data-item-name="${nextItem.name}"
                        >

                            <img
                                src="${nextItem.image}"
                                alt="${nextItem.name}"
                            >

                            <span>
                                ${nextItem.name}
                            </span>

                        </div>
                    `;

                })
                .join("");


        buildsIntoHTML = `

            <div class="modal-section">

                <h3>
                    Builds Into
                </h3>

                <div class="modal-builds-into">
                    ${nextItemsHTML}
                </div>

            </div>

        `;

    }


    // ==================================================
    // MODAL
    // ==================================================

    overlay.innerHTML = `

        <div class="item-modal">

            <button class="close-button">
                &times;
            </button>


            ${buildsIntoHTML}


            <img
                src="${item.image}"
                alt="${item.name}"
                class="modal-image"
            >


            <h2>
                ${item.name}
            </h2>


            <p class="item-cost">
                Cost: ${item.cost} gold
            </p>


            <p class="item-description">
                ${item.description}
            </p>


            ${buildsFromHTML}

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    // ==================================================
    // KLICKA PÅ COMPONENT
    // ==================================================

    overlay
        .querySelectorAll(
            ".modal-component, .modal-builds-into-item"
        )
        .forEach(element => {

            element.addEventListener(
                "click",
                () => {

                    const itemName =
                        element.dataset.itemName;


                    const clickedItem =
                        items.find(
                            item =>
                                item.name ===
                                itemName
                        );


                    if (!clickedItem) {
                        return;
                    }


                    overlay.remove();

                    showItemInfo(
                        clickedItem
                    );

                }
            );

        });


    // ==================================================
    // STÄNG MED X
    // ==================================================

    const closeButton =
        overlay.querySelector(
            ".close-button"
        );


    closeButton.addEventListener(
        "click",
        () => {

            overlay.remove();

        }
    );


    // ==================================================
    // KLICKA UTANFÖR
    // ==================================================

    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {

                overlay.remove();

            }

        }
    );


    // ==================================================
    // ESCAPE
    // ==================================================

    function closeWithEscape(event) {

        if (
            event.key === "Escape"
        ) {

            overlay.remove();

            document.removeEventListener(
                "keydown",
                closeWithEscape
            );

        }

    }


    document.addEventListener(
        "keydown",
        closeWithEscape
    );

}

// ==================================================
// SAVED BUILDS
// ==================================================

const saveBuildButton =
    document.querySelector("#save-build-button");

const savedBuildsButton =
    document.querySelector("#saved-builds-button");

const SAVED_BUILDS_KEY =
    "lol-classic-saved-builds";


// ==================================================
// HÄMTA SPARADE BUILDS
// ==================================================

// ==================================================
// HÄMTA SPARADE BUILDS
// ==================================================

function getSavedBuilds() {

    const savedBuilds =
        localStorage.getItem(
            SAVED_BUILDS_KEY
        );


    if (!savedBuilds) {
        return [];
    }


    try {

        const builds =
            JSON.parse(
                savedBuilds
            );


        // Lägg till tom steps-array
        // på gamla builds

        builds.forEach(build => {

            if (!Array.isArray(build.steps)) {

                build.steps = [];

            }

        });


        return builds;

    } catch (error) {

        console.error(
            "Kunde inte läsa sparade builds:",
            error
        );

        return [];

    }

}

// ==================================================
// SPARA BUILDS
// ==================================================

function saveSavedBuilds(builds) {

    localStorage.setItem(
        SAVED_BUILDS_KEY,
        JSON.stringify(builds)
    );

}

// ==================================================
// UPPDATERA EN SPARAD BUILD
// ==================================================

function updateSavedBuild(build) {

    const builds =
        getSavedBuilds();


    const buildIndex =
        builds.findIndex(
            savedBuild =>
                savedBuild.id === build.id
        );


    if (buildIndex === -1) {
        return;
    }


    builds[buildIndex] =
        build;


    saveSavedBuilds(
        builds
    );

}

// ==================================================
// HÄMTA ITEMS FRÅN BUILDEN
// ==================================================

function getCurrentBuildItems() {

    const buildItems =
        document.querySelectorAll(
            ".build-item"
        );

    return [
        ...buildItems
    ].map(buildItem => {

        const image =
            buildItem.querySelector(
                ".build-item-image"
            );

        if (!image) {
            return null;
        }

        return image.alt;

    }).filter(Boolean);

}


// ==================================================
// SPARA BUILD
// ==================================================

function showSaveBuildModal() {

    const currentItems =
        getCurrentBuildItems();

    if (currentItems.length === 0) {

        alert(
            "Du måste lägga till minst ett item innan du kan spara builden."
        );

        return;

    }


    const overlay =
        document.createElement("div");

    overlay.classList.add(
        "item-overlay"
    );

    overlay.innerHTML = `

        <div class="item-modal">

            <button class="close-button">
                &times;
            </button>

            <h2>
                Spara build
            </h2>

            <div class="save-build-form">

                <label for="saved-build-name">
                    Namn på build
                </label>

                <input
                    type="text"
                    id="saved-build-name"
                    placeholder="Exempel: Gragas AP"
                    maxlength="50"
                >

                <label for="saved-build-notes">
                    Anteckningar
                </label>

                <textarea
                    id="saved-build-notes"
                    placeholder="Valfria anteckningar..."
                ></textarea>

                <div class="save-build-buttons">

                    <button class="save-build-cancel">
                        Avbryt
                    </button>

                    <button class="save-build-confirm">
                        Spara
                    </button>

                </div>

            </div>

        </div>

    `;

    document.body.appendChild(
        overlay
    );


    const nameInput =
        overlay.querySelector(
            "#saved-build-name"
        );

    const notesInput =
        overlay.querySelector(
            "#saved-build-notes"
        );


    function closeModal() {

        overlay.remove();

    }


    overlay.querySelector(
        ".close-button"
    ).addEventListener(
        "click",
        closeModal
    );


    overlay.querySelector(
        ".save-build-cancel"
    ).addEventListener(
        "click",
        closeModal
    );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {
                closeModal();
            }

        }
    );


    overlay.querySelector(
        ".save-build-confirm"
    ).addEventListener(
        "click",
        () => {

            const name =
                nameInput.value.trim();

            const notes =
                notesInput.value.trim();


            if (!name) {

                alert(
                    "Du måste ge builden ett namn."
                );

                nameInput.focus();

                return;

            }


            const builds =
                getSavedBuilds();


            const existingBuild =
                builds.find(
                    build =>
                        build.name.toLowerCase() ===
                        name.toLowerCase()
                );


            if (existingBuild) {

                const overwrite =
                    confirm(
                        `Det finns redan en build som heter "${existingBuild.name}". Vill du ersätta den?`
                    );

                if (!overwrite) {
                    return;
                }

                existingBuild.items =
                    currentItems;

                existingBuild.notes =
                    notes;

                existingBuild.updatedAt =
                    Date.now();

            } else {

                builds.push({

                    id:
                        Date.now().toString(),

                    name:
                        name,

                    items:
                        currentItems,

                    notes:
                        notes,

                    steps:
                        [],

                    createdAt:
                        Date.now()

                });

            }


            saveSavedBuilds(
                builds
            );

            closeModal();

        }
    );

}
// ==================================================
// MINA BUILDS
// ==================================================

function showSavedBuilds() {

    const builds =
        getSavedBuilds();


    const overlay =
        document.createElement("div");

    overlay.classList.add(
        "item-overlay"
    );


    overlay.innerHTML = `

        <div class="item-modal">

            <button class="close-button">
                &times;
            </button>

            <h2>
                Mina builds
            </h2>

            <div class="saved-build-list">
            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const list =
        overlay.querySelector(
            ".saved-build-list"
        );


    if (builds.length === 0) {

        list.innerHTML = `
            <p>
                Du har inga sparade builds ännu.
            </p>
        `;

    }


    builds.forEach(build => {

        const card =
            document.createElement("div");

        card.classList.add(
            "saved-build-card"
        );


        const info =
            document.createElement("div");

        info.classList.add(
            "saved-build-card-info"
        );


        const name =
            document.createElement("div");

        name.classList.add(
            "saved-build-card-name"
        );

        name.textContent =
            build.name;


        const itemsContainer =
            document.createElement("div");

        itemsContainer.classList.add(
            "saved-build-card-items"
        );


        build.items.forEach(itemName => {

            const item =
                items.find(
                    item =>
                        item.name === itemName
                );

            if (!item) {
                return;
            }


            const image =
                document.createElement("img");

            image.src =
                item.image;

            image.alt =
                item.name;

            image.title =
                item.name;


            itemsContainer.appendChild(
                image
            );

        });


        info.appendChild(
            name
        );

        info.appendChild(
            itemsContainer
        );


        const deleteButton =
            document.createElement("button");

        deleteButton.classList.add(
            "saved-build-delete"
        );

        deleteButton.textContent =
            "×";

        deleteButton.title =
            "Ta bort build";


        deleteButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const confirmed =
                    confirm(
                        `Vill du ta bort "${build.name}"?`
                    );


                if (!confirmed) {
                    return;
                }


                deleteSavedBuild(
                    build.id
                );


                overlay.remove();

                showSavedBuilds();

            }
        );


        card.appendChild(
            info
        );

        card.appendChild(
            deleteButton
        );


        card.addEventListener(
            "click",
            () => {

                overlay.remove();

                showSavedBuildDetails(
                    build
                );

            }
        );


        list.appendChild(
            card
        );

    });


    overlay.querySelector(
        ".close-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

        }
    );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {

                overlay.remove();

            }

        }
    );

}

// ==================================================
// TA BORT SPARAD BUILD
// ==================================================

function deleteSavedBuild(id) {

    const builds =
        getSavedBuilds();


    const updatedBuilds =
        builds.filter(
            build =>
                build.id !== id
        );


    saveSavedBuilds(
        updatedBuilds
    );

}

// ==================================================
// VISA BUILD-DETALJER
// ==================================================

function showSavedBuildDetails(build) {

    const overlay =
        document.createElement("div");

    overlay.classList.add(
        "item-overlay"
    );


    overlay.innerHTML = `

        <div class="item-modal">

            <button class="close-button">
                &times;
            </button>

            <h2>
                ${build.name}
            </h2>

            <div class="saved-build-detail-items"></div>

            <div class="saved-build-total">
                Total: 0g
            </div>

            <div class="modal-section">

                <h3>
                    Stats
                </h3>

                <div class="saved-build-stats">
                </div>

            </div>

            <div class="modal-section">

                <h3>
                    Build Path
                </h3>

                <div class="saved-build-steps">
                </div>

                <button
                    class="add-build-step-button"
                >
                    + Lägg till steg
                </button>

            </div>

            ${
                build.notes
                ?
                `
                <div class="modal-section">

                    <h3>
                        Anteckningar
                    </h3>

                    <div class="saved-build-notes">
                        ${build.notes}
                    </div>

                </div>
                `
                :
                ""
            }

            <div class="saved-build-detail-actions">

                <button class="edit-build-button">
                    Redigera build
                </button>

                <button class="load-build-button">
                    Ladda build
                </button>

                <button class="back-builds-button">
                    Tillbaka
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );

    if (
        !Array.isArray(build.steps)
    ) {

        build.steps = [];

    }

    const itemsContainer =
        overlay.querySelector(
            ".saved-build-detail-items"
        );


    const statsContainer =
        overlay.querySelector(
            ".saved-build-stats"
        );


    const totalElement =
        overlay.querySelector(
            ".saved-build-total"
        );

    const stepsContainer =
        overlay.querySelector(
            ".saved-build-steps"
        );

    // ==================================================
    // VISA ITEMS
    // ==================================================

    build.items.forEach(itemName => {

        const item =
            items.find(
                item =>
                    item.name === itemName
            );

        if (!item) {
            return;
        }


        const image =
            document.createElement("img");

        image.src =
            item.image;

        image.alt =
            item.name;

        image.title =
            item.name;


        itemsContainer.appendChild(
            image
        );

    });


    // ==================================================
    // RÄKNA TOTALPRIS
    // ==================================================

    let savedBuildCost = 0;


    build.items.forEach(itemName => {

        const item =
            items.find(
                item =>
                    item.name === itemName
            );

        if (!item) {
            return;
        }


        savedBuildCost +=
            Number(item.cost);

    });


    totalElement.textContent =
        `Total: ${savedBuildCost}g`;


    // ==================================================
    // RÄKNA STATS
    // ==================================================

    const stats =
        calculateBuildStats(
            build.items
        );


    Object.entries(stats).forEach(
        ([statName, value]) => {

            if (value === 0) {
                return;
            }


            const statElement =
                document.createElement("div");

            statElement.classList.add(
                "build-stat"
            );


            let displayValue =
                value;


            if (
                statName === "Attack Speed" ||
                statName === "Critical Strike Chance" ||
                statName === "Move Speed %" ||
                statName === "Life Steal"
            ) {

                displayValue =
                    `${value}%`;

            }


            statElement.innerHTML = `
                <span>
                    ${statName}
                </span>

                <strong>
                    ${displayValue}
                </strong>
            `;


            statsContainer.appendChild(
                statElement
            );

        }
    );

    // ==================================================
    // VISA BUILD PATH
    // ==================================================

    build.steps.forEach(
        (step, index) => {

            const stepElement =
                document.createElement(
                    "div"
                );


            stepElement.classList.add(
                "saved-build-step"
            );


      stepElement.innerHTML = `

            <div class="saved-build-step-header">

                <strong>
                    ${step.name}
                </strong>


                <div class="saved-build-step-actions">

                    <button
                        class="move-step-up-button"
                        type="button"
                        title="Flytta upp"
                    >
                        ↑
                    </button>

                    <button
                        class="move-step-down-button"
                        type="button"
                        title="Flytta ner"
                    >
                        ↓
                    </button>

                    <button
                        class="edit-step-button"
                        type="button"
                    >
                        Redigera
                    </button>

                </div>

            </div>


            <div class="saved-build-step-items">
            </div>


            <div class="saved-build-step-total">
                Total: 0g
            </div>


            <div class="saved-build-step-stats">
            </div>


            ${
                step.notes
                ?
                `
                <div class="saved-build-step-notes">
                    ${step.notes}
                </div>
                `
                :
                ""
            }

        `;


            const stepItemsContainer =
                stepElement.querySelector(
                    ".saved-build-step-items"
                );

            const stepTotalElement =
                stepElement.querySelector(
                    ".saved-build-step-total"
                );


            const stepStatsContainer =
                stepElement.querySelector(
                    ".saved-build-step-stats"
                );

            // ==================================================
            // RÄKNA TOTALT GULD FÖR STEGET
            // ==================================================

            let stepTotalCost = 0;


            step.items.forEach(
                itemName => {

                    const item =
                        items.find(
                            item =>
                                item.name === itemName
                        );


                    if (!item) {
                        return;
                    }


                    stepTotalCost +=
                        Number(item.cost);

                }
            );

stepTotalElement.textContent =
    `Total: ${stepTotalCost}g`;

            step.items.forEach(
                itemName => {

                    const item =
                        items.find(
                            item =>
                                item.name === itemName
                        );


                    if (!item) {
                        return;
                    }


                    const image =
                        document.createElement(
                            "img"
                        );


                    image.src =
                        item.image;


                    image.alt =
                        item.name;


                    image.title =
                        item.name;


                    stepItemsContainer.appendChild(
                        image
                    );

                }
            );


            stepElement
                .querySelector(
                    ".edit-step-button"
                )
                .addEventListener(
                    "click",
                    () => {

                        overlay.remove();

                        showEditBuildStepModal(
                            build,
                            index
                        );

                    }
                );

                // ==================================================
                // FLYTTA STEG UPP
                // ==================================================

                stepElement
                    .querySelector(
                        ".move-step-up-button"
                    )
                    .addEventListener(
                        "click",
                        () => {

                            if (index === 0) {
                                return;
                            }


                            const currentStep =
                                build.steps[index];


                            const previousStep =
                                build.steps[index - 1];


                            build.steps[index - 1] =
                                currentStep;


                            build.steps[index] =
                                previousStep;


                            updateSavedBuild(
                                build
                            );


                            overlay.remove();


                            showSavedBuildDetails(
                                build
                            );

                        }
                    );


// ==================================================
// FLYTTA STEG NER
// ==================================================

stepElement
    .querySelector(
        ".move-step-down-button"
    )
    .addEventListener(
        "click",
        () => {

            if (
                index ===
                build.steps.length - 1
            ) {

                return;

            }


            const currentStep =
                build.steps[index];


            const nextStep =
                build.steps[index + 1];


            build.steps[index + 1] =
                currentStep;


            build.steps[index] =
                nextStep;


            updateSavedBuild(
                build
            );


            overlay.remove();


            showSavedBuildDetails(
                build
            );

        }
    );


            stepsContainer.appendChild(
                stepElement
            );

        }
    );

    // ==================================================
    // REDIGERA BUILD
    // ==================================================

    overlay.querySelector(
        ".edit-build-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

            showEditBuildModal(
                build
            );

        }
    );

    // ==================================================
    // LÄGG TILL BUILD PATH-STEG
    // ==================================================

    overlay.querySelector(
        ".add-build-step-button"
    ).addEventListener(
        "click",
        () => {

            build.steps.push({

                name:
                    `Steg ${build.steps.length + 1}`,

                items:
                    [],

                notes:
                    ""

            });


            updateSavedBuild(
                build
            );


            overlay.remove();


            showEditBuildStepModal(
                build,
                build.steps.length - 1
            );

        }
    );

    // ==================================================
    // LADDA BUILD
    // ==================================================
    overlay.querySelector(
        ".load-build-button"
    ).addEventListener(
        "click",
        () => {

            loadSavedBuild(
                build
            );

            overlay.remove();

        }
    );


    // ==================================================
    // TILLBAKA
    // ==================================================

    overlay.querySelector(
        ".back-builds-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

            showSavedBuilds();

        }
    );


    // ==================================================
    // STÄNG
    // ==================================================

    overlay.querySelector(
        ".close-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

        }
    );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {

                overlay.remove();

            }

        }
    );

}

// ==================================================
// REDIGERA SPARAD BUILD
// ==================================================

function showEditBuildModal(build) {

    const overlay =
        document.createElement("div");


    overlay.classList.add(
        "item-overlay"
    );


    overlay.innerHTML = `

        <div class="item-modal edit-build-modal">

            <button class="close-button">
                &times;
            </button>

            <h2>
                Redigera build
            </h2>


            <div class="save-build-form">

                <label for="edit-build-name">
                    Namn på build
                </label>

                <input
                    type="text"
                    id="edit-build-name"
                    value="${build.name}"
                    maxlength="50"
                >


                <label>
                    Items
                </label>


                <div class="edit-build-items">
                </div>


                <div class="edit-build-actions">

                    <button
                        type="button"
                        class="edit-add-items-button"
                    >
                        Lägg till items
                    </button>

                </div>


                <label for="edit-build-notes">
                    Anteckningar
                </label>

                <textarea
                    id="edit-build-notes"
                    placeholder="Valfria anteckningar..."
                >${build.notes || ""}</textarea>


                <div class="save-build-buttons">

                    <button
                        class="save-build-cancel"
                    >
                        Avbryt
                    </button>

                    <button
                        class="save-build-confirm"
                    >
                        Spara ändringar
                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const itemsContainer =
        overlay.querySelector(
            ".edit-build-items"
        );


    const nameInput =
        overlay.querySelector(
            "#edit-build-name"
        );


    const notesInput =
        overlay.querySelector(
            "#edit-build-notes"
        );


    // ==================================================
    // VISA ITEMS
    // ==================================================

    function renderEditItems() {

        itemsContainer.innerHTML = "";


        build.items.forEach(
            (itemName, index) => {

                const item =
                    items.find(
                        item =>
                            item.name === itemName
                    );


                if (!item) {
                    return;
                }


                const itemElement =
                    document.createElement("div");


                itemElement.classList.add(
                    "edit-build-item"
                );


                itemElement.innerHTML = `

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        title="${item.name}"
                    >

                    <button
                        class="edit-remove-item"
                        type="button"
                    >
                        ×
                    </button>

                `;


                itemElement
                    .querySelector(
                        ".edit-remove-item"
                    )
                    .addEventListener(
                        "click",
                        () => {

                            build.items.splice(
                                index,
                                1
                            );


                            renderEditItems();

                        }
                    );


                itemsContainer.appendChild(
                    itemElement
                );

            }
        );

    }


    renderEditItems();


    // ==================================================
    // LÄGG TILL ITEMS
    // ==================================================

    overlay.querySelector(
        ".edit-add-items-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

            showEditItemPicker(
                build
            );

        }
    );


    // ==================================================
    // SPARA ÄNDRINGAR
    // ==================================================

    overlay.querySelector(
        ".save-build-confirm"
    ).addEventListener(
        "click",
        () => {

            const name =
                nameInput.value.trim();


            if (!name) {

                alert(
                    "Builden måste ha ett namn."
                );

                nameInput.focus();

                return;

            }


            build.name =
                name;


            build.notes =
                notesInput.value.trim();


            build.updatedAt =
                Date.now();


            updateSavedBuild(
                build
            );


            overlay.remove();

            showSavedBuildDetails(
                build
            );

        }
    );


    // ==================================================
    // AVBRYT
    // ==================================================

    overlay.querySelector(
        ".save-build-cancel"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

            showSavedBuildDetails(
                build
            );

        }
    );


    // ==================================================
    // STÄNG
    // ==================================================

    overlay.querySelector(
        ".close-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

            showSavedBuildDetails(
                build
            );

        }
    );

}

// ==================================================
// VÄLJ ITEMS TILL SPARAD BUILD
// ==================================================

function showEditItemPicker(build) {

    const overlay =
        document.createElement("div");


    overlay.classList.add(
        "item-overlay"
    );


    overlay.innerHTML = `

        <div class="item-modal edit-item-picker">

            <button class="close-button">
                &times;
            </button>

            <h2>
                Lägg till items
            </h2>

            <input
                type="text"
                class="edit-item-search"
                placeholder="Sök item..."
                autocomplete="off"
            >

            <div class="edit-item-list">
            </div>

            <div class="save-build-buttons">

                <button class="edit-item-done">
                    Klar
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const list =
        overlay.querySelector(
            ".edit-item-list"
        );


    const search =
        overlay.querySelector(
            ".edit-item-search"
        );


    function renderItems() {

        list.innerHTML = "";


        const searchText =
            search.value
                .trim()
                .toLowerCase();


        items
            .filter(item =>
                item.name
                    .toLowerCase()
                    .includes(searchText)
            )
            .forEach(item => {

                const itemElement =
                    document.createElement("div");


                itemElement.classList.add(
                    "edit-picker-item"
                );


                itemElement.innerHTML = `

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <span>
                        ${item.name}
                    </span>

                `;


                itemElement.addEventListener(
                    "click",
                    () => {

                        build.items.push(
                            item.name
                        );


                        itemElement.classList.add(
                            "selected"
                        );

                    }
                );


                list.appendChild(
                    itemElement
                );

            });

    }


    renderItems();


    search.addEventListener(
        "input",
        renderItems
    );


    overlay.querySelector(
        ".edit-item-done"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

            showEditBuildModal(
                build
            );

        }
    );


    overlay.querySelector(
        ".close-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();

            showEditBuildModal(
                build
            );

        }
    );

}

// ==================================================
// REDIGERA BUILD PATH-STEG
// ==================================================

function showEditBuildStepModal(
    build,
    stepIndex
) {

    const step =
        build.steps[stepIndex];


    const overlay =
        document.createElement(
            "div"
        );


    overlay.classList.add(
        "item-overlay"
    );


    overlay.innerHTML = `

        <div class="item-modal edit-build-modal">

            <button class="close-button">
                &times;
            </button>

            <h2>
                Redigera steg
            </h2>

            <div class="save-build-form">

                <label>
                    Namn på steg
                </label>

                <input
                    type="text"
                    class="edit-step-name"
                    value="${step.name}"
                    maxlength="50"
                >

                <label>
                    Items
                </label>

                <div class="edit-step-items">
                </div>

                <button
                    class="edit-step-add-item"
                    type="button"
                >
                    Lägg till items
                </button>

                <label>
                    Anteckningar
                </label>

                <textarea
                    class="edit-step-notes"
                    placeholder="Valfria anteckningar..."
                >${step.notes || ""}</textarea>

                <div class="save-build-buttons">

                    <button
                        class="delete-step-button"
                        type="button"
                    >
                        Ta bort steg
                    </button>

                    <button
                        class="save-step-button"
                        type="button"
                    >
                        Spara steg
                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const itemsContainer =
        overlay.querySelector(
            ".edit-step-items"
        );


    // ==================================================
    // VISA STEGETS ITEMS
    // ==================================================

    function renderStepItems() {

        itemsContainer.innerHTML = "";


        step.items.forEach(
            (itemName, index) => {

                const item =
                    items.find(
                        item =>
                            item.name === itemName
                    );


                if (!item) {
                    return;
                }


                const itemElement =
                    document.createElement(
                        "div"
                    );


                itemElement.classList.add(
                    "edit-build-item"
                );


                itemElement.innerHTML = `

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        title="${item.name}"
                    >

                    <button
                        class="edit-remove-item"
                        type="button"
                    >
                        ×
                    </button>

                `;


                itemElement
                    .querySelector(
                        ".edit-remove-item"
                    )
                    .addEventListener(
                        "click",
                        () => {

                            step.items.splice(
                                index,
                                1
                            );


                            renderStepItems();

                        }
                    );


                itemsContainer.appendChild(
                    itemElement
                );

            }
        );

    }


    renderStepItems();


    // ==================================================
    // LÄGG TILL ITEMS
    // ==================================================

    overlay.querySelector(
        ".edit-step-add-item"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();


            showEditStepItemPicker(
                build,
                stepIndex
            );

        }
    );


    // ==================================================
    // SPARA STEG
    // ==================================================

    overlay.querySelector(
        ".save-step-button"
    ).addEventListener(
        "click",
        () => {

            const name =
                overlay.querySelector(
                    ".edit-step-name"
                ).value.trim();


            const notes =
                overlay.querySelector(
                    ".edit-step-notes"
                ).value.trim();


            if (!name) {

                alert(
                    "Steget måste ha ett namn."
                );

                return;

            }


            step.name =
                name;


            step.notes =
                notes;


            updateSavedBuild(
                build
            );


            overlay.remove();


            showSavedBuildDetails(
                build
            );

        }
    );


    // ==================================================
    // TA BORT STEG
    // ==================================================

    overlay.querySelector(
        ".delete-step-button"
    ).addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    `Vill du ta bort "${step.name}"?`
                );


            if (!confirmed) {
                return;
            }


            build.steps.splice(
                stepIndex,
                1
            );


            updateSavedBuild(
                build
            );


            overlay.remove();


            showSavedBuildDetails(
                build
            );

        }
    );


    // ==================================================
    // STÄNG
    // ==================================================

    overlay.querySelector(
        ".close-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();


            showSavedBuildDetails(
                build
            );

        }
    );

}

// ==================================================
// VÄLJ ITEMS TILL BUILD PATH-STEG
// ==================================================

function showEditStepItemPicker(
    build,
    stepIndex
) {

    const step =
        build.steps[stepIndex];


    const overlay =
        document.createElement(
            "div"
        );


    overlay.classList.add(
        "item-overlay"
    );


    overlay.innerHTML = `

        <div class="item-modal edit-item-picker">

            <button class="close-button">
                &times;
            </button>

            <h2>
                Lägg till items
            </h2>

            <input
                type="text"
                class="edit-item-search"
                placeholder="Sök item..."
                autocomplete="off"
            >

            <div class="edit-item-list">
            </div>

            <div class="save-build-buttons">

                <button
                    class="edit-item-done"
                    type="button"
                >
                    Klar
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const list =
        overlay.querySelector(
            ".edit-item-list"
        );


    const search =
        overlay.querySelector(
            ".edit-item-search"
        );


    function renderItems() {

        list.innerHTML = "";


        const searchText =
            search.value
                .trim()
                .toLowerCase();


        items
            .filter(item =>
                item.name
                    .toLowerCase()
                    .includes(searchText)
            )
            .forEach(item => {

                const itemElement =
                    document.createElement(
                        "div"
                    );


                itemElement.classList.add(
                    "edit-picker-item"
                );


                itemElement.innerHTML = `

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <span>
                        ${item.name}
                    </span>

                `;


                itemElement.addEventListener(
                    "click",
                    () => {

                        step.items.push(
                            item.name
                        );


                        itemElement.classList.add(
                            "selected"
                        );

                    }
                );


                list.appendChild(
                    itemElement
                );

            });

    }


    renderItems();


    search.addEventListener(
        "input",
        renderItems
    );


    overlay.querySelector(
        ".edit-item-done"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();


            showEditBuildStepModal(
                build,
                stepIndex
            );

        }
    );


    overlay.querySelector(
        ".close-button"
    ).addEventListener(
        "click",
        () => {

            overlay.remove();


            showEditBuildStepModal(
                build,
                stepIndex
            );

        }
    );

}

// ==================================================
// LADDA SPARAD BUILD
// ==================================================
function loadSavedBuild(build) {

    buildBox.innerHTML = "";


    build.items.forEach(itemName => {

        const item =
            items.find(
                item =>
                    item.name === itemName
            );

        if (!item) {
            return;
        }


        addItemToBuild(
            item
        );

    });


    updateBuildStats();

}

// ==================================================
// BUILD BUTTONS
// ==================================================

saveBuildButton.addEventListener(
    "click",
    showSaveBuildModal
);

savedBuildsButton.addEventListener(
    "click",
    showSavedBuilds
);