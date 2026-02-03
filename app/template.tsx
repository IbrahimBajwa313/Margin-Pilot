"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { WorkshopLoader } from "@/components/workshop-loader"

export default function Template({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    const pathname = usePathname()

    useEffect(() => {
        // Determine if we should show the loader
        // You might want to skip loader for some paths or add logic here
        setIsLoading(true)

        // Simulate loading or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 800) // Adjust timing as needed for feel

        return () => clearTimeout(timer)
    }, [pathname])

    // Optional: only show loader on actual path changes if template remounts anyway
    // Since template remounts on route change, this useEffect runs on every navigation.

    return (
        <>
            {isLoading ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                    <WorkshopLoader size="medium" loadingText="Loading..." />
                </div>
            ) : (
                <div className="animate-in fade-in duration-500">
                    {children}
                </div>
            )}
        </>
    )
}
