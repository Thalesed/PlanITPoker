import { Button } from "./Styles";

export default function LoginButton({ text, onClickFunction }) {

  return (
    <Button onClick={onClickFunction}>
        { text }
    </Button>
  );
}
