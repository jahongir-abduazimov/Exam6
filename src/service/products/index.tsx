import request from '../config'
import {Request} from '../../interface/products'

const product: Request = {
    get_products: (params) => request.get("/products", {params}),
}

export default product;