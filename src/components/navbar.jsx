import React, { useEffect, useState } from "react";
import { logo, close, menu } from "../assets/assets.jsx";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const fillColor = {
    default: {
        fill: "#ffffff",
        transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
        fill: "#08eaca",
        transition: { duration: 0.5, ease: "easeOut" }
    }
};




const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const currentRoute = useLocation().pathname.toLowerCase();

    const [showDropdown, setShowDropdown] = useState(false);

    const navLinks = [
        {
            id: "home",
            title: "Home",
        },
        {
            id: "about",
            title: "About",
        },
        {
            id: "project",
            title: "Projects",
            submenus: [
                {
                    id: "winely",
                    title: "Winely",
                    link: "project#winely"
                },
                {
                    id: "primer",
                    title: "Primer",
                    link: "project#primer"
                },
                {
                    id: "envisage",
                    title: "Envisage",
                    link: "project#envisage"
                },
                {
                    id: "dailybuzz",
                    title: "Daily Buzz",
                    link: "project#dailybuzz"
                },
            ]
        },
        {
            id: "contact",
            title: "Contact",
        },
    ];
    useEffect(() => {

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <nav
            className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-black" : "bg-transparent"
                }`}
        >
            <motion.div className="mx-1" whileHover="hover" initial="default"
                animate="default">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46.184"
                    height="52.289"
                    version="1.1"
                    viewBox="0 0 923.676 1045.776"

                >
                    <g
                        fill="#fdfdfd"
                        fillOpacity="1"
                        stroke="none"
                        transform="translate(-1621.184 -1560.224)"

                    >
                        <motion.path
                            variants={fillColor} d="M1623 1561v1h342l-31-1h-69z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1965.67 1561.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2237 1561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2238 1561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2239 1561v1h10z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2249.67 1561.33l.66.34-.66-.34M2491 1561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2492 1561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2493 1561v1h10z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2503 1561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2504 1561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1623 1562v545c0 100.87-12.95 209.78 30.31 304 18.09 39.4 43.96 75.36 75.69 104.91 134.77 125.54 354.74 115.65 476.71-22.91 46.01-52.26 75.4-118.58 82.12-188 4.62-47.66 1.17-97.1 1.17-145v-515c0-21.58 5.2-49.44-10.19-67-21.75-24.82-63.51-20.26-76.94 11-5.75 13.4-3.87 28.77-3.87 43v519c0 82.84 9.88 168.43-33.42 243-13.49 23.22-31.24 43.83-51.58 61.27-111.85 95.91-288.86 67.77-364.14-60.27-34.45-58.6-34.86-119.16-34.86-185v-557h168c27.33 0 56.92 3.24 84-.29 34.46-4.49 52.17-46.18 30.48-73.71-21.19-26.89-69.2-17-99.48-17z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1969.67 1562.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1971 1562l1 1-1-1m261 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2233.67 1562.33l.66.34-.66-.34m19.33-.33l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2254 1562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2255 1562l1 1-1-1m231 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2487.67 1562.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2200 2604c5.22 2.19 12.38 1 18 1 16.66 0 33.57-2.18 50-4.92 77.14-12.87 149-54.88 198.75-115.08 39.65-47.99 66.07-107.11 73.96-169 6.55-51.29 3.29-104.34 3.29-156v-489c0-23.82 2.64-49.46-1.33-73-4.22-25.09-30.49-40.46-54.67-35.33-39.97 8.47-36 49.87-36 81.33v549c0 65.51 5 131.27-27.31 191-18.01 33.3-42.84 62.24-73.69 84.29-9.52 6.81-19.59 13.08-30 18.45-6.08 3.14-14.63 5.25-19.24 10.47-8.03 9.1-14.19 20.24-21.76 29.79-22.35 28.18-49.22 57.83-80 77z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2507 1562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2508 1562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2509 1562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1973 1563l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1974 1563l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1975 1563l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2229 1563l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2230 1563l1 1-1-1m27 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2258 1563l1 1-1-1m225 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2484 1563l1 1-1-1m27 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2512 1563l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1976 1564l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1977 1564l1 1-1-1m249 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2227 1564l1 1-1-1m33 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2261 1564l1 1-1-1m219 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2481 1564l1 1-1-1m33 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2515 1564l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1979 1565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1980 1565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2224 1565l1 1-1-1m38 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2263 1565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2478 1565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2516 1565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2517 1565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1981 1566l1 1-1-1m241 0l1 1-1-1m42 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2265 1566l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2476 1566l1 1-1-1m43 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1983 1567l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2220 1567l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2266 1567l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2474 1567l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2520 1567l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2521 1567l1 1-1-1m-536 1l1 1-1-1m233 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2219 1568l1 1-1-1m49 0l1 1-1-1m205 0l1 1-1-1m49 0l1 1-1-1m-536 1l1 1-1-1m231 0l1 1-1-1m52 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2270 1569l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2471 1569l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2524 1569l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1987 1570l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1988 1570l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2216 1570l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2271 1570l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2470 1570l1 1-1-1m55 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1989 1571l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2214 1571l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2272 1571l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2468 1571l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2469 1571l1 1-1-1m57 0l1 1-1-1m-536 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2213 1572l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2273 1572l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2467 1572l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2527 1572l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2528 1572l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1991 1573l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2212 1573l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2274 1573l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2466 1573l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2529 1573l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1992 1574l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2211 1574l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2275 1574l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2465 1574l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2530 1574l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1993 1575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2210 1575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2276 1575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2464 1575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2531 1575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1994 1576l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2209 1576l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2277 1576l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2463 1576l1 1-1-1m69 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1995 1577l1 1-1-1m213 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2278 1577l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2462 1577l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1996 1578l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2207 1578l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2279 1578l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1997 1579l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2207 1579l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2280 1579l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2461 1579l1 1-1-1m73 0l1 1-1-1m-537 1l1 1-1-1m209 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2281 1580l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2460 1580l1 1-1-1m75 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1998 1581l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2205 1581l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2281 1581l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2459 1581l1 1-1-1m-460 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2282 1582l1 1-1-1m254 0l1 1-1-1m-537 1l1 1-1-1m205 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2283 1583l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2458 1583l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2537 1583l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2000 1584l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2203 1584l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2283 1584l1 1-1-1m-80 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2284 1585l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2457 1585l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2538 1585l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2001 1586l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2202 1586l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2284 1586l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2456 1586l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2202 1587l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2285 1587l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2456 1587l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2539 1587l1 1-1-1m-537 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2201 1588l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2285 1588l1 1-1-1m-84 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2286 1589l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2455 1589l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2540 1589l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2003 1590l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2286 1590l1 1-1-1m254 0l1 1-1-1m-537 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2200 1591l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2541 1591l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2200 1592l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2287 1592l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2454 1592l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2541 1592l1 1-1-1m-537 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2199 1593l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2287 1593l1 1-1-1m254 0l1 1-1-1m-537 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2199 1594l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2453 1594l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2199 1595l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2288 1595l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2453.33 1595.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2542 1595l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2005 1596l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2288 1596l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2542 1596l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2005 1597l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2198 1597l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2288 1597l1 1-1-1m-282.67 1.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2198 1598l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2452 1598l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2198.33 1599.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2452 1599l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2543 1599l1 1-1-1m-254 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2452 1600v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2543 1600l1 1-1-1m-254 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2543 1601v6h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2006 1602v5h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2289 1602v685h1v-666z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2197.33 1604.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2197 1606l1 1-1-1m-191 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2197 1607v673h1v-654l-1-19m-190.67 1.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2006 1610l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2006 1611l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2005.33 1614.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2005 1616l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2005 1617l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2004 1619l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2004 1620l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2003 1622l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2003 1623l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2002 1625l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2002 1626l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2001 1627l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2001 1628l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2000 1629l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2000 1630l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1999 1631l1 1-1-1m-1 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1998 1633l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1997 1634l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1996 1635l1 1-1-1m-1 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1994 1638l1 1-1-1m-1 1l1 1-1-1m-1 1l1 1-1-1m-1 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1989 1642l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1990 1642l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1988 1643l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1987 1644l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1985 1645l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1986 1645l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1984 1646l1 1-1-1m-2 1l1 1-1-1m-2 1l1 1-1-1m-2 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1979 1649l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1975 1650l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1976 1650l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1972 1651l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1973 1651l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1967.67 1652.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1969 1652l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1714 1653v628h1v-610z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1715 1653l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1716 1653v1h246l-23-1h-50z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1962 1653l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1963 1653l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1877 1732v1h92l-28-1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1877 1733v370c0 64.33-4.92 130.98 1.17 195 3.15 33.13 10.51 64.81 22.15 96 3.67 9.85 8.45 27.21 16.32 34.41 5.03 4.61 16.93 4.08 23.36 4.87 25.65 3.15 56.92.01 80-12.28-15.54-25.18-31.53-48.26-40.28-77-10.91-35.83-10.72-70.96-10.72-108v-503z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1622 2273l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1622 2274v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2543 2274v16h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1622 2277l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1622 2278l1 1-1-1m829 0v6h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2197 2280l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2197 2281v9h1l-1-9m-320 2v10h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1969 2283l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1969 2284l1 1-1-1m482 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1969 2285l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2451 2285v7h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1715 2286v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1969.33 2286.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1623 2287v8h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2289 2287v5h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1969 2288v5h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1715 2289l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1715 2290v5h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2543 2290l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2543 2291v3h1l-1-3m-666 2v4h1l-1-4m319 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2196.33 2294.67l.34.66-.34-.66M1623 2295l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2450.33 2295.67l.34.66-.34-.66M1623 2296v3h1l-1-3m347 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2196 2296v4h1l-1-4m92 0v5h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1970.33 2297.67l.34.66-.34-.66M2450 2297l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1716.33 2298.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2450 2298v4h1l-1-4m92 0v5h1l-1-5m-572 1v3h1l-1-3m-254 1v4h1l-1-4m162 0v5h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2288 2301l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1624 2302v4h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2195.33 2302.67l.34.66-.34-.66m93 0l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2542 2303l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2195 2304v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2449 2304l1 1-1-1m93.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1878 2305l1 1-1-1m93.33.67l.34.66-.34-.66M2449 2305l1 1-1-1m-825 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1717 2306l1 1-1-1m161.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2449 2306v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1624.33 2307.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1717 2307l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1971 2307v3h1l-1-3m316 0v4h1l-1-4m-569.67 1.67l.34.66-.34-.66M2541 2308v4h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2194 2309l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1879 2310v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2194 2310l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2448.33 2310.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1625 2311v4h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1972 2311l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2194.33 2311.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2287 2311l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1718 2312l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1972 2312l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2287 2312l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2448 2312l1 1-1-1m93 0l1 1-1-1m-823 1l1 1-1-1m161.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1972.33 2313.67l.34.66-.34-.66m476 0l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2541 2313l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1718.33 2314.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1625 2315l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1879 2315l1 1-1-1m314 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2286 2315v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1625 2316l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2193 2316l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2447 2316l1 1-1-1m-474 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2193.33 2317.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2447 2317l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2540 2317v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1719 2318l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1880 2318v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1973 2318l1 1-1-1m313 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2447.33 2318.67l.34.66-.34-.66M1626 2319v3h1l-1-3m93.33.67l.34.66-.34-.66M1973 2319l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2286.33 2319.67l.34.66-.34-.66m-94.33.33l1 1-1-1m348.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1880 2321l1 1-1-1m312 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2446 2321l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1626 2322l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1720 2322l1 1-1-1m160 0l1 1-1-1m94 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2192.33 2322.67l.34.66-.34-.66m92.67-.67v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2446 2322l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1626 2323l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1720 2323l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1974.33 2323.67l.34.66-.34-.66m472 0l.34.66-.34-.66m92.67-.67v3h1l-1-3m-818.67 1.67l.34.66-.34-.66m-93.33.33v3h1l-1-3m254.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2191 2325l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2285 2325l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2191.33 2326.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2285 2326l1 1-1-1m160 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2539 2326l1 1-1-1m-818 1l1 1-1-1m160 0l1 1-1-1m94 0l1 1-1-1m470 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2539 2327l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1627 2328l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1721.33 2328.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1881 2328l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1975 2328l1 1-1-1m309 0v3h1l-1-3m161 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1627 2329l1 1-1-1m563 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2538 2329v3h1l-1-3m-656 1v3h1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1976 2330l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2190 2330l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2444 2330l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1628.33 2331.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1722 2331l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2190 2331l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2284 2331l1 1-1-1m160 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1722 2332l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2284 2332l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2444 2332l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2538 2332l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1628 2333l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1882 2333l1 1-1-1m307 0l1 1-1-1m-561 1l1 1-1-1m95 0l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2189.33 2334.67l.34.66-.34-.66m94 0l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2443 2334l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1723 2335l1 1-1-1m254 0l1 1-1-1m466 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2537.33 2335.67l.34.66-.34-.66M1723 2336l1 1-1-1m160.33.67l.34.66-.34-.66m93.67-.67l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2283 2336l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2443 2336l1 1-1-1m-813.67 1.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2188 2337l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2283 2337l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2537 2337l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1724 2338l1 1-1-1m159 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1978 2338l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2188 2338l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2442 2338l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1629 2339l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1724.33 2339.67l.34.66-.34-.66M1978 2339l1 1-1-1m304.33.67l.34.66-.34-.66M2442 2339l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2187 2340l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2536.33 2340.67l.34.66-.34-.66m-906 1l.34.66-.34-.66M1884 2341l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1979 2341l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2187 2341l1 1-1-1m95 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2441 2341l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1725 2342l1 1-1-1m159.33.67l.34.66-.34-.66m94.67-.67l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2187 2342l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2441 2342l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2536 2342l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1630 2343l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1725 2343l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2186 2343l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2441 2343l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1630 2344l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2186 2344l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2281 2344l1 1-1-1m254.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1726 2345l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1885.33 2345.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1980 2345l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2186 2345l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2281 2345l1 1-1-1m159 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1631.33 2346.67l.34.66-.34-.66m94.67-.67l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2281 2346l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2440 2346l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2535 2346l1 1-1-1m-650 1l1 1-1-1m300 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2535 2347l1 1-1-1m-904 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1727 2348l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2185 2348l1 1-1-1m95.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2439 2348l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1727 2349l1 1-1-1m254 0l1 1-1-1m458 0l1 1-1-1m95 0l1 1-1-1m-901.67 1.67l.34.66-.34-.66M1886 2350l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2184 2350l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2280 2350l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2534 2350l1 1-1-1m-806 1l1 1-1-1m158 0l1 1-1-1m96 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2184 2351l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2438 2351l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2534 2351l1 1-1-1m-902 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1728 2352l1 1-1-1m551.33.67l.34.66-.34-.66M2438 2352l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1729 2353l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1887.33 2353.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1983 2353l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2183 2353l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2437 2353l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2533 2353l1 1-1-1m-899.67 1.67l.34.66-.34-.66m95.67-.67l1 1-1-1m254 0l1 1-1-1m200 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2279 2354l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2437 2354l1 1-1-1m96 0l1 1-1-1m-646 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2182 2355l1 1-1-1m351 0l1 1-1-1m-900 1l1 1-1-1m97 0l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2182 2356l1 1-1-1m96.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2436 2356l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1730 2357l1 1-1-1m254 0l1 1-1-1m452 0l1 1-1-1m96 0l1 1-1-1m-898 1l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2181 2358l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2278 2358l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2532 2358l1 1-1-1m-898 1l1 1-1-1m97 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1888 2359l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1985 2359l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2181 2359l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2435 2359l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1634 2360l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1731 2360l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2180 2360l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2277 2360l1 1-1-1m158 0l1 1-1-1m96.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1732 2361l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1889 2361l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1986 2361l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2180 2361l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2277 2361l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2434 2361l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1635 2362l1 1-1-1m97 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1889 2362l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1986 2362l1 1-1-1m448 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2531 2362l1 1-1-1m-896 1l1 1-1-1m544 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2276.33 2363.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1733 2364l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2179 2364l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2433 2364l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2530 2364l1 1-1-1m-894 1l1 1-1-1m254 0l1 1-1-1m97 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2178 2365l1 1-1-1m98 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2433 2365l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2530 2365l1 1-1-1m-894 1l1 1-1-1m98 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1890 2366l1 1-1-1m98 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2178 2366l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2432 2366l1 1-1-1m98 0l1 1-1-1m-894 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1734 2367l1 1-1-1m254 0l1 1-1-1m287 0l1 1-1-1m157 0l1 1-1-1m97.33.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1735 2368l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1891 2368l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2177 2368l1 1-1-1m98 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1637 2369l1 1-1-1m98 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1891 2369l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1989 2369l1 1-1-1m442 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2529 2369l1 1-1-1m-892 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2176 2370l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2274 2370l1 1-1-1m-538 1l1 1-1-1m156 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1990 2371l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2176 2371l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2274 2371l1 1-1-1m156 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2528 2371l1 1-1-1m-890 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1892 2372l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2175 2372l1 1-1-1m99 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2430 2372l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2528 2372l1 1-1-1m-890 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1737 2373l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1991 2373l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2175 2373l1 1-1-1m98 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2429 2373l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1893 2374l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2174 2374l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2273 2374l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2429 2374l1 1-1-1m98 0l1 1-1-1m-888 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1738 2375l1 1-1-1m155 0l1 1-1-1m99 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2174 2375l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2273 2375l1 1-1-1m155 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2527 2375l1 1-1-1m-888 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1893 2376l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1992 2376l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2173 2376l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2272 2376l1 1-1-1m156 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1739 2377l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1894 2377l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1993 2377l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2173 2377l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2272 2377l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2427 2377l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2526 2377l1 1-1-1m-886 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1894 2378l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1993 2378l1 1-1-1m434 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2526 2378l1 1-1-1m-886 1l1 1-1-1m100 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1894 2379l1 1-1-1m100 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2172 2379l1 1-1-1m99 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2426 2379l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1895 2380l1 1-1-1m99 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2271 2380l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2426 2380l1 1-1-1m99 0l1 1-1-1m-884 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1741 2381l1 1-1-1m154 0l1 1-1-1m100 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2171 2381l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2271 2381l1 1-1-1m154 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2525 2381l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1641 2382l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1995 2382l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2170 2382l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2270 2382l1 1-1-1m155 0l1 1-1-1m-683 1l1 1-1-1m154 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1996 2383l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2170 2383l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2270 2383l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2424 2383l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2524 2383l1 1-1-1m-882 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1896 2384l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2424 2384l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2524 2384l1 1-1-1m-882 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1743 2385l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1997 2385l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2169 2385l1 1-1-1m100 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2423 2385l1 1-1-1m-679 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1897 2386l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2168 2386l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2269 2386l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2423 2386l1 1-1-1m100 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1643 2387l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1744 2387l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1897 2387l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1998 2387l1 1-1-1m170 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2422 2387l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2523 2387l1 1-1-1m-778 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2167 2388l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2268 2388l1 1-1-1m254 0l1 1-1-1m-878 1l1 1-1-1m101 0l1 1-1-1m153 0l1 1-1-1m101 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2268 2389l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2421 2389l1 1-1-1m101 0l1 1-1-1m-878 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1746 2390l1 1-1-1m152 0l1 1-1-1m102 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2166 2390l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1899 2391l1 1-1-1m101 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2267 2391l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2420 2391l1 1-1-1m101 0l1 1-1-1m-876 1l1 1-1-1m102 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1899 2392l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2001 2392l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2165 2392l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2521 2392l1 1-1-1m-876 1l1 1-1-1m519 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2266 2393l1 1-1-1m153 0l1 1-1-1m-773 1l1 1-1-1m102 0l1 1-1-1m152 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2002 2394l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2164 2394l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2266 2394l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2418 2394l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2520 2394l1 1-1-1m-874 1l1 1-1-1m103 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1900 2395l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2163 2395l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1749 2396l1 1-1-1m254 0l1 1-1-1m262 0l1 1-1-1m152 0l1 1-1-1m102 0l1 1-1-1m-872 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1750 2397l1 1-1-1m151 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2004 2397l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2162 2397l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2416 2397l1 1-1-1m103 0l1 1-1-1m-872 1l1 1-1-1m104 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2004 2398l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2161 2398l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2264 2398l1 1-1-1m152 0l1 1-1-1m-768 1l1 1-1-1m103 0l1 1-1-1m151 0l1 1-1-1m103 0l1 1-1-1m156 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2264 2399l1 1-1-1m151 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2518 2399l1 1-1-1m-870 1l1 1-1-1m104 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2006 2400l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2160 2400l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1903 2401l1 1-1-1m103 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2263 2401l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2414 2401l1 1-1-1m103 0l1 1-1-1m-868 1l1 1-1-1m104 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1903 2402l1 1-1-1m104 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2159 2402l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2413 2402l1 1-1-1m-659 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2158 2403l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2262 2403l1 1-1-1m151 0l1 1-1-1m103 0l1 1-1-1m-866 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1904 2404l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2008 2404l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2262 2404l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2412 2404l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2516 2404l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1650 2405l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1755 2405l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2009 2405l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2157 2405l1 1-1-1m104 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2411 2405l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1651 2406l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1756 2406l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1905 2406l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2156 2406l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2261 2406l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2411 2406l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2515 2406l1 1-1-1m-864 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1905 2407l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2010 2407l1 1-1-1m250 0l1 1-1-1m150 0l1 1-1-1m-653 1l1 1-1-1m149 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2011 2408l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2155 2408l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2260 2408l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2409 2408l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2514 2408l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1652 2409l1 1-1-1m106 0l1 1-1-1m148 0l1 1-1-1m248 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2409 2409l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2514 2409l1 1-1-1m-755 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1907 2410l1 1-1-1m105 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2153 2410l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2259 2410l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2408 2410l1 1-1-1m105 0l1 1-1-1m-860 1l1 1-1-1m106 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1907 2411l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2013 2411l1 1-1-1m140 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2407 2411l1 1-1-1m106 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1760 2412l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2014 2412l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2152 2412l1 1-1-1m106 0l1 1-1-1m254 0l1 1-1-1m-858 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1761 2413l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1908 2413l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2151 2413l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2406 2413l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2512 2413l1 1-1-1m-858 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2015 2414l1 1-1-1m242 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2405 2414l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2511 2414l1 1-1-1m-856 1l1 1-1-1m107 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1909 2415l1 1-1-1m107 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2150 2415l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2404 2415l1 1-1-1m107 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1763 2416l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2017 2416l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2149 2416l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2256 2416l1 1-1-1m254 0l1 1-1-1m-854 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1764 2417l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1910 2417l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2017 2417l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2148 2417l1 1-1-1m108 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2403 2417l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2510 2417l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1656 2418l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2018 2418l1 1-1-1m237 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2402 2418l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1657 2419l1 1-1-1m108 0l1 1-1-1m146 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2019 2419l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2147 2419l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2255 2419l1 1-1-1m146 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2509 2419l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1657 2420l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1766 2420l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2020.33 2420.67l.34.66z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2146 2420l1 1-1-1m108 0l1 1-1-1m-596 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1767 2421l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1912 2421l1 1-1-1m107 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2145 2421l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2400 2421l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2508 2421l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1768 2422l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2017 2422l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2018 2422l1 1-1-1m126 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2253 2422l1 1-1-1m146 0l1 1-1-1m-740 1l1 1-1-1m109 0l1 1-1-1m145 0l1 1-1-1m101 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2015 2423l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2144 2423l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2253 2423l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2398 2423l1 1-1-1m109 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1659 2424l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1769 2424l1 1-1-1m243 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2013 2424l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2143 2424l1 1-1-1m109 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2397 2424l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2506 2424l1 1-1-1m-846 1l1 1-1-1m110 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1914 2425l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2009 2425l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2010 2425l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2142 2425l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2252 2425l1 1-1-1m254 0l1 1-1-1m-846 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1771 2426l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2006 2426l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2007 2426l1 1-1-1m134 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2251 2426l1 1-1-1m254 0l1 1-1-1m-844 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1772 2427l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1915 2427l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2003 2427l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2004 2427l1 1-1-1m136 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2395 2427l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2505 2427l1 1-1-1m-732 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1999 2428l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2000 2428l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2001 2428l1 1-1-1m138 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2250 2428l1 1-1-1m144 0l1 1-1-1m110 0l1 1-1-1m-842 1l1 1-1-1m111 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1916 2429l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1995.67 2429.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1997 2429l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2139 2429l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2393 2429l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2504 2429l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1774 2430l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1918 2430l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1919 2430l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1920.67 2430.33l.66.34-.66-.34m70.33-.33l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1992 2430l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1993 2430l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2138 2430l1 1-1-1m111 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2392 2430l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2503 2430l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1663 2431l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1775 2431l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1923 2431l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1924 2431l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1925.67 2431.33l.66.34-.66-.34m61 0l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1988 2431l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2137 2431l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2391 2431l1 1-1-1m112 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1776 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1928 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1929 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1930 2432v1h3l-3-1m50.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1982 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1983 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2136 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2248 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2502 2432l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1664 2433l1 1-1-1m113 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1935.67 2433.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1937 2433l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1938 2433v1h4l-4-1m33 0v1h4z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1975 2433l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1976 2433l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2135 2433l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2390 2433l1 1-1-1m-725 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1778 2434l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1945 2434v1h4z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1949 2434l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1950 2434v1h13z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1963 2434v1h5z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2134 2434l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2247 2434l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2389 2434l1 1-1-1m112 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1665 2435l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1779 2435l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2133 2435l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2246 2435l1 1-1-1m142 0l1 1-1-1m-722 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1780 2436l1 1-1-1m352 0l1 1-1-1m114 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2387 2436l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2500 2436l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1666 2437l1 1-1-1m115 0l1 1-1-1m350 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2245 2437l1 1-1-1m141 0l1 1-1-1m113 0l1 1-1-1m-832 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1782 2438l1 1-1-1m348 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2385 2438l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2499 2438l1 1-1-1m-716 1l1 1-1-1m346 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2244 2439l1 1-1-1m140 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2498 2439l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1668 2440l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1784 2440l1 1-1-1m344 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2383 2440l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1669 2441l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1785 2441l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2128 2441l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2243 2441l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2382 2441l1 1-1-1m115 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1669 2442l1 1-1-1m117 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2127 2442l1 1-1-1m115 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2381 2442l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2496 2442l1 1-1-1m-826 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1787 2443l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2126 2443l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2242 2443l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2380 2443l1 1-1-1m116 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1788 2444l1 1-1-1m336 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2241 2444l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2379 2444l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2495 2444l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1671 2445l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1789 2445l1 1-1-1m334 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2378 2445l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1672 2446l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1790 2446l1 1-1-1m332 0l1 1-1-1m118 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2377 2446l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2494 2446l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1672 2447l1 1-1-1m119 0l1 1-1-1m330 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2239 2447l1 1-1-1m137 0l1 1-1-1m117 0l1 1-1-1m-820 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1792 2448l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2120 2448l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2375 2448l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2493 2448l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1793 2449l1 1-1-1m326 0l1 1-1-1m119 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2374 2449l1 1-1-1m118 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1674 2450l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1794 2450l1 1-1-1m324 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2237 2450l1 1-1-1m136 0l1 1-1-1m-698 1l1 1-1-1m120 0l1 1-1-1m322 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2237 2451l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1796 2452l1 1-1-1m320 0l1 1-1-1m120 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2370 2452l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2490 2452l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1676 2453l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2115 2453l1 1-1-1m120 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2369 2453l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1677 2454l1 1-1-1m121 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2235 2454l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2368 2454l1 1-1-1m121 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1800 2455l1 1-1-1m312 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2234 2455l1 1-1-1m133 0l1 1-1-1m121 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1678 2456l1 1-1-1m123 0l1 1-1-1m310 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2233 2456l1 1-1-1m133 0l1 1-1-1m-687 1l1 1-1-1m123 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2110 2457l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2233 2457l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2365 2457l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2487 2457l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1803 2458l1 1-1-1m306 0l1 1-1-1m123 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2363 2458l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2486 2458l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1680 2459l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1804 2459l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1805 2459l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2108 2459l1 1-1-1m123 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2362 2459l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1681 2460l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1806 2460l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2106 2460l1 1-1-1m125 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2361 2460l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2485 2460l1 1-1-1m-678 1l1 1-1-1m298 0l1 1-1-1m125 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2360 2461l1 1-1-1m124 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1682 2462l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1808 2462l1 1-1-1m296 0l1 1-1-1m125 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2358 2462l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1683 2463l1 1-1-1m126 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1810 2463l1 1-1-1m292 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2103 2463l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2229 2463l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2357 2463l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2483 2463l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1684 2464l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1811 2464l1 1-1-1m290 0l1 1-1-1m127 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2356 2464l1 1-1-1m126 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1684 2465l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1812 2465l1 1-1-1m288 0l1 1-1-1m127 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2354 2465l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1685 2466l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1813 2466l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1814 2466l1 1-1-1m284 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2099 2466l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2481 2466l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1686 2467l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1815 2467l1 1-1-1m282 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2226 2467l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2352 2467l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2480 2467l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1816 2468l1 1-1-1m280 0l1 1-1-1m129 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2350 2468l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2479 2468l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1687 2469l1 1-1-1m131 0l1 1-1-1m276 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2224 2469l1 1-1-1m125 0l1 1-1-1m-661 1l1 1-1-1m131 0l1 1-1-1m274 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2347 2470l1 1-1-1m131 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1689 2471l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1821 2471l1 1-1-1m270 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2092 2471l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2223 2471l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2346 2471l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2477 2471l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1822 2472l1 1-1-1m268 0l1 1-1-1m132 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2344 2472l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2345 2472l1 1-1-1m131 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1690 2473l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1823 2473l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1824 2473l1 1-1-1m264 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2089 2473l1 1-1-1m132 0l1 1-1-1m122 0l1 1-1-1m-652 1l1 1-1-1m134 0l1 1-1-1m262 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2341 2474l1 1-1-1m134 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1692 2475l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1827 2475l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2085 2475l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2086 2475l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2220 2475l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2340 2475l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2474 2475l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1828 2476l1 1-1-1m256 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2219 2476l1 1-1-1m119 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2473 2476l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1693 2477l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1830 2477l1 1-1-1m252 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2218 2477l1 1-1-1m119 0l1 1-1-1m135 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1694 2478l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1831 2478l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1832 2478l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2081 2478l1 1-1-1m136 0l1 1-1-1m118 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2472 2478l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1695 2479l1 1-1-1m138 0l1 1-1-1m246 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2217 2479l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2333 2479l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2471 2479l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1696 2480l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1835 2480l1 1-1-1m242 0l1 1-1-1m139 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2331 2480l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2332 2480l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2470 2480l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1836 2481l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1837 2481l1 1-1-1m238 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2076 2481l1 1-1-1m139 0l1 1-1-1m115 0l1 1-1-1m139 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1697 2482l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1838 2482l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1839 2482l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2074 2482l1 1-1-1m140 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2328 2482l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2468 2482l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1698 2483l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1840 2483l1 1-1-1m232 0l1 1-1-1m141 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2326 2483l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1699 2484l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1842 2484l1 1-1-1m228 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2324 2484l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2325 2484l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2467 2484l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1700 2485l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1844 2485l1 1-1-1m224 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2212 2485l1 1-1-1m110 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2323 2485l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2466 2485l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1701 2486l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1846 2486l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2066 2486l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2067 2486l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2211 2486l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2321 2486l1 1-1-1m144 0l1 1-1-1m-618 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1848 2487l1 1-1-1m216 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2065 2487l1 1-1-1m145 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2318 2487l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2319 2487l1 1-1-1m145 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1702 2488l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1849 2488l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1850 2488l1 1-1-1m212 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2063 2488l1 1-1-1m146 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2316 2488l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2317 2488l1 1-1-1m146 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1703 2489l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1851 2489l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1852 2489l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2060 2489l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2061 2489l1 1-1-1m147 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2314 2489l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2315 2489l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1704 2490l1 1-1-1m150 0l1 1-1-1m204 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2207 2490l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2312 2490l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2313 2490l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2462 2490l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1705 2491l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1856 2491l1 1-1-1m200 0l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2311 2491l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2461 2491l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1706 2492l1 1-1-1m152 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1859 2492l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2054 2492l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2206 2492l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2308 2492l1 1-1-1m152 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1707 2493l1 1-1-1m153 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1861 2493l1 1-1-1m190 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2052 2493l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2205 2493l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2306 2493l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2459 2493l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1708 2494l1 1-1-1m154 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1863 2494l1 1-1-1m186 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2050 2494l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2204 2494l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2303 2494l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2304 2494l1 1-1-1m154 0l1 1-1-1m-593 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2046 2495l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2047 2495l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2203 2495l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2302 2495l1 1-1-1m155 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1709 2496l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1867 2496l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1868 2496l1 1-1-1m176 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2045 2496l1 1-1-1m157 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2301 2496l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2456 2496l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1710 2497l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1870 2497l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2041 2497l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2042 2497l1 1-1-1m159 0l1 1-1-1m100 0l1 1-1-1m154 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1711 2498l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1872 2498l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1873 2498l1 1-1-1m166 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2040 2498l1 1-1-1m160 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2300 2498l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2454 2498l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1712 2499l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1875 2499l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1876 2499l1 1-1-1m160 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2037 2499l1 1-1-1m162 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2299 2499l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1713 2500l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1878 2500l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1879 2500l1 1-1-1m154 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2034 2500l1 1-1-1m164 0l1 1-1-1m101 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2453 2500l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1714 2501l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1881 2501l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1882 2501l1 1-1-1m148 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2031 2501l1 1-1-1m166 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2298 2501l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2452 2501l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1715 2502l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1884 2502l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1885 2502l1 1-1-1m142 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2028 2502l1 1-1-1m168 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2451 2502l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1716 2503l1 1-1-1m171 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1888 2503l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1889 2503l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2024 2503l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2025 2503l1 1-1-1m272 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2450 2503l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1717 2504l1 1-1-1m173.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1892 2504l1 1-1-1m128 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2021.67 2504.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2195 2504l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2296 2504l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2449 2504l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1718 2505l1 1-1-1m176 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1895 2505l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1896 2505l1 1-1-1m120 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2017 2505l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2018 2505l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2194 2505l1 1-1-1m101 0l1 1-1-1m153 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1719 2506l1 1-1-1m179 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1899 2506l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1900 2506l1 1-1-1m112 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2013 2506l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2014 2506l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2193 2506l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2295 2506l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2447 2506l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1720 2507l1 1-1-1m182.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1904 2507l1 1-1-1m104 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2009.67 2507.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2192 2507l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2294 2507l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2446 2507l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1721 2508l1 1-1-1m185.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1908 2508l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1909 2508l1 1-1-1m94 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2004 2508l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2005 2508l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2191 2508l1 1-1-1m102 0l1 1-1-1m152 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1722 2509l1 1-1-1m189 0v1h3z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1914 2509l1 1-1-1m84 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1999.67 2509.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2190 2509l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1723 2510l1 1-1-1m194 0v1h3z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1920.67 2510.33l.66.34-.66-.34m71 0l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1993 2510v1h3z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2189 2510l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2292 2510l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2443 2510l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1724 2511l1 1-1-1m200 0v1h3z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1927 2511l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1928 2511l1 1-1-1m56 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1985 2511l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1986 2511v1h3z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2188 2511l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2291 2511l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2442 2511l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1725 2512l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1932 2512v1h5z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1937 2512l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1938 2512v1h3l-3-1m34 0v1h4z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1976 2512v1h5l-5-1m210 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2187 2512l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1726 2513l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1946 2513v1h22l-22-1m239 0l1 1-1-1m105 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2440 2513l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1727 2514l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2184 2514l1 1-1-1m105 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2439 2514l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1728 2515l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2183 2515l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2288 2515l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2437 2515l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1729 2516l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2182 2516l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1730 2517l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2181 2517l1 1-1-1m106 0l1 1-1-1m148 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1731 2518l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2180 2518l1 1-1-1m106 0l1 1-1-1m148 0l1 1-1-1m-701 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2179 2519l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2285 2519l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2433 2519l1 1-1-1m-699 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2178 2520l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2432 2520l1 1-1-1m-697 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2177 2521l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2284 2521l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2431 2521l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1736 2522l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2176 2522l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2283 2522l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2430 2522l1 1-1-1m-693 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2174 2523l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2175 2523l1 1-1-1m107 0l1 1-1-1m147 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1738 2524l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2173 2524l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2428 2524l1 1-1-1m-689 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2172 2525l1 1-1-1m109 0l1 1-1-1m145 0l1 1-1-1m-685 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2171 2526l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2280 2526l1 1-1-1m145 0l1 1-1-1m-683 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2170 2527l1 1-1-1m109 0l1 1-1-1m145 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1743 2528l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2169 2528l1 1-1-1m109 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2423 2528l1 1-1-1m-679 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2167 2529l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2422 2529l1 1-1-1m-677 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2166 2530l1 1-1-1m111 0l1 1-1-1m143 0l1 1-1-1m-673 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2165 2531l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2276 2531l1 1-1-1m143 0l1 1-1-1m-671 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2164 2532l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2275 2532l1 1-1-1m143 0l1 1-1-1m-669 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2162 2533l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2274 2533l1 1-1-1m143 0l1 1-1-1m-667 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2161 2534l1 1-1-1m254 0l1 1-1-1m-663 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2160 2535l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2273 2535l1 1-1-1m141 0l1 1-1-1m-661 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2159 2536l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2272 2536l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2413 2536l1 1-1-1m-659 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2157 2537l1 1-1-1m114 0l1 1-1-1m140 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2412 2537l1 1-1-1m-657 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1756 2538l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2156 2538l1 1-1-1m114 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2410 2538l1 1-1-1m-653 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2155 2539l1 1-1-1m114 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2409 2539l1 1-1-1m-651 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2153 2540l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2268 2540l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2407 2540l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2408 2540l1 1-1-1m-649 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1760 2541l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2152 2541l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2406 2541l1 1-1-1m-645 1l1 1-1-1m389 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2151 2542l1 1-1-1m254 0l1 1-1-1m-643 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2149 2543l1 1-1-1m117 0l1 1-1-1m137 0l1 1-1-1m-639 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2148 2544l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2265 2544l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2402 2544l1 1-1-1m-637 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2146 2545l1 1-1-1m118 0l1 1-1-1m136 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2401 2545l1 1-1-1m-635 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1767 2546l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2145 2546l1 1-1-1m118 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2399 2546l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1768 2547l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2143 2547l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2144 2547l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2262 2547l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2397 2547l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2398 2547l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1770 2548l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2142 2548l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2261 2548l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2396 2548l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1771 2549l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2140 2549l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2141 2549l1 1-1-1m119 0l1 1-1-1m135 0l1 1-1-1m-623 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1773 2550l1 1-1-1m366 0l1 1-1-1m254 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1774 2551l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2137 2551l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2138 2551l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2391 2551l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2392 2551l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1776 2552l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2136 2552l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2258 2552l1 1-1-1m132 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1777 2553l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2134 2553l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2135 2553l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2257 2553l1 1-1-1m131 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2389 2553l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1779 2554l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2133 2554l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2256 2554l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2387 2554l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1780 2555l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2131 2555l1 1-1-1m124 0l1 1-1-1m130 0l1 1-1-1m-603 1l1 1-1-1m347 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2130 2556l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2254 2556l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2384 2556l1 1-1-1m-601 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1784 2557l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2128 2557l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2253 2557l1 1-1-1m129 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1785 2558l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2126 2558l1 1-1-1m126 0l1 1-1-1m128 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2381 2558l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1787 2559l1 1-1-1m337 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2125 2559l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2251 2559l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2379 2559l1 1-1-1m-591 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1789 2560l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2123 2560l1 1-1-1m127 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2377 2560l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1790 2561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1791 2561l1 1-1-1m330 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2249 2561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2375 2561l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1792 2562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2119 2562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2248 2562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2373 2562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2374 2562l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1794 2563l1 1-1-1m323 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2118 2563l1 1-1-1m129 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2372 2563l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1796 2564l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2116 2564l1 1-1-1m130 0l1 1-1-1m124 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1797 2565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1798 2565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2114 2565l1 1-1-1m131 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2368 2565l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1799 2566l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1800 2566l1 1-1-1m312 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2244 2566l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2366 2566l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1801 2567l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1802 2567l1 1-1-1m308 0l1 1-1-1m133 0l1 1-1-1m121 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2365 2567l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1803 2568l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2108 2568l1 1-1-1m134 0l1 1-1-1m120 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1805 2569l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2106 2569l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2107 2569l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2241 2569l1 1-1-1m119 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2361 2569l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1807 2570l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2104 2570l1 1-1-1m136 0l1 1-1-1m118 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2359 2570l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1809 2571l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2102 2571l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2103 2571l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2239 2571l1 1-1-1m117 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1811 2572l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1812 2572l1 1-1-1m288 0l1 1-1-1m138 0l1 1-1-1m116 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1813 2573l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1814 2573l1 1-1-1m284 0l1 1-1-1m139 0l1 1-1-1m115 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2353 2573l1 1-1-1m-538 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1816 2574l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2096 2574l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2236 2574l1 1-1-1m114 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1817 2575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1818 2575l1 1-1-1m275 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2094 2575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2235 2575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2348 2575l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1820 2576l1 1-1-1m271 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2092 2576l1 1-1-1m141 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2345 2576l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2346 2576l1 1-1-1m-524 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1823 2577l1 1-1-1m266 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2090 2577l1 1-1-1m142 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2343 2577l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2344 2577l1 1-1-1m-520 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1825 2578l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2087 2578l1 1-1-1m144 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2341 2578l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2342 2578l1 1-1-1m-516 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1827 2579l1 1-1-1m257 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2085 2579l1 1-1-1m145 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2338 2579l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2339 2579l1 1-1-1m-510 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1830 2580l1 1-1-1m252 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2083 2580l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2229 2580l1 1-1-1m107 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2337 2580l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1832 2581l1 1-1-1m247 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2080 2581l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2228 2581l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2334 2581l1 1-1-1m-500 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1835 2582l1 1-1-1m242 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2078 2582l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2227 2582l1 1-1-1m104 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2332 2582l1 1-1-1m-496 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1837 2583l1 1-1-1m237 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2075 2583l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2226 2583l1 1-1-1m102 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2329 2583l1 1-1-1m-490 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1840 2584l1 1-1-1m231 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2072 2584l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2073 2584l1 1-1-1m151 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2326 2584l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2327 2584l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1842 2585l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1843 2585l1 1-1-1m226 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2070 2585l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2223 2585l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2323 2585l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2324 2585l1 1-1-1m-479 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1846 2586l1 1-1-1m220 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2067 2586l1 1-1-1m155 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2320 2586l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2321 2586l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1848 2587l1 1-1-1m215 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2064 2587l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2221 2587l1 1-1-1m96 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2318 2587l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1850 2588l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1851 2588l1 1-1-1m209 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2061 2588l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2220 2588l1 1-1-1m94 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2315 2588l1 1-1-1m-461 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1855 2589l1 1-1-1m202 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2058 2589l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2218 2589l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2219 2589l1 1-1-1m92 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2312 2589l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1856 2590l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1857 2590l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1858 2590l1 1-1-1m196 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2055 2590l1 1-1-1m162 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2308 2590l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2309 2590l1 1-1-1m-449 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1861 2591l1 1-1-1m189.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2052 2591l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2216 2591l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2305 2591l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2306 2591l1 1-1-1m-443 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1864.67 2592.33l.66.34-.66-.34M2047 2592l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2048 2592l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2215 2592l1 1-1-1m86 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2302 2592l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2303 2592l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1867 2593l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1868 2593l1 1-1-1m176 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2045 2593l1 1-1-1m168 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2214 2593l1 1-1-1m83.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2299 2593l1 1-1-1m-429 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1871 2594l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1872 2594l1 1-1-1m167.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2041 2594l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2212 2594l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2294 2594l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2295 2594l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1874 2595l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1875 2595l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1876 2595l1 1-1-1m159.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2037 2595l1 1-1-1m174 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2290 2595l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2291 2595l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2292 2595l1 1-1-1m-414 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1879 2596l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1880 2596l1 1-1-1m151.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2033 2596l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2210 2596l1 1-1-1m75.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2287 2596l1 1-1-1m-404 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1884.67 2597.33l.66.34-.66-.34m143 0l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2029 2597l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2208 2597l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2209 2597l1 1-1-1m72.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2283 2597l1 1-1-1m-396 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1888 2598l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1889 2598l1 1-1-1m133.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2024 2598l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2025 2598l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2207 2598l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2276.67 2598.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2278 2598l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2279 2598l1 1-1-1m-387 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1893 2599l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1894.67 2599.33l.66.34-.66-.34m123 0l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2019 2599l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2206 2599l1 1-1-1m65.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2273 2599l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2274 2599l1 1-1-1m-377 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1898 2600l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1899 2600v1h3l-3-1m112.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2013 2600l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2014 2600l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2205 2600l1 1-1-1m60 0v1h3z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2268 2600l1 1-1-1m-365 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1904 2601l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1905 2601v1h3l-3-1m100.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2007 2601l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2008 2601l1 1-1-1m195 0l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2259.67 2601.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2261 2601l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2262 2601l1 1-1-1m-352 1l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1911 2602l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1912 2602v1h3l-3-1m85 0v1h4z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2001 2602l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2002 2602l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2202 2602l1 1-1-1m49 0v1h4z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2255.67 2602.33l.66.34-.66-.34m-337 1l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1920 2603v1h5l-5-1m68 0v1h4z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1992 2603l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1993.67 2603.33l.66.34-.66-.34M2200 2603l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2201 2603l1 1-1-1m41 0v1h4z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2246 2603l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2247.67 2603.33l.66.34-.66-.34m-319 1l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1930 2604l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1931 2604v1h7l-7-1m43 0v1h7z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1981 2604l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M1982 2604v1h3z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2199 2604l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2228 2604v1h8z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2236 2604v1h3l-3-1m-292 1v1h24l-24-1m255.67.33l.66.34z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2201 2605l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2202 2605v1h18z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2220 2605l1 1z"></motion.path>
                        <motion.path
                            variants={fillColor} d="M2221.67 2605.33l.66.34z"></motion.path>
                    </g>
                    <motion.path
                        variants={fillColor} fill="#4b4b4b" stroke="none" d="M2073.228 2023.614l1 1z"></motion.path>
                </motion.svg>



            </motion.div>

            <div className='flex-1 flex items-end justify-end sm:items-stretch sm:justify-end'>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`relative ${currentRoute.includes(nav.id) ? "text-violet-500" : "text-secondary"
                                } hover:text-purple-500  text-[18px] font-medium cursor-pointer`}
                            onMouseEnter={() => {
                                setActive(nav.title);
                                if (nav.id === "project") {
                                    setShowDropdown(true);
                                }
                            }}
                            onMouseLeave={() => {
                                setActive(null);
                                if (nav.id === "project") {
                                    setShowDropdown(false);
                                }
                            }}
                        >
                            <a href={`${nav.id}`}>{nav.title}</a>
                            {nav.id === "project" && nav.submenus && nav.submenus.length > 0 && (
                                <ul
                                    className={`submenus absolute z-10 top-full text-white left-0 bg-black py-2 px-4 shadow-md w-36 rounded-lg opacity-0 ${showDropdown ? "opacity-100" : ""
                                        } transition-all duration-300`}
                                >
                                    {nav.submenus.map((submenu) => (
                                        <li key={submenu.id} className="hover:text-violet-500">
                                            <a href={submenu.link}>{submenu.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>




                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={!toggle ? menu : close}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (

                                <li key={nav.id}
                                    className={`${active === nav.title ? "text-violet-500" : "text-secondary"
                                        } hover:text-purple-500 text-[18px] font-medium cursor-pointer`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`${nav.id}`}>{nav.title}</a>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>



            {/* <div className='flex-1 flex items-end justify-end sm:items-stretch sm:justify-end'>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => {
                        if (nav.submenus.length > 0) {
                            return (
                                <li key={nav.id}
                                    className={`${currentRoute.includes(nav.id) ? "text-violet-500" : "text-secondary"
                                        } hover:text-purple-500  text-[18px] font-medium cursor-pointer`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`${nav.id}`}>{nav.title}</a>
                                    <ul className='absolute top-12 left-0 z-10 bg-white py-2 rounded-xl shadow-lg'>
                                        {nav.submenus.map((submenu) => (
                                            <li
                                                key={submenu.title}
                                                className='text-secondary hover:text-purple-500 px-4 py-2 cursor-pointer'
                                            >
                                                <a href={submenu.link}>{submenu.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )
                        } else {
                            return (
                                <li
                                    key={nav.id}
                                    className={`${currentRoute.includes(nav.id) ? "text-violet-500" : "text-secondary"
                                        } hover:text-purple-500  text-[18px] font-medium cursor-pointer`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            )
                        }
                    })}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={!toggle ? menu : close}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (

                                <li key={nav.id}
                                    className={`${active === nav.title ? "text-violet-500" : "text-secondary"
                                        } hover:text-purple-500 text-[18px] font-medium cursor-pointer`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`${nav.id}`}>{nav.title}</a>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div> */}
        </nav>
    );
};

export default Navbar;