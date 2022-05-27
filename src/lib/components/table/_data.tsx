import { Badge } from "@chakra-ui/react";
import * as React from "react";
import { User } from "./User";

export const data = [
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
  {
    region: "Orange country",
    submarket: "West Irvine",
    building_name: "Jamboree Business Park I & II",
    product_type: "Manufacturing",
    nra: "1,47,16",
    address: "14350 Myford Road",
    year_built: "1998",
    firs: "2",
    property_name: "Jamboree Business Park I & II",
  },
];

const badgeEnum: Record<string, string> = {
  active: "green",
  reviewing: "orange",
  declined: "red",
};

export const columns = [
  {
    Header: "Region",
    accessor: "region",
  },
  {
    Header: "Submarket",
    accessor: "submarket",
  },
  {
    Header: "Building Name",
    accessor: "building_name",
  },
  {
    Header: "Product type",
    accessor: "product_type",
  },
  {
    Header: "NRA",
    accessor: "nra",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Year Built",
    accessor: "year_built",
  },
  {
    Header: "# of firs",
    accessor: "firs",
  },
  {
    Header: "Property Name",
    accessor: "property_name",
  },
];
