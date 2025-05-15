/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";
import React, { useRef } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Handle,
  Position,
  BackgroundVariant,
  NodeToolbar,
  NodeResizeControl,
} from "@xyflow/react";

import { ZoomSlider } from "./zoom-slider";

import "@xyflow/react/dist/style.css";
import { Button } from "@heroui/react";
import { LocateIcon } from "lucide-react";

const defaultNodes = [
  {
    id: "0",
    type: "baseNode",
    data: { position: { width: 200, height: 200 }, label: "HELLO" },
    position: { x: 0, y: 0 },
  },
  {
    id: "1",
    type: "baseNode",
    data: { position: { width: 450, height: 300 }, label: "HELLO" },
    position: { x: 220, y: 0 },
  },
  {
    id: "2",
    type: "baseNode",
    data: { position: { width: 100, height: 100 }, label: "HELLO" },
    position: { x: 440, y: 0 },
  },
];

const BaseNode = ({ data }) => {
  return (
    <div
      className={`p-0 m-0 rounded-md shadow-none border relative *:hover:block *:hidden`}
      style={{
        width: data.position.width,
        height: data.position.height,
        backgroundColor: "#fff",
        border: "1px solid #E9EAED",
      }}
    >
      <div className="absolute -top-10 w-full h-10 bg-white rounded-md border shadow-none">
        000
      </div>
      <NodeToolbar isVisible={data.toolbarVisible} position={Position.Top}>
        <Button variant="bordered">delete</Button>
      </NodeToolbar>
      <NodeResizeControl
        maxHeight={data.position.height}
        maxWidth={data.position.width}
        minHeight={data.position.height}
        minWidth={data.position.width}
        style={{
          display: "none",
        }}
      >
        {/* <ResizeIcon /> */}
      </NodeResizeControl>
      <Handle
        position={Position.Top}
        style={{ display: "none" }}
        type="target"
      />
      {/* {data.label} */}
      {data.position.width} x {data.position.height}
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
    <div
      ref={reactFlowWrapper}
      className="wrapper rounded-md *:*:*:*:*:*:rounded-md"
    >
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
        <ZoomSlider position="bottom-right" />
        {/* <ButtonHandle
          type="target"
          position={Position.Bottom}
          showButton={!connectionInProgress}
        >
          <Button
            onClick={onClick}
            size="sm"
            variant="secondary"
            className="rounded-full"
          >
            <PlusCircle size={10} />
          </Button>
        </ButtonHandle> */}

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
