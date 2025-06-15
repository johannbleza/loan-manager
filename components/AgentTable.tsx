import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

interface AgentTableProps {
  agents: Agent[];
}

const AgentTable = ({ agents }: AgentTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">All Agents (2)</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Clients</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agents.map(({ name, email, phone, clients }, index) => (
              <TableRow key={name}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{clients}</TableCell>
                <TableCell className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost">...</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AgentTable;
