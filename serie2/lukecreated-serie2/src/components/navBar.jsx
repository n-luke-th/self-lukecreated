import { styled, keyframes } from "../styles/stitches.config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { GearIcon, GitHubLogoIcon, CaretDownIcon } from "@radix-ui/react-icons";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const NavigationBar = ({ toggleTheme }) => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenu.Item>
          {/* nav head 1: Projects */}
          <NavigationMenuLink
            href="https://projects.lukecreated.com"
            target="_blank"
          >
            Projects
          </NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* nav head 2: Quick links */}
          <NavigationMenuTrigger>
            Quick Links <CaretDown aria-hidden />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <List layout="one">
              <CustomListItem title="Home" to="/">
                Site&apos;s home
              </CustomListItem>
              <CustomListItem title="About" to="/about">
                Information about Luke
              </CustomListItem>
              <CustomListItem title="Skills ｜ Tools" to="/skills">
                Luke can...
              </CustomListItem>
              <CustomListItem title="3 favorite projects" to="/3-fav-projects">
                Luke&apos;s favorite 3 projects
              </CustomListItem>
            </List>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* nav head 3: Contact */}
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <Button variant={"red"}>Contact</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialogOverlay />
              <AlertDialogContent>
                <AlertDialogTitle
                  style={{
                    color: "red",
                    fontSize: "3ex",
                  }}
                >
                  Contact
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Email:{" "}
                  <u
                    style={{
                      color: "var(--colors-gray12)",
                    }}
                  >
                    contact@lukecreated.com
                  </u>
                </AlertDialogDescription>
                <div style={{ justifyContent: "flex-end" }}>
                  <div
                    style={{
                      justifyContent: "space-around",
                      display: "inline-flex",
                    }}
                  >
                    <AlertDialog.Action asChild>
                      <ListItemLink
                        href="mailto:contact@lukecreated.com"
                        style={{
                          width: "fit-content",
                          backgroundColor: "var(--colors-gray12)",
                          cursor: "pointer",
                          color: "var(--colors-main1)",
                        }}
                      >
                        Email him now
                      </ListItemLink>
                    </AlertDialog.Action>
                    <AlertDialog.Cancel asChild>
                      <Button
                        css={{ marginLeft: 25 }}
                        style={{
                          color: "var(--colors-gray9)",
                          backgroundColor: "var(--colors-main5)",
                        }}
                      >
                        Cancel
                      </Button>
                    </AlertDialog.Cancel>
                  </div>
                </div>
              </AlertDialogContent>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* nav head 4: GitHub */}
          <NavigationMenuLink
            href="https://github.com/ngzh-luke"
            target="_blank"
          >
            <GitHubLogoIcon></GitHubLogoIcon>
          </NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* nav head 5: Settings */}
          <NavigationMenuTrigger>
            <GearIcon></GearIcon> <CaretDown />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <List layout="one">
              <ListItem title="Theme" onClick={toggleTheme}>
                Dark ｜ Light
              </ListItem>
              <ListItem title="Language" href="/lang">
                ไทย ｜ 中文 ｜ ENG
              </ListItem>
            </List>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenuIndicator>
          <Arrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};

NavigationBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

const Button = styled("button", {
  padding: "5px 10px",
  borderRadius: "4px",
  margin: "1px",
  border: "none",
  cursor: "pointer",

  "&:disabled": {
    backgroundColor: "$grayA3",
    color: "$grayA6",
    cursor: "not-allowed",
  },
  // Responsive styles
  "@bp1": {
    fontSize: "10px",
  },
  "@bp2": {
    fontSize: "15px",
  },
  variants: {
    variant: {
      red: {
        backgroundColor: "red",
        color: "yellow",
        boxShadow: `0 2px 10px $main3`,
        "&:hover": { backgroundColor: "$gray10" },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      main: {
        backgroundColor: "$main12",
        color: "$gray4",
        "&:hover": { backgroundColor: "$gray7" },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: "main",
  },
});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: "var(--colors-main12)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: "$gray11",
  fontSize: 15,
  lineHeight: 1.5,
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: "$main7",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "500px",
  maxHeight: "85vh",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  "&:focus": { outline: "none" },
});

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: "$gray11",
  fontSize: 18,
  fontWeight: 700,
});

const enterFromRight = keyframes({
  from: { transform: "translateX(200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: "translateX(-200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(200px)", opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(-200px)", opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "$main2",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  boxShadow: `0 2px 10px ${"$grayA4"}`,
  margin: 0,
});

const itemStyles = {
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: "$main11",
  "&:focus": { boxShadow: `0 0 0 2px ${"$main7"}` },
  "&:hover": { backgroundColor: "$main3" },
};

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
});

const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  fontSize: 15,
  lineHeight: 1,
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  "@media only screen and (min-width: 600px)": { width: "auto" },
  animationDuration: "250ms",
  animationTimingFunction: "ease",
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
});

const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  overflow: "hidden",
  zIndex: 1,
  transition: "width, transform 250ms ease",
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: 10,
  width: "100%",
  backgroundColor: "$gray5",
  borderRadius: 6,
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  height: "var(--radix-navigation-menu-viewport-height)",
  transition: "width, height, 300ms ease",
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  "@media only screen and (min-width: 600px)": {
    width: "var(--radix-navigation-menu-viewport-width)",
  },
});

const List = styled("ul", {
  justifyItems: "center",
  display: "grid",
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: "none",
  variants: {
    layout: {
      one: {
        "@media only screen and (min-width: 600px)": {
          width: 500,
          gridTemplateColumns: ".75fr 1fr",
        },
      },
      two: {
        "@media only screen and (min-width: 600px)": {
          width: 600,
          gridAutoFlow: "column",
          gridTemplateRows: "repeat(3, 1fr)",
        },
      },
    },
  },
  defaultVariants: {
    layout: "one",
  },
});

const ListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <ListItemLink {...props} ref={forwardedRef}>
          <ListItemHeading>{title}</ListItemHeading>
          <ListItemText>{children}</ListItemText>
        </ListItemLink>
      </NavigationMenu.Link>
    </li>
  )
);

const CustomListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <CustomListItemLink {...props} href={forwardedRef}>
          <ListItemHeading>{title}</ListItemHeading>
          <ListItemText>{children}</ListItemText>
        </CustomListItemLink>
      </NavigationMenu.Link>
    </li>
  )
);

const CustomListItemLink = styled(Link, {
  display: "block",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: 12,
  borderRadius: 6,
  fontSize: 15,
  lineHeight: 1,
  "&:focus": { boxShadow: `0 0 0 2px ${"$gray7"}` },
  "&:hover": { backgroundColor: "$main3" },
});

ListItem.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
ListItem.displayName = ListItem;

CustomListItem.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
CustomListItem.displayName = CustomListItem;

const ListItemLink = styled("a", {
  display: "block",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: 12,
  borderRadius: 6,
  fontSize: 15,
  lineHeight: 1,
  "&:focus": { boxShadow: `0 0 0 2px ${"$gray7"}` },
  "&:hover": { backgroundColor: "$main3" },
});

const ListItemHeading = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: "$gray12",
});

const ListItemText = styled("p", {
  all: "unset",
  color: "$main11",
  lineHeight: 1.4,
  fontWeight: "initial",
});

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: "2000px",
});

const CaretDown = styled(CaretDownIcon, {
  position: "relative",
  color: "$main7",
  top: 1,
  transition: "transform 250ms ease",
  "[data-state=open] &": { transform: "rotate(-180deg)" },
});

const Arrow = styled("div", {
  position: "relative",
  top: "70%",
  backgroundColor: "$gray5",
  width: 10,
  height: 10,
  transform: "rotate(45deg)",
  borderTopLeftRadius: 2,
});

export default NavigationBar;
