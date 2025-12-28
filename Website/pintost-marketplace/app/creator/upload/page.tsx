"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileImage, FileCode, ArrowRight, ArrowLeft } from "lucide-react"

export default function CreatorUploadPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Upload New Image</h1>
        <p className="text-muted-foreground">
          Follow the steps to upload and verify your content. All images are reviewed before going live.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </div>
            {s < 4 && <div className={`flex-1 h-1 mx-2 ${s < step ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Upload Final Image */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Upload Final Image</CardTitle>
            <CardDescription>Upload the final JPEG or PNG image that will be sold on the marketplace.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-foreground transition-colors cursor-pointer">
              <FileImage className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">JPEG or PNG (max 50MB)</p>
              <Input type="file" className="hidden" accept="image/jpeg,image/png" />
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setStep(2)}>
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Upload Source File */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 2: Upload Proof/Source File</CardTitle>
            <CardDescription>
              Upload the original source file (PSD, RAW, AI, etc.) to verify authenticity. This file is kept private.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-foreground transition-colors cursor-pointer">
              <FileCode className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">PSD, RAW, AI, or other source files (max 200MB)</p>
              <Input type="file" className="hidden" />
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={() => setStep(3)}>
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Add Details */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 3: Add Image Details</CardTitle>
            <CardDescription>Provide information to help buyers discover your image.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" placeholder="Professional Business Meeting" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your image in detail..."
                rows={4}
                className="resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated) *</Label>
              <Input id="tags" placeholder="business, meeting, corporate, teamwork" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <select
                id="category"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>Business & Finance</option>
                <option>Nature & Wildlife</option>
                <option>Technology & Innovation</option>
                <option>Art & Design</option>
                <option>People & Lifestyle</option>
              </select>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={() => setStep(4)}>
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Set Pricing */}
      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 4: Set License Prices</CardTitle>
            <CardDescription>Set your pricing for different license types.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="standard-price">Standard License Price *</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input id="standard-price" type="number" placeholder="29" className="pl-7" />
              </div>
              <p className="text-sm text-muted-foreground">Recommended: $19 - $49</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="exclusive-price">Exclusive Buyout Price *</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input id="exclusive-price" type="number" placeholder="499" className="pl-7" />
              </div>
              <p className="text-sm text-muted-foreground">Recommended: $299 - $999</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Your Earnings</p>
              <p className="text-sm text-muted-foreground">
                You earn 70% of each sale. Pintost keeps 30% to cover platform costs and verification.
              </p>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(3)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Submit for Review
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
