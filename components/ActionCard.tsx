import React from "react";
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
import Link from "next/link";

export interface Action {
  action: string;
  href: string;
}

interface ActionCard {
  title: string;
  description: string;
  action: Action[];
}

const ActionCard = ({ title, description, action }: ActionCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 mt-[-8px]">
        {action.map(({ action: text, href }, index) => (
          <Link key={href} href={href}>
            <Button
              className="w-full cursor-pointer"
              variant={index == 0 ? "default" : "outline"}
            >
              {text}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActionCard;
