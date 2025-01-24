import * as React from "react"
import { MailIcon } from 'lucide-react'

import { cn } from "@/lib/utils"

interface MailProps {
  className?: string
  children?: React.ReactNode
}

export function Mail({ className, children }: MailProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      {children}
    </div>
  )
}

interface MailHeaderProps {
  className?: string
  children?: React.ReactNode
}

Mail.Header = function MailHeader({ className, children }: MailHeaderProps) {
  return (
    <div className={cn("grid gap-1", className)}>
      {children}
    </div>
  )
}

interface MailHeaderTitleProps {
  className?: string
  children?: React.ReactNode
}

Mail.HeaderTitle = function MailHeaderTitle({
  className,
  children,
}: MailHeaderTitleProps) {
  return (
    <h1 className={cn("text-2xl font-semibold", className)}>
      {children}
    </h1>
  )
}

interface MailHeaderDescriptionProps {
  className?: string
  children?: React.ReactNode
}

Mail.HeaderDescription = function MailHeaderDescription({
  className,
  children,
}: MailHeaderDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}

interface MailListProps {
  className?: string
  children?: React.ReactNode
}

Mail.List = function MailList({ className, children }: MailListProps) {
  return (
    <div className={cn("divide-y divide-border rounded-md border", className)}>
      {children}
    </div>
  )
}

interface MailListItemProps {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

Mail.ListItem = function MailListItem({
  className,
  children,
  onClick,
}: MailListItemProps) {
  return (
    <div
      className={cn(
        "flex items-start justify-between p-4 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

Mail.ListItemIcon = function MailListItemIcon() {
  return (
    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-blue-600" />
  )
}

interface MailListItemContentProps {
  className?: string
  children?: React.ReactNode
}

Mail.ListItemContent = function MailListItemContent({
  className,
  children,
}: MailListItemContentProps) {
  return (
    <div className={cn("grid gap-1", className)}>
      {children}
    </div>
  )
}

interface MailListItemTitleProps {
  className?: string
  children?: React.ReactNode
}

Mail.ListItemTitle = function MailListItemTitle({
  className,
  children,
}: MailListItemTitleProps) {
  return (
    <p className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </p>
  )
}

interface MailListItemDescriptionProps {
  className?: string
  children?: React.ReactNode
}

Mail.ListItemDescription = function MailListItemDescription({
  className,
  children,
}: MailListItemDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}

interface MailListItemTimeProps {
  className?: string
  children?: React.ReactNode
}

Mail.ListItemTime = function MailListItemTime({
  className,
  children,
}: MailListItemTimeProps) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>
      {children}
    </p>
  )
}

