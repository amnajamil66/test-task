import { cn } from "@/lib/utils";

type PentButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "white";
  size?: "sm" | "md" | "lg";
};

export function PentButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: PentButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold opacity-90 transition-opacity hover:opacity-100 cursor-pointer",
        size === "sm" && "text-sm h-10 gap-2 px-5",
        size === "md" && "text-base h-11 gap-2 px-6",
        size === "lg" && "text-base h-12 gap-2 px-6",
        variant === "primary" && "text-white",
        variant === "white" && "bg-white text-[#1C1C1C]",
        className,
      )}
      style={
        variant === "primary"
          ? { background: "linear-gradient(-41deg, #301A3A 7%, #442155 60%)" }
          : undefined
      }
      {...props}
    >
      {children}
    </button>
  );
}