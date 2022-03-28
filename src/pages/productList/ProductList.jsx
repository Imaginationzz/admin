import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import "./productList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products);
  const newrows = products.map((product) => ({ ...product, id: product._id }));

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220, editable: true },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 520, width: "100%" }}>
      <DataGridPro
        // rows={products}

        rows={newrows}
        rowHeight={38}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
