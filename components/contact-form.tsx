"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { FadeInWhenVisible } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    console.log(data)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    reset()
  }

  return (
    <FadeInWhenVisible>
      <div id="contact" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Get in Touch</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">Ready to start your next project? Contact us for a free consultation.</p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-xl sm:mt-20">
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <Input
                    {...register("firstName")}
                    id="first-name"
                    autoComplete="given-name"
                    className={`bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${errors.firstName ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"}`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.firstName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <Input
                    {...register("lastName")}
                    id="last-name"
                    autoComplete="family-name"
                    className={`bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${errors.lastName ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"}`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <Textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className={`bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${errors.message ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-purple-400"
                >
                  {isSubmitting ? (
                    <motion.div
                      className="inline-block"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⏳
                    </motion.div>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}