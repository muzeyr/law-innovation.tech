import { BackButtonOutline } from "@/app/ui/elements/buttons/back-buttons";

export default function NotFound() {
  return (
    <main>
      <div className="w-full text-primary flex flex-col items-center pt-[80px] gap-6">
        <h1 className="text-2xl">Not Found</h1>
        <p>Could not find requested data, please try a different city</p>
        <BackButtonOutline />
      </div>
    </main>
  );
}
