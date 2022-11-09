
import './Dashboard.css'
import * as MdIcons from "react-icons/md";

import Navbar from '../layout/Navbar';

const Dashboard = () => {
  return (
    <>
      <div className="main">
      <Navbar />
        <h1>Dashboard</h1>

        <div className="date">
          <input type="date" />
        </div>

        <div className="insights">

          {/* ----- Sales ------- */}
          <div className="sales">
            <MdIcons.MdAnalytics className='icon-dashboard' />
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
            <MdIcons.MdBarChart className='icon-dashboard' />
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
            <MdIcons.MdStackedLineChart className='icon-dashboard'/>
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
        {/* -------- END OF INSIGHTS ------- */}

        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foldable</td>
                <td>85631</td>
                <td>Due</td>
                <td className='warning'>Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Foldable</td>
                <td>85631</td>
                <td>Due</td>
                <td className='warning'>Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Foldable</td>
                <td>85631</td>
                <td>Due</td>
                <td className='warning'>Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Foldable</td>
                <td>85631</td>
                <td>Due</td>
                <td className='warning'>Pending</td>
                <td className="primary">Details</td>
              </tr>
            </tbody>
          </table>
          <a href="#">Show all</a>
        </div>
      </div>
      {/* ------------ End of MAIN ------------ */}
      <div className="right">
        <div className="top">
          <button className="menu-btn">
            
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard