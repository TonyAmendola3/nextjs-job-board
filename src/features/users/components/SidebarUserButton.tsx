import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import SidebarUserButtonClient from "./SidebarUserButtonClient";

export function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  )
};

async function SidebarUserSuspense() {
  const { userId } = await auth();

  return (
    <SidebarUserButtonClient user={{ email: "anthony@test.com", name: "anthony A", imageUrl: "" }} />
  )
}


