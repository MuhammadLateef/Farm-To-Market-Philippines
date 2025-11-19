'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function CommentForm() {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.comment.trim()) {
      newErrors.comment = 'Comment is required'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid URL (starting with http:// or https://)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      saveInfo: checked
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      // Reset form
      setFormData({
        comment: '',
        name: '',
        email: '',
        website: '',
        saveInfo: false,
      })
      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-6xl">
      {/* Comment Textarea */}
      <div className="space-y-2">
        <Label htmlFor="comment" className="text-base font-normal mb-5 text-foreground">
          Your email address will not be published. Required fields are marked <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="comment"
          name="comment"
          placeholder="Share your thoughts..."
          value={formData.comment}
          onChange={handleInputChange}
          className={`min-h-48 resize-vertical ${errors.comment ? 'border-destructive' : ''}`}
        />
        {errors.comment && (
          <p className="text-destructive text-sm">{errors.comment}</p>
        )}
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xl my-6 font-semibold text-foreground ">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            className={`min-h-16 ${errors.name ? 'border-destructive' : ''} `}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xl my-6 font-semibold text-foreground  ">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className={`min-h-16 ${errors.name ? 'border-destructive' : ''} `}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Website Field */}
      <div className="space-y-2">
        <Label htmlFor="website" className="text-xl my-6 font-semibold text-foreground ">
          Website <span className="text-muted-foreground text-sm">(optional)</span>
        </Label>
        <Input
          id="website"
          name="website"
          type="url"
          placeholder="https://example.com"
          value={formData.website}
          onChange={handleInputChange}
          className={`min-h-16 ${errors.name ? 'border-destructive' : ''} `}
        />
        {errors.website && (
          <p className="text-destructive text-sm">{errors.website}</p>
        )}
      </div>

      {/* Save Info Checkbox */}
      <div className="flex items-center space-x-3">
        <Checkbox
          id="saveInfo"
          checked={formData.saveInfo}
          onCheckedChange={handleCheckboxChange}
          className='w-8 h-8'
        />
        <Label htmlFor="saveInfo" className="font-normal text-foreground cursor-pointer text-sm my-6 ">
         &nbsp; Save my name, email, and website in this browser for the next time I comment.
        </Label>
      </div>

      {/* Submit Button */}
      <div className="flex items-center gap-4 text-xl my-6 ">
        <Button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white cursor-pointer"
        >
         Submit
        </Button>
        {submitted && (
          <p className="text-green-600 font-semibold">Comment submitted successfully!</p>
        )}
      </div>
    </form>
  )
}
