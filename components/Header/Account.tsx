import { getServerAuthSession } from "@/libs/auth";
import classes from "./Account.module.css";
import Link from "next/link";
import Logout from "./Logout";

const Account = async () => {
    const authSession = await getServerAuthSession();
  return (
    <div className={classes.textBox}>
      {!authSession?.user && (
        <>
          <Link href="/login" className={classes.text}>
            LOGIN
          </Link>
          <Link href="/signup" className={classes.text}>
            SIGN UP
          </Link>
        </>
      )}
      {authSession?.user && (
        <>
          <Link href="/profile" className={classes.text}>
            PROFILE
          </Link>
          <Logout />
        </>
      )}
    </div>
  );
};

export default Account;
