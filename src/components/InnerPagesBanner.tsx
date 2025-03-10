export default function InnerPagesBanner({ heading }) {

  if (!heading || heading.length == 0) {
    heading = "Shop"
  }


  return (
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">{heading}</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Pages</a></li>
        <li className="breadcrumb-item active text-white">{heading}</li>
      </ol>
    </div>
  );
}