import BookConsultation from "@/components/book-consultation";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import Services from "@/components/services";
import WhatsAppButton from "@/components/whatsapp-button";
import WhyUs from "@/components/why-us";
import WorkProcess from "@/components/work-process";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <RecentProjects />
        <WorkProcess />
        <ContactForm />
        <BookConsultation />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
