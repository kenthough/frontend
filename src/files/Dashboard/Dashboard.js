import '../../css/dashboardCSS.css';

function Dashboard() {
  return (
    <div style={{width: "100%"}}>
      {/* auto padding failure */}
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" />
        <div style={{paddingLeft: 10}} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1>Dashboard</h1>
        </div>
      <main />
    </div>
  );
}

export default Dashboard;
