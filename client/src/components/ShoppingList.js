import React from "react";
import ShoppingListItem from './ShoppingListItem';

/* Shopping list component, which renders bunch of ShoppingListItem components inside a HTML ul element based on the data received through items prop */
export function ShoppingList  (props) {
  return(
    <ul>
    {
      props.items.map(i => <ShoppingListItem {...i} key={ i.id }/>)
    }
  </ul>
  ) 
}

export default ShoppingList;

