import type { NextPage } from "next";
import Link from "next/link";

const Navigation: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a>Todo</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
