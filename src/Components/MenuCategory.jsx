
import Item from './Item';

const MenuCategory = ({props, showItems, setshowIndex}) => {

    const categoryName = props?.card?.card?.title ;
    const itemCards = props?.card?.card?.itemCards ;

    const handleClick = () => {
      setshowIndex() ;
    }

    console.log("title : " + showItems)

  return (
    <div className='m-2 mt-5 border-b-8 border-gray-300'>
        
        <div className='cursor-pointer' onClick={handleClick}>
          <h2 className='text-left font-extrabold text-xl py-2 pb-5 '>{categoryName} ({itemCards.length})</h2>
        </div>


        {showItems && itemCards.map( (item) => <Item key={item.card.info.id} data={item} /> )}

    </div>
  )
}

export default MenuCategory