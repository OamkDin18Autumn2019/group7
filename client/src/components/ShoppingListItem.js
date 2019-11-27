import React from "react";


/* Shopping list item */
const ShoppingListItem = props => {
  return <div >
    <div>
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value}
    </div>
  </div>
}

export default ShoppingListItem;