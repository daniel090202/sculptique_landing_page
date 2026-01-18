import Header from "./Header";

import { ProductPage } from "../pages";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className={"relative py-[32px] space-y-[32px]"}>
        <ProductPage />
      </main>
    </>
  );
};

export default MainLayout;
