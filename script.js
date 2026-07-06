const ontologyItems = [
  {
    name: "Data",
    description: "The input material that D3 connects to visual elements."
  },
  {
    name: "DOM",
    description: "The browser document structure that D3 selects and changes."
  },
  {
    name: "SVG",
    description: "A web standard for drawing shapes, paths, maps, and charts."
  },
  {
    name: "HTML",
    description: "The page structure that can also become part of a visualization."
  },
  {
    name: "CSS",
    description: "The styling layer that helps define visual appearance."
  },
  {
    name: "JavaScript",
    description: "The programming language that allows D3 to transform data into documents."
  },
  {
    name: "Selections",
    description: "The way D3 chooses page elements before binding data or changing them."
  },
  {
    name: "Data Joins",
    description: "The process that connects data values to document elements."
  },
  {
    name: "Scales",
    description: "Functions that translate data values into visual values such as position, size, or color."
  },
  {
    name: "Axes",
    description: "Visual guides that explain how values are positioned."
  },
  {
    name: "Transitions",
    description: "Animated changes that show how visual elements update over time."
  },
  {
    name: "Interaction",
    description: "User actions such as hover, zoom, brush, and click."
  },
  {
    name: "Documentation",
    description: "The written guide that teaches how the library can be used."
  },
  {
    name: "Examples",
    description: "Public visualizations that show D3 as a practice, not only a library."
  },
  {
    name: "Source Code",
    description: "The open codebase that makes the project inspectable and reusable."
  },
  {
    name: "Community",
    description: "The developers, designers, researchers, and journalists who extend the project."
  }
];

const visual = document.getElementById("ontology-visual");
const caption = document.getElementById("ontology-caption");

if (visual && caption && window.d3) {
  let width = visual.clientWidth || 760;
  let height = visual.clientHeight || 430;
  let activeNode = null;

  const svg = d3
    .select(visual)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("role", "img");

  const nodes = ontologyItems.map((item, index) => {
    const labelWidth = Math.max(78, item.name.length * 8 + 34);

    return {
      ...item,
      index,
      width: labelWidth,
      height: 36,
      radius: Math.max(labelWidth / 2, 28),
      phase: index * 0.82,
      speed: 0.35 + (index % 5) * 0.06,
      xAmplitude: 26 + (index % 4) * 7,
      yAmplitude: 18 + (index % 3) * 8,
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2
    };
  });

  placeAnchors();

  const labels = svg
    .selectAll("g")
    .data(nodes)
    .join("g")
    .attr("class", "ontology-node")
    .on("click", function(event, node) {
      setActiveNode(node);
      event.stopPropagation();
    });

  labels
    .append("rect")
    .attr("x", d => -d.width / 2)
    .attr("y", d => -d.height / 2)
    .attr("width", d => d.width)
    .attr("height", d => d.height)
    .attr("rx", 18);

  labels
    .append("text")
    .text(d => d.name);

  d3.timer(elapsed => {
    updatePositions(elapsed / 1000);
  });

  d3.select(visual)
    .on("mousemove", function(event) {
      const [mouseX, mouseY] = d3.pointer(event, this);
      const closest = findClosestNode(mouseX, mouseY);
      setActiveNode(closest && closest.distance < 120 ? closest.node : null);
    })
    .on("mouseleave", function() {
      setActiveNode(null);
    });

  d3.select(window).on("resize", resize);

  function updatePositions(time) {
    nodes.forEach(node => {
      const smallOrbit = Math.sin(time * (node.speed * 0.7) + node.phase * 1.6) * 10;
      node.x = node.anchorX + Math.sin(time * node.speed + node.phase) * node.xAmplitude + smallOrbit;
      node.y = node.anchorY + Math.cos(time * (node.speed + 0.18) + node.phase) * node.yAmplitude;
      node.x = Math.max(node.radius, Math.min(width - node.radius, node.x));
      node.y = Math.max(node.radius, Math.min(height - node.radius, node.y));
    });

    labels.attr("transform", d => {
      const scale = d === activeNode ? 1.08 : 1;
      return `translate(${d.x}, ${d.y}) scale(${scale})`;
    });
  }

  function findClosestNode(mouseX, mouseY) {
    let closest = null;

    nodes.forEach(node => {
      const distance = Math.hypot(node.x - mouseX, node.y - mouseY);

      if (!closest || distance < closest.distance) {
        closest = { node, distance };
      }
    });

    return closest;
  }

  function setActiveNode(node) {
    if (activeNode === node) {
      return;
    }

    activeNode = node;
    labels.classed("active", d => d === activeNode);

    caption.textContent = activeNode
      ? `${activeNode.name}: ${activeNode.description}`
      : "Move near a floating term to see how it works inside D3.js.";
  }

  function resize() {
    width = visual.clientWidth || 760;
    height = visual.clientHeight || 430;
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    placeAnchors();
    updatePositions(Date.now() / 1000);
  }

  function placeAnchors() {
    const columns = width < 520 ? 3 : 4;
    const rows = Math.ceil(nodes.length / columns);
    const marginX = width < 520 ? 66 : 92;
    const marginY = 56;
    const innerWidth = Math.max(width - marginX * 2, 120);
    const innerHeight = height - marginY * 2;

    nodes.forEach(node => {
      const column = node.index % columns;
      const row = Math.floor(node.index / columns);
      const xStep = columns > 1 ? innerWidth / (columns - 1) : 0;
      const yStep = rows > 1 ? innerHeight / (rows - 1) : 0;

      node.anchorX = marginX + column * xStep;
      node.anchorY = marginY + row * yStep;
      node.targetX = node.anchorX;
      node.targetY = node.anchorY;
    });
  }
} else if (visual && caption) {
  caption.textContent = "The interactive D3 ontology map could not load.";
}
