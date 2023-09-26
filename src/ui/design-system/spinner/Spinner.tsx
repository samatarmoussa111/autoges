import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}

const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyles: string = "";
  let sizeStyles: string = "";

  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium": // Default
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
  }

  switch (variant) {
    case "primary": // Default
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "text-white";
      break;
  }
  return (
    <>
      <CgSpinner className={clsx(sizeStyles, variantStyles, "animate-spin")} />
    </>
  );
};

export default Spinner;
