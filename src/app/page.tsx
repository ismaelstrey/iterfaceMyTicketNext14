import { version } from "@/utils/api/api";
import DashBoard from "./pages/dashboard";
import AllProvider from "@/context/AllProvider";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <AllProvider>
        <DashBoard />
        <div className="flex text-white fixed bottom-2 left-24">
          Versão# :
          <a
            href="https://iterface-my-ticket-next14-y6it.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {version}
          </a>
        </div>
      </AllProvider>
    </main>
  );
}
