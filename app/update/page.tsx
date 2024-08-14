import React, { Suspense } from "react";
import Update from "@/app/components/Update";

export default function UpdatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Update />
    </Suspense>
  );
}
