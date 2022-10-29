import Image from 'next/image';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Heroimg from '../public/heroimg.png';

export default function Home() {
  return (
    <>
      <Navbar title="Homepage" />
      <Layout>
        <div className="flex m-auto pt-32">
          <div className="grid grid-cols-2 items-center">
            <div className="ml-32">
              <h2 className="my-5">
                Innovative Agriculture and sustainable quality of life.
              </h2>
              <p className="subtitle-lg">
                Delivery of fresh, safe, and high-quality produce, in order to
                ultimately enhance sustainable quality of life for people.
              </p>
              <button className="btn-primary btn-lg my-5">Order now!</button>
            </div>
            <>
              <Image src={Heroimg} alt="Hero image" />
            </>
          </div>
        </div>

        <section id="catalog" className="bg-white pt-10">
          <div className="container m-auto">
            <div className="grid grid-cols-1 text-center">
              <h3 className="my-5">Catalog</h3>
              <p className="subtitle-lg">
                Products and systems of protection for any phase of plant
                development
              </p>
            </div>
            <div className="grid grid-cols-3 my-10">
              <div className="product-category-item mx-2">
                <div className="product-category-item--inner self-center">
                  <h3 className="product-category-item--inner--title">
                    <a>Herbicides</a>
                  </h3>
                  <p>Crop weed protection</p>
                  <a>Details</a>
                </div>
              </div>
              <div className="product-category-item mx-2">
                <div className="product-category-item--inner self-center">
                  <h3 className="product-category-item--inner--title">
                    <a>Herbicides</a>
                  </h3>
                  <p>Crop weed protection</p>
                  <a>Details</a>
                </div>
              </div>
              <div>3</div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
