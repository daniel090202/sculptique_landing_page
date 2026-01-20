import Header from "./Header";

import { ProductPage } from "../pages";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className={"relative pt-[32px]"}>
        <ProductPage />
      </main>
    </>
  );
};

export default MainLayout;
