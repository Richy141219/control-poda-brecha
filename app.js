const STORAGE_KEY = "poda-urbana-registros-v1";
const ROUTES_KEY = "poda-urbana-trayectorias-v1";
const BRECHA_KEY = "brecha-registros-v1";
const BRECHA_ROUTES_KEY = "brecha-trayectorias-v1";
const MODE_KEY = "control-poda-brecha-modo-v1";
const VIEW_KEY = "control-poda-brecha-vista-v1";
const PENDING_SYNC_KEY = "control-poda-brecha-sync-pendiente-v1";
const DATABASE_TOKEN_KEY = "control-poda-brecha-token-v1";
const SUPABASE_URL = "https://laxrkoajrvbmesshbake.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_AAUS4Qrl520qcoLyAZwiuQ_GMGN5riU";
const SUPABASE_TABLE = "app_database";
const LOCAL_DATABASE_API = "/api/database";

const seedRecords = [
  { latitud: 18.924187, longitud: -97.012468, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 60, estructuras: "76 - 77" },
  { latitud: 18.9201705, longitud: -97.0134002, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 8, estructuras: "77 - 78" },
  { latitud: 18.91988689, longitud: -97.0138639, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 10, estructuras: "78 - 79" },
  { latitud: 18.9197205, longitud: -97.0110034, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 8, estructuras: "79 - 80" },
  { latitud: 18.9214103, longitud: -97.0107898, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 18, estructuras: "80 - 81" },
  { latitud: 18.9288047, longitud: -97.0121205, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 31, estructuras: "82 - 83" },
  { latitud: 18.9295113, longitud: -97.0126251, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 33, estructuras: "83 - 84" },
  { latitud: 18.9302689, longitud: -97.0130324, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 41, estructuras: "84 - 85" },
  { latitud: 18.9306406, longitud: -97.0132953, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 16, estructuras: "85 - 86" },
  { latitud: 18.9318607, longitud: -97.0145003, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 6, estructuras: "86 - 87" },
  { latitud: 18.938874, longitud: -97.0157629, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 12, estructuras: "87 - 88" },
  { latitud: 18.9402307, longitud: -97.0152942, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 28, estructuras: "88 - 89" },
  { latitud: 18.942912, longitud: -97.0156013, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 35, estructuras: "89 - 90" },
  { latitud: 18.915243, longitud: -97.0023167, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 37, estructuras: "65 - 66" },
  { latitud: 18.916008, longitud: -97.002763, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 6, estructuras: "66 - 67" },
  { latitud: 18.9167343, longitud: -97.0032477, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 75, estructuras: "67 - 68" },
  { latitud: 18.913579, longitud: -97.0041775, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 100, estructuras: "68 - 69" },
  { latitud: 18.9187411, longitud: -97.0047069, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 105, estructuras: "69 - 70" },
  { latitud: 18.9204839, longitud: -97.0065321, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 15, estructuras: "70 - 71" },
  { latitud: 18.9211762, longitud: -97.0069287, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 85, estructuras: "71 - 72" },
  { latitud: 18.921836, longitud: -97.007476, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 100, estructuras: "72 - 73" },
  { latitud: 18.922365, longitud: -97.008148, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 100, estructuras: "73 - 74" },
  { latitud: 18.923945, longitud: -97.0090554, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 95, estructuras: "74 - 75" },
  { latitud: 18.9267721, longitud: -97.0129899, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 33, estructuras: "21 - 22" },
  { latitud: 18.9264051, longitud: -97.0132135, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 18, estructuras: "22 - 23" },
  { latitud: 18.9060886, longitud: -97.0136685, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 18, estructuras: "23 - 24" },
  { latitud: 18.9058657, longitud: -97.0140805, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 41, estructuras: "24 - 25" },
  { latitud: 18.925287, longitud: -97.01521, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 88, estructuras: "25 - 26" },
  { latitud: 18.9259066, longitud: -97.0141207, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 40, estructuras: "26 - 27" },
  { latitud: 18.9186599, longitud: -97.0035136, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 25, estructuras: "17 - 18" },
  { latitud: 18.9187081, longitud: -97.0034328, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 45, estructuras: "18 - 19" },
  { latitud: 18.9196963, longitud: -97.0038227, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "B", arboles: 42, estructuras: "19 - 20" },
  { latitud: 18.9204991, longitud: -79.0040987, lugar: "FORTIN", circuito: "FOR-04010", tipoPoda: "A", arboles: 25, estructuras: "20 - 21" }
].map((record, index) => ({ id: `excel-${index + 1}`, ...record }));

let records = loadRecords();
let routes = loadRoutes();
let brechaSegments = loadBrechaSegments();
let brechaRoutes = loadBrechaRoutes();
let currentMode = localStorage.getItem(MODE_KEY) || "poda";
let currentView = localStorage.getItem(VIEW_KEY) || "work";
let databaseConnected = false;

const elements = {
  form: document.querySelector("#recordForm"),
  formPanel: document.querySelector(".form-panel"),
  formTitle: document.querySelector("#formTitle"),
  modePoda: document.querySelector("#modePoda"),
  modeBrecha: document.querySelector("#modeBrecha"),
  viewWork: document.querySelector("#viewWork"),
  viewDatabase: document.querySelector("#viewDatabase"),
  workView: document.querySelector("#workView"),
  databaseView: document.querySelector("#databaseView"),
  recordId: document.querySelector("#recordId"),
  brechaId: document.querySelector("#brechaId"),
  latitud: document.querySelector("#latitud"),
  longitud: document.querySelector("#longitud"),
  lugar: document.querySelector("#lugar"),
  circuito: document.querySelector("#circuito"),
  tipoPoda: document.querySelector("#tipoPoda"),
  arboles: document.querySelector("#arboles"),
  estructuras: document.querySelector("#estructuras"),
  brechaNumero: document.querySelector("#brechaNumero"),
  brechaLatInicio: document.querySelector("#brechaLatInicio"),
  brechaLongInicio: document.querySelector("#brechaLongInicio"),
  brechaLatFin: document.querySelector("#brechaLatFin"),
  brechaLongFin: document.querySelector("#brechaLongFin"),
  brechaTotalM: document.querySelector("#brechaTotalM"),
  brechaEfectivaM: document.querySelector("#brechaEfectivaM"),
  brechaAncho: document.querySelector("#brechaAncho"),
  brechaHectareas: document.querySelector("#brechaHectareas"),
  formError: document.querySelector("#formError"),
  editMode: document.querySelector("#editMode"),
  cancelEdit: document.querySelector("#cancelEdit"),
  searchInput: document.querySelector("#searchInput"),
  typeFilter: document.querySelector("#typeFilter"),
  recordsBody: document.querySelector("#recordsBody"),
  tableHeadRow: document.querySelector("#tableHeadRow"),
  tableTitle: document.querySelector("#tableTitle"),
  tableCount: document.querySelector("#tableCount"),
  chartPanel: document.querySelector("#chartPanel"),
  chartTitle: document.querySelector("#chartTitle"),
  chartSubtitle: document.querySelector("#chartSubtitle"),
  chartBody: document.querySelector("#chartBody"),
  chartCanvas: document.querySelector("#chartCanvas"),
  chartType: document.querySelector("#chartType"),
  openChart: document.querySelector("#openChart"),
  closeChart: document.querySelector("#closeChart"),
  reportPdf: document.querySelector("#reportPdf"),
  totalRegistros: document.querySelector("#totalRegistros"),
  totalArboles: document.querySelector("#totalArboles"),
  totalTipoA: document.querySelector("#totalTipoA"),
  totalTipoB: document.querySelector("#totalTipoB"),
  map: document.querySelector("#map"),
  mapSubtitle: document.querySelector("#mapSubtitle"),
  outlierBadge: document.querySelector("#outlierBadge"),
  excelInput: document.querySelector("#excelInput"),
  importExcel: document.querySelector("#importExcel"),
  saveChanges: document.querySelector("#saveChanges"),
  saveStatus: document.querySelector("#saveStatus"),
  exportCsv: document.querySelector("#exportCsv"),
  resetData: document.querySelector("#resetData")
};

elements.form.addEventListener("submit", saveRecord);
elements.modePoda.addEventListener("click", () => setMode("poda"));
elements.modeBrecha.addEventListener("click", () => setMode("brecha"));
elements.viewWork.addEventListener("click", () => setView("work"));
elements.viewDatabase.addEventListener("click", () => setView("database"));
elements.cancelEdit.addEventListener("click", clearForm);
elements.searchInput.addEventListener("input", render);
elements.typeFilter.addEventListener("change", render);
elements.importExcel.addEventListener("click", () => elements.excelInput.click());
elements.excelInput.addEventListener("change", importExcel);
elements.saveChanges.addEventListener("click", saveChanges);
elements.openChart.addEventListener("click", openChartPanel);
elements.closeChart.addEventListener("click", closeChartPanel);
elements.chartType.addEventListener("change", renderActiveChart);
elements.reportPdf.addEventListener("click", generatePdfReport);
elements.exportCsv.addEventListener("click", exportCsv);
elements.resetData.addEventListener("click", resetData);
elements.latitud.addEventListener("input", updatePreviewMarker);
elements.longitud.addEventListener("input", updatePreviewMarker);
window.addEventListener("resize", handleViewportResize);
window.addEventListener("online", syncPendingDatabase);
window.addEventListener("offline", updateConnectionStatus);

let mapInstance = null;
let markerLayer = null;
let routeLayer = null;
let previewMarker = null;
let mapReady = false;
let activeChart = null;

initMap();
registerServiceWorker();
storeDatabaseTokenFromUrl();
render();
loadCloudDatabase();
updateConnectionStatus();

function loadRecords() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [...seedRecords];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [...seedRecords];
  } catch {
    return [...seedRecords];
  }
}

function loadRoutes() {
  const stored = localStorage.getItem(ROUTES_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadBrechaSegments() {
  const stored = localStorage.getItem(BRECHA_KEY);
  if (!stored) return Array.isArray(globalThis.BRECHA_SEED) ? [...globalThis.BRECHA_SEED] : [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return Array.isArray(globalThis.BRECHA_SEED) ? [...globalThis.BRECHA_SEED] : [];
  }
}

function loadBrechaRoutes() {
  const stored = localStorage.getItem(BRECHA_ROUTES_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  localStorage.setItem(ROUTES_KEY, JSON.stringify(routes));
  localStorage.setItem(BRECHA_KEY, JSON.stringify(brechaSegments));
  localStorage.setItem(BRECHA_ROUTES_KEY, JSON.stringify(brechaRoutes));
}

function markPendingChanges() {
  localStorage.setItem(PENDING_SYNC_KEY, "1");
  elements.saveStatus.textContent = "Cambios sin guardar";
  elements.saveStatus.classList.remove("saved");
  elements.saveStatus.classList.add("pending");
}

async function saveChanges() {
  persist();
  localStorage.setItem(MODE_KEY, currentMode);
  elements.saveStatus.textContent = "Guardando...";
  elements.saveStatus.classList.remove("saved", "pending");

  try {
    await saveCloudDatabase();
    databaseConnected = true;
    localStorage.removeItem(PENDING_SYNC_KEY);
  } catch {
    databaseConnected = false;
    localStorage.setItem(PENDING_SYNC_KEY, "1");
  }

  const time = new Date().toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit"
  });
  elements.saveStatus.textContent = databaseConnected
    ? `Guardado en Supabase ${time}`
    : `Guardado local, pendiente de sincronizar ${time}`;
  elements.saveStatus.classList.remove("pending");
  elements.saveStatus.classList.toggle("saved", databaseConnected);
  elements.saveStatus.classList.toggle("pending", !databaseConnected);
}

async function loadCloudDatabase() {
  try {
    const payload = await loadRemoteDatabase();
    if (!payload) {
      databaseConnected = true;
      elements.saveStatus.textContent = "Base Supabase lista";
      return;
    }

    applyDatabasePayload(payload);
    databaseConnected = true;
    persist();
    render();
    if (localStorage.getItem(PENDING_SYNC_KEY) === "1") {
      await syncPendingDatabase();
      return;
    }
    setSavedStatus("Base Supabase conectada");
  } catch {
    databaseConnected = false;
    updateConnectionStatus();
  }
}

async function saveCloudDatabase() {
  await saveRemoteDatabase(createDatabasePayload());
}

async function loadRemoteDatabase() {
  if (SUPABASE_URL && SUPABASE_PUBLIC_KEY) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?id=eq.main&select=payload`, {
      cache: "no-store",
      headers: getSupabaseHeaders()
    });

    if (!response.ok) {
      throw new Error("No se pudo leer Supabase.");
    }

    const rows = await response.json();
    return rows[0]?.payload || null;
  }

  const response = await fetch(LOCAL_DATABASE_API, {
    cache: "no-store",
    headers: getDatabaseHeaders()
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error("No se pudo leer la base local.");
  return response.json();
}

async function saveRemoteDatabase(payload) {
  if (SUPABASE_URL && SUPABASE_PUBLIC_KEY) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?on_conflict=id`, {
      method: "POST",
      headers: getSupabaseHeaders({
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal"
      }),
      body: JSON.stringify({
        id: "main",
        payload,
        updated_at: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error("No se pudo guardar en Supabase.");
    }
    return;
  }

  const response = await fetch(LOCAL_DATABASE_API, {
    method: "POST",
    headers: getDatabaseHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error("No se pudo guardar la base local.");
}

function createDatabasePayload() {
  return {
    version: 1,
    savedAt: new Date().toISOString(),
    records,
    routes,
    brechaSegments,
    brechaRoutes
  };
}

function applyDatabasePayload(payload) {
  if (!payload || typeof payload !== "object") return;
  if (Array.isArray(payload.records)) records = payload.records;
  if (Array.isArray(payload.routes)) routes = payload.routes;
  if (Array.isArray(payload.brechaSegments)) brechaSegments = payload.brechaSegments;
  if (Array.isArray(payload.brechaRoutes)) brechaRoutes = payload.brechaRoutes;
}

async function syncPendingDatabase() {
  if (localStorage.getItem(PENDING_SYNC_KEY) !== "1") {
    updateConnectionStatus();
    return;
  }

  persist();
  elements.saveStatus.textContent = "Sincronizando...";
  elements.saveStatus.classList.remove("saved");
  elements.saveStatus.classList.add("pending");

  try {
    await saveCloudDatabase();
    databaseConnected = true;
    localStorage.removeItem(PENDING_SYNC_KEY);
    const time = new Date().toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit"
    });
    setSavedStatus(`Sincronizado ${time}`);
  } catch {
    databaseConnected = false;
    updateConnectionStatus();
  }
}

function updateConnectionStatus() {
  if (localStorage.getItem(PENDING_SYNC_KEY) === "1") {
    elements.saveStatus.textContent = navigator.onLine
      ? "Pendiente de sincronizar"
      : "Sin internet, guardado local";
    elements.saveStatus.classList.remove("saved");
    elements.saveStatus.classList.add("pending");
  }
}

function setSavedStatus(text) {
  elements.saveStatus.textContent = text;
  elements.saveStatus.classList.remove("pending");
  elements.saveStatus.classList.add("saved");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  navigator.serviceWorker.register("/sw.js").catch(() => {
    // La app sigue funcionando sin instalacion offline si el navegador no permite service workers.
  });
}

function storeDatabaseTokenFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  if (token) {
    localStorage.setItem(DATABASE_TOKEN_KEY, token);
    params.delete("token");
    const cleanQuery = params.toString();
    const cleanUrl = `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", cleanUrl);
  }
}

function getDatabaseHeaders(extraHeaders = {}) {
  const headers = { ...extraHeaders };
  const token = localStorage.getItem(DATABASE_TOKEN_KEY);
  if (token) {
    headers["X-Database-Token"] = token;
  }
  return headers;
}

function getSupabaseHeaders(extraHeaders = {}) {
  return {
    apikey: SUPABASE_PUBLIC_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLIC_KEY}`,
    ...extraHeaders
  };
}

function setMode(mode) {
  currentMode = mode;
  localStorage.setItem(MODE_KEY, currentMode);
  clearForm();
  render();
}

function setView(view) {
  currentView = view;
  localStorage.setItem(VIEW_KEY, currentView);
  renderViewState();

  if (currentView === "work" && mapReady) {
    setTimeout(() => {
      mapInstance.invalidateSize();
      render();
    }, 60);
  }
}

function saveRecord(event) {
  event.preventDefault();
  elements.formError.textContent = "";

  if (currentMode === "brecha") {
    saveBrechaSegment();
    return;
  }

  const record = {
    id: elements.recordId.value || createId(),
    latitud: Number(elements.latitud.value),
    longitud: Number(elements.longitud.value),
    lugar: elements.lugar.value.trim().toUpperCase(),
    circuito: elements.circuito.value.trim().toUpperCase(),
    tipoPoda: elements.tipoPoda.value,
    arboles: Number(elements.arboles.value),
    estructuras: elements.estructuras.value.trim()
  };

  const error = validateRecord(record);
  if (error) {
    elements.formError.textContent = error;
    return;
  }

  const currentIndex = records.findIndex((item) => item.id === record.id);
  if (currentIndex >= 0) {
    records[currentIndex] = record;
  } else {
    records.unshift(record);
  }

  markPendingChanges();
  clearForm();
  render();
}

function saveBrechaSegment() {
  const segment = {
    id: elements.brechaId.value || createId(),
    sheet: "Manual",
    numero: elements.brechaNumero.value.trim() || `Manual ${brechaSegments.length + 1}`,
    latInicio: Number(elements.brechaLatInicio.value),
    longInicio: Number(elements.brechaLongInicio.value),
    latFin: Number(elements.brechaLatFin.value),
    longFin: Number(elements.brechaLongFin.value),
    totalM: Number(elements.brechaTotalM.value),
    efectivaM: Number(elements.brechaEfectivaM.value),
    ancho: Number(elements.brechaAncho.value),
    hectareas: Number(elements.brechaHectareas.value)
  };

  const error = validateBrechaSegment(segment);
  if (error) {
    elements.formError.textContent = error;
    return;
  }

  const currentIndex = brechaSegments.findIndex((item) => item.id === segment.id);
  if (currentIndex >= 0) {
    brechaSegments[currentIndex] = segment;
  } else {
    brechaSegments.unshift(segment);
  }

  markPendingChanges();
  clearForm();
  render();
}

function validateRecord(record) {
  if (!Number.isFinite(record.latitud) || record.latitud < -90 || record.latitud > 90) {
    return "La latitud debe estar entre -90 y 90.";
  }

  if (!Number.isFinite(record.longitud) || record.longitud < -180 || record.longitud > 180) {
    return "La longitud debe estar entre -180 y 180.";
  }

  if (!Number.isInteger(record.arboles) || record.arboles < 0) {
    return "El numero de arboles debe ser entero y no negativo.";
  }

  if (!record.lugar || !record.circuito || !record.estructuras) {
    return "Completa lugar, circuito y estructuras.";
  }

  return "";
}

function validateBrechaSegment(segment) {
  if (!isValidBrechaSegment(segment)) {
    return "Revisa las cuatro coordenadas de brecha.";
  }

  if (![segment.totalM, segment.efectivaM, segment.ancho, segment.hectareas].every((value) => Number.isFinite(value) && value >= 0)) {
    return "Metros, ancho y hectareas deben ser numeros no negativos.";
  }

  return "";
}

function clearForm() {
  elements.form.reset();
  elements.recordId.value = "";
  elements.brechaId.value = "";
  elements.formError.textContent = "";
  elements.editMode.classList.add("hidden");
  elements.cancelEdit.classList.add("hidden");
  elements.tipoPoda.value = "A";
  removePreviewMarker();
}

function render() {
  elements.modePoda.classList.toggle("active", currentMode === "poda");
  elements.modeBrecha.classList.toggle("active", currentMode === "brecha");
  renderViewState();
  elements.typeFilter.disabled = currentMode === "brecha";
  elements.formTitle.textContent = currentMode === "brecha" ? "Nuevo segmento de brecha" : "Nuevo registro";
  elements.searchInput.placeholder = currentMode === "brecha"
    ? "Buscar segmento, hoja, metros o hectareas"
    : "Buscar lugar, circuito o estructura";
  toggleFormModeFields();

  if (currentMode === "brecha") {
    const filtered = getFilteredBrechaSegments();
    renderBrechaMetrics(filtered);
    renderBrechaTable(filtered);
    renderBrechaMap(filtered);
    updateChartIfOpen();
    return;
  }

  const filtered = getFilteredRecords();
  renderMetrics(filtered);
  renderTable(filtered);
  renderMap(filtered);
  updateChartIfOpen();
}

function renderViewState() {
  const isDatabase = currentView === "database";
  elements.viewWork.classList.toggle("active", !isDatabase);
  elements.viewDatabase.classList.toggle("active", isDatabase);
  elements.workView.classList.toggle("view-hidden", isDatabase);
  elements.databaseView.classList.toggle("view-hidden", !isDatabase);
}

function toggleFormModeFields() {
  const isBrecha = currentMode === "brecha";

  document.querySelectorAll(".poda-field").forEach((field) => {
    field.classList.toggle("hidden", isBrecha);
    field.querySelectorAll("input, select").forEach((control) => {
      control.disabled = isBrecha;
    });
  });

  document.querySelectorAll(".brecha-field").forEach((field) => {
    field.classList.toggle("hidden", !isBrecha);
    field.querySelectorAll("input, select").forEach((control) => {
      control.disabled = !isBrecha;
    });
  });
}

function getFilteredRecords() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const type = elements.typeFilter.value;

  return records.filter((record) => {
    const matchesType = !type || record.tipoPoda === type;
    const haystack = `${record.lugar} ${record.circuito} ${record.estructuras}`.toLowerCase();
    return matchesType && (!query || haystack.includes(query));
  });
}

function getFilteredBrechaSegments() {
  const query = elements.searchInput.value.trim().toLowerCase();
  return brechaSegments.filter((segment) => {
    const haystack = `${segment.sheet} ${segment.numero} ${segment.totalM} ${segment.efectivaM} ${segment.hectareas}`.toLowerCase();
    return !query || haystack.includes(query);
  });
}

function renderMetrics(list) {
  elements.tableTitle.textContent = "Registros de poda";
  elements.totalRegistros.previousElementSibling.textContent = "Registros";
  elements.totalArboles.previousElementSibling.textContent = "Arboles podados";
  elements.totalTipoA.previousElementSibling.textContent = "Tipo A";
  elements.totalTipoB.previousElementSibling.textContent = "Tipo B";
  const totalTrees = list.reduce((sum, record) => sum + Number(record.arboles || 0), 0);
  elements.totalRegistros.textContent = list.length.toLocaleString("es-MX");
  elements.totalArboles.textContent = totalTrees.toLocaleString("es-MX");
  elements.totalTipoA.textContent = list.filter((record) => record.tipoPoda === "A").length.toLocaleString("es-MX");
  elements.totalTipoB.textContent = list.filter((record) => record.tipoPoda === "B").length.toLocaleString("es-MX");
}

function renderBrechaMetrics(list) {
  elements.tableTitle.textContent = "Segmentos de brecha";
  elements.totalRegistros.previousElementSibling.textContent = "Segmentos";
  elements.totalArboles.previousElementSibling.textContent = "Metros totales";
  elements.totalTipoA.previousElementSibling.textContent = "Metros efectivos";
  elements.totalTipoB.previousElementSibling.textContent = "Hectareas";

  const totalM = list.reduce((sum, segment) => sum + Number(segment.totalM || 0), 0);
  const efectivaM = list.reduce((sum, segment) => sum + Number(segment.efectivaM || 0), 0);
  const hectareas = list.reduce((sum, segment) => sum + Number(segment.hectareas || 0), 0);

  elements.totalRegistros.textContent = list.length.toLocaleString("es-MX");
  elements.totalArboles.textContent = totalM.toLocaleString("es-MX");
  elements.totalTipoA.textContent = efectivaM.toLocaleString("es-MX");
  elements.totalTipoB.textContent = hectareas.toLocaleString("es-MX", { maximumFractionDigits: 3 });
}

function openChartPanel() {
  if (currentView !== "work") {
    currentView = "work";
    localStorage.setItem(VIEW_KEY, currentView);
    renderViewState();
  }
  elements.chartPanel.classList.remove("hidden");
  renderActiveChart();
}

function closeChartPanel() {
  elements.chartPanel.classList.add("hidden");
}

function updateChartIfOpen() {
  if (!elements.chartPanel.classList.contains("hidden")) {
    renderActiveChart();
  }
}

function renderActiveChart() {
  if (currentMode === "brecha") {
    renderBrechaChart(getFilteredBrechaSegments());
    return;
  }

  renderPodaChart(getFilteredRecords());
}

function renderPodaChart(list) {
  const rows = aggregatePodaByPlace(list);
  elements.chartTitle.textContent = "Arboles podados por lugar";
  elements.chartSubtitle.textContent = `${rows.length.toLocaleString("es-MX")} lugares con registros en la vista actual.`;
  renderChartJs({
    rows,
    label: "Arboles podados",
    unit: "arboles",
    colorSet: "poda"
  });
}

function renderBrechaChart(list) {
  const rows = aggregateBrechaBySheet(list);
  elements.chartTitle.textContent = "Metros de brecha por hoja";
  elements.chartSubtitle.textContent = `${rows.length.toLocaleString("es-MX")} grupos con metros y hectareas en la vista actual.`;
  renderChartJs({
    rows,
    label: "Metros de brecha",
    unit: "m",
    colorSet: "brecha"
  });
}

function aggregatePodaByPlace(list) {
  const totals = new Map();
  list.forEach((record) => {
    const key = record.lugar || "SIN LUGAR";
    totals.set(key, (totals.get(key) || 0) + Number(record.arboles || 0));
  });

  return Array.from(totals, ([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 12);
}

function aggregateBrechaBySheet(list) {
  const totals = new Map();
  list.forEach((segment) => {
    const key = segment.sheet || "Manual";
    const current = totals.get(key) || { label: key, value: 0, hectareas: 0 };
    current.value += Number(segment.totalM || 0);
    current.hectareas += Number(segment.hectareas || 0);
    totals.set(key, current);
  });

  return Array.from(totals.values())
    .sort((a, b) => b.value - a.value)
    .slice(0, 12);
}

function generatePdfReport() {
  if (!globalThis.jspdf?.jsPDF) {
    elements.formError.textContent = "No se pudo cargar la libreria de PDF. Revisa la conexion a internet.";
    return;
  }

  const doc = new jspdf.jsPDF({ orientation: "portrait", unit: "mm", format: "letter" });
  const report = currentMode === "brecha"
    ? buildBrechaReportData(getFilteredBrechaSegments())
    : buildPodaReportData(getFilteredRecords());

  if (!report.items.length) {
    elements.formError.textContent = "No hay datos suficientes para generar el informe.";
    return;
  }

  const createdAt = new Date();
  const dateText = createdAt.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  const timeText = createdAt.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const margin = 16;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = 18;

  drawPdfHeader(doc, report.title, `Fecha de informe: ${dateText} ${timeText}`, margin, pageWidth);
  y = 36;

  y = drawPdfSectionTitle(doc, "Resumen ejecutivo", margin, y);
  y = drawPdfParagraph(doc, report.summary, margin, y, pageWidth - margin * 2);

  y += 4;
  y = drawMetricGrid(doc, report.metrics, margin, y, pageWidth - margin * 2);

  y += 8;
  y = drawPdfSectionTitle(doc, "Grafica analizada", margin, y);
  const chartImage = createReportChartImage(report.items, report.chartLabel, report.unit);
  doc.addImage(chartImage, "PNG", margin, y, pageWidth - margin * 2, 78);
  y += 86;

  y = drawPdfSectionTitle(doc, "Analisis", margin, y);
  y = drawPdfParagraph(doc, report.analysis, margin, y, pageWidth - margin * 2);

  y += 4;
  if (y > pageHeight - 70) {
    doc.addPage();
    y = 18;
  }
  y = drawPdfSectionTitle(doc, "Principales registros", margin, y);
  drawReportTable(doc, report.items.slice(0, 8), report.tableValueHeader, margin, y, pageWidth - margin * 2);

  addPageNumbers(doc);
  doc.save(report.fileName);
}

function buildPodaReportData(list) {
  const rows = aggregatePodaByPlace(list);
  const totalTrees = list.reduce((sum, record) => sum + Number(record.arboles || 0), 0);
  const typeA = list.filter((record) => record.tipoPoda === "A").length;
  const typeB = list.filter((record) => record.tipoPoda === "B").length;
  const top = rows[0];
  const topShare = top && totalTrees ? (top.value / totalTrees) * 100 : 0;

  return {
    title: "Informe de poda",
    fileName: `informe_poda_${getDateFileName()}.pdf`,
    chartLabel: "Arboles podados por lugar",
    tableValueHeader: "Arboles",
    unit: "arboles",
    items: rows,
    metrics: [
      ["Registros", list.length.toLocaleString("es-MX")],
      ["Arboles podados", totalTrees.toLocaleString("es-MX")],
      ["Tipo A", typeA.toLocaleString("es-MX")],
      ["Tipo B", typeB.toLocaleString("es-MX")]
    ],
    summary: `El informe integra ${list.length.toLocaleString("es-MX")} registros de poda y ${totalTrees.toLocaleString("es-MX")} arboles podados. La informacion se agrupa por lugar para identificar donde se concentra el mayor volumen de trabajo registrado.`,
    analysis: top
      ? `El lugar con mayor cantidad registrada es ${top.label}, con ${top.value.toLocaleString("es-MX")} arboles podados, equivalente al ${topShare.toFixed(1)}% del total analizado. Esta concentracion permite priorizar la revision operativa de ese punto y comparar si el volumen coincide con el circuito, las estructuras atendidas y el tipo de poda reportado.`
      : "No se detecto un lugar dominante para analizar."
  };
}

function buildBrechaReportData(list) {
  const rows = aggregateBrechaBySheet(list);
  const totalM = list.reduce((sum, segment) => sum + Number(segment.totalM || 0), 0);
  const efectivaM = list.reduce((sum, segment) => sum + Number(segment.efectivaM || 0), 0);
  const hectareas = list.reduce((sum, segment) => sum + Number(segment.hectareas || 0), 0);
  const top = rows[0];
  const topShare = top && totalM ? (top.value / totalM) * 100 : 0;

  return {
    title: "Informe de brecha",
    fileName: `informe_brecha_${getDateFileName()}.pdf`,
    chartLabel: "Metros de brecha por grupo",
    tableValueHeader: "Metros",
    unit: "m",
    items: rows,
    metrics: [
      ["Segmentos", list.length.toLocaleString("es-MX")],
      ["Metros totales", totalM.toLocaleString("es-MX")],
      ["Metros efectivos", efectivaM.toLocaleString("es-MX")],
      ["Hectareas", hectareas.toLocaleString("es-MX", { maximumFractionDigits: 3 })]
    ],
    summary: `El informe integra ${list.length.toLocaleString("es-MX")} segmentos de brecha, con ${totalM.toLocaleString("es-MX")} metros totales, ${efectivaM.toLocaleString("es-MX")} metros efectivos y ${hectareas.toLocaleString("es-MX", { maximumFractionDigits: 3 })} hectareas registradas.`,
    analysis: top
      ? `El grupo con mayor longitud registrada es ${top.label}, con ${top.value.toLocaleString("es-MX")} m, equivalente al ${topShare.toFixed(1)}% de los metros totales analizados. Este resultado ayuda a ubicar los tramos que requieren mayor seguimiento por volumen y a contrastar metros efectivos contra hectareas atendidas.`
      : "No se detecto un grupo dominante para analizar."
  };
}

function drawPdfHeader(doc, title, dateText, margin, pageWidth) {
  doc.setFillColor(23, 107, 77);
  doc.rect(0, 0, pageWidth, 24, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(title, margin, 15);
  doc.setFontSize(8);
  doc.text(dateText, pageWidth - margin, 10, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.text("Control de Poda y Brecha", pageWidth - margin, 16, { align: "right" });
  doc.setTextColor(21, 32, 26);
}

function drawPdfSectionTitle(doc, title, x, y) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(23, 107, 77);
  doc.text(title, x, y);
  doc.setTextColor(21, 32, 26);
  return y + 7;
}

function drawPdfParagraph(doc, text, x, y, width) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const lines = doc.splitTextToSize(text, width);
  doc.text(lines, x, y);
  return y + lines.length * 5 + 3;
}

function drawMetricGrid(doc, metrics, x, y, width) {
  const gap = 4;
  const cardWidth = (width - gap * 3) / 4;
  metrics.forEach(([label, value], index) => {
    const cardX = x + index * (cardWidth + gap);
    doc.setDrawColor(215, 224, 218);
    doc.setFillColor(247, 249, 248);
    doc.roundedRect(cardX, y, cardWidth, 22, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(100, 115, 107);
    doc.text(label.toUpperCase(), cardX + 3, y + 7);
    doc.setFontSize(13);
    doc.setTextColor(21, 32, 26);
    doc.text(String(value), cardX + 3, y + 17);
  });
  return y + 26;
}

function createReportChartImage(rows, title, unit) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 560;
  const ctx = canvas.getContext("2d");
  const colors = ["#176b4d", "#2257a8", "#c96f2b", "#8a5b00", "#5f6f65", "#7c3f2b"];
  const maxValue = Math.max(...rows.map((row) => row.value), 1);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#15201a";
  ctx.font = "700 30px Arial";
  ctx.fillText(title, 42, 48);
  ctx.font = "18px Arial";
  ctx.fillStyle = "#64736b";
  ctx.fillText(`Top ${rows.length} - valores en ${unit}`, 42, 78);

  const left = 280;
  const top = 112;
  const rowHeight = 34;
  const barMax = 800;
  rows.forEach((row, index) => {
    const y = top + index * rowHeight;
    const barWidth = (row.value / maxValue) * barMax;
    ctx.fillStyle = "#15201a";
    ctx.font = "700 16px Arial";
    ctx.fillText(shortenLabel(row.label, 26), 42, y + 20);
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(left, y, barWidth, 22);
    ctx.fillStyle = "#15201a";
    ctx.font = "700 15px Arial";
    ctx.fillText(`${Number(row.value || 0).toLocaleString("es-MX")} ${unit}`, left + barWidth + 12, y + 17);
  });

  return canvas.toDataURL("image/png", 1);
}

function drawReportTable(doc, rows, valueHeader, x, y, width) {
  const valueX = x + width - 6;
  doc.setFillColor(238, 244, 240);
  doc.rect(x, y, width, 9, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Grupo", x + 3, y + 6);
  doc.text(valueHeader, valueX, y + 6, { align: "right" });

  rows.forEach((row, index) => {
    const rowY = y + 9 + index * 8;
    doc.setDrawColor(215, 224, 218);
    doc.line(x, rowY + 8, x + width, rowY + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(shortenLabel(row.label, 55), x + 3, rowY + 6);
    doc.text(Number(row.value || 0).toLocaleString("es-MX"), valueX, rowY + 6, { align: "right" });
  });
}

function addPageNumbers(doc) {
  const pageCount = doc.internal.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 115, 107);
    doc.text(`Pagina ${page} de ${pageCount}`, pageWidth - 16, pageHeight - 10, { align: "right" });
  }
  doc.setTextColor(21, 32, 26);
}

function renderChartJs({ rows, label, unit, colorSet }) {
  if (!rows.length) {
    destroyActiveChart();
    elements.chartBody.innerHTML = '<div class="chart-empty">No hay datos suficientes para graficar.</div>';
    return;
  }

  if (!globalThis.Chart) {
    renderFallbackChart(rows, unit, colorSet);
    return;
  }

  ensureChartCanvas();
  destroyActiveChart();

  const type = elements.chartType.value;
  const isMobileBar = type === "bar" && window.innerWidth <= 560;
  const colors = getChartColors(colorSet, rows.length);
  activeChart = new Chart(elements.chartCanvas, {
    type,
    data: {
      labels: rows.map((row) => row.label),
      datasets: [{
        label,
        data: rows.map((row) => row.value),
        backgroundColor: type === "pie" ? colors : colors[0],
        borderColor: type === "pie" ? "#ffffff" : colors[0],
        borderWidth: type === "pie" ? 2 : 1,
        borderRadius: type === "bar" ? 6 : 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: isMobileBar ? "y" : "x",
      plugins: {
        legend: {
          display: type === "pie",
          position: "bottom"
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label}: ${Number(context.raw || 0).toLocaleString("es-MX")} ${unit}`
          }
        }
      },
      scales: type === "bar" && isMobileBar ? {
        x: {
          beginAtZero: true,
          ticks: {
            callback: (value) => Number(value).toLocaleString("es-MX")
          }
        },
        y: {
          ticks: {
            autoSkip: false
          }
        }
      } : type === "bar" ? {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => Number(value).toLocaleString("es-MX")
          }
        }
      } : {}
    }
  });
}

function handleViewportResize() {
  if (mapReady && currentView === "work") {
    mapInstance.invalidateSize();
  }

  if (!elements.chartPanel.classList.contains("hidden")) {
    renderActiveChart();
  }
}

function ensureChartCanvas() {
  if (document.querySelector("#chartCanvas")) {
    elements.chartCanvas = document.querySelector("#chartCanvas");
    return;
  }

  elements.chartBody.innerHTML = '<canvas id="chartCanvas" aria-label="Grafica de cantidades" role="img"></canvas>';
  elements.chartCanvas = document.querySelector("#chartCanvas");
}

function destroyActiveChart() {
  if (!activeChart) return;
  activeChart.destroy();
  activeChart = null;
}

function getChartColors(colorSet, count) {
  const poda = ["#176b4d", "#2d8f68", "#d77c2f", "#2257a8", "#8a5b00", "#5f6f66", "#3d7f91", "#a8642a"];
  const brecha = ["#2257a8", "#176b4d", "#6f42c1", "#d77c2f", "#8a5b00", "#5f6f66", "#2d8f68", "#3f6fb5"];
  const base = colorSet === "brecha" ? brecha : poda;
  return Array.from({ length: count }, (_, index) => base[index % base.length]);
}

function renderFallbackChart(rows, unit, colorSet) {
  destroyActiveChart();
  elements.chartBody.innerHTML = "";

  const maxValue = Math.max(...rows.map((row) => row.value), 1);
  const fragment = document.createDocumentFragment();

  rows.forEach((row) => {
    const item = document.createElement("div");
    item.className = "chart-row";
    const width = Math.max(2, (row.value / maxValue) * 100);
    item.innerHTML = `
      <div class="chart-label" title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</div>
      <div class="chart-track" aria-hidden="true">
        <div class="chart-fill ${colorSet === "brecha" ? "brecha" : ""}" style="width: ${width.toFixed(2)}%"></div>
      </div>
      <div class="chart-value">${Number(row.value || 0).toLocaleString("es-MX")} ${escapeHtml(unit)}</div>
    `;
    fragment.appendChild(item);
  });

  elements.chartBody.appendChild(fragment);
}

function renderTable(list) {
  elements.tableHeadRow.innerHTML = `
    <th>Latitud</th>
    <th>Longitud</th>
    <th>Lugar</th>
    <th>Circuito</th>
    <th>Tipo</th>
    <th>Arboles</th>
    <th>Estructuras</th>
    <th>Acciones</th>
  `;
  elements.tableCount.textContent = `${list.length.toLocaleString("es-MX")} resultados`;
  elements.recordsBody.innerHTML = "";

  const fragment = document.createDocumentFragment();
  list.forEach((record) => {
    const tr = document.createElement("tr");
    const outlier = isOutlier(record);

    tr.innerHTML = `
      <td class="${outlier ? "outlier" : ""}">${formatCoordinate(record.latitud)}</td>
      <td class="${outlier ? "outlier" : ""}">${formatCoordinate(record.longitud)}</td>
      <td>${escapeHtml(record.lugar)}</td>
      <td>${escapeHtml(record.circuito)}</td>
      <td>${escapeHtml(record.tipoPoda)}</td>
      <td>${Number(record.arboles).toLocaleString("es-MX")}</td>
      <td>${escapeHtml(record.estructuras)}</td>
      <td>
        <div class="row-actions">
          <button type="button" class="secondary" data-action="edit" data-id="${record.id}">Editar</button>
          <button type="button" class="danger" data-action="delete" data-id="${record.id}">Borrar</button>
        </div>
      </td>
    `;

    fragment.appendChild(tr);
  });

  elements.recordsBody.appendChild(fragment);
  elements.recordsBody.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", handleRowAction);
  });
}

function renderBrechaTable(list) {
  elements.tableHeadRow.innerHTML = `
    <th>#</th>
    <th>Lat inicio</th>
    <th>Long inicio</th>
    <th>Lat fin</th>
    <th>Long fin</th>
    <th>Total m</th>
    <th>Efectiva m</th>
    <th>Ancho</th>
    <th>Hectareas</th>
    <th>Acciones</th>
  `;
  elements.tableCount.textContent = `${list.length.toLocaleString("es-MX")} segmentos`;
  elements.recordsBody.innerHTML = "";

  const fragment = document.createDocumentFragment();
  list.forEach((segment) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(segment.numero)}</td>
      <td>${formatCoordinate(segment.latInicio)}</td>
      <td>${formatCoordinate(segment.longInicio)}</td>
      <td>${formatCoordinate(segment.latFin)}</td>
      <td>${formatCoordinate(segment.longFin)}</td>
      <td>${Number(segment.totalM || 0).toLocaleString("es-MX")}</td>
      <td>${Number(segment.efectivaM || 0).toLocaleString("es-MX")}</td>
      <td>${Number(segment.ancho || 0).toLocaleString("es-MX")}</td>
      <td>${Number(segment.hectareas || 0).toLocaleString("es-MX", { maximumFractionDigits: 3 })}</td>
      <td>
        <div class="row-actions">
          <button type="button" class="secondary" data-action="edit" data-id="${segment.id}">Editar</button>
          <button type="button" class="danger" data-action="delete" data-id="${segment.id}">Borrar</button>
        </div>
      </td>
    `;
    fragment.appendChild(tr);
  });

  elements.recordsBody.appendChild(fragment);
  elements.recordsBody.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", handleBrechaRowAction);
  });
}

function renderMap(list) {
  if (!mapReady) {
    elements.mapSubtitle.textContent = "El mapa necesita conexion para cargar OpenStreetMap.";
    elements.outlierBadge.classList.toggle("hidden", list.filter(isOutlier).length === 0);
    return;
  }

  markerLayer.clearLayers();
  routeLayer.clearLayers();

  const source = list;
  if (!source.length && !routes.length) {
    elements.mapSubtitle.textContent = "No hay registros para mostrar.";
    removePreviewMarker();
    return;
  }

  const bounds = [];
  const outliers = list.filter(isOutlier);

  routes.forEach((route) => {
    if (!Array.isArray(route.coordinates) || route.coordinates.length < 2) return;

    const polyline = L.polyline(route.coordinates, {
      color: "#2257a8",
      weight: 4,
      opacity: 0.82
    }).bindPopup(createRoutePopup(route));

    polyline.addTo(routeLayer);
    route.coordinates.forEach((point, index) => {
      bounds.push(point);

      L.circleMarker(point, {
        radius: index === 0 || index === route.coordinates.length - 1 ? 5 : 3,
        color: "#ffffff",
        weight: 1,
        fillColor: index === 0 ? "#1f8f4d" : index === route.coordinates.length - 1 ? "#b3261e" : "#2257a8",
        fillOpacity: 0.9
      }).bindPopup(createRoutePointPopup(route, index)).addTo(routeLayer);
    });
  });

  source.forEach((record) => {
    const marker = L.circleMarker([record.latitud, record.longitud], {
      radius: Math.max(6, Math.min(18, 5 + Number(record.arboles) / 12)),
      color: "#ffffff",
      weight: 2,
      fillColor: record.tipoPoda === "A" ? "#176b4d" : "#d77c2f",
      fillOpacity: 0.9
    }).bindPopup(createPopup(record));

    marker.addTo(markerLayer);
    bounds.push([record.latitud, record.longitud]);
  });

  if (bounds.length) {
    focusMapOnWorkZone(bounds, { padding: [28, 28], maxZoom: 16 });
  }
  updatePreviewMarker();
  elements.mapSubtitle.textContent = `${source.length} puntos y ${routes.length} trayectorias visibles.`;
  elements.outlierBadge.classList.toggle("hidden", outliers.length === 0);
}

function renderBrechaMap(list) {
  if (!mapReady) {
    elements.mapSubtitle.textContent = "El mapa necesita conexion para cargar OpenStreetMap.";
    elements.outlierBadge.classList.add("hidden");
    return;
  }

  markerLayer.clearLayers();
  routeLayer.clearLayers();

  if (!list.length && !brechaRoutes.length) {
    elements.mapSubtitle.textContent = "No hay segmentos de brecha para mostrar.";
    removePreviewMarker();
    return;
  }

  const bounds = [];

  list.forEach((segment) => {
    const start = [segment.latInicio, segment.longInicio];
    const end = [segment.latFin, segment.longFin];
    const displayPath = buildBrechaDisplayPath(segment);

    L.polyline(displayPath, {
      color: "#1f6feb",
      weight: 4,
      opacity: 0.78,
      smoothFactor: 0.45
    }).bindPopup(createBrechaPopup(segment)).addTo(routeLayer);

    L.circleMarker(start, {
      radius: 5,
      color: "#ffffff",
      weight: 1,
      fillColor: "#1f8f4d",
      fillOpacity: 0.95
    }).bindPopup(createBrechaPointPopup(segment, "Inicio")).addTo(markerLayer);

    L.circleMarker(end, {
      radius: 5,
      color: "#ffffff",
      weight: 1,
      fillColor: "#b3261e",
      fillOpacity: 0.95
    }).bindPopup(createBrechaPointPopup(segment, "Fin")).addTo(markerLayer);

    displayPath.forEach((point) => bounds.push(point));
  });

  brechaRoutes.forEach((route) => {
    if (!Array.isArray(route.coordinates) || route.coordinates.length < 2) return;

    L.polyline(route.coordinates, {
      color: "#6f42c1",
      weight: 4,
      opacity: 0.82,
      dashArray: "8 6"
    }).bindPopup(createRoutePopup(route)).addTo(routeLayer);

    route.coordinates.forEach((point) => bounds.push(point));
  });

  if (bounds.length) {
    focusMapOnWorkZone(bounds, { padding: [28, 28], maxZoom: 16 });
  }

  removePreviewMarker();
  elements.mapSubtitle.textContent = `${list.length} segmentos suavizados de brecha y ${brechaRoutes.length} trayectorias KMZ visibles.`;
  elements.outlierBadge.classList.add("hidden");
}

function focusMapOnWorkZone(points, options = {}) {
  const cleanPoints = points.filter((point) => {
    return Array.isArray(point)
      && Number.isFinite(point[0])
      && Number.isFinite(point[1])
      && point[0] >= -90
      && point[0] <= 90
      && point[1] >= -180
      && point[1] <= 180;
  });

  if (!cleanPoints.length) return;

  const focusPoints = getPrimaryWorkZonePoints(cleanPoints);
  const bounds = L.latLngBounds(focusPoints);
  mapInstance.fitBounds(bounds, options);
  mapInstance.setMaxBounds(padLatLngBounds(bounds, 0.18));
}

function getPrimaryWorkZonePoints(points) {
  if (points.length < 4) return points;

  const medianLat = median(points.map((point) => point[0]));
  const medianLng = median(points.map((point) => point[1]));
  const clustered = points.filter((point) => {
    return Math.abs(point[0] - medianLat) <= 0.8
      && Math.abs(point[1] - medianLng) <= 0.8;
  });

  return clustered.length >= 2 ? clustered : points;
}

function median(values) {
  const sorted = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

function padLatLngBounds(bounds, padDegrees) {
  const southWest = bounds.getSouthWest();
  const northEast = bounds.getNorthEast();
  return L.latLngBounds(
    [southWest.lat - padDegrees, southWest.lng - padDegrees],
    [northEast.lat + padDegrees, northEast.lng + padDegrees]
  );
}

function isOutlier(record) {
  const sameRegion = records.filter((item) => Math.abs(item.longitud + 97) < 1);
  if (sameRegion.length < 3) return false;
  return Math.abs(record.longitud + 97) > 1;
}

function handleRowAction(event) {
  const id = event.currentTarget.dataset.id;
  const action = event.currentTarget.dataset.action;
  const record = records.find((item) => item.id === id);
  if (!record) return;

  if (action === "edit") {
    fillForm(record);
    return;
  }

  records = records.filter((item) => item.id !== id);
  markPendingChanges();
  render();
}

function handleBrechaRowAction(event) {
  const id = event.currentTarget.dataset.id;
  const action = event.currentTarget.dataset.action;
  const segment = brechaSegments.find((item) => item.id === id);
  if (!segment) return;

  if (action === "edit") {
    fillBrechaForm(segment);
    return;
  }

  brechaSegments = brechaSegments.filter((item) => item.id !== id);
  markPendingChanges();
  render();
}

function fillForm(record) {
  elements.recordId.value = record.id;
  elements.latitud.value = record.latitud;
  elements.longitud.value = record.longitud;
  elements.lugar.value = record.lugar;
  elements.circuito.value = record.circuito;
  elements.tipoPoda.value = record.tipoPoda;
  elements.arboles.value = record.arboles;
  elements.estructuras.value = record.estructuras;
  elements.editMode.classList.remove("hidden");
  elements.cancelEdit.classList.remove("hidden");
  elements.latitud.focus();
  if (mapReady) {
    mapInstance.setView([record.latitud, record.longitud], 17);
    updatePreviewMarker();
  }
}

function fillBrechaForm(segment) {
  elements.brechaId.value = segment.id;
  elements.brechaNumero.value = segment.numero;
  elements.brechaLatInicio.value = segment.latInicio;
  elements.brechaLongInicio.value = segment.longInicio;
  elements.brechaLatFin.value = segment.latFin;
  elements.brechaLongFin.value = segment.longFin;
  elements.brechaTotalM.value = segment.totalM;
  elements.brechaEfectivaM.value = segment.efectivaM;
  elements.brechaAncho.value = segment.ancho;
  elements.brechaHectareas.value = segment.hectareas;
  elements.editMode.classList.remove("hidden");
  elements.cancelEdit.classList.remove("hidden");
  elements.brechaLatInicio.focus();
  if (mapReady) {
    focusMapOnWorkZone([
      [segment.latInicio, segment.longInicio],
      [segment.latFin, segment.longFin]
    ], { padding: [40, 40], maxZoom: 17 });
  }
}

function exportCsv() {
  if (currentMode === "brecha") {
    exportBrechaCsv();
    return;
  }

  const headers = ["LATITUD", "LONGITUD", "NOMBRE DEL LUGAR", "CIRCUITO", "TIPO DE PODA", "No. De Arboles", "ENTRE ESTRUCTURAS"];
  const lines = [headers.join(",")];

  records.forEach((record) => {
    lines.push([
      record.latitud,
      record.longitud,
      record.lugar,
      record.circuito,
      record.tipoPoda,
      record.arboles,
      record.estructuras
    ].map(csvCell).join(","));
  });

  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "registros_poda_urbana.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function exportBrechaCsv() {
  const headers = ["#", "LATITUD INICIO", "LONGITUD INICIO", "LATITUD FIN", "LONGITUD FIN", "TOTAL M", "EFECTIVA M", "ANCHO", "HECTAREAS", "HOJA"];
  const lines = [headers.join(",")];

  brechaSegments.forEach((segment) => {
    lines.push([
      segment.numero,
      segment.latInicio,
      segment.longInicio,
      segment.latFin,
      segment.longFin,
      segment.totalM,
      segment.efectivaM,
      segment.ancho,
      segment.hectareas,
      segment.sheet
    ].map(csvCell).join(","));
  });

  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "registros_brecha.csv";
  link.click();
  URL.revokeObjectURL(url);
}

async function importExcel(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  elements.formError.textContent = "";

  try {
    const extension = getFileExtension(file.name);
    if (extension !== "kml" && extension !== "kmz" && !globalThis.XLSX) {
      elements.formError.textContent = "No se pudo cargar el lector de Excel. Revisa la conexion a internet.";
      event.target.value = "";
      return;
    }

    const imported = await readImportFile(file, extension);

    if (!imported.records.length && !imported.routes.length && !imported.brechaSegments.length && !imported.brechaRoutes.length) {
      elements.formError.textContent = "No se encontraron registros o trayectorias validas en el archivo.";
      event.target.value = "";
      return;
    }

    records = [...imported.records, ...records];
    routes = [...imported.routes, ...routes];
    brechaSegments = [...imported.brechaSegments, ...brechaSegments];
    brechaRoutes = [...imported.brechaRoutes, ...brechaRoutes];
    markPendingChanges();
    clearForm();
    render();
    elements.mapSubtitle.textContent = createImportSummary(imported, file.name);
  } catch (error) {
    elements.formError.textContent = error.message || "No se pudo importar el archivo.";
  } finally {
    event.target.value = "";
  }
}

async function readImportFile(file, extension) {
  const empty = { records: [], routes: [], brechaSegments: [], brechaRoutes: [] };

  if (extension === "kml" || extension === "kmz") {
    const imported = await readKmzOrKmlFile(file, extension);
    return currentMode === "brecha"
      ? { ...empty, brechaRoutes: imported.routes, records: imported.records }
      : { ...empty, records: imported.records, routes: imported.routes };
  }

  return currentMode === "brecha"
    ? { ...empty, brechaSegments: await readBrechaWorkbookFile(file) }
    : { ...empty, records: await readWorkbookFile(file) };
}

function createImportSummary(imported, fileName) {
  const parts = [];
  if (imported.records.length) parts.push(`${imported.records.length.toLocaleString("es-MX")} puntos`);
  if (imported.routes.length) parts.push(`${imported.routes.length.toLocaleString("es-MX")} trayectorias`);
  if (imported.brechaSegments.length) parts.push(`${imported.brechaSegments.length.toLocaleString("es-MX")} segmentos de brecha`);
  if (imported.brechaRoutes.length) parts.push(`${imported.brechaRoutes.length.toLocaleString("es-MX")} trayectorias de brecha`);
  return `Se agregaron ${parts.join(", ")} desde ${fileName}.`;
}

function readWorkbookFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const workbook = XLSX.read(reader.result, { type: "array" });
        const imported = workbook.SheetNames.flatMap((sheetName) => {
          const sheet = workbook.Sheets[sheetName];
          const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
          return parseSheetRows(rows, sheetName);
        });
        resolve(imported);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error("No se pudo leer el archivo seleccionado."));
    reader.readAsArrayBuffer(file);
  });
}

function readBrechaWorkbookFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const workbook = XLSX.read(reader.result, { type: "array" });
        const imported = workbook.SheetNames.flatMap((sheetName) => {
          const sheet = workbook.Sheets[sheetName];
          const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
          return parseBrechaSheetRows(rows, sheetName);
        });
        resolve(imported);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error("No se pudo leer el archivo seleccionado."));
    reader.readAsArrayBuffer(file);
  });
}

function parseBrechaSheetRows(rows, sheetName) {
  const headerIndex = rows.findIndex((row) => {
    const normalized = row.map(normalizeHeader);
    return normalized.includes("latitud inicio")
      && normalized.includes("longitud inicio")
      && normalized.includes("latitud fin")
      && normalized.includes("longitud fin");
  });

  if (headerIndex < 0) return [];

  const headers = rows[headerIndex].map(normalizeHeader);
  const indexes = {
    numero: findColumn(headers, ["", "no", "numero"]),
    latInicio: findColumn(headers, ["latitud inicio", "lat inicio"]),
    longInicio: findColumn(headers, ["longitud inicio", "long inicio", "lng inicio", "lon inicio"]),
    latFin: findColumn(headers, ["latitud fin", "lat fin"]),
    longFin: findColumn(headers, ["longitud fin", "long fin", "lng fin", "lon fin"]),
    totalM: findColumn(headers, ["total m", "total metros"]),
    efectivaM: findColumn(headers, ["efectiva m", "efectiva metros"]),
    ancho: findColumn(headers, ["ancho max", "ancho"]),
    hectareas: findColumn(headers, ["total hectareas", "hectareas"])
  };

  return rows.slice(headerIndex + 1).reduce((items, row, rowOffset) => {
    const segment = {
      id: createId(),
      sheet: sheetName,
      numero: readCell(row, indexes.numero, rowOffset + 1),
      latInicio: toNumber(row[indexes.latInicio]),
      longInicio: toNumber(row[indexes.longInicio]),
      latFin: toNumber(row[indexes.latFin]),
      longFin: toNumber(row[indexes.longFin]),
      totalM: toNumber(row[indexes.totalM]),
      efectivaM: toNumber(row[indexes.efectivaM]),
      ancho: toNumber(row[indexes.ancho]),
      hectareas: toNumber(row[indexes.hectareas])
    };

    if (!row.some((cell) => String(cell ?? "").trim())) return items;
    if (isValidBrechaSegment(segment)) items.push(segment);
    return items;
  }, []);
}

function isValidBrechaSegment(segment) {
  return Number.isFinite(segment.latInicio)
    && Number.isFinite(segment.longInicio)
    && Number.isFinite(segment.latFin)
    && Number.isFinite(segment.longFin)
    && segment.latInicio >= -90
    && segment.latInicio <= 90
    && segment.latFin >= -90
    && segment.latFin <= 90
    && segment.longInicio >= -180
    && segment.longInicio <= 180
    && segment.longFin >= -180
    && segment.longFin <= 180;
}

function buildBrechaDisplayPath(segment) {
  const start = [segment.latInicio, segment.longInicio];
  const end = [segment.latFin, segment.longFin];
  const latDelta = end[0] - start[0];
  const lngDelta = end[1] - start[1];
  const distance = Math.hypot(latDelta, lngDelta);

  if (!distance) return [start, end];

  const bendDirection = getStableBendDirection(segment.id || segment.numero);
  const bend = Math.min(distance * 0.18, 0.00038) * bendDirection;
  const control = [
    (start[0] + end[0]) / 2 - (lngDelta / distance) * bend,
    (start[1] + end[1]) / 2 + (latDelta / distance) * bend
  ];

  const points = [];
  for (let step = 0; step <= 14; step += 1) {
    const t = step / 14;
    const oneMinusT = 1 - t;
    points.push([
      oneMinusT * oneMinusT * start[0] + 2 * oneMinusT * t * control[0] + t * t * end[0],
      oneMinusT * oneMinusT * start[1] + 2 * oneMinusT * t * control[1] + t * t * end[1]
    ]);
  }

  return points;
}

function getStableBendDirection(value) {
  const text = String(value ?? "");
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash + text.charCodeAt(index) * (index + 1)) % 997;
  }
  return hash % 2 === 0 ? 1 : -1;
}

async function readKmzOrKmlFile(file, extension) {
  const kmlText = extension === "kmz"
    ? await extractKmlFromKmz(file)
    : await file.text();

  return parseKml(kmlText, file.name);
}

async function extractKmlFromKmz(file) {
  if (!globalThis.JSZip) {
    throw new Error("No se pudo cargar el lector de KMZ. Revisa la conexion a internet.");
  }

  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  const kmlEntry = Object.values(zip.files).find((entry) => !entry.dir && entry.name.toLowerCase().endsWith(".kml"));
  if (!kmlEntry) {
    throw new Error("El KMZ no contiene un archivo KML valido.");
  }

  return kmlEntry.async("text");
}

function parseKml(kmlText, fileName) {
  const doc = new DOMParser().parseFromString(kmlText, "application/xml");
  if (doc.querySelector("parsererror")) {
    throw new Error("El KML no se pudo leer correctamente.");
  }

  const imported = { records: [], routes: [] };
  doc.querySelectorAll("Placemark").forEach((placemark, index) => {
    const name = placemark.querySelector("name")?.textContent?.trim() || `${fileName} ${index + 1}`;

    placemark.querySelectorAll("Point > coordinates").forEach((node) => {
      const points = parseKmlCoordinates(node.textContent);
      const point = points[0];
      if (!point) return;

      imported.records.push({
        id: createId(),
        latitud: point[0],
        longitud: point[1],
        lugar: name.toUpperCase(),
        circuito: "KMZ",
        tipoPoda: "K",
        arboles: 0,
        estructuras: fileName
      });
    });

    placemark.querySelectorAll("LineString > coordinates, LinearRing > coordinates").forEach((node) => {
      const coordinates = parseKmlCoordinates(node.textContent);
      if (coordinates.length < 2) return;

      imported.routes.push({
        id: createId(),
        name,
        source: fileName,
        coordinates
      });
    });
  });

  return imported;
}

function parseKmlCoordinates(value) {
  return String(value ?? "")
    .trim()
    .split(/\s+/)
    .map((chunk) => {
      const [lng, lat] = chunk.split(",").map(Number);
      return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
    })
    .filter(Boolean);
}

function parseSheetRows(rows, sheetName) {
  const headerIndex = rows.findIndex((row) => {
    const normalized = row.map(normalizeHeader);
    return normalized.includes("latitud") && normalized.includes("longitud");
  });

  if (headerIndex < 0) return [];

  const headers = rows[headerIndex].map(normalizeHeader);
  const indexes = {
    latitud: findColumn(headers, ["latitud", "lat"]),
    longitud: findColumn(headers, ["longitud", "lng", "lon"]),
    lugar: findColumn(headers, ["nombre del lugar", "lugar", "ubicacion"]),
    circuito: findColumn(headers, ["circuito"]),
    tipoPoda: findColumn(headers, ["tipo de poda", "tipo poda", "poda"]),
    arboles: findColumn(headers, ["no de arboles", "numero de arboles", "arboles", "no. de arboles"]),
    estructuras: findColumn(headers, ["entre estructuras", "estructuras"])
  };

  if (indexes.latitud < 0 || indexes.longitud < 0 || indexes.arboles < 0) {
    throw new Error(`La hoja "${sheetName}" necesita columnas de latitud, longitud y numero de arboles.`);
  }

  return rows.slice(headerIndex + 1).reduce((items, row, rowOffset) => {
    const record = {
      id: createId(),
      latitud: toNumber(row[indexes.latitud]),
      longitud: toNumber(row[indexes.longitud]),
      lugar: readCell(row, indexes.lugar, "SIN LUGAR").toUpperCase(),
      circuito: readCell(row, indexes.circuito, "SIN CIRCUITO").toUpperCase(),
      tipoPoda: readCell(row, indexes.tipoPoda, "A").toUpperCase(),
      arboles: Math.round(toNumber(row[indexes.arboles])),
      estructuras: readCell(row, indexes.estructuras, `Fila ${headerIndex + rowOffset + 2}`)
    };

    if (!row.some((cell) => String(cell ?? "").trim())) return items;
    if (!validateRecord(record)) items.push(record);
    return items;
  }, []);
}

function normalizeHeader(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.#]/g, "")
    .replace(/\s+/g, " ");
}

function findColumn(headers, candidates) {
  return headers.findIndex((header) => candidates.includes(header));
}

function readCell(row, index, fallback) {
  if (index < 0) return fallback;
  const value = String(row[index] ?? "").trim();
  return value || fallback;
}

function toNumber(value) {
  if (typeof value === "number") return value;
  return Number(String(value ?? "").trim().replace(",", "."));
}

function resetData() {
  if (currentMode === "brecha") {
    brechaSegments = Array.isArray(globalThis.BRECHA_SEED) ? [...globalThis.BRECHA_SEED] : [];
    brechaRoutes = [];
  } else {
    records = [...seedRecords];
    routes = [];
  }
  markPendingChanges();
  clearForm();
  render();
}

function initMap() {
  if (!globalThis.L) {
    elements.map.innerHTML = '<div class="map-fallback">No se pudo cargar el mapa. Revisa la conexion a internet.</div>';
    return;
  }

  mapInstance = L.map(elements.map, {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([18.924, -97.011], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mapInstance);

  routeLayer = L.layerGroup().addTo(mapInstance);
  markerLayer = L.layerGroup().addTo(mapInstance);
  mapReady = true;
}

function updatePreviewMarker() {
  if (!mapReady) return;

  const lat = Number(elements.latitud.value);
  const lng = Number(elements.longitud.value);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    removePreviewMarker();
    return;
  }

  if (!previewMarker) {
    previewMarker = L.marker([lat, lng], {
      title: "Coordenada capturada"
    }).addTo(mapInstance);
  } else {
    previewMarker.setLatLng([lat, lng]);
  }

  previewMarker.bindPopup("<strong>Coordenada capturada</strong><span>Se guardara al registrar el formulario.</span>");
  mapInstance.setView([lat, lng], Math.max(mapInstance.getZoom(), 16));
}

function removePreviewMarker() {
  if (!previewMarker) return;
  previewMarker.remove();
  previewMarker = null;
}

function createPopup(record) {
  return `
    <strong>${escapeHtml(record.lugar)}</strong>
    <span>Circuito: ${escapeHtml(record.circuito)}</span>
    <span>Tipo de poda: ${escapeHtml(record.tipoPoda)}</span>
    <span>Arboles: ${Number(record.arboles).toLocaleString("es-MX")}</span>
    <span>Estructuras: ${escapeHtml(record.estructuras)}</span>
    <span>${formatCoordinate(record.latitud)}, ${formatCoordinate(record.longitud)}</span>
  `;
}

function createRoutePopup(route) {
  return `
    <strong>${escapeHtml(route.name)}</strong>
    <span>Trayectoria KMZ/KML</span>
    <span>Archivo: ${escapeHtml(route.source)}</span>
    <span>Puntos de ruta: ${route.coordinates.length.toLocaleString("es-MX")}</span>
  `;
}

function createBrechaPopup(segment) {
  return `
    <strong>Brecha ${escapeHtml(segment.numero)}</strong>
    <span>Hoja: ${escapeHtml(segment.sheet)}</span>
    <span>Total: ${Number(segment.totalM || 0).toLocaleString("es-MX")} m</span>
    <span>Efectiva: ${Number(segment.efectivaM || 0).toLocaleString("es-MX")} m</span>
    <span>Ancho: ${Number(segment.ancho || 0).toLocaleString("es-MX")} m</span>
    <span>Hectareas: ${Number(segment.hectareas || 0).toLocaleString("es-MX", { maximumFractionDigits: 3 })}</span>
  `;
}

function createBrechaPointPopup(segment, label) {
  const lat = label === "Inicio" ? segment.latInicio : segment.latFin;
  const lng = label === "Inicio" ? segment.longInicio : segment.longFin;
  return `
    <strong>${escapeHtml(label)} de brecha ${escapeHtml(segment.numero)}</strong>
    <span>${formatCoordinate(lat)}, ${formatCoordinate(lng)}</span>
    <span>Total: ${Number(segment.totalM || 0).toLocaleString("es-MX")} m</span>
  `;
}

function createRoutePointPopup(route, index) {
  const label = index === 0
    ? "Inicio de trayectoria"
    : index === route.coordinates.length - 1
      ? "Fin de trayectoria"
      : `Punto ${index + 1} de trayectoria`;

  return `
    <strong>${escapeHtml(label)}</strong>
    <span>${escapeHtml(route.name)}</span>
    <span>Archivo: ${escapeHtml(route.source)}</span>
  `;
}

function getFileExtension(fileName) {
  return String(fileName).split(".").pop().toLowerCase();
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return crypto.randomUUID();
  }

  return `manual-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function formatCoordinate(value) {
  return Number(value).toFixed(7);
}

function getDateFileName() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}_${hour}-${minute}`;
}

function shortenLabel(value, maxLength) {
  const text = String(value ?? "");
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
