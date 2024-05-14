import { Image } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import Skills from "./Skills";

function CardItem({ name, subname, img, imgsrc, date, skills }) {
  return (
    <div className="group relative  transition-all duration-300 hover:translate-y-2">
      <Card className="bg-zinc-50 px-2 group-hover:opacity-50">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-4">
          <p className="text-tiny font-bold uppercase">{name}</p>
          <small className="text-default-500 mb-5">{date}</small>
          <h4 className="text-large font-bold">{subname}</h4>
        </CardHeader>
        <CardBody>
          <Image
            alt="Project view"
            className="border-1 mb-4 rounded-xl border-stone-400 object-cover"
            src={img}
            width={270}
          />
          <h4 className="text-large mb-2 font-bold">Stacks</h4>
          <Skills skills={skills} />
        </CardBody>
      </Card>
      <Link
        isBlock
        showAnchorIcon
        href={imgsrc}
        target="_blank"
        color="foreground"
        className="absolute inset-0 flex items-center justify-center rounded-xl bg-white bg-opacity-75 text-stone-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {name}
      </Link>
    </div>
  );
}

export default CardItem;
