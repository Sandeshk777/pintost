"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Plus, CheckCircle2, DollarSign, Shield, Users, X } from "lucide-react"

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    country: "",
    artStyle: "",
    portfolioLinks: ["", "", "", ""],
    invitationCode: "",
    agreedToTerms: false,
  })
  const [uploadedImages, setUploadedImages] = useState<(File | null)[]>([null, null, null, null, null, null])

  const handleImageUpload = (index: number, file: File | null) => {
    const newImages = [...uploadedImages]
    newImages[index] = file
    setUploadedImages(newImages)
  }

  const removeImage = (index: number) => {
    handleImageUpload(index, null)
  }

  const handlePortfolioLinkChange = (index: number, value: string) => {
    const newLinks = [...formData.portfolioLinks]
    newLinks[index] = value
    setFormData({ ...formData, portfolioLinks: newLinks })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm hover:text-neutral-600 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Pintost Creator</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Join our curated marketplace and share your authentic digital art with a global audience. We're looking for
            unique, high-quality photos, illustrations, and digital art from passionate creators. Start your application
            below.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
              }`}
            >
              1
            </div>
            <span className="text-sm font-medium">Your Information</span>
          </div>
          <div className="w-12 h-px bg-neutral-300" />
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
              }`}
            >
              2
            </div>
            <span className="text-sm font-medium">Portfolio</span>
          </div>
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>Tell us about yourself and your creative work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name / Studio Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country of Residence *</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="artStyle">Primary Art Style / Niche *</Label>
                <Textarea
                  id="artStyle"
                  placeholder="Describe your artistic style, specialty, or niche (e.g., minimalist photography, digital illustrations, abstract art)"
                  value={formData.artStyle}
                  onChange={(e) => setFormData({ ...formData, artStyle: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-4">
                <Label>Links to Your Public Portfolios * (Required for review)</Label>
                <div className="space-y-3">
                  {[
                    "Behance / ArtStation",
                    "Dribbble / DeviantArt",
                    "Personal Website",
                    "Instagram / Social Media",
                  ].map((placeholder, index) => (
                    <Input
                      key={index}
                      placeholder={placeholder}
                      value={formData.portfolioLinks[index]}
                      onChange={(e) => handlePortfolioLinkChange(index, e.target.value)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="invitationCode">Invitation Code (Optional)</Label>
                <Input
                  id="invitationCode"
                  placeholder="Enter code if you have one"
                  value={formData.invitationCode}
                  onChange={(e) => setFormData({ ...formData, invitationCode: e.target.value })}
                />
              </div>

              <Button onClick={() => setStep(2)} className="w-full" size="lg">
                Next: Upload Portfolio
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Portfolio Submission */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Show Us Your Best Work</CardTitle>
              <CardDescription>
                Upload 6 examples of your original digital art, photos, or illustrations that best represent your style
                and quality. These will be reviewed to assess your suitability for Pintost.com.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {uploadedImages.map((image, index) => (
                  <Card
                    key={index}
                    className="border-2 border-dashed border-neutral-300 hover:border-neutral-400 transition-colors"
                  >
                    <CardContent className="p-6">
                      {!image ? (
                        <label className="cursor-pointer block">
                          <input
                            type="file"
                            accept="image/jpeg,image/png"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) handleImageUpload(index, file)
                            }}
                          />
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <Plus className="h-12 w-12 text-neutral-400 mb-3" />
                            <p className="font-medium mb-1">Add Image {index + 1}</p>
                            <p className="text-xs text-neutral-500">JPG, PNG • Max 10MB</p>
                          </div>
                        </label>
                      ) : (
                        <div className="relative">
                          <img
                            src={URL.createObjectURL(image) || "/placeholder.svg"}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-48 object-cover rounded"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <p className="text-xs text-neutral-600 mt-2 truncate">{image.name}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4">
                <p className="text-sm text-neutral-700 font-medium">
                  Important: We do not accept images created or significantly modified using generative AI models.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    I have read and agree to the{" "}
                    <Link href="/terms" className="underline hover:text-neutral-600">
                      Pintost.com Contributor Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline hover:text-neutral-600">
                      Privacy Policy
                    </Link>
                    . I certify that all submitted work is original and that I hold all necessary rights.
                  </Label>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1" size="lg">
                  Back
                </Button>
                <Button
                  onClick={() => {
                    // Handle submission
                    alert("Application submitted successfully!")
                  }}
                  disabled={!formData.agreedToTerms || uploadedImages.filter((img) => img !== null).length < 6}
                  className="flex-1"
                  size="lg"
                >
                  Submit Application
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Why Apply Section */}
        <Card className="mt-12 bg-neutral-50 border-neutral-200">
          <CardHeader>
            <CardTitle>Why Apply to Pintost?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fair Commission Rates</h3>
                  <p className="text-sm text-neutral-600">
                    Keep more of what you earn with our competitive creator-friendly rates
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Protection for Your Work</h3>
                  <p className="text-sm text-neutral-600">
                    Watermarking and verification systems protect your original content
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Global Audience</h3>
                  <p className="text-sm text-neutral-600">Reach buyers and art enthusiasts from around the world</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Curated Community</h3>
                  <p className="text-sm text-neutral-600">
                    Be part of an exclusive network of verified, talented creators
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
