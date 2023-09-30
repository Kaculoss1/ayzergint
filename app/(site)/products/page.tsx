import { ProductsBanner } from "@/components";
import AllProducts from "@/components/AllProducts";
import styles from "@/styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGI | Products",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsBanner />
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <p className="my-10 font-kbold text-lg lg:text-2xl text-center w-full">
          Ayzer Group is capable of delivering these products and commodities
          based on client orders. Our comprehensive industrial network, which
          includes collaborations with unions, local and large-scale
          aggregators, and refineries around the world, enables us to acquire
          and offer a wide range of products and commodities, including some not
          specifically included below. All of this is accomplished while
          maintaining incredibly competitive price structures for our clients.
        </p>
      </div>

      <AllProducts />
    </>
  );
}
