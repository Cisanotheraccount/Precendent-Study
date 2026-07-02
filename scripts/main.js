const dataUrl = "data/d3-datasheet.json";

const fields = [
  ["Title", (d) => d.project.title],
  ["Year", (d) => d.project.year],
  ["Format", (d) => d.project.format],
  ["Primary creator", (d) => d.project.primaryCreator],
  ["Original paper authors", (d) => d.project.paperAuthors.join(", ")],
  ["Major contributors", (d) => d.project.majorContributors.join(", ")],
  ["DOI", (d) => d.project.doi],
  ["Intended audience", (d) => d.project.intendedAudience.join(", ")],
  ["Project URL", (d) => d.project.projectUrl],
  ["Source code", (d) => d.project.sourceCodeUrl],
  ["Original paper", (d) => d.project.paperUrl],
  ["One-sentence description", (d) => d.project.oneSentence, "wide"]
];

async function init() {
  const response = await fetch(dataUrl);
  const dataset = await response.json();

  renderDatasheet(dataset);
  renderTextSections(dataset);
  renderSources(dataset.sources);
  renderQuestions(dataset.criticalQuestions);
  renderFlowDiagram(dataset.methods);
  bindFilters(dataset.sources);
}

function renderDatasheet(dataset) {
  const root = document.querySelector("#datasheet-grid");
  root.innerHTML = fields
    .map(([label, accessor, className]) => {
      const value = accessor(dataset);
      const linked =
        typeof value === "string" && value.startsWith("https://")
          ? `<a href="${value}" target="_blank" rel="noreferrer">${value}</a>`
          : value;
      return `
        <article class="data-row ${className || ""}">
          <span class="data-label">${label}</span>
          <div class="data-value">${linked}</div>
        </article>
      `;
    })
    .join("");
}

function renderTextSections(dataset) {
  document.querySelector("#historical-context").textContent =
    dataset.sections.historicalContext.join(" ");
  document.querySelector("#visual-logic").textContent =
    dataset.sections.visualLogic;
  document.querySelector("#community").textContent =
    dataset.sections.communityOfPractice;
}

function renderSources(sources, filter = "all") {
  const visible =
    filter === "all" ? sources : sources.filter((source) => source.group === filter);

  document.querySelector("#source-list").innerHTML = visible
    .map(
      (source) => `
      <article class="source-card">
        <div class="source-id">${String(source.id).padStart(2, "0")}</div>
        <div>
          <h3><a href="${source.url}" target="_blank" rel="noreferrer">${
        source.title
      }</a></h3>
          <p class="source-meta">${source.author} · ${source.year}</p>
          <p class="source-use">${source.use}</p>
        </div>
        <span class="source-type">${source.type}</span>
      </article>
    `
    )
    .join("");
}

function renderQuestions(questions) {
  document.querySelector("#question-list").innerHTML = questions
    .map((question) => `<li>${question}</li>`)
    .join("");
}

function bindFilters(sources) {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".filter")
        .forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSources(sources, button.dataset.filter);
    });
  });
}

function renderFlowDiagram(methods) {
  const svg = d3.select("#flow-diagram");
  const panel = svg.node().parentElement;
  const width = panel.clientWidth;
  const height = panel.clientHeight || 440;
  svg.attr("viewBox", `0 0 ${width} ${height}`);

  const core = [
    { name: "Data", x: 0.14, y: 0.28 },
    { name: "Data join", x: 0.36, y: 0.28 },
    { name: "DOM", x: 0.58, y: 0.28 },
    { name: "SVG / HTML", x: 0.8, y: 0.28 },
    { name: "Interaction", x: 0.58, y: 0.68 },
    { name: "Reader", x: 0.8, y: 0.68 },
    { name: "Scales", x: 0.36, y: 0.68 },
    { name: "Shapes", x: 0.14, y: 0.68 }
  ].map((node) => ({
    ...node,
    x: node.x * width,
    y: node.y * height
  }));

  const links = [
    ["Data", "Data join"],
    ["Data join", "DOM"],
    ["DOM", "SVG / HTML"],
    ["SVG / HTML", "Reader"],
    ["Data", "Scales"],
    ["Scales", "Shapes"],
    ["Shapes", "DOM"],
    ["Interaction", "DOM"],
    ["Reader", "Interaction"]
  ].map(([source, target]) => ({
    source: core.find((node) => node.name === source),
    target: core.find((node) => node.name === target)
  }));

  svg
    .selectAll(".link")
    .data(links)
    .join("path")
    .attr("class", "link")
    .attr("d", (d) => {
      const midX = (d.source.x + d.target.x) / 2;
      return `M${d.source.x},${d.source.y} C${midX},${d.source.y} ${midX},${d.target.y} ${d.target.x},${d.target.y}`;
    });

  const nodes = svg.selectAll(".node").data(core).join("g").attr("class", "node");

  nodes.attr("transform", (d) => `translate(${d.x},${d.y})`);

  nodes
    .append("rect")
    .attr("x", -58)
    .attr("y", -22)
    .attr("width", 116)
    .attr("height", 44)
    .attr("rx", 8);

  nodes
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .text((d) => d.name);

  svg
    .append("text")
    .attr("x", 18)
    .attr("y", height - 18)
    .attr("fill", "#666866")
    .attr("font-size", 12)
    .text(`${methods.length} method components rendered from the dataset`);
}

window.addEventListener("resize", () => {
  d3.select("#flow-diagram").selectAll("*").remove();
  fetch(dataUrl)
    .then((response) => response.json())
    .then((dataset) => renderFlowDiagram(dataset.methods));
});

init();
