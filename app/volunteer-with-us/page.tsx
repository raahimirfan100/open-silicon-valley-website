import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Volunteer With Us | OPEN Silicon Valley",
  description: "Join the OPEN Silicon Valley volunteer team",
}

export default function VolunteerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Volunteer With Us</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          OPEN Silicon Valley is a volunteer-led organization. Our success depends on the dedication and skills of our
          volunteers. Join our team and help build a stronger community while developing your skills and expanding your
          network.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="first-name" className="font-medium">
                First Name
              </label>
              <Input id="first-name" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="last-name" className="font-medium">
                Last Name
              </label>
              <Input id="last-name" required />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="font-medium">
              Phone Number
            </label>
            <Input id="phone" type="tel" />
          </div>

          <div className="space-y-2">
            <label htmlFor="linkedin" className="font-medium">
              LinkedIn Profile URL
            </label>
            <Input id="linkedin" type="url" />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Areas of Interest</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <label htmlFor="marketing">Marketing</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="events" />
                <label htmlFor="events">Events Organization</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="membership" />
                <label htmlFor="membership">Membership</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sponsorship" />
                <label htmlFor="sponsorship">Sponsorship</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tech" />
                <label htmlFor="tech">Technology & Website</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mentorship" />
                <label htmlFor="mentorship">Mentorship</label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="availability" className="font-medium">
              Availability
            </label>
            <Select>
              <SelectTrigger id="availability">
                <SelectValue placeholder="Select your availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3 hours per week</SelectItem>
                <SelectItem value="4-6">4-6 hours per week</SelectItem>
                <SelectItem value="7-10">7-10 hours per week</SelectItem>
                <SelectItem value="10+">10+ hours per week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="skills" className="font-medium">
              Relevant Skills & Experience
            </label>
            <Textarea id="skills" rows={4} />
          </div>

          <div className="space-y-2">
            <label htmlFor="motivation" className="font-medium">
              Why do you want to volunteer with OPEN Silicon Valley?
            </label>
            <Textarea id="motivation" rows={4} />
          </div>

          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  )
}
