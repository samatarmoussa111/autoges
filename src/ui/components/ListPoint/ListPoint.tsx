import { iconProps } from "@/types/iconProps";

interface Props {
  children: React.ReactNode;
  icon: iconProps;
  iconSize?: number;
  className?: string;
}

export const ListPoint = ({
  children,
  icon,
  iconSize = 24,
  className,
}: Props) => {
  return (
    <>
      <div className="flex items-start gap-2">
        <icon.icon size={iconSize} className={className} />
        {children}
      </div>
    </>
  );
};
