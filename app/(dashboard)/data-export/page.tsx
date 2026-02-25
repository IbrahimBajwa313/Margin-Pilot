"use client"

import { useRef, useState } from "react"
import html2canvas from "html2canvas"
import { useAppContext } from "@/lib/app-context"
import { useCurrency } from "@/hooks/use-currency"
import {
  buildBusinessDataCsv,
  generatePdfReport,
  buildExternalExportJson,
  type ExportTargets,
  type ExportEfficiency,
} from "@/lib/export-utils"
import { ExportSocialCard } from "@/components/export-social-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileDown,
  ImageIcon,
  FileText,
  TableIcon,
  Share2,
  Loader2,
  Check,
  Copy,
  Download,
} from "lucide-react"
import { toast } from "sonner"

function useExportTargets(): ExportTargets {
  const { calculatedTargets } = useAppContext()
  return {
    totalMonthlyExpenses: calculatedTargets.totalMonthlyExpenses,
    totalAnnualExpenses: calculatedTargets.totalAnnualExpenses,
    standardDailyGpTarget: calculatedTargets.standardDailyGpTarget,
    averageMonthlyGpTarget: calculatedTargets.averageMonthlyGpTarget,
    averageMonthlyWorkingDays: calculatedTargets.averageMonthlyWorkingDays,
  }
}

function useExportEfficiency(): ExportEfficiency {
  const { efficiency } = useAppContext()
  return {
    requiredEfficiency: efficiency.requiredEfficiency,
    breakevenEfficiency: efficiency.breakevenEfficiency,
    laborBurden: efficiency.laborBurden,
    maxPotentialLaborRevenue: efficiency.maxPotentialLaborRevenue,
  }
}

export default function DataExportPage() {
  const { data } = useAppContext()
  const { symbol } = useCurrency()
  const targets = useExportTargets()
  const efficiency = useExportEfficiency()
  const socialCardRef = useRef<HTMLDivElement>(null)

  const [socialLoading, setSocialLoading] = useState(false)
  const [pdfLoading, setPdfLoading] = useState(false)
  const [copiedExternal, setCopiedExternal] = useState(false)
  const [imageCopied, setImageCopied] = useState(false)

  /** Generate PNG from card; returns blob and data URL for share/copy/download */
  const captureSocialImage = async (): Promise<{ blob: Blob; dataUrl: string } | null> => {
    if (!socialCardRef.current) return null
    const canvas = await html2canvas(socialCardRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#0f172a",
    })
    const dataUrl = canvas.toDataURL("image/png")
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob((b) => resolve(b), "image/png", 1)
    )
    if (!blob) return null
    return { blob, dataUrl }
  }

  const handleShareImage = async () => {
    setSocialLoading(true)
    try {
      const result = await captureSocialImage()
      if (!result) throw new Error("Capture failed")
      const file = new File(
        [result.blob],
        `MarginPilot-Snapshot-${new Date().toISOString().slice(0, 10)}.png`,
        { type: "image/png" }
      )
      if (typeof navigator.share === "function" && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "My workshop snapshot",
          text: "MarginPilot business snapshot – marginpilot.app",
        })
        toast.success("Shared!")
      } else {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": result.blob }),
        ])
        setImageCopied(true)
        setTimeout(() => setImageCopied(false), 2500)
        toast.success("Image copied to clipboard – paste anywhere to share")
      }
    } catch (e) {
      if ((e as Error).name === "AbortError") return
      try {
        const result = await captureSocialImage()
        if (result) {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": result.blob }),
          ])
          setImageCopied(true)
          setTimeout(() => setImageCopied(false), 2500)
          toast.success("Image copied to clipboard – paste anywhere to share")
          return
        }
      } catch {
        // fallback to download
      }
      const result = await captureSocialImage()
      if (result) {
        const link = document.createElement("a")
        link.download = `MarginPilot-Snapshot-${new Date().toISOString().slice(0, 10)}.png`
        link.href = result.dataUrl
        link.click()
        toast.success("Image downloaded – share the file from your device")
      } else {
        toast.error("Could not create image")
      }
    } finally {
      setSocialLoading(false)
    }
  }

  const handleCopyImage = async () => {
    setSocialLoading(true)
    try {
      const result = await captureSocialImage()
      if (!result) throw new Error("Capture failed")
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": result.blob }),
      ])
      setImageCopied(true)
      setTimeout(() => setImageCopied(false), 2500)
      toast.success("Image copied – paste in any app to share")
    } catch (e) {
      toast.error("Copy failed – try Share or Download instead")
    } finally {
      setSocialLoading(false)
    }
  }

  const handleDownloadSocialImage = async () => {
    setSocialLoading(true)
    try {
      const result = await captureSocialImage()
      if (!result) throw new Error("Capture failed")
      const link = document.createElement("a")
      link.download = `MarginPilot-Snapshot-${new Date().toISOString().slice(0, 10)}.png`
      link.href = result.dataUrl
      link.click()
      toast.success("Image downloaded")
    } catch (e) {
      toast.error("Failed to generate image")
    } finally {
      setSocialLoading(false)
    }
  }

  const handleExportPdf = () => {
    setPdfLoading(true)
    try {
      generatePdfReport(data, targets, efficiency, symbol)
      toast.success("PDF downloaded")
    } catch (e) {
      toast.error("Failed to generate PDF")
    } finally {
      setPdfLoading(false)
    }
  }

  const handleExportExcel = () => {
    try {
      const csv = buildBusinessDataCsv(data, targets, symbol)
      const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" })
      const link = document.createElement("a")
      link.download = `MarginPilot-Data-${new Date().toISOString().slice(0, 10)}.csv`
      link.href = URL.createObjectURL(blob)
      link.click()
      URL.revokeObjectURL(link.href)
      toast.success("Data exported (open in Excel)")
    } catch (e) {
      toast.error("Failed to export data")
    }
  }

  const handleCopyExternalJson = () => {
    try {
      const json = buildExternalExportJson(data, targets, efficiency)
      void navigator.clipboard.writeText(json)
      setCopiedExternal(true)
      toast.success("Copied to clipboard")
      setTimeout(() => setCopiedExternal(false), 2000)
    } catch (e) {
      toast.error("Failed to copy")
    }
  }

  const handleDownloadExternalJson = () => {
    try {
      const json = buildExternalExportJson(data, targets, efficiency)
      const blob = new Blob([json], { type: "application/json" })
      const link = document.createElement("a")
      link.download = `MarginPilot-Export-${new Date().toISOString().slice(0, 10)}.json`
      link.href = URL.createObjectURL(blob)
      link.click()
      URL.revokeObjectURL(link.href)
      toast.success("JSON downloaded")
    } catch (e) {
      toast.error("Failed to export")
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Data Export</h1>
        <p className="mt-1 text-muted-foreground">
          Generate shareable images, PDF reports, and export your business data for backup or
          use in other systems.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Social share image */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <ImageIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Share your snapshot</CardTitle>
                <CardDescription>
                  One-tap share to apps, copy to clipboard, or download. Optimized for social feeds, forums, and messaging.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 relative">
            {/* Preview: box sized to scaled card so the full snapshot is visible (not a tiny corner) */}
            <div className="flex justify-center w-full">
              <div
                className="rounded-lg border border-border bg-slate-900/50 overflow-hidden w-full"
                style={{ maxWidth: 600, aspectRatio: "1200/630" }}
              >
                <div
                  style={{
                    width: 1200,
                    height: 630,
                    transform: "scale(0.5)",
                    transformOrigin: "top left",
                  }}
                >
                  <ExportSocialCard
                    data={data}
                    targets={targets}
                    efficiency={efficiency}
                    symbol={symbol}
                    shareOptimized
                  />
                </div>
              </div>
            </div>
            {/* Full-size card for capture: fixed, centered, invisible but painted so html2canvas gets full image */}
            <div
              className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-0"
              style={{ left: 0, top: 0, right: 0, bottom: 0, zIndex: -1 }}
              aria-hidden="true"
            >
              <div ref={socialCardRef} className="flex-shrink-0" style={{ width: 1200, height: 630 }}>
                <ExportSocialCard
                  data={data}
                  targets={targets}
                  efficiency={efficiency}
                  symbol={symbol}
                  shareOptimized
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleShareImage}
                disabled={socialLoading}
                className="gap-2"
              >
                {socialLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Share2 className="h-4 w-4" />
                )}
                {socialLoading ? "Preparing…" : "Share"}
              </Button>
              <Button
                onClick={handleCopyImage}
                disabled={socialLoading}
                variant="outline"
                className="gap-2"
              >
                {imageCopied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {imageCopied ? "Copied" : "Copy image"}
              </Button>
              <Button
                onClick={handleDownloadSocialImage}
                disabled={socialLoading}
                variant="ghost"
                size="sm"
                className="gap-1.5 text-muted-foreground"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* PDF report */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">PDF business summary</CardTitle>
                <CardDescription>
                  A one-document report with GP targets, expense breakdown, and financial summary
                  for stakeholders or records.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Gross profit targets and required efficiency</li>
              <li>• Structured expenses table (fixed, marketing, loans, staff, technicians)</li>
              <li>• Financial summary and labour burden</li>
            </ul>
            <Button
              onClick={handleExportPdf}
              disabled={pdfLoading}
              variant="default"
              className="w-full gap-2"
            >
              {pdfLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FileDown className="h-4 w-4" />
              )}
              {pdfLoading ? "Generating…" : "Export PDF report"}
            </Button>
          </CardContent>
        </Card>

        {/* Excel / CSV export */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <TableIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Export business data</CardTitle>
                <CardDescription>
                  Download all tables as CSV (opens in Excel): expenses, marketing, loans, wages,
                  technicians, and monthly targets.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge variant="secondary" className="text-xs">
              CSV · Excel-compatible
            </Badge>
            <Button
              onClick={handleExportExcel}
              variant="outline"
              className="w-full gap-2"
            >
              <Download className="h-4 w-4" />
              Export to CSV / Excel
            </Button>
          </CardContent>
        </Card>

        {/* External systems export */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <Share2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Export for external systems</CardTitle>
                <CardDescription>
                  JSON with targets and efficiency metrics for importing into other tools or
                  DMS/benchmarking systems.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleDownloadExternalJson}
                variant="outline"
                size="sm"
                className="gap-1.5"
              >
                <Download className="h-4 w-4" />
                Download JSON
              </Button>
              <Button
                onClick={handleCopyExternalJson}
                variant="outline"
                size="sm"
                className="gap-1.5"
              >
                {copiedExternal ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copiedExternal ? "Copied" : "Copy to clipboard"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
