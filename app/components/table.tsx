import React from 'react';

type Item = {
  item: string;
  name: string;
  quantity: number;
};

function createItems(count = 1) {
  const items: Item[] = [];
  
  for (let i = 0; i < count; i++) {
    items.push({
      item: "Chips",
      name: "Mark",
      quantity: 2
    });
  }

  return items;
}

export default function Table() {
  const [tableData, setTableData] = React.useState<Item[]>([]);

  const fillTable = () => {
    const newItems = createItems();
    setTableData([...tableData, ...newItems]);
  }

  const clearTable = () => {
    setTableData([]);
  }

  return (
    <main>
      <button onClick={fillTable}>Add Items</button>
      <button onClick={clearTable}>Clear Items</button>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Users</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((obj) => {
              return (
                <tr>
                  <td>{ obj.item }</td>
                  <td>{ obj.name }</td>
                  <td>{ obj.quantity }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </main>
  );
}
