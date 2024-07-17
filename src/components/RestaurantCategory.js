import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="my-4 border border-black-400 shadow-sm rounded-lg">
        <div
          className="p-4 flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold title-xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordion body  */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
