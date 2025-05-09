/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { title } from "@/components/primitives";

interface Position {
  x: number;
  y: number;
}

interface Node {
  id: string;
  position: Position;
  label: string;
  color: string;
  icon: string;
}

interface Edge {
  from: string;
  to: string;
}

export default function FlowScreen() {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<Position>({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "1",
      position: { x: 50, y: 50 },
      label: "Home Page",
      color: "#3B82F6",
      icon: "📄",
    },
    {
      id: "2",
      position: { x: 700, y: 500 },
      label: "Submit",
      color: "#10B981",
      icon: "🔘",
    },
    {
      id: "3",
      position: { x: 400, y: 300 },
      label: "Hero Image",
      color: "#F59E0B",
      icon: "🖼️",
    },
    {
      id: "4",
      position: { x: 250, y: 400 },
      label: "Welcome Text",
      color: "#8B5CF6",
      icon: "🔤",
    },
  ]);
  const [edges, setEdges] = useState<Edge[]>([{ from: "1", to: "2" }]);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState<Position>({ x: 0, y: 0 });
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, id?: string) => {
      if (id) {
        const nodeEl = e.currentTarget as HTMLDivElement;
        const nodeRect = nodeEl.getBoundingClientRect();
        setDraggingId(id);
        setOffset({
          x: (e.clientX - nodeRect.left) / zoom,
          y: (e.clientY - nodeRect.top) / zoom,
        });
      } else {
        setIsPanning(true);
        setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      }
    },
    [zoom, pan]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const bounds = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - bounds.left - pan.x) / zoom;
      const y = (e.clientY - bounds.top - pan.y) / zoom;

      setMousePosition({ x, y });

      if (draggingId) {
        const newX = x - offset.x;
        const newY = y - offset.y;

        setNodes((prev) =>
          prev.map((n) =>
            n.id === draggingId ? { ...n, position: { x: newX, y: newY } } : n
          )
        );
      } else if (isPanning) {
        setPan({
          x: e.clientX - panStart.x,
          y: e.clientY - panStart.y,
        });
      }
    },
    [draggingId, offset, isPanning, panStart, zoom, pan]
  );

  const handleMouseUp = useCallback(() => {
    setDraggingId(null);
    setIsPanning(false);
    setConnectingFrom(null);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    setZoom((prev) => Math.min(Math.max(prev + delta, 0.3), 2));
  };

  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleFitView = () => {
    const container = containerRef.current;
    if (!container || nodes.length === 0) return;

    const padding = 100;
    const nodeSize = 96;

    const minX = Math.min(...nodes.map((n) => n.position.x));
    const maxX = Math.max(...nodes.map((n) => n.position.x + nodeSize));
    const minY = Math.min(...nodes.map((n) => n.position.y));
    const maxY = Math.max(...nodes.map((n) => n.position.y + nodeSize));

    const contentWidth = maxX - minX;
    const contentHeight = maxY - minY;

    const availableWidth = container.clientWidth - padding * 2;
    const availableHeight = container.clientHeight - padding * 2;

    const newZoom = Math.min(
      availableWidth / contentWidth,
      availableHeight / contentHeight,
      2
    );

    const newPanX =
      (container.clientWidth - contentWidth * newZoom) / 2 - minX * newZoom;
    const newPanY =
      (container.clientHeight - contentHeight * newZoom) / 2 - minY * newZoom;

    setZoom(newZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  const handleAddNode = () => {
    const id = Date.now().toString();
    setNodes((prev) => [
      ...prev,
      {
        id,
        position: {
          x: Math.random() * 300,
          y: Math.random() * 300,
        },
        label: "New Node",
        color: "#6B7280",
        icon: "➕",
      },
    ]);
  };

  const handleNodeRightClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setNodes((prev) => prev.filter((n) => n.id !== id));
    setEdges((prev) =>
      prev.filter((edge) => edge.from !== id && edge.to !== id)
    );
  };

  const handleConnectStart = (id: string) => {
    setConnectingFrom(id);
  };

  const handleNodeMouseUp = (id: string) => {
    if (
      connectingFrom &&
      connectingFrom !== id &&
      !edges.find((e) => e.from === connectingFrom && e.to === id)
    ) {
      setEdges((prev) => [...prev, { from: connectingFrom, to: id }]);
    }
    setConnectingFrom(null);
  };

  return (
    <main className="w-full p-4">
      <h1 className={title()}>Flow Components</h1>
      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => setZoom((z) => Math.min(z + 0.1, 2))}>+</button>
        <button onClick={() => setZoom((z) => Math.max(z - 0.1, 0.3))}>-</button>
        <button onClick={handleResetView}>Reset</button>
        <button onClick={handleFitView}>Fit View</button>
        <button onClick={handleAddNode}>Add Node</button>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-[800px] h-[600px] border bg-gray-100 rounded overflow-hidden"
        onMouseDown={(e) => {
          if ((e.target as HTMLElement).dataset.node !== "true")
            handleMouseDown(e);
        }}
        onWheel={handleWheel}
      >
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {edges.map((edge, i) => {
            const from = nodes.find((n) => n.id === edge.from);
            const to = nodes.find((n) => n.id === edge.to);
            if (!from || !to) return null;

            const size = 96;
            const fx = (from.position.x + size / 2) * zoom + pan.x;
            const fy = (from.position.y + size / 2) * zoom + pan.y;
            const tx = (to.position.x + size / 2) * zoom + pan.x;
            const ty = (to.position.y + size / 2) * zoom + pan.y;

            return (
              <line
                key={i}
                stroke="black"
                strokeWidth={2}
                x1={fx}
                x2={tx}
                y1={fy}
                y2={ty}
              />
            );
          })}

          {connectingFrom &&
            (() => {
              const from = nodes.find((n) => n.id === connectingFrom);
              if (!from) return null;

              const size = 96;
              const fx = (from.position.x + size / 2) * zoom + pan.x;
              const fy = (from.position.y + size / 2) * zoom + pan.y;
              const tx = mousePosition.x * zoom + pan.x;
              const ty = mousePosition.y * zoom + pan.y;

              return (
                <line
                  stroke="gray"
                  strokeDasharray="4 4"
                  strokeWidth={2}
                  x1={fx}
                  x2={tx}
                  y1={fy}
                  y2={ty}
                />
              );
            })()}
        </svg>

        <div
          className="w-full h-full origin-top-left"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "top left",
          }}
        >
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute w-24 h-24 rounded-lg flex flex-col items-center justify-center text-white shadow-md"
              data-node="true"
              style={{
                transform: `translate(${node.position.x}px, ${node.position.y}px)`,
                backgroundColor: node.color,
              }}
              onContextMenu={(e) => handleNodeRightClick(e, node.id)}
              onMouseDown={(e) => handleMouseDown(e, node.id)}
              onMouseUp={() => handleNodeMouseUp(node.id)}
            >
              <div className="text-2xl">{node.icon}</div>
              <div className="text-sm text-center mt-1">{node.label}</div>

              <div
                className="absolute top-0 right-0 w-5 h-5 bg-white border border-black rounded-full cursor-pointer"
                title="Connect"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleConnectStart(node.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
