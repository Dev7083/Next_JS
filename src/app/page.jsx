import LearnClientComponent from "@/components/LearnClientComponent";
import LearnCssModule from "@/components/LearnCssModule";
import LearnGlobalCss from "@/components/LearnGlobalCss";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseRouter from "@/components/LearnUseRouter";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hey there!</h1>
        <LearnLink />
        <LearnUseRouter />
        <LearnServerComponent />
        <LearnClientComponent />
        <LearnGlobalCss />
        <LearnCssModule />
      </main>
    </div>
  );
}
