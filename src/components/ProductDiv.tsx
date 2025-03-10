export const ProductDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container grid content-center gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {children}
    </div>
  );
};
