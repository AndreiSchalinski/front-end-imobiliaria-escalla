"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import ClassIcon from '@mui/icons-material/Class';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import LockIcon from '@mui/icons-material/Lock';

const NAVIGATION = [
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

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  // Set up client-side state for router and window
  const [isClient, setIsClient] = React.useState(false);

  const router = useDemoRouter("/dashboard"); // Call the hook directly

  // Trigger client-specific logic after the component mounts
  React.useEffect(() => {
    setIsClient(true); // Set the component to render client-side only
  }, []);

  // Prevent rendering until the client-side logic is available
  if (!isClient) return null;

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
