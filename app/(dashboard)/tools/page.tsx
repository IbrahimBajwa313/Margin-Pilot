"use client"

import Link from "next/link"
import {
  Calculator,
  Percent,
  Users,
  Receipt,
  Banknote,
  Building2,
  Coins,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const BUSINESS_CALCULATORS = [
  {
    slug: "margin-calculator",
    title: "Margin & Markup",
    description: "Bi-directional cost, price, margin and markup calculator. Save strategies by category.",
    icon: Percent,
    href: "/tools/margin-calculator",
  },
  {
    slug: "labour-rate-calculator",
    title: "Weighted Avg Labour Rate",
    description: "Calculate true hourly rate from a mix of work types (Service, Diagnostic, MOT, etc.).",
    icon: Users,
    href: "/tools/labour-rate-calculator",
  },
  {
    slug: "loan-calculator",
    title: "Loan Tracker",
    description: "Amortized, interest-only or balloon. Save loans and track monthly payments.",
    icon: Banknote,
    href: "/tools/loan-calculator",
  },
]

const UK_TAX_CALCULATORS = [
  {
    slug: "vat-calculator",
    title: "VAT",
    description: "Add or remove VAT at 20%, 5%, 0% or custom rate. Net and gross in one view.",
    icon: Receipt,
    href: "/tools/vat-calculator",
  },
  {
    slug: "corporation-tax-calculator",
    title: "Corp Tax",
    description: "2024/25: Small profits, main rate and marginal relief. Tax due and effective rate.",
    icon: Building2,
    href: "/tools/corporation-tax-calculator",
  },
  {
    slug: "dividend-tax-calculator",
    title: "Dividend Tax",
    description: "2024/25: Dividend allowance, bands and stacking on salary. Personal allowance applied first.",
    icon: Coins,
    href: "/tools/dividend-tax-calculator",
  },
]

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Calculator className="h-7 w-7 text-mp-teal" />
          Business Tools
        </h1>
        <p className="text-muted-foreground mt-1">
          Calculators and trackers. All data is saved automatically to this device.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Business Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {BUSINESS_CALCULATORS.map((tool) => {
            const Icon = tool.icon
            return (
              <Card
                key={tool.slug}
                className="card-panel rounded-2xl flex flex-col h-full"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon className="h-5 w-5 text-mp-teal" />
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-muted-foreground text-sm">
                    {tool.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Link href={tool.href} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:shadow-[0_0_20px_rgba(47,211,198,0.25)]">
                      Open Calculator
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">UK Tax Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {UK_TAX_CALCULATORS.map((tool) => {
            const Icon = tool.icon
            return (
              <Card
                key={tool.slug}
                className="card-panel rounded-2xl flex flex-col h-full"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon className="h-5 w-5 text-mp-teal" />
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-muted-foreground text-sm">
                    {tool.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Link href={tool.href} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:shadow-[0_0_20px_rgba(47,211,198,0.25)]">
                      Open Calculator
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
