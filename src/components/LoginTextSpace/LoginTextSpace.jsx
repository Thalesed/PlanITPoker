import { Space } from "./Styles";

export default function LoginTextSpace({ placeHolder, id, onChangeFunction }) {

  return (
    <Space id={id} placeholder={placeHolder} onChange={onChangeFunction}/>
  );
}
