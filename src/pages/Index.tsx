
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WebsitePresentation, { WebsitePresentationButton } from "@/components/WebsitePresentation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <div className="flex justify-end mb-6">
            <WebsitePresentationButton />
          </div>
          <WebsitePresentation />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
