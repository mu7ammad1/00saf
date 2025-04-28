import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";

import Index from "@/components/c";

const BTNS = () => {
  return (
    <CardBody className="flex items-baseline justify-start w-full p-0">
      <h3 className="text-sm flex justify-start items-baseline text-start">
        Generate new image with prompt...
      </h3>
      <Button
        isIconOnly
        as={Link}
        color="default"
        href="/#"
        radius="full"
        size="sm"
        variant="solid"
      >
        open
      </Button>
    </CardBody>
  );
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <Index />
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
        <Card className="w-full max-w-full gap-2 grid grid-cols-3 shadow-none">
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
        </Card>
      </div>
    </section>
  );
}
