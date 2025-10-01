import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Database,
  Search,
  Mail,
  TrendingUp,
  Users,
  Zap,
  LineChart,
  Target,
  Brain,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
} from "lucide-react";

const AiresLanding = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your interest. We'll be in touch shortly.",
    });
    setFormData({
      fullName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="antialiased bg-aires-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aires-deepBlue via-aires-navy to-aires-blue opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yVjEwdjIyem0tMiAyaC0yIDJ6bTAtMmgtMjJoMjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aires-white/10 backdrop-blur-sm border border-aires-silver/20 mb-8">
            <Zap className="w-4 h-4 text-aires-orange" />
            <span className="text-aires-silverLight text-sm font-medium">AI-Native Infrastructure</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-aires-white leading-tight">
            AI-native Fundraising<br />Infrastructure
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-aires-silverLight leading-relaxed">
            Institutional-grade capital raising powered by artificial intelligence.<br />
            Data-driven investor targeting for GPs, funds, and sponsors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-aires-orange hover:bg-aires-orangeLight text-white px-8 py-6 text-lg rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discover How We Reinvent Capital Raising <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-aires-white/30 text-aires-white hover:bg-aires-white/10 px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300"
              onClick={() => window.open("https://www.linkedin.com/in/edoardogrigione/", "_blank")}
            >
              Book a Call
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-aires-orange mb-2">£500M+</div>
              <div className="text-aires-silverLight">Capital Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-aires-orange mb-2">200+</div>
              <div className="text-aires-silverLight">Institutional Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-aires-orange mb-2">15+</div>
              <div className="text-aires-silverLight">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 px-4 bg-gradient-to-b from-aires-white to-aires-silverLight/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-aires-navy">
              About Aires Data
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-aires-blue to-aires-orange mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-aires-silver/20">
                <Building2 className="w-12 h-12 text-aires-blue mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-aires-navy">UK-Based Advisory Excellence</h3>
                <p className="text-aires-gray leading-relaxed mb-4">
                  Aires Data is a premier UK-based advisory and data-driven fundraising company, 
                  supporting General Partners, fund managers, and sponsors in connecting with 
                  institutional investors worldwide.
                </p>
                <p className="text-aires-gray leading-relaxed">
                  Our expertise spans <strong>Private Equity</strong>, <strong>Venture Capital</strong>, 
                  and <strong>Alternative Investments</strong>, delivering sophisticated solutions 
                  for complex capital raising challenges.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-aires-blue/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-aires-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-aires-navy">AI-Driven Analytics</h4>
                      <p className="text-aires-gray text-sm">
                        Proprietary algorithms analyze investor behavior, preferences, and historical patterns 
                        to optimize fundraising strategies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-aires-orange/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-aires-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-aires-navy">Data-Based Investor Targeting</h4>
                      <p className="text-aires-gray text-sm">
                        Precision matching using comprehensive investor databases and sentiment analysis 
                        to identify the most relevant capital partners.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-aires-deepBlue/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-aires-deepBlue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-aires-navy">Institutional Innovation</h4>
                      <p className="text-aires-gray text-sm">
                        Combining traditional advisory expertise with cutting-edge technology 
                        to deliver superior outcomes for emerging and established managers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-aires-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-aires-navy">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-aires-blue to-aires-orange mx-auto mb-8"></div>
            <p className="text-xl text-aires-gray max-w-3xl mx-auto">
              Comprehensive capital raising solutions powered by AI and institutional expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <Card className="border-2 border-aires-silver/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-aires-blue/50 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-aires-blue to-aires-deepBlue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-aires-navy">Fund Placement 2.0</h3>
                <p className="text-aires-gray leading-relaxed mb-4">
                  Next-generation fund placement leveraging AI-powered investor profiling and 
                  sentiment analysis to dramatically improve GP-LP matching accuracy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-blue mt-0.5 flex-shrink-0" />
                    <span>Predictive investor appetite modeling</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-blue mt-0.5 flex-shrink-0" />
                    <span>Automated deal-investor matching at scale</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-blue mt-0.5 flex-shrink-0" />
                    <span>Real-time market intelligence dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-2 border-aires-silver/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-aires-orange/50 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-aires-orange to-aires-orangeLight flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-aires-navy">Fund Advisory</h3>
                <p className="text-aires-gray leading-relaxed mb-4">
                  Strategic advisory services covering fund structuring, capital solutions, 
                  and investor relations strategy for optimal fundraising outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-orange mt-0.5 flex-shrink-0" />
                    <span>Fund structure optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-orange mt-0.5 flex-shrink-0" />
                    <span>Investor relations strategy & execution</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-orange mt-0.5 flex-shrink-0" />
                    <span>Capital solutions and co-investment strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-2 border-aires-silver/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-aires-deepBlue/50 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-aires-deepBlue to-aires-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-aires-navy">AI-Powered Secondary Advisory</h3>
                <p className="text-aires-gray leading-relaxed mb-4">
                  Advanced market intelligence for secondary transactions, NAV financing, 
                  and GP-led deals using machine learning and alternative data sources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-deepBlue mt-0.5 flex-shrink-0" />
                    <span>Secondary market pricing intelligence</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-deepBlue mt-0.5 flex-shrink-0" />
                    <span>GP-led transaction structuring</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-deepBlue mt-0.5 flex-shrink-0" />
                    <span>NAV financing optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-2 border-aires-silver/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-aires-blue/50 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-aires-blue via-aires-deepBlue to-aires-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-aires-navy">Sustainable Investing Advisory</h3>
                <p className="text-aires-gray leading-relaxed mb-4">
                  ESG analytics and impact investing advisory to meet institutional mandates 
                  and attract sustainability-focused capital.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-blue mt-0.5 flex-shrink-0" />
                    <span>ESG integration frameworks</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-blue mt-0.5 flex-shrink-0" />
                    <span>Impact measurement & reporting systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-aires-gray">
                    <CheckCircle2 className="w-5 h-5 text-aires-blue mt-0.5 flex-shrink-0" />
                    <span>Sustainable finance strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Track Record / Case Studies */}
      <section className="py-24 px-4 bg-gradient-to-b from-aires-silverLight/30 to-aires-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-aires-navy">
              Track Record
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-aires-blue to-aires-orange mx-auto mb-8"></div>
            <p className="text-xl text-aires-gray max-w-3xl mx-auto">
              Delivering exceptional results across Private Equity, Venture Capital, and Alternative Investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-none shadow-lg bg-gradient-to-br from-aires-white to-aires-silverLight/50">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-aires-blue mb-2">£500M+</div>
                <div className="text-aires-gray font-medium">Total Capital Raised</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-aires-white to-aires-silverLight/50">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-aires-orange mb-2">50+</div>
                <div className="text-aires-gray font-medium">Successful Closings</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-aires-white to-aires-silverLight/50">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-aires-deepBlue mb-2">98%</div>
                <div className="text-aires-gray font-medium">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-aires-deepBlue to-aires-blue rounded-2xl p-12 text-center text-white">
            <Award className="w-16 h-16 mx-auto mb-6 text-aires-orange" />
            <h3 className="text-2xl font-semibold mb-4">Selected Achievements</h3>
            <p className="text-aires-silverLight leading-relaxed max-w-3xl mx-auto mb-8">
              Our team has successfully advised on fundraising mandates for first-time fund managers, 
              established GPs seeking growth capital, and complex secondary transactions across Europe, 
              North America, and Asia-Pacific markets.
            </p>
            <div className="text-sm text-aires-silver/80">
              Detailed case studies and client testimonials available upon request
            </div>
          </div>
        </div>
      </section>

      {/* Insights / News */}
      <section className="py-24 px-4 bg-aires-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-aires-navy">
              Insights & Research
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-aires-blue to-aires-orange mx-auto mb-8"></div>
            <p className="text-xl text-aires-gray max-w-3xl mx-auto">
              Industry-leading analysis and thought leadership on fundraising, AI, and capital markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-aires-silver/30 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-aires-blue/10 flex items-center justify-center mb-4 group-hover:bg-aires-blue/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-aires-blue" />
                </div>
                <div className="text-sm text-aires-orange font-semibold mb-2">NEWSLETTER</div>
                <h3 className="text-xl font-semibold mb-3 text-aires-navy">New Wealth</h3>
                <p className="text-aires-gray text-sm leading-relaxed mb-4">
                  Weekly insights on fundraising trends, LP perspectives, and emerging opportunities 
                  in alternative investments.
                </p>
                <Button variant="link" className="text-aires-blue p-0 hover:text-aires-deepBlue">
                  Subscribe <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="border border-aires-silver/30 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => window.open("https://www.linkedin.com/newsletters/6957951771868585985/", "_blank")}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-aires-orange/10 flex items-center justify-center mb-4 group-hover:bg-aires-orange/20 transition-colors">
                  <Mail className="w-6 h-6 text-aires-orange" />
                </div>
                <div className="text-sm text-aires-blue font-semibold mb-2">BLOG</div>
                <h3 className="text-xl font-semibold mb-3 text-aires-navy">Fat Cats & Starving Dogs</h3>
                <p className="text-aires-gray text-sm leading-relaxed mb-4">
                  Provocative commentary on market dynamics, fundraising strategies, and the future 
                  of capital allocation.
                </p>
                <Button variant="link" className="text-aires-blue p-0 hover:text-aires-deepBlue">
                  Read Articles <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-aires-silver/30 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-aires-deepBlue/10 flex items-center justify-center mb-4 group-hover:bg-aires-deepBlue/20 transition-colors">
                  <Brain className="w-6 h-6 text-aires-deepBlue" />
                </div>
                <div className="text-sm text-aires-orange font-semibold mb-2">AI RESEARCH</div>
                <h3 className="text-xl font-semibold mb-3 text-aires-navy">AI-Generated Reports</h3>
                <p className="text-aires-gray text-sm leading-relaxed mb-4">
                  Deep-dive analysis powered by machine learning on market trends, company performance, 
                  and investment opportunities.
                </p>
                <Button variant="link" className="text-aires-blue p-0 hover:text-aires-deepBlue">
                  View Reports <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-aires-deepBlue hover:bg-aires-navy text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Research Deck <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-aires-deepBlue via-aires-navy to-aires-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yVjEwdjIyem0tMiAyaC0yIDJ6bTAtMmgtMjJoMjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-aires-white">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-aires-orange to-aires-orangeLight mx-auto mb-8"></div>
            <p className="text-xl text-aires-silverLight max-w-3xl mx-auto">
              Ready to transform your fundraising strategy? Let's discuss how Aires Data can help you achieve your capital raising objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-aires-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-aires-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-aires-orange" />
                    </div>
                    <div>
                      <div className="font-semibold text-aires-white mb-1">UK Headquarters</div>
                      <div className="text-aires-silverLight text-sm">
                        Aires Data Limited<br />
                        London, United Kingdom
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-aires-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-aires-orange" />
                    </div>
                    <div>
                      <div className="font-semibold text-aires-white mb-1">Email</div>
                      <a href="mailto:info@airesdata.com" className="text-aires-silverLight text-sm hover:text-aires-orange transition-colors">
                        info@airesdata.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-aires-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-aires-orange" />
                    </div>
                    <div>
                      <div className="font-semibold text-aires-white mb-1">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/edoardogrigione/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-aires-silverLight text-sm hover:text-aires-orange transition-colors"
                      >
                        Connect with Edoardo Grigione
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-aires-white/20">
                <p className="text-aires-silverLight text-sm leading-relaxed">
                  <strong className="text-aires-white">Aires Data</strong> is founded by Edoardo Grigione, 
                  an international fundraising advisor and founder of Aries76 Ltd, dedicated to making 
                  capital raising more efficient, scalable, and data-driven.
                </p>
              </div>
            </div>

            <div className="bg-aires-white/5 backdrop-blur-sm rounded-2xl p-8 border border-aires-white/10">
              <h3 className="text-2xl font-semibold text-aires-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-aires-silverLight text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="bg-aires-white/10 border-aires-white/20 text-aires-white placeholder:text-aires-silver/50 focus:border-aires-orange"
                  />
                </div>

                <div>
                  <label className="block text-aires-silverLight text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-aires-white/10 border-aires-white/20 text-aires-white placeholder:text-aires-silver/50 focus:border-aires-orange"
                  />
                </div>

                <div>
                  <label className="block text-aires-silverLight text-sm font-medium mb-2">
                    Company / Fund
                  </label>
                  <Input
                    placeholder="Your organization"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-aires-white/10 border-aires-white/20 text-aires-white placeholder:text-aires-silver/50 focus:border-aires-orange"
                  />
                </div>

                <div>
                  <label className="block text-aires-silverLight text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us about your fundraising needs..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-aires-white/10 border-aires-white/20 text-aires-white placeholder:text-aires-silver/50 focus:border-aires-orange min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-aires-orange hover:bg-aires-orangeLight text-white py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Submit Request <ArrowRight className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="py-12 px-4 bg-aires-orange">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-semibold text-white mb-4">
            Ready to scale your fundraising with AI?
          </p>
          <Button 
            size="lg"
            className="bg-aires-white text-aires-orange hover:bg-aires-silverLight transition-all duration-300"
            onClick={() => window.open("https://www.linkedin.com/in/edoardogrigione/", "_blank")}
          >
            Book a Call Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AiresLanding;
