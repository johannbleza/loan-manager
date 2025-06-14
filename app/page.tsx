"use client";
import ActionCard from "@/components/ActionCard";
import StatsCard from "@/components/StatsCard";
import { CreditCard, DollarSign, UserCheck, Users } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <main className="mx-auto p-6 lg:container">
      <div>
        <h1 className="text-4xl font-bold">Loan Management System</h1>
        <p className="text-muted-foreground mt-2">
          Manage your agents, clients, loans, commission tracking efficiently
        </p>
      </div>
      {/* Stats Section */}
      <section className="mt-6 grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        <StatsCard title="Total Agents" icon={UserCheck} content={0} />
        <StatsCard title="Total Clients" icon={Users} content={0} />
        <StatsCard title="Active Loans" icon={CreditCard} content={0} />
        <StatsCard
          title="Total Commissions"
          icon={DollarSign}
          content={0}
          isMoney={true}
        />
      </section>
      <section className="pt-8 grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        <ActionCard
          title="Agent Management"
          description="Add and manage your loan agents"
          action={[
            { action: "View All Agents", href: "/agents" },
            { action: "Add New Agent", href: "/agents/new" },
          ]}
        />
        <ActionCard
          title="Client Management"
          description="Add and manage your loan client"
          action={[
            { action: "View All Client", href: "/clients" },
            { action: "Add New Client", href: "/clients/new" },
          ]}
        />
        <ActionCard
          title="Loan Management"
          description="Create and manage loans"
          action={[
            { action: "View All Loans", href: "/clients" },
            { action: "Create New Loan", href: "/clients/new" },
          ]}
        />
        <ActionCard
          title="Payment Dashboard"
          description="Track payments and overdue amounts"
          action={[{ action: "View All Client", href: "/clients" }]}
        />
        <ActionCard
          title="Financial Reports"
          description="View balance sheet and transaction history"
          action={[{ action: "View Reports", href: "/clients" }]}
        />
        <ActionCard
          title="Commission Tracking"
          description="Monitor agent commissions and earnings"
          action={[{ action: "View Commissions", href: "/clients" }]}
        />
      </section>
    </main>
  );
};

export default HomePage;
