"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card } from "@/components/ui/card"

const investmentFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9+\-\s()]{10,}$/.test(val), "Please enter a valid contact number"),
  investmentAmount: z.coerce
    .number({
      required_error: "Investment amount is required",
      invalid_type_error: "Investment amount must be a number",
    })
    .min(1000, "Minimum investment amount is $1,000")
    .max(10000000, "Maximum investment amount is $10,000,000"),
})

type InvestmentFormValues = z.infer<typeof investmentFormSchema>

export function InvestmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useForm<InvestmentFormValues>({
    resolver: zodResolver(investmentFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      investmentAmount: "" as any,
    },
  })

  async function onSubmit(values: InvestmentFormValues) {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", values)
      setSubmitSuccess(true)
      form.reset()
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl p-8 shadow-none border-none">
      <div className="mb-8">
        <h1 className="text-4xl text-center font-medium text-foreground mb-4">Investment Form</h1>
        <p className="text-muted-foreground text-center text-sm">
          If you are interested to become an investor, please fill in the form below.
        </p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-800 dark:text-green-200 font-medium">
            ✓ Your investment application has been submitted successfully!
          </p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name Field */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-thin text-muted-foreground">
                  Full Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} className="h-12 rounded-none text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-thin text-muted-foreground">
                  Email Address <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} className="h-12 rounded-none text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Contact Number Field */}
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-thin text-muted-foreground">Contact Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 123-4567" {...field} className="h-12 rounded-none text-base" />
                </FormControl>
                <FormDescription>Optional field</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Investment Amount Field */}
          <FormField
            control={form.control}
            name="investmentAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-thin text-muted-foreground">
                  Investment Amount <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="1000" 
                    {...field} 
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value === "" ? "" : Number(e.target.value))}
                    className="h-12 text-base rounded-none" 
                    min="1000" 
                  />
                </FormControl>
                <FormDescription className="text-sm text-muted-foreground">
                  Minimum: $1,000 | Maximum: $10,000,000
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-none bg-green-600 hover:bg-green-700 text-white font-medium text-base w-full sm:w-auto cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Send"}
          </Button>
        </form>
      </Form>
    </Card>
  )
}