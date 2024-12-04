import { Button, buttonVariants } from "@/components/ui/button";
export function ButtonDemo({ onClick }) {
  return (
    <Button
      className={buttonVariants({ variant: "general" })}
      onClick={onClick}
    >
      Add
    </Button>
  );
}
