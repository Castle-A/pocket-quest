import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppPreview from '@/components/AppPreview'
import SocialProof from '@/components/SocialProof'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  )
}
