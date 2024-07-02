import { NavProductos } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[80vh]">
      <NavProductos />
      {children}
    </div>
  );
}
