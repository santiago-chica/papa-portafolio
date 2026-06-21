type Specification = {
  name: string;
  value: string;
  icon: string;
};

interface SpecificationCardProps {
  item: Specification;
}

export function SpecificationCard({
  item,
}: SpecificationCardProps) {
  return (
    <div className="border-b border-slate-200 py-5 rounded-xl">
      <div className="flex items-start justify-between px-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">
            {item.name}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {item.value}
          </p>
        </div>

        <img
          src={import.meta.env.BASE_URL + item.icon}
          alt={item.name}
          className="h-16 w-16 object-contain opacity-50"
        />
      </div>
    </div>
  );
}