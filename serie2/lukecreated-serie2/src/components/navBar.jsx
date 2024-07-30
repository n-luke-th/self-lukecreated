import { styled, keyframes } from "../styles/stitches.config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { GearIcon, GitHubLogoIcon, CaretDownIcon } from "@radix-ui/react-icons";
import React from "react";
import PropTypes from "prop-types";

const NavigationBar = ({ toggleTheme }) => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenu.Item>
          {/* nav head 1: Projects */}
          <NavigationMenuLink href="https://projects.lukecreated.com">
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
              <ListItem title="Home" href="/">
                Site&apos;s home
              </ListItem>
              <ListItem title="About" href="/about">
                Information about Luke
              </ListItem>
              <ListItem title="Skills" href="/skills">
                Luke&apos;s skills
              </ListItem>
              <ListItem title="3 favorite projects" href="/fav-3-projects">
                Luke&apos;s favorite 3 projects
              </ListItem>
            </List>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* nav head 3: Contact */}
          <NavigationMenuLink
            href="/contact"
            style={{ backgroundColor: "red", color: "yellow" }}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* nav head 4: GitHub */}
          <NavigationMenuLink href="https://github.com/ngzh-luke">
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
ListItem.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
ListItem.displayName = ListItem;

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

// const Callout = styled("a", {
//   display: "flex",
//   justifyContent: "flex-end",
//   flexDirection: "column",
//   width: "100%",
//   height: "100%",
//   background: `linear-gradient(135deg, ${"$main9"} 0%, ${"$gray9"} 100%);`,
//   borderRadius: 6,
//   padding: 25,
//   textDecoration: "none",
//   outline: "none",
//   userSelect: "none",
//   "&:focus": { boxShadow: `0 0 0 2px ${"$gray6"}` },
// });

// const CalloutHeading = styled("div", {
//   color: "white",
//   fontSize: 18,
//   fontWeight: 500,
//   lineHeight: 1.2,
//   marginTop: 16,
//   marginBottom: 7,
// });

// const CalloutText = styled("p", {
//   all: "unset",
//   //   color: "$",
//   fontSize: 14,
//   lineHeight: 1.3,
// });

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
