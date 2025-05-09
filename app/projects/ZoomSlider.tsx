"use client";
import React, { forwardRef } from "react";
import {
  Panel,
  useViewport,
  useStore,
  useReactFlow,
  PanelProps,
} from "@xyflow/react";
import { Button, Slider } from "@heroui/react";

// Note: Add 'ref' as the second parameter
export const ZoomSlider = forwardRef<
  HTMLDivElement,
  Omit<PanelProps, "children">
>(({ className, ...props }, ref) => {
  // Added 'ref' here
  const { zoom } = useViewport();
  const { zoomTo, zoomIn, zoomOut, fitView } = useReactFlow();

  const { minZoom, maxZoom } = useStore(
    (state) => ({
      minZoom: state.minZoom,
      maxZoom: state.maxZoom,
    }),
    (a, b) => a.minZoom !== b.minZoom || a.maxZoom !== b.maxZoom,
  );

  return (
    <Panel
      ref={ref} // Pass the ref to the Panel component
      className={className}
      {...props}
    >
      <Button
        size="md"
        variant="ghost"
        onClick={() => zoomOut({ duration: 300 })}
      >
        Mi
        {/* <Minus className="h-4 w-4" /> */}
      </Button>
      {/* <Slider
        className="w-[140px]"
        value={[zoom]}
        min={minZoom}
        max={maxZoom}
        step={0.01}
        onValueChange={(values) => zoomTo(values[0])}
      /> */}
      <Slider
        className="max-w-md"
        maxValue={maxZoom}
        minValue={minZoom}
        size={"lg"}
        step={0.01}
        value={[zoom]}
        onChange={(value: number | number[]) => {
          if (Array.isArray(value)) {
            zoomTo(value[0]);
          } else {
            zoomTo(value);
          }
        }}
      />

      <Button
        size="md"
        variant="ghost"
        onClick={() => zoomIn({ duration: 300 })}
      >
        {" "}
        pl
        {/* <Plus className="h-4 w-4" /> */}
      </Button>
      <Button
        className="min-w-20 tabular-nums"
        variant="ghost"
        onClick={() => zoomTo(1, { duration: 300 })}
      >
        {(100 * zoom).toFixed(0)}%
      </Button>
      <Button
        size="md"
        variant="ghost"
        onClick={() => fitView({ duration: 300 })}
      >
        Ma
        {/* <Maximize className="h-4 w-4" /> */}
      </Button>
    </Panel>
  );
});

ZoomSlider.displayName = "ZoomSlider";
