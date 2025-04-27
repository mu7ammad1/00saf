import Index from "@/components/c";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <Index />
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
        <h1 className="text-2xl font-bold">Welcome to the Embla Carousel</h1>
        <p className="text-lg">
          This is a simple example of an Embla carousel.
        </p>
        <p className="text-lg">
          This is a simple example of an Embla carousel.
        </p>
        <p className="text-lg">You can customize it as per your needs.</p>
        <p className="text-lg">Enjoy!</p>
      </div>
    </section>
  );
}
