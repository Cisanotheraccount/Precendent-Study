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
  const height = 360;
  let width = visual.clientWidth || 760;
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
      width: labelWidth,
      height: 36,
      radius: Math.max(labelWidth / 2, 28),
      x: 80 + Math.random() * Math.max(width - 160, 120),
      y: 60 + Math.random() * (height - 120),
      drift: index * 0.7
    };
  });

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

  const simulation = d3
    .forceSimulation(nodes)
    .alphaTarget(0.04)
    .velocityDecay(0.28)
    .force("x", d3.forceX(width / 2).strength(0.015))
    .force("y", d3.forceY(height / 2).strength(0.018))
    .force("collide", d3.forceCollide(d => d.radius + 5).iterations(2))
    .on("tick", ticked);

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

  function ticked() {
    const time = Date.now() / 1000;

    nodes.forEach(node => {
      node.vx += Math.sin(time + node.drift) * 0.003;
      node.vy += Math.cos(time * 0.9 + node.drift) * 0.003;
      node.x = Math.max(node.radius, Math.min(width - node.radius, node.x));
      node.y = Math.max(node.radius, Math.min(height - node.radius, node.y));
    });

    labels.attr("transform", d => `translate(${d.x}, ${d.y})`);
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
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    simulation.force("x", d3.forceX(width / 2).strength(0.015));
    simulation.alpha(0.4).restart();
  }
} else if (visual && caption) {
  caption.textContent = "The interactive D3 ontology map could not load.";
}
