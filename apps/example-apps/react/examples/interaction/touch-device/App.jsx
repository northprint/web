import { useCallback } from 'react';
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  Position,
  addEdge,
} from '@xyflow/react';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 100, y: 100 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 300, y: 100 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
];

const initialEdges = [];

const TouchDeviceFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      className="touch-flow"
      fitView
      style={{ backgroundColor: "#F7F9FB" }}
      >
        <Background />
      </ReactFlow>  
  );
};

export default TouchDeviceFlow;
