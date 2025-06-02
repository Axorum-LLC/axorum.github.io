import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Resources() {
  const articles = [
    {
      title: "Understanding Startup Burn Rate",
      category: "Finance",
      date: "April 15, 2024",
      readTime: "5 min read",
      excerpt: "Learn how to calculate and optimize your startup's burn rate for sustainable growth.",
    },
    {
      title: "Preparing for Series A",
      category: "Fundraising",
      date: "April 12, 2024",
      readTime: "8 min read",
      excerpt: "A comprehensive guide to getting your startup ready for Series A funding.",
    },
    {
      title: "Financial Metrics That Matter",
      category: "Analytics",
      date: "April 10, 2024",
      readTime: "6 min read",
      excerpt: "Key financial metrics every tech startup should track and understand.",
    },
    {
      title: "Cash Flow Management",
      category: "Finance",
      date: "April 8, 2024",
      readTime: "7 min read",
      excerpt: "Essential strategies for managing cash flow in early-stage startups.",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Resources & Insights</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert insights and practical guides on startup finance, fundraising, and growth
        </p>
      </div>

      <div className="mb-12">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-muted-foreground mb-2">Explore articles by category. Click to filter</p>
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="justify-center">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="fundraising">Fundraising</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Card key={article.title} className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {article.category}
                    </span>
                    <div className="text-sm text-muted-foreground">
                      {article.date} · {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">Want to stay updated?</p>
        <div className="flex max-w-md mx-auto">
          <Input
            placeholder="Enter your email"
            className="rounded-r-none"
          />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}