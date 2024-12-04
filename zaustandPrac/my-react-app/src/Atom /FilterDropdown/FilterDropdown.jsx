import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  users: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You have to select at least one item.",
  }),
});

export function CheckboxReactHookFormMultiple({
  users,
  onFilterChange,
  filteredData,
}) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      users: filteredData,
    },
  });

  const handleCheckboxChange = (checked, username) => {
    const currentUsers = form.getValues("users");
    let updatedUsers;
    if (checked) {
      updatedUsers = [...currentUsers, username];
    } else {
      updatedUsers = currentUsers.filter((user) => user !== username);
    }

    form.setValue("users", updatedUsers);

    onFilterChange(updatedUsers);
  };
  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormItem>
          {users.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-start space-x-3 space-y-0"
            >
              <FormControl>
                <Checkbox
                  checked={form.getValues("users").includes(item.username)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(checked, item.username)
                  }
                />
              </FormControl>
              <FormLabel>{item.username}</FormLabel>
            </div>
          ))}
          <FormMessage />
        </FormItem>
      </form>
    </Form>
  );
}
