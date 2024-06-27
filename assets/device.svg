import * as React from "react";
import type { SVGProps } from "react";

interface Device {
  name: string;
  width: number;
  height: number;
  rx: number;
}

type OPTION_COLOR = "light" | "dark";

const devices: Device[] = [
   { name: "iphone-11", width: 519, height: 1000, rx: 88 },
  { name: "iphone-11-pro", width: 513, height: 1000, rx: 86 },
  { name: "iphone-11-pro-max", width: 508, height: 1000, rx: 78 },
  { name: "iphone-12", width: 506, height: 1000, rx: 86 },
  { name: "iphone-12-mini", width: 508, height: 1000, rx: 86 },
  { name: "iphone-12-pro", width: 506, height: 1000, rx: 86 },
  { name: "iphone-12-pro-max", width: 503, height: 1000, rx: 86 },
  { name: "iphone-13", width: 505, height: 1000, rx: 86 },
  { name: "iphone-13-mini", width: 509, height: 1000, rx: 86 },
  { name: "iphone-13-pro", width: 506, height: 1000, rx: 86 },
  { name: "iphone-13-pro-max", width: 502, height: 1000, rx: 86 },
  { name: "iphone-14", width: 507, height: 1000, rx: 86.382 },
  { name: "iphone-14-plus", width: 503, height: 1000, rx: 86 },
  { name: "iphone-14-pro", width: 502, height: 1000, rx: 92 },
  { name: "iphone-14-pro-max", width: 500, height: 1000, rx: 86 },
  { name: "iphone-15", width: 503, height: 1000, rx: 92 },
  { name: "iphone-15-plus", width: 501, height: 1000, rx: 86 },
  { name: "iphone-15-pro", width: 500, height: 1000, rx: 86 },
  { name: "iphone-15-pro-max", width: 499, height: 1000, rx: 86 },
  { name: "iphone-se-2022", width: 505, height: 1000, rx: 86 },
  // Add other devices here
  { name: "samsung-s21", width: 488, height: 1000, rx: 61 },
  { name: "samsung-s21-ultra", width: 475, height: 1000, rx: 54 },
  { name: "samsung-s22", width: 498, height: 1000, rx: 68 },
  { name: "samsung-s22-ultra", width: 490, height: 1000, rx: 12 },
  { name: "samsung-s23", width: 505, height: 1000, rx: 75 },
  { name: "samsung-s23-ultra", width: 497, height: 1000, rx: 12 },
  { name: "xiaomi-12", width: 506, height: 1000, rx: 48 },
  { name: "xiaomi-12-pro", width: 473, height: 1000, rx: 52 },
  { name: "xiaomi-13-pro", width: 468, height: 1000, rx: 46 }
];

const SvgDeviceBg = (props: SVGProps<SVGSVGElement> & { device: string; fill: OPTION_COLOR }) => {
  const { device, colorVariant, ...rest } = props;

  const fill = fill === "dark" ? "#FFF" : "#000";

  const foundDevice = devices.find((d) => d.name === device);

  if (!foundDevice) {
    console.warn(`Device '${device}' not found. Using default values.`);
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={500} height={1000} fill="{fill}" {...rest}>
        <rect width={492} height={1000} x={4} fill="currentColor" rx={80} />
      </svg>
    );
  }

  const { width, height, rx } = foundDevice;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill={fill}
      {...rest}
    >
      <rect width={width - 8} height={height} x={4} fill={currentColor} rx={rx} />
    </svg>
  );
};

export default SvgDeviceBg;
