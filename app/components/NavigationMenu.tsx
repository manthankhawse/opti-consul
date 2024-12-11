"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import {
  Beaker,
  Droplet,
  FlaskRoundIcon as Flask,
  Sandwich,
  PaintBucket,
  SprayCanIcon as Spray,
} from "lucide-react";

const components: {
  icon: JSX.Element;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    icon: <Sandwich className="h-8 w-8 text-blue-500" />,
    title: "Food Industry",
    href: "/services/food-industry",
    description:
      "Optimization and compliance solutions for food processing and manufacturing.",
  },
  {
    icon: <PaintBucket className="h-8 w-8 text-green-500" />,
    title: "Paints & Coatings",
    href: "/services/paints-and-coatings",
    description:
      "Consultancy for paint formulation, quality control, and regulatory compliance.",
  },
  {
    icon: <Droplet className="h-8 w-8 text-yellow-500" />,
    title: "Oil & Gas",
    href: "/services/oil-and-gas",
    description:
      "Optimization services for crude oil processing and natural gas extraction.",
  },
  {
    icon: <Flask className="h-8 w-8 text-purple-500" />,
    title: "FMCG",
    href: "/services/fmcg",
    description:
      "Compliance and optimization for fast-moving consumer goods production.",
  },
  {
    icon: <Spray className="h-8 w-8 text-red-500" />,
    title: "Surface Coating",
    href: "/services/surface-coating",
    description:
      "Advanced solutions for industrial and consumer surface coating applications.",
  },
  {
    icon: <Beaker className="h-8 w-8 text-indigo-500" />,
    title: "Chemical Derivatives",
    href: "/services/chemical-derivatives",
    description:
      "Consultancy for optimizing processes in chemical derivative production.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg font-medium">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Strategy Development">
                Tailored strategies for optimizing operations and ensuring
                compliance in the chemical industry.
              </ListItem>
              <ListItem href="/docs" title="Human Capital Consulting">
                Expertise in workforce optimization and compliance across
                various chemical industry sectors.
              </ListItem>
              <ListItem
                href="/docs/installation"
                title="Strategy and Transformation"
              >
                Transforming business processes to meet industry regulations and
                maximize operational efficiency.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Data Analytics"
              >
                Leveraging data insights to drive decision-making and ensure
                regulatory compliance in production processes.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
