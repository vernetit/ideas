//PL personal loaded

function uniq(items){
  for (var i=0; i<items.length; i++) {
    var listI = items[i];
    loopJ: for (var j=0; j<items.length; j++) {
        var listJ = items[j];
        if (listI === listJ) continue; //Ignore itself
        for (var k=listJ.length; k>=0; k--) {
            if (listJ[k] !== listI[k]) continue loopJ;
        }
        // At this point, their values are equal.
        items.splice(j, 1);
    }
  }
  return items;
}

myLibrary = [];

//Alemania - puerta de banderburgo - lago costanza - catedral colonia - museum ludium - europa park - palacio heidelberg -  reichstag bulding  castillo hohesnchuwangau - zugspitse - isla de los museos(berlin) - muro de berlin - miniatur wunderland - catedral de munich - castillo de nuremberg - east side gallery - zwinger(sajonia) - Bastei(Río Elba) - Alpes Bavaros - Heide Park Resort(not access) [[Faltan]]

myLibrary = [

[47.5574844,10.7501665],[47.5579107,10.7484673],[47.5577603,10.7503944],[52.5163958,13.3767755],[52.5157578,13.3773354],[52.5166459,13.3809767],[52.5177661,13.3744433],[52.5175816,13.3737407],[52.524163,13.3462815],[52.52509,13.343988],[52.5251495,13.3433613],[52.524123,13.3512969],[47.543373,9.6811358],[47.5428941,9.6836072],[47.5471212,9.6887969],[47.5471876,9.6886396],[47.5472609,9.6856358],[50.9404536,6.9577712],[50.9407337,6.9598221],[50.9399457,6.9581607],[50.941671,6.959711],[50.9404035,6.960032],[50.940295,6.9536338],[50.9408008,6.9428635],[50.9407032,6.9428644],[50.9407866,6.9424006],[50.9411268,6.9413493],[50.9411993,6.9412291],[50.9417423,6.9624594],[50.9395387,6.9619278],[50.937593,6.9586467],[50.9384329,6.9571938],[48.2660263,7.7223332],[48.266919,7.7209694],[49.4111557,8.7151022],[49.4104053,8.7153492],[49.4117168,8.7179166],[49.4128755,8.7238584],[49.4103646,8.7156087],[49.4087703,8.6947124],[49.4089213,8.6945742],[49.4061617,8.6850371],[49.41625,8.659953],[52.5189698,13.3759303],[52.5177505,13.3763223],[52.5185967,13.3751467],[52.5178559,13.3840735],[52.5189149,13.3804712],[52.5189763,13.3803104],[52.5182074,13.3764623],[52.5200342,13.3888256],[52.5199688,13.3887034],[47.555703,10.7364089],[47.5556978,10.7359741],[47.42108,10.985495],[47.5554148,10.735382],[47.5568474,10.7401466],[47.5497149,10.7216251],[47.5521774,10.7982753],[47.5680988,10.6976677],[47.5686943,10.6965207],[47.5679461,10.6963485],[47.5680529,10.6837732],[47.42108,10.985495],[52.5169328,13.4018996],[52.5163932,13.4025727],[52.519367,13.3986231],[52.5191981,13.3984012],[52.5195757,13.3984194],[52.5195937,13.3987547],[52.519371,13.3989462],[52.519326,13.3991048],[52.5190987,13.3985759],[52.5192458,13.397145],[52.5196972,13.3921943],[52.5208363,13.3981566],[52.5211252,13.3979684],[52.5210316,13.3978196],[52.5209775,13.3983732],[52.5212091,13.3969199],[52.5211983,13.3970271],[52.5213662,13.3972313],[52.521244,13.3959575],[52.5215184,13.3964618],[52.5216017,13.3965393],[52.5186987,13.4005988],[52.5195128,13.3980595],[52.5221596,13.3936052],[52.5206484,13.394421],[52.5200935,13.3915871],[52.5336344,13.3872405],[52.5331846,13.3848757],[52.5346648,13.3891424],[52.5308896,13.3671374],[52.5291,13.3636037],[52.5302928,13.3622412],[52.5313192,13.3614047],[52.5328701,13.3578515],[52.5332325,13.3520143],[52.5334306,13.3451397],[52.5336678,13.3393999],[52.5343708,13.3539306],[52.5375581,13.3434115],[52.5379017,13.3434875],[52.5387153,13.3445616],[52.5344783,13.2929305],[52.5337245,13.316773],[52.5350701,13.3286059],[52.5352753,13.3281198],[52.5372931,13.3266634],[53.5439194,9.9883444],[53.5436951,9.988658],[53.5437206,9.9883373],[53.5436946,9.9892046],[53.5436928,9.9894596],[53.5435923,9.9890041],[53.5436638,9.9885157],[53.5436401,9.9890114],[53.5437487,9.9895751],[53.5438018,9.990542],[48.139081,11.5730764],[48.1385875,11.5736166],[48.1384871,11.5808407],[48.1392062,11.5686743],[48.1432519,11.5779182],[48.1424839,11.583968],[48.1377281,11.5876814],[48.1407623,11.5808596],[48.1462899,11.5622155],[48.1464694,11.5612054],[48.146746,11.5611737],[48.1468232,11.5610773],[48.1462057,11.5558192],[48.1474855,11.5516097],[48.1461896,11.5482972],[48.1456992,11.5508715],[48.1459173,11.546178],[48.143507,11.5519633],[49.457636,11.0762602],[49.457543,11.0753983],[49.4573984,11.0746463],[49.4569609,11.0751798],[49.4580469,11.0777434],[49.4579243,11.0746644],[49.4587774,11.0737546],[49.4584638,11.0732847],[49.4563167,11.0732464],[49.456378,11.0732862],[49.4587577,11.0811881],[49.4588365,11.0804704],[49.4571545,11.0768894],[49.45738,11.0748681],[49.4598718,11.0564129],[49.4553963,11.0722715],[49.4544353,11.0512884],[49.4543501,11.0455049],[49.454655,11.0445594],[49.4579601,11.0315417],[49.4580341,11.0312746],[52.5050224,13.4396953],[52.5054138,13.4390338],[52.5046978,13.4411445],[52.505678,13.4330652],[52.5037368,13.4294593],[51.0521402,13.7347361],[51.0537401,13.7365139],[51.0526489,13.7357189],[51.0540968,13.738898],[51.0525316,13.7382604],[51.0522918,13.7432234],[51.0524673,13.7291578],[51.050801,13.7407883],[51.0507449,13.7403688],[51.0503306,13.7404307],[51.0515215,13.7409163],[51.0516787,13.7397941],[51.0516787,13.7397941],[50.9619121,14.0731656],[50.9622469,14.0742042],[50.9636472,14.0730713],[50.9582787,14.0804555],[50.946975,14.0740835],[50.9566271,14.0827747],[50.9328626,14.1118049],[47.5606155,10.7329292],[47.5591762,10.741884],[47.5672328,10.6996263],[47.5677161,10.6996],[47.5676973,10.6996151],[53.0253085,9.8746248]


];

//Dubai - Burj Khalifa - Dubail Mall - Dubai Aquarium - Bay Square - Zayed University - Emirates Aviation University - Burb Al arab - Palma Jumeirah - Marina de Dubai - Mall of Emirates - Madinat Jumeirah - Museo de Dubai - Dubai Creek Golf - Jumerai Beach - Fuente de Dubai - Saeed Al Maktoum House [[Incomplete]]

myLibrary = _.union(myLibrary,[

[25.1974191,55.2739028],[25.1971864,55.2729128],[25.1984094,55.2723028],[25.1966226,55.2750415],[25.1959953,55.2743035],[25.1959029,55.2732483],[25.195282,55.2728328],[25.1973757,55.2735606],[25.1974611,55.2740694],[25.1972274,55.2752839],[25.1968041,55.2696769],[25.198427,55.2751524],[25.1972073,55.2796271],[25.1968899,55.2795949],[25.1968554,55.2790047],[25.1971665,55.2787794],[25.1975809,55.27881],[25.1976283,55.2788701],[25.1976708,55.2788313],[25.1977507,55.2788219],[25.1974644,55.2786527],[25.1975827,55.2791146],[25.1978239,55.2790272],[25.1977918,55.2790026],[25.1977035,55.2791073],[25.1976236,55.2789075],[25.1974385,55.2787669],[25.1979738,55.2791239],[25.1981951,55.2794106],[25.1982501,55.2794706],[25.1982297,55.2792871],[25.1961869,55.2782905],[25.1961498,55.2796149],[25.194782,55.2792431],[25.1850123,55.2799807],[25.1847993,55.2792461],[25.1850059,55.2800954],[25.1851084,55.2794734],[25.1856793,55.2814773],[25.1865719,55.2810406],[25.1852599,55.2789752],[25.1856945,55.2791556],[25.18603,55.2825083],[25.1848604,55.2774284],[25.1812208,55.3155079],[25.1755299,55.3216671],[25.176025,55.3341566],[25.1766351,55.355886],[25.1779752,55.358462],[25.170922,55.3680212],[25.1854152,55.3699478],[25.1765601,55.3912926],[25.1679151,55.4016048],[25.1687581,55.3995218],[25.1654862,55.4017561],[25.1649257,55.4063294],[25.1613625,55.4183357],[25.172512,55.4083757],[25.1753121,55.4159132],[25.1746016,55.4136562],[25.1734056,55.4181015],[25.1714788,55.4248219],[25.1610943,55.4227641],[25.1212394,55.373937],[25.1030801,55.386275],[25.1027253,55.3869272],[25.1031399,55.3859304],[25.1122815,55.4100122],[25.1115772,55.4101587],[25.1134643,55.4132845],[25.1125764,55.4132867],[25.1122599,55.4127906],[25.113412,55.4126497],[25.1124564,55.4121647],[25.1135042,55.4121346],[25.0913499,55.3682852],[25.0901422,55.3700493],[25.0888769,55.3619915],[25.0665425,55.3104502],[25.0568187,55.2707568],[25.0400983,55.1981752],[25.0407641,55.1957034],[25.043923,55.1575713],[25.0328194,55.1859947],[25.0045299,55.1544256],[25.0019858,55.1596878],[25.1412111,55.1853297],[25.141168,55.1855173],[25.1410492,55.1857061],[25.140562,55.1863788],[25.1439472,55.1908527],[25.2287754,55.2906915],[25.2686417,55.2908374],[25.2683535,55.2906571],[25.2676132,55.2985709],[25.2687773,55.2968283],[25.1245909,55.1249497],[25.1178481,55.1090082],[25.1129081,55.1092114],[25.1074596,55.1467524],[25.1099484,55.1406121],[25.0981844,55.1322108],[25.0975221,55.1565003],[25.0978309,55.1559702],[25.0958547,55.1537515],[25.093967,55.1549928],[25.0936098,55.1514699],[25.0897959,55.1371926],[25.0895002,55.1391578],[25.07089,55.1306882],[25.0741106,55.133421],[25.0748301,55.1368474],[25.0755759,55.1368675],[25.0709375,55.1284406],[25.0710768,55.1268917],[25.0814713,55.1444245],[25.0797168,55.1529347],[25.0777845,55.1529213],[25.1162436,55.2006144],[25.1187903,55.1975546],[25.114672,55.1994343],[25.1177162,55.2001489],[25.1185768,55.1991411],[25.1184579,55.2028686],[25.1162471,55.2032862],[25.1124376,55.1972097],[25.1183898,55.2036022],[25.0504902,55.2655064],[25.0480293,55.2591072],[25.0568187,55.2707568],[25.1337985,55.1834266],[25.1332723,55.1828828],[25.1333123,55.1824725],[25.133937,55.1816488],[25.1342636,55.1812274],[25.1333539,55.1847633],[25.133455,55.185617],[25.1354784,55.1847617],[25.1359422,55.185122],[25.1310582,55.1853517],[25.1304122,55.186107],[25.1333792,55.1862527],[25.1337545,55.1857601],[25.2627469,55.2971099],[25.2641424,55.3002293],[25.2641218,55.3003465],[25.263695,55.299469],[25.2645812,55.2993108],[25.2643335,55.301594],[25.2621918,55.2964158],[25.2627585,55.2948612],[25.2643424,55.2934978],[25.263707,55.2909845],[25.2634833,55.2910136],[25.2647541,55.2889633],[25.2651721,55.2890424],[25.263415,55.2877193],[25.2524709,55.2889226],[25.2523999,55.2885197],[25.2492814,55.3001011],[25.251296,55.3010095],[25.2503199,55.3025172],[25.2523738,55.308395],[25.2527679,55.3032902],[25.2508258,55.3023028],[25.2427212,55.3064846],[25.2406108,55.3096185],[25.2394076,55.3159619],[25.2435363,55.3334095],[25.2431537,55.3346568],[25.2425092,55.3356317],[25.2414992,55.3375639],[25.2486936,55.3469177],[25.2487534,55.3541122],[25.2430166,55.3531813],[25.2230582,55.3530607],[25.2196835,55.3671222],[25.2085011,55.3563638],[25.2085661,55.3756671],[25.1997051,55.3093196],[25.1785159,55.3578125],[25.170922,55.3680212],[25.1934053,55.2344809],[25.1953344,55.2766628],[25.1950357,55.2760378],[25.1958701,55.2750355],[25.195574,55.2741493],[25.196034,55.2740164],[25.1960682,55.2730099],[25.1964173,55.2747655],[25.2680052,55.2904907],[25.2684325,55.2890929],[25.2699915,55.290904],[25.2698383,55.2913718],[25.2699063,55.2906968],[25.2703625,55.2902021],[25.2695227,55.2944994],[25.2676119,55.2985408],[-15.9966562,-69.1832399],[-15.9969172,-69.1828333]

]);

//Bolivia [[ALL]] Salar Uyuni - Camino a los yungas - Tiahuanaco - Isla del Sol - Parque Nacional Madidi (not access) - Laguna Colorada - Casa de la moneda - Potosí - Valle de la Luna - Parque Nacional Amboro (En Argentina?) - Chacaltaya (not access) - Laguna Verde - Mercado de las Brujas - La Paz - Plaza Murillo - Cristo de la Concordia - Illimani (not access) - atedral Basílica de Nuestra Señora de Guadalupe (Check) - Sucre - Parque Bolivar - Parque Cretacico - Cementerio General - Puma Punku - Nevado Sajama (partial access) - Puerta del Sol - Basílica de Nuestra Señora de Copacabana - Cerro Calvario - Volcan Licancabur (not access) - Laguna la Angostura (not access) - Zoologico municipal de Santa Cruz - Parque nacional y área natural de manejo integrado Cotapata (near access) - kalasaya - Isla Incahuasi - Iglesia de San Francisco - Parque Machia (near access) - Mirador Killi Killi - Museo Nacional de Etnografía y Folklore (not access) - Mariscal Santa Cruz (near access) - Huayna Potosi - Parque Arenal - Parque Urbano (near access) - Plaza 24 de Septiembre - Templete Semisubterraneo - Parque Urbano Central (near access) - Museo de la Coca (near access) - Sol de Mañana (not access) - Gravity Bolivia (near accesss) - Jardin Botánico Santa Cruz (near access) - Plaza Colon (near access) - Calle Jaen (near access) - Plaza Abaroa (PL)

myLibrary = _.union(myLibrary,[

[-19.5004049,-68.7160163],[-20.3249397,-67.1301041],[-20.2410408,-67.6266589],[-20.2390374,-67.6324582],[-16.264453,-67.7906987],[-16.261666,-67.7897663],[-16.2617134,-67.7873646],[-16.2581754,-67.7861104],[-16.2764953,-67.7944944],[-16.281334,-67.7978356],[-16.2832496,-67.7987603],[-16.2858728,-67.8009032],[-16.2313968,-67.7949442],[-16.2255772,-67.7844935],[-16.2244158,-67.7797096],[-16.2146459,-67.7615136],[-16.2080831,-67.7530264],[-16.2233244,-67.7541233],[-16.2227722,-67.7466477],[-16.2278439,-67.741374],[-16.2117885,-67.7428891],[-16.5555475,-68.6740976],[-16.5550606,-68.6735732],[-16.5550531,-68.6730046],[-16.5548877,-68.6724359],[-16.5542085,-68.6727209],[-16.5545435,-68.6728943],[-16.5554666,-68.6706657],[-16.0006569,-69.1730882],[-15.9974422,-69.1823864],[-15.9956387,-69.187577],[-15.9921038,-69.1962862],[-15.9903142,-69.1983044],[-15.9900042,-69.2029015],[-15.9908596,-69.20099],[-15.9917307,-69.1990103],[-15.9944394,-69.1951989],[-15.9987269,-69.1908105],[-16.0082014,-69.1842964],[-16.020616,-69.1746684],[-16.0266879,-69.1658329],[-16.0306883,-69.160494],[-16.0779358,-69.1317227],[-22.2117875,-67.7984807],[-22.2126128,-67.7978014],[-22.2124265,-67.7982446],[-22.2118106,-67.7985068],[-22.2108965,-67.800208],[-22.2169175,-67.7976651],[-19.588928,-65.7542237],[-19.5875974,-65.7542115],[-19.5876093,-65.7550739],[-19.5865166,-65.7550935],[-19.5856786,-65.7567846],[-19.5837964,-65.7589311],[-19.5851148,-65.7514284],[-19.5830016,-65.7486823],[-19.5816449,-65.7532299],[-19.5798089,-65.7528623],[-19.5753905,-65.750892],[-19.5749187,-65.7549997],[-19.5727199,-65.749139],[-19.5718096,-65.7472286],[-19.571209,-65.7460662],[-19.5691462,-65.7463917],[-19.5684446,-65.7447094],[-19.5678006,-65.7423962],[-19.5612294,-65.7399848],[-19.5699556,-65.7257308],[-19.5964237,-65.7493445],[-19.6017905,-65.7453269],[-19.5917307,-65.7368628],[-19.5799624,-65.7307033],[-19.5837411,-65.7481608],[-19.5945857,-65.7487952],[-19.5913047,-65.7565365],[-19.5806201,-65.7545752],[-19.5608502,-65.7618367],[-16.5675203,-68.094341],[-16.5673029,-68.0943848],[-16.5670344,-68.0944551],[-16.5671356,-68.0942344],[-16.5668448,-68.0941147],[-16.5668907,-68.0938062],[-16.5671294,-68.0934869],[-16.5673674,-68.0927317],[-16.5672409,-68.0926974],[-16.568114,-68.0945144],[-18.0920499,-64.1794759],[-22.792206,-67.8190801],[-22.7930069,-67.8194135],[-22.7881984,-67.8199864],[-16.49632,-68.1391469],[-16.4965032,-68.1391038],[-16.4969922,-68.1389676],[-16.4969577,-68.1388001],[-16.4969228,-68.1386586],[-16.4967843,-68.1386361],[-16.4964828,-68.1387645],[-16.4962858,-68.1388601],[-16.4960911,-68.1389843],[-16.4961436,-68.1391254],[-16.4955374,-68.1375774],[-16.4956901,-68.136854],[-16.4952178,-68.1368744],[-16.4938158,-68.1408869],[-16.4955804,-68.1512103],[-16.4891836,-68.1390762],[-16.495861,-68.1335837],[-16.4956256,-68.1336137],[-16.49594,-68.1336135],[-16.4957402,-68.1338554],[-16.4954418,-68.1336483],[-16.4955473,-68.1332742],[-16.4959533,-68.132273],[-16.4964304,-68.1335625],[-16.4968214,-68.1338112],[-16.497123,-68.1353016],[-16.4927077,-68.1360643],[-16.4929135,-68.1384135],[-16.4923191,-68.1358481],[-16.4928287,-68.1342222],[-16.4930396,-68.1318155],[-16.5023809,-68.125876],[-16.4996402,-68.1219718],[-16.4994856,-68.1239145],[-16.4992083,-68.1184045],[-16.5032447,-68.1173526],[-16.471848,-68.1707758],[-16.5242819,-68.1503885],[-16.5179966,-68.1472086],[-16.5167969,-68.1774539],[-16.5159623,-68.1482581],[-17.3843625,-66.1354984],[-17.3844249,-66.1350526],[-17.3845023,-66.1346229],[-17.3842324,-66.134051],[-19.0480973,-65.260212],[-19.0481648,-65.2596888],[-19.0485271,-65.2596303],[-19.048925,-65.2596783],[-19.0483533,-65.2598443],[-19.0481274,-65.2601177],[-19.0478571,-65.2596432],[-19.0477971,-65.2592603],[-19.0478426,-65.2599049],[-19.0420214,-65.2639995],[-19.0425747,-65.2634445],[-19.0428769,-65.2630429],[-19.0409738,-65.2652545],[-19.0393058,-65.2614159],[-19.0392659,-65.2645213],[-19.0418875,-65.2506283],[-19.0338038,-65.2568291],[-19.0260907,-65.2702556],[-19.014311,-65.2924514],[-19.0138947,-65.2925513],[-19.0143524,-65.2930642],[-19.0130504,-65.2895629],[-19.00627,-65.2356369],[-19.004468,-65.235699],[-19.0064967,-65.2352722],[-19.0491495,-65.2424754],[-19.0528978,-65.2680502],[-19.0532384,-65.2686224],[-19.0531783,-65.2684003],[-19.0529035,-65.2673319],[-19.0532249,-65.2673291],[-19.0532731,-65.2679478],[-19.0530642,-65.2681358],[-19.0512452,-65.2715692],[-19.0585495,-65.2748423],[-19.0485779,-65.2595017],[-16.5616985,-68.6797429],[-16.5614703,-68.6802002],[-16.5607845,-68.6802106],[-16.5615796,-68.6808307],[-16.5624185,-68.6797513],[-18.0236068,-68.8689743],[-16.5543558,-68.6739949],[-16.1662699,-69.0854426],[-16.1664281,-69.0852181],[-16.1658033,-69.0851899],[-16.1660726,-69.0858523],[-16.1661161,-69.0854285],[-16.1610313,-69.0895269],[-16.1615584,-69.0913138],[-16.162302,-69.0876118],[-17.7597951,-63.1842362],[-17.7599179,-63.1854461],[-17.7602241,-63.1866931],[-17.7600086,-63.1873388],[-17.7597225,-63.1870151],[-17.7590984,-63.183964],[-17.7592493,-63.1832028],[-16.2265655,-67.8279268],[-16.2281811,-67.8361321],[-16.2443568,-67.832992],[-16.2590523,-67.8360242],[-16.5548112,-68.672544],[-16.554717,-68.6730456],[-16.5556197,-68.6707399],[-20.2424299,-67.6264826],[-20.2423083,-67.6267751],[-20.2415839,-67.6271539],[-20.2412145,-67.6271167],[-20.2408454,-67.626807],[-20.2413383,-67.6263705],[-20.2408892,-67.6275739],[-20.239415,-67.624731],[-20.2397394,-67.622136],[-20.2461857,-67.6252176],[-16.4961113,-68.1366655],[-16.9717568,-65.4113727],[-16.9733433,-65.4156162],[-16.9760484,-65.4228045],[-16.4957893,-68.1275537],[-16.4950409,-68.1277078],[-16.495058,-68.127445],[-16.4945153,-68.134652],[-16.4948426,-68.13492],[-17.3985663,-66.1727241],[-17.4021293,-66.1744361],[-16.329629,-68.1518816],[-16.3302869,-68.1526754],[-16.3578769,-68.1573309],[-16.3719419,-68.0885795],[-17.7783774,-63.1807691],[-17.7778188,-63.1806361],[-17.7775088,-63.1804683],[-17.7769235,-63.1801689],[-17.777784,-63.1802214],[-17.7788471,-63.1804688],[-17.7929912,-63.1696806],[-17.7949128,-63.1678569],[-17.7903564,-63.1472684],[-17.7837239,-63.1822733],[-17.7830198,-63.1820609],[-18.0919356,-64.13226],[-18.0920499,-64.1794759],[-17.7836431,-63.1817825],[-17.7843303,-63.1821607],[-17.7848466,-63.1816549],[-16.5548201,-68.6724881],[-16.554768,-68.6724465],[-16.5024204,-68.125564],[-16.5030244,-68.128228],[-16.5029004,-68.1297726],[-16.5004911,-68.1296961],[-16.5003001,-68.132067],[-22.4347839,-67.7571239],[-17.7661997,-63.0703989],[-17.764135,-63.0680788],[-17.7705164,-63.0689666],[-17.3878939,-66.1553113],[-17.3880537,-66.1562781],[-16.509701,-68.1190357],[-16.5107081,-68.12661],[31.7739656,35.1747716]

]);

//Iran  - Naqsh-e Jahan Square (PL)

myLibrary = _.union(myLibrary,[

[32.6580205,51.6773979],[32.6576229,51.6775117]


]);

//Israel - Yad Vashem (no cargado totalmente)

myLibrary = _.union(myLibrary,[

[31.7742512,35.175611],[31.774351,35.1712211]


]);

//1 Argentina bs as santa fe mar del plata  - glaciar perito moreno - cementerio recoleta - la boca - caminito - cerro catedral (!no access) - nahuel huapi - palacio barolo (bsas) - pucara (tilcara) - floralis generica - mundo marino (!no access) - Ischigualasto - 

myLibrary = _.union(myLibrary,[

[-34.6064174,-58.4373121],[-34.6075465,-58.4456133],[-154.610,-1.540],[-34.613900,-58.459475],[-128.125,-6.122],[-34.6040351,-58.4110461],[-34.6007904,-58.3819422],[-34.5918827,-58.3734698],[-34.602945,-58.3693696],[-34.6042697,-58.3713593],[-34.608866,-58.3709046],[-34.6124952,-58.3717528],[-34.6130827,-58.370654],[-34.6120631,-58.3651102],[-34.6078684,-58.3650291],[-34.5945931,-58.3694834],[-34.58528,-58.3966098],[-34.5845094,-58.3959767],[-34.5835928,-58.3954574],[-34.588124,-58.4096816],[-34.5696763,-58.4116258],[-34.5798244,-58.4168149],[-34.5597258,-58.4212163],[-34.5599943,-58.4496459],[-34.5454398,-58.4488554],[-34.5416919,-58.435895],[-34.5429919,-58.4395218],[-34.5296214,-58.4581581],[-34.5332389,-58.4646128],[-34.5301274,-58.4609343],[-34.537011,-58.4669579],[-34.5303425,-58.4596406],[-34.5364297,-58.4665013],[-34.5315144,-58.4690305],[-34.5407451,-58.4501242],[-34.5430883,-58.4419497],[-34.5429919,-58.4395218],[-34.5286368,-58.4632283],[-34.5184595,-58.4791798],[-34.518704,-58.4842626],[-34.5173061,-58.4828574],[-34.5188311,-58.4737752],[-34.5193725,-58.4814017],[-34.5163938,-58.4748509],[-34.5183453,-58.4835468],[-34.5213842,-58.4813915],[-34.5185044,-58.4820257],[-34.6551366,-58.4030264],[-34.654777,-58.40315],[-34.6554592,-58.406162],[-34.6561789,-58.4059284],[-34.6571848,-58.40556],[-34.657015,-58.4051991],[-34.6567288,-58.4046044],[-34.6563556,-58.4038195],[-34.6595531,-58.4166347],[-34.6589426,-58.4165322],[-34.6342759,-58.4027097],[-34.6333789,-58.4022599],[-34.6340937,-58.401191],[-34.6351025,-58.4016216],[-34.609737,-58.391923],[-32.9478014,-60.630505],[-30.1634779,-67.8431575],[-37.9907677,-57.5437382],[-37.9907856,-57.5457816],[-37.9910614,-57.5465817],[-37.9910826,-57.5465662],[-37.9979521,-57.551463],[-37.9984823,-57.5517482],[-38.0070129,-57.5338914],[-38.0082191,-57.5332036],[-50.4651239,-73.0341199],[-50.4639346,-73.0361453],[-50.4638714,-73.0360258],[-50.460448,-73.028107],[-34.5872294,-58.3913516],[-34.5853256,-58.3899313],[-34.6327589,-58.3656765],[-34.6285201,-58.356986],[-34.6374177,-58.3563674],[-34.6399601,-58.3534943],[-34.639375,-58.3626373],[-34.6393923,-58.362478],[-34.639422,-58.3622596],[-34.6394408,-58.3622406],[-34.6392458,-58.3619043],[-34.6388531,-58.3621399],[-34.6389306,-58.3628492],[-34.6391526,-58.3633503],[-34.6393945,-58.3621391],[-41.1845062,-71.4413947],[-41.182055,-71.4171692],[-41.1820731,-71.4180525],[-34.6093596,-58.3860831],[-23.5840643,-65.4008513],[-23.5801006,-65.4022145],[-23.5776617,-65.3952725],[-23.5772908,-65.3893591],[-23.5860176,-65.4040985],[-34.5818665,-58.3935094],[-36.3410883,-56.7466132],[-30.1638305,-67.842173],[-30.1704373,-67.8379216],[-30.18051,-67.8326569],[-30.17944,-67.8257617],[-30.1976421,-67.7496655],[-30.2037538,-67.6704587],[-30.1147641,-67.7470456],[-29.9557978,-67.8327197]

]);




//Cordoba Huerta Grande

myLibrary = _.union(myLibrary,[

[-31.0732488,-64.488992],[-31.0729811,-64.4912922],[-31.0736696,-64.4913106],[-31.0743127,-64.4914498],[-31.073677,-64.4910259],[-31.0741866,-64.4873019],[-31.0731732,-64.4895307],[-31.074353,-64.4898839],[-31.0755756,-64.4935223],[-31.069818,-64.4971707],[-31.0757147,-64.492717],[-31.0743401,-64.4897756],[-31.0706989,-64.489824],[-31.0775118,-64.4920685],[-31.0747955,-64.487109],[-31.0809814,-64.4972481]

]);

//paris

myLibrary = _.union(myLibrary,[

[48.8568472,2.2967633],[48.8583716,2.2944863],[48.8631323,2.2869319],[48.8615783,2.289375],[48.8626785,2.2884369],[48.8636842,2.2896105]

]);


//eeuu googleplex applecampus grand canyon new york

myLibrary = _.union(myLibrary,[

[21.8812469,-102.2374902],[37.422,-122.084058],[37.4219999,-122.0840575],[37.4208156,-122.0733547],[37.4219999,-122.0840575],[37.4219782,-122.0834495],[37.3332171,-122.0289079],[37.3332171,-122.0289079],[37.3313408,-122.0307478],[36.0577393,-112.1453705],[36.0627347,-112.2098326],[36.0633719,-112.1112536],[36.0051335,-111.9242575],[40.7507095,-73.9932404],[40.713652,-74.0035137],[40.7157808,-74.0004612],[40.7079137,-74.0554014],[40.7080351,-74.0447698],[40.7142182,-74.0437369],[40.7155276,-74.0473907],[40.7183884,-74.0469733],[40.7269772,-74.0921808],[40.7279964,-74.1014568],[40.7343668,-74.1210885],[40.7378542,-74.1488671],[40.7401815,-74.1673579],[40.7403823,-74.1678578],[40.7398866,-74.1670027],[40.7402396,-74.1690769],[40.7422128,-74.1781825],[40.7442983,-74.1780267],[40.7475369,-74.1821222],[40.7519965,-74.2887722]

]);

//rusia-asia kremlin

myLibrary = _.union(myLibrary,[

[55.75,37.6166649],[55.7499504,37.6184883],[55.7542161,37.6133922],[55.7520233,37.6174994],[55.7521217,37.616252],[55.7542121,37.6199053],[55.7547027,37.6195979],[27.8055461,86.7133719],[27.9542368,86.6942592]



]);

//Australia

myLibrary = _.union(myLibrary,[

[-33.8580772,151.2149329],[-33.854183,151.2096984],[-33.8535603,151.208119],[-33.8538698,151.2086683],[-33.8579172,151.2091673],[-33.8588515,151.2089176],[-33.8612943,151.2083129]



]);

//Grecia Atenas

myLibrary = _.union(myLibrary,[

[37.9662516,23.7899826],[37.969846,23.7769251],[37.9678872,23.728309],[37.9703015,23.7277055],[37.9733022,23.7266056],[37.9733408,23.7277635],[37.97311,23.728633],[37.9750476,23.7245206],[37.9703658,23.7278553],[37.9709244,23.7258663],[37.9721172,23.7266247],[37.9728979,23.7280992],[37.9751813,23.724219],[37.9772978,23.7132481],[37.9783118,23.7236959],[37.9813262,23.7432737],[37.981736,23.743076],[37.9819935,23.7433916],[37.9821661,23.7439589],[37.9831046,23.74503],[37.9890229,23.7327599],[37.9891313,23.7306942],[37.9843575,23.7278091],[37.9852746,23.7214405],[37.9895254,23.7193411],[37.9969364,23.722023],[37.9975524,23.721352],[38.0001829,23.7163089],[38.0004668,23.7168424],[38.0016345,23.7053628],[37.9969891,23.6925614],[37.9969959,23.6926783],[37.9941179,23.6780031],[38.0039377,23.676126],[38.0129632,23.6406911],[38.0147886,23.6143521],[38.0269978,23.5981989],[38.041609,23.5820884]

]);

//japon

myLibrary = _.union(myLibrary,[

[35.5532707,139.7864481],[35.5547147,139.7822925],[35.5582832,139.7407495],[35.5600814,139.7370732],[35.5600467,139.7330236],[35.5600092,139.7313645],[35.5594374,139.7271257],[35.5599703,139.7223893],[35.5608312,139.7232116],[35.5613233,139.7233281],[35.5613575,139.7236843],[35.561761,139.7236761],[35.5615923,139.7231358],[35.5615081,139.7215212],[35.562606,139.7129459],[35.5637662,139.7074189],[35.5643185,139.7067182]

]);

//Italia

myLibrary = _.union(myLibrary,[

[41.9008398,12.4834249],[43.7229627,10.3971398],[43.722694,10.394803],[43.7297049,10.4238585],[40.6268148,14.4856034],[40.6274638,14.4840359],[40.6276506,14.4856564],[40.6275738,14.4859619],[40.6276421,14.4861497],[40.627837,14.4871106],[40.6265715,14.4972373],[40.6290621,14.4837207],[40.6294981,14.4823064],[40.6297502,14.4820192],[40.5548838,14.2430689],[40.5536703,14.2374344],[40.5516241,14.2435267],[40.5510201,14.2450126],[40.5472021,14.2430237],[40.5478204,14.2439977],[43.7842086,11.2626287],[43.7828193,11.2558593],[43.7648992,11.2509979],[43.7643653,11.2496829],[43.761703,11.2460894],[43.7751105,11.2560691],[43.775089,11.255277],[43.7751312,11.2554598],[41.8904915,12.4918327]

]);

//Peru mexico

myLibrary = _.union(myLibrary,[

[-13.163236,-72.5449709],[-13.1626781,-72.5452843],[-13.1626964,-72.5449689],[-13.1623719,-72.545487],[19.4205345,-99.1811879],[19.42088,-99.1814356],[19.4207738,-99.1810229],[19.4205016,-99.1820345],[19.4202433,-99.1824234],[19.4201624,-99.1812025],[19.4204629,-99.180442],[19.4189468,-99.1831861],[19.4191201,-99.1833919],[19.4188582,-99.1833744],[19.4846228,-99.1170369],[19.4847219,-99.118003],[19.4848203,-99.1182191],[19.4855232,-99.1174046],[19.3552365,-99.1626001],[19.3549096,-99.1623511],[19.3515366,-99.1900528],[19.351602,-99.1907887],[19.6913303,-98.844118],[19.6925301,-98.8434263],[19.6899894,-98.8466225],[19.4340762,-99.140389],[19.4348669,-99.1414337],[19.4352133,-99.1413367],[19.4352049,-99.1412795]


]);

//Mexico - museo franz meyer -

myLibrary = _.union(myLibrary,[

[19.4206569,-99.1815625],[19.4370989,-99.1430787],[19.4357917,-99.1412728],[19.4356742,-99.1414259],[19.4354258,-99.1385119],[19.4358445,-99.1392547],[19.4358194,-99.140205],[19.4357281,-99.1401103],[19.4359373,-99.1401895],[19.4366288,-99.1372346],[19.4368013,-99.1372342],[19.4372572,-99.1431436],[19.4372794,-99.14327],[19.4372118,-99.1434725],[19.437346,-99.143614],[19.4373473,-99.1432367],[19.4373958,-99.1428964],[19.4374136,-99.1430253],[19.4342735,-99.1331018],[19.4346612,-99.1383986],[19.4146862,-99.1677243],[19.4143054,-99.1646207],[19.4117873,-99.1754915],[19.4123051,-99.1765348],[19.4112409,-99.1790399],[19.4148001,-99.1679355],[19.4111428,-99.1690604],[19.4144276,-99.1549012],[19.4144385,-99.15486],[19.4157489,-99.1620588],[19.4159089,-99.1622713]




]);

//Brasil cristo redentor cataratas del iguazu

myLibrary = _.union(myLibrary,[

[-22.9518495,-43.2105776],[-22.9517988,-43.2109421],[-22.9518356,-43.2106018],[-22.9521748,-43.2114939],[-22.9514444,-43.2102441],[-22.951137,-43.2098529],[-25.6924842,-54.434219],[-25.6915178,-54.4379321],[-25.6910397,-54.43801],[-25.6900708,-54.4382715],[-25.6955222,-54.4374542],[-25.7006396,-54.4441571],[-25.6919448,-54.4344075],[-25.6870834,-54.4421953],[-25.6864554,-54.4411061]



]);

//Indoor

myLibrary = _.union(myLibrary,[

[41.403609,2.17444811],[37.420075,-122.0839928],[37.4219999,-122.0840575],[37.4213619,-122.0852637],[37.4219999,-122.0840575],[37.4219999,-122.0840575],[37.4219999,-122.0840575],[37.3371231,-122.0402191],[37.33727,-122.0409773],[35.56169,139.7209308],[35.5614827,139.7204121],[35.5616232,139.7191806],[35.5618966,139.7196165],[35.5618063,139.7187367],[35.5619116,139.7189283],[35.5617385,139.7179854],[35.5618628,139.7177421],[35.5619918,139.7174494],[35.561975,139.7171727],[35.5634966,139.7093116],[35.5637431,139.7096437]

]);

//console.log(myLibrary.length);

//myLibrary=jQuery.unique(myLibrary);
myLibrary=uniq(myLibrary);

mll=myLibrary.length;
//console.log();
$("#locations-span").html(mll);