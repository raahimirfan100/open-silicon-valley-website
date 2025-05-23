import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | OPEN Silicon Valley",
  description: "Learn about OPEN Silicon Valley's mission and vision",
}

export default function AboutPage() {
  const boardMembers = [
    "Amer Haider",
    "Faraz Hoodbhoy",
    "Farhan Younas",
    "Ghufran Ahmed",
    "Haseeb Budhani",
    "Junaid Qurashi",
    "Moazzam Chaudry",
    "Sabiha Chunawala",
    "Shama Khan",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About OPEN Silicon Valley</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          The Organization of Pakistani Entrepreneurs is a global network of entrepreneurs, investors, and
          professionals, which consists of chapters all around the world in 15 cities ranging from Silicon Valley, New
          York, London, and Islamabad. We are the chapter based in Silicon Valley where many of the newest trends in
          technology are created and have a strong community that encourages entrepreneurship.
        </p>

        <p className="text-lg mb-6">
          OPEN provides a platform for entrepreneurs, investors and professionals to network, collaborate, and mentor
          each other in developing businesses and the laying the foundation of entrepreneurship in various fields. OPEN
          has established itself as the premier and most reputable brand in helping countless professionals showcase
          their brilliant businesses to investors and create many successful entrepreneurial endeavors for over 24
          years.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Vision</h2>
        <p>
          We strive to foster entrepreneurship and accelerate business development through holding workshops and forums
          where entrepreneurs and investors have a platform to network and share business ideas around the world through
          our cross-chapter programs. This influences large partnerships which thrive through mutual benefits and
          increase the overall success of business. This organic growth in businesses, investment and entrepreneurship
          strengthens the belief in the brand of Pakistan.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Mission</h2>
        <p>
          Our mission is to promote entrepreneurship, professional growth and business development by connecting the
          professional community in Silicon Valley. We organize various programs such as workshops which teach
          professionals various skills in the business world, forums where key speakers from the community showcase the
          newest trends, and events that provide a platform for entrepreneurs to share ideas.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Objective</h2>
        <p>
          Our key goals focus on helping our members either achieve their own business goals or overcome tough obstacles
          they are facing as entrepreneurs. We facilitate and encourage entrepreneurship, promote and create growth
          opportunities within the greater community, provide mentor ship to enterprising individuals and develop
          ongoing events. This is done through a variety of programs designed to challenge, empower, create networking
          opportunities and recognize the accomplishments of entrepreneurs and professionals.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6" id="leadership">
          President's Message
        </h2>
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=AH"
                  alt="Amer Haider"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  I extend a warm welcome to all of you in the OPEN Silicon Valley community. OPEN, as a dynamic and
                  expansive global network of entrepreneurs, investors, and professionals, boasts an impressive presence
                  with 15 chapters worldwide, including our distinguished Silicon Valley Chapter.
                </p>
                <p className="text-gray-700 mb-4">
                  Our mission at OPEN is creating and nurturing a vibrant platform where entrepreneurs, investors, and
                  professionals can forge meaningful connections, engage in enriching mentorship, and collaboratively
                  pave the way for innovation across various sectors.
                </p>
                <p className="text-gray-700 mb-4">
                  At its essence, OPEN SV thrives as a volunteer-led organization. Our team of passionate volunteers,
                  drawn from the vibrant Silicon Valley ecosystem and the wider global community, exemplifies dedication
                  and commitment. Their tireless efforts and devotion are the driving forces behind our organization's
                  ability to reach and surpass our annual milestones.
                </p>
                <p className="text-gray-700 mb-4">
                  In my role as President, I am wholeheartedly committed to elevating OPEN Silicon Valley to
                  unprecedented levels of achievement. My vision is centered on expanding the reach and impact of OPEN's
                  mission, fostering a synergistic relationship between Pakistan and Silicon Valley that benefits all.
                </p>
                <p className="text-right font-semibold">- Amer Haider, President, OPEN Silicon Valley</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Board Members</h2>
        <p className="mb-6">
          The OPEN Board is comprised of a selective group of our charter members. Our charter members are individuals
          who have been with OPEN for years helping broadening our scope and have had decades of experience as business
          professionals, executives, entrepreneurs, and investors. We hold periodical Board meetings to set the overall
          direction, discuss new trends, review performance, and revise strategies and policies for the organization.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={`/placeholder.svg?height=96&width=96&text=${member.split(" ")[0][0]}${member.split(" ")[1][0]}`}
                  alt={member}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium">{member}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
