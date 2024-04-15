import { signOut } from "@@/auth";
import NavLinks from "./navLinks";

export default function NavBar() {
  return (
    <div className="m-5 w-full">
      <div className="flex justify-center items-center">
        <NavLinks />
      </div>
      <form
        className="absolute right-10 -translate-y-[100%]"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="bg-neutral-300 px-3 rounded-md">Sign Out</button>
      </form>
    </div>
  );
}
