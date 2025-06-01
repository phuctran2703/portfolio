"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Use useEffect to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Toggle between light and dark directly
  const toggleTheme = () => {
    // Use resolvedTheme instead of theme to get the actual applied theme
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <span className="h-[1.2rem] w-[1.2rem]"></span>
      </Button>
    )
  }

  return (
    <Button size="icon" onClick={toggleTheme} className="hover:cursor-pointer">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
