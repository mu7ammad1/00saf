"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import {
  Check,
  CircleSlashIcon,
  CupSodaIcon,
  LifeBuoyIcon,
  PandaIcon,
} from "lucide-react";
import React from "react";

type user_plan = "free" | "pro" | "enterprise";

const userPlan: user_plan = "enterprise"; // جرب تغيرها بين "free", "pro", "enterprise"

function normalizeTitle(title: string): user_plan {
  if (title.toLowerCase().includes("enterprise")) return "enterprise";

  return title.toLowerCase() as user_plan;
}

export default function Upgrade() {
  return (
    <section className="flex flex-wrap items-start justify-center w-full h-fit my-10 gap-3 px-10">
      {plans.map((plan, index) => {
        const planType = normalizeTitle(plan.title);
        const isCurrentPlan = planType === userPlan;

        const disableFreePlanBtn = userPlan !== "free" && planType === "free";

        return (
          <Card
            key={index}
            className={`w-96 max-lg:w-11/12 max-xl:w-96 bg-neutral-100 relative ${planType === "pro" ? "border-2 border-blue-500/80" : "border-2"
              }`}
            radius="md"
            shadow="none"
          >
            {planType === "pro" && (
              <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                Popular Plan
              </div>
            )}

            {isCurrentPlan && (
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md z-10">
                Current Plan
              </div>
            )}

            <CardHeader className="flex flex-col items-start justify-start gap-2">
              {plan.icon}
              <h1 className="text-xl font-bold">{plan.title}</h1>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </CardHeader>

            <CardBody>
              <h1 className="text-4xl font-bold">{plan.price}</h1>
              <Divider className="mt-5" />
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full mt-5"
                >
                  <div className="text-sm text-gray-900 flex items-center gap-2">
                    {feature.icon}
                    {feature.label}
                  </div>
                  <p className="text-sm text-gray-900">{feature.value}</p>
                </div>
              ))}
              <Divider className="mt-5" />
            </CardBody>

            <CardFooter>
              <Button
                className="w-full"
                color="primary"
                isDisabled={isCurrentPlan || disableFreePlanBtn}
                size="lg"
              >
                {isCurrentPlan
                  ? planType === "free"
                    ? "Free Plan (No Upgrade)"
                    : "This is your plan"
                  : `Upgrade to ${plan.title}`}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
}

const plans = [
  {
    title: "Free",
    icon: <PandaIcon size={24} />,
    description:
      "Unlock advanced features and tools designed for professionals.",
    price: "$0",
    features: [
      {
        icon: <Check size={20} />,
        label: "Access Models",
        value: "9",
      },
      {
        icon: <Check size={20} />,
        label: "Generation image",
        value: "100",
      },
      {
        icon: <Check size={20} />,
        label: "Generation video",
        value: "5",
      },
      {
        icon: <Check size={20} />,
        label: "Generation 3D & 4D",
        value: "100",
      },
      { icon: <Check size={20} />, label: "Desgin", value: "Included" },
      { icon: <Check size={20} />, label: "Edit image", value: "Included" },
      { icon: <Check size={20} />, label: "Enhance", value: "Included" },
      {
        icon: <Check size={20} />,
        label: "Community",
        value: "Included",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "API Calls",
        value: "Unlimited",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "Projects",
        value: "Unlimited",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "Support",
        value: "Dedicated Manager",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
    ],
  },
  {
    title: "Pro",
    icon: <PandaIcon size={24} />,
    description:
      "Unlock advanced features and tools designed for professionals.",
    price: "$20",
    features: [
      {
        icon: <Check size={20} />,
        label: "Access Models",
        value: "Unlimited",
      },
      {
        icon: <Check size={20} />,
        label: "Generation image",
        value: "Fair use",
      },
      {
        icon: <Check size={20} />,
        label: "Generation video",
        value: "Fair use",
      },
      {
        icon: <Check size={20} />,
        label: "Generation 3D & 4D",
        value: "unlimited",
      },
      { icon: <Check size={20} />, label: "Desgin", value: "unlimited" },
      { icon: <Check size={20} />, label: "Edit image", value: "Fair use" },
      { icon: <Check size={20} />, label: "Enhance", value: "unlimited" },
      {
        icon: <Check size={20} />,
        label: "Community",
        value: "Upgrade",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "API Calls",
        value: "Unlimited",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "Projects",
        value: "Unlimited",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "Support",
        value: "Dedicated Manager",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <CircleSlashIcon size={20} />,
        label: "SLAs",
        value: "Included",
      },
    ],
  },
  {
    title: "Enterprise",
    icon: <LifeBuoyIcon size={24} />,
    description:
      "Scale your business with unlimited access and dedicated support.",
    price: "$200",
    features: [
      {
        icon: <Check size={20} />,
        label: "Access Models",
        value: "Unlimited",
      },
      {
        icon: <Check size={20} />,
        label: "Generation image",
        value: "Unlimited",
      },
      {
        icon: <Check size={20} />,
        label: "Generation video",
        value: "Unlimited",
      },
      {
        icon: <Check size={20} />,
        label: "Generation 3D & 4D",
        value: "Unlimited",
      },
      { icon: <Check size={20} />, label: "Desgin", value: "unlimited" },
      { icon: <Check size={20} />, label: "Edit image", value: "Included" },
      { icon: <Check size={20} />, label: "Enhance", value: "unlimited" },
      {
        icon: <Check size={20} />,
        label: "Community",
        value: "Included",
      },
      {
        icon: <Check size={20} />,
        label: "API Calls",
        value: "Unlimited",
      },
      {
        icon: <Check size={20} />,
        label: "Projects",
        value: "Unlimited",
      },
      {
        icon: <Check size={20} />,
        label: "Support",
        value: "Dedicated Manager",
      },
      {
        icon: <Check size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <Check size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <Check size={20} />,
        label: "SLAs",
        value: "Included",
      },
      {
        icon: <Check size={20} />,
        label: "SLAs",
        value: "Included",
      },
    ],
  },
];
