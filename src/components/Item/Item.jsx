
const Item = ({ 
  item, 
  toggleItem
}) => {
  return (
    <>
      <input 
        type="checkbox"
        value={ item.checked }
        onChange={ () => toggleItem(!item.checked) } 
      />
      { item.id }
      { item.body }
    </>
  );
};

export default Item;
