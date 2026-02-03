"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface EfficiencyGaugeProps {
  value: number
  maxValue: number
}

export function EfficiencyGauge({ value, maxValue }: EfficiencyGaugeProps) {
  const percentage = (value / maxValue) * 100
  
  // Determine color based on efficiency
  const getColor = (efficiency: number) => {
    if (efficiency <= 60) return "#14b8a6" // Teal - Healthy
    if (efficiency <= 75) return "#f59e0b" // Amber - Warning
    return "#ef4444" // Red - Too hard to achieve
  }

  const gaugeColor = getColor(value)
  
  // Create data for semi-circle gauge
  const data = [
    { name: "Achieved", value: value },
    { name: "Remaining", value: Math.max(0, maxValue - value) }
  ]

  return (
    <div className="w-full max-w-sm">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="80%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill={gaugeColor} />
            <Cell fill="#e5e7eb" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center text */}
      <div className="text-center -mt-16">
        <div 
          className="text-3xl font-bold"
          style={{ color: gaugeColor }}
        >
          {value}%
        </div>
        <div className="text-sm text-muted-foreground">
          {value <= 60 ? "Healthy" : value <= 75 ? "On Par" : "Hard to Achieve"}
        </div>
      </div>
      
      {/* Scale markers */}
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  )
}
