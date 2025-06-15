"use client";
import AgentTable from "@/components/AgentTable";
import SearchBar from "@/components/SearchBar";
import StatsCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { DollarSign, Plus, Users } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AgentsPage = () => {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await fetch("/api/agents");
      const data = await res.json();
      setAgents(data);
      setFilteredAgents(data);
    };
    fetchAgents();
  }, []);

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
      <SearchBar
        title="Search Agents"
        placeholder="Search by name..."
        onChange={(e) => {
          const value = e.target.value.toLowerCase();
          if (!value) {
            setFilteredAgents(agents);
          } else {
            setFilteredAgents(
              agents.filter((agent: any) =>
                agent.name.toLowerCase().includes(value)
              )
            );
            console.log(agents);
          }
        }}
      />
      {/* Agent Table */}
      <AgentTable agents={filteredAgents} />
    </main>
  );
};

export default AgentsPage;
