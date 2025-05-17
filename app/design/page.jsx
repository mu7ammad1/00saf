/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
"use client";
import React, { useCallback, useRef } from "react";
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
  useReactFlow,
} from "@xyflow/react";
import { Popover, PopoverTrigger, PopoverContent, Link } from "@heroui/react";

import { ZoomSlider } from "./zoom-slider";

import "@xyflow/react/dist/style.css";
import { Button } from "@heroui/react";
import {
  EqualApproximatelyIcon,
  Lamp,
  LocateIcon,
  PlusCircle,
} from "lucide-react";

const sizes = [
  { name: "Square", ratio: "1:1", width: 360, height: 360 },
  { name: "Vertical", ratio: "9:16", width: 360, height: 640 },
  { name: "Landscape", ratio: "16:9", width: 640, height: 360 },
];
const defaultNodes = [
  {
    id: "0",
    type: "baseNode",
    data: {
      position: { aspectRatios: "Landscape" },
      label: "HELLO 0",
    },
    position: { x: 0, y: 0 },
  },
];

const BaseNode = ({ data, id, deleteNode }) => {
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
        <Button
          isIconOnly
          radius="full"
          size="sm"
          variant="flat"
          onClick={() => deleteNode(id)}
        >
          ❌
        </Button>
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
        position={Position.Left}
        className={`w-full h-10 bg-white/30 backdrop-blur-xl rounded-md border-none shadow-none flex items-center justify-end px-2 transition-all duration-300 ease-soft-spring ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } gap-2`}
        onClick={(e) => e.stopPropagation()}
        style={{ width: "2.5rem", height: "2.5rem", display: "none" }}
        type="target"
      />
      {data.label}
      <Handle
        position={Position.Right}
        className={`w-full h-10 bg-white/30 backdrop-blur-xl rounded-md border-none shadow-none flex items-center justify-end px-2 transition-all duration-300 ease-soft-spring ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } gap-2`}
        style={{ width: "2.5rem", height: "2.5rem", display: "none" }}
        onClick={(e) => e.stopPropagation()}
        type="source"
      />
    </div>
  );
};

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const rawData = event.dataTransfer.getData("application/reactflow");

      if (!rawData) return;

      const { nodeType, aspectRatios } = JSON.parse(rawData);

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${Date.now()}`,
        type: "baseNode",
        position,
        data: {
          label: `${nodeType} node`,
          position: { aspectRatios },
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes, nodes.length]
  );

  const onDragStart = (event, nodeType, aspectRatios) => {
    const size = sizes.find((s) => s.name === aspectRatios);

    if (!size) return;

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({
        id: `${Date.now()}`,
        nodeType,
        aspectRatios,
        width: size.width,
        height: size.height,
      })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const deleteNode = useCallback(
    (id) => {
      setNodes((nds) => nds.filter((node) => node.id !== id));
      setEdges((eds) =>
        eds.filter((edge) => edge.source !== id && edge.target !== id)
      );
    },
    [setNodes, setEdges]
  );

  const nodeTypes = {
    baseNode: (props) => <BaseNode {...props} deleteNode={deleteNode} />,
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
        style={{ backgroundColor: "#F7F9FB" }}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
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
                {sizes.map(({ name, width, height }) => (
                  <Button
                    key={name}
                    draggable
                    className="cursor-move border rounded-md bg-white flex items-center justify-center text-xs text-gray-700 font-medium"
                    radius="md"
                    size="lg"
                    style={{
                      width: width / 4, // تصغير العرض عشان ما تاخد مساحة كبيرة
                      height: height / 4, // تصغير الارتفاع
                      border: "1px solid #E0E0E0",
                    }}
                    variant="flat"
                    onDragStart={(event) =>
                      onDragStart(event, "baseNode", name)
                    }
                  >
                    {name}
                  </Button>
                ))}
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
          <Button isIconOnly as={Link} href="/" radius="full" variant="flat">
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
