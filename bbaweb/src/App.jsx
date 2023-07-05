import { Outlet, Link } from "react-router-dom";


export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/users`}>Users</Link>
            </li>
            <li>
              <Link to={`/counter`}>Counter</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}