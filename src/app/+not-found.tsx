import BigLoader from "@/components/BigLoader";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";

const NotFoundScreen = () => {
  const { isSignedIn, userId, isLoaded } = useAuth();
  const [readyToLoad, setReadyToLoad] = useState(false);

  useEffect(() => {
    if (isLoaded && isSignedIn && userId) {
      setReadyToLoad(true);
    }
  }, [userId, isSignedIn, isLoaded]);

  return <>{readyToLoad ? <Redirect href={"/"} /> : <BigLoader />}</>;
};

export default NotFoundScreen;
