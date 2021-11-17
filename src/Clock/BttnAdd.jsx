import ButtonAdd from "./bttnAdd.svg";

export function BttnAdd(props) {
    return <img src={ButtonAdd} alt="" className="button-add" onClick={props.onClick}/>;
}