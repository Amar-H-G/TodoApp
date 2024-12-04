
import { MdDelete } from "react-icons/md";

function TodoItem({todoName,todoDate,onDeleteClick}) {
  // let ='Buy Milk';
  // let ='05/11/2004'

  return (
    <div className="container">
      <div className="row a-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger a-button" onClick={()=>onDeleteClick(todoName)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
