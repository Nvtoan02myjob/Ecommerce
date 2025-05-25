import Banner from '@components/Banner/Banner';
import Header from '@layouts/Header/Header';
import css from '@components/Banner/Banner.module.scss';
import Info from '@components/Info/Info';
import Footer from '@layouts/Footer/Footer';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Layout from '@components/layouts/Layout/Layout';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import ProductListShow from '@components/ProductListShow/ProductListShow';
import ProductGetFromApi from '@/Apis/ProductGetFromApi';
import { useEffect, useState } from 'react';
import SaleProduct from '@components/SaleProduct/SaleProduct';

function HomePage() {
  const { container } = css;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const data = await ProductGetFromApi();
      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <>
      <div className={container}>
        <Header />
        <Banner />
      </div>
      <Layout>
        <Info />
        <AdvanceHeading />
        <HeadingListProduct data={product.slice(0, 2)} />
        <ProductListShow dataShow={product.slice(2, product.length)} />
        <SaleProduct />
      </Layout>
      <Footer />
    </>
  );
}

export default HomePage;
