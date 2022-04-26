// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Assurance Prêts",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "Menu",
      items: [
        { name: "Accueil", href: "http://www.assurance-prets.comSSS/" },
        { name: "Garantie", href: "http://www.assurance-prets.comSSS/garantie/" },
        { name: "Coût", href: "http://www.assurance-prets.comSSS/coup/" },
        { name: "Comparatif", href: "http://www.assurance-prets.comSSS/comparatif/" },
        { name: "Négociation", href: "http://www.assurance-prets.comSSS/cout/" },
        { name: "Prêt", href: "http://www.assurance-prets.comSSS/prets/" },
      ],
    },

    {
      name: "Support",
      items: [
        { name: "Contact", href: "http://www.assurance-prets.comSSS/contact/" },
        { name: "Informations", href: "http://www.assurance-prets.comSSS/contact/" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "Mentions légales", href: "http://www.assurance-prets.comSSS/mentions/" },
        { name: "politique de confidentialité", href: "http://www.assurance-prets.comSSS/mentions/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Tout droits réservés. Copyright &copy; {date} Assurance prêt | As Du Grand Lyon{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        | Développeur: LABI Myrteza
      </MKTypography>
      .
    </MKTypography>
  ),
};
