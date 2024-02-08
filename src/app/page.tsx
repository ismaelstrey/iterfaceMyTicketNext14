import NavigateProvider from "@/context/NavigateContext";
import TicketProvider from "@/context/TicketContext";
import { version } from "@/utils/api/api";
import DashBoard from "./pages/dashboard";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <NavigateProvider>
        <TicketProvider>
          <DashBoard />

          <div className="flex text-white fixed bottom-2 left-24">
            Versão :
            <a
              href="https://iterface-my-ticket-next14-y6it.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {version}
            </a>
          </div>
        </TicketProvider>
      </NavigateProvider>
    </main>
  );
}
