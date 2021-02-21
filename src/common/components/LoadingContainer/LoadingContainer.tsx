import React from "react";
// import { View, Text, ActivityIndicator } from "react-native";

export interface LoadingContainerProps {
  isLoading: boolean;
  message: string | null;
}

const LoadingContainer: React.SFC<LoadingContainerProps> = props => {
  if (props.isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (props.message) {
    return (
      <div>
        <p>{props.message}</p>
      </div>
    );
  }

  return <>{props.children}</>;
};

export default LoadingContainer;
