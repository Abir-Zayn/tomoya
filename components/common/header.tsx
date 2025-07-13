import { BookOpen } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import NavLink from './nav-link';
import { ThemeToggle } from '../theme-toggle';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

function header() {
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
        {
          //if user is logged in, show the dashboard link
          <SignedIn>
            <NavLink href="/#dashboard" className="ml-4">
              Your Summaries
            </NavLink>
          </SignedIn>
        }
      </div>

      {/* Login Section */}
      <div className="flex lg:justify-end lg:flex-1 items-center gap-3">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro </div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex items-center gap-3">
            <NavLink href="/sign-in" className="">
              Sign In
            </NavLink>
          </div>
        </SignedOut>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default header;
