import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  removeItems: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.removeItems}>
      {props.text}
    </li>
  );
};
export default TodoItem;
