"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "motion/react"

import { Switch } from "@/components/animate-ui/components/radix/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggleSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering once mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        initial={false}
        animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.7 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      </motion.div>
      <Switch
        id="theme-switch"
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <motion.div
        initial={false}
        animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      </motion.div>

      <Label htmlFor="theme-switch" className="sr-only">
        Toggle theme
      </Label>
    </div>
  )
}
