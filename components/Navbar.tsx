"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BarChart3,
  CreditCard,
  FileText,
  Home,
  Menu,
  UserCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Agents", href: "/agents", icon: UserCheck },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Loans", href: "/loans", icon: CreditCard },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Balance Sheet", href: "/balance-sheet", icon: FileText },
];

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b ">
      <div className="px-6 py-4 flex  mx-auto justify-between items-center lg:container">
        <Link href="/" className="text-xl font-bold ">
          LoanManager
        </Link>
        {/* Desktop View */}
        <div className="flex justify-center items-center gap-2 max-md:hidden ">
          {navigation.map(({ name, href, icon }) => {
            const Icon = icon;
            return (
              <Link key={name} href={href}>
                <Button
                  variant={pathName == href ? "default" : "ghost"}
                  className="flex justify-start gap-4 w-full cursor-pointer"
                >
                  <Icon />
                  <span>{name}</span>
                </Button>
              </Link>
            );
          })}
        </div>
        {/* Mobile View */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="flex flex-col " side="right">
              <div className="p-4 mt-8">
                <SheetTitle className="text-lg font-bold ">
                  Navigation
                </SheetTitle>
                <div className="flex flex-col mt-4 gap-4">
                  {navigation.map(({ name, href, icon }) => {
                    const Icon = icon;
                    return (
                      <Link key={name} href={href}>
                        <Button
                          variant={pathName == href ? "default" : "ghost"}
                          className="flex justify-start gap-4 w-full cursor-pointer"
                          onClick={() => setOpen(false)}
                        >
                          <Icon />
                          <span>{name}</span>
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
