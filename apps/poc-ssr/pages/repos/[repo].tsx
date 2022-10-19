import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

export default function Repo({ repo }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <p>repo name: {repo.name}</p>
      <a href={repo.html_url}>link: {repo.name}</a>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Se for preciso criar as páginas estáticas no build, descomentar esse código a baixo e retirar o [] do objeto paths.
  // const response = await fetch(`https://api.github.com/users/joaopavila/repos`);
  // const data = await response.json();

  // const paths = data.map(repo => {
  //   return { params: { repo: repo.name } };
  // });

  return {
    paths: [], //deixando vazio, ele só vai gerar as páginas conforme as pessoas forem acessando.
    fallback: true, // Se estiver false e atentar acessar uma página que nao existe, ele vai dar 404
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { repo } = context.params;

  const response = await fetch(`https://api.github.com/repos/joaopavila/${repo}`);
  const data = await response.json();

  return {
    props: {
      repo: data,
    },
  };
};
