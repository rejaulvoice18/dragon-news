import React from 'react';
import Header from '../components/Header';
import RightNavbar from '../components/layout-component/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();
    const singleNews = data.data[0];
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-semibold mb-3'>Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={singleNews?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{singleNews?.title}</h2>
                            <p>{singleNews?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${singleNews?.category_id}`} className="btn btn-primary">Back to Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;