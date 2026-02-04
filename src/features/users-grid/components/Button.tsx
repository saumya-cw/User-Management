import clsx from "clsx";

type ButtonProps = {
  label: string;
  onClick: () => void;
  isActive?: boolean;
};

export function Button({ label, onClick, isActive }: ButtonProps) {
  const base = "px-4 py-2 text-sm rounded transition font-medium";

  return (
    <button
      onClick={onClick}
      className={clsx(
        base,
        isActive
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300",
      )}
    >
      {label}
    </button>
  );
}
