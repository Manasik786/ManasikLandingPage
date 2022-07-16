import axios from 'axios';





const Slider =  async () => {
    try {
        const response = await axios.get(``);
        return response.data;
      } 
      catch (error) {
        Swal.fire('Error!', 'There was some issue fetching the data', 'error');
        return { error: error.message };
      }
}

const PostForm =  async (username,email,nationality) => {
    try {
        const response = await axios.post(``,{username,email,nationality});
        return response.data;
      } 
      catch (error) {
        Swal.fire('Error!', 'There was some issue fetching the data', 'error');
        return { error: error.message };
      }
}

export {
    Slider,
    PostForm
};
