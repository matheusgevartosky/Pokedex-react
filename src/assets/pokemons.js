 const DATA = [{
        "id": 1,
        "image": "https://i.pinimg.com/originals/96/d2/1d/96d21d738561947f96255e6f12f1754a.png",
        "name": {
            "english": "Bulbasaur",
            "japanese": "フシギダネ",
            "chinese": "妙蛙种子",
            "french": "Bulbizarre"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 49,
            "Defense": 49,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 45
        }
    },
    {
        "id": 2,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        "name": {
            "english": "Ivysaur",
            "japanese": "フシギソウ",
            "chinese": "妙蛙草",
            "french": "Herbizarre"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 62,
            "Defense": 63,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 60
        }
    },
    {
        "id": 3,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        "name": {
            "english": "Venusaur",
            "japanese": "フシギバナ",
            "chinese": "妙蛙花",
            "french": "Florizarre"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 82,
            "Defense": 83,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 80
        }
    },
    {
        "id": 4,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "name": {
            "english": "Charmander",
            "japanese": "ヒトカゲ",
            "chinese": "小火龙",
            "french": "Salamèche"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 39,
            "Attack": 52,
            "Defense": 43,
            "Sp. Attack": 60,
            "Sp. Defense": 50,
            "Speed": 65
        }
    },
    {
        "id": 5,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        "name": {
            "english": "Charmeleon",
            "japanese": "リザード",
            "chinese": "火恐龙",
            "french": "Reptincel"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 58,
            "Attack": 64,
            "Defense": 58,
            "Sp. Attack": 80,
            "Sp. Defense": 65,
            "Speed": 80
        }
    },
    {
        "id": 6,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        "name": {
            "english": "Charizard",
            "japanese": "リザードン",
            "chinese": "喷火龙",
            "french": "Dracaufeu"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 78,
            "Attack": 84,
            "Defense": 78,
            "Sp. Attack": 109,
            "Sp. Defense": 85,
            "Speed": 100
        }
    },
    {
        "id": 7,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        "name": {
            "english": "Squirtle",
            "japanese": "ゼニガメ",
            "chinese": "杰尼龟",
            "french": "Carapuce"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 44,
            "Attack": 48,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 64,
            "Speed": 43
        }
    },
    {
        "id": 8,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        "name": {
            "english": "Wartortle",
            "japanese": "カメール",
            "chinese": "卡咪龟",
            "french": "Carabaffe"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 59,
            "Attack": 63,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 80,
            "Speed": 58
        }
    },
    {
        "id": 9,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        "name": {
            "english": "Blastoise",
            "japanese": "カメックス",
            "chinese": "水箭龟",
            "french": "Tortank"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 79,
            "Attack": 83,
            "Defense": 100,
            "Sp. Attack": 85,
            "Sp. Defense": 105,
            "Speed": 78
        }
    },
    {
        "id": 10,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        "name": {
            "english": "Caterpie",
            "japanese": "キャタピー",
            "chinese": "绿毛虫",
            "french": "Chenipan"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 45,
            "Attack": 30,
            "Defense": 35,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            "Speed": 45
        }
    },
    {
        "id": 11,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
        "name": {
            "english": "Metapod",
            "japanese": "トランセル",
            "chinese": "铁甲蛹",
            "french": "Chrysacier"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 20,
            "Defense": 55,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 30
        }
    },
    {
        "id": 12,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        "name": {
            "english": "Butterfree",
            "japanese": "バタフリー",
            "chinese": "巴大蝶",
            "french": "Papilusion"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 45,
            "Defense": 50,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            "Speed": 70
        }
    },
    {
        "id": 13,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
        "name": {
            "english": "Weedle",
            "japanese": "ビードル",
            "chinese": "独角虫",
            "french": "Aspicot"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            "Speed": 50
        }
    },
    {
        "id": 14,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
        "name": {
            "english": "Kakuna",
            "japanese": "コクーン",
            "chinese": "铁壳蛹",
            "french": "Coconfort"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 25,
            "Defense": 50,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 35
        }
    },
    {
        "id": 15,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
        "name": {
            "english": "Beedrill",
            "japanese": "スピアー",
            "chinese": "大针蜂",
            "french": "Dardargnan"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 40,
            "Sp. Attack": 45,
            "Sp. Defense": 80,
            "Speed": 75
        }
    },
    {
        "id": 16,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        "name": {
            "english": "Pidgey",
            "japanese": "ポッポ",
            "chinese": "波波",
            "french": "Roucool"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 40,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 56
        }
    },
    {
        "id": 17,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
        "name": {
            "english": "Pidgeotto",
            "japanese": "ピジョン",
            "chinese": "比比鸟",
            "french": "Roucoups"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 63,
            "Attack": 60,
            "Defense": 55,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 71
        }
    },
    {
        "id": 18,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        "name": {
            "english": "Pidgeot",
            "japanese": "ピジョット",
            "chinese": "大比鸟",
            "french": "Roucarnage"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 83,
            "Attack": 80,
            "Defense": 75,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 101
        }
    },
    {
        "id": 19,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        "name": {
            "english": "Rattata",
            "japanese": "コラッタ",
            "chinese": "小拉达",
            "french": "Rattata"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 30,
            "Attack": 56,
            "Defense": 35,
            "Sp. Attack": 25,
            "Sp. Defense": 35,
            "Speed": 72
        }
    },
    {
        "id": 20,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
        "name": {
            "english": "Raticate",
            "japanese": "ラッタ",
            "chinese": "拉达",
            "french": "Rattatac"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 81,
            "Defense": 60,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            "Speed": 97
        }
    },
    {
        "id": 21,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
        "name": {
            "english": "Spearow",
            "japanese": "オニスズメ",
            "chinese": "烈雀",
            "french": "Piafabec"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 60,
            "Defense": 30,
            "Sp. Attack": 31,
            "Sp. Defense": 31,
            "Speed": 70
        }
    },
    {
        "id": 22,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
        "name": {
            "english": "Fearow",
            "japanese": "オニドリル",
            "chinese": "大嘴雀",
            "french": "Rapasdepic"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 65,
            "Sp. Attack": 61,
            "Sp. Defense": 61,
            "Speed": 100
        }
    },
    {
        "id": 23,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
        "name": {
            "english": "Ekans",
            "japanese": "アーボ",
            "chinese": "阿柏蛇",
            "french": "Abo"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 35,
            "Attack": 60,
            "Defense": 44,
            "Sp. Attack": 40,
            "Sp. Defense": 54,
            "Speed": 55
        }
    },
    {
        "id": 24,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
        "name": {
            "english": "Arbok",
            "japanese": "アーボック",
            "chinese": "阿柏怪",
            "french": "Arbok"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 95,
            "Defense": 69,
            "Sp. Attack": 65,
            "Sp. Defense": 79,
            "Speed": 80
        }
    },
    {
        "id": 25,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        "name": {
            "english": "Pikachu",
            "japanese": "ピカチュウ",
            "chinese": "皮卡丘",
            "french": "Pikachu"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 35,
            "Attack": 55,
            "Defense": 40,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 90
        }
    }
]; 
export default DATA
