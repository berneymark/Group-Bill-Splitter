import Table from "~/components/table";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Group Bill Splitter" },
    { name: "description", content: "A project created to help split things fairly amongst your friends and family." },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Group Bill Splitter</h1>
      <Table/>
    </main>
  )
}
