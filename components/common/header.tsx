import { BookOpen } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import NavLink from './nav-link';
import { ThemeToggle } from '../theme-toggle';

function header() {
  const isLoggedIn = false; // Replace with actual authentication logic
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        {/* Logo Section */}
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <BookOpen
            className="w-5 h-5 lg:w-8 lg:h-8 
            text-foreground hover:rotate-12 transform transition duration-200 ease-in-out
            "
          />
          <span className="font-extrabold lg:text-xl text-foreground">
            Tomoya
          </span>
        </NavLink>
      </div>

      {/* Pricing Section */}
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && (
          <NavLink href="/#dashboard" className="ml-4">
            Your Summaries
          </NavLink>
        )}
      </div>

      {/* Login Section */}
      <div className="flex lg:justify-end lg:flex-1 items-center gap-3">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro </div>
            <Button>Profile</Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <NavLink href="/sign-in" className="">
              Sign In
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default header;
