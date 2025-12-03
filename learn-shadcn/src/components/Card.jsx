import { Button } from "./ui/button";
const Card = () => {
  return (
    <div className="p-20 w-70 flex gap-7 bg-blue-300">
      <div className="text-2xl font-bold">Hello </div>
      <Button variant="outline" className="font-semibold">Click me </Button>
    </div>
  );
};

export default Card;
