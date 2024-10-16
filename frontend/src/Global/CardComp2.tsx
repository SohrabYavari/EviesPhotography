import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Props {
  header?: string;
  description?: JSX.Element;
  image?: string;
}

const CardComp = ({ header, description, image }: Props) => {
  return (
    <>
      <div className="">
        <Card className="bg-primary text-secondary border-primary shadow-inner shadow-accent">
          <CardContent className="flex p-0">
            <CardDescription className="basis-2/3 p-2">
              <CardHeader className="fancy-font text-4xl">{header}</CardHeader>
              <Separator />
              <p className="md:px-8 md:py-2 px-2 py-2">{description}</p>
            </CardDescription>
            <div className="basis-1/3">
              <figure>
                <img
                  src={image}
                  alt="Profile Photo"
                  className="w-full h-96 bg-white md:rounded-r-2xl"
                />
              </figure>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CardComp;
