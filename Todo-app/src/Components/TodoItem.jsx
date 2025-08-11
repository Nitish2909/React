
function TodoItem({todoName,todoDate,onDeleteClick}){
    return <div classNameName="Container">
      <div classNameName="row  allrow">
        <div classNameName="col-6">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
            <button type="button" classNameName="btn btn-danger  all-btn" onClick={()=>onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
    </div>
}
 export default TodoItem;