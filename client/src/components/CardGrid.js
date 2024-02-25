import Card from "./Card";

function CardGrid({ items }) {
  return (
    <div className="card_grid">
      {items.map((item, key) => (
        <Card item={item} key={key} />
      ))}
    </div>
  );
}

export default CardGrid;
