import { iconProps } from "@/types/iconProps";
import clsx from "clsx";
import Spinner from "../spinner/Spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "disabled"
    | "icon"
    | "success";
  icon?: iconProps;
  iconTheme?: "primary" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  action?: Function;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

const Button = ({
  size = "medium",
  variant = "primary",
  icon,
  iconTheme = "primary",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  action = () => {},
  type = "button",
  fullWidth = false,
}: Props) => {
  let variantStyles: string = "";
  let sizeStyles: string = "";
  let iconSize: number = 0;

  switch (variant) {
    case "primary": // Default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "success":
      variantStyles = "bg-secondary hover:bg-secondary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "icon":
      if (iconTheme === "primary") {
        // Default
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }

      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center  w-[40px] h-[40px] "
          : "px-[14px] py-[12px]"
      }`;
      iconSize = 18;
      break;
    case "medium": // Default
      sizeStyles = `text-caption2 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      iconSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      iconSize = 24;
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {(variant === "icon" || variant === "primary") &&
          iconTheme !== "secondary" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" variant="primary" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "icon" ? (
          <>
            {" "}
            <icon.icon size={iconSize} />{" "}
          </>
        ) : (
          <div className={clsx(icon && "flex items-center gap-2")}>
            {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        variantStyles,
        sizeStyles,
        iconSize,
        isLoading && "cursor-not-allowed",
        fullWidth && "w-full",
        "relative animate"
      )}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>;
    }
  }

  return <>{buttonElement}</>;
};

export default Button;
