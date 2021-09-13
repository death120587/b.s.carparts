import axios from "axios";

class GoodsRequest {
    getGoods(state) {
        axios.get('/goods')
        .then((response) => {
            state.setState({goodsList: response.data});
        });
    }
}

export default GoodsRequest;