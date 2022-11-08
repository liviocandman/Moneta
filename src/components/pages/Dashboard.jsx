import * as MdIcons from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="main">
      <h1>Dashboard</h1>

      <div className="date">
        <input type="date" />
      </div>

      <div className="insights">
        {/* ----- Sales ------- */}
        <div className="sales">
          <span><MdIcons.MdAnalytics /></span>
          <div className="middle">
            <div className="lef">
              <h4>Total Sales</h4>
              <h3>R$25.024,00</h3>
            </div>
            <div className="progress">
              <svg>
                <circle cx='38' cy='38' r='36'></circle>
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

        {/* ----- Expenses ------- */}
        <div className="expenses">
          <span><MdIcons.MdAssessment /></span>
          <div className="middle">
            <div className="lef">
              <h4>Total Expenses</h4>
              <h3>R$15.890,00</h3>
            </div>
            <div className="progress">
              <svg>
                <circle cx='38' cy='38' r='36'></circle>
              </svg>
              <div className="number">
                <p>58%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

        {/* ----- Income ------- */}
        <div className="income">
          <span><MdIcons.MdStackedLineChart /></span>
          <div className="middle">
            <div className="lef">
              <h4>Total Income</h4>
              <h3>$7.678,58</h3>
            </div>
            <div className="progress">
              <svg>
                <circle cx='38' cy='38' r='36'></circle>
              </svg>
              <div className="number">
                <p>33%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
       
      </div>
      


      
    </div>
  )
}

export default Dashboard