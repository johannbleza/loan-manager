import AgentTable from "@/components/AgentTable";
import SearchBar from "@/components/SearchBar";
import StatsCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { DollarSign, Plus, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const AgentsPage = () => {
  return (
    <main className="mx-auto lg:container p-6 flex flex-col gap-6">
      <section className="flex justify-between items-center ">
        <h1 className="text-3xl font-bold">Agents</h1>
        <Link href="/agents/new">
          <Button className="cursor-pointer">
            <Plus />
            <span>Add Agent</span>
          </Button>
        </Link>
      </section>

      {/* Stats Cards Section */}
      <section className="grid grid-cols-4 gap-6">
        <StatsCard title="Total Agents" icon={Users} content={0} />
        <StatsCard title="Total Clients" icon={Users} content={0} />
        <StatsCard title="Total Commissions" icon={DollarSign} content={0} />
        <StatsCard title="Pending Commissions" icon={DollarSign} content={0} />
      </section>

      {/* Search Bar */}
      <SearchBar title="Search Agents" placeholder="Search by name..." />

      {/* Agent Table */}
      <AgentTable />
    </main>
  );
};

export default AgentsPage;
