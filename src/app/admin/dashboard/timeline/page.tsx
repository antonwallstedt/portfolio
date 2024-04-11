import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Timeline</h1>
      </div>
    </div>
  );
}
