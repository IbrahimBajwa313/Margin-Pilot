"use client"

import Link from "next/link"
import {
  BookOpen,
  ExternalLink,
  FileText,
  Video,
  MessageCircle,
  Calculator,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const RESOURCE_LINKS = [
  {
    title: "Documentation",
    description: "Comprehensive guides on Data Inputs, Gross Profit Target, Simulator, and Efficiency Analysis.",
    icon: FileText,
    href: "/help-support",
    label: "Read guide",
  },
  {
    title: "Business Tools",
    description: "Margin & Markup, Labour Rate, Loan Tracker, VAT, Corporation Tax, and Dividend Tax calculators.",
    icon: Calculator,
    href: "/tools",
    label: "Open tools",
  },
  {
    title: "Help & Support",
    description: "FAQs, contact options, and troubleshooting for MarginPilot.",
    icon: MessageCircle,
    href: "/help-support",
    label: "Get help",
  },
]

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <BookOpen className="h-7 w-7 text-mp-teal" />
          Resources
        </h1>
        <p className="text-muted-foreground mt-1">
          Guides, tools, and support to get the most out of MarginPilot.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {RESOURCE_LINKS.map((item) => {
          const Icon = item.icon
          return (
            <Card
              key={item.title}
              className="card-panel rounded-2xl flex flex-col h-full hover:border-primary/30 transition-colors"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Icon className="h-5 w-5 text-mp-teal" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <CardDescription className="text-muted-foreground text-sm flex-1">
                  {item.description}
                </CardDescription>
                <Link href={item.href} className="mt-4">
                  <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
                    <ExternalLink className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-mp-teal" />
            Video tutorials
          </CardTitle>
          <CardDescription>
            Short walkthroughs for key features (coming soon).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            We are preparing video tutorials for Data Inputs, Simulator, and Efficiency Analysis. Check back later or use the in-app documentation in the meantime.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
