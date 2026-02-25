"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useAppContext } from "@/lib/app-context"
import { useAuth } from "@/lib/auth-context"
import { ExternalLink, Book, Mail, Trash2, User, Settings, Building } from "lucide-react"

export default function SettingsPage() {
  const { data, updateData, toggleTheme, isDark } = useAppContext()
  const { userProfile, updateProfile, logout } = useAuth()
  
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    workspaceName: "",
    email: ""
  })
  const [currency, setCurrency] = useState("EUR")
  const [darkMode, setDarkMode] = useState(isDark)

  useEffect(() => {
    if (userProfile) {
      setProfile({
        firstName: userProfile.firstName || "",
        lastName: userProfile.lastName || "",
        workspaceName: userProfile.company?.name || "",
        email: userProfile.email || ""
      })
    }
  }, [userProfile])
  useEffect(() => {
    setCurrency(data.userPreferences?.currency || "EUR")
  }, [data.userPreferences?.currency])
  useEffect(() => {
    setDarkMode(isDark)
  }, [isDark])

  const handleProfileSave = () => {
    if (!userProfile) return
    updateProfile({
      firstName: profile.firstName,
      lastName: profile.lastName,
      company: { ...userProfile.company, name: profile.workspaceName }
    })
  }

  // Handle currency change
  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency)
    updateData({
      userPreferences: {
        currency: newCurrency,
        darkMode: data.userPreferences?.darkMode ?? false
      }
    })
  }

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
    toggleTheme()
  }

  const handleClearAllData = () => {
    if (confirm("Are you sure you want to clear all data? Workshop will be reset and you will be logged out.")) {
      fetch("/api/workshop/seed", { method: "POST", credentials: "include" }).finally(() => {
        logout()
        window.location.href = "/"
      })
    }
  }

  // Handle logout
  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      logout()
    }
  }

  return (
    <div className="space-y-6">
      {/* Section A: User Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workspaceName">Workspace Name</Label>
              <Input
                id="workspaceName"
                value={profile.workspaceName}
                onChange={(e) => setProfile({ ...profile, workspaceName: e.target.value })}
                placeholder="Enter your workshop name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                placeholder="Enter your email"
                disabled // Email is typically not editable after signup
              />
              <p className="text-xs text-muted-foreground">Email address cannot be changed after account creation</p>
            </div>
            <Button onClick={handleProfileSave} className="mt-4">
              Save Profile
            </Button>
          </div>

          <Separator />

          {/* Account Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account Actions</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Manage your account session and authentication
              </p>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Log Out
              </Button>
              <p className="text-xs text-muted-foreground">
                This will log you out and return you to the sign-up screen.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section B: Workshop Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Workshop Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Workshop Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="workshopSize">Workshop Size (sqft)</Label>
                <Input
                  id="workshopSize"
                  type="number"
                  value={data.workshopSize}
                  onChange={(e) => updateData({ workshopSize: Number(e.target.value) })}
                  placeholder="Enter workshop size"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ramps">Number of Ramps</Label>
                <Input
                  id="ramps"
                  type="number"
                  value={data.ramps}
                  onChange={(e) => updateData({ ramps: Number(e.target.value) })}
                  placeholder="Enter number of ramps"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section C: Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="darkMode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle dark mode theme across the application
                </p>
              </div>
              <Switch
                id="darkMode"
                checked={darkMode}
                onCheckedChange={handleDarkModeToggle}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={handleCurrencyChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GBP">£ GBP</SelectItem>
                  <SelectItem value="EUR">€ EUR</SelectItem>
                  <SelectItem value="USD">$ USD</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Update all currency displays across the app based on this selection
              </p>
            </div>
          </div>

          <Separator />

          {/* Danger Zone */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
            <p className="text-sm text-muted-foreground">
              Irreversible actions that affect your data
            </p>
            <Button
              variant="destructive"
              onClick={handleClearAllData}
              className="gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear All Data
            </Button>
            <p className="text-xs text-muted-foreground">
              This will clear all stored data, reset the application to defaults, and reload the page.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section D: Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Community Card */}
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our Facebook Group to connect with other workshop owners and share insights.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Join Group
                </Button>
              </CardContent>
            </Card>

            {/* Documentation Card */}
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Read the comprehensive guide to learn how to maximize your workshop's efficiency.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help from our support team for any questions or technical issues.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
