"use client"

import { Building2, Target, Shield, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const VALUES = [
  {
    icon: Target,
    title: "Focus on margins",
    description: "We help workshop owners understand and hit gross profit targets with clear data and simulations.",
  },
  {
    icon: Shield,
    title: "Your data, secure",
    description: "Workshop and profile data are stored securely. Calculators can run locally for sensitive numbers.",
  },
  {
    icon: Sparkles,
    title: "Built for workshops",
    description: "MarginPilot is designed around real workshop workflows: labour rates, efficiency, and business tools.",
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Building2 className="h-7 w-7 text-mp-teal" />
          About Us
        </h1>
        <p className="text-muted-foreground mt-2">
          MarginPilot helps workshop owners plan, simulate, and hit their financial targets.
        </p>
      </div>

      <Card className="card-panel rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 sm:p-8 md:p-10">
            <div className="relative w-full md:w-52 h-28 md:h-36 rounded-xl overflow-hidden shrink-0 bg-muted/80">
              <Image
                src="/logo for light screen.png"
                alt="MarginPilot"
                fill
                className="object-contain dark:hidden p-3"
              />
              <Image
                src="/logo for dark screen.png"
                alt="MarginPilot"
                fill
                className="object-contain hidden dark:block p-3"
              />
            </div>
            <div className="space-y-3 min-w-0 flex-1">
              <CardTitle className="text-xl">MarginPilot</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                A workshop management and simulation tool that connects your data inputs to gross profit targets, efficiency analysis, and practical business calculators. Use the Dashboard for a snapshot, the Simulator to test scenarios, and Business Tools for margins, VAT, tax, and loans.
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-5">What we care about</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {VALUES.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="card-panel rounded-2xl flex flex-col h-full">
                <CardHeader className="pb-2 px-6 pt-6">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon className="h-5 w-5 text-mp-teal shrink-0" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
