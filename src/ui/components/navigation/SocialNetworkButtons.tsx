import Button from "@/ui/design-system/button/Button";
import { footerSocialNetworksLiks } from "./appLinks";
import { uuid } from "uuidv4";
import clsx from "clsx";
import { RiFacebookFill } from "react-icons/ri";

interface Props {
  theme?: "gray" | "primary" | "secondary";
  className?: string;
}

const SocialNetworkButtons = ({ className, theme = "primary" }: Props) => {
  const iconList = footerSocialNetworksLiks.map((item) => {
    return (
      <Button
        key={uuid()}
        variant="icon"
        iconTheme={theme}
        icon={{ icon: item.icon ? item.icon : RiFacebookFill }}
        baseUrl={item.baseUrl}
        linkType={item.type}
      />
    );
  });
  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {iconList}
    </div>
  );
};

export default SocialNetworkButtons;
