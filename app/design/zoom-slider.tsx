import React, { forwardRef } from "react";
import { Maximize, Minus, Plus } from "lucide-react";
import {
  Panel,
  useViewport,
  useStore,
  useReactFlow,
  PanelProps,
} from "@xyflow/react";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ZoomSlider = forwardRef<
  HTMLDivElement,
  Omit<PanelProps, "children">
>(({ className, ...props }) => {
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
      className={cn(
        "flex gap-1 rounded-md bg-primary-foreground p-1 text-foreground",
        className,
      )}
      {...props}
    >
      <Button
        size="icon"
        variant="ghost"
        onClick={() => zoomOut({ duration: 300 })}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Slider
        className="w-[140px]"
        max={maxZoom}
        min={minZoom}
        step={0.01}
        value={[zoom]}
        onValueChange={(values) => zoomTo(values[0])}
      />
      <Button
        size="icon"
        variant="ghost"
        onClick={() => zoomIn({ duration: 300 })}
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        className="min-w-20 tabular-nums"
        variant="ghost"
        onClick={() => zoomTo(1, { duration: 300 })}
      >
        {(100 * zoom).toFixed(0)}%
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => fitView({ duration: 300 })}
      >
        <Maximize className="h-4 w-4" />
      </Button>
    </Panel>
  );
});

ZoomSlider.displayName = "ZoomSlider";
