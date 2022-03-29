import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./userRedux";
import { publicRequest, userRequest, addProductRequest } from "../requestMethods";
import axios from "axios"
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
} from "./productRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
export const logout = (dispatch) => {



    dispatch(logoutSuccess());

};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/product");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/product/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // update
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());

    console.log(product)

    try {

        let formData = new FormData()
        formData.append("title", product.title);
        formData.append("desc", product.desc);
        formData.append("img", product.img);
        formData.append("categories", product.categories);
        formData.append("size", product.size);
        formData.append("color", product.color);
        formData.append("price", product.price);
        formData.append("inStock", product.inStock);

        let requestOptions = {


            body: formData,
            redirect: 'follow'
        };
        console.log(product);
        console.log(formData);


        const { data } = await addProductRequest.post(`product`, requestOptions);
        console.log(data, "dddddd")
        dispatch(addProductSuccess(data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};