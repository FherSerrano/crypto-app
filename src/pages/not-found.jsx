const NoFoundpPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p syle={styles.message}>
                Opps the page you're looking for does not exists!!
            </p>
            <link to='/' style={styles.link}> Go Back Home </link>
             </div> 
    )
}

const styles = {
    Container: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#fff'
    },
    title: {
    fontSize: '72px',
    marginBottom: '20px'
    },
    message: {
    fontSize:'18px',
    marginBottom: '30px'
    },
    link: {
    textDecoration:'none',
    color: '#007bff',
    fontWeight: 'bold'
    }
}

export default NotFoundPage