import { useState, useEffect } from "react";
import Table from "@table";
import useProductsStore from "../../store/products";
import { Product } from "../../components/modals";
import GlobalPagination from "../../components/ui/pagination";
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const index = () => {
  const { getData, data, isLoading, totalCount } = useProductsStore();
  const [count, setCount] = useState("");
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    name: "",
  });
  console.log(count);
  const headers = [
    { title: "№", value: "index" },
    { title: "Product name", value: "product_name" },
    { title: "Color", value: "color" },
    { title: "Cost", value: "cost" },
    { title: "", value: "action" },
  ];
  const action = [{ action: "show", action2: "image" }];
  const response = async () => {
    const response = await getData(params);
    setCount(response.data.total_count);
  };
  useEffect(() => {
    response();
  }, [params]);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const pageNumber = page ? parseInt(page) : 1;
    setParams((prevParams) => ({
      ...prevParams,
      page: pageNumber,
    }));
  }, [location.search]);
  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value,
    }));
  };
  const search = (value: any) => {
    setParams((prevParams) => ({
      ...prevParams,
      name: value,
    }));
  };
  return (
    <>
      <div className=" py-3 flex justify-between items-center">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "400",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidiruv"
              inputProps={{ "aria-label": "Search google maps" }}
              name="product_name"
              onChange={(e) => search(e.target.value)}
            />
            <SearchIcon />
          </Paper>
        </div>
        <Product />
      </div>
      <Table
        headers={headers}
        body={data}
        action={action}
        isLoading={isLoading}
      />
      {count ? (
        <GlobalPagination
          totalCount={totalCount}
          page={params.page}
          setParams={changePage}
        />
      ) : null}
    </>
  );
};

export default index;
