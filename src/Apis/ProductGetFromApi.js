import axiosClient from '@/Apis/AxiosClient';

const getProduct = async () => {
  const res = await axiosClient.get('/Product');
  return res.data;
};

export default getProduct;
