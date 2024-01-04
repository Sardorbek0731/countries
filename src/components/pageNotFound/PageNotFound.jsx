/* eslint-disable react/prop-types */
import "./PageNotFound.css";
import notFound from "../../assets/images/404.jpg";
import noInternet from "../../assets/images/noInternet.png";

function PageNotFound({ error }) {
  return (
    <div className="pageNotFound">
      {error == "Not Found" ? (
        <>
          <h1>Page Not Found</h1>
          <p>The request was sent in error</p>
          <img className="pageNotFound_img" src={notFound} alt="Page Not Found" />
        </>
      ) : (
        <>
          <h1>No Internet Connection</h1>
          <p>There was a problem with the internet connection</p>
          <img className="noInternet_img" src={noInternet} alt="Check your internet connection !" />
        </>
      )}
    </div>
  );
}

export default PageNotFound;
