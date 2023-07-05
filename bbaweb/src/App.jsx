import { Outlet, Link } from "react-router-dom";


export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Users</Link>
            </li>
            <li>
              <Link to={`/counter`}>Counter</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" className="container mx-auto p-12">
        <Outlet />
      </div>
    </>
  );
}