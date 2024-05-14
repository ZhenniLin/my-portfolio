import { Button, ButtonGroup } from "@nextui-org/button";

function ButtonDemo({ children }) {
  return (
    <Button variant="ghost" className="border-stone-700">
      {children}
    </Button>
  );
}

export default ButtonDemo;
