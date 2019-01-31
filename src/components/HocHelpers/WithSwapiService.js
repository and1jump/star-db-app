import React from "react";
import { SwapiServiceConsumer } from "../SwapiServiceContext";

const withSwapiService = Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          return <Wrapped {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
