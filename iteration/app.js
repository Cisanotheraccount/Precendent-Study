import * as THREE from "three";

const SCENES = [
  {
    id: "intro",
    navLabel: "Introduction",
    kicker: "01 / Data-Driven Documents",
    title: "D3.js turns data into living documents.",
    body: "Created by Mike Bostock in 2011 and introduced in a paper co-authored with Vadim Ogievetsky and Jeffrey Heer, D3 connects data to native browser documents.",
    thesis: "CREATOR · MIKE BOSTOCK / PAPER AUTHORS · BOSTOCK · OGIEVETSKY · HEER",
    placement: "left",
    layout: "logo",
    camera: [0, 0, 9.2],
    rotation: [0.02, -0.08, 0],
    accent: 0.28,
    extra: "datasheet",
  },
  {
    id: "workflow",
    navLabel: "Workflow",
    kicker: "02 / Core Method",
    title: "Join data. Transform the document.",
    body: "D3 has no overarching chart abstraction. Data is joined to selected DOM elements; enter, update, and exit describe what should be created, changed, or removed, while transitions and event listeners control motion and response.",
    thesis: "DATA → SELECT → JOIN → ENTER / UPDATE / EXIT → MODIFY → INTERACT",
    placement: "right",
    layout: "workflow",
    camera: [0.35, 0.05, 9.8],
    rotation: [0, 0, 0],
    pointScale: 0.42,
    accent: 0.62,
    extra: "workflow",
  },
  {
    id: "before-d3",
    navLabel: "Before D3",
    kicker: "03 / Historical Context",
    title: "Before D3, toolkits often hid the document.",
    body: "Earlier visualization systems used specialized runtimes or toolkit-specific scene graphs. Protovis offered a concise mark abstraction over SVG; D3 responded by binding data directly to native DOM elements, improving inspection and interoperability.",
    placement: "left",
    layout: "retro-computer",
    camera: [-0.3, 0.16, 10.4],
    rotation: [0.1, -0.22, -0.015],
    pointScale: 0.62,
    accent: 0.12,
  },
  {
    id: "origins",
    navLabel: "Origins",
    kicker: "04 / Creators + Lineage",
    title: "From toolkits to the native DOM.",
    body: "Mike Bostock created D3 in 2011 and co-authored its paper with Vadim Ogievetsky and Jeffrey Heer at Stanford. Earlier work by the authors—including Prefuse, Flare, and Protovis—formed its lineage; D3's defining shift was to expose the browser's native document representation.",
    thesis: "PREFUSE / FLARE / PROTOVIS → D3 → NATIVE DOM",
    placement: "right",
    layout: "stanford-lineage",
    camera: [0.4, -0.12, 9.4],
    rotation: [0, 0, 0],
    pointScale: 0.48,
    accent: 0.42,
    extra: "facts",
  },
  {
    id: "ontology",
    navLabel: "Ontology",
    kicker: "05 / What Exists",
    title: "D3 is a modular toolbox within a wider network.",
    body: "At the software layer, D3 comprises modules for data, selections and joins, scales and axes, shapes, layouts, transitions, and interaction. These connect JavaScript and data to DOM, SVG, HTML, or Canvas; documentation, examples, source code, maintainers, and users form the surrounding social infrastructure.",
    placement: "left",
    layout: "ontology-logo",
    camera: [-0.22, 0.12, 9.7],
    rotation: [0, 0, 0],
    pointScale: 0.72,
    mobileY: 0.72,
    accent: 0.48,
  },
  {
    id: "d3-era",
    navLabel: "D3 Era",
    kicker: "06 / 2011",
    title: "The browser becomes the medium.",
    body: "D3 exposed the browser's native DOM rather than hiding it behind a toolkit-specific scene graph. Practitioners could generate and inspect HTML or SVG, style it with CSS, and update it in response to data and human input.",
    placement: "right",
    layout: "browser",
    camera: [0.2, -0.08, 9.1],
    rotation: [-0.05, 0.13, 0],
    mobileY: 0.78,
    accent: 0.7,
    extra: "evidence",
  },
  {
    id: "visual-language",
    navLabel: "Visual Language",
    kicker: "07 / Aesthetic Analysis",
    title: "No single style. A procedural language.",
    body: "D3 has no default presentation. Its visual language is authored through geometry, scales, hierarchy, transitions, and interaction. This flexibility lets a visualization stage comparisons, reveal change, and make the author's encoding choices visible.",
    placement: "left",
    layout: "charts",
    camera: [-0.35, 0.05, 9.8],
    rotation: [0.08, -0.16, -0.02],
    mobileY: 0.78,
    accent: 0.5,
  },
  {
    id: "impact",
    navLabel: "Impact",
    kicker: "08 / Community of Practice",
    title: "A tool became an ecosystem.",
    body: "D3 helped bring interactive web visualization into mainstream practice across newsrooms and research. Bostock later co-founded Observable and developed Observable Plot, which is built on D3; Heer later co-developed Vega-Lite, a higher-level grammar for interactive graphics.",
    thesis: "D3'S INFLUENCE CONTINUES THROUGH TOOLS THAT TRADE DIFFERENT BALANCES OF CONTROL AND ABSTRACTION.",
    placement: "right",
    layout: "impact",
    camera: [0.26, 0.12, 10.2],
    rotation: [-0.02, 0.24, 0.03],
    mobileY: 0.78,
    accent: 0.84,
  },
  {
    id: "part-three",
    navLabel: "Synthesis",
    kicker: "09 / Method + Rhetoric",
    title: "D3 argues for transparent representation.",
    body: "Methodologically, D3 joins data to native DOM elements and evaluates transformations immediately. Rhetorically, exposing representation improves expressiveness, inspection, and interoperability. In Bostock and Heer's wider practice, D3 follows Prefuse, Flare, and Protovis and precedes Observable Plot and Vega-Lite.",
    thesis: "MY ASSESSMENT — D3'S LOW-LEVEL CONTROL ENABLES BESPOKE VISUALIZATION, BUT SHIFTS AUTHORING, LEARNING, AND ACCESSIBILITY RESPONSIBILITY TO THE PRACTITIONER.",
    placement: "right",
    layout: "network",
    camera: [0.28, -0.03, 9.8],
    rotation: [0.06, -0.12, 0],
    pointScale: 0.62,
    mobileY: 0.78,
    accent: 0.32,
    extra: "analysis",
  },
  {
    id: "sources",
    navLabel: "Sources",
    kicker: "10 / Bibliography + Loop",
    title: "Every document points to another.",
    body: "The bibliography separates work by D3's creators from analysis by other writers. It includes the 2011 paper and its predecessors, official documentation and source code, creator essays and interviews, independent criticism, and later systems that extend the authors' visualization practice.",
    thesis: "KEEP SCROLLING TO RETURN TO THE BEGINNING.",
    placement: "center",
    layout: "sources",
    camera: [0, 0.08, 9.6],
    rotation: [-0.04, 0.04, 0],
    accent: 0.45,
    extra: "sources",
  },
];

const WORKFLOW_NODES = [
  { label: "DATA", x: 280, y: 250 },
  { label: "SELECT", x: 800, y: 250 },
  { label: "JOIN", x: 1320, y: 250 },
  { label: "ENTER / UPDATE / EXIT", x: 1320, y: 650 },
  { label: "MODIFY", x: 800, y: 650 },
  { label: "INTERACT", x: 280, y: 650 },
];

const ONTOLOGY_INDEX = SCENES.findIndex((scene) => scene.id === "ontology");
const SHARED_VERTICAL_SWING = Math.PI / 4;
const SHARED_VERTICAL_SPEED = 0.045;
const LOGO_DESKTOP_SCALE = 6.2;
const LOGO_MOBILE_SCALE = 6.9;
const ONTOLOGY_LOGO_EDGE_JITTER = 0.012;
const ONTOLOGY_LOGO_DEPTH_SPREAD = 0.18;
const ONTOLOGY_LOGO_DEPTH_LIMIT = 0.43;
const ONTOLOGY_MOBILE_LAYOUT_SCALE = 0.68;
const ONTOLOGY_MOBILE_LAYOUT_Y = 0.7;
const ONTOLOGY_MOBILE_ANCHOR_SCALE = (
  ONTOLOGY_MOBILE_LAYOUT_SCALE * LOGO_MOBILE_SCALE / LOGO_DESKTOP_SCALE
);
const ONTOLOGY_CALLOUTS = [
  {
    id: "document",
    anchor: [-1.2, 1.18, 0.34],
    side: "left",
    yOffset: -72,
    mobileYOffset: -45,
  },
  {
    id: "code",
    anchor: [1.18, 1.08, 0.34],
    side: "right",
    yOffset: -76,
    mobileYOffset: -45,
  },
  {
    id: "data",
    anchor: [-0.55, -0.82, 0.3],
    side: "left",
    yOffset: -46,
    mobileYOffset: -18,
  },
  {
    id: "join",
    anchor: [1.52, 0.08, 0.34],
    side: "right",
    yOffset: -20,
    mobileYOffset: -4,
  },
  {
    id: "scale",
    anchor: [1.16, -1.04, 0.34],
    side: "right",
    yOffset: 54,
    mobileYOffset: 20,
  },
  {
    id: "motion",
    anchor: [0, -1.56, 0.34],
    side: "center",
    yOffset: 88,
    mobileYOffset: 46,
  },
];

const isMobile = window.matchMedia("(max-width: 680px), (pointer: coarse)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const particleCount = isMobile ? 30000 : 120000;
const baseParticlePointSize = isMobile ? 4.5 : 5.6;
const state = {
  progress: 0,
  target: 0,
  currentScene: -1,
  settledScene: 0,
  wheelBuffer: 0,
  lastWheelAt: 0,
  touchBuffer: 0,
  isSnapping: false,
  snapFrom: 0,
  snapDelta: 0,
  snapStartedAt: 0,
  snapDuration: 1180,
  gridProgress: 0,
  gridSnapFrom: 0,
  gridSnapDelta: 0,
  inputLockedUntil: 0,
  pointerTarget: new THREE.Vector2(9, 9),
  pointerSample: new THREE.Vector2(),
  pointerSpeed: 0,
  pointerLastEventAt: 0,
  pointerHasSample: false,
  visualTime: 0,
  touchY: null,
  touchStartedInCard: false,
  lastTime: performance.now(),
  ready: false,
  paused: document.hidden,
};

const experience = document.querySelector("#experience");
const fallback = document.querySelector("#fallback");
const canvas = document.querySelector("#particle-canvas");
const sceneLayer = document.querySelector("#scene-layer");
const chapterLinks = document.querySelector("#chapter-links");
const railProgress = document.querySelector("#rail-progress");
const sceneCurrent = document.querySelector("#scene-current");
const sceneTotal = document.querySelector("#scene-total");
const loader = document.querySelector("#loader");
const loaderProgress = document.querySelector("#loader-progress");
const loaderBar = document.querySelector("#loader-bar");

let renderer;
let camera;
let world;
let particlePoints;
let material;
let simulation;
let pointerFlow;
let layouts = [];
let layoutTextures = [];
let sceneCards = [];
let navButtons = [];
let ontologyOverlay;
let ontologyLinework;
let ontologyCallouts = [];
let animationFrameId = 0;

const ontologyProjectedAnchor = new THREE.Vector3();
const ontologyProjectedCenter = new THREE.Vector3();

let simulationAccumulator = 0;

const simulationMvp = new THREE.Matrix4();
const simulationViewModel = new THREE.Matrix4();
const inverseObjectRotation = new THREE.Matrix4();
const screenToLocal = new THREE.Matrix3();
const pointerFlowStart = new THREE.Vector2();
const pointerFlowEnd = new THREE.Vector2();
const pointerFlowDelta = new THREE.Vector2();

sceneTotal.textContent = String(SCENES.length).padStart(2, "0");

if (!supportsWebGL2() || reducedMotion) {
  activateFallback();
} else {
  buildInterface();
  init().catch((error) => {
    console.error("D3 particle experience could not initialize:", error);
    activateFallback();
  });
}

async function init() {
  setLoadProgress(8);
  setupRenderer();
  setLoadProgress(18);
  const logoImage = await loadImage("./assets/d3-particle-reference.png");
  await document.fonts.load("600 76px IBM Plex Mono").catch(() => []);
  setLoadProgress(36);
  layouts = buildLayouts(logoImage);
  setLoadProgress(54);
  createParticleField();
  setLoadProgress(78);
  bindInteractions();
  resize();
  setLoadProgress(92);
  updateScene(0, 0, true);
  state.ready = true;
  setLoadProgress(100);
  window.setTimeout(() => loader.classList.add("is-complete"), 420);
  animationFrameId = requestAnimationFrame(tick);
}

function buildInterface() {
  sceneCards = SCENES.map((scene, index) => {
    const article = document.createElement("article");
    article.className = "scene-card";
    article.dataset.scene = index;
    article.dataset.placement = scene.placement;
    article.id = scene.id;
    article.setAttribute("aria-hidden", index === 0 ? "false" : "true");
    article.toggleAttribute("inert", index !== 0);
    article.innerHTML = `
      <p class="scene-card__kicker">${scene.kicker}</p>
      <${index === 0 ? "h1" : "h2"}>${scene.title}</${index === 0 ? "h1" : "h2"}>
      <p class="scene-card__body">${scene.body}</p>
      ${scene.thesis ? `<p class="scene-card__thesis">${scene.thesis}</p>` : ""}
      ${scene.status ? `<span class="scene-card__status">${scene.status}</span>` : ""}
      ${extraMarkup(scene.extra)}
    `;
    sceneLayer.append(article);
    return article;
  });

  navButtons = SCENES.map((scene, index) => {
    const button = document.createElement("button");
    button.className = "chapter-link";
    button.type = "button";
    button.textContent = scene.navLabel;
    button.setAttribute("aria-label", `Go to chapter ${index + 1}: ${scene.navLabel}`);
    button.addEventListener("click", () => jumpToScene(index));
    chapterLinks.append(button);
    return button;
  });

  buildOntologyOverlay();

  document.querySelectorAll("[data-scene-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      jumpToScene(Number(link.dataset.sceneLink));
    });
  });
}

function buildOntologyOverlay() {
  ontologyOverlay = document.createElement("aside");
  ontologyOverlay.className = "ontology-overlay";
  ontologyOverlay.setAttribute("aria-hidden", "true");
  ontologyOverlay.innerHTML = `
    <div class="ontology-overlay__stage">
      <svg class="ontology-overlay__linework" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
        <g>
          <polyline data-callout="document" pathLength="1" points="0,0 0,0 0,0" />
          <polyline data-callout="code" pathLength="1" points="0,0 0,0 0,0" />
          <polyline data-callout="data" pathLength="1" points="0,0 0,0 0,0" />
          <polyline data-callout="join" pathLength="1" points="0,0 0,0 0,0" />
          <polyline data-callout="scale" pathLength="1" points="0,0 0,0 0,0" />
          <polyline data-callout="motion" pathLength="1" points="0,0 0,0 0,0" />
        </g>
        <g class="ontology-overlay__anchors">
          <path data-callout="document" d="M0 0" />
          <path data-callout="code" d="M0 0" />
          <path data-callout="data" d="M0 0" />
          <path data-callout="join" d="M0 0" />
          <path data-callout="scale" d="M0 0" />
          <path data-callout="motion" d="M0 0" />
        </g>
      </svg>

      <div class="ontology-label ontology-label--document" data-callout="document">
        <strong>SVG / HTML / CANVAS</strong><span>REPRESENTATION LAYER</span>
      </div>
      <div class="ontology-label ontology-label--code" data-callout="code">
        <strong>CSS / JAVASCRIPT</strong><span>PRESENTATION + LOGIC</span>
      </div>
      <div class="ontology-label ontology-label--data" data-callout="data">
        <strong>DATA</strong><span>SOURCE MATERIAL</span>
      </div>
      <div class="ontology-label ontology-label--join" data-callout="join">
        <strong>SELECTIONS / JOINS</strong><span>RELATIONAL CORE</span>
      </div>
      <div class="ontology-label ontology-label--scale" data-callout="scale" data-tier="secondary">
        <strong>SCALES / AXES</strong><span>TRANSLATION SYSTEM</span>
      </div>
      <div class="ontology-label ontology-label--motion" data-callout="motion" data-tier="secondary">
        <strong>TRANSITIONS</strong><span>TIME + INTERACTION</span>
      </div>
    </div>
  `;
  experience.append(ontologyOverlay);
  ontologyLinework = ontologyOverlay.querySelector(".ontology-overlay__linework");
  ontologyCallouts = ONTOLOGY_CALLOUTS.map((definition) => ({
    ...definition,
    localAnchor: new THREE.Vector3(...definition.anchor),
    line: ontologyOverlay.querySelector(`polyline[data-callout="${definition.id}"]`),
    marker: ontologyOverlay.querySelector(`.ontology-overlay__anchors [data-callout="${definition.id}"]`),
    label: ontologyOverlay.querySelector(`.ontology-label[data-callout="${definition.id}"]`),
  }));
}

function extraMarkup(type) {
  if (type === "datasheet") {
    return `<dl class="facts datasheet">
      <div><dt>Title</dt><dd>D3 / Data-Driven Documents</dd></div>
      <div><dt>Year</dt><dd>2011</dd></div>
      <div><dt>Format</dt><dd>Free, open-source JavaScript library + IEEE paper</dd></div>
      <div><dt>Intended users</dt><dd>Developers, visualization practitioners, journalists, researchers, educators</dd></div>
    </dl>`;
  }
  if (type === "workflow") {
    return `<div class="workflow" aria-label="D3 workflow">
      ${["DATA", "SELECT", "JOIN", "ENTER · UPDATE · EXIT", "MODIFY", "INTERACT"].map((step) => `<span>${step}</span>`).join("")}
    </div>`;
  }
  if (type === "facts") {
    return `<dl class="facts">
      <div><dt>Creator</dt><dd>Mike Bostock</dd></div>
      <div><dt>Paper authors</dt><dd>Bostock · Ogievetsky · Heer</dd></div>
      <div><dt>Institution</dt><dd>Stanford Visualization Group</dd></div>
      <div><dt>Precedents</dt><dd>Prefuse · Flare · Protovis</dd></div>
    </dl>`;
  }
  if (type === "evidence") {
    return `<img class="evidence-image" src="./assets/d3-paper-examples.png" alt="Examples from the original 2011 D3 paper" loading="lazy" />`;
  }
  if (type === "analysis") {
    return `<dl class="analysis-grid">
      <div><dt>Method</dt><dd>Data → selections → native DOM</dd></div>
      <div><dt>Rhetoric</dt><dd>Inspectable representation</dd></div>
      <div><dt>Wider practice</dt><dd>Prefuse / Protovis → D3 → Plot / Vega-Lite</dd></div>
      <div><dt>Critical tension</dt><dd>Control ↔ responsibility</dd></div>
    </dl>`;
  }
  if (type === "sources") {
    return `<div class="source-links">
      <section class="source-group" aria-labelledby="creator-sources-title">
        <h3 id="creator-sources-title">Author / project sources</h3>
        <a href="https://github.com/Cisanotheraccount/Precendent-Study/tree/main/author-project-sources" target="_blank" rel="noreferrer">Repository folder</a>
        <a href="https://idl.uw.edu/papers/d3" target="_blank" rel="noreferrer">D3: Data-Driven Documents · 2011</a>
        <a href="https://d3js.org/what-is-d3" target="_blank" rel="noreferrer">What is D3? · Official documentation</a>
        <a href="https://github.com/d3/d3" target="_blank" rel="noreferrer">D3 source code · GitHub</a>
        <a href="https://bost.ocks.org/mike/join/" target="_blank" rel="noreferrer">Thinking with Joins · Mike Bostock</a>
        <a href="https://observablehq.com/@mbostock/10-years-of-open-source-visualization" target="_blank" rel="noreferrer">10 Years of Open-Source Visualization</a>
      </section>
      <section class="source-group" aria-labelledby="other-sources-title">
        <h3 id="other-sources-title">Sources by others</h3>
        <a href="https://github.com/Cisanotheraccount/Precendent-Study/tree/main/sources-by-others" target="_blank" rel="noreferrer">Repository folder</a>
        <a href="https://ieeevis.org/year/2021/info/awards/test-of-time-awards" target="_blank" rel="noreferrer">IEEE VIS Test of Time Award · 2021</a>
        <a href="https://policyviz.com/podcast/episode-175-mike-bostock/" target="_blank" rel="noreferrer">PolicyViz interview · Mike Bostock</a>
        <a href="https://arxiv.org/abs/2207.06554" target="_blank" rel="noreferrer">How learners use D3 · independent study</a>
        <a href="https://idl.uw.edu/papers/protovis" target="_blank" rel="noreferrer">Protovis · research paper</a>
        <a href="https://idl.uw.edu/papers/vega-lite" target="_blank" rel="noreferrer">Vega-Lite · research paper</a>
      </section>
    </div>`;
  }
  return "";
}

function setupRenderer() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x8e97a4, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  camera = new THREE.PerspectiveCamera(isMobile ? 58 : 48, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.set(0, 0, 9.2);
  world = new THREE.Scene();
}

function createParticleField() {
  const hasFloatTargets = renderer.extensions.has("EXT_color_buffer_float");
  if (!hasFloatTargets) throw new Error("This particle simulation requires floating-point render targets.");

  const textureSize = Math.ceil(Math.sqrt(particleCount));
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const seeds = new Float32Array(particleCount);
  const simUvs = new Float32Array(particleCount * 2);

  for (let i = 0; i < particleCount; i += 1) {
    seeds[i] = Math.random();
    simUvs[i * 2] = ((i % textureSize) + 0.5) / textureSize;
    simUvs[i * 2 + 1] = (Math.floor(i / textureSize) + 0.5) / textureSize;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  geometry.setAttribute("aSimUv", new THREE.BufferAttribute(simUvs, 2));

  const morphGlsl = `
    float morphProgress(float value) {
      float staged = smoothstep(0.3, 0.7, clamp(value, 0.0, 1.0));
      return staged * staged * (3.0 - 2.0 * staged);
    }
  `;

  pointerFlow = createPointerFlowSimulation();
  simulation = createParticleSimulation(textureSize, morphGlsl);

  material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
    glslVersion: THREE.GLSL3,
    uniforms: {
      tOffset: { value: simulation.currentTextures[0] },
      tVelocity: { value: simulation.currentTextures[1] },
      tLayoutFrom: { value: simulation.layoutFrom },
      tLayoutTo: { value: simulation.layoutTo },
      uMorph: { value: 0 },
      uPointSize: { value: baseParticlePointSize },
      uOpacity: { value: 0.82 },
      uTime: { value: 0 },
      uAmbientMotion: { value: 1 },
    },
    vertexShader: `
      in float aSeed;
      in vec2 aSimUv;

      uniform sampler2D tOffset;
      uniform sampler2D tVelocity;
      uniform sampler2D tLayoutFrom;
      uniform sampler2D tLayoutTo;
      uniform float uMorph;
      uniform float uPointSize;
      uniform float uTime;
      uniform float uAmbientMotion;

      varying float vVelocity;
      varying float vMotionAlpha;
      varying float vSurfaceLight;
      varying float vInteraction;

      ${morphGlsl}

      void main() {
        vec4 layoutFrom = texture(tLayoutFrom, aSimUv);
        vec4 layoutTo = texture(tLayoutTo, aSimUv);
        vec4 offsetData = texture(tOffset, aSimUv);
        vec4 velocityData = texture(tVelocity, aSimUv);
        vec3 rest = mix(layoutFrom.xyz, layoutTo.xyz, morphProgress(uMorph));
        vec3 p = rest + offsetData.xyz;

        // Every chapter shares the same living, low-amplitude surface motion.
        // It remains separate from the force simulation that controls cursor
        // scattering, page-transition turbulence, and elastic recovery.
        vec3 specimenNormal = normalize(rest + vec3(0.0001));
        float specimenWave =
          sin(rest.y * 2.15 + rest.z * 1.3 + uTime * 1.05 + aSeed * 2.2) * 0.038 +
          sin(rest.x * 3.35 - rest.y * 0.72 - uTime * 0.74 + aSeed * 5.7) * 0.022;
        p += specimenNormal * specimenWave * uAmbientMotion;
        p.x += sin(rest.y * 1.42 + uTime * 0.58) * 0.020 * uAmbientMotion;
        p.z += cos(rest.x * 1.76 - uTime * 0.46) * 0.016 * uAmbientMotion;

        vVelocity = smoothstep(0.018, 0.22, velocityData.w);
        vMotionAlpha = mix(1.0, 0.78, vVelocity * 0.55);
        vec3 macroNormal = normalize(mat3(modelMatrix) * normalize(p + vec3(0.0001)));
        vec3 worldLightDirection = normalize(vec3(1.0, 1.0, 1.0));
        vSurfaceLight = clamp(0.46 + dot(macroNormal, worldLightDirection) * 0.54, 0.06, 1.0);
        // Cursor excitation has its own short afterglow. Particle velocity still
        // enlarges moving grains, but no longer keeps the whole path white long
        // after the directional impulse has passed.
        vInteraction = max(offsetData.w, vVelocity * 0.18);

        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        float sizePulse = 0.92 + vVelocity * 0.28;
        gl_PointSize = uPointSize * (25.0 / max(1.0, -mvPosition.z)) * (0.78 + aSeed * 0.54) * sizePulse;
      }
    `,
    fragmentShader: `
      uniform float uOpacity;
      varying float vVelocity;
      varying float vMotionAlpha;
      varying float vSurfaceLight;
      varying float vInteraction;
      out vec4 fragColor;

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;
        float edge = smoothstep(0.5, 0.18, d);
        vec2 normalXY = uv * 2.0;
        float normalZ = sqrt(max(0.0, 1.0 - dot(normalXY, normalXY)));
        vec3 normal = normalize(vec3(normalXY, normalZ));
        vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
        vec3 viewDirection = vec3(0.0, 0.0, 1.0);
        vec3 halfDirection = normalize(lightDirection + viewDirection);
        float ndotl = dot(normal, lightDirection);
        float wrappedDiffuse = max(0.0, (ndotl + 0.22) / 1.22);
        float macroShadow = 0.2 + vSurfaceLight * 0.8;
        float diffuse = wrappedDiffuse * macroShadow;
        // A broad, low-energy highlight reads as powder-coated/matte rather
        // than a tight glossy reflection on every particle.
        float specular = pow(max(dot(normal, halfDirection), 0.0), 10.0) * macroShadow;
        vec3 particleGray = vec3(0.48, 0.53, 0.59);
        vec3 coldLight = vec3(0.78, 0.88, 1.0);
        float illumination = 0.28 + diffuse * 0.82;
        vec3 litColor = particleGray * illumination + coldLight * specular * 0.08;
        float excitation = pow(clamp(vInteraction, 0.0, 1.0), 1.35);
        float excitationPulse = 0.68 + vVelocity * 0.48;
        litColor += vec3(0.58, 0.78, 1.0) * excitation * excitationPulse * 0.82;
        fragColor = vec4(litColor, edge * uOpacity * vMotionAlpha);
      }
    `,
  });

  particlePoints = new THREE.Points(geometry, material);
  particlePoints.frustumCulled = false;
  world.add(particlePoints);
  requestAnimationFrame(renderLoaderParticles);
}

function createPointerFlowSimulation() {
  const size = isMobile ? 64 : 128;
  const makeTarget = () => {
    const target = new THREE.WebGLRenderTarget(size, size, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      depthBuffer: false,
      stencilBuffer: false,
      generateMipmaps: false,
    });
    target.texture.name = "Pointer velocity field";
    target.texture.colorSpace = THREE.NoColorSpace;
    target.texture.generateMipmaps = false;
    return target;
  };

  const targets = [makeTarget(), makeTarget()];
  const scene = new THREE.Scene();
  const flowCamera = new THREE.Camera();
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array([
    -1, -1, 0,
    3, -1, 0,
    -1, 3, 0,
  ]), 3));

  const flowMaterial = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tVelocity: { value: targets[0].texture },
      uTexelSize: { value: new THREE.Vector2(1 / size, 1 / size) },
      uDelta: { value: 1 / 60 },
      uAspect: { value: window.innerWidth / window.innerHeight },
      uSplatStart: { value: new THREE.Vector2() },
      uSplatEnd: { value: new THREE.Vector2() },
      uSplatForce: { value: new THREE.Vector2() },
      uSplatActive: { value: 0 },
    },
    vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      precision highp sampler2D;

      uniform sampler2D tVelocity;
      uniform vec2 uTexelSize;
      uniform float uDelta;
      uniform float uAspect;
      uniform vec2 uSplatStart;
      uniform vec2 uSplatEnd;
      uniform vec2 uSplatForce;
      uniform float uSplatActive;

      out vec4 fragColor;

      float distanceToSegment(vec2 point, vec2 start, vec2 end) {
        vec2 pa = point - start;
        vec2 ba = end - start;
        float amount = clamp(dot(pa, ba) / max(dot(ba, ba), 0.000001), 0.0, 1.0);
        return length(pa - ba * amount);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy * uTexelSize;
        float frameRatio = clamp(uDelta * 60.0, 0.0, 2.0);

        vec4 previousSample = texture(tVelocity, uv);
        vec2 previous = previousSample.xy;
        vec2 advectionVelocity = vec2(previous.x / max(uAspect, 0.0001), previous.y);
        vec2 backUv = clamp(uv - advectionVelocity * uDelta * 0.24, vec2(0.0), vec2(1.0));
        vec4 advectedSample = texture(tVelocity, backUv);
        vec2 velocity = advectedSample.xy;
        float wake = advectedSample.z;
        float hold = advectedSample.w;

        vec2 left = texture(tVelocity, clamp(backUv - vec2(uTexelSize.x, 0.0), vec2(0.0), vec2(1.0))).xy;
        vec2 right = texture(tVelocity, clamp(backUv + vec2(uTexelSize.x, 0.0), vec2(0.0), vec2(1.0))).xy;
        vec2 bottom = texture(tVelocity, clamp(backUv - vec2(0.0, uTexelSize.y), vec2(0.0), vec2(1.0))).xy;
        vec2 top = texture(tVelocity, clamp(backUv + vec2(0.0, uTexelSize.y), vec2(0.0), vec2(1.0))).xy;
        vec2 neighborFlow = (left + right + bottom + top) * 0.25;
        velocity = mix(velocity, neighborFlow, min(0.12, 0.055 * frameRatio));
        velocity *= pow(0.965, frameRatio);
        wake *= pow(0.88, frameRatio);
        hold *= pow(0.985, frameRatio);

        vec2 point = uv;
        vec2 start = uSplatStart;
        vec2 end = uSplatEnd;
        point.x *= uAspect;
        start.x *= uAspect;
        end.x *= uAspect;
        float radius = 0.22;
        float lineFalloff = clamp(1.0 - distanceToSegment(point, start, end) / radius, 0.0, 1.0);
        lineFalloff = lineFalloff * lineFalloff * lineFalloff;
        float splat = lineFalloff * uSplatActive;
        velocity += uSplatForce * splat;
        float splatEnergy = clamp(length(uSplatForce) * 0.78, 0.0, 1.0);
        wake = max(wake, splat * splatEnergy);
        hold = max(hold, splat * splatEnergy);

        float speed = length(velocity);
        if (speed > 2.0) velocity *= 2.0 / speed;
        fragColor = vec4(velocity, wake, hold);
      }
    `,
  });

  const quad = new THREE.Mesh(geometry, flowMaterial);
  quad.frustumCulled = false;
  scene.add(quad);

  const previousTarget = renderer.getRenderTarget();
  const previousColor = new THREE.Color();
  renderer.getClearColor(previousColor);
  const previousAlpha = renderer.getClearAlpha();
  targets.forEach((target) => {
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, false, false);
  });
  renderer.setRenderTarget(previousTarget);
  renderer.setClearColor(previousColor, previousAlpha);

  return {
    size,
    targets,
    readIndex: 0,
    currentTexture: targets[0].texture,
    scene,
    camera: flowCamera,
    material: flowMaterial,
  };
}

function createParticleSimulation(textureSize, morphGlsl) {
  const layoutFrom = createLayoutTexture(textureSize);
  const layoutTo = createLayoutTexture(textureSize);
  writeLayoutTexture(layoutFrom, layouts[0]);
  writeLayoutTexture(layoutTo, layouts[1]);
  layoutTextures = [layoutFrom, layoutTo];

  const makeTarget = () => {
    const target = new THREE.WebGLRenderTarget(textureSize, textureSize, {
      count: 2,
      type: THREE.FloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      depthBuffer: false,
      stencilBuffer: false,
      generateMipmaps: false,
    });
    target.textures.forEach((texture, index) => {
      texture.name = index === 0 ? "D3 particle offsets" : "D3 particle velocities";
      texture.colorSpace = THREE.NoColorSpace;
      texture.generateMipmaps = false;
    });
    return target;
  };

  const targets = [makeTarget(), makeTarget()];
  const simScene = new THREE.Scene();
  const simCamera = new THREE.Camera();
  const simGeometry = new THREE.BufferGeometry();
  simGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array([
    -1, -1, 0,
    3, -1, 0,
    -1, 3, 0,
  ]), 3));

  const computeMaterial = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tOffset: { value: targets[0].textures[0] },
      tVelocity: { value: targets[0].textures[1] },
      tLayoutFrom: { value: layoutFrom },
      tLayoutTo: { value: layoutTo },
      tPointerFlow: { value: pointerFlow.currentTexture },
      uMorph: { value: 0 },
      uDelta: { value: 1 / 60 },
      uTime: { value: 0 },
      uTextureSize: { value: textureSize },
      uParticleCount: { value: particleCount },
      uMvp: { value: new THREE.Matrix4() },
      uScreenToLocal: { value: new THREE.Matrix3() },
    },
    vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      precision highp sampler2D;

      uniform sampler2D tOffset;
      uniform sampler2D tVelocity;
      uniform sampler2D tLayoutFrom;
      uniform sampler2D tLayoutTo;
      uniform sampler2D tPointerFlow;
      uniform float uMorph;
      uniform float uDelta;
      uniform float uTime;
      uniform int uTextureSize;
      uniform int uParticleCount;
      uniform mat4 uMvp;
      uniform mat3 uScreenToLocal;

      layout(location = 0) out vec4 outOffset;
      layout(location = 1) out vec4 outVelocity;

      ${morphGlsl}

      float hash12(vec2 value) {
        return fract(sin(dot(value, vec2(127.1, 311.7))) * 43758.5453123);
      }

      vec3 bitangentFlow(vec3 p, float time) {
        vec3 gradientA = vec3(
          cos(p.x * 1.17 + time * 2.7),
          cos(p.y * 1.43 - time * 2.25),
          cos(p.z * 1.31 + time * 2.5)
        );
        vec3 gradientB = vec3(
          -sin((p.y + p.z) * 1.06 - time * 2.35),
          -sin((p.z + p.x) * 1.22 + time * 2.55),
          -sin((p.x + p.y) * 0.94 - time * 2.8)
        );
        return normalize(cross(gradientA, gradientB) + vec3(0.0001));
      }

      void main() {
        ivec2 pixel = ivec2(gl_FragCoord.xy);
        int particleIndex = pixel.y * uTextureSize + pixel.x;
        if (particleIndex >= uParticleCount) {
          outOffset = vec4(0.0);
          outVelocity = vec4(0.0);
          return;
        }

        vec4 offsetData = texelFetch(tOffset, pixel, 0);
        vec4 velocityData = texelFetch(tVelocity, pixel, 0);
        vec4 layoutFrom = texelFetch(tLayoutFrom, pixel, 0);
        vec4 layoutTo = texelFetch(tLayoutTo, pixel, 0);
        vec3 rest = mix(layoutFrom.xyz, layoutTo.xyz, morphProgress(uMorph));
        vec3 offset = offsetData.xyz;
        vec3 velocity = velocityData.xyz;
        vec3 particlePosition = rest + offset;
        float dt = clamp(uDelta, 0.0, 0.0333333);
        float seed = hash12(vec2(pixel));
        float response = 0.52 + seed * 1.0;

        vec4 clip = uMvp * vec4(particlePosition, 1.0);
        vec2 ndc = clip.xy / max(abs(clip.w), 0.0001);
        vec2 flowUv = clamp(ndc * 0.5 + 0.5, vec2(0.0), vec2(1.0));
        vec4 pointerFlowData = texture(tPointerFlow, flowUv);
        vec2 pointerVelocity = pointerFlowData.xy;
        float pointerSpeed = length(pointerVelocity);
        float interactionAmount = smoothstep(0.04, 0.72, pointerSpeed);
        float wakeAmount = smoothstep(0.035, 0.58, pointerFlowData.z);
        float recoveryHold = max(interactionAmount, smoothstep(0.02, 0.62, pointerFlowData.w) * 0.78);
        vec3 interactionForce = uScreenToLocal * vec3(pointerVelocity, 0.0);
        float interactionLength = length(interactionForce);
        if (interactionLength > 1.25) interactionForce *= 1.25 / interactionLength;

        float rawMorph = clamp(uMorph, 0.0, 1.0);
        float transitionEnergy = sin(morphProgress(rawMorph) * 3.14159265);
        vec3 ambientFlow = bitangentFlow(particlePosition * 1.12 + seed * 0.31, uTime * (1.0 + seed * 0.55));

        // All motion is integrated from force into persistent velocity. Nothing
        // below writes a cursor-derived displacement directly into position.
        velocity += interactionForce * 3.8 * response * dt;
        velocity += ambientFlow * (0.008 + transitionEnergy * 0.18 + interactionAmount * 0.12) * dt;
        float returnStrength = mix(2.15, 0.45, recoveryHold);
        float velocityDamping = mix(2.15, 0.92, recoveryHold);
        velocity += -offset * (returnStrength + transitionEnergy * 0.45) * dt;
        velocity *= exp(-(velocityDamping + transitionEnergy * 0.25) * dt);

        float speed = length(velocity);
        float maxSpeed = 0.72 + transitionEnergy * 0.18 + interactionAmount * 1.25;
        if (speed > maxSpeed) velocity *= maxSpeed / speed;
        offset += velocity * dt;

        float speedMix = 1.0 - exp(-9.5 * dt);
        float filteredSpeed = mix(velocityData.w, length(velocity), speedMix);
        float excitationDecay = exp(-1.25 * dt);
        float excitation = max(
          offsetData.w * excitationDecay,
          wakeAmount * (0.16 + seed * 0.30)
            + min(filteredSpeed * 0.24, wakeAmount * 0.20)
        );

        outOffset = vec4(offset, clamp(excitation, 0.0, 1.0));
        outVelocity = vec4(velocity, filteredSpeed);
      }
    `,
  });

  const quad = new THREE.Mesh(simGeometry, computeMaterial);
  quad.frustumCulled = false;
  simScene.add(quad);

  const previousTarget = renderer.getRenderTarget();
  const previousColor = new THREE.Color();
  renderer.getClearColor(previousColor);
  const previousAlpha = renderer.getClearAlpha();
  targets.forEach((target) => {
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, false, false);
  });
  renderer.setRenderTarget(previousTarget);
  renderer.setClearColor(previousColor, previousAlpha);

  return {
    textureSize,
    targets,
    readIndex: 0,
    scene: simScene,
    camera: simCamera,
    quad,
    material: computeMaterial,
    layoutFrom,
    layoutTo,
    currentTextures: targets[0].textures,
    setLayoutPair(fromLayout, toLayout) {
      writeLayoutTexture(layoutFrom, fromLayout);
      writeLayoutTexture(layoutTo, toLayout);
    },
  };
}

function createLayoutTexture(textureSize) {
  const data = new Float32Array(textureSize * textureSize * 4);
  const texture = new THREE.DataTexture(data, textureSize, textureSize, THREE.RGBAFormat, THREE.FloatType);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = false;
  texture.flipY = false;
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

function writeLayoutTexture(texture, layout) {
  const data = texture.image.data;
  data.fill(0);
  for (let i = 0; i < particleCount; i += 1) {
    data[i * 4] = layout[i * 3];
    data[i * 4 + 1] = layout[i * 3 + 1];
    data[i * 4 + 2] = layout[i * 3 + 2];
    data[i * 4 + 3] = 1;
  }
  texture.needsUpdate = true;
}

function renderLoaderParticles(time) {
  if (state.ready || !renderer || !world || !particlePoints) return;
  const visualTime = time * 0.001;
  const sharedVerticalRotation = -Math.sin(visualTime * SHARED_VERTICAL_SPEED) * SHARED_VERTICAL_SWING;
  const bob = Math.sin(visualTime * 0.62 + 0.4) * 0.13;
  const breatheX = Math.sin(visualTime * 0.52) * 0.026;
  const breatheY = Math.sin(visualTime * 0.43 + 1.6) * 0.032;
  const breatheZ = Math.sin(visualTime * 0.58 + 3.1) * 0.024;
  particlePoints.rotation.set(0, sharedVerticalRotation, 0);
  particlePoints.position.y = bob;
  particlePoints.scale.set(1 + breatheX, 1 + breatheY, 1 + breatheZ);
  material.uniforms.uTime.value = visualTime;
  renderer.render(world, camera);
  requestAnimationFrame(renderLoaderParticles);
}

function buildLayouts(logoImage) {
  return SCENES.map((scene) => {
    switch (scene.layout) {
      case "logo": return logoLayout(particleCount, logoImage);
      case "ontology-logo": return ontologyLogoLayout(particleCount, logoImage);
      case "workflow": return workflowLayout(particleCount);
      case "retro-computer": return retroComputerLayout(particleCount);
      case "stanford-lineage": return lineageLayout(particleCount);
      case "ontology-specimen": return ontologySpecimenLayout(particleCount);
      case "browser": return browserLayout(particleCount);
      case "charts": return chartsLayout(particleCount);
      case "impact": return impactLayout(particleCount);
      case "network": return networkLayout(particleCount);
      case "sources": return textLayout(particleCount, ["SOURCE", "→ DOCUMENT →"], 96);
      default: return scatterLayout(particleCount);
    }
  });
}

function bindInteractions() {
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerleave", onPointerLeave, { passive: true });
  window.addEventListener("pointerup", onPointerEnd, { passive: true });
  window.addEventListener("pointercancel", onPointerEnd, { passive: true });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
  window.addEventListener("touchend", onTouchEnd, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      state.paused = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    } else if (state.paused) {
      state.paused = false;
      state.lastTime = performance.now();
      animationFrameId = requestAnimationFrame(tick);
    }
  });
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    activateFallback();
  });
}

function onWheel(event) {
  if (!state.ready) return;
  if (event.target instanceof Element) {
    const card = event.target.closest(".scene-card.is-active");
    if (card && card.scrollHeight > card.clientHeight + 1) {
      const canScrollUp = event.deltaY < 0 && card.scrollTop > 1;
      const canScrollDown = event.deltaY > 0 && card.scrollTop + card.clientHeight < card.scrollHeight - 1;
      if (canScrollUp || canScrollDown) return;
    }
  }
  event.preventDefault();
  const now = performance.now();
  if (state.isSnapping || now < state.inputLockedUntil) return;

  if (now - state.lastWheelAt > 480) state.wheelBuffer = 0;
  state.lastWheelAt = now;

  const modeScale = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1;
  const normalized = THREE.MathUtils.clamp(event.deltaY * modeScale, -120, 120);
  state.wheelBuffer += normalized;

  if (Math.abs(state.wheelBuffer) >= 72) {
    const direction = Math.sign(state.wheelBuffer);
    state.wheelBuffer = 0;
    startAdjacentSnap(direction);
  }
}

function onKeyDown(event) {
  if (event.target instanceof Element && event.target.closest("a, button, input, select, textarea, [contenteditable='true']")) return;
  if (["ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    jumpRelative(1);
  } else if (["ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    jumpRelative(-1);
  } else if (event.key === "Home") {
    event.preventDefault();
    jumpToScene(0);
  } else if (event.key === "End") {
    event.preventDefault();
    jumpToScene(SCENES.length - 1);
  }
}

function onPointerMove(event) {
  if (event.pointerType && event.pointerType !== "mouse") return;

  const nextPointer = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
  );
  const eventTime = Number.isFinite(event.timeStamp) ? event.timeStamp : performance.now();

  if (!state.pointerHasSample) {
    state.pointerTarget.copy(nextPointer);
    state.pointerSample.copy(nextPointer);
    state.pointerSpeed = 0;
    state.pointerLastEventAt = eventTime;
    state.pointerHasSample = true;
    return;
  }

  const eventGap = eventTime - state.pointerLastEventAt;
  const pointerJump = nextPointer.distanceTo(state.pointerTarget);
  if (eventGap > 150 || pointerJump > 0.6) {
    state.pointerSample.copy(nextPointer);
    state.pointerSpeed = 0;
  } else {
    const eventDelta = THREE.MathUtils.clamp(eventGap / 1000, 1 / 240, 0.15);
    const aspect = window.innerWidth / window.innerHeight;
    const pointerDx = (nextPointer.x - state.pointerTarget.x) * aspect;
    const pointerDy = nextPointer.y - state.pointerTarget.y;
    const instantaneousSpeed = Math.hypot(pointerDx, pointerDy) / eventDelta;
    state.pointerSpeed = THREE.MathUtils.lerp(state.pointerSpeed, instantaneousSpeed, 0.55);
  }
  state.pointerTarget.copy(nextPointer);
  state.pointerLastEventAt = eventTime;
}

function onPointerLeave() {
  resetPointerInput();
}

function onPointerEnd(event) {
  if (event.type === "pointercancel" || event.pointerType !== "mouse") resetPointerInput();
}

function resetPointerInput() {
  state.pointerTarget.set(9, 9);
  state.pointerSample.set(9, 9);
  state.pointerSpeed = 0;
  state.pointerLastEventAt = 0;
  state.pointerHasSample = false;
}

function onTouchStart(event) {
  state.touchStartedInCard = event.target instanceof Element && Boolean(event.target.closest(".scene-card.is-active"));
  state.touchY = event.touches[0]?.clientY ?? null;
  state.touchBuffer = 0;
}

function onTouchMove(event) {
  if (state.touchStartedInCard) return;
  if (state.touchY === null) return;
  const y = event.touches[0]?.clientY;
  if (typeof y !== "number") return;
  event.preventDefault();
  const delta = state.touchY - y;
  state.touchY = y;
  if (state.isSnapping || performance.now() < state.inputLockedUntil) return;
  state.touchBuffer += delta;

  if (Math.abs(state.touchBuffer) >= 54) {
    const direction = Math.sign(state.touchBuffer);
    state.touchBuffer = 0;
    startAdjacentSnap(direction);
  }
}

function onTouchEnd() {
  state.touchY = null;
  state.touchBuffer = 0;
  state.touchStartedInCard = false;
}

function jumpRelative(direction) {
  if (state.isSnapping || performance.now() < state.inputLockedUntil) return;
  startAdjacentSnap(direction);
}

function jumpToScene(index) {
  const target = ((index % SCENES.length) + SCENES.length) % SCENES.length / SCENES.length;
  const pageDistance = Math.abs(shortestCircularDelta(state.progress, target)) * SCENES.length;
  const duration = Math.min(2600, 1280 + Math.max(0, pageDistance - 1) * 300);
  startSnapTo(index, duration, true);
}

function startAdjacentSnap(direction) {
  const next = (state.settledScene + direction + SCENES.length) % SCENES.length;
  startSnapTo(next, 1180, false);
}

function startSnapTo(index, duration = 980, allowInterrupt = false) {
  if (state.isSnapping && !allowInterrupt) return;
  const normalizedIndex = (index + SCENES.length) % SCENES.length;
  const target = normalizedIndex / SCENES.length;
  const delta = shortestCircularDelta(state.progress, target);

  if (Math.abs(delta) < 0.00001) {
    state.progress = target;
    state.target = target;
    state.settledScene = normalizedIndex;
    return;
  }

  state.snapFrom = state.progress;
  state.snapDelta = delta;
  state.gridSnapFrom = state.gridProgress;
  state.gridSnapDelta = delta * SCENES.length;
  state.snapStartedAt = performance.now();
  state.snapDuration = duration;
  state.target = target;
  state.isSnapping = true;
  state.wheelBuffer = 0;
  state.touchBuffer = 0;
}

function tick(time) {
  animationFrameId = 0;
  if (state.paused) return;
  const dt = Math.min((time - state.lastTime) / 1000, 0.05);
  state.lastTime = time;

  if (state.isSnapping) {
    const elapsed = time - state.snapStartedAt;
    const snapProgress = THREE.MathUtils.clamp(elapsed / state.snapDuration, 0, 1);
    const easedSnap = cinematicSnap(snapProgress);
    state.progress = wrap01(state.snapFrom + state.snapDelta * easedSnap);
    state.gridProgress = state.gridSnapFrom + state.gridSnapDelta * easedSnap;

    if (snapProgress >= 1) {
      state.progress = wrap01(state.target);
      state.gridProgress = state.gridSnapFrom + state.gridSnapDelta;
      state.settledScene = Math.round(state.target * SCENES.length) % SCENES.length;
      state.isSnapping = false;
      state.inputLockedUntil = time + 320;
    }
  }

  state.visualTime = time * 0.001;

  const scaled = wrap01(state.progress + 0.0000001) * SCENES.length;
  const sceneIndex = Math.floor(scaled) % SCENES.length;
  const localProgress = scaled - Math.floor(scaled);
  updateScene(sceneIndex, localProgress);
  experience.style.setProperty("--grid-shift", `${state.gridProgress * 68}px`);

  stepPointerFlow(time, dt);
  simulationAccumulator = Math.min(simulationAccumulator + dt, 1 / 20);
  let simulationSteps = 0;
  while (simulationAccumulator >= 1 / 60 && simulationSteps < 3) {
    stepParticleSimulation(time, 1 / 60, localProgress);
    simulationAccumulator -= 1 / 60;
    simulationSteps += 1;
  }
  material.uniforms.uMorph.value = localProgress;
  material.uniforms.uTime.value = state.visualTime;

  renderer.render(world, camera);
  animationFrameId = requestAnimationFrame(tick);
}

function stepPointerFlow(time, dt) {
  if (!pointerFlow || dt <= 0) return;

  const uniforms = pointerFlow.material.uniforms;
  let active = 0;

  if (state.pointerHasSample) {
    pointerFlowStart.set(
      state.pointerSample.x * 0.5 + 0.5,
      state.pointerSample.y * 0.5 + 0.5,
    );
    pointerFlowEnd.set(
      state.pointerTarget.x * 0.5 + 0.5,
      state.pointerTarget.y * 0.5 + 0.5,
    );
    pointerFlowDelta.copy(pointerFlowEnd).sub(pointerFlowStart);

    const eventAge = time - state.pointerLastEventAt;
    const segmentLength = pointerFlowDelta.length();
    const isContinuousMove = eventAge <= 150 && segmentLength > 0.0002 && segmentLength <= 0.3;
    const motionEnergy = THREE.MathUtils.smoothstep(state.pointerSpeed, 0.55, 2.5);
    if (isContinuousMove) active = motionEnergy;

    state.pointerSample.copy(state.pointerTarget);
  } else {
    pointerFlowStart.set(0.5, 0.5);
    pointerFlowEnd.copy(pointerFlowStart);
    pointerFlowDelta.set(0, 0);
  }

  uniforms.tVelocity.value = pointerFlow.targets[pointerFlow.readIndex].texture;
  uniforms.uDelta.value = Math.min(dt, 1 / 30);
  uniforms.uAspect.value = window.innerWidth / window.innerHeight;
  uniforms.uSplatStart.value.copy(pointerFlowStart);
  uniforms.uSplatEnd.value.copy(pointerFlowEnd);
  uniforms.uSplatForce.value.set(
    pointerFlowDelta.x * uniforms.uAspect.value * 35,
    pointerFlowDelta.y * 35,
  );
  uniforms.uSplatActive.value = active;

  const writeIndex = 1 - pointerFlow.readIndex;
  const previousTarget = renderer.getRenderTarget();
  const previousAutoClear = renderer.autoClear;
  renderer.setRenderTarget(pointerFlow.targets[writeIndex]);
  renderer.autoClear = false;
  renderer.render(pointerFlow.scene, pointerFlow.camera);
  renderer.setRenderTarget(previousTarget);
  renderer.autoClear = previousAutoClear;

  pointerFlow.readIndex = writeIndex;
  pointerFlow.currentTexture = pointerFlow.targets[writeIndex].texture;
}

function stepParticleSimulation(time, dt, localProgress) {
  particlePoints.updateMatrixWorld(true);
  camera.updateMatrixWorld(true);
  camera.matrixWorldInverse.copy(camera.matrixWorld).invert();

  simulationViewModel.multiplyMatrices(camera.matrixWorldInverse, particlePoints.matrixWorld);
  simulationMvp.multiplyMatrices(camera.projectionMatrix, simulationViewModel);
  inverseObjectRotation.extractRotation(particlePoints.matrixWorld).invert();
  screenToLocal.setFromMatrix4(inverseObjectRotation);

  const readTarget = simulation.targets[simulation.readIndex];
  const writeIndex = 1 - simulation.readIndex;
  const writeTarget = simulation.targets[writeIndex];
  const uniforms = simulation.material.uniforms;
  uniforms.tOffset.value = readTarget.textures[0];
  uniforms.tVelocity.value = readTarget.textures[1];
  uniforms.tPointerFlow.value = pointerFlow.currentTexture;
  uniforms.uMorph.value = localProgress;
  uniforms.uDelta.value = Math.min(dt, 1 / 30);
  uniforms.uTime.value = time * 0.001;
  uniforms.uMvp.value.copy(simulationMvp);
  uniforms.uScreenToLocal.value.copy(screenToLocal);

  const previousTarget = renderer.getRenderTarget();
  const previousAutoClear = renderer.autoClear;
  renderer.setRenderTarget(writeTarget);
  renderer.autoClear = false;
  renderer.render(simulation.scene, simulation.camera);
  renderer.setRenderTarget(previousTarget);
  renderer.autoClear = previousAutoClear;

  simulation.readIndex = writeIndex;
  simulation.currentTextures = writeTarget.textures;
  material.uniforms.tOffset.value = writeTarget.textures[0];
  material.uniforms.tVelocity.value = writeTarget.textures[1];
  material.uniforms.uMorph.value = localProgress;
}

function updateScene(sceneIndex, localProgress, force = false) {
  if (force || state.currentScene !== sceneIndex) {
    state.currentScene = sceneIndex;
    const nextIndex = (sceneIndex + 1) % SCENES.length;
    simulation.setLayoutPair(layouts[sceneIndex], layouts[nextIndex]);
  }

  const scene = SCENES[sceneIndex];
  const next = SCENES[(sceneIndex + 1) % SCENES.length];
  const eased = smooth(localProgress);
  const ontologyDistance = circularSceneDistance(ONTOLOGY_INDEX, sceneIndex, localProgress);
  const ontologyPresence = smooth01(THREE.MathUtils.clamp(1 - Math.abs(ontologyDistance) * 1.72, 0, 1));
  const bob = Math.sin(state.visualTime * 0.62 + 0.4) * 0.13;
  const breatheX = Math.sin(state.visualTime * 0.52) * 0.026;
  const breatheY = Math.sin(state.visualTime * 0.43 + 1.6) * 0.032;
  const breatheZ = Math.sin(state.visualTime * 0.58 + 3.1) * 0.024;
  const displayIndex = (sceneIndex + (localProgress >= 0.5 ? 1 : 0)) % SCENES.length;
  const mobileLift = isMobile ? THREE.MathUtils.lerp(scene.mobileY ?? 0, next.mobileY ?? 0, eased) : 0;
  navButtons.forEach((button, index) => {
    const active = index === displayIndex;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  sceneCurrent.textContent = String(displayIndex + 1).padStart(2, "0");
  camera.position.set(
    THREE.MathUtils.lerp(scene.camera[0], next.camera[0], eased),
    THREE.MathUtils.lerp(scene.camera[1], next.camera[1], eased),
    THREE.MathUtils.lerp(scene.camera[2], next.camera[2], eased),
  );
  // Blender's vertical Z axis maps to Three.js's vertical Y axis. Every
  // chapter uses the same slow, bounded rotation so the motion language stays
  // continuous while its particle layout changes.
  const sharedVerticalRotation = -Math.sin(state.visualTime * SHARED_VERTICAL_SPEED)
    * SHARED_VERTICAL_SWING;
  particlePoints.rotation.set(
    THREE.MathUtils.lerp(scene.rotation[0], next.rotation[0], eased),
    lerpAngle(scene.rotation[1], next.rotation[1], eased) + sharedVerticalRotation,
    THREE.MathUtils.lerp(scene.rotation[2], next.rotation[2], eased),
  );
  particlePoints.position.set(
    ontologyPresence * (isMobile ? 0 : 0.7),
    mobileLift + bob,
    0,
  );
  particlePoints.scale.set(
    1 + breatheX,
    1 + breatheY,
    1 + breatheZ,
  );
  material.uniforms.uPointSize.value = baseParticlePointSize * THREE.MathUtils.lerp(
    scene.pointScale ?? 1,
    next.pointScale ?? 1,
    eased,
  );
  material.uniforms.uAmbientMotion.value = 1;
  updateOntologyOverlay(ontologyPresence);
  sceneCards.forEach((card, index) => {
    const distance = circularSceneDistance(index, sceneIndex, localProgress);
    const opacity = Math.max(0, 1 - Math.abs(distance) * 1.85);
    const travel = distance * -78;
    const scale = 1 - Math.min(Math.abs(distance), 1) * 0.035;
    card.style.opacity = opacity.toFixed(3);
    card.style.transform = `translate3d(var(--x), calc(var(--y) + ${travel}px), 0) scale(${scale}) rotateX(${distance * 2.4}deg)`;
    card.style.visibility = opacity < 0.015 ? "hidden" : "visible";
    card.classList.toggle("is-active", index === displayIndex);
    card.setAttribute("aria-hidden", opacity < 0.25 ? "true" : "false");
    card.toggleAttribute("inert", opacity < 0.25);
  });

  const chapterProgress = Math.min(1, (sceneIndex + localProgress) / (SCENES.length - 1));
  railProgress.style.height = `${chapterProgress * 100}%`;
}

function updateOntologyOverlay(presence) {
  if (!ontologyOverlay) return;
  const lineDraw = smooth01(THREE.MathUtils.clamp((presence - 0.12) / 0.68, 0, 1));
  const labelReveal = smooth01(THREE.MathUtils.clamp((presence - 0.42) / 0.48, 0, 1));
  ontologyOverlay.style.opacity = presence.toFixed(3);
  ontologyOverlay.style.visibility = presence < 0.012 ? "hidden" : "visible";
  ontologyOverlay.style.setProperty("--line-offset", (1 - lineDraw).toFixed(3));
  ontologyOverlay.style.setProperty("--label-opacity", labelReveal.toFixed(3));
  ontologyOverlay.setAttribute("aria-hidden", presence < 0.25 ? "true" : "false");

  if (presence < 0.012 || !particlePoints || !camera || !ontologyLinework) return;

  particlePoints.updateMatrixWorld(true);
  camera.updateMatrixWorld(true);

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const compact = viewportWidth <= 640;
  const landscapeColumns = viewportWidth >= 900 && viewportWidth > viewportHeight;
  const margin = compact ? 12 : 24;
  const railClearance = compact ? 70 : 138;
  ontologyLinework.setAttribute("viewBox", `0 0 ${viewportWidth} ${viewportHeight}`);

  ontologyProjectedCenter
    .set(0, isMobile ? ONTOLOGY_MOBILE_LAYOUT_Y : 0, 0)
    .applyMatrix4(particlePoints.matrixWorld)
    .project(camera);
  const objectCenterX = (ontologyProjectedCenter.x * 0.5 + 0.5) * viewportWidth;
  const landscapeHalfWidth = viewportHeight * 0.3;
  const landscapeLeftGuide = Math.min(
    viewportWidth / 3,
    objectCenterX - landscapeHalfWidth - 20,
  );
  const landscapeRightGuide = Math.max(
    viewportWidth * 2 / 3,
    objectCenterX + landscapeHalfWidth + 20,
  );

  const placements = ontologyCallouts.flatMap((callout) => {
    if (!callout.label || !callout.line || !callout.marker) return [];
    if (compact && callout.label.dataset.tier === "secondary") return [];

    ontologyProjectedAnchor.copy(callout.localAnchor);
    if (isMobile) {
      ontologyProjectedAnchor.x *= ONTOLOGY_MOBILE_ANCHOR_SCALE;
      ontologyProjectedAnchor.y = ontologyProjectedAnchor.y
        * ONTOLOGY_MOBILE_ANCHOR_SCALE + ONTOLOGY_MOBILE_LAYOUT_Y;
      ontologyProjectedAnchor.z *= ONTOLOGY_MOBILE_LAYOUT_SCALE;
    }
    ontologyProjectedAnchor
      .applyMatrix4(particlePoints.matrixWorld)
      .project(camera);

    const anchorX = (ontologyProjectedAnchor.x * 0.5 + 0.5) * viewportWidth;
    const anchorY = (-ontologyProjectedAnchor.y * 0.5 + 0.5) * viewportHeight;
    const yOffset = compact ? callout.mobileYOffset : callout.yOffset;
    const labelWidth = callout.label.offsetWidth || (compact ? 112 : 156);
    const labelHeight = callout.label.offsetHeight || (compact ? 28 : 34);
    const edgeInset = compact ? 6 : 14;
    const edgeDrift = THREE.MathUtils.clamp(
      (anchorX - objectCenterX) * (compact ? 0.035 : 0.06),
      compact ? -7 : -14,
      compact ? 7 : 14,
    );

    let labelX = anchorX;
    if (callout.side === "left") {
      labelX = landscapeColumns
        ? landscapeLeftGuide - labelWidth + edgeDrift
        : margin + edgeInset + edgeDrift;
    }
    if (callout.side === "right") {
      labelX = landscapeColumns
        ? landscapeRightGuide + edgeDrift
        : viewportWidth - railClearance - labelWidth - edgeInset + edgeDrift;
    }
    if (callout.side === "center") labelX -= labelWidth * 0.5;
    let labelY = anchorY + yOffset;

    labelX = THREE.MathUtils.clamp(labelX, margin, viewportWidth - railClearance - labelWidth);
    labelY = THREE.MathUtils.clamp(labelY, compact ? 76 : 86, compact ? viewportHeight * 0.46 : viewportHeight - margin - labelHeight);
    return [{ callout, anchorX, anchorY, labelX, labelY, labelWidth, labelHeight }];
  });

  ["left", "right"].forEach((side) => {
    const group = placements
      .filter((placement) => placement.callout.side === side)
      .sort((a, b) => a.labelY - b.labelY);
    if (!group.length) return;

    const minimumY = compact ? 96 : 86;
    const maximumY = compact
      ? Math.min(viewportHeight * 0.22, 188)
      : side === "left"
        ? viewportHeight * 0.4
        : viewportHeight - 38;
    const gap = compact ? 11 : 15;
    let cursor = minimumY;
    group.forEach((placement) => {
      placement.labelY = THREE.MathUtils.clamp(
        placement.labelY,
        minimumY,
        maximumY - placement.labelHeight,
      );
      placement.labelY = Math.max(placement.labelY, cursor);
      cursor = placement.labelY + placement.labelHeight + gap;
    });

    for (let index = group.length - 1; index >= 0; index -= 1) {
      const placement = group[index];
      if (index === group.length - 1) {
        placement.labelY = Math.min(placement.labelY, maximumY - placement.labelHeight);
        continue;
      }
      const next = group[index + 1];
      placement.labelY = Math.min(
        placement.labelY,
        next.labelY - placement.labelHeight - gap,
      );
    }

    if (group[0].labelY < minimumY) {
      const correction = minimumY - group[0].labelY;
      group.forEach((placement) => {
        placement.labelY += correction;
      });
    }
  });

  placements.forEach(({ callout, anchorX, anchorY, labelX, labelY, labelWidth, labelHeight }) => {
    callout.label.style.transform = `translate3d(${labelX.toFixed(1)}px, ${labelY.toFixed(1)}px, 0)`;

    let labelEdgeX;
    let labelEdgeY;
    let elbowX;
    let elbowY;
    if (callout.side === "center") {
      labelEdgeX = labelX + labelWidth * 0.5;
      labelEdgeY = labelY - 9;
      elbowX = labelEdgeX;
      elbowY = THREE.MathUtils.lerp(labelEdgeY, anchorY, 0.48);
    } else {
      labelEdgeX = callout.side === "left" ? labelX + labelWidth + 9 : labelX - 9;
      labelEdgeY = labelY + labelHeight * 0.52;
      elbowX = THREE.MathUtils.lerp(labelEdgeX, anchorX, 0.52);
      elbowY = labelEdgeY;
    }

    callout.line.setAttribute(
      "points",
      `${labelEdgeX.toFixed(1)},${labelEdgeY.toFixed(1)} ${elbowX.toFixed(1)},${elbowY.toFixed(1)} ${anchorX.toFixed(1)},${anchorY.toFixed(1)}`,
    );
    callout.marker.setAttribute(
      "d",
      `M${(anchorX - 7).toFixed(1)} ${anchorY.toFixed(1)}h14M${anchorX.toFixed(1)} ${(anchorY - 7).toFixed(1)}v14`,
    );
  });
}

function wrapAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function lerpAngle(from, to, amount) {
  const delta = wrapAngle(to - from);
  return from + delta * amount;
}

function circularSceneDistance(index, activeIndex, localProgress) {
  let distance = index - (activeIndex + localProgress);
  const half = SCENES.length / 2;
  if (distance > half) distance -= SCENES.length;
  if (distance < -half) distance += SCENES.length;
  return distance;
}

function resize() {
  if (!renderer || !camera) return;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.fov = window.innerWidth < 680 ? 58 : 48;
  camera.updateProjectionMatrix();
}

function setLoadProgress(value) {
  loaderProgress.textContent = `${value}%`;
  loaderBar.style.width = `${value}%`;
}

function supportsWebGL2() {
  try {
    const testCanvas = document.createElement("canvas");
    return Boolean(window.WebGL2RenderingContext && testCanvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

function activateFallback() {
  state.paused = true;
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  animationFrameId = 0;
  document.documentElement.classList.add("fallback-mode");
  experience.hidden = true;
  fallback.hidden = false;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function scatterLayout(count, spread = 1) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const radius = (1.4 + Math.pow(Math.random(), 0.55) * 6.6) * spread;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    points[i * 3] = Math.sin(phi) * Math.cos(theta) * radius * 1.25;
    points[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius * 0.72;
    points[i * 3 + 2] = Math.cos(phi) * radius * 0.68;
  }
  return points;
}

function logoLayout(
  count,
  image,
  { edgeJitter = 0.025, depthSpread = 0.35, depthLimit = Number.POSITIVE_INFINITY } = {},
) {
  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 320;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(image, 0, 0, 320, 320);
  const pixels = context.getImageData(0, 0, 320, 320).data;
  const candidates = [];
  for (let y = 30; y < 292; y += 2) {
    for (let x = 30; x < 292; x += 2) {
      const offset = (y * 320 + x) * 4;
      const r = pixels[offset];
      const g = pixels[offset + 1];
      const b = pixels[offset + 2];
      const luminance = r * 0.2126 + g * 0.7152 + b * 0.0722;
      if (luminance < 222 && b - r > 4 && b - g > 1) candidates.push([x, y]);
    }
  }
  if (candidates.length < 400) return textLayout(count, ["D3"], 220);

  const points = new Float32Array(count * 3);
  const logoScale = isMobile ? LOGO_MOBILE_SCALE : LOGO_DESKTOP_SCALE;
  for (let i = 0; i < count; i += 1) {
    const [x, y] = candidates[Math.floor(Math.random() * candidates.length)];
    const depth = THREE.MathUtils.clamp(gaussian() * depthSpread, -depthLimit, depthLimit);
    points[i * 3] = (x / 320 - 0.5) * logoScale + gaussian() * edgeJitter;
    points[i * 3 + 1] = -(y / 320 - 0.5) * logoScale + gaussian() * edgeJitter + (isMobile ? 0.7 : 0);
    points[i * 3 + 2] = depth;
  }
  return points;
}

function ontologyLogoLayout(count, image) {
  const points = logoLayout(count, image, {
    edgeJitter: ONTOLOGY_LOGO_EDGE_JITTER,
    depthSpread: ONTOLOGY_LOGO_DEPTH_SPREAD,
    depthLimit: ONTOLOGY_LOGO_DEPTH_LIMIT,
  });
  if (!isMobile) return points;

  for (let i = 0; i < count; i += 1) {
    points[i * 3] *= ONTOLOGY_MOBILE_LAYOUT_SCALE;
    points[i * 3 + 1] = (
      points[i * 3 + 1] - ONTOLOGY_MOBILE_LAYOUT_Y
    ) * ONTOLOGY_MOBILE_LAYOUT_SCALE + ONTOLOGY_MOBILE_LAYOUT_Y;
    points[i * 3 + 2] *= ONTOLOGY_MOBILE_LAYOUT_SCALE;
  }
  return points;
}

function textLayout(count, lines, fontSize) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 600;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = `600 ${fontSize}px IBM Plex Mono, monospace`;
  const lineHeight = fontSize * 1.45;
  const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((line, index) => context.fillText(line, canvas.width / 2, startY + index * lineHeight, 1110));
  return sampleCanvas(count, context, canvas.width, canvas.height, 8.2, 4.1);
}

function workflowLayout(count) {
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 900;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const nodeWidth = 380;
  const nodeHeight = 164;
  const nodeRadius = 34;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "white";
  context.fillStyle = "white";
  context.lineWidth = 15;
  context.lineCap = "round";
  context.lineJoin = "round";

  drawCanvasArrow(context, 470, 250, 610, 250);
  drawCanvasArrow(context, 990, 250, 1130, 250);
  drawCanvasArrow(context, 1320, 332, 1320, 568);
  drawCanvasArrow(context, 1130, 650, 990, 650);
  drawCanvasArrow(context, 610, 650, 470, 650);

  WORKFLOW_NODES.forEach((node) => {
    roundedRectPath(
      context,
      node.x - nodeWidth / 2,
      node.y - nodeHeight / 2,
      nodeWidth,
      nodeHeight,
      nodeRadius,
    );
    context.stroke();
  });

  const metrics = workflowLayoutMetrics();
  const points = sampleCanvas(count, context, canvas.width, canvas.height, metrics.scaleX, 4.05);
  const inheritedMobileOffset = isMobile ? 0.8 : 0;
  for (let i = 0; i < count; i += 1) {
    points[i * 3] += metrics.xOffset;
    points[i * 3 + 1] += metrics.yOffset - inheritedMobileOffset;
  }
  return points;
}

function workflowLayoutMetrics() {
  if (isMobile) return { scaleX: 4.8, xOffset: 0, yOffset: 0.8 };
  if (window.innerWidth <= 900) return { scaleX: 5.2, xOffset: -0.5, yOffset: 0.65 };
  return { scaleX: 6.55, xOffset: -1.75, yOffset: 0 };
}

function drawCanvasArrow(context, fromX, fromY, toX, toY) {
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const headLength = 34;
  context.beginPath();
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();
  context.beginPath();
  context.moveTo(toX, toY);
  context.lineTo(toX - Math.cos(angle - Math.PI / 6) * headLength, toY - Math.sin(angle - Math.PI / 6) * headLength);
  context.lineTo(toX - Math.cos(angle + Math.PI / 6) * headLength, toY - Math.sin(angle + Math.PI / 6) * headLength);
  context.closePath();
  context.fill();
}

function roundedRectPath(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.lineTo(x + width - r, y);
  context.quadraticCurveTo(x + width, y, x + width, y + r);
  context.lineTo(x + width, y + height - r);
  context.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  context.lineTo(x + r, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - r);
  context.lineTo(x, y + r);
  context.quadraticCurveTo(x, y, x + r, y);
  context.closePath();
}

function stanfordLogoLayout(count, image) {
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.clearRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  const pixels = context.getImageData(0, 0, width, height).data;
  const candidates = [];

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const offset = (y * width + x) * 4;
      const luminance = pixels[offset] * 0.2126 + pixels[offset + 1] * 0.7152 + pixels[offset + 2] * 0.0722;
      if (pixels[offset + 3] > 72 && luminance < 128) candidates.push([x, y]);
    }
  }

  if (candidates.length < 200) return textLayout(count, ["STANFORD"], 150);
  const points = new Float32Array(count * 3);
  const yOffset = isMobile ? 0.75 : 0;
  const xOffset = isMobile ? 0 : -1.05;
  for (let i = 0; i < count; i += 1) {
    const [x, y] = candidates[Math.floor(Math.random() * candidates.length)];
    points[i * 3] = (x / width - 0.5) * 4.15 + gaussian() * 0.018 + xOffset;
    points[i * 3 + 1] = -(y / height - 0.5) * 6.25 + gaussian() * 0.018 + yOffset;
    points[i * 3 + 2] = gaussian() * 0.28;
  }
  return points;
}

function retroComputerLayout(count) {
  const points = new Float32Array(count * 3);
  const yOffset = isMobile ? 0.72 : 0;

  for (let i = 0; i < count; i += 1) {
    const part = Math.random();
    if (part < 0.28) {
      writeTaperedMonitorPoint(points, i, -0.8, 0.56, -1.12, 1.18, 2.85, 2.35, 4.05, 3.2);
    } else if (part < 0.33) {
      writeCrtScreenPoint(points, i, -0.8, 0.58, 1.24, 3.18, 2.08);
    } else if (part < 0.48) {
      writeMonitorBezelPoint(points, i);
    } else if (part < 0.66) {
      writeBoxSurfacePoint(points, i, 2.42, 0.12, 0.02, 1.48, 3.58, 2.18, 0.02);
    } else if (part < 0.7) {
      writeTowerDetailPoint(points, i);
    } else if (part < 0.78) {
      if (Math.random() < 0.42) {
        writeBoxSurfacePoint(points, i, -0.8, -1.15, 0.05, 0.72, 0.72, 0.72, 0.018);
      } else {
        writeBoxSurfacePoint(points, i, -0.8, -1.46, 0.12, 2.35, 0.28, 1.45, 0.018);
      }
    } else if (part < 0.9) {
      writeKeyboardBasePoint(points, i);
    } else {
      writeKeyboardKeyPoint(points, i);
    }
    points[i * 3] = points[i * 3] * 0.84 + 0.34;
    points[i * 3 + 1] = points[i * 3 + 1] * 0.84 + yOffset;
    points[i * 3 + 2] *= 0.84;
  }

  return points;
}

function writeTaperedMonitorPoint(points, index, cx, cy, backZ, frontZ, backWidth, backHeight, frontWidth, frontHeight) {
  const face = Math.random();
  let x;
  let y;
  let z;
  if (face < 0.18) {
    x = cx + (Math.random() - 0.5) * backWidth;
    y = cy + (Math.random() - 0.5) * backHeight;
    z = backZ;
  } else {
    z = THREE.MathUtils.lerp(backZ, frontZ, Math.random());
    const t = (z - backZ) / (frontZ - backZ);
    const width = THREE.MathUtils.lerp(backWidth, frontWidth, t);
    const height = THREE.MathUtils.lerp(backHeight, frontHeight, t);
    const side = Math.floor(Math.random() * 4);
    if (side === 0 || side === 1) {
      x = cx + (side === 0 ? -1 : 1) * width * 0.5;
      y = cy + (Math.random() - 0.5) * height;
    } else {
      x = cx + (Math.random() - 0.5) * width;
      y = cy + (side === 2 ? -1 : 1) * height * 0.5;
    }
  }
  writePoint(points, index, x, y, z, 0.025);
}

function writeCrtScreenPoint(points, index, cx, cy, frontZ, width, height) {
  let u = Math.random() * 2 - 1;
  let v = Math.random() * 2 - 1;
  while (Math.pow(Math.abs(u), 4) + Math.pow(Math.abs(v), 4) > 1.52) {
    u = Math.random() * 2 - 1;
    v = Math.random() * 2 - 1;
  }
  const bulge = Math.max(0, 1 - u * u * 0.54 - v * v * 0.54);
  writePoint(points, index, cx + u * width * 0.5, cy + v * height * 0.5, frontZ + bulge * 0.2, 0.018);
}

function writeMonitorBezelPoint(points, index) {
  const side = Math.floor(Math.random() * 4);
  if (side === 0) writeBoxSurfacePoint(points, index, -2.61, 0.56, 1.14, 0.43, 3.18, 0.5, 0.018);
  if (side === 1) writeBoxSurfacePoint(points, index, 1.01, 0.56, 1.14, 0.43, 3.18, 0.5, 0.018);
  if (side === 2) writeBoxSurfacePoint(points, index, -0.8, 1.94, 1.14, 4.04, 0.43, 0.5, 0.018);
  if (side === 3) writeBoxSurfacePoint(points, index, -0.8, -0.83, 1.14, 4.04, 0.54, 0.5, 0.018);
}

function writeTowerDetailPoint(points, index) {
  if (Math.random() < 0.72) {
    const row = Math.random() < 0.55 ? 0.78 : 0.35;
    writePoint(points, index, 2.42 + (Math.random() - 0.5) * 0.88, row + gaussian() * 0.035, 1.13, 0.012);
  } else {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.15 + gaussian() * 0.012;
    writePoint(points, index, 2.42 + Math.cos(angle) * radius, -1.08 + Math.sin(angle) * radius, 1.13, 0.01);
  }
}

function writeKeyboardBasePoint(points, index) {
  const local = sampleBoxSurface(4.8, 0.24, 1.48);
  writeRotatedXPoint(points, index, -0.45, -1.76, 1.24, local[0], local[1], local[2], -0.16, 0.018);
}

function writeKeyboardKeyPoint(points, index) {
  const columns = 13;
  const rows = 4;
  const column = Math.floor(Math.random() * columns);
  const row = Math.floor(Math.random() * rows);
  const localX = (column - (columns - 1) / 2) * 0.335 + gaussian() * 0.055;
  const localZ = (row - (rows - 1) / 2) * 0.285 + gaussian() * 0.05;
  writeRotatedXPoint(points, index, -0.45, -1.62, 1.24, localX, 0.13, localZ, -0.16, 0.014);
}

function writeBoxSurfacePoint(points, index, cx, cy, cz, width, height, depth, jitter = 0.02) {
  const local = sampleBoxSurface(width, height, depth);
  writePoint(points, index, cx + local[0], cy + local[1], cz + local[2], jitter);
}

function sampleBoxSurface(width, height, depth) {
  const areaFront = width * height;
  const areaTop = width * depth;
  const areaSide = height * depth;
  const total = (areaFront + areaTop + areaSide) * 2;
  let pick = Math.random() * total;
  if (pick < areaFront * 2) {
    return [(Math.random() - 0.5) * width, (Math.random() - 0.5) * height, (pick < areaFront ? -1 : 1) * depth * 0.5];
  }
  pick -= areaFront * 2;
  if (pick < areaTop * 2) {
    return [(Math.random() - 0.5) * width, (pick < areaTop ? -1 : 1) * height * 0.5, (Math.random() - 0.5) * depth];
  }
  pick -= areaTop * 2;
  return [(pick < areaSide ? -1 : 1) * width * 0.5, (Math.random() - 0.5) * height, (Math.random() - 0.5) * depth];
}

function writeRotatedXPoint(points, index, cx, cy, cz, x, y, z, rotation, jitter) {
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  writePoint(points, index, cx + x, cy + y * cos - z * sin, cz + y * sin + z * cos, jitter);
}

function writePoint(points, index, x, y, z, jitter = 0) {
  points[index * 3] = x + gaussian() * jitter;
  points[index * 3 + 1] = y + gaussian() * jitter;
  points[index * 3 + 2] = z + gaussian() * jitter;
}

function sampleCanvas(count, context, width, height, scaleX, scaleY) {
  const data = context.getImageData(0, 0, width, height).data;
  const candidates = [];
  const step = 4;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (data[(y * width + x) * 4 + 3] > 80) candidates.push([x, y]);
    }
  }
  if (!candidates.length) return scatterLayout(count);
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const [x, y] = candidates[Math.floor(Math.random() * candidates.length)];
    points[i * 3] = (x / width - 0.5) * scaleX + gaussian() * 0.02;
    points[i * 3 + 1] = -(y / height - 0.5) * scaleY + gaussian() * 0.02 + (isMobile ? 0.8 : 0);
    points[i * 3 + 2] = gaussian() * 0.22;
  }
  return points;
}

function gridLayout(count) {
  const points = new Float32Array(count * 3);
  const cols = 13;
  const rows = 8;
  for (let i = 0; i < count; i += 1) {
    const cell = i % (cols * rows);
    const col = cell % cols;
    const row = Math.floor(cell / cols);
    points[i * 3] = (col / (cols - 1) - 0.5) * 7.8 + gaussian() * 0.09;
    points[i * 3 + 1] = (row / (rows - 1) - 0.5) * 4.4 + gaussian() * 0.09;
    points[i * 3 + 2] = gaussian() * 0.16 - 0.2;
  }
  return points;
}

function lineageLayout(count) {
  const points = new Float32Array(count * 3);
  const yOffset = isMobile ? 0.78 : 0;
  const xOffset = isMobile ? 0 : -0.55;
  const nodes = [
    [-2.75, 1.45, 0.05, 0.58],
    [-2.75, 0, 0.02, 0.58],
    [-2.75, -1.45, 0.05, 0.58],
    [-0.55, 0, 0.55, 0.92],
    [1.35, 0, 0.18, 0.66],
  ];
  const edges = [
    [0, 3], [1, 3], [2, 3], [3, 4],
  ];

  for (let i = 0; i < count; i += 1) {
    if (i % 5 < 3) {
      const nodeIndex = i % 7 < 3 ? i % 3 : i % 7 < 6 ? 3 : 4;
      const [cx, cy, cz, radius] = nodes[nodeIndex];
      const angle = Math.random() * Math.PI * 2;
      const localRadius = Math.pow(Math.random(), 1.7) * radius;
      points[i * 3] = cx + Math.cos(angle) * localRadius + xOffset;
      points[i * 3 + 1] = cy + Math.sin(angle) * localRadius + yOffset;
      points[i * 3 + 2] = cz + gaussian() * 0.2;
    } else {
      const [fromIndex, toIndex] = edges[i % edges.length];
      const from = nodes[fromIndex];
      const to = nodes[toIndex];
      const t = Math.random();
      points[i * 3] = THREE.MathUtils.lerp(from[0], to[0], t) + gaussian() * 0.035 + xOffset;
      points[i * 3 + 1] = THREE.MathUtils.lerp(from[1], to[1], t) + gaussian() * 0.035 + yOffset;
      points[i * 3 + 2] = THREE.MathUtils.lerp(from[2], to[2], t) + gaussian() * 0.06;
    }
  }
  return points;
}

function networkLayout(count) {
  const points = new Float32Array(count * 3);
  const nodes = [
    [-2.9, 1.4, 0.1], [-1.3, -1.6, 0], [0, 1.8, 0.2], [1.6, -1.35, -0.1], [3.0, 1.1, 0.15], [0.1, 0, 0.6],
  ];
  for (let i = 0; i < count; i += 1) {
    if (i % 5 === 0) {
      const a = nodes[i % nodes.length];
      const b = nodes[(i * 3 + 1) % nodes.length];
      const t = Math.random();
      points[i * 3] = THREE.MathUtils.lerp(a[0], b[0], t) + gaussian() * 0.025;
      points[i * 3 + 1] = THREE.MathUtils.lerp(a[1], b[1], t) + gaussian() * 0.025;
      points[i * 3 + 2] = THREE.MathUtils.lerp(a[2], b[2], t) + gaussian() * 0.025;
    } else {
      const node = nodes[Math.floor(Math.random() * nodes.length)];
      const radius = Math.pow(Math.random(), 1.8) * 0.62;
      const angle = Math.random() * Math.PI * 2;
      points[i * 3] = node[0] + Math.cos(angle) * radius;
      points[i * 3 + 1] = node[1] + Math.sin(angle) * radius;
      points[i * 3 + 2] = node[2] + gaussian() * 0.28;
    }
  }
  return points;
}

function ontologySpecimenLayout(count) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    if (i % 13 === 0) {
      // A sparse internal helix prevents the specimen from reading as a
      // generic sphere whenever the outer shell parts under the cursor.
      const t = Math.random() * 2 - 1;
      const angle = t * Math.PI * 3.4 + Math.random() * 0.3;
      const radius = 0.22 + (1 - t * t) * 0.5;
      points[i * 3] = Math.cos(angle) * radius + gaussian() * 0.06;
      points[i * 3 + 1] = t * 2.15 + gaussian() * 0.05;
      points[i * 3 + 2] = Math.sin(angle) * radius * 0.7 + gaussian() * 0.05;
    } else {
      const azimuth = Math.random() * Math.PI * 2;
      const polarY = Math.random() * 2 - 1;
      const polarRadius = Math.sqrt(Math.max(0, 1 - polarY * polarY));
      const directionX = Math.cos(azimuth) * polarRadius;
      const directionZ = Math.sin(azimuth) * polarRadius;
      const ripple = 1
        + Math.sin(azimuth * 3 + polarY * 3.2) * 0.13
        + Math.cos(azimuth * 5 - polarY * 4.6) * 0.075
        + Math.sin(azimuth * 2 - polarY * 7.1) * 0.045;
      const shell = 0.48 + Math.pow(Math.random(), 0.2) * 0.52;
      const radius = 2.05 * ripple * shell;
      const y = polarY * radius * 1.14;
      points[i * 3] = directionX * radius * 0.98 + Math.sin(y * 1.18) * 0.14;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = directionZ * radius * 0.72 + Math.sin(azimuth * 2 + polarY) * 0.045;
    }
  }
  return points;
}

function browserLayout(count) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const section = i % 5;
    if (section === 0) {
      points[i * 3] = (Math.random() - 0.5) * 7.3;
      points[i * 3 + 1] = 2.1 + gaussian() * 0.035;
    } else if (section === 1) {
      points[i * 3] = -3.65 + gaussian() * 0.035;
      points[i * 3 + 1] = (Math.random() - 0.5) * 4.2;
    } else if (section === 2) {
      points[i * 3] = 3.65 + gaussian() * 0.035;
      points[i * 3 + 1] = (Math.random() - 0.5) * 4.2;
    } else if (section === 3) {
      points[i * 3] = (Math.random() - 0.5) * 7.3;
      points[i * 3 + 1] = -2.1 + gaussian() * 0.035;
    } else {
      const x = (Math.random() - 0.5) * 5.4;
      points[i * 3] = x;
      points[i * 3 + 1] = Math.sin(x * 1.55) * 0.75 + gaussian() * 0.15;
    }
    points[i * 3 + 2] = gaussian() * 0.16;
  }
  return points;
}

function chartsLayout(count) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const region = i % 4;
    if (region === 0) {
      const bar = Math.floor(Math.random() * 6);
      const height = 0.4 + bar * 0.28;
      points[i * 3] = -3.5 + bar * 0.42 + gaussian() * 0.12;
      points[i * 3 + 1] = -1.8 + Math.random() * height;
    } else if (region === 1) {
      const x = Math.random() * 2.5 - 1.2;
      points[i * 3] = x;
      points[i * 3 + 1] = 1.25 + Math.sin(x * 3.1) * 0.62 + gaussian() * 0.1;
    } else if (region === 2) {
      points[i * 3] = 1.2 + Math.random() * 2.7;
      points[i * 3 + 1] = -1.7 + Math.random() * 1.6 + gaussian() * 0.06;
    } else {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.55 + Math.random() * 0.9;
      points[i * 3] = 2.25 + Math.cos(angle) * radius;
      points[i * 3 + 1] = 1.25 + Math.sin(angle) * radius * 0.6;
    }
    points[i * 3 + 2] = gaussian() * 0.22;
  }
  return points;
}

function impactLayout(count) {
  const points = new Float32Array(count * 3);
  const orbitCount = 5;
  for (let i = 0; i < count; i += 1) {
    const orbit = i % orbitCount;
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.0 + orbit * 0.68 + gaussian() * 0.045;
    points[i * 3] = Math.cos(angle) * radius;
    points[i * 3 + 1] = Math.sin(angle) * radius * 0.68;
    points[i * 3 + 2] = Math.sin(angle * 2 + orbit) * 0.48 + gaussian() * 0.06;
  }
  return points;
}

function draftsLayout(count) {
  const points = new Float32Array(count * 3);
  const columns = 5;
  for (let i = 0; i < count; i += 1) {
    const column = i % columns;
    const x = (column - (columns - 1) / 2) * 1.25;
    const height = 1.4 + column * 0.24;
    points[i * 3] = x + gaussian() * 0.2;
    points[i * 3 + 1] = -1.8 + Math.random() * height * 2;
    points[i * 3 + 2] = gaussian() * 0.35 + (column % 2) * 0.2;
  }
  return points;
}

function gaussian() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function smooth(value) {
  return value * value * (3 - 2 * value);
}

function smooth01(value) {
  return smooth(THREE.MathUtils.clamp(value, 0, 1));
}

function cinematicSnap(value) {
  return value * value * (3 - 2 * value);
}

function wrap01(value) {
  return ((value % 1) + 1) % 1;
}

function shortestCircularDelta(from, to) {
  let delta = to - from;
  if (delta > 0.5) delta -= 1;
  if (delta < -0.5) delta += 1;
  return delta;
}
