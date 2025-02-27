"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started and exploring the basics.",
    features: [
      "5 projects per month",
      "Basic templates",
      "Community support",
      "1GB storage",
      "Basic analytics",
    ],
    buttonText: "Your Current Plan",
    buttonVariant: "outline" as const,
    href: "#",
  },
  {
    name: "Pro",
    price: "20",
    description: "Everything you need for professional app development.",
    features: [
      "Unlimited projects",
      "Premium templates",
      "Priority support",
      "100GB storage",
      "Custom domains",
    ],
    buttonText: "Subscribe",
    buttonVariant: "default" as const,
    href: "/register",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold">UIxie</span>
          </div>
        </Link>
      </div>

      <main className="flex-1 py-16 px-4">
        <div className="text-center space-y-4 mb-12">
          <motion.h1
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the perfect plan for your needs. Always know what you'll pay.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Card
                className={`relative p-6 bg-card text-card-foreground ${
                  plan.popular ? "border-primary" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="pt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={plan.buttonVariant}
                    className="w-full mt-6"
                    size="lg"
                    asChild
                  >
                    <Link href={plan.href}>{plan.buttonText}</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            All plans include 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </main>

      <footer className="border-t border-border py-4 px-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground max-w-7xl mx-auto">
          <div>© 2025, a0.dev</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Contact Us
            </Link>
            <Link href="#" className="hover:text-foreground">
              Join our Discord
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
