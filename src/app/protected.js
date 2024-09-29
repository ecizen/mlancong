// pages/protected.js
import { useSession, signIn } from "next-auth/client";

export default function ProtectedPage() {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>You must be signed in to view this page</p>;

  return <p>Protected content for {session.user.email}</p>;
}
