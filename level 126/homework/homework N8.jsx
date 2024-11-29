const categories = [
  { category: "Fruits", items: ["Apple", "Banana"] },
  { category: "Vegetables", items: ["Carrot", "Lettuce"] }
];

function NestedMap() {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
