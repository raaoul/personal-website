"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ThemeToggleSwitch } from "@/components/theme-toggle-switch"

const navItems = [
  { path: "/#about", label: "About" },
  { path: "/#projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
]

const socialLinks = [
  {
    path: "https://github.com/raaoul",
    icon: "/icons/github.svg",
    label: "GitHub",
  },
  {
    path: "https://www.linkedin.com/in/raoulye-agustino/",
    icon: "/icons/linkedin.svg",
    label: "LinkedIn",
  },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="space-y-16">
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold hover:text-primary">
            <Link href="/">Raoulye Agustino</Link>
          </h1>
          <p className="text-sm text-muted-foreground">Software Engineer</p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-opacity hover:opacity-75"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className="dark:opacity-80 dark:invert"
              />
              <span className="sr-only">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-2 flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>

      <ThemeToggleSwitch />
    </nav>
  )
}
