/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
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
  NodeResizeControl,
} from "@xyflow/react";
import { Popover, PopoverTrigger, PopoverContent, Link } from "@heroui/react";

import { ZoomSlider } from "./zoom-slider";

import "@xyflow/react/dist/style.css";
import { Button } from "@heroui/react";
import { EqualApproximatelyIcon, Lamp, LocateIcon, PlusCircle } from "lucide-react";
const sizes = [
  { name: "Square", ratio: "1:1", width: 360, height: 360 },
  { name: "Instagram", ratio: "9:16", width: 360, height: 640 },
  { name: "YouTube", ratio: "16:9", width: 640, height: 360 },
];
const defaultNodes = [
  {
    id: "-1",
    type: "baseNode",
    data: {
      position: { aspectRatios: "Square" },
      label: "HELLO -1",
    },
    position: { x: -520, y: 0 },
  },
  {
    id: "0",
    type: "baseNode",
    data: {
      position: { aspectRatios: "Square" },
      label: "HELLO 0",
    },
    position: { x: -150, y: 0 },
  },
  {
    id: "1",
    type: "baseNode",
    data: { position: { aspectRatios: "Instagram" }, label: "HELLO" },
    position: { x: 220, y: 0 },
  },
  {
    id: "2",
    type: "baseNode",
    data: { position: { aspectRatios: "YouTube" }, label: "HELLO" },
    position: { x: 730, y: 0 },
  },
];

const BaseNode = ({ data }) => {
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const show = hovered || focused;
  const size =
    sizes.find((s) => s.name === data.position.aspectRatios) ?? sizes[0];
  const width = size.width;
  const height = size.height;

  return (
    <div
      className="p-0 m-0 bg-white rounded-md shadow-none relative outline-none"
      style={{
        width: width,
        height: height,
        border: "1px solid #E9EAED",
      }}
      tabIndex={0}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute -top-10 w-full h-10 bg-white/30 backdrop-blur-xl rounded-md border-none shadow-none flex items-center justify-end px-2 transition-all duration-300 ease-soft-spring ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } gap-2`}
      >
        <Button isIconOnly radius="full" size="sm" variant="flat">
          <PlusCircle size={16} />
        </Button>
        <Popover placement="bottom" size="sm">
          <PopoverTrigger>
            <Button size="sm">Aspect</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2 w-full flex flex-col gap-2 text-2xl">
              <Button radius="md" size="lg" variant="flat">
                1:1 Square
              </Button>
              <Button radius="md" size="lg" variant="flat">
                16:9 Landscape
              </Button>
              <Button radius="md" size="lg" variant="flat">
                9:16 Vertical
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <NodeResizeControl
        maxHeight={height}
        maxWidth={width}
        minHeight={height}
        minWidth={width}
        style={{
          display: "none",
        }}
      />
      <Handle
        position={Position.Top}
        style={{ display: "none" }}
        type="target"
      />
      {data.label}
      {/* {data.position.width} x {data.position.height} */}
      {/* {(data.position.width * data.position.width) & data.position.width} */}
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
        maxZoom={2}
        minZoom={0.5}
        nodeOrigin={[0.5, 0]}
        nodeTypes={nodeTypes}
        nodes={nodes}
        style={{ backgroundColor: "#E9EAED" }}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      >
        <Background color="#fff" variant={BackgroundVariant.Dots} />
        <ZoomSlider position="bottom-right" />
        <section className="absolute top-20 left-5 z-10 p-2 flex w-14 h-auto bg-white border shadow-none rounded-full flex-col justify-center items-center gap-2">
          <Popover placement="left-start" size="sm">
            <PopoverTrigger>
              <Button isIconOnly radius="full" size="md" variant="flat">
                <PlusCircle size={24} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 w-full flex flex-col gap-2 text-2xl">
                <Button radius="md" size="lg" variant="flat">
                  1:1 Square
                </Button>
                <Button radius="md" size="lg" variant="flat">
                  16:9 Landscape
                </Button>
                <Button radius="md" size="lg" variant="flat">
                  9:16 Vertical
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Popover placement="left-start" size="sm">
            <PopoverTrigger>
              <Button isIconOnly radius="full" size="md" variant="flat">
                <EqualApproximatelyIcon size={24} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 w-full flex flex-col gap-2 text-2xl">
                <Button radius="md" size="lg" variant="flat">
                  1:1 Square
                </Button>
                <Button radius="md" size="lg" variant="flat">
                  16:9 Landscape
                </Button>
                <Button radius="md" size="lg" variant="flat">
                  9:16 Vertical
                </Button>
              </div>
            </PopoverContent>
          </Popover>
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
          <Button isIconOnly radius="full" variant="flat" as={Link} href="/">
            <Lamp size={16} />
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
