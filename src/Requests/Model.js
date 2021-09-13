import axios from "axios";

class ModelRequest {
    getModels(state) {
        axios.get('/models')
        .then((response) => {
            state.setState({modelList: response.data});
        });
    }
}

export default ModelRequest;