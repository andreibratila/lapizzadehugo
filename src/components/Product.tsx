import Image from 'next/image';

interface ProductProps {
  path: string;
  name: string;
  desc?: string;
  price?: string;
  lgheigth?: string;
}

export const Product: React.FC<ProductProps> = ({
  path,
  name,
  desc,
  price,
  lgheigth,
}) => {
  return (
    <div className="px-10 py-10">
      <div className="max-w-sm space-y-3 overflow-hidden rounded pb-6 text-center shadow-lg">
        <Image src={path} alt={name} width={1000} height={1000} />
        <div className={`lg: px-3${lgheigth}`}>
          <div className="mb-2 text-center text-2xl font-bold">{name}</div>
          <p className="text-lg text-gray-700">{desc}</p>
        </div>
        <div>
          <span className="text-lg font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};
