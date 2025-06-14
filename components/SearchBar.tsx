import React from "react";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

interface SearchBarProps {
  title: string;
  placeholder: string;
}

const SearchBar = ({ title, placeholder }: SearchBarProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Search Agents</CardTitle>
      </CardHeader>
      <CardContent className="relative mt-[-8px]">
        <Search className="absolute top-[10px] left-[36px] h-4 w-4 text-muted-foreground" />
        <Input className="pl-10 " placeholder="Search by name..." />
      </CardContent>
    </Card>
  );
};

export default SearchBar;
