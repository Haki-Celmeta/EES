import React from "react";
import StepRight from "./Step-right";
import StepLeft from "./Step-left";
import "./_process-steps.scss";

const ProcessSteps = () => {
  return (
    <div className="processSteps-container">
      <StepRight stepNumber="01">
        Vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut placerat orci nulla pellentesque nulla pellentesque.
      </StepRight>
      <StepLeft stepNumber="02">
        Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at
        elementum eu facilisis sed
      </StepLeft>
      <StepRight stepNumber="03">
        Vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut placerat orci nulla pellentesque nulla pellentesque.
      </StepRight>
      <StepLeft stepNumber="04">
        Vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut placerat orci nulla pellentesque nulla pellentesque.
      </StepLeft>
      <StepRight stepNumber="05">
        Vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut placerat orci nulla pellentesque nulla pellentesque.
      </StepRight>
      <StepLeft stepNumber="06">
        Vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut placerat orci nulla pellentesque nulla pellentesque.
      </StepLeft>
    </div>
  )
}

export default ProcessSteps;