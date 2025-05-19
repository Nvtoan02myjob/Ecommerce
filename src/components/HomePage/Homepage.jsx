import Banner from '@components/Banner/Banner';
import Header from '@layouts/Header/Header';
import css from '@components/Banner/Banner.module.scss';
import Info from '@components/Info/Info';
import Footer from '@layouts/Footer/Footer';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Layout from '@components/layouts/Layout/Layout';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
function HomePage() {
  const { container } = css;
  return (
    <>
      <div className={container}>
        <Header />
        <Banner />
      </div>
      <Layout>
        <Info />
        <AdvanceHeading />
        <HeadingListProduct />
      </Layout>
      <Footer />
    </>
  );
}

export default HomePage;
