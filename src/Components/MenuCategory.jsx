
import Item from './Item';

const MenuCategory = ({props}) => {

    const categoryName = props?.card?.card?.title ;
    const itemCards = props?.card?.card?.itemCards ;


  return (
    <div className='m-2 mt-5 border-b-8 border-gray-300'>
        
        <div className=''>
          <h2 className='text-left font-extrabold text-xl py-2 px-6'>{categoryName} ({itemCards.length})</h2>
        </div>

        {itemCards.map( (item) => <Item key={item.card.info.id} data={item} /> )}

    </div>
  )
}

export default MenuCategory