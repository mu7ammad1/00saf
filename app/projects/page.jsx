"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Panel,
  MiniMap,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Input, Button } from "@heroui/react";

import { ZoomSlider } from "./ZoomSlider";
import TextUpdaterNode from "./TextUpdaterNode";

const flowKey = "example-flow";

const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: "123" },
    DragEvent: true,
  },
];

const initialEdges = [];

const nodeOrigin = [0.5, 0];

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { setViewport } = useReactFlow();
  const [rfInstance, setRfInstance] = useState(null);
  const { screenToFlowPosition } = useReactFlow();

  // دالة لتحديث بيانات العقدة
  const onNodeChange = useCallback(
    (nodeId, newData) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId ? { ...node, data: newData } : node,
        ),
      );
    },
    [setNodes],
  );

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();

      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;

        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setEdges, setViewport]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: "textUpdater",
      data: { value: "123", onNodeChange }, // تمرير onNodeChange
      animated: true,
      position: {
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
      },
    };

    setNodes((nds) => nds.concat(newNode));
  }, [setNodes, onNodeChange]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onConnectEnd = useCallback(
    (event, connectionState) => {
      if (!connectionState.isValid) {
        const id = getNodeId();
        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          type: "textUpdater",
          position: screenToFlowPosition({ x: clientX, y: clientY }),
          data: { value: ``, onNodeChange }, // تمرير onNodeChange
          animated: true,
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectionState.fromNode.id,
            target: id,
            animated: true,
          }),
        );
      }
    },
    [screenToFlowPosition, setNodes, setEdges, onNodeChange],
  );

  const handleTransform = useCallback(() => {
    setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 800 });
  }, [setViewport]);

  const onNodeDragStart = (event, node) => console.log("بدء السحب", node);
  const onNodeDragStop = (event, node) => console.log("توقف السحب", node);
  const onNodeClick = (event, node) => console.log("النقر على العقدة", node);
  const onPaneClick = (event) => console.log("النقر على اللوحة", event);
  const onPaneScroll = (event) => console.log("التمرير على اللوحة", event);
  const onPaneContextMenu = (event) =>
    console.log("قائمة السياق على اللوحة", event);

  const [isSelectable, setIsSelectable] = useState(true);
  const [isDraggable, setIsDraggable] = useState(true);
  const [isConnectable, setIsConnectable] = useState(true);
  const [zoomOnScroll, setZoomOnScroll] = useState(true);
  const [panOnScroll, setPanOnScroll] = useState(false);
  const [panOnScrollMode, setPanOnScrollMode] = useState("free");
  const [zoomOnDoubleClick, setZoomOnDoubleClick] = useState(true);
  const [panOnDrag, setPanOnDrag] = useState(true);
  const [captureZoomClick, setCaptureZoomClick] = useState(true);
  const [captureZoomScroll, setCaptureZoomScroll] = useState(true);
  const [captureElementClick, setCaptureElementClick] = useState(true);

  // إضافة onNodeChange إلى جميع العقد
  const updatedNodes = useMemo(
    () =>
      nodes.map((node) => ({ ...node, data: { ...node.data, onNodeChange } })),
    [nodes, onNodeChange],
  );

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = useCallback((evt) => {
    setInputValue(evt.target.value);
  }, []);

  return (
    <div
      ref={reactFlowWrapper}
      className="wrapper"
      style={{ height: "100vh", width: "100%", padding: "0px", margin: "0px" }}
    >
      <ReactFlow
        fitView
        attributionPosition="top-right"
        className="touch-flow"
        edges={edges}
        elementsSelectable={isSelectable}
        fitViewOptions={{ padding: 0 }}
        nodeOrigin={nodeOrigin}
        nodeTypes={nodeTypes}
        nodes={updatedNodes}
        nodesConnectable={isConnectable}
        nodesDraggable={isDraggable}
        panOnDrag={panOnDrag}
        panOnScroll={panOnScroll}
        panOnScrollMode={panOnScrollMode}
        style={{ backgroundColor: "#000000" }}
        zoomOnDoubleClick={zoomOnDoubleClick}
        zoomOnScroll={zoomOnScroll}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        onEdgesChange={onEdgesChange}
        onInit={setRfInstance}
        onNodeClick={captureElementClick ? onNodeClick : undefined}
        onNodeDragStart={onNodeDragStart}
        onNodeDragStop={onNodeDragStop}
        onNodesChange={onNodesChange}
        onPaneClick={captureZoomClick ? onPaneClick : undefined}
        onPaneContextMenu={captureZoomClick ? onPaneContextMenu : undefined}
        onPaneScroll={captureZoomScroll ? onPaneScroll : undefined}
      >
        {/* <MiniMap /> */}
        {/* <Controls /> */}
        <Panel
          className="flex justify-center items-center gap-1"
          position="top-left"
        >
          <div
            className="w-80 h-20 rounded-lg p-1 flex "
            style={{ backgroundColor: "#262626" }}
          >
            {/* <Image alt="logo" className={`w-10`} src={ima} /> */}
            <Input
              className="w-full p-3 rounded border-none focus:outline-none"
              id="text"
              name="text"
              placeholder="اكتب هنا..."
              style={{ backgroundColor: "#6666ff00" }}
              value={inputValue} // Controlled input
              onChange={onInputChange}
            />{" "}
          </div>
        </Panel>

        <Panel
          className=" gap-1"
          style={{
            position: "fixed",
            left: "0px",
            bottom: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="rounded-lg p-1 flex flex-col justify-center items-center gap-2 backdrop-blur-md"
            style={{
              backgroundColor: "#26262690",
              padding: "12px 8px",
              borderRadius: "50px",
              scale: "1.1",
            }}
          >
            <Button
              className="rounded-full"
              size={"icon"}
              variant={"default"}
              onClick={onAdd}
            >
              {/* <PlusCircleIcon className="w-5 h-5" /> */}
            </Button>
            <Button
              className="rounded-full"
              size={"icon"}
              variant={"default"}
              onClick={onRestore}
            >
              {/* <LucideRotate3d className="w-5 h-5" /> */}
            </Button>
            <Button
              className="rounded-full"
              size={"icon"}
              variant={"default"}
              onClick={onSave}
            >
              {/* <BookmarkIcon className="w-5 h-5" /> */}
            </Button>
          </div>
        </Panel>

        <Panel className="hidden" position="top-left">
          <div>
            <label htmlFor="draggable">
              <input
                checked={isDraggable}
                className="react-flow__draggable"
                id="draggable"
                type="checkbox"
                onChange={(event) => setIsDraggable(event.target.checked)}
              />
              nodesDraggable
            </label>
          </div>
          <div>
            <label htmlFor="connectable">
              <input
                checked={isConnectable}
                className="react-flow__connectable"
                id="connectable"
                type="checkbox"
                onChange={(event) => setIsConnectable(event.target.checked)}
              />
              nodesConnectable
            </label>
          </div>
          <div>
            <label htmlFor="selectable">
              <input
                checked={isSelectable}
                className="react-flow__selectable"
                id="selectable"
                type="checkbox"
                onChange={(event) => setIsSelectable(event.target.checked)}
              />
              elementsSelectable
            </label>
          </div>
          <div>
            <label htmlFor="zoomonscroll">
              <input
                checked={zoomOnScroll}
                className="react-flow__zoomonscroll"
                id="zoomonscroll"
                type="checkbox"
                onChange={(event) => setZoomOnScroll(event.target.checked)}
              />
              zoomOnScroll
            </label>
          </div>
          <div>
            <label htmlFor="panonscroll">
              <input
                checked={panOnScroll}
                className="react-flow__panonscroll"
                id="panonscroll"
                type="checkbox"
                onChange={(event) => setPanOnScroll(event.target.checked)}
              />
              panOnScroll
            </label>
          </div>
          <div>
            <label htmlFor="panonscrollmode">
              <select
                className="react-flow__panonscrollmode"
                id="panonscrollmode"
                value={panOnScrollMode}
                onChange={(event) => setPanOnScrollMode(event.target.value)}
              >
                <option value="free">free</option>
                <option value="horizontal">horizontal</option>
                <option value="vertical">vertical</option>
              </select>
              panOnScrollMode
            </label>
          </div>
          <div>
            <label htmlFor="zoomondbl">
              <input
                checked={zoomOnDoubleClick}
                className="react-flow__zoomondbl"
                id="zoomondbl"
                type="checkbox"
                onChange={(event) => setZoomOnDoubleClick(event.target.checked)}
              />
              zoomOnDoubleClick
            </label>
          </div>
          <div>
            <label htmlFor="panOnDrag">
              <input
                checked={panOnDrag}
                className="react-flow__panOnDrag"
                id="panOnDrag"
                type="checkbox"
                onChange={(event) => setPanOnDrag(event.target.checked)}
              />
              panOnDrag
            </label>
          </div>
          <div>
            <label htmlFor="capturezoompaneclick">
              <input
                checked={captureZoomClick}
                className="react-flow__capturezoompaneclick"
                id="capturezoompaneclick"
                type="checkbox"
                onChange={(event) => setCaptureZoomClick(event.target.checked)}
              />
              capture onPaneClick
            </label>
          </div>
          <div>
            <label htmlFor="capturezoompanescroll">
              <input
                checked={captureZoomScroll}
                className="react-flow__capturezoompanescroll"
                id="capturezoompanescroll"
                type="checkbox"
                onChange={(event) => setCaptureZoomScroll(event.target.checked)}
              />
              capture onPaneScroll
            </label>
          </div>
          <div>
            <label htmlFor="captureelementclick">
              <input
                checked={captureElementClick}
                className="react-flow__captureelementclick"
                id="captureelementclick"
                type="checkbox"
                onChange={(event) =>
                  setCaptureElementClick(event.target.checked)
                }
              />
              capture onElementClick
            </label>
          </div>
        </Panel>

        <ZoomSlider position="top-right" />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default function Page() {
  return (
    <ReactFlowProvider>
      <AddNodeOnEdgeDrop />
    </ReactFlowProvider>
  );
}
