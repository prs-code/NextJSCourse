
function StaticPathsPage({ user }) {
  return (
    <div className="static-paths-container">
      <h2 className="static-paths-title">StaticPathsPage ...</h2>
      <p className="user-page-guide">This data fetched by <a target="_blank" rel="noreferrer" href="https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths">getStaticPaths</a> method!</p>
      <p className="user-details">name: </p><span>{user.name}</span>
      <p className="user-details">username: </p><span>{user.username}</span>
      <p className="user-details">email: </p><span>{user.email}</span>
      <p className="user-details">phoneNumber: </p><span>{user.phone}</span>
      <p className="user-details">name of company: </p><span>{user.company.name}</span>
    </div>

  )
};

export async function getStaticPaths() {
  const allUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await allUsers.json();
  const paths = usersData.map(user => (
    {
      params: { staticPaths: user.id.toString() }
    }
  ));
  
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps(context) {
  const { params: { staticPaths } } = context;
  const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${staticPaths}`);
  const user = await userData.json();

  return {
      props: {
          user
      }
  };
}

export default StaticPathsPage