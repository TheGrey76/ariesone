
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WebsitePresentation from "@/components/WebsitePresentation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-12">
          <WebsitePresentation />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
