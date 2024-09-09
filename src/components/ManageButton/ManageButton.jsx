import { Button } from "./Styles";

export default function ManageButton({ text, onClickFunction }) {

  return (
    <Button onClick={onClickFunction}>
        { text }
    </Button>
  );
}
