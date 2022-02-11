import "./App.css";
import "./component/ComponenteAdicional";

function App() {
  let ususarios = [
    {
      results: [
        {
          gender: "male",
          name: {
            title: "Monsieur",
            first: "Halil",
            last: "Robert",
          },
          location: {
            street: {
              number: 9830,
              name: "Rue de Gerland",
            },
            city: "Buus",
            state: "Ticino",
            country: "Switzerland",
            postcode: 6101,
            coordinates: {
              latitude: "-56.8003",
              longitude: "-158.7382",
            },
            timezone: {
              offset: "-1:00",
              description: "Azores, Cape Verde Islands",
            },
          },
          email: "halil.robert@example.com",
          login: {
            uuid: "6d6f72c1-972c-4deb-9425-611e99bf52a7",
            username: "bluegoose448",
            password: "daddyo",
            salt: "JElW24Q2",
            md5: "66eb79545f220433d5ba002aa72532a7",
            sha1: "aa4c2bed6aaa9663122c448da0e17cf1f015563c",
            sha256:
              "f481a241a0b8062f3b5df7f7ecc75dcc45ae713409830466e52c66ce86a029dc",
          },
          dob: {
            date: "1950-11-09T01:30:44.600Z",
            age: 72,
          },
          registered: {
            date: "2003-05-30T17:46:51.574Z",
            age: 19,
          },
          phone: "078 793 16 46",
          cell: "077 837 93 00",
          id: {
            name: "AVS",
            value: "756.3764.1803.14",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
          },
          nat: "CH",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Szymon",
            last: "Werner",
          },
          location: {
            street: {
              number: 3078,
              name: "Observatorie terrasse",
            },
            city: "Ilhaugen",
            state: "Trøndelag",
            country: "Norway",
            postcode: "0957",
            coordinates: {
              latitude: "18.9864",
              longitude: "30.2053",
            },
            timezone: {
              offset: "-11:00",
              description: "Midway Island, Samoa",
            },
          },
          email: "szymon.werner@example.com",
          login: {
            uuid: "d6be5115-ba71-4e15-96c6-df04a5dbfcb5",
            username: "sadfrog189",
            password: "kimberly",
            salt: "9USwsZFz",
            md5: "07cc34a645ef3d736e7c6f8f249b09a1",
            sha1: "72dce938938a8de159470856d51f1e08d486f88c",
            sha256:
              "5340a07f547a853303de2a096023e74df037ac8f8fce8678b3b881d380a139f9",
          },
          dob: {
            date: "1951-12-12T03:16:03.658Z",
            age: 71,
          },
          registered: {
            date: "2007-01-05T19:58:48.738Z",
            age: 15,
          },
          phone: "26618585",
          cell: "97697836",
          id: {
            name: "FN",
            value: "12125106739",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/94.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/94.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
          },
          nat: "NO",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Thomas",
            last: "Rygh",
          },
          location: {
            street: {
              number: 4887,
              name: "Strandgata",
            },
            city: "Andenes",
            state: "Bergen",
            country: "Norway",
            postcode: "4696",
            coordinates: {
              latitude: "-37.2786",
              longitude: "118.9128",
            },
            timezone: {
              offset: "-1:00",
              description: "Azores, Cape Verde Islands",
            },
          },
          email: "thomas.rygh@example.com",
          login: {
            uuid: "868b5124-f0a9-41e8-98bc-aecd5add1c4e",
            username: "redleopard254",
            password: "beatles",
            salt: "QcICt92B",
            md5: "b8cd563032990403ae29919da0ff3635",
            sha1: "c7c163b44a3bb4e7720eea94fe086dd75236576e",
            sha256:
              "8bd8ca5d4e9e883d4aff41674f9034c3702a86989ad05d570ed055a877b4ac84",
          },
          dob: {
            date: "1993-09-03T21:59:57.927Z",
            age: 29,
          },
          registered: {
            date: "2019-07-23T16:07:30.481Z",
            age: 3,
          },
          phone: "59176488",
          cell: "47178700",
          id: {
            name: "FN",
            value: "03099307365",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
          },
          nat: "NO",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Anne-Katrin",
            last: "Lesch",
          },
          location: {
            street: {
              number: 5037,
              name: "Wiesenstraße",
            },
            city: "Quakenbrück",
            state: "Hamburg",
            country: "Germany",
            postcode: 98445,
            coordinates: {
              latitude: "35.2998",
              longitude: "-30.0025",
            },
            timezone: {
              offset: "-4:00",
              description: "Atlantic Time (Canada), Caracas, La Paz",
            },
          },
          email: "anne-katrin.lesch@example.com",
          login: {
            uuid: "7d026b08-75fd-471b-82ef-25f2c97de0b2",
            username: "orangeleopard224",
            password: "radiohea",
            salt: "m3avaIM8",
            md5: "52e9c3810954fb432b31ec040dc12b4a",
            sha1: "27496bc20d02582382241c57c0880bbf46e74323",
            sha256:
              "9be8320d059adcbed6a47cbcfd641a31b1b0726eabfeff3d27a941ff90547f41",
          },
          dob: {
            date: "1971-08-25T08:59:23.560Z",
            age: 51,
          },
          registered: {
            date: "2009-07-16T00:11:07.053Z",
            age: 13,
          },
          phone: "0520-4077448",
          cell: "0174-4419111",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/72.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
          },
          nat: "DE",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "کیانا",
            last: "صدر",
          },
          location: {
            street: {
              number: 2871,
              name: "شهید محمد منتظری",
            },
            city: "ارومیه",
            state: "قم",
            country: "Iran",
            postcode: 45663,
            coordinates: {
              latitude: "46.0527",
              longitude: "110.1696",
            },
            timezone: {
              offset: "+5:30",
              description: "Bombay, Calcutta, Madras, New Delhi",
            },
          },
          email: "khyn.sdr@example.com",
          login: {
            uuid: "c10d84e1-8448-4fb5-b3e0-5089fb88276b",
            username: "beautifulwolf743",
            password: "amsterda",
            salt: "iXtSSfvt",
            md5: "e6e054e8ca42bb22eb867c6020e61ac6",
            sha1: "64caa40a5a789c6dda9597705a60ff9af0b34918",
            sha256:
              "facaeb1a0fe94323af481ef65371482dfa8c39dcd70c918370cd3100a3d409bc",
          },
          dob: {
            date: "1948-12-01T06:15:18.968Z",
            age: 74,
          },
          registered: {
            date: "2008-03-14T23:08:33.175Z",
            age: 14,
          },
          phone: "014-50803743",
          cell: "0922-194-3449",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/49.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
          },
          nat: "IR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Brian",
            last: "Coleman",
          },
          location: {
            street: {
              number: 1265,
              name: "Queensway",
            },
            city: "Manchester",
            state: "Bedfordshire",
            country: "United Kingdom",
            postcode: "HD90 0HW",
            coordinates: {
              latitude: "17.0776",
              longitude: "-97.8232",
            },
            timezone: {
              offset: "-3:00",
              description: "Brazil, Buenos Aires, Georgetown",
            },
          },
          email: "brian.coleman@example.com",
          login: {
            uuid: "070bb66c-6672-4f22-abae-6ab471862c4b",
            username: "organicgorilla945",
            password: "police",
            salt: "Lq15AoLH",
            md5: "f69f0e16bac9b93e048333613134dc00",
            sha1: "4366041f6fff4d7c01525a030920de9641cdbab7",
            sha256:
              "bcac5e203aa0fbf1dc2021cda2da289153a2930a349f9ab59139dce5d39739bc",
          },
          dob: {
            date: "1991-09-26T19:37:59.302Z",
            age: 31,
          },
          registered: {
            date: "2008-01-15T01:15:47.919Z",
            age: 14,
          },
          phone: "0112766 966 5996",
          cell: "0721-557-974",
          id: {
            name: "NINO",
            value: "AW 62 10 83 J",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/99.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
          },
          nat: "GB",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Kitty",
            last: "Bradley",
          },
          location: {
            street: {
              number: 8253,
              name: "Preston Rd",
            },
            city: "Irvine",
            state: "Massachusetts",
            country: "United States",
            postcode: 95156,
            coordinates: {
              latitude: "38.0743",
              longitude: "-149.8212",
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada), Bogota, Lima",
            },
          },
          email: "kitty.bradley@example.com",
          login: {
            uuid: "5511eb15-8178-40d0-9c74-342f7677e961",
            username: "crazyrabbit175",
            password: "dani",
            salt: "pzH7vkwv",
            md5: "1e288fe9490e8715d14e92404410d80b",
            sha1: "6c91e173f99cb40cbd55c34fdb81ff55e1d7139c",
            sha256:
              "ed37be34afa231efbcd906a541d4ba000e890877b8da1ef51ab859c52bae1dca",
          },
          dob: {
            date: "1967-02-28T16:06:01.866Z",
            age: 55,
          },
          registered: {
            date: "2011-08-22T13:33:31.069Z",
            age: 11,
          },
          phone: "(463)-248-2959",
          cell: "(547)-536-3544",
          id: {
            name: "SSN",
            value: "928-76-7052",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/35.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
          },
          nat: "US",
        },
        {
          gender: "female",
          name: {
            title: "Madame",
            first: "Elisabete",
            last: "Roussel",
          },
          location: {
            street: {
              number: 5549,
              name: "Rue de la Barre",
            },
            city: "Kallern",
            state: "Thurgau",
            country: "Switzerland",
            postcode: 3388,
            coordinates: {
              latitude: "-61.1293",
              longitude: "-56.0424",
            },
            timezone: {
              offset: "+5:30",
              description: "Bombay, Calcutta, Madras, New Delhi",
            },
          },
          email: "elisabete.roussel@example.com",
          login: {
            uuid: "2a80294d-e639-48b9-afd5-f796ca4afee2",
            username: "sadsnake244",
            password: "1970",
            salt: "keom7DKG",
            md5: "e3f7a4e2afb5d90de0bc8ff67fecf1fb",
            sha1: "719806868fb9f9d295af506cfb2d45e2244bb5ba",
            sha256:
              "b2ad173199d6df15196632304147da8b2bccb789ac1d3b1f825ecbb94988e1e8",
          },
          dob: {
            date: "1984-07-22T09:41:41.717Z",
            age: 38,
          },
          registered: {
            date: "2012-04-30T06:41:44.117Z",
            age: 10,
          },
          phone: "076 063 29 22",
          cell: "076 586 76 74",
          id: {
            name: "AVS",
            value: "756.0380.1683.96",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/90.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
          },
          nat: "CH",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Isak",
            last: "Bjørnestad",
          },
          location: {
            street: {
              number: 1511,
              name: "Kirkehaugsveien",
            },
            city: "Ydstebøhamn",
            state: "Troms - Romsa",
            country: "Norway",
            postcode: "6098",
            coordinates: {
              latitude: "-0.1040",
              longitude: "96.5231",
            },
            timezone: {
              offset: "+11:00",
              description: "Magadan, Solomon Islands, New Caledonia",
            },
          },
          email: "isak.bjornestad@example.com",
          login: {
            uuid: "33e04ca9-f999-4eea-b8ba-deb5d695e5a8",
            username: "happybear926",
            password: "blake",
            salt: "htHN8X5j",
            md5: "bc4306a1dde62328420b95cc7c826179",
            sha1: "932557dfc90f083c0712acd8df4f30631a0c6645",
            sha256:
              "c85650f37c785ddcd266b6a77927dcd6df7daf0ed2840f0dd2d573485b248499",
          },
          dob: {
            date: "1967-06-29T11:25:01.326Z",
            age: 55,
          },
          registered: {
            date: "2014-12-07T01:50:19.591Z",
            age: 8,
          },
          phone: "88755417",
          cell: "92207084",
          id: {
            name: "FN",
            value: "29066743703",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
          },
          nat: "NO",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "علیرضا",
            last: "سهيلي راد",
          },
          location: {
            street: {
              number: 3904,
              name: "میدان دکتر فاطمی / جهاد",
            },
            city: "آبادان",
            state: "خراسان شمالی",
            country: "Iran",
            postcode: 25357,
            coordinates: {
              latitude: "-57.3907",
              longitude: "-177.7197",
            },
            timezone: {
              offset: "-9:00",
              description: "Alaska",
            },
          },
          email: "aalyrd.shylyrd@example.com",
          login: {
            uuid: "f0fcd38f-3811-4c9c-8903-a940e5a5b30e",
            username: "goldenpeacock707",
            password: "maxwell1",
            salt: "4IpfrZ2S",
            md5: "23ebf7c313a589c3c6b31427074341f6",
            sha1: "bcd58788ef02f02fdf104a2db9c49c97d87e7d08",
            sha256:
              "4cb768e853bc17e08b8446c016b3ab69dc173e9563b2dfdef3058913d530a734",
          },
          dob: {
            date: "1947-03-20T12:04:49.141Z",
            age: 75,
          },
          registered: {
            date: "2010-10-07T02:28:43.375Z",
            age: 12,
          },
          phone: "094-91567158",
          cell: "0943-200-7635",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
          },
          nat: "IR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Daniel",
            last: "Hansen",
          },
          location: {
            street: {
              number: 7399,
              name: "Vordingborgvej",
            },
            city: "Ølstykke",
            state: "Midtjylland",
            country: "Denmark",
            postcode: 71537,
            coordinates: {
              latitude: "5.0277",
              longitude: "119.3227",
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada), Bogota, Lima",
            },
          },
          email: "daniel.hansen@example.com",
          login: {
            uuid: "35608c7e-4c27-4c98-ab6b-dfdc11bcfc92",
            username: "silverkoala833",
            password: "1a2b3c",
            salt: "XaYXYIlV",
            md5: "e9afb05db3bc02b7115c1ed4e247619b",
            sha1: "3cd6b3131568d50fafd3c8c531ffa57028970e08",
            sha256:
              "8f891a92181c8a2d4e90dd3107240a7d6b305e78962da797fcc245836f29515a",
          },
          dob: {
            date: "1945-12-09T10:59:08.496Z",
            age: 77,
          },
          registered: {
            date: "2015-10-04T09:32:10.305Z",
            age: 7,
          },
          phone: "67620080",
          cell: "44315158",
          id: {
            name: "CPR",
            value: "091245-3784",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/92.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
          },
          nat: "DK",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Jan",
            last: "Woll",
          },
          location: {
            street: {
              number: 4267,
              name: "Burgstraße",
            },
            city: "Neresheim",
            state: "Schleswig-Holstein",
            country: "Germany",
            postcode: 36426,
            coordinates: {
              latitude: "-45.1898",
              longitude: "-125.6175",
            },
            timezone: {
              offset: "+3:30",
              description: "Tehran",
            },
          },
          email: "jan.woll@example.com",
          login: {
            uuid: "89bfb751-e6e5-48cb-ba91-b31a42f015ca",
            username: "angrygoose199",
            password: "experienced",
            salt: "Nwav1dnn",
            md5: "8956fede7735197ac73cc3566dd35473",
            sha1: "6d156430fe6b9002dd9a9e6952bb107b1a3921af",
            sha256:
              "50efb779c3bc675ee3a830cdfca301e53167f23b4d648d3119dc5aaa2695bf4d",
          },
          dob: {
            date: "1986-02-08T06:50:43.857Z",
            age: 36,
          },
          registered: {
            date: "2010-10-22T18:35:43.542Z",
            age: 12,
          },
          phone: "0120-7968289",
          cell: "0173-9570730",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/84.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
          },
          nat: "DE",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Jessica",
            last: "Grant",
          },
          location: {
            street: {
              number: 2573,
              name: "O'Connell Avenue",
            },
            city: "Ashbourne",
            state: "Louth",
            country: "Ireland",
            postcode: 80301,
            coordinates: {
              latitude: "-20.3068",
              longitude: "-143.4560",
            },
            timezone: {
              offset: "+7:00",
              description: "Bangkok, Hanoi, Jakarta",
            },
          },
          email: "jessica.grant@example.com",
          login: {
            uuid: "f6b2c841-ff80-4da3-a0e5-5fd8103da76f",
            username: "heavyduck526",
            password: "absolut",
            salt: "gNO6JYvq",
            md5: "af309ed893fc47aac60af5472a074658",
            sha1: "f4c24ff635d330287a41a5c15bc8da905b968b14",
            sha256:
              "6a9cddbc912434af58d88f7d6131e8d10f397c33f408c33dc39b2f452dcfb5fe",
          },
          dob: {
            date: "1967-11-07T03:24:27.577Z",
            age: 55,
          },
          registered: {
            date: "2016-01-11T12:24:58.223Z",
            age: 6,
          },
          phone: "031-280-6503",
          cell: "081-641-0488",
          id: {
            name: "PPS",
            value: "6011500T",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
          },
          nat: "IE",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "رادین",
            last: "سلطانی نژاد",
          },
          location: {
            street: {
              number: 5516,
              name: "ولیعصر / مصدق",
            },
            city: "خوی",
            state: "قم",
            country: "Iran",
            postcode: 16057,
            coordinates: {
              latitude: "-45.6066",
              longitude: "-32.6887",
            },
            timezone: {
              offset: "-10:00",
              description: "Hawaii",
            },
          },
          email: "rdyn.sltnynjd@example.com",
          login: {
            uuid: "8f525544-c168-457b-a47e-4f9f86b95959",
            username: "goldenrabbit252",
            password: "ncc1701a",
            salt: "2m5dEnlR",
            md5: "98b9dee7f26b2e9a58e8d739630ff3fa",
            sha1: "5726ac13f7723870a60caa4e80d7ebda6858a174",
            sha256:
              "bf8e5fd09019f1bb0a78977b2662eabbc4ff40ad486c771a7e4f510e7925ea6c",
          },
          dob: {
            date: "1972-02-29T23:20:27.783Z",
            age: 50,
          },
          registered: {
            date: "2009-11-28T17:59:35.448Z",
            age: 13,
          },
          phone: "028-37241737",
          cell: "0938-653-1272",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/29.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
          },
          nat: "IR",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Buse",
            last: "Barbarosoğlu",
          },
          location: {
            street: {
              number: 9006,
              name: "Filistin Cd",
            },
            city: "Kırıkkale",
            state: "Zonguldak",
            country: "Turkey",
            postcode: 39091,
            coordinates: {
              latitude: "-0.6150",
              longitude: "-9.8249",
            },
            timezone: {
              offset: "+3:30",
              description: "Tehran",
            },
          },
          email: "buse.barbarosoglu@example.com",
          login: {
            uuid: "f4dbab08-4394-4e7b-8a6b-f2133f7980bd",
            username: "sadbear654",
            password: "meredith",
            salt: "eRh2254x",
            md5: "4a38e9899fa47d2246dda2b0ac263fc0",
            sha1: "b2b7ec4d0ab168fa4c36908571d5ff656c854e22",
            sha256:
              "657d6a568c09a73db17096dba44218a3ff107a88d9b234407ee9bc413ad003d0",
          },
          dob: {
            date: "1976-01-19T20:45:53.580Z",
            age: 46,
          },
          registered: {
            date: "2004-08-15T14:58:09.999Z",
            age: 18,
          },
          phone: "(283)-569-9144",
          cell: "(060)-165-4268",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/70.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
          },
          nat: "TR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Umut",
            last: "Durak",
          },
          location: {
            street: {
              number: 3374,
              name: "Filistin Cd",
            },
            city: "Mardin",
            state: "Bilecik",
            country: "Turkey",
            postcode: 30947,
            coordinates: {
              latitude: "-61.1538",
              longitude: "85.5595",
            },
            timezone: {
              offset: "-7:00",
              description: "Mountain Time (US & Canada)",
            },
          },
          email: "umut.durak@example.com",
          login: {
            uuid: "9ed450a5-3e34-459d-bb9b-705e129e5fac",
            username: "yellowladybug427",
            password: "photos",
            salt: "wtwkN5Ue",
            md5: "27edcbcc2b747507a4a595ace9aa5dea",
            sha1: "36e66e2c59411cf37dda64c4644756daf64bfc96",
            sha256:
              "f8eb86ed099fa93d28358addfc3c605c61e04670f2a4cc24f225aceb29f8f6ec",
          },
          dob: {
            date: "1962-04-28T08:28:55.506Z",
            age: 60,
          },
          registered: {
            date: "2012-01-15T19:34:33.174Z",
            age: 10,
          },
          phone: "(698)-181-4054",
          cell: "(014)-810-4359",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/59.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg",
          },
          nat: "TR",
        },
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Patrícia",
            last: "Pereira",
          },
          location: {
            street: {
              number: 9686,
              name: "Rua Pará ",
            },
            city: "Poços de Caldas",
            state: "Alagoas",
            country: "Brazil",
            postcode: 83022,
            coordinates: {
              latitude: "-60.7637",
              longitude: "-41.1460",
            },
            timezone: {
              offset: "+6:00",
              description: "Almaty, Dhaka, Colombo",
            },
          },
          email: "patricia.pereira@example.com",
          login: {
            uuid: "1f26fd72-58af-4ce2-a60e-6b4ecb9873cd",
            username: "lazysnake838",
            password: "sherlock",
            salt: "0PFgrMaA",
            md5: "6d4c9dc40a6f5dc67d584f78aba19f94",
            sha1: "94df494907aa549aefff80777b5a909fc17f1356",
            sha256:
              "4298c5f589044ecfbcf31a67c644d116a4ae2bd3c1e3a0228fb173681f45356e",
          },
          dob: {
            date: "1994-07-22T15:46:00.648Z",
            age: 28,
          },
          registered: {
            date: "2010-03-08T04:04:52.571Z",
            age: 12,
          },
          phone: "(45) 2476-9733",
          cell: "(77) 2610-1238",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/80.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
          },
          nat: "BR",
        },
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Nimo",
            last: "Cörvers",
          },
          location: {
            street: {
              number: 4695,
              name: "J.P. Beukemastraat",
            },
            city: "Nieuwer ter Aa",
            state: "Groningen",
            country: "Netherlands",
            postcode: 71962,
            coordinates: {
              latitude: "-48.7483",
              longitude: "-93.2959",
            },
            timezone: {
              offset: "-4:00",
              description: "Atlantic Time (Canada), Caracas, La Paz",
            },
          },
          email: "nimo.corvers@example.com",
          login: {
            uuid: "1c0d6d1a-a3a6-416b-852e-8414ddb95ba0",
            username: "silverwolf550",
            password: "iguana",
            salt: "XYmVHsVZ",
            md5: "3297f3eba344ac8ae3658be2da5714a9",
            sha1: "4d38a531c945a3e428b63fa2ddce8d0472de39ea",
            sha256:
              "e0f15bb20e643d416d8df2e17459251ff2830c0a197cd898d2d481b185cbbad0",
          },
          dob: {
            date: "1945-05-10T22:28:44.707Z",
            age: 77,
          },
          registered: {
            date: "2019-08-10T05:45:40.626Z",
            age: 3,
          },
          phone: "(857)-587-2495",
          cell: "(751)-301-7183",
          id: {
            name: "BSN",
            value: "46201354",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/66.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
          },
          nat: "NL",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Victoria",
            last: "Thompson",
          },
          location: {
            street: {
              number: 4377,
              name: "Pine Rd",
            },
            city: "Cartwright",
            state: "Alberta",
            country: "Canada",
            postcode: "S8D 0G6",
            coordinates: {
              latitude: "-2.1656",
              longitude: "27.1391",
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada), Bogota, Lima",
            },
          },
          email: "victoria.thompson@example.com",
          login: {
            uuid: "e7e28ab1-8e75-4301-ba58-51324bff6ac0",
            username: "heavypanda866",
            password: "24680",
            salt: "ryH2CQHg",
            md5: "1013ef147777667f2e4c1c0fe5b65664",
            sha1: "8f9f25115d2f42b218abfeb7501daf4875e3ab89",
            sha256:
              "0d81746ec56b44a1aa3ca489d1e333e33d0c0aa8af343e1f2573505cf45b1350",
          },
          dob: {
            date: "1968-05-07T18:26:20.225Z",
            age: 54,
          },
          registered: {
            date: "2013-07-30T15:31:54.154Z",
            age: 9,
          },
          phone: "621-424-3377",
          cell: "766-035-2562",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/54.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
          },
          nat: "CA",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Flenn",
            last: "Fields",
          },
          location: {
            street: {
              number: 8662,
              name: "Pearse Street",
            },
            city: "Lusk",
            state: "Waterford",
            country: "Ireland",
            postcode: 25260,
            coordinates: {
              latitude: "57.3846",
              longitude: "109.9411",
            },
            timezone: {
              offset: "+11:00",
              description: "Magadan, Solomon Islands, New Caledonia",
            },
          },
          email: "flenn.fields@example.com",
          login: {
            uuid: "d82c0b6d-0cea-4ca4-80c1-7752819d6cd6",
            username: "smallbird137",
            password: "1987",
            salt: "lkYYuV1x",
            md5: "3d15b57507c516916177ca91330514ba",
            sha1: "c3f94479ca57f566b351b6a0cb62f0a12c0a415b",
            sha256:
              "1046675b3dc4e225c566f794a21ebff454c0f36781e21e15a1a6cd8e8cb2f69d",
          },
          dob: {
            date: "1950-02-12T13:03:09.238Z",
            age: 72,
          },
          registered: {
            date: "2012-05-10T08:10:13.942Z",
            age: 10,
          },
          phone: "071-178-3367",
          cell: "081-678-4284",
          id: {
            name: "PPS",
            value: "5955118T",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/83.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg",
          },
          nat: "IE",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Maddison",
            last: "Garrett",
          },
          location: {
            street: {
              number: 3438,
              name: "Victoria Road",
            },
            city: "Bristol",
            state: "Staffordshire",
            country: "United Kingdom",
            postcode: "O8 9TQ",
            coordinates: {
              latitude: "-45.4396",
              longitude: "-145.8279",
            },
            timezone: {
              offset: "+1:00",
              description: "Brussels, Copenhagen, Madrid, Paris",
            },
          },
          email: "maddison.garrett@example.com",
          login: {
            uuid: "8f9639e4-a505-4d03-b506-1c7d330cfae3",
            username: "lazymeercat643",
            password: "tiffany1",
            salt: "lVCOiPSR",
            md5: "4253e325572a4d680215ffae35476324",
            sha1: "2f319bdd2e04d42aaddd56303691e1be5b79c0dc",
            sha256:
              "8a7dd52de43ca9f0f74f930467227217d13d7a1f20a2783afa538c33d995be3a",
          },
          dob: {
            date: "1964-07-19T18:55:32.759Z",
            age: 58,
          },
          registered: {
            date: "2003-07-21T20:17:00.793Z",
            age: 19,
          },
          phone: "0113527 216 1289",
          cell: "0773-994-648",
          id: {
            name: "NINO",
            value: "LJ 30 31 71 O",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/69.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
          },
          nat: "GB",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Robin",
            last: "Garnier",
          },
          location: {
            street: {
              number: 9735,
              name: "Rue de la Gare",
            },
            city: "Nantes",
            state: "Territoire De Belfort",
            country: "France",
            postcode: 44418,
            coordinates: {
              latitude: "62.6184",
              longitude: "176.2363",
            },
            timezone: {
              offset: "+5:45",
              description: "Kathmandu",
            },
          },
          email: "robin.garnier@example.com",
          login: {
            uuid: "5f9c1b50-ae75-4bd4-809c-1aae9d541737",
            username: "brownzebra282",
            password: "ccccccc",
            salt: "9nE7gn8m",
            md5: "da6004299d5db46c3d0b9ce95f9e2213",
            sha1: "af5baa5cfff154cb3a40009a0e20b05bf8420499",
            sha256:
              "9ae3f072af11d47f4b4d0353ded90dace3def0d440893ec61283f92f0df10c90",
          },
          dob: {
            date: "1963-05-21T17:50:58.614Z",
            age: 59,
          },
          registered: {
            date: "2008-11-04T04:53:21.123Z",
            age: 14,
          },
          phone: "01-75-63-07-43",
          cell: "06-78-53-99-90",
          id: {
            name: "INSEE",
            value: "1NNaN64793651 42",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/16.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
          },
          nat: "FR",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Vânia",
            last: "Campos",
          },
          location: {
            street: {
              number: 3972,
              name: "Rua Doze ",
            },
            city: "Ubá",
            state: "Rondônia",
            country: "Brazil",
            postcode: 27242,
            coordinates: {
              latitude: "-12.8100",
              longitude: "103.8435",
            },
            timezone: {
              offset: "+3:00",
              description: "Baghdad, Riyadh, Moscow, St. Petersburg",
            },
          },
          email: "vania.campos@example.com",
          login: {
            uuid: "943d1a90-6a63-407e-9a02-1811a25518e6",
            username: "ticklishfish651",
            password: "mustang2",
            salt: "WCuoDTWi",
            md5: "b54ac9e2dd58c4a3b74cf1c50b3676ae",
            sha1: "3e16971b567a42796a3c1d8a2b8177a7fd871272",
            sha256:
              "09aa55e16ed67cbcd8a0dff435d46cd949d938d51c70fa338b1920df22a44109",
          },
          dob: {
            date: "1953-05-17T17:36:59.391Z",
            age: 69,
          },
          registered: {
            date: "2005-04-20T06:45:19.873Z",
            age: 17,
          },
          phone: "(35) 5027-0422",
          cell: "(39) 9203-7017",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/4.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
          },
          nat: "BR",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Sara",
            last: "Christiansen",
          },
          location: {
            street: {
              number: 9062,
              name: "Bybækterrasserne",
            },
            city: "Bælum",
            state: "Sjælland",
            country: "Denmark",
            postcode: 56725,
            coordinates: {
              latitude: "10.5871",
              longitude: "-155.7683",
            },
            timezone: {
              offset: "0:00",
              description: "Western Europe Time, London, Lisbon, Casablanca",
            },
          },
          email: "sara.christiansen@example.com",
          login: {
            uuid: "d3e1733b-a4c2-4874-8e5b-462b5b5d9962",
            username: "sadlion475",
            password: "student",
            salt: "RaI8UiBq",
            md5: "876c9e19fd06190eb140fccd0dd346ec",
            sha1: "c26d109c199f585ef5e86619021824f546a28390",
            sha256:
              "85192f67faddcd024d5a576a9d276077fa37fefcab1e462e80f88434d55ac1ea",
          },
          dob: {
            date: "1983-01-23T20:02:47.012Z",
            age: 39,
          },
          registered: {
            date: "2008-07-17T06:11:25.893Z",
            age: 14,
          },
          phone: "49453498",
          cell: "45078057",
          id: {
            name: "CPR",
            value: "230183-9630",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/74.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg",
          },
          nat: "DK",
        },
        {
          gender: "female",
          name: {
            title: "Mademoiselle",
            first: "Theresia",
            last: "Louis",
          },
          location: {
            street: {
              number: 6796,
              name: "Avenue du Fort-Caire",
            },
            city: "Fläsch",
            state: "Zug",
            country: "Switzerland",
            postcode: 2921,
            coordinates: {
              latitude: "-40.8362",
              longitude: "107.5216",
            },
            timezone: {
              offset: "-3:00",
              description: "Brazil, Buenos Aires, Georgetown",
            },
          },
          email: "theresia.louis@example.com",
          login: {
            uuid: "4ec23c9e-9ed5-41b2-9dee-69b0992b3d58",
            username: "greengorilla992",
            password: "peng",
            salt: "VunhgyKO",
            md5: "a22d80ee872096ec3175eeb63bdbe244",
            sha1: "7380f7aee5dbf256c2d337be55f00564e4cb9809",
            sha256:
              "938e6880fba607cd7ccf30c5e8a3f5f3cc8402ce02db56b4f8c2a76aea8fbd32",
          },
          dob: {
            date: "1973-05-21T19:22:59.390Z",
            age: 49,
          },
          registered: {
            date: "2014-04-08T02:50:51.031Z",
            age: 8,
          },
          phone: "077 159 44 48",
          cell: "075 429 70 88",
          id: {
            name: "AVS",
            value: "756.1112.1347.73",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/49.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
          },
          nat: "CH",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Celina",
            last: "Bell",
          },
          location: {
            street: {
              number: 3307,
              name: "Saddle Dr",
            },
            city: "Winston–Salem",
            state: "South Carolina",
            country: "United States",
            postcode: 43300,
            coordinates: {
              latitude: "22.0407",
              longitude: "179.0926",
            },
            timezone: {
              offset: "+2:00",
              description: "Kaliningrad, South Africa",
            },
          },
          email: "celina.bell@example.com",
          login: {
            uuid: "f2770903-a873-4bce-be43-599235552aec",
            username: "sadpeacock678",
            password: "robinson",
            salt: "TbdmoQHy",
            md5: "61516028a88147bc578a9552a487f296",
            sha1: "ff7e735dd337946988eb358f286fb5a389d77d55",
            sha256:
              "b46c2def1a782feda892af88b34778a72e07822b8bfe674d89c113be3131cb39",
          },
          dob: {
            date: "1960-07-30T10:35:31.994Z",
            age: 62,
          },
          registered: {
            date: "2006-08-23T07:12:53.822Z",
            age: 16,
          },
          phone: "(028)-851-7174",
          cell: "(075)-956-0561",
          id: {
            name: "SSN",
            value: "124-96-4309",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/18.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
          },
          nat: "US",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Trudel",
            last: "Wulff",
          },
          location: {
            street: {
              number: 7642,
              name: "Ahornweg",
            },
            city: "Tittmoning",
            state: "Baden-Württemberg",
            country: "Germany",
            postcode: 45214,
            coordinates: {
              latitude: "-76.6570",
              longitude: "68.4394",
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada), Bogota, Lima",
            },
          },
          email: "trudel.wulff@example.com",
          login: {
            uuid: "f755899f-c2e3-4709-a027-d30758e18cc7",
            username: "whiteostrich897",
            password: "wicked",
            salt: "dGGhvMTX",
            md5: "304d0fba08f8c0d019d5a1352bfd17fe",
            sha1: "7bc8ddeec61c7d2ea738947074192ceaa5794e67",
            sha256:
              "566205d4d86694ff4349906dd35396d678a11b622cc5e336bc6e577e4795efd1",
          },
          dob: {
            date: "1957-02-21T12:08:50.863Z",
            age: 65,
          },
          registered: {
            date: "2016-03-31T12:29:33.485Z",
            age: 6,
          },
          phone: "0640-5255746",
          cell: "0174-8896948",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/81.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
          },
          nat: "DE",
        },
        {
          gender: "female",
          name: {
            title: "Mademoiselle",
            first: "Lena",
            last: "Durand",
          },
          location: {
            street: {
              number: 9425,
              name: "Rue Laure-Diebold",
            },
            city: "Ueken",
            state: "Aargau",
            country: "Switzerland",
            postcode: 3097,
            coordinates: {
              latitude: "53.0212",
              longitude: "168.7199",
            },
            timezone: {
              offset: "-7:00",
              description: "Mountain Time (US & Canada)",
            },
          },
          email: "lena.durand@example.com",
          login: {
            uuid: "7b0cfa81-4906-4c8d-9e7d-7847bafc56cb",
            username: "lazyduck464",
            password: "pancho",
            salt: "WLVR7Hta",
            md5: "cf10bc693855164025ec78613afbd502",
            sha1: "b3c197ec785343db0e7483b25cfefede3e33531e",
            sha256:
              "3cef3aa5f72dccff6a12a76a6930bb89d68e3ed018051a1395517b2c9abb85c9",
          },
          dob: {
            date: "1969-03-23T14:51:56.520Z",
            age: 53,
          },
          registered: {
            date: "2016-01-11T20:15:24.898Z",
            age: 6,
          },
          phone: "076 896 93 42",
          cell: "075 825 94 50",
          id: {
            name: "AVS",
            value: "756.3407.3614.47",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/51.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/51.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/51.jpg",
          },
          nat: "CH",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Rose",
            last: "Martinez",
          },
          location: {
            street: {
              number: 2686,
              name: "Boghall Road",
            },
            city: "Midleton",
            state: "Sligo",
            country: "Ireland",
            postcode: 46333,
            coordinates: {
              latitude: "-53.1732",
              longitude: "38.0595",
            },
            timezone: {
              offset: "+5:45",
              description: "Kathmandu",
            },
          },
          email: "rose.martinez@example.com",
          login: {
            uuid: "20146dbf-b284-47c9-abcd-3c84cd7cf80f",
            username: "happymouse911",
            password: "cicero",
            salt: "JVQcQB82",
            md5: "9000b6845552b0061d6248ad0551dab9",
            sha1: "b6b412772507fdb09a48275e70ff1a69913f2be4",
            sha256:
              "9e8a6446c85f9d937e837a0858b17ae6024557250537ea1293e550222757f1e3",
          },
          dob: {
            date: "1952-06-09T20:02:53.793Z",
            age: 70,
          },
          registered: {
            date: "2017-03-02T20:31:59.993Z",
            age: 5,
          },
          phone: "061-398-9260",
          cell: "081-523-2766",
          id: {
            name: "PPS",
            value: "8800741T",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/73.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
          },
          nat: "IE",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Jeppe",
            last: "Pedersen",
          },
          location: {
            street: {
              number: 9132,
              name: "Søndermarken",
            },
            city: "Sønder Stenderup",
            state: "Syddanmark",
            country: "Denmark",
            postcode: 58597,
            coordinates: {
              latitude: "34.1899",
              longitude: "132.4183",
            },
            timezone: {
              offset: "-3:00",
              description: "Brazil, Buenos Aires, Georgetown",
            },
          },
          email: "jeppe.pedersen@example.com",
          login: {
            uuid: "8c8cb47e-8b83-4513-82d5-7a41169728fe",
            username: "smallzebra893",
            password: "route66",
            salt: "RPlThTlO",
            md5: "68a40cf9bd1b35f1610d9cb58da60f69",
            sha1: "98723264996ae60a03d3520221a93561b4d4e087",
            sha256:
              "b74383c7967ff05009c17e805a35d62be75ca488914c7958585ce8f4d49e1420",
          },
          dob: {
            date: "1974-02-10T00:22:54.625Z",
            age: 48,
          },
          registered: {
            date: "2014-07-22T14:19:57.543Z",
            age: 8,
          },
          phone: "07896618",
          cell: "91714567",
          id: {
            name: "CPR",
            value: "100274-3989",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/19.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg",
          },
          nat: "DK",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Naël",
            last: "Arnaud",
          },
          location: {
            street: {
              number: 9170,
              name: "Avenue Jean-Jaurès",
            },
            city: "Pau",
            state: "Loiret",
            country: "France",
            postcode: 18800,
            coordinates: {
              latitude: "70.5042",
              longitude: "-85.2997",
            },
            timezone: {
              offset: "+3:00",
              description: "Baghdad, Riyadh, Moscow, St. Petersburg",
            },
          },
          email: "nael.arnaud@example.com",
          login: {
            uuid: "7b21e468-d7a8-4107-bd7a-8a3264655cbb",
            username: "crazypanda303",
            password: "badman",
            salt: "ICnitOO5",
            md5: "c810c8bd66c2230d0ba49ea9537258f2",
            sha1: "9c36fe73fa7dbd34751b92c6d0e43ba39799bb79",
            sha256:
              "dcabdaf127f14dc190dafc8c809656c2582a6201a8c6663c8653c158738a5aa8",
          },
          dob: {
            date: "1990-08-14T21:33:52.440Z",
            age: 32,
          },
          registered: {
            date: "2019-05-03T19:01:35.293Z",
            age: 3,
          },
          phone: "01-87-20-59-16",
          cell: "06-58-16-50-97",
          id: {
            name: "INSEE",
            value: "1NNaN41175485 85",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/37.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
          },
          nat: "FR",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Fena",
            last: "Gomes",
          },
          location: {
            street: {
              number: 3464,
              name: "Rua Carlos Gomes",
            },
            city: "Porto Velho",
            state: "Maranhão",
            country: "Brazil",
            postcode: 59484,
            coordinates: {
              latitude: "24.0878",
              longitude: "41.1357",
            },
            timezone: {
              offset: "-12:00",
              description: "Eniwetok, Kwajalein",
            },
          },
          email: "fena.gomes@example.com",
          login: {
            uuid: "05849a3b-d204-49a1-93fd-a9e222cd5cd6",
            username: "blackbutterfly932",
            password: "hotbox",
            salt: "OxenNnSY",
            md5: "db0f3087015923e32ebc75070c6f8661",
            sha1: "01179ea18bf69cd79e29f747ac49e7c8e1ba08ce",
            sha256:
              "bc47691383d8a035da63ea15ce5fb4ebf300f5d4e0ac363853a909bd543f0585",
          },
          dob: {
            date: "1970-03-26T21:34:33.522Z",
            age: 52,
          },
          registered: {
            date: "2006-11-05T12:35:19.357Z",
            age: 16,
          },
          phone: "(57) 0536-7389",
          cell: "(50) 4388-8988",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/22.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
          },
          nat: "BR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Lee",
            last: "Fleming",
          },
          location: {
            street: {
              number: 3759,
              name: "Oak Ridge Ln",
            },
            city: "Houston",
            state: "New Hampshire",
            country: "United States",
            postcode: 99238,
            coordinates: {
              latitude: "-84.7583",
              longitude: "108.4116",
            },
            timezone: {
              offset: "+3:30",
              description: "Tehran",
            },
          },
          email: "lee.fleming@example.com",
          login: {
            uuid: "1019de1b-c55a-4bac-973d-78f9921d9da4",
            username: "beautifulpanda981",
            password: "spank",
            salt: "boyUT8VJ",
            md5: "1b1a2ac1ab30dac1569f982f4fc2e86b",
            sha1: "5a1764f669a49153dd0ba6bf2d1b764c5b3d0b1b",
            sha256:
              "5eb641903fe8077247d886ea504abd6b4207d3e292474e83cd564b0950c5eef2",
          },
          dob: {
            date: "1958-07-30T16:29:17.086Z",
            age: 64,
          },
          registered: {
            date: "2011-02-18T07:45:21.529Z",
            age: 11,
          },
          phone: "(943)-395-5582",
          cell: "(245)-123-5679",
          id: {
            name: "SSN",
            value: "945-79-3590",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/0.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
          },
          nat: "US",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Lucy",
            last: "Wright",
          },
          location: {
            street: {
              number: 6451,
              name: "Great King Street",
            },
            city: "Palmerston North",
            state: "Manawatu-Wanganui",
            country: "New Zealand",
            postcode: 55459,
            coordinates: {
              latitude: "-78.7369",
              longitude: "-8.3009",
            },
            timezone: {
              offset: "-10:00",
              description: "Hawaii",
            },
          },
          email: "lucy.wright@example.com",
          login: {
            uuid: "5e2df2c7-a2ab-4be7-9951-b5f4374303d9",
            username: "silverfrog713",
            password: "shibby",
            salt: "QomSTzXj",
            md5: "a3e96522310c8a13b31311906d9322f0",
            sha1: "660026dd698aa26917a30b55a164809bca7ba621",
            sha256:
              "7c2dffe5538e37faf7a004c8d63a96c51e64b2f8bc302c53c274e6171c9e6e3a",
          },
          dob: {
            date: "1993-07-22T16:23:57.371Z",
            age: 29,
          },
          registered: {
            date: "2019-02-08T06:10:13.495Z",
            age: 3,
          },
          phone: "(190)-833-0841",
          cell: "(485)-354-5511",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
          },
          nat: "NZ",
        },
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Bertine",
            last: "Kleven",
          },
          location: {
            street: {
              number: 8789,
              name: "Bjørnerudveien",
            },
            city: "Spydeberg",
            state: "Aust-Agder",
            country: "Norway",
            postcode: "1291",
            coordinates: {
              latitude: "22.7814",
              longitude: "63.7008",
            },
            timezone: {
              offset: "+4:00",
              description: "Abu Dhabi, Muscat, Baku, Tbilisi",
            },
          },
          email: "bertine.kleven@example.com",
          login: {
            uuid: "32f6583b-4292-43de-85ec-55e98a93639e",
            username: "orangeswan390",
            password: "testerer",
            salt: "vZjFqgT0",
            md5: "23bef6730d9f3654f51e67b11b4a8f30",
            sha1: "b337d56ae2f7e81ce0ee730ea4b63f271a240027",
            sha256:
              "4da8da4275c961ab4c6fd141c16e93d5e2b9a0400568d83efd51b294fb585583",
          },
          dob: {
            date: "1988-10-29T01:39:56.923Z",
            age: 34,
          },
          registered: {
            date: "2008-04-21T18:12:54.033Z",
            age: 14,
          },
          phone: "84315317",
          cell: "48002246",
          id: {
            name: "FN",
            value: "29108823834",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/20.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
          },
          nat: "NO",
        },
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Fride",
            last: "By",
          },
          location: {
            street: {
              number: 3827,
              name: "Bård Skolemesters vei",
            },
            city: "Eikefjord",
            state: "Sogn og Fjordane",
            country: "Norway",
            postcode: "9194",
            coordinates: {
              latitude: "30.7284",
              longitude: "-126.7071",
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada), Bogota, Lima",
            },
          },
          email: "fride.by@example.com",
          login: {
            uuid: "068fbb5e-e252-4211-851e-1de058df7fd9",
            username: "bluecat741",
            password: "sabrina",
            salt: "zptXgPny",
            md5: "8e746cd17b79438f29827a10d2900ed2",
            sha1: "8193d39e789e932897bff416929fee45c658ae79",
            sha256:
              "ba050c434571f3ff38398a22b2ae62be02bde39a51a83863f01f9cb1ec5eb459",
          },
          dob: {
            date: "1994-09-23T08:35:51.626Z",
            age: 28,
          },
          registered: {
            date: "2003-03-23T23:03:50.452Z",
            age: 19,
          },
          phone: "24730840",
          cell: "98938321",
          id: {
            name: "FN",
            value: "23099412666",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/22.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
          },
          nat: "NO",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Siiri",
            last: "Hamalainen",
          },
          location: {
            street: {
              number: 3132,
              name: "Pyynikintie",
            },
            city: "Punkalaidun",
            state: "Kainuu",
            country: "Finland",
            postcode: 81372,
            coordinates: {
              latitude: "-55.7685",
              longitude: "-73.8380",
            },
            timezone: {
              offset: "+4:30",
              description: "Kabul",
            },
          },
          email: "siiri.hamalainen@example.com",
          login: {
            uuid: "15dc486d-40c5-4937-b944-bbed53cfdc42",
            username: "orangeswan686",
            password: "morris",
            salt: "ZADHos9N",
            md5: "90cc62d6deaf03ce9f05b3b0b900cba8",
            sha1: "91d6814c6d2e6bccee12d0db897a332ae6026ef6",
            sha256:
              "4ab5358b459e474c14b8ebfb0e32766a3b864e99d0f29cb0c42cbc037dc8bef2",
          },
          dob: {
            date: "1995-03-06T18:15:15.517Z",
            age: 27,
          },
          registered: {
            date: "2012-03-30T22:12:35.517Z",
            age: 10,
          },
          phone: "06-054-012",
          cell: "047-787-79-93",
          id: {
            name: "HETU",
            value: "NaNNA724undefined",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/2.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
          },
          nat: "FI",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Laura",
            last: "Jensen",
          },
          location: {
            street: {
              number: 9033,
              name: "Gartnervænget",
            },
            city: "Skaerbaek",
            state: "Nordjylland",
            country: "Denmark",
            postcode: 28799,
            coordinates: {
              latitude: "36.6526",
              longitude: "-41.8813",
            },
            timezone: {
              offset: "0:00",
              description: "Western Europe Time, London, Lisbon, Casablanca",
            },
          },
          email: "laura.jensen@example.com",
          login: {
            uuid: "ef7a6d8d-fb8a-4eb6-a5cc-15af603ce276",
            username: "blacktiger169",
            password: "playboy1",
            salt: "ybXGma5v",
            md5: "7a8d89422b5489aa326defb64f2868fe",
            sha1: "9705fdc7bde6de19f2f9ceccf99f3c5adbd82512",
            sha256:
              "583200c3c69ace6276a33932feb847665bcda2a619c13e7474b8dabc71858a4b",
          },
          dob: {
            date: "1981-04-29T14:20:38.563Z",
            age: 41,
          },
          registered: {
            date: "2010-12-31T15:27:28.125Z",
            age: 12,
          },
          phone: "75205829",
          cell: "31076957",
          id: {
            name: "CPR",
            value: "290481-5149",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/81.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
          },
          nat: "DK",
        },
        {
          gender: "male",
          name: {
            title: "Monsieur",
            first: "Nico",
            last: "Gautier",
          },
          location: {
            street: {
              number: 4613,
              name: "Rue Laure-Diebold",
            },
            city: "Begnins",
            state: "Luzern",
            country: "Switzerland",
            postcode: 8203,
            coordinates: {
              latitude: "-9.1131",
              longitude: "-4.3238",
            },
            timezone: {
              offset: "-7:00",
              description: "Mountain Time (US & Canada)",
            },
          },
          email: "nico.gautier@example.com",
          login: {
            uuid: "c242579d-5f06-4550-92c2-974d5bfa9e6f",
            username: "ticklishdog959",
            password: "redrose",
            salt: "ktyQuc0p",
            md5: "04e38038f5d6b5bb7be44a9418811459",
            sha1: "a30c148dc78fc0c5dc7f8ef9bb10a52a7d861a84",
            sha256:
              "427bf898e4fe2c3898ad32ac1897600b0fd203fe690f9e42c68ab7d0028bf3b8",
          },
          dob: {
            date: "1946-05-18T20:06:26.367Z",
            age: 76,
          },
          registered: {
            date: "2018-02-22T12:35:24.056Z",
            age: 4,
          },
          phone: "077 939 04 34",
          cell: "075 057 07 50",
          id: {
            name: "AVS",
            value: "756.0412.3707.65",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/98.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg",
          },
          nat: "CH",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Eino",
            last: "Lampi",
          },
          location: {
            street: {
              number: 5290,
              name: "Esplanadi",
            },
            city: "Lemi",
            state: "Päijät-Häme",
            country: "Finland",
            postcode: 53453,
            coordinates: {
              latitude: "-52.0534",
              longitude: "-4.0660",
            },
            timezone: {
              offset: "+7:00",
              description: "Bangkok, Hanoi, Jakarta",
            },
          },
          email: "eino.lampi@example.com",
          login: {
            uuid: "e13f333f-3562-42b8-a40b-75cd85fff097",
            username: "tinywolf657",
            password: "veronica",
            salt: "sM5qeNVa",
            md5: "ff750e49f53e8a548840533c5053b411",
            sha1: "5c3d715b683a064d8f0c025e9b28141ca5e39ebc",
            sha256:
              "63ecd6d36ecd6fd65cb5842359d6cd36ed14cf388bbc29dd518c6e4b92f2f036",
          },
          dob: {
            date: "1954-02-10T19:47:51.898Z",
            age: 68,
          },
          registered: {
            date: "2008-03-18T07:03:08.658Z",
            age: 14,
          },
          phone: "04-896-096",
          cell: "048-158-71-53",
          id: {
            name: "HETU",
            value: "NaNNA135undefined",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/33.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
          },
          nat: "FI",
        },
      ],
    },
  ];

  let headerCol1 = "contenido columna 1";
  let headerCol2 = "contenido columano 2";

  function crearHeader(numero) {
    switch (numero) {
      case 1:
        return <p>Este parrafo aparece si me pasas 1</p>;

      case 2:
        return <p>Este parrafo aparece si me pasas 2</p>;

      case 3:
        return <p>Este parrafo aparece si me pasas 3</p>;

      default:
        return <p>Este parrafo aparece si me pasas algo diferente</p>;
    }
  }

  let varableIf = true;
  let numeroIf = 11;

  return (
    <div className="App container-fluid">
      <h1>Aplicacion React</h1>
      <p>Primera aplicación React</p>
      <div className="row">
        <div className=" col columna-uno">
          <h2>Elementos de un componente</h2>
          {/* <p>{headerCol1}</p> */}
          <p>{crearHeader(1)}</p>

          <h3>Sentencia if</h3>

          <div>
            {
              /* CUANDO HAY DOS RESPUESTAS --> condicion ? cuando es verdad : cuando es mentira
              CUANDO SOLO HAY UNA RESPUESTA --> condicion verdadera &&
              */
            
              /*
              varableIf && numeroIf > 10 ? (
                <div className="alert alert-primary" role={alert}>
                  la condicion se ha cumplido!!
                </div>
              ) : (
                <div className="alert alert-danger" role={alert}>
                  la condicion es Falsa!!
                </div>
              )
              */
              varableIf && numeroIf > 10 &&(
                <div className="alert alert-primary" role={alert}>
                  La condicion se ha cumplido!!
                </div>
              ) 

            }

          </div>
        </div>

        <div className="col columna-dos">
          <h2>Funcionamiento de un componenete</h2>
          {/* <p>{headerCol2}</p> */}
          <p>{crearHeader(2)}</p>
          <div className="row">
            {/* {ususarios.map((Element, index) => {
      <div className="col" key={index}>
        <div className="card">
          <img
            src={Element.img.large}
            className="card-img-top"
            alt="imagen carta"
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              {Element.name.first} {Element.name.last}
            </h5>
            <p className="card-text">{Element.email}</p>
          </div>
        </div>
      </div>;
    })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import "./component/ComponenteAdicional";

function App() {
  let usuariosApi = {

      results: [
        {
          gender: "male",
          name: {
            title: "Monsieur",
            first: "Halil",
            last: "Robert",
          },
          location: {
            street: {
              number: 9830,
              name: "Rue de Gerland",
            },
            city: "Buus",
            state: "Ticino",
            country: "Switzerland",
            postcode: 6101,
            coordinates: {
              latitude: "-56.8003",
              longitude: "-158.7382",
            },
            timezone: {
              offset: "-1:00",
              description: "Azores, Cape Verde Islands",
            },
          },
          email: "halil.robert@example.com",
          login: {
            uuid: "6d6f72c1-972c-4deb-9425-611e99bf52a7",
            username: "bluegoose448",
            password: "daddyo",
            salt: "JElW24Q2",
            md5: "66eb79545f220433d5ba002aa72532a7",
            sha1: "aa4c2bed6aaa9663122c448da0e17cf1f015563c",
            sha256:
              "f481a241a0b8062f3b5df7f7ecc75dcc45ae713409830466e52c66ce86a029dc",
          },
          dob: {
            date: "1950-11-09T01:30:44.600Z",
            age: 72,
          },
          registered: {
            date: "2003-05-30T17:46:51.574Z",
            age: 19,
          },
          phone: "078 793 16 46",
          cell: "077 837 93 00",
          id: {
            name: "AVS",
            value: "756.3764.1803.14",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
          },
          nat: "CH",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Szymon",
            last: "Werner",
          },
          location: {
            street: {
              number: 3078,
              name: "Observatorie terrasse",
            },
            city: "Ilhaugen",
            state: "Trøndelag",
            country: "Norway",
            postcode: "0957",
            coordinates: {
              latitude: "18.9864",
              longitude: "30.2053",
            },
            timezone: {
              offset: "-11:00",
              description: "Midway Island, Samoa",
            },
          },
          email: "szymon.werner@example.com",
          login: {
            uuid: "d6be5115-ba71-4e15-96c6-df04a5dbfcb5",
            username: "sadfrog189",
            password: "kimberly",
            salt: "9USwsZFz",
            md5: "07cc34a645ef3d736e7c6f8f249b09a1",
            sha1: "72dce938938a8de159470856d51f1e08d486f88c",
            sha256:
              "5340a07f547a853303de2a096023e74df037ac8f8fce8678b3b881d380a139f9",
          },
          dob: {
            date: "1951-12-12T03:16:03.658Z",
            age: 71,
          },
          registered: {
            date: "2007-01-05T19:58:48.738Z",
            age: 15,
          },
          phone: "26618585",
          cell: "97697836",
          id: {
            name: "FN",
            value: "12125106739",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/94.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/94.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
          },
          nat: "NO",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Thomas",
            last: "Rygh",
          },
          location: {
            street: {
              number: 4887,
              name: "Strandgata",
            },
            city: "Andenes",
            state: "Bergen",
            country: "Norway",
            postcode: "4696",
            coordinates: {
              latitude: "-37.2786",
              longitude: "118.9128",
            },
            timezone: {
              offset: "-1:00",
              description: "Azores, Cape Verde Islands",
            },
          },
          email: "thomas.rygh@example.com",
          login: {
            uuid: "868b5124-f0a9-41e8-98bc-aecd5add1c4e",
            username: "redleopard254",
            password: "beatles",
            salt: "QcICt92B",
            md5: "b8cd563032990403ae29919da0ff3635",
            sha1: "c7c163b44a3bb4e7720eea94fe086dd75236576e",
            sha256:
              "8bd8ca5d4e9e883d4aff41674f9034c3702a86989ad05d570ed055a877b4ac84",
          },
          dob: {
            date: "1993-09-03T21:59:57.927Z",
            age: 29,
          },
          registered: {
            date: "2019-07-23T16:07:30.481Z",
            age: 3,
          },
          phone: "59176488",
          cell: "47178700",
          id: {
            name: "FN",
            value: "03099307365",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
          },
          nat: "NO",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Anne-Katrin",
            last: "Lesch",
          },
          location: {
            street: {
              number: 5037,
              name: "Wiesenstraße",
            },
            city: "Quakenbrück",
            state: "Hamburg",
            country: "Germany",
            postcode: 98445,
            coordinates: {
              latitude: "35.2998",
              longitude: "-30.0025",
            },
            timezone: {
              offset: "-4:00",
              description: "Atlantic Time (Canada), Caracas, La Paz",
            },
          },
          email: "anne-katrin.lesch@example.com",
          login: {
            uuid: "7d026b08-75fd-471b-82ef-25f2c97de0b2",
            username: "orangeleopard224",
            password: "radiohea",
            salt: "m3avaIM8",
            md5: "52e9c3810954fb432b31ec040dc12b4a",
            sha1: "27496bc20d02582382241c57c0880bbf46e74323",
            sha256:
              "9be8320d059adcbed6a47cbcfd641a31b1b0726eabfeff3d27a941ff90547f41",
          },
          dob: {
            date: "1971-08-25T08:59:23.560Z",
            age: 51,
          },
          registered: {
            date: "2009-07-16T00:11:07.053Z",
            age: 13,
          },
          phone: "0520-4077448",
          cell: "0174-4419111",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/72.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
          },
          nat: "DE",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "کیانا",
            last: "صدر",
          },
          location: {
            street: {
              number: 2871,
              name: "شهید محمد منتظری",
            },
            city: "ارومیه",
            state: "قم",
            country: "Iran",
            postcode: 45663,
            coordinates: {
              latitude: "46.0527",
              longitude: "110.1696",
            },
            timezone: {
              offset: "+5:30",
              description: "Bombay, Calcutta, Madras, New Delhi",
            },
          },
          email: "khyn.sdr@example.com",
          login: {
            uuid: "c10d84e1-8448-4fb5-b3e0-5089fb88276b",
            username: "beautifulwolf743",
            password: "amsterda",
            salt: "iXtSSfvt",
            md5: "e6e054e8ca42bb22eb867c6020e61ac6",
            sha1: "64caa40a5a789c6dda9597705a60ff9af0b34918",
            sha256:
              "facaeb1a0fe94323af481ef65371482dfa8c39dcd70c918370cd3100a3d409bc",
          },
          dob: {
            date: "1948-12-01T06:15:18.968Z",
            age: 74,
          },
          registered: {
            date: "2008-03-14T23:08:33.175Z",
            age: 14,
          },
          phone: "014-50803743",
          cell: "0922-194-3449",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/49.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
          },
          nat: "IR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Brian",
            last: "Coleman",
          },
          location: {
            street: {
              number: 1265,
              name: "Queensway",
            },
            city: "Manchester",
            state: "Bedfordshire",
            country: "United Kingdom",
            postcode: "HD90 0HW",
            coordinates: {
              latitude: "17.0776",
              longitude: "-97.8232",
            },
            timezone: {
              offset: "-3:00",
              description: "Brazil, Buenos Aires, Georgetown",
            },
          },
          email: "brian.coleman@example.com",
          login: {
            uuid: "070bb66c-6672-4f22-abae-6ab471862c4b",
            username: "organicgorilla945",
            password: "police",
            salt: "Lq15AoLH",
            md5: "f69f0e16bac9b93e048333613134dc00",
            sha1: "4366041f6fff4d7c01525a030920de9641cdbab7",
            sha256:
              "bcac5e203aa0fbf1dc2021cda2da289153a2930a349f9ab59139dce5d39739bc",
          },
          dob: {
            date: "1991-09-26T19:37:59.302Z",
            age: 31,
          },
          registered: {
            date: "2008-01-15T01:15:47.919Z",
            age: 14,
          },
          phone: "0112766 966 5996",
          cell: "0721-557-974",
          id: {
            name: "NINO",
            value: "AW 62 10 83 J",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/99.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
          },
          nat: "GB",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Kitty",
            last: "Bradley",
          },
          location: {
            street: {
              number: 8253,
              name: "Preston Rd",
            },
            city: "Irvine",
            state: "Massachusetts",
            country: "United States",
            postcode: 95156,
            coordinates: {
              latitude: "38.0743",
              longitude: "-149.8212",
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada), Bogota, Lima",
            },
          },
          email: "kitty.bradley@example.com",
          login: {
            uuid: "5511eb15-8178-40d0-9c74-342f7677e961",
            username: "crazyrabbit175",
            password: "dani",
            salt: "pzH7vkwv",
            md5: "1e288fe9490e8715d14e92404410d80b",
            sha1: "6c91e173f99cb40cbd55c34fdb81ff55e1d7139c",
            sha256:
              "ed37be34afa231efbcd906a541d4ba000e890877b8da1ef51ab859c52bae1dca",
          },
          dob: {
            date: "1967-02-28T16:06:01.866Z",
            age: 55,
          },
          registered: {
            date: "2011-08-22T13:33:31.069Z",
            age: 11,
          },
          phone: "(463)-248-2959",
          cell: "(547)-536-3544",
          id: {
            name: "SSN",
            value: "928-76-7052",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/35.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
          },
          nat: "US",
        },
        {
          gender: "female",
          name: {
            title: "Madame",
            first: "Elisabete",
            last: "Roussel",
          },
          location: {
            street: {
              number: 5549,
              name: "Rue de la Barre",
            },
            city: "Kallern",
            state: "Thurgau",
            country: "Switzerland",
            postcode: 3388,
            coordinates: {
              latitude: "-61.1293",
              longitude: "-56.0424",
            },
            timezone: {
              offset: "+5:30",
              description: "Bombay, Calcutta, Madras, New Delhi",
            },
          },
          email: "elisabete.roussel@example.com",
          login: {
            uuid: "2a80294d-e639-48b9-afd5-f796ca4afee2",
            username: "sadsnake244",
            password: "1970",
            salt: "keom7DKG",
            md5: "e3f7a4e2afb5d90de0bc8ff67fecf1fb",
            sha1: "719806868fb9f9d295af506cfb2d45e2244bb5ba",
            sha256:
              "b2ad173199d6df15196632304147da8b2bccb789ac1d3b1f825ecbb94988e1e8",
          },
          dob: {
            date: "1984-07-22T09:41:41.717Z",
            age: 38,
          },
          registered: {
            date: "2012-04-30T06:41:44.117Z",
            age: 10,
          },
          phone: "076 063 29 22",
          cell: "076 586 76 74",
          id: {
            name: "AVS",
            value: "756.0380.1683.96",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/90.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
          },
          nat: "CH",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Isak",
            last: "Bjørnestad",
          },
          location: {
            street: {
              number: 1511,
              name: "Kirkehaugsveien",
            },
            city: "Ydstebøhamn",
            state: "Troms - Romsa",
            country: "Norway",
            postcode: "6098",
            coordinates: {
              latitude: "-0.1040",
              longitude: "96.5231",
            },
            timezone: {
              offset: "+11:00",
              description: "Magadan, Solomon Islands, New Caledonia",
            },
          },
          email: "isak.bjornestad@example.com",
          login: {
            uuid: "33e04ca9-f999-4eea-b8ba-deb5d695e5a8",
            username: "happybear926",
            password: "blake",
            salt: "htHN8X5j",
            md5: "bc4306a1dde62328420b95cc7c826179",
            sha1: "932557dfc90f083c0712acd8df4f30631a0c6645",
            sha256:
              "c85650f37c785ddcd266b6a77927dcd6df7daf0ed2840f0dd2d573485b248499",
          },
          dob: {
            date: "1967-06-29T11:25:01.326Z",
            age: 55,
          },
          registered: {
            date: "2014-12-07T01:50:19.591Z",
            age: 8,
          },
          phone: "88755417",
          cell: "92207084",
          id: {
            name: "FN",
            value: "29066743703",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
          },
          nat: "NO",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "علیرضا",
            last: "سهيلي راد",
          },
          location: {
            street: {
              number: 3904,
              name: "میدان دکتر فاطمی / جهاد",
            },
            city: "آبادان",
            state: "خراسان شمالی",
            country: "Iran",
            postcode: 25357,
            coordinates: {
              latitude: "-57.3907",
              longitude: "-177.7197",
            },
            timezone: {
              offset: "-9:00",
              description: "Alaska",
            },
          },
          email: "aalyrd.shylyrd@example.com",
          login: {
            uuid: "f0fcd38f-3811-4c9c-8903-a940e5a5b30e",
            username: "goldenpeacock707",
            password: "maxwell1",
            salt: "4IpfrZ2S",
            md5: "23ebf7c313a589c3c6b31427074341f6",
            sha1: "bcd58788ef02f02fdf104a2db9c49c97d87e7d08",
            sha256:
              "4cb768e853bc17e08b8446c016b3ab69dc173e9563b2dfdef3058913d530a734",
          },
          dob: {
            date: "1947-03-20T12:04:49.141Z",
            age: 75,
          },
          registered: {
            date: "2010-10-07T02:28:43.375Z",
            age: 12,
          },
          phone: "094-91567158",
          cell: "0943-200-7635",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
          },
          nat: "IR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Daniel",
            last: "Hansen",
          },
          location: {
            street: {
              number: 7399,
              name: "Vordingborgvej",
            },
            city: "Ølstykke",
            state: "Midtjylland",
            country: "Denmark",
            postcode: 71537,
            coordinates: {
              latitude: "5.0277",
              longitude: "119.3227",
            },
            timezone: {
              offset: "-5:00",
              description: "Eastern Time (US & Canada), Bogota, Lima",
            },
          },
          email: "daniel.hansen@example.com",
          login: {
            uuid: "35608c7e-4c27-4c98-ab6b-dfdc11bcfc92",
            username: "silverkoala833",
            password: "1a2b3c",
            salt: "XaYXYIlV",
            md5: "e9afb05db3bc02b7115c1ed4e247619b",
            sha1: "3cd6b3131568d50fafd3c8c531ffa57028970e08",
            sha256:
              "8f891a92181c8a2d4e90dd3107240a7d6b305e78962da797fcc245836f29515a",
          },
          dob: {
            date: "1945-12-09T10:59:08.496Z",
            age: 77,
          },
          registered: {
            date: "2015-10-04T09:32:10.305Z",
            age: 7,
          },
          phone: "67620080",
          cell: "44315158",
          id: {
            name: "CPR",
            value: "091245-3784",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/92.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
          },
          nat: "DK",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Jan",
            last: "Woll",
          },
          location: {
            street: {
              number: 4267,
              name: "Burgstraße",
            },
            city: "Neresheim",
            state: "Schleswig-Holstein",
            country: "Germany",
            postcode: 36426,
            coordinates: {
              latitude: "-45.1898",
              longitude: "-125.6175",
            },
            timezone: {
              offset: "+3:30",
              description: "Tehran",
            },
          },
          email: "jan.woll@example.com",
          login: {
            uuid: "89bfb751-e6e5-48cb-ba91-b31a42f015ca",
            username: "angrygoose199",
            password: "experienced",
            salt: "Nwav1dnn",
            md5: "8956fede7735197ac73cc3566dd35473",
            sha1: "6d156430fe6b9002dd9a9e6952bb107b1a3921af",
            sha256:
              "50efb779c3bc675ee3a830cdfca301e53167f23b4d648d3119dc5aaa2695bf4d",
          },
          dob: {
            date: "1986-02-08T06:50:43.857Z",
            age: 36,
          },
          registered: {
            date: "2010-10-22T18:35:43.542Z",
            age: 12,
          },
          phone: "0120-7968289",
          cell: "0173-9570730",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/84.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
          },
          nat: "DE",
        },
        
      ],
    
    };

  let headerCol1 = "contenido columna 1";
  let headerCol2 = "contenido columano 2";

  function crearHeader(numero) {
    switch (numero) {
      case 1:
        return <p>Este parrafo aparece si me pasas 1</p>;

      case 2:
        return <p>Este parrafo aparece si me pasas 2</p>;

      case 3:
        return <p>Este parrafo aparece si me pasas 3</p>;

      default:
        return <p>Este parrafo aparece si me pasas algo diferente</p>;
    }
  }
  function llamarSwitch(numero) {
    switch (numero) {
      case 1:
        return (
          <div className=" alert alert-primary" role={"alert"}>
            {" "}
            Sentencia switch con numero 1
          </div>
        );
      case 2:
        return (
          <div className=" alert alert-secondary" role={"alert"}>
            Sentencia switch con numero 2
          </div>
        );
      case 3:
        return (
          <div className="alert alert-success" role={"alert"}>
            Sentencia switch con numero 3
          </div>
        );
      case 4:
        return (
          <div className=" alert alert-danger" role={"alert"}>
            Sentencia switch con numero 4
          </div>
        );
      case 5:
        return (
          <div className=" alert alert-warning" role={"alert"}>
            Sentencia switch con numero 5
          </div>
        );
      default:
        return (
          <div className=" alert alert-info" role={"alert"}>
            Sentencia switch con numero distinto
          </div>
        );
    }
  }

  let varableIf = true;
  let numeroIf = 11;
  let numeroSwitch = 3;

  let elementos = [
    "Elemento 1",
    "Elemento 2",
    "Elemento 3",
    "Elemento 4",
    "Elemento 5",
  ];

  return (
    <div className="App container-fluid">
      <h1>Aplicacion React</h1>
      <p>Primera aplicación React</p>

      <div className="row">
        <div className=" col columna-uno">
          <h2>Elementos de un componente</h2>
          {/* <p>{headerCol1}</p> */}

          <p>{crearHeader(1)}</p>

          <h3>Sentencia if</h3>

          <div>
            {
              /* CUANDO HAY DOS RESPUESTAS --> condicion ? cuando es verdad : cuando es mentira
              CUANDO SOLO HAY UNA RESPUESTA --> condicion verdadera &&
              */

              //DOS SALIDAS
              /*
              varableIf && numeroIf > 10 ? (
                <div className="alert alert-primary" role={alert}>
                  la condicion se ha cumplido!!
                </div>
              ) : (
                <div className="alert alert-danger" role={alert}>
                  la condicion es Falsa!!
                </div>
              )
              */

              //UNA SOLA SALIDA

              varableIf && numeroIf > 10 && (
                <div className="alert alert-primary" role={alert}>
                  La condicion se ha cumplido!!
                </div>
              )

              //IF ELSE CONTINUADO
              /* 
              if else
              numero --> numero <3
                     --> numero >=3
                     --> numero >=5
              */
              //numeroIf < 3 ? <p>primer caso</p> :(numeroIf >= 3 && numeroIf <5 ? <p>segundo caso</p> : <p>tercer caso</p>)
            }
          </div>

          <h3>Sentencia switch</h3>
          <div>
            {
              /* numeroSwitvh --> dependiendo del valor de la variable hay que mostrar un alert u otro. Hacer 4-5 opciones */
              llamarSwitch(numeroSwitch)
            }
          </div>

          <h3>Sentencia for</h3>
          <div>
            <ul>
              {elementos.map((element) => {
                return <li>{element}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="col columna-dos">
          <h2>Funcionamiento de un componenete</h2>
          {/* <p>{headerCol2}</p> */}
          <p>{crearHeader(2)}</p>

          <div className="row">
            {usuariosApi.results.map((Element, index) => {
              return(
              <div className="col" key={index}>

                <div className="card estiloCarta">
                   <img
                    src={Element.picture.large}
                    className="card-img-top"
                    alt="imagen carta"
                  ></img> 
                  <div className="card-body">
                    <h5 className="card-title">
                      {Element.name.first} {Element.name.last}
                    </h5>
                    <p className="card-text">{Element.email}</p>
                  </div>
                </div>
              </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
