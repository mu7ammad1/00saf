"use client";
import React, { useRef } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Controls,
  Handle,
  Position,
  BackgroundVariant,
  NodeToolbar,
  NodeResizeControl,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { Button } from "@heroui/react";
import { LocateIcon } from "lucide-react";

const defaultNodes = [
  {
    id: "0",
    type: "baseNode",
    data: { label: "HELLO WORLD" },
    position: { x: 0, y: 50 },
  },
  {
    id: "1",
    type: "baseNode",
    data: { label: "HELLO WORLD" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "baseNode",
    data: { label: "HELLO WORLD" },
    position: { x: 0, y: 50 },
  },
];

const BaseNode = ({ data }) => {
  const controlStyle = {
    background: "transparent",
    border: "none",
  };

  return (
    <div className="p-4 border-none shadow-none">
      <NodeToolbar isVisible={data.toolbarVisible} position={Position.Bottom}>
        <Button variant="bordered">delete</Button>
      </NodeToolbar>
      {/* <NodeResizer
        color="#ff0071"
        isVisible={data.resizerVisible}
        // keepAspectRatio={true}
        lineStyle={{ stroke: "#ff0071", strokeWidth: 5 }}
        shouldResize={() => true}
        onResizeStart={() => {
          console.log("resize start");
        }}
        maxHeight={800}
        maxWidth={800}
        minHeight={50}
        minWidth={50}
      /> */}
      <NodeResizeControl minHeight={200} minWidth={200} maxHeight={500} maxWidth={500} style={controlStyle}>
        <ResizeIcon />
      </NodeResizeControl>

      <Handle
        position={Position.Top}
        style={{ display: "none" }}
        type="target"
      />
      <div>{data.label}</div>
      <Handle
        position={Position.Bottom}
        style={{ display: "none" }}
        type="source"
      />
    </div>
  );
};

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeTypes = {
    baseNode: BaseNode,
  };

  return (
    <div ref={reactFlowWrapper} className="wrapper">
      <ReactFlow
        fitView
        className="touch-flow"
        edges={edges}
        fitViewOptions={{ padding: 2 }}
        maxZoom={5}
        minZoom={0.5}
        nodeOrigin={[0.5, 0]}
        nodeTypes={nodeTypes}
        nodes={nodes}
        style={{ backgroundColor: "#E9EAED" }}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      >
        <Background color="#E9EAED" variant={BackgroundVariant.Dots} />
        <Controls />
        <section className="absolute top-20 left-5 z-10 p-2 flex w-14 h-auto bg-white border shadow-none rounded-full flex-col justify-center items-center gap-2">
          <Button isIconOnly radius="full" variant="flat">
            <LocateIcon size={16} />
          </Button>
          <Button isIconOnly radius="full" variant="flat">
            <LocateIcon size={16} />
          </Button>
          <Button isIconOnly radius="full" variant="flat">
            <LocateIcon size={16} />
          </Button>
          <Button isIconOnly radius="full" variant="flat">
            <LocateIcon size={16} />
          </Button>
        </section>
        <section className="absolute top-3 left-5 z-10 p-2 flex w-14 h-14 bg-white border shadow-none rounded-full flex-col justify-center items-center">
          <Button isIconOnly radius="full" variant="flat">
            <LocateIcon size={16} />
          </Button>
        </section>
      </ReactFlow>
    </div>
  );
};

function Design() {
  return (
    <ReactFlowProvider>
      <AddNodeOnEdgeDrop />
    </ReactFlowProvider>
  );
}

export default Design;

function ResizeIcon() {
  return (
    <svg
      fill="none"
      height="20"
      stroke="#ff0071"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      style={{ position: "absolute", right: 5, bottom: 5 }}
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" x2="20" y1="14" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" x2="10" y1="4" y2="10" />
    </svg>
  );
}
