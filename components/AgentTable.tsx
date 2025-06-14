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
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const AgentTable = () => {
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
              <TableHead>Contact No</TableHead>
              <TableHead>Clients</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>johndoe@gmail.com</TableCell>
              <TableCell>09693286947</TableCell>
              <TableCell>5</TableCell>
              <TableCell>
                <Button variant="outline">View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>0</TableCell>
              <TableCell>
                <Button variant="outline">View</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AgentTable;
