"use client"

import { useState } from "react"
import {
  LifeBuoy,
  Mail,
  MessageCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FAQ_ITEMS = [
  {
    q: "How do I set up my workshop data?",
    a: "Go to Data Inputs to enter fixed expenses, labour rates, technicians, and monthly figures. Use the Setup Wizard on first login for a guided flow.",
  },
  {
    q: "What is Gross Profit Target?",
    a: "It defines your target gross profit and helps the Simulator and Efficiency Analysis show whether you're on track. Set it under Gross Profit Target.",
  },
  {
    q: "Where are my calculators and saved data stored?",
    a: "Business Tools (margin, VAT, loan, tax calculators) save data locally on this device. Workshop and profile data are stored securely in the cloud.",
  },
  {
    q: "How do I change currency or dark mode?",
    a: "Open My Settings (or the main Settings page) and adjust Currency and Dark Mode under Preferences.",
  },
  {
    q: "I need to reset my workshop data.",
    a: "In Settings, use Clear All Data in the Danger Zone. This resets the workshop and logs you out. You can sign in again and start fresh.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md -mx-1 px-1"
      >
        <span className="flex-1 min-w-0">{q}</span>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <p className="pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export default function HelpSupportPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <LifeBuoy className="h-7 w-7 text-mp-teal" />
          Help and Support
        </h1>
        <p className="text-muted-foreground mt-2">
          FAQs, documentation, and how to get in touch.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Frequently asked questions</h2>
        <Card className="card-panel rounded-2xl overflow-hidden">
          <CardContent className="px-6 md:px-8 py-5 md:py-6">
            <div className="space-y-0">
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-panel rounded-2xl flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-mp-teal" />
              Documentation
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Step-by-step guides for Data Inputs, Simulator, and Efficiency Analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4 pb-6">
            <Link href="/resources">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <ExternalLink className="h-4 w-4" />
                View resources
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="card-panel rounded-2xl flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Mail className="h-5 w-5 text-mp-teal" />
              Contact support
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Email us for technical issues, feature requests, or account questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4 pb-6">
            <a href="mailto:support@marginpilot.com">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                support@marginpilot.com
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
