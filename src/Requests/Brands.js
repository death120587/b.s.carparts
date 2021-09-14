import axios from "axios";

class BrandRequest {
    getBrands = (state) => {
        axios.get('/brands')
        .then((response) => {
            state.setBrandList(response.data);
        });
    };
    createBrand = (state) =>  {
        const {brandName, setBrandName, brandList, setBrandList} = state;
        axios.post('/brands/create', {name: brandName})
        .then((response) => {
            setBrandName('');
            this.getBrands({brandList, setBrandList});
            
        });
    }
}

export default BrandRequest;