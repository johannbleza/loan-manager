import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  icon: React.ElementType;
  content: number;
  isMoney?: boolean;
}

const StatsCard = ({ title, icon, content, isMoney }: StatsCardProps) => {
  const Icon = icon;
  return (
    <Card>
      <CardHeader className=" flex justify-between items-center">
        <CardTitle className="font-medium text-sm truncate">{title}</CardTitle>
        <Icon className="w-4 h-4" />
      </CardHeader>
      <CardContent className="text-2xl font-bold mt-[-8px]">
        {isMoney ? `₱ ${content}` : content}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
