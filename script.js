const animalData = {
    
        "Leones": [
            { name: "Simba", img: "https://i.postimg.cc/g0MhMNjD/1f339afeb6840c1993444fa6fbfa2a74.jpg", especie: "Panthera leo",age: "4 años", weight: "200 kg", gender: "Macho", origin: "África", rescued: "2020-03-15",rescueReason: "donado por zoológico", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Nala", img: "https://i.postimg.cc/k4DbC7sr/a00f6dd6c018a4dc6002e093e3bec72f.jpg",especie: "Panthera leo", age: "5 años", weight: "168 kg", gender: "Hembra", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "criada en el santuario en condiciones dignas y sanas", recinto:"L1", clasificacion: "Carnívoro"  },
             { name: "Kenny", img: "https://i.postimg.cc/GmhW3hg2/b399f3074f95b81f45b677b446402575.jpg", especie: "Panthera leo", age: "5 meses", weight: "50 kg", gender: "Macho", origin: "El Salvador", rescued: "2025-01-11", rescueReason: "criado en el santuario en condiciones dignas y sanas, es hijo de Simba y Nala", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Kiara", img: "https://i.postimg.cc/xC7bTBpX/80b89aedd32bf55bf93777d08baabe45.jpg", especie: "Panthera leo", age: "4 años", weight: "127 kg", gender: "Hembra", origin: "El Salvador", rescued: "2021-05-20", rescueReason: "criado en el santuario en condiciones dignas y sanas, es hijo de Simba y Nala", recinto:"L2", clasificacion: "Carnívoro" },
            { name: "Kovu", img: "https://i.postimg.cc/43wKqpk4/0b108eac95db2f9241356cad8bc06c80.jpg", especie: "Panthera leo", age: "7 años", weight: "153 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "rescatado de tráfico animal", recinto:"L2", clasificacion: "Carnívoro"  },
           

            { name: "Mufasa", img: "https://i.postimg.cc/kgTNV9f7/9dbc2aac3d22ac614670979e1f26ed7c.jpg", especie: "Panthera leo", age: "8 años", weight: "206 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },
            { name: "Sarabi", img: "https://i.postimg.cc/RZ7Wmd89/171a473ae6e98ff2ad21ec68764fb2f7.jpg", especie: "Panthera leo", age: "5 años", weight: "132 kg", gender: "Hembra", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            

            { name: "Dexter", img: "https://i.postimg.cc/P5mM7Rqm/Dexter.jpg", especie: "Panthera leo", age: "5 años", weight: "215 kg", gender: "Macho", origin: "África", rescued: "2020-03-15", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro" },
            { name: "Snow", img: "https://i.postimg.cc/t46fDkP6/Snow.jpg", especie: "Panthera leo", age: "4 años", weight: "194 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Rori", img: "https://i.postimg.cc/3N3dYGkR/Rori.jpg", especie: "Panthera leo", age: "5 años", weight: "200 kg", gender: "Macho", origin: "África", rescued: "2020-03-15", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Yuna", img: "https://i.postimg.cc/1X5YsnTm/8bb94ad27220f7c9053e9cd8345d2f3c.jpg", especie: "Panthera leo", age: "8 años", weight: "143 kg", gender: "Hembra", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Timba", img: "https://i.postimg.cc/CK9X4ChB/07e2559a1b7a231e9b7e33603dd479b4.jpg", especie: "Panthera leo", age: "3 años", weight: "30 kg", gender: "Macho", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },

            { name: "Moyo", img: "https://i.postimg.cc/rsgDLQTh/459984b64631473aa75175bbb4597aee.jpg", especie: "Panthera leo", age: "7 años", weight: "223 kg", gender: "Macho", origin: "África", rescued: "2020-03-15", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro" },
            { name: "Amani", img: "https://i.postimg.cc/dVPhgp54/fbec36d2c3e238abfb046f409459e1f5.jpg", especie: "Panthera leo", age: "8 años", weight: "137 kg", gender: "Hembra", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Scar", img: "https://i.postimg.cc/SxSd0x0d/da25cfb467da519b507a8268f767b73d.jpg", especie: "Panthera leo", age: "4 años", weight: "150 kg", gender: "Macho", origin: "Italia", rescued: "2021-05-20", rescueReason: "rescatado de un circo en Italia ", recinto:"L1", clasificacion: "Carnívoro"  },
            { name: "Zira", img: "https://i.postimg.cc/FsffF0q7/a30a2f8a56af1df5fc5350c2960555e6.jpg",especie: "Panthera leo", age: "8 años", weight: "146 kg", gender: "Hembra", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },

            { name: "Brutus", img: "https://i.postimg.cc/SsFjFrNC/Brutus.jpg",especie: "Panthera leo", age: "7 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Karl", img: "https://i.postimg.cc/Tw1xs5ng/Karl.jpg", especie: "Panthera leo", age: "7 años", weight: "182 kg", gender: "Macho", origin: "África", rescued: "2020-03-15", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },

            { name: "Zeus", img: "https://i.postimg.cc/SxZTThz5/02369b6ad4230a9643cd40a2927fb806.jpg",especie: "Panthera leo", age: "4 años", weight: "183 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro" },
            { name: "Shira", img: "https://i.postimg.cc/52nqL4sG/5687d7c732d8e13f81cb9a9ef61ba276.jpg",especie: "Panthera leo", age: "4 años", weight: "120 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Jengo", img: "https://i.postimg.cc/0yDdvgWt/2f098a906ff8b08b3e1404e5dc682330.jpg",especie: "Panthera leo", age: "5 meses", weight: "40 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Zuri", img: "https://i.postimg.cc/wBxLbnBn/b11969762a688059515e559d2ad76a5d.jpg",especie: "Panthera leo", age: "4 años", weight: "129 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro" },

            { name: "Kali", img: "https://i.postimg.cc/qMFNK9Pp/Male-Lion-Shumba-stunning-cat.jpg",especie: "Panthera leo", age: "5 años", weight: "167 kg", gender: "Macho", origin: "África", rescued: "2020-03-15", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro" },
            { name: "Imani", img: "https://i.postimg.cc/65NpLCS2/4180314487453dc50efe7f442b072b1a.jpg",especie: "Panthera leo", age: "5 años", weight: "136 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Jabari", img: "https://i.postimg.cc/XYr1C7jQ/bf46a25598f36211ec4c2f0902349c02.jpg",especie: "Panthera leo", age: "8 años", weight: "90 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro" },
            { name: "Samira", img: "https://i.postimg.cc/pXBDMVMT/52d27b166ef4f0a0e3bab89be26ac8d2.jpg",especie: "Panthera leo", age: "4 meses", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Shujaa", img: "https://i.postimg.cc/PJ4HwmZ8/Shujaa.jpg", especie: "Panthera leo", age: "5 años", weight: "184 kg", gender: "Macho", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Nadia", img: "https://i.postimg.cc/zBBvnrfX/917e110b70981f724df7dd8494201433.jpg",especie: "Panthera leo", age: "5 años", weight: "135 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"},

            { name: "Taji", img: "https://i.postimg.cc/ncV8j9Lq/Taji.jpg",especie: "Panthera leo", age: "6 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Leonora", img: "https://i.postimg.cc/XJvxQLY6/12a6e8fa98c5f482e9381895824a1525.jpg",especie: "Panthera leo", age: "4 años", weight: "144 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro" },

            { name: "Rami", img: "https://i.postimg.cc/JhW00TM4/Rami.jpg",especie: "Panthera leo", age: "5 años", weight: "186 kg", gender: "Macho", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1" },
            { name: "Daphne", img: "https://i.postimg.cc/T2Vbn2w9/ed748a8fdd6ce2e7f16d08c3ea5261f4.jpg",especie: "Panthera leo", age: "4 años", weight: "147 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Amir", img: "https://i.postimg.cc/d0CSMYqV/6f9c7e1b103c3d88c4e12269dce983f3.jpg",especie: "Panthera leo", age: "5 meses", weight: "43 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"},
            { name: "Chloe", img: "https://i.postimg.cc/MGNGkYGb/87b0152badccab22ae23803da89d7f1a.jpg",especie: "Panthera leo", age: "4 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Hercules", img: "https://i.postimg.cc/fbv4qrYF/fae1c4f9c772bccc1aafabba9b8806a1.jpg",especie: "Panthera leo", age: "2 meses", weight: "34 kg", gender: "Macho", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Selene", img: "https://i.postimg.cc/jjnrzN3D/2e2fed93607177d29793f7729d31a526.jpg",especie: "Panthera leo", age: "7 meses", weight: "34 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Themis", img: "https://i.postimg.cc/ZRyX44RD/233cfda71d4443827b2af70b1fe3e64f.jpg",especie: "Panthera leo", age: "3 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15", rescueReason: "donado por zoológico en quiebra", recinto:"L1" , clasificacion: "Carnívoro"},
            { name: "Anika", img: "https://i.postimg.cc/DZVWbR3H/77ac5050a11b2e7df699f21013f0e107.jpg",especie: "Panthera leo", age: "6 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Suryan", img: "https://i.postimg.cc/FKk3SvF4/Suryan.jpg",especie: "Panthera leo", age: "5 años", weight: "178 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Kiran", img: "https://i.postimg.cc/kXHp8yDK/049ca5c0a950d0deca1b4bf3f2abc2fe.jpg",especie: "Panthera leo", age: "8 meses", weight: "50 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },

            { name: "Zulu", img: "https://i.postimg.cc/qMK08tfq/10004d88832543695256ab78338c06e5.jpg",especie: "Panthera leo", age: "4 años", weight: "150 kg", gender: "Macho", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Thandi", img: "https://i.postimg.cc/Dz49MM42/e050731a25842c91ab9dedc570d12dd5.jpg", especie: "Panthera leo", age: "4 años", weight: "147 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Nayla", img: "https://i.postimg.cc/MKW8p5ND/307e3fdb4670f3ea73b9f273655ce37c.jpg", age: "7 meses", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },


            { name: "Omar", img: "https://i.postimg.cc/RZLv0vFq/Omar.jpg", especie: "Panthera leo", age: "5 años", weight: "200 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },
            { name: "Penda", img: "https://i.postimg.cc/xCTHqf1T/38f998f1c8d8046293868aca88159717.jpg",especie: "Panthera leo", age: "5 meses", weight: "43 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },

            { name: "King", img: "https://i.postimg.cc/fyJ8shvg/7dc201d5e01e57b5213b2fbda2c54a88.jpg", especie: "Panthera leo", age: "3 años", weight: "150 kg", gender: "Macho", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Ariya", img: "https://i.postimg.cc/g0Gn2RFh/21c14258b05b5aa80faf1a235710353c.jpg", age: "5 años", weight: "135 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },

            { name: "Hunter", img: "https://i.postimg.cc/htVF79qP/18e2abbfa121446e6068700b556b5610.jpg",especie: "Panthera leo", age: "5 años", weight: "190 kg", gender: "Macho", origin: "África", rescued: "2020-03-15" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Queen", img: "https://i.postimg.cc/4xW4gq3V/315f82e25c7563caf9a202cd0e962f7f.jpg",especie: "Panthera leo", age: "4 años", weight: "135 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra" , recinto:"L1" , clasificacion: "Carnívoro"},

            { name: "Trueno", img: "https://i.postimg.cc/d3sbHw07/Trueno.jpg",especie: "Panthera leo", age: "4 años", weight: "179 kg", gender: "Macho", origin: "Kenia", rescued: "2021-05-20",rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Bella", img: "https://i.postimg.cc/kg0Mj8Yt/396e36191158ecae81206e65daf3ecba.jpg", especie: "Panthera leo",age: "3 años", weight: "150 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20", rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro"  },

            { name: "Titan", img: "https://i.postimg.cc/6pP6T9VL/1ecaca9179ac439c8f0a31b7196d644b.jpg",especie: "Panthera leo", age: "7 años", weight: "210 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Asha", img: "https://i.postimg.cc/pVBXVw9y/8367f80dbbf9046c9d389ee961292f5d.jpg",especie: "Panthera leo", age: "6 meses", weight: "35 kg", gender: "Hembra", origin: "Kenia", rescued: "2021-05-20" , rescueReason: "donado por zoológico en quiebra", recinto:"L1", clasificacion: "Carnívoro" },
            { name: "Diller", img: "https://i.postimg.cc/Hkd9qS00/61e4648fd3e696bc9218376727cce785.jpg",especie: "Panthera leo", age: "3 años", weight: "245 kg", gender: "Macho", origin: "Sudáfrica", rescued: "2018-07-10", rescueReason: "donado por zoológico en quiebra" , recinto:"L1", clasificacion: "Carnívoro" }
        ],

        "Tigres": [
            { name: "Rajah", img: "https://i.postimg.cc/sX4hqvVV/0ff9d277ae7ff5b1d7109085fe0497fa.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Shere Khan", img: "https://i.postimg.cc/fRchcM2c/141b9022b0db64378710ac673b48c30b.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Drake", img: "https://i.postimg.cc/zfx67vng/530f6f004f23be861a5843b481deb7bb.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},

            { name: "Rocco", img: "https://i.postimg.cc/kX4bYJLm/2acc60eafdfa9b31df9e88a0964ee57b.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Ares", img: "https://i.postimg.cc/FKG56DQ1/72427c0764d6bc52f0ce7c9186a43081.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Tristan", img: "https://i.postimg.cc/ZqJzjX21/3b56073c437683618b133eaf284fc740.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },

            { name: "Orion", img: "https://i.postimg.cc/sDC6p7tL/6a9d1a79771624d1edece6fe46fb8d24.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Freya", img: "https://i.postimg.cc/5NycQfVk/50c48ce09cc5312f7f7377728d8830fe.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Jade", img: "https://i.postimg.cc/gjBJW4Vz/e57fc77dfb84fe5f422b02423acf5540.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },

            { name: "Samuel", img: "https://i.postimg.cc/BbqxgrK7/67655b2b0d432e06b9bdc93e3ed31647.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },

            { name: "Jade", img: "https://i.postimg.cc/QtqSXyMZ/73025c2d1013e4547628f0cdb23a8716.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},

            { name: "Bianca", img: "https://i.postimg.cc/PqzJr90y/5a25c45c0c845dd564a517e8e16f3a16.jpg", age: "6 años", weight: "200 kg", gender: "Hembra", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Olivia", img: "https://i.postimg.cc/3rkNgDg2/f2e2291a54e565c6881e6f17a389a447.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Margarita", img: "https://i.postimg.cc/k5rLH8tk/68a7d123e616d95c31bfee52521302a3.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},

            { name: "Astrid", img: "https://i.postimg.cc/BQkXhxxT/d7775e9b5796987a2197e24261fd1a65.jpg", age: "6 años", weight: "200 kg", gender: "Hembra", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Lia", img: "https://i.postimg.cc/HWSRgFy0/d6acd4555935346141492c6705403741.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Sundar", img: "https://i.postimg.cc/NMSgNp1m/171f27b67d2edc8e8e900e93714557f9.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},

            { name: "Shera", img: "https://i.postimg.cc/pVSxxG5F/8cb3ca8a06a0271e4d72153c3228acd6.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Kumar", img: "https://i.postimg.cc/vBHM8CvW/1fbd9f36c30f25d0da04aca1302b7252.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Indra", img: "https://i.postimg.cc/pXnvdfK1/e2c5f68f3c92c9a96b5f9e7fa2a7101c.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},

            { name: "Javan", img: "https://i.postimg.cc/wBxT3tqy/415203ca3256279bdea3ea0442f407e9.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Rudra", img: "https://i.postimg.cc/wxnvFTVZ/fe3f604ec6143318a8b79f04fa36a28f.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Tenzin", img: "https://i.postimg.cc/CxgKTP94/d0bd8215f3beb87f500b2c6093784426.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },

            { name: "Manas", img: "https://i.postimg.cc/pXg2QG2H/9958409d2fae909f513db5a434baf315.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Sumat", img: "https://i.postimg.cc/Kzyk9cxm/2f89307ff1023345ffa95cada8a74973.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Bahadur", img: "https://i.postimg.cc/yNKstDgp/05e4a0711b6c794e967da9a7379cd57d.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },

            { name: "Hanuman", img: "https://i.postimg.cc/Qxg6SVDd/2f9f142bd9b7200eb13d18c320568c19.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Kumari", img: "https://i.postimg.cc/nrxbgmjd/bb5e75b1f15c9fc8a9eea2ebd72b0276.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Sita", img: "https://i.postimg.cc/P5DR1xFK/d84d0f6b7a68adca24e6553f19cb9523.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },

            { name: "Tora", img: "https://i.postimg.cc/Z5TwQZYF/cbaf199fb3f7ebc7688031cbca7c1e8d.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Chandi", img: "https://i.postimg.cc/9FcW068D/d441a3041fea378eb028b29357d40b3b.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Rafael", img: "https://i.postimg.cc/qvj1VYzf/2e24cbae1637c45e1b47859411f84bd7.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},

            { name: "Malaika", img: "https://i.postimg.cc/KvQmM0wJ/ecf9f5f1243a3481e31e06e56b060c9a.jpg", age: "6 años", weight: "200 kg", gender: "Hembra", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Parvati", img: "https://i.postimg.cc/fRW6QZHv/086c6a9c8a7692d0f2e08a1244a31232.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Meena", img: "https://i.postimg.cc/MK6sv5y6/75a311d574ab923db6aa53dffd6c89d3.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },

             { name: "Devi", img: "https://i.postimg.cc/ncxypF69/046495c84b20cda7864e6b6e74761c51.jpg", age: "6 años", weight: "200 kg", gender: "Hembra", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Indira", img: "https://i.postimg.cc/jSFK8Lsf/e801ade04d8fe2af11604043a7975772.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Diego", img: "https://i.postimg.cc/Rh3qmm2D/10cfc938ab7c2c4a4b8bcee835af4f5e.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },
            { name: "Bijali", img: "https://i.postimg.cc/bN2ZcTfw/b6157dc8a5faf782d5886822c3d7088c.jpg", age: "6 años", weight: "200 kg", gender: "Hembra", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Zena", img: "https://i.postimg.cc/GpLj32Rt/313169e69cd51cda9f8f0a0a5dc676f3.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Tara", img: "https://i.postimg.cc/MHR9V39H/cc5c9e5aff4b8d6ae5ada17ba8395878.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Dany", img: "https://i.postimg.cc/tTTvM86J/8203ea609b06103f94825c266847d5bd.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Lila", img: "https://i.postimg.cc/3R66Mqfr/c215b2bb5e679a7a02255f9ce4a64de0.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Priya", img: "https://i.postimg.cc/m2x1XCfW/1058f50827f8a94e4272309bd0721ff3.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Pema", img: "https://i.postimg.cc/g0mbJ8k3/d6058135ab490d21e421c7a752394cdf.jpg", age: "6 años", weight: "200 kg", gender: "Hembra", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Alina", img: "https://i.postimg.cc/9Q8XvLBr/3d152e90dcb5d433b831a98d7eab7be0.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Carlos", img: "https://i.postimg.cc/dQ4Bk5zt/cc0ebbc4174c954d7b445ff3c51d3170.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Adriana", img: "https://i.postimg.cc/L51mfRdP/8e9d298b6c6f8630cdd0b4ad083407cc.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },
            { name: "Diana", img: "https://i.postimg.cc/Bn3Vcs90/d264270970c0d90c91bf536b376f2373.jpg", age: "6 años", weight: "200 kg", gender: "Hembra", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Carmen", img: "https://i.postimg.cc/fyfD5CLW/a0ae6754b2d12e9db908dba7ed142da5.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Jay", img: "https://i.postimg.cc/mkYJGCm6/47580eff7264fdbee80d6fc73e979cea.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Reinald", img: "https://i.postimg.cc/j59kfvF1/032f8a9b39f5fde14ad7212fe69f36f3.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Terno", img: "https://i.postimg.cc/htHTwzmd/3ebd93d8a47247ef6bf8a167c78c4b30.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },

            { name: "Nisha", img: "https://i.postimg.cc/4N95S0bx/0904f6c4fc8b4c55ade0b1a3cc7ab045.jpg", age: "7 años", weight: "180 kg", gender: "Hembra", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },
            { name: "Rex", img: "https://i.postimg.cc/DZ8vdtb7/a6dffe5715d2d6ce76519d3f3c75d74b.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Luca", img: "https://i.postimg.cc/Z5KLccjw/de09c1b718a71930415c327307594338.jpg", age: "9 años", weight: "220 kg", gender: "Macho", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" },
            { name: "Tadeo", img: "https://i.postimg.cc/0jYCtXLB/e6d0db444c4f49e81e51303a96c72292.jpg", age: "7 años", weight: "180 kg", gender: "Macho", origin: "Tailandia", rescued: "2020-11-22", rescueReason: "donado por zoológico en quiebra" },
            { name: "Bruno", img: "https://i.postimg.cc/FsKfCB5k/59a67d8e40352cff379a3998970d78e6.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14", rescueReason: "donado por zoológico en quiebra" },
            { name: "Axel", img: "https://i.postimg.cc/mgXy6H5B/20da9730e6f2f2a6b4057666d96c4e60.jpg", age: "6 años", weight: "200 kg", gender: "Macho", origin: "India", rescued: "2019-08-14" , rescueReason: "donado por zoológico en quiebra"},
            { name: "Sabrina", img: "https://i.postimg.cc/htV2fYf5/c56c16500b38ef32de4838923dad087b.jpg", age: "9 años", weight: "220 kg", gender: "Hembra", origin: "Nepal", rescued: "2017-06-05", rescueReason: "donado por zoológico en quiebra" }
            
                
        ],
        "Elefantes": [
            { name: "Dumbo", img: "elefante1.jpg", age: "12 años", weight: "5000 kg", gender: "Macho", origin: "Sri Lanka", rescued: "2015-04-02", rescueReason: "donado por zoológico en quiebra" },
            { name: "Manny", img: "elefante2.jpg", age: "15 años", weight: "5400 kg", gender: "Macho", origin: "India", rescued: "2013-09-30", rescueReason: "donado por zoológico en quiebra" },
            { name: "Babar", img: "elefante3.jpg", age: "10 años", weight: "4800 kg", gender: "Macho", origin: "África", rescued: "2016-07-18", rescueReason: "donado por zoológico en quiebra" }

        ],
        "Osos":[

       
        ],
        "Lobos":[

       
        ],
        "Zorros":[
        
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
        "Pandas":[
         
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
    img.alt = item.name;

    const h3 = document.createElement("h3");
    h3.innerText = item.name;

    const table = document.createElement("table");
    table.classList.add("animal-table");
    table.innerHTML = `
      <tr><th>Especie</th><td>${item.especie}</td></tr>
        <tr><th>Edad</th><td>${item.age}</td></tr>
       
        <tr><th>Sexo</th><td>${item.gender}</td></tr>
         <tr><th>Recinto</th><td>${item.recinto}</td></tr>
        <tr><th>Origen</th><td>${item.origin}</td></tr>
        
        <tr><th>Clasificación </th><td>${item.clasificacion}</td></tr>
    `;

    front.appendChild(img);
    front.appendChild(h3);
    front.appendChild(table);
   // --- Cara trasera con info extra ---
   // --- Cara trasera con info extra ---
const cardBack = document.createElement("div");
cardBack.classList.add("card-face", "card-back");

// Validar razón de rescate
const rescueText = item.rescueReason 
    ? `fue ${item.rescueReason}` 
    : `no se ha registrado rescate`;

const backContent = document.createElement("div");
backContent.innerHTML = `
    <h2>${item.name}</h2>
    <h3>${item.name} proviene de ${item.origin}, y ${rescueText} en ${item.rescued}. </h3>
    <h3>Su peso actual es: ${item.weight} </h3>
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