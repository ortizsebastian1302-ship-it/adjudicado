// ¡ADJUDICADO! en línea — Cloudflare Worker + Durable Object (una sala por código)
import HTML from "./index.html";
const DATA = {"contr": {"minima": ["Papelería para la alcaldía", "Pupitres para el colegio", "Reparación de andenes", "Kits de primeros auxilios", "Fumigación de la plaza de mercado", "Pintura de la casa de la cultura", "Uniformes deportivos", "Revisión eléctrica del puesto de salud", "Mantenimiento de aires acondicionados", "Señalización del parque"], "licitacion": ["Pavimentación de vía", "Puente peatonal sobre la vía", "Megacolegio", "Canalización de arroyo", "Rehabilitación del malecón", "Ciclorruta", "Alimentación escolar (PAE)", "Equipos médicos para hospital", "Alumbrado público"], "subasta": ["Combustible para la flota municipal", "Llantas para recolectores", "Resmas de papel", "Cemento gris por toneladas", "Computadores para la biblioteca"], "concurso": ["Interventoría de obra", "Diseño de un centro de salud", "Estudio del tren ligero", "Estudios de suelos para vivienda VIS"], "directa": ["Licencia de software exclusivo", "Urgencia: reparación de dique"]}, "ev": [["Se venció la seguridad social", "Todos voltean su documento Jurídico a vencido.", "Hay que tener los papeles al día."], ["Estados financieros sin actualizar", "Los 2 con más puntos voltean su documento Financiero.", "El RUP se renueva cada año."], ["Experiencia sin certificar", "Quien ganó el último contrato voltea su documento Técnico.", "La experiencia se debe poder demostrar."], ["Auditoría de la Contraloría", "El que va primero pierde 2 puntos.", "Los organismos de control vigilan."], ["Adenda: más presupuesto", "El próximo contrato da +2 puntos.", "Una adenda cambia el pliego."], ["Feria Mipyme", "El que va de último gana 2 puntos.", "Hay incentivos para empresas pequeñas."]], "q": [["¿Qué es el SECOP?", "Un banco del Estado", "La plataforma donde el Estado publica sus compras", "Un impuesto", "B"], ["¿Quién compra en la contratación estatal?", "Una entidad pública, como una alcaldía", "Un supermercado", "Una persona para su casa", "A"], ["¿Qué es un proveedor?", "Quien vigila el contrato", "Quien paga los impuestos", "Quien le vende bienes o servicios al Estado", "C"], ["¿Qué significa RUP?", "Reglamento Universal de Precios", "Registro Único de Proponentes", "Registro Urbano de Predios", "B"], ["¿Qué modalidad se usa para compras pequeñas?", "Mínima cuantía", "Licitación pública", "Concurso de méritos", "A"], ["¿En qué modalidad gana la experiencia y no el precio?", "Subasta inversa", "Mínima cuantía", "Concurso de méritos", "C"], ["En una subasta inversa, el precio…", "sube", "baja", "no cambia", "B"], ["¿Cuándo se usa la contratación directa?", "En casos especiales, como una urgencia", "Para cualquier compra", "Nunca", "A"], ["¿Qué ley es el Estatuto General de Contratación?", "Ley 100 de 1993", "Ley 30 de 1992", "Ley 80 de 1993", "C"], ["¿Qué es el PAA?", "Un permiso ambiental", "El plan de lo que la entidad comprará en el año", "Un pago de nómina", "B"], ["¿Antes de qué fecha se publica el PAA?", "31 de enero", "31 de diciembre", "1 de julio", "A"], ["¿Qué significa “subsanar”?", "Cancelar el contrato", "Subir el precio", "Corregir o completar un documento", "C"], ["¿Cuántos días hábiles hay para subsanar?", "30", "5", "1", "B"], ["¿La oferta puede superar el presupuesto?", "No", "Sí", "Solo en diciembre", "A"], ["Los requisitos habilitantes son la capacidad…", "física, mental y social", "urbana, rural y mixta", "jurídica, financiera y técnica", "C"], ["¿Qué documento prueba que una empresa existe?", "La licencia de conducción", "El certificado de existencia y representación legal", "El pasaporte", "B"], ["¿Qué entidad expide el RUT?", "La DIAN", "La Registraduría", "El SENA", "A"], ["Los antecedentes disciplinarios los expide…", "la DIAN", "el ICBF", "la Procuraduría", "C"], ["Los antecedentes fiscales los expide…", "la Policía", "la Contraloría", "la alcaldía", "B"], ["¿Qué es el pliego de condiciones?", "Las reglas del proceso: qué piden y cómo evalúan", "Un contrato ya firmado", "Una factura", "A"], ["En los pliegos tipo, ¿para qué sirve la TRM?", "Para fijar el salario mínimo", "Para escoger al ganador directamente", "Para escoger la fórmula que califica el precio", "C"], ["¿Qué se puede hacer en SECOP II que no en SECOP I?", "Nada, son iguales", "Presentar ofertas en línea", "Pagar impuestos", "B"], ["¿Quién puede ver los procesos publicados en SECOP?", "Cualquier ciudadano", "Solo las entidades", "Solo los jueces", "A"], ["¿Qué hace un interventor?", "Vende los materiales", "Compra para la entidad", "Vigila que el contrato se cumpla", "C"], ["¿Qué son los códigos UNSPSC?", "Claves bancarias", "Códigos que clasifican bienes y servicios", "Números de cédula", "B"], ["La mínima cuantía equivale al…", "10 % de la menor cuantía", "50 % de la menor cuantía", "doble de la menor cuantía", "A"], ["Una firma de arquitectos que diseña es proveedor de…", "bienes", "recursos", "servicios", "C"], ["Una empresa que vende papelería es proveedor de…", "servicios", "bienes", "recursos", "B"], ["¿Dónde se compra con un Acuerdo Marco de Precios?", "En la Tienda Virtual del Estado Colombiano", "En el Banco de la República", "En una feria", "A"], ["¿Qué ley trata la transparencia y el acceso a la información?", "Ley 80 de 1993", "Ley 1150 de 2007", "Ley 1712 de 2014", "C"], ["¿Qué ley hizo obligatorios los pliegos tipo?", "Ley 1882 de 2018", "Ley 2022 de 2020", "Ley 1474 de 2011", "B"], ["La licitación pública se usa para…", "contratos grandes con muchos oferentes", "compras de muy poco valor", "contratar sin competir", "A"], ["¿Qué significa CDP?", "Contrato de Prestación", "Cuenta de Pagos", "Certificado de Disponibilidad Presupuestal", "C"], ["¿Qué hace Colombia Compra Eficiente?", "Vende productos al público", "Administra el SECOP y las reglas de compra pública", "Cobra impuestos", "B"], ["Si un requisito habilitante falta, ¿se puede corregir?", "Sí, se puede subsanar", "No, nunca", "Solo pagando una multa", "A"], ["Lo que da puntaje en una oferta (como el precio)…", "se puede cambiar después", "se subsana en 5 días", "no se puede subsanar", "C"]], "retos": [["mimica", "Subasta inversa", null], ["mimica", "Firmar un contrato", null], ["mimica", "Un interventor revisando una obra", null], ["mimica", "Una licitación con muchos competidores", null], ["mimica", "Una urgencia manifiesta", null], ["mimica", "Se te venció un documento", null], ["dibujo", "Un pliego de condiciones", null], ["dibujo", "El dado de TRM", null], ["dibujo", "Un centro de salud", null], ["dibujo", "Una alcaldía comprando", null], ["dibujo", "Un sello de aprobado", null], ["dibujo", "Un puente peatonal", null], ["sindecir", "Proveedor", ["vender", "empresa", "Estado"]], ["sindecir", "SECOP", ["plataforma", "internet", "compras"]], ["sindecir", "Oferta", ["precio", "plata", "propuesta"]], ["sindecir", "Subsanar", ["corregir", "documento", "arreglar"]], ["sindecir", "Contrato", ["firmar", "acuerdo", "papel"]], ["sindecir", "Presupuesto", ["dinero", "plata", "cuánto"]], ["rapido", "Di 3 documentos que pide el Estado", null], ["rapido", "Di las 5 modalidades", null], ["rapido", "Di 3 cosas que compra una alcaldía", null], ["rapido", "Di 2 entidades públicas de tu ciudad", null], ["rapido", "Cuenta de 100 a 80 de 5 en 5", null], ["rapido", "Di los 3 tipos de proveedor", null]], "easy": [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 32, 34, 35]};

export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    if (u.pathname === "/ws") {
      const code = (u.searchParams.get("sala") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
      if (!code) return new Response("Falta el código de sala", { status: 400 });
      return env.ROOMS.get(env.ROOMS.idFromName(code)).fetch(req);
    }
    return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" } });
  },
};

const MOD = {
  minima: { pts: 1, docs: "J" }, licitacion: { pts: 3, docs: "JFT" }, subasta: { pts: 2, docs: "JF" },
  concurso: { pts: 3, extra: 2, docs: "JT" }, directa: { pts: 2, docs: "T" },
};
const COLORS = ["#D9961F", "#D9483B", "#2F6FD0", "#24936E", "#1E7C8C", "#E5732B", "#7357C9", "#B8457B"];
const RT = { mimica: 30, dibujo: 30, sindecir: 30, rapido: 10 };
const shuf = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const bonus = (v) => (v - 75) / 5;

function decks(novato) {
  const sec = [];
  for (const [m, objs] of Object.entries(DATA.contr)) {
    if (novato && !["minima", "subasta", "directa"].includes(m)) continue;
    objs.forEach((o, i) => sec.push({ k: "c", m, o, code: m.slice(0, 2).toUpperCase() + "-" + String(i + 1).padStart(3, "0") }));
  }
  if (!novato) DATA.ev.forEach((e, i) => sec.push({ k: "e", i, t: e[0], pasa: e[1], ens: e[2] }));
  const qs = DATA.q.map((q, i) => ({ n: i + 1, q: q[0], o: [q[1], q[2], q[3]], r: "ABC".indexOf(q[4]) })).filter((q) => !novato || DATA.easy.includes(q.n));
  return { deck: shuf(sec), qdeck: shuf(qs), rdeck: shuf(DATA.retos.map((r) => ({ tipo: r[0], w: r[1], p: r[2] }))) };
}

export class GameRoom {
  constructor(state) {
    this.state = state; this.sessions = new Set(); this.g = null; this.timer = null;
    state.blockConcurrencyWhile(async () => { this.g = (await state.storage.get("g")) || null; });
  }
  async fetch(req) {
    if (req.headers.get("Upgrade") !== "websocket") return new Response("Se necesita WebSocket", { status: 426 });
    const code = (new URL(req.url).searchParams.get("sala") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    const [client, server] = Object.values(new WebSocketPair());
    server.accept();
    const sess = { ws: server, pid: null };
    this.sessions.add(sess);
    server.addEventListener("message", (e) => {
      try { this.onMsg(sess, JSON.parse(e.data), code); }
      catch (err) { this.send(sess, { t: "err", m: String(err && err.message || err) }); }
    });
    const bye = () => { this.sessions.delete(sess); this.broadcast(); };
    server.addEventListener("close", bye); server.addEventListener("error", bye);
    return new Response(null, { status: 101, webSocket: client });
  }
  send(sess, obj) { try { sess.ws.send(JSON.stringify(obj)); } catch (e) {} }
  save() { this.state.storage.put("g", this.g); }
  broadcast() { if (!this.g) return; for (const s of this.sessions) this.send(s, { t: "state", v: this.view(s.pid) }); }
  idx(pid) { return this.g.players.findIndex((p) => p.id === pid); }

  onMsg(sess, m, code) {
    if (!this.g) this.g = { code, phase: "lobby", host: null, players: [], log: [], meta: 15, novato: true };
    const g = this.g;
    if (m.t === "hello") {
      if (m.pid && this.idx(m.pid) >= 0) sess.pid = m.pid;
      this.send(sess, { t: "you", pid: sess.pid }); this.broadcast(); return;
    }
    if (m.t === "join") {
      if (sess.pid && this.idx(sess.pid) >= 0) return;
      if (g.phase !== "lobby") throw new Error("La partida ya empezó.");
      if (g.players.length >= 8) throw new Error("La sala está llena (máximo 8).");
      const color = COLORS.includes(m.color) ? m.color : null;
      if (!color || g.players.some((p) => p.color === color)) throw new Error("Ese color ya lo tiene otro jugador.");
      const name = String(m.name || "").trim().slice(0, 18) || "Empresa " + (g.players.length + 1);
      const id = crypto.randomUUID();
      g.players.push({ id, name, color, score: 0, docs: { J: 1, F: 1, T: 1 }, com: 2 });
      if (!g.host) g.host = id;
      sess.pid = id; this.send(sess, { t: "you", pid: id }); this.save(); this.broadcast(); return;
    }
    if (m.t === "act") {
      const pi = this.idx(sess.pid);
      if (pi < 0) throw new Error("Primero entra a la sala.");
      this.act(pi, m); this.save(); this.broadcast();
    }
  }
  ctrl(pi) { return pi === this.g.ord || this.g.players[pi].id === this.g.host; }
  draw(key) { const g = this.g; if (!g.D[key].length) g.D[key] = decks(g.novato)[key]; return g.D[key].pop(); }
  logp(t) { this.g.log.unshift(t); this.g.log = this.g.log.slice(0, 8); }
  needs(p) { return MOD[this.g.card.m].docs.split("").filter((k) => !p.docs[k]); }
  eligible() { return this.g.players.map((p, i) => i).filter((i) => !this.needs(this.g.players[i]).length); }

  act(pi, m) {
    const g = this.g, P = g.players, me = P[pi], s = g.s || {};
    const need = (cond, msg) => { if (!cond) throw new Error(msg || "Ahora no puedes hacer eso."); };
    switch (m.a) {
      case "mode": need(g.phase === "lobby" && me.id === g.host); g.novato = !!m.novato; g.meta = g.novato ? 15 : 30; return;
      case "color": need(g.phase === "lobby"); need(COLORS.includes(m.color) && !P.some((p) => p.color === m.color), "Ese color ya está tomado."); me.color = m.color; return;
      case "start":
        need(g.phase === "lobby" && me.id === g.host, "Solo quien creó la sala puede empezar.");
        need(P.length >= 2, "Se necesitan al menos 2 jugadores.");
        Object.assign(g, { phase: "game", ord: 0, turn: 1, adenda: 0, last: null, D: decks(g.novato), sec: {} });
        this.logp("¡Empezó la partida!"); return this.toPublicar();
      case "flip": need(g.step === "publicar" && this.ctrl(pi)); return this.flip();
      case "seguir":
        need(this.ctrl(pi) || (g.step === "subsanar" && pi === s.p && s.result), "Le toca al Ordenador del gasto.");
        if (g.step === "evento") return this.flip();
        if (g.step === "revisar") return this.nextPend();
        if (g.step === "adjudica" || g.step === "desierto") return this.nextTurn();
        if (g.step === "revela") return this.decideMinima();
        if (g.step === "subsanar" && s.result) return this.nextPend();
        return;
      case "subsanar":
        need(g.step === "subsanar" && pi === s.p && !s.mode);
        if (m.como === "pregunta") { const q = this.draw("qdeck"); g.sec.qr = q.r; s.q = { n: q.n, q: q.q, o: q.o }; s.mode = "pregunta"; s.gone = []; }
        else if (m.como === "reto") { const r = this.draw("rdeck"); g.sec.reto = r; s.mode = "reto"; s.tipo = r.tipo; s.judge = pi === g.ord ? (g.ord + 1) % P.length : g.ord; }
        else { s.result = "skip"; return this.nextPend(); }
        return;
      case "comodin":
        need(g.step === "subsanar" && pi === s.p && s.mode === "pregunta" && !s.result && me.com > 0 && !s.gone.length);
        me.com--; { const wrong = [0, 1, 2].filter((i) => i !== g.sec.qr); s.gone = [wrong[Math.floor(Math.random() * 2)]]; } return;
      case "responder":
        need(g.step === "subsanar" && pi === s.p && s.mode === "pregunta" && !s.result);
        s.pick = +m.i; s.r = g.sec.qr; s.result = s.pick === s.r ? "ok" : "no";
        if (s.result === "ok") { this.needs(me).forEach((k) => (me.docs[k] = 1)); this.logp(`${me.name} subsanó con una pregunta`); }
        return;
      case "retoStart": need(g.step === "subsanar" && pi === s.p && s.mode === "reto" && !s.ends); s.ends = Date.now() + RT[s.tipo] * 1000; return;
      case "juzgar": {
        need(g.step === "subsanar" && s.mode === "reto" && !s.result && (pi === s.judge || me.id === g.host), "Solo el juez del reto decide.");
        const perf = P[s.p];
        if (m.ok) { this.needs(perf).forEach((k) => (perf.docs[k] = 1)); this.logp(`${perf.name} subsanó con un reto`); }
        if (m.g !== undefined && m.g !== null && P[m.g] && m.g !== s.p) { P[m.g].score++; this.logp(`${P[m.g].name} adivinó el reto (+1)`); }
        s.result = m.ok ? "ok" : "no"; s.reto = g.sec.reto; return this.checkWin();
      }
      case "oferta":
        need(g.step === "oferta" && s.el.includes(pi) && [80, 85, 90, 95, 100].includes(+m.v));
        g.sec.offers[pi] = +m.v; s.done = Object.keys(g.sec.offers).map(Number);
        if (s.done.length === s.el.length) { s.offers = { ...g.sec.offers }; g.step = "revela"; s.rule = null; }
        return;
      case "dado": {
        need(g.step === "revela" && g.card.m === "licitacion" && !g.novato && this.ctrl(pi) && !s.rule);
        s.rule = ["menor", "mediana", "media"][Math.floor(Math.random() * 3)]; s.rolledAt = Date.now();
        return this.decide(s.rule);
      }
      case "puja": {
        need(g.step === "subasta" && s.el.includes(pi) && s.who !== pi);
        const next = s.price === null ? 100 : s.price - 5; need(next >= 80, "Ya no se puede bajar más.");
        s.price = next; s.who = pi; s.ends = Date.now() + 3000;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => { if (this.g.step === "subasta") { const w = this.g.s.who, v = this.g.s.price; this.award(w, v, `Nadie bajó de ${v} %`); this.save(); this.broadcast(); } }, 3100);
        return;
      }
      case "desierto": need(g.step === "subasta" && this.ctrl(pi) && s.who === null); this.logp("Subasta desierta"); g.step = "desierto"; g.s = { why: "Nadie aceptó el precio." }; return;
      case "resp": {
        need((g.step === "desempate" || g.step === "concurso") && s.cand.includes(pi) && s.ans[pi] === undefined && !s.winner && s.winner !== 0);
        s.ans[pi] = +m.i;
        if (+m.i === g.sec.qr) { s.winner = pi; s.r = g.sec.qr; s.qwin = true; return this.award(pi, g.step === "desempate" ? g.sec.offers[pi] : null, g.step === "desempate" ? "Ganó el desempate" : "Respondió primero y bien"); }
        if (s.cand.every((i) => s.ans[i] !== undefined)) {
          s.r = g.sec.qr;
          if (g.step === "concurso") { g.step = "desierto"; g.s = { why: "Nadie acertó la pregunta del concurso." }; this.logp("Concurso desierto"); return; }
          const mn = Math.min(...s.cand.map((i) => g.sec.offers[i])); const w = s.cand.find((i) => g.sec.offers[i] === mn);
          return this.award(w, g.sec.offers[w], "Nadie acertó: gana la oferta más baja");
        }
        return;
      }
      case "nueva": need(g.phase === "fin" && me.id === g.host);
        P.forEach((p) => Object.assign(p, { score: 0, docs: { J: 1, F: 1, T: 1 }, com: 2 })); g.phase = "lobby"; g.step = null; g.s = null; g.card = null; g.log = []; return;
      default: throw new Error("Acción desconocida");
    }
  }
  toPublicar() { const g = this.g; g.step = "publicar"; g.card = null; g.s = {}; g.sec = {}; }
  flip() {
    const g = this.g; g.card = this.draw("deck");
    if (g.card.k === "e") { this.applyEvent(g.card.i); this.logp(`Evento: ${g.card.t}`); g.step = "evento"; g.s = {}; return this.checkWin(); }
    g.step = "revisar"; g.s = { pend: g.players.map((p, i) => i).filter((i) => this.needs(g.players[i]).length) };
  }
  applyEvent(i) {
    const P = this.g.players, max = Math.max(...P.map((p) => p.score)), min = Math.min(...P.map((p) => p.score));
    if (i === 0) P.forEach((p) => (p.docs.J = 0));
    if (i === 1) { const sc = [...new Set(P.map((p) => p.score))].sort((a, b) => b - a); const lim = sc[Math.min(1, sc.length - 1)]; P.filter((p) => p.score >= lim).forEach((p) => (p.docs.F = 0)); }
    if (i === 2 && this.g.last !== null) P[this.g.last].docs.T = 0;
    if (i === 3) P.filter((p) => p.score === max).forEach((p) => (p.score = Math.max(0, p.score - 2)));
    if (i === 4) this.g.adenda = 2;
    if (i === 5) P.filter((p) => p.score === min).forEach((p) => (p.score += 2));
  }
  nextPend() {
    const g = this.g, pend = (g.s.pend || []).slice();
    if (pend.length) { const p = pend.shift(); g.step = "subsanar"; g.s = { pend, p, mode: null }; g.sec.qr = null; return; }
    this.competir();
  }
  competir() {
    const g = this.g, el = this.eligible(), m = g.card.m; g.sec.offers = {};
    if (!el.length) { g.step = "desierto"; g.s = { why: "Nadie tenía los documentos que pide la carta." }; this.logp("Contrato desierto"); return; }
    if (m === "minima" || m === "licitacion") { g.step = "oferta"; g.s = { el, done: [] }; return; }
    if (m === "subasta") { g.step = "subasta"; g.s = { el, price: null, who: null }; return; }
    if (m === "concurso") {
      const cand = el.filter((i) => i !== g.ord);
      if (!cand.length) { g.step = "desierto"; g.s = { why: "Solo el Ordenador cumplía los requisitos." }; return; }
      const q = this.draw("qdeck"); g.sec.qr = q.r; g.step = "concurso"; g.s = { cand, q: { n: q.n, q: q.q, o: q.o }, ans: {} }; return;
    }
    const order = g.players.map((p, i) => (g.ord + i) % g.players.length).filter((i) => el.includes(i));
    const mn = Math.min(...order.map((i) => g.players[i].score));
    this.award(order.find((i) => g.players[i].score === mn), null, "Se le adjudica directamente a la empresa que va de último");
  }
  decideMinima() { const g = this.g; if (g.step !== "revela") return; if (g.card.m === "licitacion" && !g.novato && !g.s.rule) return; this.decide(g.s.rule || "menor"); }
  decide(rule) {
    const g = this.g, s = g.s, el = s.el, O = g.sec.offers, vals = el.map((i) => O[i]); let win;
    if (rule === "menor") { const mn = Math.min(...vals); win = el.filter((i) => O[i] === mn); }
    if (rule === "media") { const d = Math.min(...vals.map((v) => Math.abs(v - 90))); win = el.filter((i) => Math.abs(O[i] - 90) === d); }
    if (rule === "mediana") { const so = el.slice().sort((a, b) => O[a] - O[b]); const n = so.length; const mids = n % 2 ? [so[(n - 1) / 2]] : [so[n / 2 - 1], so[n / 2]]; const mv = mids.map((i) => O[i]); win = el.filter((i) => mv.includes(O[i])); }
    const label = { menor: "Menor valor: gana la oferta más baja", mediana: "Mediana: gana la oferta del medio", media: "Media 90: gana la más cercana a 90 %" }[rule];
    if (win.length > 1) { const q = this.draw("qdeck"); g.sec.qr = q.r; g.step = "desempate"; g.s = { el, offers: s.offers, rule, label, cand: win, q: { n: q.n, q: q.q, o: q.o }, ans: {} }; return; }
    this.award(win[0], O[win[0]], label);
  }
  award(w, offer, why) {
    const g = this.g, md = MOD[g.card.m], p = g.players[w];
    const base = md.pts + (md.extra || 0), b = offer ? bonus(offer) : 0, ad = g.adenda || 0, tot = base + b + ad;
    p.score += tot; g.last = w; g.adenda = 0;
    this.logp(`Turno ${g.turn}: ${p.name} ganó «${g.card.o}» (+${tot})`);
    const prev = g.s || {};
    g.step = "adjudica"; g.s = { w, base, b, ad, tot, offer, why, offers: prev.offers || null, rule: prev.rule || null, q: prev.q || null, r: prev.r, ans: prev.ans || null };
    this.checkWin();
  }
  checkWin() {
    const g = this.g, best = g.players.filter((p) => p.score >= g.meta).sort((a, b) => b.score - a.score)[0];
    if (best) { g.phase = "fin"; g.winner = best.id; this.logp(`¡${best.name} ganó la partida!`); }
  }
  nextTurn() { const g = this.g; g.ord = (g.ord + 1) % g.players.length; g.turn++; this.toPublicar(); }

  view(pid) {
    const g = this.g, online = new Set([...this.sessions].map((s) => s.pid));
    const me = g.players.findIndex((p) => p.id === pid);
    const v = { code: g.code, phase: g.phase, host: g.host, me, novato: g.novato, meta: g.meta, ord: g.ord, turn: g.turn, card: g.card, step: g.step, log: g.log, winner: g.winner, adenda: g.adenda,
      players: g.players.map((p) => ({ id: p.id, name: p.name, color: p.color, score: p.score, docs: p.docs, com: p.com, online: online.has(p.id) })), now: Date.now() };
    const s = g.s ? JSON.parse(JSON.stringify(g.s)) : {};
    if (g.step === "subsanar" && g.s.mode === "reto" && me === g.s.p && g.sec.reto) s.reto = g.sec.reto;
    if (g.step === "subsanar" && g.s.mode === "reto" && me === g.s.judge && g.s.ends && g.sec.reto) s.reto = g.sec.reto;
    if (g.step === "oferta" && g.sec.offers && g.sec.offers[me] !== undefined) s.mine = g.sec.offers[me];
    v.s = s; return v;
  }
}
