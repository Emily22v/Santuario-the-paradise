/*const animalData = {*/
/*let animalData = JSON.parse(localStorage.getItem('animalData')) ||{*/
localStorage.removeItem('animalData');
    let animalData = {
 "Leones": [
 { nombre: "Simba",
   img: "https://i.postimg.cc/g0MhMNjD/1f339afeb6840c1993444fa6fbfa2a74.jpg",       
   edadMesesAlRescate: 18,
    peso: 195,
    genero: "Macho",
    origen: "Guatemala",
    fechaRescate: "2020-04-12",
    razonRescate: "Fue encontrado enjaulado, desnutrido y en pésimas condiciones en un zoológico. ",
    recinto: "Sabana Norte",
  adopciones: 0
},

 { nombre: "Nala", 
    img: "https://i.postimg.cc/k4DbC7sr/a00f6dd6c018a4dc6002e093e3bec72f.jpg",
    edadMesesAlRescate: 0,
    peso: 130,
    genero: "Hembra",
    origen: "El Salvador",
    fechaRescate: "2020-08-12",
    razonRescate: "Nacida en el santuario. Criada en condiciones dignas y sanas",
    recinto: "Sabana Norte",
    adopciones: 0
  },

             { nombre: "Kenny", 
            img: "https://i.postimg.cc/GmhW3hg2/b399f3074f95b81f45b677b446402575.jpg",
              especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 50,
    genero: "Macho",
    origen: "El Salvador",
    fechaRescate: "2025-01-11",
    razonRescate: "Nacido en el santuario, hijo de Simba y Nala. Criado en condiciones dignas y sanas",
    recinto: "Guardería MAB",
    adopciones: 0
  },

            { nombre: "Kiara",
         img: "https://i.postimg.cc/xC7bTBpX/80b89aedd32bf55bf93777d08baabe45.jpg", 
          especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 127,
    genero: "Hembra",
    origen: "El Salvador",
    fechaRescate: "2021-05-20",
    razonRescate: "Nacida en el santuario, hija de Simba y Nala. Criada en condiciones dignas y sanas",
    recinto: "Zona A - León 2",
  adopciones: 0
    
  },
            { nombre: "Kovu",
     img: "https://i.postimg.cc/43wKqpk4/0b108eac95db2f9241356cad8bc06c80.jpg", 
       especie: "Panthera leo",
 edadMesesAlRescate: 0,
    peso: 153,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2018-07-10",
    razonRescate: "Rescatado del tráfico ilegal de animales",
    recinto: "Zona A - León 2",
  adopciones: 0
  },
           

  { nombre: "Mufasa",
 img: "https://i.postimg.cc/kgTNV9f7/9dbc2aac3d22ac614670979e1f26ed7c.jpg",
      edadMesesAlRescate: 0,
    peso: 210,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2019-03-04",
    razonRescate: "Confiscado en aduana tras intento de tráfico ilegal",
    recinto: "Sabana Central",
  adopciones: 0
  },
   { nombre: "Sarabi",
     img: "https://i.postimg.cc/RZ7Wmd89/171a473ae6e98ff2ad21ec68764fb2f7.jpg", 
   edadMesesAlRescate: 0,
    peso: 160,
    genero: "Hembra",
    origen: "Sudáfrica",
    fechaRescate: "2019-03-04",
    razonRescate: "Confiscada junto a Mufasa en el mismo operativo",
    recinto: "Sabana Central",
  adopciones: 0
  },
            

            { nombre: "Dexter", 
            img: "https://i.postimg.cc/P5mM7Rqm/Dexter.jpg", 
            especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 215,
    genero: "Macho",
    origen: "El Salvador",
    fechaRescate: "2020-03-15",
    razonRescate: "Nacido y criado en el santuario en condiciones dignas. Criado junto a Snow",
    recinto: "Zona A - León 4",
  adopciones: 0
  },
 { nombre: "Snow",
    img: "https://i.postimg.cc/t46fDkP6/Snow.jpg", 
    especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 194,
    genero: "Macho",
    origen: "El Salvador",
    fechaRescate: "2020-07-10",
    razonRescate: "Nacido y criado en el santuario en condiciones dignas. Criado junto a Dexter",
    recinto: "Zona A - León 4",
  adopciones: 0
  },

            { nombre: "Rori", 
        img: "https://i.postimg.cc/3N3dYGkR/Rori.jpg", especie: "Panthera leo", age: "5 años",
          especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 200,
    genero: "Macho",
    origen: "El Salvador",
    fechaRescate: "2020-03-15",
    razonRescate: "Nacido y criado en el santuario en condiciones dignas",
    recinto: "Zona A - León 5",
  adopciones: 0
  },

            { nombre: "Yuna",
         img: "https://i.postimg.cc/1X5YsnTm/8bb94ad27220f7c9053e9cd8345d2f3c.jpg",
         especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 143,
    genero: "Hembra",
    origen: "Panamá",
    fechaRescate: "2021-02-10",
    razonRescate: "Rescatada de un pueblo en Panamá",
    recinto: "Zona A - León 5",
  adopciones: 0
  },
            { nombre: "Timba",
         img: "https://i.postimg.cc/CK9X4ChB/07e2559a1b7a231e9b7e33603dd479b4.jpg", 
        especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 30,
    genero: "Macho",
    origen: "El Salvador",
    fechaRescate: "2025-02-20",
    razonRescate: "Nacido y criado en el santuario en condiciones dignas. Hijo de Yuna y Rori",
    recinto: "Guardería MAB",
  adopciones: 0
  },

            {
    nombre: "Moyo",
    img: "https://i.postimg.cc/rsgDLQTh/459984b64631473aa75175bbb4597aee.jpg",
    especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 223,
    genero: "Macho",
    origen: "Tanzania",
    fechaRescate: "2019-12-15",
    razonRescate: "Rescatado de un circo de animales",
    recinto: "Zona B - León 6",
  adopciones: 0
  },
            {
    nombre: "Amani",
    img: "https://i.postimg.cc/dVPhgp54/fbec36d2c3e238abfb046f409459e1f5.jpg",
    especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 137,
    genero: "Hembra",
    origen: "Sudáfrica",
    fechaRescate: "2020-010-21",
    razonRescate: "Encontrada en un zoológico abandonado",
    recinto: "Zona B - León 6",
  adopciones: 0
  },

          {
    nombre: "Scar",
    img: "https://i.postimg.cc/SxSd0x0d/da25cfb467da519b507a8268f767b73d.jpg",
    especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 150,
    genero: "Macho",
    origen: "Uganda",
    fechaRescate: "2020-02-20",
    razonRescate: "Rescatado de maltrato animal ",
    recinto: "Zona B - León 7",
  adopciones: 0
  },
  {
    nombre: "Zira",
    img: "https://i.postimg.cc/FsffF0q7/a30a2f8a56af1df5fc5350c2960555e6.jpg",
    especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 146,
    genero: "Hembra",
    origen: "Sudáfrica",
    fechaRescate: "2021-07-10",
    razonRescate: "Encontrada atrapada en una red de cazadores",
    recinto: "Zona B - León 8",
  adopciones: 0
  },
   {
    nombre: "Brutus",
    img: "https://i.postimg.cc/SsFjFrNC/Brutus.jpg",
    especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 190,
    genero: "Macho",
    origen: "Ucrania",
    fechaRescate: "2019-03-15",
    razonRescate: "Traído desde un zoológico por la situación de la guerra de Ucrania con Rusia",
    recinto: "Zona B - León 9",
  adopciones: 0
  },
  {
    nombre: "Karl",
    img: "https://i.postimg.cc/Tw1xs5ng/Karl.jpg",
    especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 182,
    genero: "Macho",
    origen: "México",
    fechaRescate: "2020-03-15",
    razonRescate: "Encontrado en un rancho abandonado de narcotraficantes",
    recinto: "Zona B - León 10",
  adopciones: 0
  },

  { nombre: "Zeus",
    img: "https://i.postimg.cc/SxZTThz5/02369b6ad4230a9643cd40a2927fb806.jpg",
    especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 183,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2020-04-15",
    razonRescate: "Fue hallado anestesiado dentro de una jaula a bordo de un avión",
    recinto: "Zona Alfa - León 1",
  adopciones: 0
  },
      { nombre: "Shira",  
     img: "https://i.postimg.cc/52nqL4sG/5687d7c732d8e13f81cb9a9ef61ba276.jpg",
    especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 120,
    genero: "Hembra",
    origen: "Mozambique",
    fechaRescate: "2021-05-20",
    razonRescate: "Fue hallada inmóvil a la orilla de un río, con las patas amarradas",
    recinto: "Zona Delta - Refugio 3",
  adopciones: 0
  },

            { nombre: "Jengo",
         img: "https://i.postimg.cc/0yDdvgWt/2f098a906ff8b08b3e1404e5dc682330.jpg",
       especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 40,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2025-03-29",
    razonRescate: "Rescatado tras quedar huérfano debido a la caza ilegal de su madre",
    recinto: "Guardería MAB",
  adopciones: 0
  },
            {  nombre: "Zuri",
             img: "https://i.postimg.cc/wBxLbnBn/b11969762a688059515e559d2ad76a5d.jpg",
              edadMesesAlRescate: 0,
    peso: 145,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2019-07-21",
    razonRescate: "Rescatada tras ser abandonada por un circo ilegal",
    recinto: "Sabana Sur",
  adopciones: 0
  },


  { nombre: "Kali",
   img: "https://i.postimg.cc/qMFNK9Pp/Male-Lion-Shumba-stunning-cat.jpg",
   edadMesesAlRescate: 0,
    peso: 135,
    genero: "Hembra",
    origen: "Nicaragua",
    fechaRescate: "2020-09-14",
    razonRescate: "Hallada en una finca utilizada para tráfico ilegal de fauna exótica",
    recinto: "Sabana Este",
  adopciones: 0
  },
            { nombre: "Imani",
             img: "https://i.postimg.cc/65NpLCS2/4180314487453dc50efe7f442b072b1a.jpg",
        edadMesesAlRescate: 0,
    peso: 125,
    genero: "Hembra",
    origen: "El Salvador",
    fechaRescate: "2021-11-02",
    razonRescate: "Nacida en el santuario, hija de Jengo y Kali",
    recinto: "Sabana Este",
  adopciones: 0
  },

            { nombre: "Jabari",
         img: "https://i.postimg.cc/XYr1C7jQ/bf46a25598f36211ec4c2f0902349c02.jpg",
         especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 90,
    genero: "Macho",
    origen: "Zambia",
    fechaRescate: "2022-12-17",
    razonRescate: "Una reserva de animales lo otorgó",
    recinto: "Territorio Este - Sector León 3",
  adopciones: 0
  },

            { nombre: "Samira",
         img: "https://i.postimg.cc/qMrMHG1V/dabbf668a5e8ea60e0da2b0fa6032d12.jpg",
         especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 150,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2025-02-24",
    razonRescate: "Donada por un zoológico que no podía hacerse cargo de ella",
    recinto: "Guardería MAB",
  adopciones: 0
  },

            { nombre: "Shujaa",
                 img: "https://i.postimg.cc/PJ4HwmZ8/Shujaa.jpg",
                  especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 184,
    genero: "Macho",
    origen: "Uganda",
    fechaRescate: "2021-05-20",
    razonRescate: "Encontrado en el patio de una casa",
    recinto: "Zona Norte - Hábitat León 4",
  adopciones: 0
  },
            { nombre: "Nadia",
         img: "https://i.postimg.cc/zBBvnrfX/917e110b70981f724df7dd8494201433.jpg",
         especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 135,
    genero: "Hembra",
    origen: "África",
    fechaRescate: "2021-05-20",
    razonRescate: "Fue víctima de tráfico animal",
    recinto: "Zona Norte - Hábitat León 4",
  adopciones: 0
  },

            { nombre: "Taji",
             img: "https://i.postimg.cc/ncV8j9Lq/Taji.jpg",
               especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 210,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2018-07-10",
    razonRescate: "Donado por un zoológico en quiebra debido a mala gestión",
    recinto: "Zona Sur - León Alfa",
  adopciones: 0
  },
            { nombre: "Leonora",
                 img: "https://i.postimg.cc/XJvxQLY6/12a6e8fa98c5f482e9381895824a1525.jpg",
                   especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 144,
    genero: "Hembra",
    origen: "Uganda",
    fechaRescate: "2021-05-20",
    razonRescate: "Donada por un zoológico clausurado por maltrato animal",
    recinto: "Zona Sur - León Beta",
  adopciones: 0
  },

         { nombre: "Rami",
                 img: "https://i.postimg.cc/JhW00TM4/Rami.jpg",
                especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 186,
    genero: "Macho",
    origen: "Kenia",
    fechaRescate: "2021-05-20",
    razonRescate: "Rescatada de circo junto a Anika",
    recinto: "Zona Sur - León Gamma",
  adopciones: 0
  },
            { nombre: "Daphne",
         img: "https://i.postimg.cc/T2Vbn2w9/ed748a8fdd6ce2e7f16d08c3ea5261f4.jpg",
         especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 147,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2021-01-19",
    razonRescate: "Donada por un zoológico africano en quiebra",
    recinto: "Zona Sur - León Gamma",
  adopciones: 0
  },

            { nombre: "Amir", 
            img: "https://i.postimg.cc/d0CSMYqV/6f9c7e1b103c3d88c4e12269dce983f3.jpg",
          especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 43,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2025-06-18",
    razonRescate: "Rescatado de un zoológico sin recursos",
    recinto: "Guardería MAB",
  adopciones: 0
  },
            { nombre: "Chloe", 
            img: "https://i.postimg.cc/MGNGkYGb/87b0152badccab22ae23803da89d7f1a.jpg",
           especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 150,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2020-05-20",
    razonRescate: "Donada tras cierre de zoológico africano",
    recinto: "Zona G - Refugio León 1",
  adopciones: 0
  },

            { nombre: "Hercules",
             img: "https://i.postimg.cc/fbv4qrYF/fae1c4f9c772bccc1aafabba9b8806a1.jpg",
           especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 34,
    genero: "Macho",
    origen: "Kenia",
    fechaRescate: "2025-03-23",
    razonRescate: "Abandonado por zoológico tras sanción",
    recinto: "Guardería MAB",
  adopciones: 0
  },
            { nombre: "Selene",
         img: "https://i.postimg.cc/jjnrzN3D/2e2fed93607177d29793f7729d31a526.jpg",
        especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 34,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2025-07-23",
    razonRescate: "Donada por zoológico sin permisos",
    recinto: "Guardería MAB",
  adopciones: 0
  },

            { nombre: "Themis",
         img: "https://i.postimg.cc/ZRyX44RD/233cfda71d4443827b2af70b1fe3e64f.jpg",
        especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 190,
    genero: "Macho",
    origen: "África",
    fechaRescate: "2022-03-15",
    razonRescate: "Encontrado como mascota ilegal en una vivienda",
    recinto: "Zona G - Refugio León 2",
  adopciones: 0
  },
            { nombre: "Anika", 
                img: "https://i.postimg.cc/DZVWbR3H/77ac5050a11b2e7df699f21013f0e107.jpg",
              especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 150,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2019-08-29",
    razonRescate: "Rescatada de circo junto a Rami",
    recinto: "Zona G - Refugio León 3",
  adopciones: 0
  },

            { nombre: "Suryan",
                 img: "https://i.postimg.cc/FKk3SvF4/Suryan.jpg",
                  especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 178,
    genero: "Macho",
    origen: "El Salvador",
    fechaRescate: "2020-09-22",
    razonRescate: "Criado en el santuario en condiciones dignas",
    recinto: "Zona G - Refugio León 3",
  adopciones: 0
  },
            { nombre: "Kiran", 
                img: "https://i.postimg.cc/kXHp8yDK/049ca5c0a950d0deca1b4bf3f2abc2fe.jpg",
                especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 50,
    genero: "Hembra",
    origen: "El Salvador",
    fechaRescate: "2025-01-02",
    razonRescate: "Criada en el santuario en condiciones dignas",
    recinto: "Guardería MAB",
  adopciones: 0
  },

            { nombre: "Zulu",
                 img: "https://i.postimg.cc/qMK08tfq/10004d88832543695256ab78338c06e5.jpg",
           especie: "Panthera leo",
     edadMesesAlRescate: 0,
    peso: 150,
    genero: "Macho",
    origen: "Kenia",
    fechaRescate: "2019-06-27",
    razonRescate: "Encontrado sedado y herido cerca de una reserva",
    recinto: "Zona G - Refugio León 4",
  adopciones: 0
  },

        { nombre: "Thandi",
           img: "https://i.postimg.cc/Dz49MM42/e050731a25842c91ab9dedc570d12dd5.jpg", 
                 
        especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 147,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2021-04-20",
    razonRescate: "Rescatada de un pueblo donde la querían sacrificar",
    recinto: "Guardería MAB",
  adopciones: 0
  },

            { nombre: "Nayla",
                 img: "https://i.postimg.cc/MKW8p5ND/307e3fdb4670f3ea73b9f273655ce37c.jpg", 
               especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 45,
    genero: "Hembra",
    origen: "El Salvador",
    fechaRescate: "2025-04-26",
    razonRescate: "Criada en el santuario en condiciones dignas",
    recinto: "Guardería MAB",
  adopciones: 0
  },


            { nombre: "Omar", 
                img: "https://i.postimg.cc/RZLv0vFq/Omar.jpg", 
             especie: "Panthera leo",
  edadMesesAlRescate: 0,
    peso: 196,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2020-09-11",
    razonRescate: "Rescatado del tráfico ilegal de fauna",
    recinto: "Zona H - León Alto",
  adopciones: 0
  },
            { nombre: "Penda",
             img: "https://i.postimg.cc/xCTHqf1T/38f998f1c8d8046293868aca88159717.jpg",
           especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 43,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2025-05-20",
    razonRescate: "Encontrada sola en una carretera rural",
    recinto: "Guardería MAB",
  adopciones: 0
  },

            { nombre: "King", 
            img: "https://i.postimg.cc/fyJ8shvg/7dc201d5e01e57b5213b2fbda2c54a88.jpg", 
             especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 150,
    genero: "Macho",
    origen: "África",
    fechaRescate: "2022-12-06",
    razonRescate: "Rescatado de un estanque profundo donde luchaba por salir",
    recinto: "Zona H - León 5",
  adopciones: 0
  },
            { nombre: "Ariya", 
        img: "https://i.postimg.cc/g0Gn2RFh/21c14258b05b5aa80faf1a235710353c.jpg",
         especie: "Panthera leo",
  edadMesesAlRescate: 0,
    peso: 135,
    genero: "Hembra",
    origen: "El Salvador",
    fechaRescate: "2021-11-29",
    razonRescate: "Criada en el santuario en condiciones dignas",
    recinto: "Zona H - León 6",
  adopciones: 0
  },

            { nombre: "Hunter",
     img: "https://i.postimg.cc/htVF79qP/18e2abbfa121446e6068700b556b5610.jpg",
    especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 190,
    genero: "Macho",
    origen: "África",
    fechaRescate: "2020-09-15",
    razonRescate: "Encontrado vagando solo cerca de zona de cacería ilegal",
    recinto: "Zona H - León 6",
  adopciones: 0
  },
            { nombre: "Queen",
        img: "https://i.postimg.cc/4xW4gq3V/315f82e25c7563caf9a202cd0e962f7f.jpg",
         especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 135,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2021-07-28",
    razonRescate: "Fue regalada por un importante jeque que tiene un refugio",
    recinto: "Zona H - León 7",
  adopciones: 0
  },

            { nombre: "Trueno",
     img: "https://i.postimg.cc/d3sbHw07/Trueno.jpg",
    especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 179,
    genero: "Macho",
    origen: "Kenia",
    fechaRescate: "2020-07-18",
    razonRescate: "Transferido desde zoológico",
    recinto: "Zona H - León 7",
  adopciones: 0
  },
            { nombre: "Bella",
         img: "https://i.postimg.cc/kg0Mj8Yt/396e36191158ecae81206e65daf3ecba.jpg",
           especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 150,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2021-09-27",
    razonRescate: "Donada por refugio de fauna salvaje",
    recinto: "Zona H - León 7",
  adopciones: 0
  },

            { nombre: "Titan", 
        img: "https://i.postimg.cc/6pP6T9VL/1ecaca9179ac439c8f0a31b7196d644b.jpg",
        especie: "Panthera leo",
    edadMesesAlRescate: 0,
    peso: 210,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2019-10-13",
    razonRescate: "Encontrado maltratado y amarrado en una jaula pequeña",
    recinto: "Zona H - León Alfa",
  adopciones: 0
  },
            { nombre: "Asha",
     img: "https://i.postimg.cc/pVBXVw9y/8367f80dbbf9046c9d389ee961292f5d.jpg",
    especie: "Panthera leo",
   edadMesesAlRescate: 0,
    peso: 35,
    genero: "Hembra",
    origen: "Kenia",
    fechaRescate: "2025-03-22",
    razonRescate: "Hallada en departamento siendo criada de manera ilegal",
    recinto: "Guardería MAB",
  adopciones: 0
  },
     { nombre: "Diller",
     img: "https://i.postimg.cc/Hkd9qS00/61e4648fd3e696bc9218376727cce785.jpg",
    edadMesesAlRescate: 0,
    peso: 245,
    genero: "Macho",
    origen: "Sudáfrica",
    fechaRescate: "2022-09-26",
    razonRescate: "Rescatado del tráfico ilegal de animales",
    recinto: "Zona H - León 8",
  adopciones: 0
  } 
    ],

 "Tigres": [
  {
    nombre: "Rajah",
    img: "https://i.postimg.cc/fTNHN8PW/e562e436f578c8e5639ea830966cf4ec.jpg",
    especie: "Panthera tigris",
    peso: 200,
    genero: "Macho",
    origen: "India",
    fechaRescate: "2022-08-14",
    edadMesesAlRescate: 0,
    razonRescate: " ",
    recinto: " "

  },
        {
  nombre: "Shere Khan",
  img: "https://i.postimg.cc/fRchcM2c/141b9022b0db64378710ac673b48c30b.jpg",
  especie: "Panthera tigris",
  edadMesesAlRescate: 0,
  peso: 220,
  genero: "Macho",
  origen: "Nepal",
  fechaRescate: "2021-06-05",
  razonRescate: "Rescatado tras ser hallado herido por cazadores furtivos en las montañas del Himalaya",
  recinto: "Zona A - Tigre 1",
  adopciones: 0
},
{
  nombre: "Drake",
  img: "https://i.postimg.cc/zfx67vng/530f6f004f23be861a5843b481deb7bb.jpg",
  especie: "Panthera tigris",
  edadMesesAlRescate: 0,
  peso: 250,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2020-11-22",
  razonRescate: "Liberado de un circo ilegal donde sufría maltrato y desnutrición",
  recinto: "Zona B - Tigre 2",
  adopciones: 0
},
{
  nombre: "Rocco",
  img: "https://i.postimg.cc/kX4bYJLm/2acc60eafdfa9b31df9e88a0964ee57b.jpg",
  especie: "Panthera tigris",
  edadMesesAlRescate: 0,
  peso: 200,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2019-08-14",
  razonRescate: "Encontrado huérfano tras la caza ilegal de su madre en una reserva natural",
  recinto: "Zona B - Tigre 3",
  adopciones: 0
},

     {
  nombre: "Ares",
  img: "https://i.postimg.cc/FKG56DQ1/72427c0764d6bc52f0ce7c9186a43081.jpg",
  especie: "Panthera tigris",
  peso: 2.7,
  genero: "Macho",
  origen: "Nepal",
  fechaRescate: "2025-05-09",
  edadMesesAlRescate: 0,
  razonRescate: "Abandonado por su madre en la selva y rescatado por ambientalistas",
  recinto: "Zona E - Tigre 4",
  adopciones: 0
},
{
  nombre: "Tristan",
  img: "https://i.postimg.cc/ZqJzjX21/3b56073c437683618b133eaf284fc740.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2022-11-22",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado de un zoológico ilegal con condiciones inhumanas",
  recinto: "Zona F - Tigre 5",
  adopciones: 0
},
{
  nombre: "Orion",
  img: "https://i.postimg.cc/sDC6p7tL/6a9d1a79771624d1edece6fe46fb8d24.jpg",
  especie: "Panthera tigris",
  peso: 200,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2022-08-14",
  edadMesesAlRescate: 0,
  razonRescate: "Salvado de una zona de conflicto entre humanos y fauna silvestre",
  recinto: "Zona G - Tigre 6",
  adopciones: 0
},
{
  nombre: "Freya",
  img: "https://i.postimg.cc/5NycQfVk/50c48ce09cc5312f7f7377728d8830fe.jpg",
  especie: "Panthera tigris",
  peso: 163,
  genero: "Hembra",
  origen: "Nepal",
  fechaRescate: "2022-03-02",
  edadMesesAlRescate: 0,
  razonRescate: "Criada en cautiverio sin autorización por un coleccionista privado",
  recinto: "Zona H - Tigre 7",
  adopciones: 0
},
{
  nombre: "Jade",
  img: "https://i.postimg.cc/gjBJW4Vz/e57fc77dfb84fe5f422b02423acf5540.jpg",
  especie: "Panthera tigris",
  peso: 159,
  genero: "Hembra",
  origen: "Tailandia",
  fechaRescate: "2023-11-22",
  edadMesesAlRescate: 0,
  razonRescate: "Confiscada de un criadero clandestino que operaba con fines de lucro",
  recinto: "Zona I - Tigre 8",
  adopciones: 0
},
{
  nombre: "Samuel",
  img: "https://i.postimg.cc/BbqxgrK7/67655b2b0d432e06b9bdc93e3ed31647.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2024-11-19",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado de una reserva que cerró por falta de fondos",
  recinto: "Zona J - Tigre 9",
  adopciones: 0
},
{
  nombre: "Marcos",
  img: "https://i.postimg.cc/QtqSXyMZ/73025c2d1013e4547628f0cdb23a8716.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2024-09-25",
  edadMesesAlRescate: 0,
  razonRescate: "Encontrado herido tras escapar de una red de tráfico ilegal",
  recinto: "Zona K - Tigre 10",
  adopciones: 0
},
{
  nombre: "Bianca",
  img: "https://i.postimg.cc/PqzJr90y/5a25c45c0c845dd564a517e8e16f3a16.jpg",
  especie: "Panthera tigris",
  peso: 178,
  genero: "Hembra",
  origen: "India",
  fechaRescate: "2024-02-14",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatada de un circo ambulante donde era explotada",
  recinto: "Zona L - Tigre 11",
  adopciones: 0
},
{
  nombre: "Olivia",
  img: "https://i.postimg.cc/3rkNgDg2/f2e2291a54e565c6881e6f17a389a447.jpg",
  especie: "Panthera tigris",
  peso: 7,
  genero: "Hembra",
  origen: "Nepal",
  fechaRescate: "2025-04-05",
  edadMesesAlRescate: 0,
  razonRescate: "Cría abandonada y encontrada por un equipo de exploración",
  recinto: "Zona M - Tigre 12",
  adopciones: 0
},
{
  nombre: "Margarita",
  img: "https://i.postimg.cc/k5rLH8tk/68a7d123e616d95c31bfee52521302a3.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Hembra",
  origen: "Tailandia",
  fechaRescate: "2022-03-20",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatada de un santuario turístico cerrado por maltrato animal",
  recinto: "Zona N - Tigre 13",
  adopciones: 0
},
{
  nombre: "Astrid",
  img: "https://i.postimg.cc/QMVtxqTf/73b3f6f8f725441a5bfd6f1b14125c48.jpg",
  especie: "Panthera tigris",
  peso: 198,
  genero: "Hembra",
  origen: "India",
  fechaRescate: "2022-08-14",
  edadMesesAlRescate: 0,
  razonRescate: "Salvada de una inundación en una reserva natural",
  recinto: "Zona O - Tigre 14",
  adopciones: 0
},
{
  nombre: "Lia",
  img: "https://i.postimg.cc/HWSRgFy0/d6acd4555935346141492c6705403741.jpg",
  especie: "Panthera tigris",
  peso: 174,
  genero: "Hembra",
  origen: "Nepal",
  fechaRescate: "2022-09-29",
  edadMesesAlRescate: 0,
  razonRescate: "Huérfana tras un incendio forestal en su hábitat",
  recinto: "Zona P - Tigre 15",
  adopciones: 0
},
{
  nombre: "Sundar",
  img: "https://i.postimg.cc/NMSgNp1m/171f27b67d2edc8e8e900e93714557f9.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2020-11-22",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado de una finca privada donde era criado sin permisos",
  recinto: "Zona Q - Tigre 16",
  adopciones: 0
},
{
  nombre: "Shera",
  img: "https://i.postimg.cc/pVSxxG5F/8cb3ca8a06a0271e4d72153c3228acd6.jpg",
  especie: "Panthera tigris",
  peso: 200,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2022-05-14",
  edadMesesAlRescate: 0,
  razonRescate: "Liberado tras una denuncia anónima por tráfico de especies",
  recinto: "Zona R - Tigre 17",
  adopciones: 0
},

        {
  nombre: "Kumar",
  img: "https://i.postimg.cc/vBHM8CvW/1fbd9f36c30f25d0da04aca1302b7252.jpg",
  especie: "Panthera tigris",
  peso: 220,
  genero: "Macho",
  origen: "Nepal",
  fechaRescate: "2023-12-05",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado tras ser víctima de caza furtiva; se recuperó de múltiples heridas",
  recinto: "Zona S - Tigre 18",
  adopciones: 0
},
{
  nombre: "Indra",
  img: "https://i.postimg.cc/pXnvdfK1/e2c5f68f3c92c9a96b5f9e7fa2a7101c.jpg",
  especie: "Panthera tigris",
  peso: 8,
  genero: "Macho",
  origen: "El Salvador",
  fechaRescate: "2025-04-22",
  edadMesesAlRescate: 0,
  razonRescate: "Nacido en el santuario, hijo de Jade y Sundar. Criado con monitoreo veterinario constante",
  recinto: "Zona T - Tigre 19",
  adopciones: 0
},
{
  nombre: "Javan",
  img: "https://i.postimg.cc/wBxT3tqy/415203ca3256279bdea3ea0442f407e9.jpg",
  especie: "Panthera tigris",
  peso: 200,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2023-08-14",
  edadMesesAlRescate: 0,
  razonRescate: "Liberado de una finca donde era mantenido en condiciones inadecuadas como símbolo de estatus",
  recinto: "Zona U - Tigre 20",
  adopciones: 0
},
{
  nombre: "Rudra",
  img: "https://i.postimg.cc/wxnvFTVZ/fe3f604ec6143318a8b79f04fa36a28f.jpg",
  especie: "Panthera tigris",
  peso: 24,
  genero: "Macho",
  origen: "Nepal",
  fechaRescate: "2025-02-28",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado tras quedar atrapado en una trampa colocada para animales silvestres",
  recinto: "Zona V - Tigre 21",
  adopciones: 0
},
{
  nombre: "Tenzin",
  img: "https://i.postimg.cc/CxgKTP94/d0bd8215f3beb87f500b2c6093784426.jpg",
  especie: "Panthera tigris",
  peso: 47,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2024-12-17",
  edadMesesAlRescate: 0,
  razonRescate: "Recuperado de un templo turístico donde era usado como atracción para fotos",
  recinto: "Zona W - Tigre 22",
  adopciones: 0
},
{
  nombre: "Manas",
  img: "https://i.postimg.cc/pXg2QG2H/9958409d2fae909f513db5a434baf315.jpg",
  especie: "Panthera tigris",
  peso: 46,
  genero: "Macho",
  origen: "El Salvador",
  fechaRescate: "2025-01-14",
  edadMesesAlRescate: 0,
  razonRescate: "Nacido en el santuario bajo un programa de conservación y bienestar animal",
  recinto: "Zona X - Tigre 23",
  adopciones: 0
},

  {
  nombre: "Sumat",
  img: "https://i.postimg.cc/Kzyk9cxm/2f89307ff1023345ffa95cada8a74973.jpg",
  especie: "Panthera tigris",
  peso: 116,
  genero: "Macho",
  origen: "Nepal",
  fechaRescate: "2022-04-29",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado tras ser hallado desnutrido en las afueras de un parque nacional",
  recinto: "Zona Y - Tigre 24",
  adopciones: 0
},
{
  nombre: "Bahadur",
  img: "https://i.postimg.cc/yNKstDgp/05e4a0711b6c794e967da9a7379cd57d.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2022-03-18",
  edadMesesAlRescate: 0,
  razonRescate: "Confiscado de una reserva ilegal que operaba sin control veterinario",
  recinto: "Zona Z - Tigre 25",
  adopciones: 0
},

  {
  nombre: "Hanuman",
  img: "https://i.postimg.cc/Qxg6SVDd/2f9f142bd9b7200eb13d18c320568c19.jpg",
  especie: "Panthera tigris",
  peso: 200,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2019-01-17",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado de una explotación cinematográfica donde vivía encadenado",
  recinto: "Zona AA - Tigre 26",
  adopciones: 0
},
  {
  nombre: "Kumari",
  img: "https://i.postimg.cc/dQCzcTLr/d98f591257eeda8792aca6dd275e85b5.jpg",
  especie: "Panthera tigris",
  peso: 147,
  genero: "Hembra",
  origen: "Nepal",
  fechaRescate: "2021-01-10",
  edadMesesAlRescate: 0,
  razonRescate: "Salvada de un zoológico clausurado por maltrato animal",
  recinto: "Zona AB - Tigre 27",
  adopciones: 0
},
  {
  nombre: "Sita",
  img: "https://i.postimg.cc/P5DR1xFK/d84d0f6b7a68adca24e6553f19cb9523.jpg",
  especie: "Panthera tigris",
  peso: 175,
  genero: "Hembra",
  origen: "Tailandia",
  fechaRescate: "2022-07-30",
  edadMesesAlRescate: 0,
  razonRescate: "Encontrada con signos de deshidratación en una zona agrícola",
  recinto: "Zona AC - Tigre 28",
  adopciones: 0
},
       {
  nombre: "Tora",
  img: "https://i.postimg.cc/Z5TwQZYF/cbaf199fb3f7ebc7688031cbca7c1e8d.jpg",
  especie: "Panthera tigris",
  peso: 200,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2021-01-27",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado de un circo donde era sometido a entrenamientos agresivos",
  recinto: "Zona AD - Tigre 29",
  adopciones: 0
},
{
  nombre: "Chandi",
  img: "https://i.postimg.cc/9FcW068D/d441a3041fea378eb028b29357d40b3b.jpg",
  especie: "Panthera tigris",
  peso: 10,
  genero: "Hembra",
  origen: "Nepal",
  fechaRescate: "2025-03-19",
  edadMesesAlRescate: 0,
  razonRescate: "Cría abandonada hallada cerca de una zona urbana en expansión",
  recinto: "Zona AE - Tigre 30",
  adopciones: 0
},
{
  nombre: "Rafael",
  img: "https://i.postimg.cc/qvj1VYzf/2e24cbae1637c45e1b47859411f84bd7.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2022-02-20",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado de un santuario fraudulento denunciado por organizaciones animalistas",
  recinto: "Zona AF - Tigre 31",
  adopciones: 0
},
{
  nombre: "Malaika",
  img: "https://i.postimg.cc/KvQmM0wJ/ecf9f5f1243a3481e31e06e56b060c9a.jpg",
  especie: "Panthera tigris",
  peso: 6,
  genero: "Hembra",
  origen: "India",
  fechaRescate: "2025-04-29",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida prematura y abandonada por su madre, fue rescatada y alimentada manualmente",
  recinto: "Zona AG - Tigre 32",
  adopciones: 0
},
{
  nombre: "Parvati",
  img: "https://i.postimg.cc/fRW6QZHv/086c6a9c8a7692d0f2e08a1244a31232.jpg",
  especie: "Panthera tigris",
  peso: 189,
  genero: "Hembra",
  origen: "Nepal",
  fechaRescate: "2022-04-03",
  edadMesesAlRescate: 0,
  razonRescate: "Salvada de una inundación que arrasó su hábitat natural",
  recinto: "Zona AH - Tigre 33",
  adopciones: 0
},{
  nombre: "Meena",
  img: "https://i.postimg.cc/MK6sv5y6/75a311d574ab923db6aa53dffd6c89d3.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Hembra",
  origen: "Tailandia",
  fechaRescate: "2021-12-28",
  edadMesesAlRescate: 0,
  razonRescate: "Encontrada con signos de intoxicación alimentaria en un campamento turístico",
  recinto: "Zona AI - Tigre 34",
  adopciones: 0
},
{
  nombre: "Devi",
  img: "https://i.postimg.cc/ncxypF69/046495c84b20cda7864e6b6e74761c51.jpg",
  especie: "Panthera tigris",
  peso: 200,
  genero: "Hembra",
  origen: "India",
  fechaRescate: "2022-08-14",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatada tras quedar atrapada en una red de cazadores furtivos",
  recinto: "Zona AJ - Tigre 35",
  adopciones: 0
},
{
  nombre: "Indira",
  img: "https://i.postimg.cc/jSFK8Lsf/e801ade04d8fe2af11604043a7975772.jpg",
  especie: "Panthera tigris",
  peso: 156,
  genero: "Hembra",
  origen: "Nepal",
  fechaRescate: "2022-06-05",
  edadMesesAlRescate: 0,
  razonRescate: "Recuperada de un parque que sufrió abandono por crisis financiera",
  recinto: "Zona AK - Tigre 36",
  adopciones: 0
},
{
  nombre: "Diego",
  img: "https://i.postimg.cc/Rh3qmm2D/10cfc938ab7c2c4a4b8bcee835af4f5e.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
  fechaRescate: "2023-03-21",
  edadMesesAlRescate: 0,
  razonRescate: "Liberado de una cadena de hoteles que lo mantenía como atracción exótica",
  recinto: "Zona AL - Tigre 37",
  adopciones: 0
},{
  nombre: "Bijali",
  img: "https://i.postimg.cc/bN2ZcTfw/b6157dc8a5faf782d5886822c3d7088c.jpg",
  especie: "Panthera tigris",
  peso: 183,
  genero: "Hembra",
  origen: "India",
  fechaRescate: "2020-12-07",
  edadMesesAlRescate: 0,
  razonRescate: "Recuperada junto a sus hermanos tras el cierre de un circo ambulante en India",
  recinto: "Recinto C"
},
{
  nombre: "Zena",
  img: "https://i.postimg.cc/GpLj32Rt/313169e69cd51cda9f8f0a0a5dc676f3.jpg",
  especie: "Panthera tigris",
  peso: 181,
  genero: "Hembra",
  origen: "El Salvador",
  fechaRescate: "2022-12-19",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida en el santuario tras el rescate de su madre procedente de Nepal",
  recinto: "Recinto D"
},
{
  nombre: "Tara",
  img: "https://i.postimg.cc/MHR9V39H/cc5c9e5aff4b8d6ae5ada17ba8395878.jpg",
  especie: "Panthera tigris",
  peso: 24,
  genero: "Hembra",
  origen: "Tailandia",
  fechaRescate: "2025-01-23",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatada herida en una plantación cercana a una zona protegida en Tailandia",
  recinto: "Recinto E"
},
{
  nombre: "Dany",
  img: "https://i.postimg.cc/tTTvM86J/8203ea609b06103f94825c266847d5bd.jpg",
  especie: "Panthera tigris",
  peso: 58,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2024-11-07",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado junto a Diana tras ser encontrados abandonados en un santuario ilegal",
  recinto: "Recinto F"
},
{
  nombre: "Lila",
  img: "https://i.postimg.cc/3R66Mqfr/c215b2bb5e679a7a02255f9ce4a64de0.jpg",
  especie: "Panthera tigris",
  peso: 187,
  genero: "Hembra",
  origen: "El Salvador",
  fechaRescate: "2022-09-03",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida en el santuario tras el rescate de su madre originaria de Nepal",
  recinto: "Recinto D"
},
{
  nombre: "Priya",
  img: "https://i.postimg.cc/m2x1XCfW/1058f50827f8a94e4272309bd0721ff3.jpg",
  especie: "Panthera tigris",
  peso: 145,
  genero: "Hembra",
  origen: "El Salvador",
  fechaRescate: "2024-11-10",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida en el santuario tras el rescate de su madre originaria de Tailandia",
  recinto: "Recinto G"
},
{
  nombre: "Pema",
  img: "https://i.postimg.cc/g0mbJ8k3/d6058135ab490d21e421c7a752394cdf.jpg",
  especie: "Panthera tigris",
  peso: 168,
  genero: "Hembra",
  origen: "El Salvador",
  fechaRescate: "2023-08-13",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida en el santuario tras el rescate de su madre proveniente de India",
  recinto: "Recinto H"
},
{
  nombre: "Alina",
  img: "https://i.postimg.cc/9Q8XvLBr/3d152e90dcb5d433b831a98d7eab7be0.jpg",
  especie: "Panthera tigris",
  peso: 10,
  genero: "Hembra",
  origen: "El Salvador",
  fechaRescate: "2025-03-05",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida en el santuario junto a su hermana Carmen tras el rescate de su madre",
  recinto: "Recinto B"
},
{
  nombre: "Carlos",
  img: "https://i.postimg.cc/dQ4Bk5zt/cc0ebbc4174c954d7b445ff3c51d3170.jpg",
  especie: "Panthera tigris",
  peso: 220,
  genero: "Macho",
  origen: "Nepal",
  fechaRescate: "2021-10-05",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado durante el desmantelamiento de un criadero ilegal en las montañas de Nepal",
  recinto: "Recinto I"
},
{
  nombre: "Adriana",
  img: "https://i.postimg.cc/L51mfRdP/8e9d298b6c6f8630cdd0b4ad083407cc.jpg",
  especie: "Panthera tigris",
  peso: 180,
  genero: "Hembra",
  origen: "El Salvador",
  fechaRescate: "2021-12-22",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida en el santuario tras el rescate de su madre procedente de Tailandia",
  recinto: "Recinto G"
},
{
  nombre: "Diana",
  img: "https://i.postimg.cc/Bn3Vcs90/d264270970c0d90c91bf536b376f2373.jpg",
  especie: "Panthera tigris",
  peso: 32,
  genero: "Hembra",
  origen: "India",
  fechaRescate: "2025-04-27",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatada junto a Dany tras ser encontrados abandonados en un santuario ilegal",
  recinto: "Recinto F"
},
{
  nombre: "Carmen",
  img: "https://i.postimg.cc/fyfD5CLW/a0ae6754b2d12e9db908dba7ed142da5.jpg",
  especie: "Panthera tigris",
  peso: 14,
  genero: "Hembra",
  origen: "El Salvador",
  fechaRescate: "2025-11-18",
  edadMesesAlRescate: 0,
  razonRescate: "Nacida en el santuario junto a su hermana Alina tras el rescate de su madre",
  recinto: "Recinto B"
},
{
  nombre: "Jay",
  img: "https://i.postimg.cc/mkYJGCm6/47580eff7264fdbee80d6fc73e979cea.jpg",
  especie: "Panthera tigris",
  edad: 9,
  peso: 220,
  genero: "Macho",
  origen: "Nepal",
   edadMesesAlRescate: 0,
  fechaRescate: "2022-02-05",
  razonRescate: "Donado por zoológico en quiebra",
  recinto: "Zona Tigres"
},
{
  nombre: "Reinald",
  img: "https://i.postimg.cc/j59kfvF1/032f8a9b39f5fde14ad7212fe69f36f3.jpg",
  especie: "Panthera tigris",
  edad: 9,
  peso: 220,
  genero: "Macho",
  origen: "Nepal",
   edadMesesAlRescate: 0,
  fechaRescate: "2023-03-25",
  razonRescate: "Donado por zoológico en quiebra",
  recinto: "Zona Tigres"
},
{
  nombre: "Terno",
  img: "https://i.postimg.cc/htHTwzmd/3ebd93d8a47247ef6bf8a167c78c4b30.jpg",
  especie: "Panthera tigris",
  edad: 9,
  peso: 220,
  genero: "Macho",
  origen: "Nepal",
   edadMesesAlRescate: 0,
  fechaRescate: "2024-09-07",
  razonRescate: "Donado por zoológico en quiebra",
  recinto: "Zona Tigres"
},
{
  nombre: "Nisha",
  img: "https://i.postimg.cc/4N95S0bx/0904f6c4fc8b4c55ade0b1a3cc7ab045.jpg",
  especie: "Panthera tigris",
  edad: 7,
  peso: 180,
  genero: "Hembra",
  origen: "Tailandia",
   edadMesesAlRescate: 0,
  fechaRescate: "2023-02-18",
  razonRescate: "Donado por zoológico en quiebra",
  recinto: "Zona Tigres"
},{
  nombre: "Rex",
  img: "https://i.postimg.cc/vHR3rq86/d44d3f5eab89c13616649f95cb4df4f6.jpg",
  especie: "Panthera tigris",
  edad: 6,
  peso: 200,
  genero: "Macho",
  origen: "India",
   edadMesesAlRescate: 0,
  fechaRescate: "2023-08-14",
  razonRescate: "Rescatado junto a sus hermanos Bruno y Axel tras ser abandonados en un criadero ilegal",
  recinto: "Recinto J"
},
{
  nombre: "Bruno",
  img: "https://i.postimg.cc/FsKfCB5k/59a67d8e40352cff379a3998970d78e6.jpg",
  especie: "Panthera tigris",
  edad: 6,
  peso: 200,
  genero: "Macho",
  origen: "India",
   edadMesesAlRescate: 0,
  fechaRescate: "2024-03-14",
  razonRescate: "Rescatado junto a sus hermanos Rex y Axel tras ser abandonados en un criadero ilegal",
  recinto: "Recinto J"
},
{
  nombre: "Axel",
  img: "https://i.postimg.cc/mgXy6H5B/20da9730e6f2f2a6b4057666d96c4e60.jpg",
  especie: "Panthera tigris",
  edad: 6,
  peso: 200,
  genero: "Macho",
  origen: "India",
   edadMesesAlRescate: 0,
  fechaRescate: "2024-07-29",
  razonRescate: "Rescatado junto a sus hermanos Bruno y Rex tras ser abandonados en un criadero ilegal",
  recinto: "Recinto J"
},
{
  nombre: "Luca",
  img: "https://i.postimg.cc/Z5KLccjw/de09c1b718a71930415c327307594338.jpg",
  especie: "Panthera tigris",
  edad: 9,
  peso: 220,
  genero: "Macho",
  origen: "Nepal",
   edadMesesAlRescate: 0,
  fechaRescate: "2024-10-26",
  razonRescate: "Tras el cierre de un zoológico en Nepal, fue transferido al santuario junto a Sabrina",
  recinto: "Zona Tigres"
},
{
  nombre: "Sabrina",
  img: "https://i.postimg.cc/htV2fYf5/c56c16500b38ef32de4838923dad087b.jpg",
  especie: "Panthera tigris",
  edad: 9,
  peso: 220,
  genero: "Hembra",
  origen: "Nepal",
   edadMesesAlRescate: 0,
  fechaRescate: "2024-08-21",
  razonRescate: "Transferida junto a Luca tras el cierre definitivo de su zoológico en Nepal",
  recinto: "Zona Tigres"
},
{
  nombre: "Tadeo",
  img: "https://i.postimg.cc/0jYCtXLB/e6d0db444c4f49e81e51303a96c72292.jpg",
  especie: "Panthera tigris",
  edad: 7,
  peso: 180,
  genero: "Macho",
  origen: "Tailandia",
   edadMesesAlRescate: 0,
  fechaRescate: "2024-01-07",
  razonRescate: "Rescatado solitario tras ser hallado encerrado en una jaula en un almacén abandonado",
  recinto: "Recinto K"
}

                
        ],
 "Elefantes": [
           {
  nombre: "Balu",
  img: "https://i.postimg.cc/ZY29M2XV/652f50b01b521a932cdb6b1d477f7fcc.jpg",
  especie: "Elephas maximus",
  peso: 3200,
  genero: "Macho",
  origen: "India",
  fechaRescate: "2021-04-10",
  edadMesesAlRescate: 0,
  razonRescate: "Rescatado tras quedar atrapado en una trampa para rinocerontes en un bosque de Assam",
  recinto: "Zona Elefante A",
  adopciones: 0
},
{
  nombre: "Maya",
  img: "https://i.postimg.cc/8zHhJDzt/a38bce66e03c3691a3f5b9582c339475.jpg",
  especie: "Elephas maximus",
  peso: 2700,
  genero: "Hembra",
  origen: "Tailandia",
  fechaRescate: "2025-12-29",
  edadMesesAlRescate: 0,
  razonRescate: "Liberada de un templo donde era forzada a realizar espectáculos turísticos",
  recinto: "Zona Elefante B",
  adopciones: 0
},
{
  nombre: "Kibo",
  img: "https://i.postimg.cc/25DhXMbP/ffc86e7721860241c5c2686106a9f941.jpg",
  especie: "Loxodonta africana",
  peso: 3400,
  genero: "Macho",
  origen: "Kenia",
  fechaRescate: "2025-08-01",
  edadMesesAlRescate: 0,
  razonRescate: "Huérfano tras un ataque de cazadores furtivos que mataron a su madre por el marfil",
  recinto: "Zona Elefante C",
  adopciones: 0
}

        ],
 "Osos":[
 { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/G3N9Jp4t/9aacae5edf7be7acc6c2491405268c9f.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso Pardo (Ursus arctos)",
  adopciones: 0
  },
{ nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/GtcB65Cp/db7d2491aeab5469134d7a61831eb674.jpg ",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Canadá",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso grizzly (Ursus arctos horribilis)",
  adopciones: 0
  }
,
{ nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/XNH7VJKL/e58d4afd6e5ae1d3d2046c541bf1eb01.jpg ",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso kodiak (Ursus arctos middendorffi)",
  adopciones: 0
  }
,
{ nombre: "SIN NOMBRE",
     img: " https://i.postimg.cc/jSZrh38X/00000d48a2db8e42b8531392eb1dc3f4.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso Panda gigante (Ailuropoda melanoleuca)",
  adopciones: 0
  }
,
{ nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/gcZp4BWy/ecfdf752676f22fc254b8a7c5aae76e1.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso Polar (Ursus maritimus)",
  adopciones: 0
  }
,
{ nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/G2bG12Pr/2f1d3499446d6bac8c44add66dad4628.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso negro americano (Ursus americanus)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: " https://i.postimg.cc/sgShQSws/f3f15d5762c4fe0c23f7ad3a7c94645a.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso negro asiático (Ursus thibetanus)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/kX68gCWr/0de8b34230d82549ef0bb7b2701f01c1.jpg ",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso bezudo (Melursus ursinus)",
  adopciones: 0
  },
    { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/vm3Dv25L/7bf53aa8d587f4ad0dba6c4fba10a5ce.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso mayalo (Helarctos malayanus)",
  adopciones: 0
  },
    { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/pVnz2xDw/cdfb6e1e0e3ae7a4402a5ca12d1548f7.jpg ",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: " ",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Oso andino (Tremarctos ornatus)",
  adopciones: 0
  }

       
        ],
  "Lobos":[

       { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/vTB7Wnnm/7822e919644010429b36227583348e03.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Canis lupus",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/DyN6PxB3/430f7bf0b9a31908b14ce40149cc23db.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Canis lupus",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/Qx6xMyh5/ef562ff235495d04a278a172e02b2896.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo árabe (Canis lupus arabs)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/tRsYxbvk/be5cfbae13e810ea0c2869ec795fa6ef.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo europeo (Canis lupus lupus)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/NM5fm8DF/f7a2de613fd09acb9b6d7c3142c23e59.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo ibérico (Canis lupus signatus)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/T1v1xLjP/0b4cc31cfc6efa5ec3117c474cb56d25.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo de tundra (Canis lupus albus)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/9M6bjpNq/7cf023a283aaea18be3cd5a66e128fcc.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo del Himalaya (Canis lupus chanco)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/dV9TsBDT/5fe7aba82efb1958e4785aabc180654f.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo canadiense (Canis lupus occidentalis)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/QMDNt9H9/2927ab1582e0df5306931e391b43f1f4.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo de las Montañas Rocosas (Canis lupus irremotus)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/ZnQ77d1w/a9c20fa38da19ec5a88513d2d38b6681.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo del Ártico (Canis lupus arctos)",
  adopciones: 0
  },
    { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/pTq1j7kb/79dbdb2da413c3d91ec5eaa5ab197697.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo mexicano (Canis lupus baileyi)",
  adopciones: 0
  },
    { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/tgdcq7xg/595da1e295d5179c972647a8eab6c19e.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo del este (Canis lupus lycaon)",
  adopciones: 0
  },
    { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/6pfs37dP/indian-wolf-Pavan-Kunder.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo indio (Canis lupus pallipes)",
  adopciones: 0
  },
  { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/28b7H4qp/9a831b1c4a69403cace420679d95046b.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Lobo del Mackenzie (Canis lupus mackenzii)",
  adopciones: 0
  }
        ],
  "Zorros":[
        { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/x8MVd845/0a9fe76bc229fef1b931471c86b3fa71.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro rojo (Vulpes vulpes)",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/Z5WYk8Pt/e02f448b016d7f558f99d77ca953928b.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:" Zorro del desierto (Vulpes zerda) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/hPf8YYYS/7bb1e538539d55c43afd0a99ab6c5847.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro ártico (Vulpes lagopus) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/W1pQkTY2/6d40cc4b79955665d0a632eac9d4661b.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro pálido (Vulpes pallida) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/d0WKjcqY/d94c0bb74fbad72076cf1b33fae1fd94.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro del Rüppell (Vulpes rueppellii) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/QMBJMcnr/833e50a0b326a2cae39635782347d5b8.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro de Blanford (Vulpes cana) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/MHg6b2mT/fa8a4012571107d5de225a81e25289ca.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro corsac (Vulpes corsac) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/Y9Z08WpM/a8d97e8db2ddf140ef6291d3be6fda1a.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro de Bengala (Vulpes bengalensis) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/Y9YBKG6p/830ef13aa3ce32f3ea840f7d6eb7d614.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro tibetano (	Vulpes ferrilata) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/J0FNNnFk/efe3806f59f23aee981c34611ffc1deb.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro kit (norteamericano) (Vulpes macrotis) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/j2T5GrJF/0c065fd43022db3084fcd77814fe97c0.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro veloz (Vulpes velox) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/DyjvcG5D/434e9f45d229ece660980e9f0e14597a.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro gris (Urocyon cinereoargenteus) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/tTjpgNC1/50463238e0dd0a52faa971da70d8ed12.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:" Zorro isleño (Urocyon littoralis) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/pr0HqNQ8/e1bdf7623a594937c91d2861f5246c01.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro de Darwin (Lycalopex fulvipes) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/vHNynsZw/e2123c893cc3baae4d908d43b88441f9.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro culpeo (Lycalopex culpaeus) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/43RrvNCq/abd30e4df1b7623a1c0699af9a36034b.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro chilla (o gris sudamericano) (Lycalopex griseus) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/qM9Y0M7q/3ab20cee98af9bc898e480a98ddaf80b.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:" Zorro de Sechura (Lycalopex sechurae) ",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/B6ky6qCm/977f87cc6e61588b49da93554f57762b.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro andino (Lycalopex gymnocercus)",
  adopciones: 0
  },
   { nombre: "SIN NOMBRE",
     img: "https://i.postimg.cc/gchtsbsP/3f646734bebfaed52c035676920c9afe.jpg",
    edadMesesAlRescate: 0,
    peso: 300,
    genero: " ",
    origen: "Europa",
    fechaRescate: " ",
    razonRescate: " ",
    recinto: " ",
    especie:"Zorro hoary (gris canadiense) (Lycalopex vetulus) ",
  adopciones: 0
  }
  
        ],
        "Jirafas":[
         
        ],
        "Hipopótamos":[
     
        ],
        "Rinocerontes":[
          
        ],
        "Cebras":[

        ],
        "Búfalos":[
           
        ],
        "Camellos":[

        ],
        "Canguros":[
           
        ],
        "Pandas rojos":[
         
        ],
        "Chimpancé":[
           
        ],
        "Gorilas":[
            
         
        ],
        "Koala":[
           
        ],
        "Ciervo":[
           
        ],
        "Conejos":[
          
        ],
        "Erizos":[
           
        ],
        "Armadillo":[
           
        ],
        "Perezosos":[
            
        ],
        "Mapaches":[
          
        ],
        "Hurones":[
           
        ],
        "Castores":[
          
    
        ],
        "Suricatas":[
            
        ],
        "Lemur":[
           
           
        ],
        "Linces":[
            
        ],
        "Tapir":[
        
        ],
        "Gacelas":[
         
        ],
        "Alces":[
          
        ],
        "Leopardos":[
          
        ],
        "Pumas":[
           
        ],
        "Guepardos":[
           
        ],
        "Panteras":[
            { name: "Liccy", img: "leon1.jpg", age: "8 años", weight: "200 kg", gender: "Hembra", origin: "Londres", rescued: "2014-03-19" },
            { name: "Emily", img: "", age: "8 años", weight: "250 kg", gender: "Hembra", origin: "Nepal", rescued: "2014-04-22" },
              { name: "", img: "https://i.postimg.cc/Bb1g4y7p/da377acddf01cdb9afbd021905faa242.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Nina", img: "https://i.postimg.cc/MKQPSchw/1073137a8614ae7c14f7d57b1e03c5fe.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Paco", img: "https://i.postimg.cc/vZwPHYsV/6bf5be2d7cb791d81ba0f3d16ca43719.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
                { name: "", img: "", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "", img: "https://i.postimg.cc/ncJRnVZQ/58a693d612f434988815604a8037f25a.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "", img: "https://i.postimg.cc/7hM63LTz/11d75cae4d1f44121d110ec4a2e4f05b.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
           { name: "", img: "", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },

        ],
        "Jaguares":[
           
        ],
         "Jaguarundi":[
            { name: "Keira", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Neron", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" }
         ],
        "Delfines":[
          
        ],
        "Belugas":[
         
        ],
        "Orcas":[
           
        ],
        "Narval":[
          
        ],
        "Leones marinos":[
            
        ],
        "Morsa":[
           
        ],
        "Nutrias":[
          
          
        ],
        "Dugongo":[
          
        ],
        "Manatí del Caribe":[
          
         
        ],
        "Lobos marinos":[
           
        ],
        "Tiburón blanco":[
         
        ],
        "Pez payaso":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pez espada":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pez luna":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pulpo gigante del Pacífico":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Calamar":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Cangrejo violinista":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Estrella de mar girasol":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Lirio de mar":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Tortugas":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Medusa luna":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Anémona de mar gigante":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pez volador":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Tiburones":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Caballito de mar":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Águilas":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Avestruz":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Búhos":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Buitres":[
           
        ],
        "Canario":[
         
        ],
        "Cardenal rojo":[
           
        ],
        "Cigüeñas":[
          
        ],
        "Cóndor":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Colibrí":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Cuervos":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Faisán dorado":[
  
        ],
        "Flamenco rosado":[
      
        ],
        "Gallina de Guinea":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Garza":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Gorrión":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Kiwi":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Loro":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pato":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pavo real":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pelícano blanco":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Pingüino emperador":[
            
        ],
        "Guacamayas":[
            
        ],
        "Cacatúas":[
            
        ],
        "Tucanes":[
            { name: "Simba", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Mufasa", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Sarabi", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" },
            { name: "Dexter", img: "leon1.jpg", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" },
            { name: "Snow", img: "leon2.jpg", age: "8 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" },
            { name: "Nala", img: "leon3.jpg", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" }
        ],
        "Quetzal":[
        
        ],
        "Emú":[
           
        ],
        "Serpientes":[
          
        ],
        "Dragón de Komodo":[
           
        ],
        "Iguanas":[
           
        ],
        "Camaleones":[
           
        ],
        "Geckos":[
           
        ],
        "Lagartos":[
          
        ],
        "Tortugas":[
            
        ],
        "Cocodrilos":[
           
         
        ],
        "Caimanes":[
           
        ],
        "Basilisco esmeralda":[
        
        ],

        "Gavial malayo":[
        
        ],
        "Axolote":[
           
        ],
        "Panda rojo":[
           
        ],
        "Hienas":[
          
        ],
       
    };
  

saveAnimalData();
    // Mostrar detalles de un animal
    function showAnimalDetails(animal) {
        const mainContainer = document.getElementById("main-container");
        const detailsContainer = document.getElementById("details-container");
        const animalTitle = document.getElementById("animal-title");
        const animalList = document.getElementById("animal-list");
    
       
    
        mainContainer.style.display = "none";
        
    detailsContainer.style.display = "block";
    animalTitle.innerText = `Ejemplares de ${animal}`;
    animalList.innerHTML = ""; // Limpiar contenido anterior

//FUNCIÓN PARA LA EDAD POR AÑOS
function calcularEdadActual(edadMesesAlRescate, fechaRescate) {
  if (isNaN(edadMesesAlRescate)) return "Edad desconocida";

  const fechaRescateDate = new Date(fechaRescate);
  const hoy = new Date();

  let años = hoy.getFullYear() - fechaRescateDate.getFullYear();
  let meses = hoy.getMonth() - fechaRescateDate.getMonth();

  if (meses < 0) {
    años--;
    meses += 12;
  }

  const totalMeses = edadMesesAlRescate + años * 12 + meses;

  if (totalMeses < 12) return `${totalMeses} mes${totalMeses !== 1 ? 'es' : ''}`;

  const edadAnios = Math.floor(totalMeses / 12);
  return `${edadAnios} año${edadAnios !== 1 ? 's' : ''}`;
}



    // Mostrar los animales
animalData[animal].forEach(item => {
  const card = document.createElement("div");
card.classList.add("card", "animal-detail-card");


const inner = document.createElement("div");
inner.classList.add("card-inner");


// --- Cara frontal con imagen y tabla ---
const front = document.createElement("div");
front.classList.add("card-face", "card-front");

const img = document.createElement("img");
img.src = item.img;
img.alt = item.nombre;

const h3 = document.createElement("h3");
h3.innerText = item.nombre;

const table = document.createElement("table");
table.classList.add("animal-table");
table.innerHTML = `
 <tr><th>Edad</th><td>${calcularEdadActual(item.edadMesesAlRescate, item.fechaRescate)}</td></tr>

  <tr><th>Peso</th><td>${item.peso} kg</td></tr>
  <tr><th>Sexo</th><td>${item.genero}</td></tr>
  <tr><th>Origen</th><td>${item.origen}</td></tr>
 <tr><th>Adopción: </th><td>$${item.donacionTotal ? item.donacionTotal.toFixed(2) : "0.00"}</td></tr>

`;




// Ahora añades todo al front
    front.appendChild(img);
    front.appendChild(h3);
    front.appendChild(table);
   // --- Cara trasera con info extra ---
   // --- Cara trasera con info extra ---
const cardBack = document.createElement("div");
cardBack.classList.add("card-face", "card-back");

// Validar razón de rescate
const rescueText = item.razonRescate 
    ? `${item.razonRescate}` 
    : `no se ha registrado rescate`;

const backContent = document.createElement("div");
backContent.innerHTML = `
    <h2>${item.nombre}</h2>
    <h3>Proviene de ${item.origen}. </h3>
    <h3>  ${rescueText} desde el ${item.fechaRescate}.<h3>
    <h3>Se encuentra actualmente en el recinto: ${item.recinto} </h3>
    <h3>Su especie es: ${item.especie}</h3>
`;

cardBack.appendChild(backContent);

// --- Unir caras a la tarjeta interna ---
inner.appendChild(front);
inner.appendChild(cardBack); // Asegúrate que sea 'cardBack' y no 'back'
card.appendChild(inner);

// Evento de giro al hacer clic
card.addEventListener("click", () => {
    inner.classList.toggle("flipped");
});

animalList.appendChild(card);

});


  }
    
    // Volver a la vista principal
    function goBack() {
        document.getElementById("main-container").style.display = "flex";
        document.getElementById("details-container").style.display = "none";
        document.querySelector(".search-bar").style.display = "block"; // Mostrar la barra de búsqueda de nuevo
    }