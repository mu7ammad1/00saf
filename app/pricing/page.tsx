"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$3",
    description: "Perfect for individuals and small projects",
    features: [
      "Image Generation",
      "2GB storage",
      "Basic support",
      "Access to core features",
      "Community access",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$10",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "20GB storage",
      "Priority support",
      "Advanced features",
      "Team collaboration",
      "Custom integrations",
      "Analytics dashboard",
    ],
    isPopular: true,
    buttonText: "Choose Pro",
  },
  {
    name: "Enterprise",
    price: "$30",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited everything",
      "100GB storage",
      "24/7 dedicated support",
      "Custom features",
      "Advanced security",
      "SLA guarantee",
      "Custom training",
      "Priority updates",
    ],
    buttonText: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-default-500 text-xl">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${tier.isPopular ? "border-2 border-primary" : ""}`}
              shadow="md"
            >
              {tier.isPopular && (
                <div className="mt-3">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="flex flex-col gap-2 text-center">
                <h3 className="font-bold text-xl">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-start">
                    {tier.price}
                  </span>
                  <span className="text-default-500">/month</span>
                </div>
                <p className="text-default-500">{tier.description}</p>
              </CardHeader>

              <Divider />

              <CardBody className="py-6">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon
                        className="text-success flex-shrink-0"
                        icon="lucide:check"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>

              <CardFooter>
                <Button
                  fullWidth
                  color={tier.isPopular ? "primary" : "default"}
                  size="lg"
                  variant={tier.isPopular ? "solid" : "bordered"}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
