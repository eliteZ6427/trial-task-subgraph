import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";


export type Swap = {
  token0: any,
  token1: any,
  token0Price: number,
  token1Price: number,
  totalValueLockedUSD: number,
  txCount: number,
  liquidity: number,
  liquidityProviderCount: number
}

export const navItems: NavItem[] = [
  // {
  //   title: "All",
  //   href: "/dashboard",
  //   label: "Dashboard",
  // },
  {
    title: "Uniswap",
    href: "/dashboard/uniswap",
    label: "Uniswap",
  },
  {
    title: "PancakeSwap",
    href: "/dashboard/pancakeswap",
    label: "Pancakeswap",
  },
];
