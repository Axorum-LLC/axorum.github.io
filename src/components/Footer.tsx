import { Hexagon, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Hexagon className="h-6 w-6 logo" />
              <span className="ml-2 mt-1 text-md font-semibold logo">Axorum</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering tech startups with strategic financial leadership
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Bookkeeping</li>
              <li>Corporate Finance</li>
              <li>Strategic Finance</li>
              <li>Business Analytics</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              {/* <li><a href="#about">About</a></li> */}
              <li><a href="https://forms.gle/HKqZdYgCydYeuU4WA">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://forms.gle/HKqZdYgCydYeuU4WA" className="text-foreground hover:text-foreground/80">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/timothyofisher" className="text-foreground hover:text-foreground/80">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Axorum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}