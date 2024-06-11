// containing an initial set of nodes for the flowchart
import { MarkerType } from "reactflow";
export const initialNodes = [
  {
    id: "1",
    type: "customNode",
    data: { label: "test message 1" },
    position: { x: 300, y: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "2",
    type: "customNode",
    data: { label: "test message 2" },
    position: { x: 100, y: 10 },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "3",
    type: "customNode",
    data: { label: "test message 4" },
    position: { x: 500, y: 9 },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
];

// representing the initial set of edges (connections) between nodes in the flowchart.
export const initialEdges = [];

// This is an object containing different types of draggable items that can be used in the flowchart
export const ItemTypes = {
  NODE: "node",
};
