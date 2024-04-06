import { LockClosedIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/24/outline";

export default function AntonLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <LockClosedIcon className="h-10 w-10 mr-3" />
      <p className="text-[32px] font-semibold">Anton</p>
    </div>
  );
}
