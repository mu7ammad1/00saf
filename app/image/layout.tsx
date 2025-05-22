export default function GenerateImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-20 p-8 w-full h-full">
      <div className="inline-block w-full text-center justify-center mb-10">
        {children}
      </div>
    </section>
  );
}
