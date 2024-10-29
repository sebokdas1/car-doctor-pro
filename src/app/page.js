export const dynamic = "force-dynamic";
import HomePage from "@/components/Homepage/Homepage";
import Loading from "./loading";

export default function Home() {
  return (
    <main fallback={<Loading />}>
      <HomePage />
    </main>
  );
}
