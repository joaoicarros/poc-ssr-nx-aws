// import { GetStaticProps } from 'next';
// import { Button, Link } from '@monorepo/ui-components';
import { GetServerSideProps } from 'next';
export function Index({ user }) {
  // const [user, setUser] = useState(null);

  // async function getUserGithub() {
  //   const response = await fetch('https://api.github.com/users/joaopavila');
  //   const data = await response.json();
  //   setUser(data);
  // }

  // useEffect(() => {
  //   getUserGithub();
  // }, [setUser]);

  return user ? (
    <div>
      <img src={user.avatar_url} alt={user.name} width="80" style={{ borderRadius: 40 }} />
      <h1>Login: {user.login}</h1>
      <p>Bio: {user.bio}</p>
      <p>Name: {user.name}</p>
    </div>
  ) : null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/joaopavila');
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};

export default Index;
