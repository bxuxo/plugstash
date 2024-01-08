    import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    console.log(auth);
    return (
        <>
            <h1>this is the dashboard and you are role id { auth.user.role_id }</h1>
            <Link method='post' href={ route( 'logout' ) } as='button'>log out</Link>
        </>
    );
}
