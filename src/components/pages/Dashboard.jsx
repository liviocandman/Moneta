
import './Dashboard.css'
import * as MdIcons from "react-icons/md";



const Dashboard = () => {
  return (
    <div className="content">
      
      <div className="main">
     
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

       
        <div className="recent-updates">
          <h2>Recent Updates</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src="/src/assets/luke.png" alt="" />
                </div>
                <div className="message">
                  <p><b>Luke Kage</b> reiceved his order</p>
                  <small className="text-muted">4 Minutes ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="/src/assets/luke.png" alt="" />
                </div>
                <div className="message">
                  <p><b>Luke Kage</b> reiceved his order</p>
                  <small className="text-muted">4 Minutes ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="/src/assets/luke.png" alt="" />
                </div>
                <div className="message">
                  <p><b>Luke Kage</b> reiceved his order</p>
                  <small className="text-muted">4 Minutes ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="/src/assets/luke.png" alt="" />
                </div>
                <div className="message">
                  <p><b>Luke Kage</b> reiceved his order</p>
                  <small className="text-muted">4 Minutes ago</small>
              </div>
            </div>
          </div>
        </div>
        {/* -------- END OF RECENT UPDATES -------- */}
        <div className="sales-analytics">
          <h2>Sales Analytics</h2>
          <div className="item online">
            <div className="icon">
              <MdIcons.MdShoppingCart />
            </div>
            
            <div className="right">
              <div className="info">
                <h4>ONLINE ORDERS</h4>
                <small className="text-muted">Last 24 hours</small>
              </div>
              <h5 className=
              "success">+20%</h5>
              <h4>2873</h4>
            </div>
          </div>
          <div className="item offline">
            <div className="icon">
              <MdIcons.MdShoppingBag />
            </div>
            
            <div className="right">
              <div className="info">
                <h4>OFFLINE ORDERS</h4>
                <small className="text-muted">Last 24 hours</small>
              </div>
              <h5 className=
              "danger">-9%</h5>
              <h4>981</h4>
            </div>
          </div>
          <div className="item customers">
           <div className="icon">
           <MdIcons.MdPerson />
           </div>
            
            <div className="right">
              <div className="info">
                <h4>NEW CUSTOMERS</h4>
                <small className="text-muted">Last 24 hours</small>
              </div>
              <h5 className=
              "success">+49%</h5>
              <h4>1157</h4>
            </div>
          </div>
          <div className="item add-product">
            <div>
              <MdIcons.MdAdd />
              <h3>Add Product</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard