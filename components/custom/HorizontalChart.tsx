// components/HorizontalChart.tsx

import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  Edge,
  Node,
  Position,
  Connection,
  ConnectionLineType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  { id: '1', type: 'input', data: { label: 'Root Node' }, position: { x: 0, y: 150 }, sourcePosition: Position.Right },
  { id: '2', data: { label: 'Child Node 1' }, position: { x: 200, y: 0 }, targetPosition: Position.Left, sourcePosition: Position.Right },
  { id: '3', data: { label: 'Child Node 2' }, position: { x: 200, y: 150 }, targetPosition: Position.Left, sourcePosition: Position.Right },
  { id: '4', data: { label: 'Child Node 3' }, position: { x: 200, y: 300 }, targetPosition: Position.Left },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', animated: true },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', animated: true },
];

const HorizontalChart: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onConnect = useCallback((params: Edge | Connection) => setEdges((els) => addEdge(params, els)), []);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default HorizontalChart;
