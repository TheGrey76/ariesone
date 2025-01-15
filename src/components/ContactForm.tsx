import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: `Thank you for your message. We will contact you at ${formData.email} soon. A copy has been sent to quinley.martini@aries76.com`,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-white/50 backdrop-blur-sm"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-white/50 backdrop-blur-sm"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="bg-white/50 backdrop-blur-sm min-h-[150px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald hover:from-aires-blue hover:to-aires-emerald transition-all duration-300 text-white"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;