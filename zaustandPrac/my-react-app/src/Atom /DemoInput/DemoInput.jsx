import { Input } from "@/components/ui/input";
export function DemoInput({ setSearch }) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return <Input type="text" placeholder="Search" onChange={handleChange} />;
}
