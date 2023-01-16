import Item from '../Item/Item';

const List = ({ list, handleCheckedById }) => {
  return (
    <>
      <ol>
        {list.map(item => {
          return <li key={ item.id }>
            <Item item={ item }
              handleItemChecked={
                checked => {
                  handleCheckedById(
                    item.id,
                    checked);
                }
              } /></li>;
        })
        }
      </ol>
    </>
  );
};

export default List;
