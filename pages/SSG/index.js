import Link from 'next/link';
import Table from 'react-bootstrap/Table';

function UserTable ({ userList }) {
    return (
        <Table striped bordered={true} hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ id, name, email, phone }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>
                                <Link href={`/SSG/${id}`}>
                                    {name}                                    
                                </Link>
                            </td>
                            <td>{email}</td>
                            <td>{phone}</td>
                        </tr>       
                    ))
                }
            </tbody>
        </Table>
    )
}

function StaticSiteGenerationPage({ users }) {
    if (!users) return <h1>Loading Users ...</h1>
    
    return (
        <div className="ssg-container">
            <h2 className="ssg-title">
                Learn static site generation in next js ...
            </h2>
            <p>This data fetched by <a target="_blank" rel="noreferrer" href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation">getStaticProps</a> method!</p>
            <UserTable userList={users} />
        </div>
    )
}

export async function getStaticProps() {
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersData.json();

    return {
        props: {
            users,
        }
    };
}

export default StaticSiteGenerationPage;