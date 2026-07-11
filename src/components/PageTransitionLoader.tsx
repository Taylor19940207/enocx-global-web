"use client";

import dynamic from "next/dynamic";

// ssr:false must be called from a client component; layout.tsx is a server
// component, so this thin wrapper is the boundary that allows it.
const PageTransition = dynamic(() => import("./PageTransition"), {
  ssr: false,
});

export default PageTransition;
