"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface TestimonialProps {
  name: string
  role: string
  image: string
  quote: string
}

export function TestimonialCard({ name, role, image, quote }: TestimonialProps = {
  name: "John Smith",
  role: "CTO, TechSolutions",
  image: "/testimonial9.jpg",
  quote: "Gracensity's team is highly skilled and professional. Their cloud migration services have saved us time and resources.",
}) {
  // Function to safely get initials
  const getInitials = (name: string) => {
    return name ? name.split(' ').map(n => n[0]).join('') : ''
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}    
    >
      <Card className="w-[350px] bg-gray-100 dark:bg-gray-800 shadow-lg border-gray-200 dark:border-gray-900">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="h-12 w-12">
            <AvatarImage alt={name || 'User'} src={image} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{name || 'Anonymous'}</p>
            <p className="text-xs text-muted-foreground">{role || 'User'}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">&quot;{quote || 'No quote provided'}&quot;</p>
        </CardContent>
        <CardFooter className="justify-end">
          <Quote className="h-5 w-5 text-primary" />
        </CardFooter>
      </Card>
    </motion.div>
  )
}