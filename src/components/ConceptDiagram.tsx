import { Level } from "../types";

interface ConceptDiagramProps {
  visualizationType?: Level["visualizationType"];
}

export default function ConceptDiagram({ visualizationType }: ConceptDiagramProps) {
  if (!visualizationType) return null;

  const diagrams: Record<NonNullable<Level["visualizationType"]>, { title: string; nodes: string[] }> = {
    "compiler-view": {
      title: "Compiler Flow",
      nodes: ["Source Code", "→", "Type Checker", "→", "Clean Output"],
    },
    "object-visualizer": {
      title: "Object Shape",
      nodes: ["{ title", "date", "capacity }"],
    },
    "interface-blueprint": {
      title: "Interface Blueprint",
      nodes: ["interface Event", "├ title: string", "├ date: string", "└ capacity: number"],
    },
    "type-graph": {
      title: "Type Relationships",
      nodes: ["Event", "→ extends →", "WorkshopEvent"],
    },
    "union-flow": {
      title: "Union Narrowing",
      nodes: ["KingdomEvent", "├ Concert", "├ Workshop", "└ Meetup"],
    },
    "generic-machine": {
      title: "Generic Machine",
      nodes: ["findById<T>", "input: T[]", "output: T | undefined"],
    },
    "component-tree": {
      title: "Component Tree",
      nodes: ["<DataCard<T>>", "props: T", "render: T → UI"],
    },
    "form-validator": {
      title: "Form Validator",
      nodes: ["FormState", "→ validate →", "BookingInput"],
    },
    "function-pipeline": {
      title: "Function Pipeline",
      nodes: ["Request", "→ handler", "→ Response"],
    },
    "utility-type-transformer": {
      title: "Utility Transform",
      nodes: ["Event", "→ Partial<Event>", "→ Pick / Omit"],
    },
  };

  const diagram = diagrams[visualizationType];
  if (!diagram) return null;

  return (
    <div className="p-4 rounded-xl bg-surface-container-low border border-secondary/20 space-y-2">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-secondary">
        Concept Map — {diagram.title}
      </span>
      <div className="font-mono text-[11px] text-primary space-y-0.5">
        {diagram.nodes.map((node, i) => (
          <div key={i} className="text-on-surface-variant">
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
