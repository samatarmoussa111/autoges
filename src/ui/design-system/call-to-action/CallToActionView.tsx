import Container from "@/ui/components/container/Container";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

const CallToActionView = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typography variant="h2" theme="white" component="h2">
            N’attend pas pour développer tes compétences...
          </Typography>
          <div>
            <Button
              variant="success"
              baseUrl="/#"
              linkType={LinkTypes.EXTERNAL}
            >
              Formations React.js gratuite
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={1210}
            height={1210}
            src="/assets/svg/bombers.svg"
            alt="Bombe"
            className="absolute -bottom-[480px] -right-[300px] "
          />
        </div>
      </Container>
    </div>
  );
};

export default CallToActionView;
