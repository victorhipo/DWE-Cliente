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
