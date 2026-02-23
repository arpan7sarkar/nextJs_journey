import { Button } from "@/components/ui/button";
import UserDetails from "@/components/user-details";
export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <span className="bg-black p-8">
        <UserDetails />

      </span>
    </div>
  );
}
