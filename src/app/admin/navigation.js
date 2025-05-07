import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import ClassIcon from "@mui/icons-material/Class";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LockIcon from "@mui/icons-material/Lock";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

export const NAVIGATION = [
    {
      kind: "header",
      title: "Aréa de trabalho",
    },
    {
      segment: "dashboard",
      title: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      segment: "categorias",
      title: "Categorias",
      icon: <ClassIcon />,
    },
    {
      segment: "empreendimentos",
      title: "Empreendimentos",
      icon: <LocationCityIcon />,
    },
    {
      segment: "imoveis",
      title: "Imóveis",
      icon: <HomeFilledIcon />,
    },
    {
      segment: "notes",
      title: "Notes",
      icon: <StickyNote2Icon />,
      pattern: "notes{/:noteId}*",
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Acessos",
    },
    {
      segment: "reports",
      title: "Usuários",
      icon: <AccountBoxIcon />,
      children: [
        {
          segment: "sales",
          title: "Cadastros",
          icon: <PersonAddIcon />,
        },
        {
          segment: "traffic",
          title: "Permissões",
          icon: <LockIcon />,
        },
      ],
    },
    {
      segment: "integrations",
      title: "Logout",
      icon: <LogoutIcon />,
    },
  ];