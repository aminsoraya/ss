"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Search, Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TrendyolHeader() {
  const navigation = [
    { name: "خانه", href: "/" },
    { name: "ترندیول", href: "/trendyol" },
    { name: "آمازون", href: "/amazon" },
  ];

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/trendyol-logo.svg" // Add your logo path here
              alt="Trendyol"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex relative flex-1 max-w-xl outline-gray-400">
            <Input
              type="search"
              placeholder="محصول، دسته یا برند مورد نظر خود را تایپ کنید"
              className="pr-10 bg-gray-100 border-none !outline-none text-xs placeholder:text-xs"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5  text-orange-500 " />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-orange-500" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-4">
                  <Input
                    type="search"
                    placeholder="محصول، دسته یا برند مورد نظر خود را تایپ کنید"
                    className="pr-10 bg-gray-100 border-none outline-none text-xs placeholder:text-xs"
                  />
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    <User className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

