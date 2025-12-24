import { useEffect } from "react";

const CardAlbum = ({ albumDetails }) => {
    return (
        <div className="card-container">
            <div className="album-ids">
                <h4>ID: {albumDetails.id}</h4>
                <h4>USERID: {albumDetails.userId}</h4>
            </div>

            <p className="album-title">{albumDetails.title}</p>
        </div>
    );
};

const ServerSidePage = ({ albums }) => {
    return (
        <div className="ssr-container">
            <h2 className="ssr-title">
                Learn server side rendering in next js ...
            </h2>
            <p>This data fetched by <a target="_blank" rel="noreferrer" href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">getServerSideMethod</a> method!</p>
            {
                albums.map(album => (
                    <CardAlbum key={album.id} albumDetails={album}/>
                ))
            }
        </div>
    );
};

export default ServerSidePage;

export async function getServerSideProps(context) {
    const { params, req, res, query } = context;

    const result = await fetch("https://jsonplaceholder.typicode.com/albums?userId=10");
    const data = await result.json();
    
    return {
        props: {
            albums: data
        }
    };
};
