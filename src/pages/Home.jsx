import { HeroSection, OldestProducts, RecentProductSection } from "@/components/elements";

export default function Home() {

  return (
    <div className=' min-h-screen w-full bg-background flex justify-center items-center flex-col'>

      <HeroSection />

      <RecentProductSection />
      
      <OldestProducts />

      <HeroSection />

      <RecentProductSection />
      
    </div>
  )

}