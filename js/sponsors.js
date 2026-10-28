/* Sponsors: tarjetas + modal de detalle.
   Para editar un sponsor, tocá solo el arreglo SPONSORS de abajo.
   - logo / fotos: ruta a la imagen (ej. "img/sponsors/uncuyo.png"). Vacío = muestra un placeholder.
   - lat / lng: coordenadas para el mapa. Vacío = "Ubicación a confirmar". */
const SPONSORS = [
  {
    id: "uncuyo", nombre: "UNCuyo", logo: "img/sponsors/uncuyo.jpg",
    quienes: "La Universidad Nacional de Cuyo es una universidad pública de Mendoza. Nuestra escuela forma parte de su comunidad educativa.",
    hacen: "Promueve la formación, la investigación y la extensión. Su acompañamiento nos ayuda a crecer como equipo.",
    fotos: ["img/sponsors/uncuyo.jpg"], direccion: "Centro Universitario, Mendoza", lat: -32.881737842757964, lng: -68.88782166303176,
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7969.165377062182!2d-68.88782166303176!3d-32.881737842757964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08494a2c7695%3A0x96ddbb5e5bbc5d7a!2sUniversidad%20Nacional%20de%20Cuyo!5e0!3m2!1ses-419!2sar!4v1793155470256!5m2!1ses-419!2sar",
    web: "https://www.uncuyo.edu.ar/"
  },
  {
    id: "taller3d", nombre: "El Taller en 3D", logo: "img/sponsors/eltalleren3d.jpg",
    quienes: "Un taller dedicado a la impresión 3D.", hacen: "Acompaña al equipo con soluciones y piezas vinculadas a la fabricación 3D.",
    fotos: ["img/sponsors/eltalleren3d.jpg"], direccion: "Escuela de Comercio Martín Zapata, Mendoza", lat: -32.89640027361393, lng: -68.8524783245349,
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0668678244942!2d-68.8524783245349!3d-32.89640027361393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e54158a53%3A0x6aa184bd31f5dca6!2sEscuela%20de%20Comercio%20Mart%C3%ADn%20Zapata!5e0!3m2!1ses-419!2sar!4v1793155437148!5m2!1ses-419!2sar", web: ""
  },
  {
    id: "portal", nombre: "El Portal Aberturas", logo: "img/sponsors/elportalaberturas.png",
    quienes: "Comercio especializado en aberturas.", hacen: "Acompañó al equipo aportando herramientas y apoyo para ingeniería, fundamentales para construir, ajustar y mejorar el robot.",
    fotos: ["img/sponsors/elportalaberturas.png"], direccion: "El Portal Aberturas, Mendoza", lat: -32.88171067793552, lng: -68.96409885303919,
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107219.91443356762!2d-68.96409885303919!3d-32.88171067793552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0c3ce33cad95%3A0xfc413519919489d6!2sEl%20Portal%20Aberturas!5e0!3m2!1ses-419!2sar!4v1793155485646!5m2!1ses-419!2sar", web: "https://www.google.com/maps/search/?api=1&query=El+Portal+Aberturas+Mendoza"
  },
  {
    id: "printing-mendoza", nombre: "Printing Mendoza", logo: "img/sponsors/printing-mendoza.jpg",
    quienes: "Printing Service e imprenta en Mendoza.",
    hacen: "Gran formato, vinilo, lona, UV, DTF, polyfan y más. Realiza trabajos minoristas y mayoristas. Para presupuestos, contactalos por WhatsApp.",
    fotos: ["img/sponsors/printing-mendoza.jpg"], direccion: "Printing, Mendoza", lat: -32.9393574, lng: -68.8150737,
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.44126501343!2d-68.8150737!3d-32.939357400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b420f1bbcd7%3A0xe62b970bd9ddd2a!2sPRINTING!5e0!3m2!1sen!2sar!4v1793155145545!5m2!1sen!2sar",
    web: "https://www.google.com/maps/search/?api=1&query=PRINTING+Mendoza"
  },
  {
    id: "bordados-vista", nombre: "Bordados Vista", logo: "img/sponsors/bordadosvista.jpg",
    quienes: "Servicio de bordado, sublimado y estampado.",
    hacen: "Personalizados y trabajos empresariales. Su lema: detalles únicos en cada puntada. Contactalos para presupuestos.",
    fotos: ["img/sponsors/bordadosvista.jpg"], direccion: "Bordados Vista, Mendoza", lat: -32.8814541, lng: -68.8382158,
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6320260830175!2d-68.8382158!3d-32.8814541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091e2df94387%3A0x24795abb43144991!2sBordados%20Vista!5e0!3m2!1ses-419!2sar!4v1793155170539!5m2!1ses-419!2sar",
    web: "https://www.google.com/maps/search/?api=1&query=Bordados+Vista+Mendoza"
  },
  {
    id: "emperatriz", nombre: "Emperatriz", logo: "img/sponsors/emperatriz.jpg",
    quienes: "Emprendimiento de diseño gráfico.",
    hacen: "Banderas, banners y mucho más para mostrar lo que llevás dentro. Contacto por WhatsApp: 261 270-0341.",
    fotos: ["img/sponsors/emperatriz.jpg"], direccion: "Mendoza, Capital, Mendoza", lat: -32.88416404800791, lng: -68.87830012510625,
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31875.788848346023!2d-68.87830012510625!3d-32.88416404800791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e093ec45179bf%3A0x205a78f6d20efa3a!2sMendoza%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1793155243852!5m2!1ses-419!2sar",
    web: "https://wa.me/542612700341"
  }
];

const $ = (s, r = document) => r.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const iniciales = n => n.split(/\s+/).filter(w => w.length > 2).map(w => w[0]).join("").slice(0, 3).toUpperCase();

function imagen(src, alt, clase, texto) {
  return src
    ? `<img class="${clase}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
    : `<div class="${clase} vacio" role="img" aria-label="${esc(alt)}">${esc(texto)}</div>`;
}

function mapa(s) {
  if (s.lat == null || s.lng == null) {
    return `<div class="mapa vacio">Ubicación a confirmar</div>`;
  }
  if (s.mapaEmbed) return `<iframe class="mapa" title="Mapa de ${esc(s.nombre)}" loading="lazy" src="${esc(s.mapaEmbed)}" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
    <a class="mapa-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.nombre + " Mendoza")}">Abrir mapa grande</a>`;
  const d = 0.004;
  const bbox = [s.lng - d, s.lat - d, s.lng + d, s.lat + d].join("%2C");
  return `<iframe class="mapa" title="Mapa de ${esc(s.nombre)}" loading="lazy"
    src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${s.lat}%2C${s.lng}"></iframe>
    <a class="mapa-link" target="_blank" rel="noopener"
       href="https://www.openstreetmap.org/?mlat=${s.lat}&mlon=${s.lng}#map=16/${s.lat}/${s.lng}">Abrir mapa grande</a>`;
}

/* ----- Tarjetas ----- */
const lista = $("#sponsors-lista");
lista.innerHTML = SPONSORS.map(s => `
  <button class="sponsor" type="button" data-id="${s.id}" aria-haspopup="dialog">
    <span class="sponsor-img">${imagen(s.logo, "Logo de " + s.nombre, "sponsor-logo", iniciales(s.nombre))}</span>
    <span class="sponsor-nombre">${esc(s.nombre)}</span>
  </button>`).join("");

/* ----- Modal ----- */
const modal = $("#sponsor-modal");
const caja = $("#sponsor-caja");
let actual = -1, disparador = null;

function render(i) {
  const s = SPONSORS[i];
  actual = i;
  caja.innerHTML = `
    <button class="cerrar" type="button" aria-label="Cerrar">&times;</button>
    <div class="modal-cab">
      ${imagen(s.logo, "Logo de " + s.nombre, "modal-logo", iniciales(s.nombre))}
      <h2 id="sponsor-titulo">${esc(s.nombre)}</h2>
    </div>
    <div class="modal-bloque">
      <h3>¿Quiénes son?</h3>
      <p>${esc(s.quienes)}</p>
    </div>
    <div class="modal-bloque">
      <h3>¿Qué hacen?</h3>
      <p>${esc(s.hacen)}</p>
    </div>
    ${s.fotos && s.fotos.length ? `<div class="modal-fotos">${s.fotos.map((f, k) => imagen(f, `Imagen de ${s.nombre}`, "modal-foto", "Imagen del sponsor")).join("")}</div>` : ""}
    <div class="modal-ubicacion">
      <h3>¿Dónde están?</h3>
      ${s.direccion ? `<p>${esc(s.direccion)}</p>` : ""}
      ${mapa(s)}
    </div>
    <div class="modal-pie">
      <button class="nav-sp" type="button" data-dir="-1" aria-label="Sponsor anterior">&larr;</button>
      ${s.web ? `<a class="boton" href="${esc(s.web)}" target="_blank" rel="noopener">Visitar sitio</a>` : "<span></span>"}
      <button class="nav-sp" type="button" data-dir="1" aria-label="Sponsor siguiente">&rarr;</button>
    </div>`;
}

function abrir(i, desde) {
  disparador = desde || disparador;
  render(i);
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("abierto"));
  document.body.classList.add("sin-scroll");
  document.body.querySelectorAll("header, main, footer").forEach(e => e.setAttribute("inert", ""));
  history.replaceState(null, "", "#" + SPONSORS[i].id);
  $(".cerrar", caja).focus();
}

function cerrar() {
  modal.classList.remove("abierto");
  document.body.classList.remove("sin-scroll");
  document.body.querySelectorAll("[inert]").forEach(e => e.removeAttribute("inert"));
  history.replaceState(null, "", location.pathname);
  setTimeout(() => { modal.hidden = true; caja.innerHTML = ""; }, 200);
  if (disparador) disparador.focus();
}

lista.addEventListener("click", e => {
  const b = e.target.closest(".sponsor");
  if (b) abrir(SPONSORS.findIndex(s => s.id === b.dataset.id), b);
});

modal.addEventListener("click", e => {
  if (e.target === modal || e.target.closest(".cerrar")) return cerrar();
  const n = e.target.closest(".nav-sp");
  if (n) {
    render((actual + Number(n.dataset.dir) + SPONSORS.length) % SPONSORS.length);
    history.replaceState(null, "", "#" + SPONSORS[actual].id);
    $(".cerrar", caja).focus();
  }
});

document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") cerrar();
  if (e.key === "ArrowRight") $('.nav-sp[data-dir="1"]', caja).click();
  if (e.key === "ArrowLeft") $('.nav-sp[data-dir="-1"]', caja).click();
});

/* Link directo: sponsors.html#uncuyo abre ese sponsor */
const inicial = SPONSORS.findIndex(s => "#" + s.id === location.hash);
if (inicial >= 0) abrir(inicial, lista.children[inicial]);
