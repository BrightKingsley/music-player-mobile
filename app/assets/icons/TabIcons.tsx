import { styled } from "nativewind";
import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] });

export const Headset = ({ fill, stroke, ...props }: SvgProps) => {
  return (
    // /* <Svg width={24} height={24} {...props}>
    //   <Path fill="none" d="M0 0h24v24H0z" />
    //   <StyledPath
    //     d="M4 12h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 1 0-16 0z"
    //     fill={fill}
    //   />
    // </Svg>
    <Svg width={24} height={24} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <StyledPath
        d="M12 4a8 8 0 0 0-8 8h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 0 0-8-8zM4 14v5h3v-5H4zm13 0v5h3v-5h-3z"
        fill={fill}
      />
    </Svg>
  );
};

export const Disc = ({ fill, stroke, ...props }: SvgProps) => {
  return (
    // <Svg width={24} height={24} {...props}>
    //   <Path fill="none" d="M0 0h24v24H0z" />
    //   <StyledPath
    //     d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.337 0 .671.017 1 .05v7.12z"
    //     fill={fill}
    //   />
    // </Svg>
    <Svg width={24} height={24} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <StyledPath
        d="M15 4.582V12a3 3 0 1 1-2-2.83V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 3-15.418z"
        fill={fill}
      />
    </Svg>
  );
};

export const Library = ({ fill, stroke, ...props }: SvgProps) => {
  return (
    // <Svg width={24} height={24} {...props}>
    //   <Path fill="none" d="M0 0h24v24H0z" />
    //   <StyledPath
    //     d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM11 13.05a2.5 2.5 0 1 0 2 2.45V11h3V9h-5v4.05z"
    //     fill={fill}
    //   />

    // </Svg>

    <Svg width={24} height={24} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <StyledPath
        d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 8.05V9h5v2h-3v4.5a2.5 2.5 0 1 1-2-2.45z"
        fill={fill}
      />
    </Svg>
  );
};
