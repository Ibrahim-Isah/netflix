import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, Logo, ButtonLink, Feature, Text,Link , FeatureCallOut } from './styles/header'


export default function Header({bg = true, children, ...restProps}) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderLink({ children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}


Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to , ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}