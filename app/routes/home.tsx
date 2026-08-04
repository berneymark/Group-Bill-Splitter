import type { Route } from "./+types/home";
import ItemForm from "./item_form";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ItemForm/>;
}
