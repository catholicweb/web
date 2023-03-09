
// Fotos del seminario 
var fotos = [];
/*for (var i = 1; i <= 0; i++) {
  //27
  fotos.push({
    src: "./assets/fotos/" + i + ".jpeg",
    thumb: "./assets/fotos/" + i + ".jpeg",
    caption: "Seminario de Pamplona (PJ)",
  });
}
for (var i = 1; i <= 2; i++) {
  fotos.push({
    src: "./assets/fotos/d" + i + ".jpg",
    thumb: "./assets/fotos/d" + i + ".jpg",
    caption: "San José (DC)",
  });
}*/

var videos = [
  /*{
    caption: 'SM Dani al descubierto | El sacerdote que tiende puentes en Youtube',
    yid: '24JdG4uMW20',
  },*/
  /*{
    caption: 'Pescadores de hombres',
    yid: 'gN3ROP4akbs',
    thumb: 'http://i3.ytimg.com/vi/gN3ROP4akbs/hqdefault.jpg',
  },*/
  {
    caption: "Signos de la vocación",
    class: "hidden",
    yid: "zURt1o1cQrA",
  },
  {
    caption: "La vocación Mons Munilla",
    yid: "w5FTJrEx5ro",
  },
  {
    caption: "Carlos Cabrera | Ser sacerdote es una apertura a la vida",
    yid: "RhZFjkmX894",
  },
  {
    yid: "m0To2flk_Lg",
  },
  {
    caption: "Testimonio Scout",
    class: "hidden",
    yid: "og6i0VZFzgc",
  },
  {
    caption: "¿Hay monjes benedictinos jóvenes? El testimonio de Fray Eduardo",
    yid: "x33Fi_iEEFM",
  },
  {
    caption: "Testimonio de Fray Ignacio, monje benedictino y millennial",
    yid: "LvqPshrX8cg",
  },
];

var sacerdocio = [
  {
    caption: "Testimonio Jose Angel Zubiaur",
    yid: "CSqnkjlqZx0",
  },
  {
    caption: "¿Por qué eres sacerdote? La vocación después de 1, 2 ¡o 30 años!",
    yid: "Qrf8LVmzWPk",
    thumb: "https://i3.ytimg.com/vi/Qrf8LVmzWPk/hqdefault.jpg",
  },
  {
    caption: "Testimonio Pedro Luis",
    yid: "k-i5Zox0K9I",
  },
  {
    caption: "¿Y por qué no sacerdote?",
    yid: "m0To2flk_Lg",
  },
  /*{
    caption: 'Pescadores de hombres',
    yid: 'gN3ROP4akbs',
  },*/
];

var books = [
  {
    caption: "Hasta la Cumbre: Testamento espiritual (Pablo Domínguez Prieto)",
    thumb: "./assets/img/hastalacumbre.jpg",
    src: "https://www.amazon.es/Hasta-cumbre-Colecci%C3%B3n-Horizontes-Spanish-ebook/dp/B0082YTOI0",
  },
  {
    caption: "Caminando por valles oscuros: Memorias de un jesuita en el Gulag (Walter J. Ciszek)",
    thumb: "./assets/img/caminandovalles.jpeg",
    src: "https://www.amazon.es/Caminando-por-valles-oscuros-Arcaduz-ebook/dp/B00W9AX060",
  },
  {
    caption: "El cura de Ars (Francis Trochu)",
    thumb: "https://d3s1b1zelykba8.cloudfront.net/Articulo/Grande/541.jpg",
    src: "https://www.palabra.es/el-cura-de-ars-digital-0541.html",
  },
  {
    caption: "Se Buscan Rebeldes: Y luego, que sea lo que Dios quiera",
    thumb: "./assets/img/sebuscanrebeldes.jpg",
    src: "https://www.amazon.es/buscan-rebeldes-Religi%C3%B3n-Fuera-Colecci%C3%B3n/dp/8432150126",
  },
  {
    caption: "Muchos son los llamados (Scott Hahn)",
    thumb: "./assets/img/muchos-son-los-llamados.jpg",
    src: "https://www.rialp.com/libro/muchos-son-los-llamados_92905/",
  },
  {
    caption: "Vasija de barro (Leo John Trese)",
    //thumb: 'https://d3s1b1zelykba8.cloudfront.net/Articulo/Original/572.jpg',
    thumb: "https://static.serlogal.com/imagenes_big/9788471/978847118055.JPG",
    src: "https://www.palabra.es/vasija-de-barro-0572.html",
  },
  {
    caption: "La Paternidad espiritual del Sacerdote: Un tesoro en vasos de barro (Jacques Philippe)",
    thumb: "./assets/img/paternidad-sacerdotal.jpg",
    src: "https://www.amazon.es/Paternidad-espiritual-del-Sacerdote-tesoro/dp/8432153249/",
  },
  {
    caption: "Patris corde y otros materiales",
    src: "./assets/docs/Patris corde y otros materiales.pdf",
    thumb: "./assets/img/sanjose.png",
  },
  {
    caption: "Servidor De Vuestra Alegria (Joseph Card. Ratzinger)",
    src: "./assets/docs/servidor_de_vuestra_alegria.pdf",
    thumb: "./assets/img/servidor-alegria.jpg",
  },
];

var diario = [
  {
    caption: "Excursión",
    yid: "NHqP8LAjT4E",
    thumb: "http://i3.ytimg.com/vi/NHqP8LAjT4E/hqdefault.jpg",
  },
  {
    caption: "Excursión",
    yid: "zlqZk8tnb0E",
    thumb: "http://i3.ytimg.com/vi/zlqZk8tnb0E/hqdefault.jpg",
  },
  {
    caption: "Excursión",
    yid: "U2P-ZvncuaY",
    thumb: "http://i3.ytimg.com/vi/U2P-ZvncuaY/hqdefault.jpg",
  },
  {
    caption: "Excursión",
    yid: "C-3VZU4tq1I",
    thumb: "http://i3.ytimg.com/vi/C-3VZU4tq1I/hqdefault.jpg",
  },
];

let santos = [
/*  {
    title: "",
    text: "Puede parecer una locura (lo es), pero Dios pide a algunos hombres poder usar sus manos para entregarse a su pueblo, en la Eucaristía, en la confesión... Tarea y regalo apasionante, que nos supera y sobrecoge, pero para la cual Dios nos capacita... Pero, ¿qué significa ser sacerdote? Veamos algunos ejemplos...",
    //La vocación al sacerdocio es Cristo que, viendo sufrir a su pueblo, nos pide poder usar nuestras manos para así entregarse en la Eucaristía, para poder escuchar a todo el que se acerca y perdonarle los pecados... Es Cristo que nos pide salir a las encrucijadas de los caminos para anunciar la buena noticia y acompañar a su pueblo hacia su amor.
    //  El sacerdocio es un regalo que nos sobrepasa infinitamente. Un servicio para el que somos absolutamente indignos, pero que, misteriosamente, Dios ha querido realizar a través de nosotros. Es una tarea que nos supera y sobrecoge, pero para la cual nos capacita a través de su Gracia.
    //"image": "https://www.archgh.org/media/12019/texas-catholic-herald-priesthood-ordinations-28.jpg",
  },*/
  {
    title: "Santo Cura de Ars",
    image: "assets/img/ars.jpeg",
    text: `Expulsado del seminario por su escaso intelecto, ordenado tras muchos esfuerzos en 1815 (29 años) fue destinado a una pequeña parroquia rural. Desprovisto de otros recursos, se entrego a la oración y penitencia extrema por la conversión de las alamas. En sus 41 años de ministerio, llegó a confesar durante 18 horas al día a más de 20.000 peregrinos al año de toda Europa, alimentandose de un poco de leche y pan seco.`,
    cita: "El sacerdocio es el amor del corazón de Jesús",
    notas: "Juan Bautista María Vianney (Dardilly, 8 de mayo de 1786-Ars-sur-Formans, 4 de agosto de 1859), ordenado 13 de agosto de 1815 (29 años). Se ponía a confesar a la 1am. con una intensa predicación, oración y ejemplos de penitencia. Diariamente catequizaba a niños y adultos, reconciliaba a los arrepentidos y con su ardiente caridad, alimentada en la fuente de la Eucaristía, brilló de tal modo, que difundió sus consejos a lo largo y a lo ancho de toda Europa y con su sabiduría llevó a Dios a muchísimas almas (†1859). Fecha de canonización: 31 de mayo de 1925 por el Papa Pío XI.",
  },
  {
    title: "San Fancisco Javier",
    image: "assets/img/sfj.jpeg",
    text: `De familia noble, fue a estudiar a París (con intención promocionar canonigo...), donde conoce a Iñigo de Loyola y hace sus ejercicios espirituales, encontrandose con Cristo. Junto con cinco compañeros funda la Compañia de Jesús. Es ordenado en 1537 y enviado a evangelizar las Indias en sustitución de un compañero enfermo. Incansable evangelizador, aprendió la lengua local, realizo gran cantidad de viajes misioneros, bautizando a decenas de miles de personas y estableciendo misiones en distintos paises. Murió desgastado con 46 años a las puertas de china.`,
    cita: `¿De qué le sirve al hombre ganar el mundo entero, si pierde su alma?`,
    notas: "Francisco de Jasso y Azpilicueta (7 de abril de 1506-3 de diciembre de 1552). Ordenado 24 de junio de 1537 (31 años)",
  },
  {
    title: "San Damián de Molokai",
    image: "assets/img/molokai.jpeg",
    text: `Ordenado en 1864 pidio ser enviado a la isla de Molokai, donde enfermos de lepra eran abandonados, y desesperados luchaban por los escasos recursos que recibian. Su ministerio transformo radicalmente la isla, devolviendo la paz y esperanza a los enfermos. Trato a todos los enfermos con gran cariño y cercanía, contagiandose finalmente de lepra y muriendo en 1889.`,
    cita: `Sé que voy a un perpetuo destierro, y que tarde o temprano me contagiaré de la lepra. Pero ningún sacrificio es demasiado grande si se hace por Cristo`,
    notas: "Jozef de Veuster (Tremelo, Reino de Bélgica, 3 de enero de 1840 – Molokai, Reino de Hawái, 15 de abril de 1889). Ordenado 24 marzo 1864 (24 años). (24 años) sustituyo a un compañero como misionero,'No importa que el cuerpo se vaya volviendo deforme y feo, si el alma se va volviendo hermosa y agradable a Dios', 'Sé que voy a un perpetuo destierro, y que tarde o temprano me contagiaré de la lepra. Pero ningún sacrificio es demasiado grande si se hace por Cristo' 'San Francisco Javier, por favor alcánzame de Dios la gracia de ser un misionero, como tú' (fue finalmente enviado en sustitución de un compañero suyo). Ténía prohibido salir de la isla ",
  },
  {
    title: "San Maximiliano Kolbe",
    image: "assets/img/maximiliano.jpeg",
    text: `Ordenado sacerdote en 1918, fue formador del seminario y predico la devoción a los coracones de Jesús y María. Tras la invasión alemana rechazo abandonar el país y organizo un hospital, dando refugio a más de 2000 judios y publicando obras contra el nacismo. Arrestado y transferido a Auschwitz, se ofrecio para ser ajusticiado por inanición en lugar de un padre de familia. Durante las dos semanas que tardo en morir, reconforto y guió a sus compañeros en la oración, impresionando a los SS por su serenidad..`,
    cita: `El odio és inútil, solo el amor crea`,
    notas: "Zduńska Wola, 8 de enero de 1894 - Auschwitz, 14 de agosto de 1941). Ordenado 1918 (24 años). 'el odio és inútil, solo el amor crea'",
  },
  {
    title: "Mártires seminaristas de Barbastro",
    image: "assets/img/barbastro.jpeg",
    text: `
    El 20 julio de 1936 milicianos anarquistas entran en el seminario y se llevan presos a los seminaristas.
    Maltratados de palabra y de obra, son tentados con prostitutas y la liberdad si cuelgan la sotana y se unen a los revolucionarios...
    Negandose a renunciar a Cristo, se preparan para el martirio, rezan, se confiesan y reciben la comunión que el cocinero les esconde en la comida.
    Son finalmente fusilados entre el 12 y el 15 de agosto (fiesta de la Inmaculada)`,
    cita: `Cuando llega el momento de designar las víctimas hay en todos serenidad santa y ansia de oír el nombre para adelantar y ponernos en la fila de los elegidos; esperamos el momento con generosa impaciencia, y cuando ha llegado, hemos visto a unos besar los cordeles con que los ataban, y a otros dirigir palabras de perdón a la turba armada`,
    notas: `https://www.xn--elespaoldigital-3qb.com/martires-seminaristas-de-barbastro/?reload=913122 claretianos  "Morimos todos contentos sin que nadie sienta desmayos ni pesares; morimos todos rogando a Dios que la sangre que caiga de nuestras heridas no sea sangre vengadora, sino sangre que entrando roja y viva por tus venas, estimule tu desarrollo y expansión por todo el mundo" a Salvador Pigem un amigo le ofrece escapar, pero se niega a abandonar a sus compañeros.`
  },
  {
    title: "San Fermín",
    image: "assets/img/sanfermin.jpeg",
    text: `Nacido en Pamplona (c. 272), hijo de altos funcionarios romanos convertidos al cristianismo por San Saturnino, fue ordenado en Tolosa y nombrado obispo de Amiens a los 24 años. Su defensa de la doctrina cristiana le granjeó la cárcel, donde, tras negarse a cesar su predica fue degollado a los 31 años`,
    cita: ``,
  },
  {
    title: "San Tarsicio",
    image: "assets/img/tarsicio.jpeg",
    text: `Muchacho romano de 14 años, encargado de llevar la comunión a los presos durante la persecución de Valeriano. Preguntado por un grupo de jovenes que guardaba bajo su manto, se nego a decir, siendo apedreado y apaleado hasta la muerte, prefiriendo morir antes que entregar el tesoro que custodiaba (c. 267-268). Es venerado como mártir de la Eucaristía y patrono de los monaguillos `,
    notas: `Martir de la eucaristia, patrono monaguillos. Nace 253 muere 267 a 268 (14-15años)`,
  },
  {
    title: "San Juan de Ávila",
    image: "assets/img/juan-de-avila.jpeg",
    text: `Ordenado sacerdote en 1526 (26 años). Espiritu misionero, es convencido obispo sevillapasa un año entero en la carcel falsamente acusado por envidias (por su incomididad) ante la inquisición 31-33, convierte a muchos con su predicación (ej. san Juan de Dios. Desde 1554 la enfermedad le obliga a vivir retirado en Montilla, ofreciendo su enformedad por la Iglesia, y dedicado a la escritura (ej. Audi, Filia) y el apostolado de la pluma de todas partes se le pedia consejo...`,
    cita: `No puedo estar en mejores manos... |  “Señor, habeos conmigo como el herrero: con una mano me tened, y con otra dadme con el martillo”`,
    notas: `https://www.vidasacerdotal.org/index.php/valores-sacerdotales/sacerdotes-santos/425-san-juan-de-avila-modelo-de-vida-sacerdotal.html`,
  }/*,
  {
    title: "San Ignacio de Loyola",
    image: "assets/img/ignacio.jpeg",
    text: ``,
    cita: ``,
    notas: ``,
  },
  {
    title: "San Juan de la Cruz",
    image: "assets/img/ignacio.jpeg",
    text: ``,
    cita: ``,
    notas: ``,
  },
  {
    title: `San Esteban`,
    image: ``,
    text: ``,
    cita: ``,
    notas: `diacono y proto martir`,
  },
  {
    title: `San Andrés Kim`,
    image: `Ordenado sacerdote en 1845 en Shangai, arrestado y decapitado en 1846`,
    text: ``,
    cita: ``,
    notas: `martir coreano https://www.aciprensa.com/santos/santo.php?id=425`,
  },
  {
    title: `Stanley Rother`,
    image: ``,
    text: ``,
    cita: ``,
    notas: `Primer martir estadounidense, muerto en guatemala`,
  },
  {
    title: `Beato Miguel Agustín Pro`,
    image: ``,
    text: ``,
    cita: ``,
    notas: `beato, muerto durante revolución cristera...`,
  },
  {
    title: `San Vicente Ferrer`,
    image: ``,
    text: ``,
    cita: ``,
    notas: `https://es.wikipedia.org/wiki/Vicente_Ferrer_(santo)#Canonizaci%C3%B3n patron de valencia`,
  },
  {
    title: `Santo Domingo de Guzmán`,
    image: ``,
    text: ``,
    cita: ``,
    notas: `Fundador Orden de Predicadores (dominicos) https://es.wikipedia.org/wiki/Domingo_de_Guzm%C3%A1n`,
  },
  {
    title: `San José de Calasanz`,
    image: ``,
    text: ``,
    cita: ``,
    notas: `1557-1648 sacerdote fundador de la primera escuela cristiana popular de europa, patrono de las escuelas cristianas, precursos de la pedagogía moderna`,
  },
  {
    title: ``,
    image: ``,
    text: ``,
    cita: ``,
    notas: ``,
  },
  {
    title: ``,
    image: ``,
    text: ``,
    cita: ``,
    notas: ``,
  },*/
/*  {
    title: "Beato Jerzy Popieluszko",
    image: "assets/img/popieluszko.jpeg",
    text: ``,
    notas: "https://www.vidasacerdotal.org/index.php/valores-sacerdotales/sacerdotes-santos/542-el-beato-jerzy-popieluszko-martir-de-la-resistencia-contra-la-dictadura-marxista.html",
  },
  {
    title: "Beato Ladislao Bukowinski",
    image: "assets/img/bukowinski.jpeg",
    text: ``,
    notas: "https://www.vidasacerdotal.org/index.php/valores-sacerdotales/sacerdotes-santos/616-el-beato-ladislao-bukowinski-deportado-y-capellan-de-deportados.html",
  },
  {
    title: "Beato José Puglisi",
    image: "assets/img/x.jpeg",
    text: `el azote de la Mafia siciliana`,
    cita: ``,
    notas: `https://www.vidasacerdotal.org/index.php/valores-sacerdotales/sacerdotes-santos/645-beato-jose-puglisi-el-azote-de-la-mafia-siciliana.html`,
  },
  {
    title: "San Pedro Poveda",
    image: "assets/img/x.jpeg",
    text: ``,
    cita: ``,
    notas: `https://www.cope.es/religion/vivir-la-fe/santoral/noticias/santos-martires-del-siglo-espana-fuertes-hasta-llegar-dios-20211105_1601255`,
  },
  {
    title: "San José Gabriel Brochero",
    image: "assets/img/x.jpeg",
    text: ``,
    cita: ``,
    notas: `el cura gaucho, https://www.vidasacerdotal.org/index.php/valores-sacerdotales/sacerdotes-santos/527-san-jose-gabriel-brochero-el-cura-gaucho.html`,
  },
  {
    title: "San Manuel González",
    image: "assets/img/x.jpeg",
    text: ``,
    cita: ``,
    notas: `  https://www.vidasacerdotal.org/index.php/valores-sacerdotales/sacerdotes-santos/579-san-manuel-gonzalez-el-obispo-de-los-sagrarios-abandonados.html`,
  },
  {
    title: "Mateo Correa Magallanes",
    image: "assets/img/magallanes.jpeg",
    text: `.`,
    cita: ``,
    notas: ``,
  },
  {
    title: "San Luis Versiglia",
    image: "assets/img/versiglia.jpeg",
    text: `.`,
    cita: ``,
  },
    /*{
    title: "",
    image: "assets/img/x.jpeg",
    text: ``,
    cita: ``,
    notas: ``,
  },*/
];

let santo = santos[0]
let timeout;
var app = new Vue({
  el: "#page-wrapper",
  data: {
    fotos: fotos,
    videos: videos,
    books: books,
    santo: santo,
    sliderIndex: 0,
  },
  methods: {
    slider(diff) {
      if (!diff) diff = 1
      this.sliderIndex = (santos.length + this.sliderIndex + diff) % santos.length;
      this.santo = santos[this.sliderIndex]
      this.resetTimer()
      console.log(this.sliderIndex, diff);
    },
    resetTimer(){
      clearTimeout(timeout);
      timeout = setTimeout(this.slider, 25000);  
    }
  },
  mounted() {
    this.resetTimer()
  }
});


function contacto() {
  var mensaje = document.getElementById("mensaje");
  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");
  var request = new XMLHttpRequest();
  var url = "https://arrietaeguren.es/webSeminario/email";
  url += "?message=" + mensaje.value + "&name=" + nombre.value;
  request.open("GET", url + "&email=" + email.value);
  request.send();
  request.onreadystatechange = (e) => {
    mensaje.value = "¡Gracias!";
    if (nombre.value) mensaje.value = "¡Gracias " + nombre.value + "!";
    nombre.value = "";
    email.value = "";
  };
}


console.log("Seminario Loaded...");
