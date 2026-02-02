import React, { useEffect } from "react";
import MetaData from "./layout/metaData";
import { useGetProductsQuery } from "../redux/api/productsApi";
import ProductItem from "./product/productItem.jsx";
import Loader from "./layout/Loader.jsx";
import toast from "react-hot-toast";
import CustomPagination from "./layout/CostomPaginaton.jsx";

export const Home = () => {
  // eslint-disable-next-line no-undef
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";

  const params = { page, keyword };

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  const columnSize = keyword ? 4 : 3;

  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div class="row">
        {keyword && (
          <div className="col-6 col-md-3 mt-5">
            <p>Filters</p>
          </div>
        )}
        <div
          className={
            keyword ? "col-12 col-sm-6 col-md-9" : "col-12 col-sm-6 col-md-12"
          }
        >
          <h1 id="products_heading" class="text-secondary">
            {keyword
              ? `${data?.products?.length} Products found with ${keyword}`
              : "Latest Products"}
          </h1>

          <section id="products" class="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem product={product} columnSize={columnSize} />
              ))}
            </div>
          </section>

          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
