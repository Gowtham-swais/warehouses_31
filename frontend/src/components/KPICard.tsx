type KPICardProps = {
  title: string;
  value: string;
  subtitle: string;
  onClick?: () => void;
};

export default function KPICard({
  title,
  value,
  subtitle,
  onClick,
}: KPICardProps) {
  return (
    <div
      onClick={onClick}
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        border-l-4
        border-blue-600
      "
    >
      <p className="text-sm text-gray-500 font-medium">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-gray-800 mt-3">
        {value}
      </h2>

      <p className="text-sm text-green-600 mt-3">
        {subtitle}
      </p>
    </div>
  );
}
