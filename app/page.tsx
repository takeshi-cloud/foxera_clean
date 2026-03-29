"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const refresh = 0;

import HomeClient from "./HomeClient";

export default function Page() {
  return <HomeClient />;
}