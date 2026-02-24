import { Button } from "@/components/ui/button";
import UserDetails from "@/components/user-details";
export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <UserDetails />
      </div>
    </div>
  );
}
