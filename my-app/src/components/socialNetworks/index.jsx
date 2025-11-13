function SocialNetworks({socials, link}) {
    return (
        <div className="social-networks">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={socials} alt="Socials-Purple" />
            </a>
        </div>
    );
}

export default SocialNetworks;
