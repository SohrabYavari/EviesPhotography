import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Props {
  header?: string;
  description?: string;
}

const CardComp = ({ header, description }: Props) => {
  return (
    <>
      <div className="my-2">
        <Card className="bg-primary text-secondary border-primary shadow-inner shadow-accent">
          <CardContent>
            <CardHeader className="fancy-font text-4xl">{header}</CardHeader>
            <Separator />
            <CardDescription className="py-2 flex">{description}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CardComp;
