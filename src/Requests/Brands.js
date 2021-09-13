import axios from "axios";

class BrandRequest {
    getBrands(state) {
        axios.get('/brands')
        .then((response) => {
            state.setState({brandList: response.data});
        });
    }
}

export default BrandRequest;