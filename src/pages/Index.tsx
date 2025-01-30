
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WebsitePresentation, { WebsitePresentationButton } from "@/components/WebsitePresentation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-12">
          <div className="flex justify-end mb-8">
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
