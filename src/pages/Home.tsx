import { ArrowRight, BarChart2, PieChart, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const services = [
    {
      title: "Bookkeeping",
      description: "Accurate and timely financial records with tech-focused processes",
      icon: <BarChart2 className="h-6 w-6" />,
    },
    {
      title: "Corporate Finance",
      description: "Strategic financial planning and capital structure optimization",
      icon: <PieChart className="h-6 w-6" />,
    },
    {
      title: "Strategic Finance",
      description: "Long-term financial strategy and growth planning",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Business Analytics",
      description: "Data-driven insights for informed decision making",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  // const testimonials = [
  //   {
  //     quote: "Axorum transformed our financial operations and helped us scale efficiently.",
  //     author: "Sarah Chen",
  //     role: "CEO, TechStart",
  //     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
  //   },
  //   {
  //     quote: "Their strategic insights were crucial for our Series A fundraising success.",
  //     author: "Michael Rodriguez",
  //     role: "Founder, DataFlow",
  //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
  //   },
  // ];

  return (
    <div className="w-full space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <h1 className="text-6xl md:text-9xl font-normal mb-6 logo">
            Axorum
          </h1>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Fractional CFO Services for Tech Startups
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Strategic financial leadership to help your startup scale efficiently and sustainably
          </p>
          <Button size="lg" className="text-lg w-xl">
            <a href="https://forms.gle/HKqZdYgCydYeuU4WA" target="_blank" rel="noopener noreferrer" className="font-semibold flex items-center">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="pt-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Logos Section */}
      {/* <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Trusted By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-foreground/10 rounded-lg"></div>
          ))}
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author}>
              <CardContent className="pt-6">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* About Section */}
      {/* <section id="about" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About Our Leadership</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
            alt="James Anderson"
            className="rounded-lg w-64 h-64 object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">James Anderson</h3>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in finance and technology, James has helped numerous startups navigate their financial journey from seed to Series C. His expertise spans financial strategy, fundraising, and operational optimization.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Finance Function?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your startup scale efficiently
          </p>
          <Button size="lg" className="text-lg">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section> */}
    </div>
  );
}