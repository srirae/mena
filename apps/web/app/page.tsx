"use client";

import { useState, useCallback } from "react";
import "@xyflow/react/dist/style.css";
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
import { Sidebar } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
    <div style={{ width: '100%', height: '100vh' }}>
    <ReactFlow defaultNodes={[]} defaultEdges={[]} minZoom={0.1} panOnScroll={false} zoomOnScroll={true} panOnDrag={true}  preventScrolling={true} >
      <Background color="#a1a1aa" size={1.5} gap={20} variant={BackgroundVariant.Dots} />
    </ReactFlow>
    </div>
    </>
  );
}
