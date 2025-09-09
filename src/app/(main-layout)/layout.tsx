import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5 max-width-container min-h-[100vh] bg-black">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;
