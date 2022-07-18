import "./DropDownItem.css";

function DropDownItem(props) {
  const { text, onSelect, selected } = props;

  var cssClass = selected ? "dropdown-item selected" : "dropdown-item";

  return (
    <a href="/#" className={cssClass} onClick={() => onSelect(text)}>
      {text}
    </a>
  );
}
export default DropDownItem;
