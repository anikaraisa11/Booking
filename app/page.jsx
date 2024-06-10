"use client";
import MainHome from "@/components/MainHome/MainHome";
import ReduxProvider from "@/lib/redux/redux-provider";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <ReduxProvider>
      <main>
        <MainHome />
        <ScrollToTop smooth color="#008080" />
      </main>
    </ReduxProvider>
  );
}
