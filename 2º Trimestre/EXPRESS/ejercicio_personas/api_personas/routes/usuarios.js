var express = require('express');
var router = express.Router();

let usuarios = [
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "کیانا",
            last: "حسینی"
        },
        location: {
            street: {
                number: 7456,
                name: "دکتر علی شریعتی"
            },
            city: "کرمان",
            state: "کرمانشاه",
            country: "Iran",
            postcode: 82438,
            coordinates: {
                latitude: "28.5658",
                longitude: "81.5441"
            },
            timezone: {
                offset: "+9:00",
                description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        email: "khyn.hsyny@example.com",
        login: {
            uuid: "e18eb4ed-c3e6-4602-b5c7-9182a1edf22a",
            username: "heavylion208",
            password: "shojou",
            salt: "n4xAajEw",
            md5: "f9a9f63268ca8cd6e3f63c129bed25f6",
            sha1: "edb6d1408e50925aae1fd7e0b32de54509a01fbd",
            sha256: "2c5de4e77cff14a8b7481054a57227df764f7cdda7ee8da17f0d39f5f2a37249"
        },
        dob: {
            date: "1973-03-05T05:15:04.743Z",
            age: 49
        },
        registered: {
            date: "2004-07-20T07:38:44.394Z",
            age: 18
        },
        phone: "019-89116563",
        cell: "0936-907-2719",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/64.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg"
        },
        nat: "IR"
    },

    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Sarah",
            last: "Simmons"
        },
        location: {
            street: {
                number: 7221,
                name: "Church Street"
            },
            city: "Fermoy",
            state: "Donegal",
            country: "Ireland",
            postcode: 11502,
            coordinates: {
                latitude: "1.8299",
                longitude: "48.7485"
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran"
            }
        },
        email: "sarah.simmons@example.com",
        login: {
            uuid: "65bf1b3b-1fae-4dd5-9b16-305533f44f72",
            username: "blackpanda572",
            password: "joe123",
            salt: "vuoo0sq0",
            md5: "36abb58c1cc0dfc906abca4092a10d52",
            sha1: "a34d6479a3a1e9faf93d28f474e8855120bedc5f",
            sha256: "0bea113a5a2d8f2f1af18aa1ac33225904a3da76ba6b87209446edcfbf923f4a"
        },
        dob: {
            date: "1990-03-16T14:22:06.090Z",
            age: 32
        },
        registered:
        {
            date: "2007-05-10T23:24:29.678Z",
            age: 15
        },
        phone: "021-687-2085",
        cell: "081-321-9966",
        id: {
            name: "PPS",
            value: "8997218T"
        }, picture: {
            large: "https://randomuser.me/api/portraits/women/92.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg"
        }, nat: "IE"
    },

    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Lema",
            last: "Hartemink"
        },
        location: {
            street: {
                number: 1751,
                name: "De Venakker"
            },
            city: "Echt-Susteren",
            state: "Flevoland",
            country: "Netherlands",
            postcode: 35549,
            coordinates: {
                latitude: "36.1180",
                longitude: "9.1087"
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic"
            }
        },
        email: "lema.hartemink@example.com",
        login: {
            uuid: "d4f4bdc4-0d95-432e-aa9e-efb31ecc84f6",
            username: "beautifulladybug642",
            password: "ramrod",
            salt: "Z0goPQS0",
            md5: "478ac1ebdaa21034f9d8f87a0c900850",
            sha1: "63cad6bd6d6e79314f5fb2e4a994725ca9051876",
            sha256: "d9979ffa78b315da6955892c7c58d67db45d7bb79f365fd65607d5fb33e9e328"
        },
        dob: {
            date: "1960-07-20T18:07:44.560Z",
            age: 62
        },
        registered: {
            date: "2011-01-18T00:17:36.089Z",
            age: 11
        },
        phone: "(447)-770-3897",
        cell: "(408)-320-3991",
        id: {
            name: "BSN",
            value: "03050733"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg"
        },
        nat: "NL"
    },

    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Lester",
            last: "Jacobs"
        },
        location: {
            street: {
                number: 2235,
                name: "Rochestown Road"
            },
            city: "Killarney",
            state: "Sligo",
            country: "Ireland",
            postcode: 19778,
            coordinates: {
                latitude: "-58.4910",
                longitude: "-40.5319"
            },
            timezone: {
                offset: "-9:00",
                description: "Alaska"
            }
        },
        email: "lester.jacobs@example.com",
        login: {
            uuid: "324df13a-abfb-4079-88e6-7cbc15deb70d",
            username: "orangegorilla309",
            password: "armstron",
            salt: "bQLTlW53",
            md5: "41811f5f794e10914be879bd1f190d8f",
            sha1: "2840b8cec9a26d60024ee69542ee2cfa919ac9fd",
            sha256: "61dd6f48c6d56a58f8cfcc60ef80279df58745c541014447575588eb51df7381"
        },
        dob: {
            date: "1991-04-20T11:30:51.159Z",
            age: 31
        },
        registered: {
            date: "2005-04-28T21:39:33.487Z",
            age: 17
        },
        phone: "071-374-7378", cell: "081-304-8608",
        id: {
            name: "PPS",
            value: "7893226T"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/93.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg"
        },
        nat: "IE"
    },

    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Sophie",
            last: "King"
        },
        location: {
            street: {
                number: 2241,
                name: "Broadway"
            },
            city: "Birmingham",
            state: "Tayside",
            country: "United Kingdom",
            postcode: "SS1S 1UZ",
            coordinates: {
                latitude: "-33.0162",
                longitude: "-76.1136"
            },
            timezone: {
                offset: "-8:00",
                description: "Pacific Time (US & Canada)"
            }
        },
        email: "sophie.king@example.com",
        login: {
            uuid: "04ff3050-90b6-4593-a713-b7c10a9b2cee",
            username: "yellowfrog505",
            password: "golden",
            salt: "zS7ERq8w",
            md5: "e0a678563b2a8d2c33820df60ea63563",
            sha1: "3906a3158761c137bf31fd4383a675b29e2df55e",
            sha256: "279f8a6b5b95350f6f71a8b59cfd5c5d09730cdd6b88e3ffb3e536270e75d2e7"
        },
        dob: {
            date: "1979-02-13T11:17:01.903Z",
            age: 43
        },
        registered: {
            date: "2013-11-18T18:15:55.815Z",
            age: 9
        },
        phone: "016974 93528",
        cell: "0732-622-969",
        id: {
            name: "NINO",
            value: "NG 55 81 93 H"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/91.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/91.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/91.jpg"
        },
        nat: "GB"
    },

    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Alex",
            last: "Walters"
        },
        location: {
            street: {
                number: 6946,
                name: "Albert Road"
            },
            city: "Clane",
            state: "Meath",
            country: "Ireland",
            postcode: 47109,
            coordinates: {
                latitude: "-73.1691",
                longitude: "12.4351"
            },
            timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok"
            }
        },
        email: "alex.walters@example.com",
        login: {
            uuid: "63d2ef6b-7c5c-4d51-bda0-dbdf543a88e8",
            username: "angrybutterfly641",
            password: "celeb",
            salt: "SsA7VGHP",
            md5: "1177f0e64e069ca4361e6dea8279e5bc",
            sha1: "86cfe9396f4c1ea167bf3e5438cb6a1db98c5507",
            sha256: "dfe948b96f05296f7070ed4e5b1fe1ecc81ec200c453e9906af2c404d29a2407"
        },
        dob: {
            date: "1995-12-17T20:41:27.150Z",
            age: 27
        },
        registered: {
            date: "2009-06-06T13:36:38.565Z",
            age: 13
        },
        phone: "051-331-8222",
        cell: "081-911-3246",
        id: {
            name: "PPS",
            value: "1056998T"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/94.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg"
        },
        nat: "IE"
    },

    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Petúnia",
            last: "Silveira"
        },
        location: {
            street: {
                number: 2117,
                name: "Rua Boa Vista "
            },
            city: "Campo Grande",
            state: "Tocantins",
            country: "Brazil",
            postcode: 33417,
            coordinates: {
                latitude: "-75.8421",
                longitude: "-123.7805"
            },
            timezone: {
                offset: "-7:00",
                description: "Mountain Time (US & Canada)"
            }
        },
        email: "petunia.silveira@example.com",
        login: {
            uuid: "301ed6bf-7b4f-456f-97aa-fde525571714",
            username: "happytiger338",
            password: "clutch", "salt": "aLKzTo9s",
            md5: "1c09330ed29c3892f16d752e7b71ab49",
            sha1: "b5e4e8a7f71d0b94c79b15de2e71c573f9b242eb",
            sha256: "c4db566c6e13338f94cafec3d83d8514613ce16edab3ac23fb86d1898c965048"
        },
        dob: {
            date: "1947-02-14T14:10:21.643Z",
            age: 75
        },
        registered: {
            date: "2008-07-15T06:57:18.201Z",
            age: 14
        },
        phone: "(42) 8801-6819",
        cell: "(86) 2102-9167",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/86.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/86.jpg"
        },
        nat: "BR"
    },

    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Rayan",
            last: "Charles"
        },
        location: {
            street: {
                number: 4232,
                name: "Avenue Jean-Jaurès"
            },
            city: "Versailles",
            state: "Saône-et-Loire",
            country: "France",
            postcode: 96812,
            coordinates: {
                latitude: "60.3511",
                longitude: "-132.0358"
            },
            timezone: {
                offset: "-11:00",
                description: "Midway Island, Samoa"
            }
        },
        email: "rayan.charles@example.com",
        login: {
            uuid: "ca2b6af7-6ef5-499d-baed-4c1feeb1fca2",
            username: "blackwolf490",
            password: "kimber",
            salt: "mOpMBbyB",
            md5: "f8a667116c11957a7b4aaae4fcaeca8e",
            sha1: "104d1bc228f27cc6cd371ee0b860ed75ceca882e",
            sha256: "b88ce92f5b10e25bc56d9da7c84640ac388493962142f4c2b356b8386e7c5fb1"
        },
        dob: {
            date: "1987-11-08T11:25:51.921Z",
            age: 35
        },
        registered: {
            date: "2018-03-25T02:43:43.939Z",
            age: 4
        },
        phone: "04-36-24-80-53",
        cell: "06-39-01-59-73",
        id: {
            name: "INSEE",
            value: "1NNaN77362671 45"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/90.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/90.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/90.jpg"
        },
        nat: "FR"
    },

    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Mia",
            last: "Jacobs"
        },
        location: {
            street: {
                number: 3381,
                name: "Miller Ave"
            },
            city: "Hayward",
            state: "Nebraska",
            country: "United States",
            postcode: 10738,
            coordinates: {
                latitude: "61.4991",
                longitude: "-93.1034"
            },
            timezone: {
                offset: "+5:45",
                description: "Kathmandu"
            }
        },
        email: "mia.jacobs@example.com",
        login: {
            uuid: "865972c4-2df5-4370-9750-de694d72fbca",
            username: "whitezebra620",
            password: "santa",
            salt: "7H81cXKv",
            md5: "3a11dc30d3492f8754b5347c9b75e27b",
            sha1: "12e0a74e8880a5fc3e588523cc9cb7529cdb17eb",
            sha256: "0476692c213cce505163973bd875bf0e9100bbb7104b72d9f7c11143f589500b"
        },
        dob: {
            date: "1963-09-05T02:24:28.446Z",
            age: 59
        },
        registered: {
            date: "2018-08-10T23:53:19.377Z",
            age: 4
        },
        phone: "(471)-331-7600",
        cell: "(114)-974-0132",
        id: {
            name: "SSN",
            value: "128-77-9205"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/82.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg"
        },
        nat: "US"
    },

    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Cariza",
            last: "Vieira"
        },
        location: {
            street: {
                number: 9652,
                name: "Rua Carlos Gomes"
            }, city: "Marabá",
            state: "Distrito Federal",
            country: "Brazil",
            postcode: 83620,
            coordinates: {
                latitude: "-50.6552",
                longitude: "-149.5943"
            },
            timezone: {
                offset: "+5:30", description: "Bombay, Calcutta, Madras, New Delhi"
            }
        },
        email: "cariza.vieira@example.com",
        login: {
            uuid: "bdab4cd1-55e2-42ff-9d6b-48fb50867d38",
            username: "crazymeercat771",
            password: "kill",
            salt: "FllXbQ9H",
            md5: "af2453ba01e0fadcc499857a884d2b3a",
            sha1: "0ae871fe8220de0da76978148034831bd43736e3",
            sha256: "9d640ff8bdcbc584c8aee8a3077dc83541e8126f5c4fad9d219931c9c130e15e"
        },
        dob: {
            date: "1949-12-01T18:12:59.209Z",
            age: 73
        },
        registered: {
            date: "2007-04-02T15:06:27.874Z",
            age: 15
        },
        phone: "(78) 1208-7714",
        cell: "(33) 3038-1886",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/56.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/56.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/56.jpg"
        },
        nat: "BR"
    }
]

router.get('/', (req, res, next) => {
    res.send('Datos a consultar ususarios');
});

router.get('/all', (req, res, next) => {
    res.json({
        results: usuarios,
        number: usuarios.length,
    });
});

// Usuarios genero 

// /usuario/male
router.get('/male', (req,res,next)=>{
    res.json({
        results: usuarios.filter((element)=>{return element.gender == 'male'}),
        number: usuarios.filter((element)=>{return element.gender == 'male'}).length,
        });
});
// / usuarios/female  
router.get('/female',(req, res, next)=>{
    res.json({
        results: usuarios.filter((element)=>{return element.gender == 'female'}),
        number: usuarios.filter((element)=>{return element.gender == 'female'}).length,
    });
});


module.exports = router;