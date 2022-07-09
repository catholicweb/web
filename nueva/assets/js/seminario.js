function contacto() {
  var mensaje = document.getElementById('mensaje');
  var nombre = document.getElementById('nombre');
  var email = document.getElementById('email');
  var request = new XMLHttpRequest();
  var url = 'https://arrietaeguren.es/webSeminario/email';
  url += '?message=' + mensaje.value + '&name=' + nombre.value;
  request.open('GET', url + '&email=' + email.value);
  request.send();
  request.onreadystatechange = (e) => {
    mensaje.value = '¡Gracias!'
    if (nombre.value) mensaje.value = '¡Gracias ' + nombre.value + '!';
    nombre.value = '';
    email.value = '';
  };
}

/* Fotos del seminario */
var fotos = [];
for (var i = 1; i <= 0; i++) {//27
  fotos.push({
    src: './assets/fotos/' + i + '.jpeg',
    thumb: './assets/fotos/' + i + '.jpeg',
    caption: 'Seminario de Pamplona (PJ)',
  });
}
for (var i = 1; i <= 2; i++) {
  fotos.push({
    src: './assets/fotos/d' + i + '.jpg',
    thumb: './assets/fotos/d' + i + '.jpg',
    caption: 'San José (DC)',
  });
}

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
    caption: 'Signos de la vocación',
    class: 'hidden',
    yid: 'zURt1o1cQrA',
  },
  {
    caption: 'La vocación Mons Munilla',
    yid: 'w5FTJrEx5ro',
  },
  {
    caption: 'Carlos Cabrera | Ser sacerdote es una apertura a la vida',
    yid: 'RhZFjkmX894',
  },
  {
    yid: 'm0To2flk_Lg',
  },
  {
    caption: 'Testimonio Scout',
    class: 'hidden',
    yid: 'og6i0VZFzgc',
  },
  {
    caption: '¿Hay monjes benedictinos jóvenes? El testimonio de Fray Eduardo',
    yid: 'x33Fi_iEEFM',
  },
  {
    caption: 'Testimonio de Fray Ignacio, monje benedictino y millennial',
    yid: 'LvqPshrX8cg',
  },
];

var sacerdocio = [{
    caption: 'Testimonio Jose Angel Zubiaur',
    yid: 'CSqnkjlqZx0',
  },
  {
    caption: '¿Por qué eres sacerdote? La vocación después de 1, 2 ¡o 30 años!',
    yid: 'Qrf8LVmzWPk',
    thumb: 'https://i3.ytimg.com/vi/Qrf8LVmzWPk/hqdefault.jpg',
  },
  {
    caption: 'Testimonio Pedro Luis',
    yid: 'k-i5Zox0K9I',
  },
  {
    caption: '¿Y por qué no sacerdote?',
    yid: 'm0To2flk_Lg',
  },
  /*{
    caption: 'Pescadores de hombres',
    yid: 'gN3ROP4akbs',
  },*/
];

var books = [{
    caption: 'Hasta la Cumbre: Testamento espiritual (Pablo Domínguez Prieto)',
    thumb: './assets/img/hastalacumbre.jpg',
    src: 'https://www.amazon.es/Hasta-cumbre-Colecci%C3%B3n-Horizontes-Spanish-ebook/dp/B0082YTOI0',
  },
  {
    caption: 'Caminando por valles oscuros: Memorias de un jesuita en el Gulag (Walter J. Ciszek)',
    thumb: './assets/img/caminandovalles.jpeg',
    src: 'https://www.amazon.es/Caminando-por-valles-oscuros-Arcaduz-ebook/dp/B00W9AX060',
  },
  {
    caption: 'El cura de Ars (Francis Trochu)',
    thumb: 'https://d3s1b1zelykba8.cloudfront.net/Articulo/Grande/541.jpg',
    src: 'https://www.palabra.es/el-cura-de-ars-digital-0541.html',
  },
  {
    caption: 'Se Buscan Rebeldes: Y luego, que sea lo que Dios quiera',
    thumb: './assets/img/sebuscanrebeldes.jpg',
    src: 'https://www.amazon.es/buscan-rebeldes-Religi%C3%B3n-Fuera-Colecci%C3%B3n/dp/8432150126',
  },
  {
    caption: 'Muchos son los llamados (Scott Hahn)',
    thumb: './assets/img/muchos-son-los-llamados.jpg',
    src: 'https://www.rialp.com/libro/muchos-son-los-llamados_92905/',
  },
  {
    caption: 'Vasija de barro (Leo John Trese)',
    //thumb: 'https://d3s1b1zelykba8.cloudfront.net/Articulo/Original/572.jpg',
    thumb: 'https://static.serlogal.com/imagenes_big/9788471/978847118055.JPG',
    src: 'https://www.palabra.es/vasija-de-barro-0572.html',
  },
  {
    caption: 'La Paternidad espiritual del Sacerdote: Un tesoro en vasos de barro (Jacques Philippe)',
    thumb: './assets/img/paternidad-sacerdotal.jpg',
    src: 'https://www.amazon.es/Paternidad-espiritual-del-Sacerdote-tesoro/dp/8432153249/',
  },
  {
    caption: 'Patris corde y otros materiales',
    src: './assets/docs/Patris corde y otros materiales.pdf',
    thumb: './assets/img/sanjose.png',
  },
  {
    caption: 'Servidor De Vuestra Alegria (Joseph Card. Ratzinger)',
    src: './assets/docs/servidor_de_vuestra_alegria.pdf',
    thumb: './assets/img/servidor-alegria.jpg',
  },
];

var diario = [{
    caption: 'Excursión',
    yid: 'NHqP8LAjT4E',
    thumb: 'http://i3.ytimg.com/vi/NHqP8LAjT4E/hqdefault.jpg',
  },
  {
    caption: 'Excursión',
    yid: 'zlqZk8tnb0E',
    thumb: 'http://i3.ytimg.com/vi/zlqZk8tnb0E/hqdefault.jpg',
  },
  {
    caption: 'Excursión',
    yid: 'U2P-ZvncuaY',
    thumb: 'http://i3.ytimg.com/vi/U2P-ZvncuaY/hqdefault.jpg',
  },
  {
    caption: 'Excursión',
    yid: 'C-3VZU4tq1I',
    thumb: 'http://i3.ytimg.com/vi/C-3VZU4tq1I/hqdefault.jpg',
  },



]


let santos = [
{
  "title": "",
  "text": "Puede parecer una locura (lo es), pero a algunos hombres Dios nos pide poder usar nuestras manos para entregarse a su pueblo. Esta es una tarea apasionante, que nos supera y sobrecoge, pero para la cual Dios nos capacita... Pero veamos algunos ejemplos...",
                //La vocación al sacerdocio es Cristo que, viendo sufrir a su pueblo, nos pide poder usar nuestras manos para así entregarse en la Eucaristía, para poder escuchar a todo el que se acerca y perdonarle los pecados... Es Cristo que nos pide salir a las encrucijadas de los caminos para anunciar la buena noticia y acompañar a su pueblo hacia su amor.
//  El sacerdocio es un regalo que nos sobrepasa infinitamente. Un servicio para el que somos absolutamente indignos, pero que, misteriosamente, Dios ha querido realizar a través de nosotros. Es una tarea que nos supera y sobrecoge, pero para la cual nos capacita a través de su Gracia.
  "image": "https://www.archgh.org/media/12019/texas-catholic-herald-priesthood-ordinations-28.jpg",
},
{
    "title": "Santo Cura de Ars",
    "image": "https://live.staticflickr.com/65535/51357127718_0b19d34782_o.jpg",
    "text": "Ordenado en ... tras estudiar... se levantaba muy de mañana a confesar..."
  },
  {
    "title": "San Fancisco Javier",
    "image": "https://www.españaconfidencial.com/wp-content/uploads/2016/12/sfj.jpg",
    "text": "Francisco de Jasso y Azpilicueta (7 de abril de 1506-3 de diciembre de 1552), más conocido como San Francisco Javier o también como Francisco Xavier, Francisco de Javier o Francés de Jaso, fue un religioso y misionero navarro de la Compañía de Jesús nacido en la localidad de Javier (Reino de Navarra) y fallecido en la isla Shangchuan (China). Fue canonizado por la Iglesia católica con el nombre de san Francisco Javier."
  },
  {
    "title": "San Damián de Molokai",
    "image": "https://www.revistaecclesia.com/wp-content/uploads/2020/04/molokai-1200x1128.jpg",
    "text": ""
  },
  {
    "title": "San Juan Nepomuceno",
    "image": "https://combonipca.org/wp-content/uploads/2019/07/s8-e1386087288703.jpg",
    "text": ""
  },
  {
    "title": "San Maximiliano Kolbe",
    "image": "https://1.bp.blogspot.com/-y1YfhIlSA-k/XzcDdIDdO0I/AAAAAAAKJOc/SK60lNob15MBHQ2txJh5Q-jzoSk9LUr3gCLcBGAsYHQ/s1600/maximiliano-kolbe-removebg-preview.png",
    "text": ""
  },
  {
    "title": "San Luis Versiglia",
    "image": "https://docplayer.es/docs-images/73/69504284/images/13-2.jpg",
    "text": ""
  },
  {
    "title": "San Fermín",
    "image": "https://dbe.rah.es/sites/default/files/styles/wide/public/imagenes/biografias/San-Fermin.jpg",
    "text": ""
  },
  {
    "title": "San Tarsicio",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Statue-Orsay-03.jpg",
    "text": ""
  }
]


var app = new Vue({
  el: '#page-wrapper',
  data: {
    fotos: fotos,
    videos: videos,
    books: books,
    santos: santos,
    sliderIndex: 0,
  },
  methods: {
    slider (n) {
      if (n) return this.sliderIndex = n
      this.sliderIndex = (this.sliderIndex + 1 ) % santos.length
      console.log(this.sliderIndex, n)
    },
  },
  mounted () {
    setInterval( this.slider, 25000);
  },
});





console.log('Seminario Loaded...')