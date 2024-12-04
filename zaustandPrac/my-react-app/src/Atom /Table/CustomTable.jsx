import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function CustomTable({ users }) {
  return (
    <Table>
      <TableCaption>A list of your recent Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="pl-5">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Company</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="pl-5">{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.username}</TableCell>
            <TableCell>{invoice.address.city}</TableCell>
            <TableCell>{invoice.company.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
