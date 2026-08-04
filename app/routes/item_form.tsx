
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ItemForm() {
    return (
      <main>
        <h1>Item Form</h1>
        <p>Add new item...</p>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="number" name="price" placeholder="Price" />
          <div>
            <label>Person 1</label>
            <input type="checkbox" name="Person1" value="Person1" />
            <label>Person 2</label> 
            <input type="checkbox" name="Person2" value="Person2" />
            <label>Person 3</label>
            <input type="checkbox" name="Person3" value="Person3" />
          </div>
          <button type="submit">Add Item</button>
        </form>
      </main>
    )
}
