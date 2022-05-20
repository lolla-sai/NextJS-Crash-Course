import headerStyles from "../styles/Header.module.css";

function Header() {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            {/* <style jsx>
                {`
                    .title {
                        color: red;
                    }
                `}
            </style> */}
            <p className={headerStyles.description}>
                Keep up to date with the latest web dev news
            </p>
        </div>
    );
}

// styled jsx can be used for conditional rendering

export default Header;
