import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { GraduationCapIcon, Loader } from "lucide-react";
import React from "react";

export default function Upgrade() {
  return (
    <section className="flex items-start justify-center w-full h-screen mt-10 gap-3">
      <Card className="w-1/4 bg-foreground-100 border" radius="md" shadow="none">
        <CardHeader className="flex flex-col items-start justify-start gap-2">
          <Loader size={24} />
          <h1 className="text-xl font-bold">Demo</h1>
          <p className="text-sm text-gray-500">
            Try Bloom for free to test it in work
          </p>
        </CardHeader>
        <CardBody>
          <h1 className="text-4xl font-bold">Free</h1>
          <Divider className="mt-5" />
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <Loader size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>

          <Divider className="mt-5" />
        </CardBody>
        <CardFooter>
          <Button className="w-full" size="lg" isDisabled>
            You&apos;r Plan
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-1/4 bg-foreground-100 border" radius="md" shadow="none">
        <CardHeader className="flex flex-col items-start justify-start gap-2">
          <Loader size={24} />
          <h1 className="text-xl font-bold">Professional</h1>
          <p className="text-sm text-gray-500">
            Try Bloom for free to test it in work
          </p>
        </CardHeader>
        <CardBody>
          <h1 className="text-4xl font-bold">$20</h1>
          <Divider className="mt-5" />
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <Loader size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>

          <Divider className="mt-5" />
        </CardBody>
        <CardFooter>
          <Button className="w-full" size="lg">
            Upgrade
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-1/4 bg-foreground-100 border" radius="md" shadow="none">
        <CardHeader className="flex flex-col items-start justify-start gap-2">
          <Loader size={24} />
          <h1 className="text-xl font-bold">Enterprise API</h1>
          <p className="text-sm text-gray-500">
            Try Bloom for free to test it in work
          </p>
        </CardHeader>
        <CardBody>
          <h1 className="text-4xl font-bold">$130</h1>
          <Divider className="mt-5" />
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <Loader size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div className="text-sm text-gray-900 flex items-center gap-2">
              <GraduationCapIcon size={20} />
              GraduationCapIcon
            </div>
            <p className="text-sm text-gray-900">100</p>
          </div>

          <Divider className="mt-5" />
        </CardBody>
        <CardFooter>
          <Button className="w-full" size="lg">
            Upgrade
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
