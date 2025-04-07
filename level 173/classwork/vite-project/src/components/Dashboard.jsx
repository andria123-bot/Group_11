import { Link } from 'react-router-dom'

const Dashboard = () => {
  return(
    <>
      <h1>Dashboard</h1>
      <Link to={'./admin'}>To The Admin Pannel</Link>
    </>
  )
}

export default Dashboard;