"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "../ui/textarea"
import { Card } from "@/components/ui/card"

const ContactFormSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full name must be at least 2 characters")
        .max(100, "Full name must not exceed 100 characters"),
    email: z.string().email("Please enter a valid email address"),
    contactNumber: z
        .string()
        .optional()
        .refine((val) => !val || /^[0-9+\-\s()]{10,}$/.test(val), "Please enter a valid contact number"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must not exceed 1000 characters")
})

type ContactFormValues = z.infer<typeof ContactFormSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            contactNumber: "",
            message: "",
        },
    })

    async function onSubmit(values: ContactFormValues) {
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
        <Card className="w-full max-w-5xl p-8 shadow-none border-none">

            {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                        ✓ Your investment application has been submitted successfully!
                    </p>
                </div>
            )}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
                                    <Input placeholder="  " {...field} className="h-12 rounded-none text-base" />
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
                                <FormLabel className="text-base font-thin text-muted-foreground mt-3">
                                    Email Address <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder=" " {...field} className="h-12 rounded-none text-base" />
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
                                <FormLabel className="text-base font-thin text-muted-foreground mt-3">Phone Number</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder=" " {...field} className="h-12 rounded-none text-base" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Message Field */}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-thin text-muted-foreground mt-3">
                                    Message <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder=" "
                                        {...field}
                                        className="h-32 rounded-none text-base resize-none"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 mt-6 rounded-none bg-green-600 hover:bg-green-700 text-white font-medium text-base w-full sm:w-auto cursor-pointer"
                    >
                        {isSubmitting ? "Submitting..." : "Send"}
                    </Button>
                </form>
            </Form>
        </Card>
    )
}